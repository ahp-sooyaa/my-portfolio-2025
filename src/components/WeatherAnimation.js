import React, { useEffect, useRef, useState } from 'react';
import SnowAnimation from './weather-animations/SnowAnimation';
import RainAnimation from './weather-animations/RainAnimation';
import ClearSkyAnimation from './weather-animations/ClearSkyAnimation';
import {
    getUserLocation,
    fetchWeatherData,
    getAnimationType,
    getCachedWeather,
    setCachedWeather,
    getGeolocationPermission,
    setGeolocationPermission
} from '../utils/weatherUtils';

const WeatherAnimation = () => {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const animationFrameRef = useRef(null);
    const [isEnabled, setIsEnabled] = useState(true);
    const [animationType, setAnimationType] = useState('clear'); // Changed default to clear - no flashing
    const isBrowser = typeof window !== 'undefined';

    useEffect(() => {
        if (!isBrowser) return;

        // Check user preference
        const savedPreference = localStorage.getItem('weatherAnimationEnabled');
        if (savedPreference !== null) {
            setIsEnabled(savedPreference === 'true');
        }

        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            setIsEnabled(false);
        }
    }, [isBrowser]);

    useEffect(() => {
        if (!isBrowser || !isEnabled) return;

        const initWeather = async () => {
            try {
                // Check permission state first
                const permissionState = getGeolocationPermission();

                // If previously denied, don't request again - just use default animation
                if (permissionState === 'denied') {
                    console.log('Geolocation was previously denied. Using default animation.');
                    return;
                }

                // Check cache first
                const cachedWeather = getCachedWeather();
                if (cachedWeather) {
                    const type = getAnimationType(cachedWeather.condition, cachedWeather.isDay);
                    setAnimationType(type);
                    return;
                }

                // Only request geolocation if not denied before
                try {
                    // Get user location
                    const location = await getUserLocation();

                    // Mark permission as granted
                    setGeolocationPermission('granted');

                    // Fetch weather data
                    const apiKey = process.env.GATSBY_WEATHER_API_KEY;
                    const weatherData = await fetchWeatherData(
                        apiKey,
                        location.latitude,
                        location.longitude
                    );

                    // Cache the weather data
                    setCachedWeather(weatherData);

                    // Determine animation type
                    const type = getAnimationType(weatherData.condition, weatherData.isDay);
                    setAnimationType(type);
                } catch (locationError) {
                    // Check if it was permission denied
                    if (locationError.code === 1) { // PERMISSION_DENIED
                        console.log('Geolocation permission denied by user.');
                        setGeolocationPermission('denied');
                    } else {
                        console.log('Error getting location:', locationError.message);
                    }
                    // Use default animation (clear sky)
                }

            } catch (error) {
                console.log('Using default animation due to:', error.message);
                // Default to clear sky animation on error (no flashing)
            }
        };

        initWeather();
    }, [isBrowser, isEnabled]);

    useEffect(() => {
        if (!isBrowser || !isEnabled) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        // Initialize the appropriate animation
        switch (animationType) {
            case 'snow':
                animationRef.current = new SnowAnimation(canvas);
                break;
            case 'rain':
                animationRef.current = new RainAnimation(canvas);
                break;
            case 'clear':
                animationRef.current = new ClearSkyAnimation(canvas);
                break;
            default:
                animationRef.current = new ClearSkyAnimation(canvas);
        }

        // Animation loop
        const animate = () => {
            if (animationRef.current) {
                animationRef.current.animate();
            }
            animationFrameRef.current = requestAnimationFrame(animate);
        };
        animate();

        // Handle window resize
        const handleResize = () => {
            if (animationRef.current) {
                animationRef.current.resize();
                animationRef.current.createParticles();
            }
        };
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            if (animationRef.current) {
                animationRef.current.destroy();
            }
            window.removeEventListener('resize', handleResize);
        };
    }, [isBrowser, isEnabled, animationType]);

    if (!isBrowser || !isEnabled) return null;

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 9999
            }}
        />
    );
};

export default WeatherAnimation;

