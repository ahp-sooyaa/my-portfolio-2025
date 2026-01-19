import React, { useState, useEffect } from 'react';
import { getCachedWeather, getAnimationType } from '../utils/weatherUtils';

const WeatherContext = () => {
    const [weatherMessage, setWeatherMessage] = useState('');
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch - only render after mount
    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const updateWeatherMessage = () => {
            const cachedWeather = getCachedWeather();

            if (!cachedWeather) {
                setWeatherMessage('');
                return;
            }

            const { location, temp, description, condition, isDay } = cachedWeather;
            const animationType = getAnimationType(condition, isDay);

            // Generate context-aware messages based on weather type
            let message;

            switch (animationType) {
                case 'snow':
                    message = `❄️ Snow reported near ${location} — Stay warm!`;
                    break;

                case 'rain':
                    if (description.toLowerCase().includes('heavy')) {
                        message = `🌧️ Heavy rain in ${location} — Plan a cozy break ☕`;
                    } else if (description.toLowerCase().includes('light')) {
                        message = `🌦️ Light rain in ${location} — Perfect reading weather 📚`;
                    } else {
                        message = `🌧️ Rain on the way in ${location} — Plan a cozy break ☕`;
                    }
                    break;

                case 'clear':
                    if (isDay) {
                        if (temp > 25) {
                            message = `☀️ Beautiful sunny day in ${location}! Perfect weather outside.`;
                        } else if (temp > 15) {
                            message = `🌤️ Looks like a beautiful day in ${location}!`;
                        } else {
                            message = `🌤️ Clear skies in ${location} — Crisp and refreshing!`;
                        }
                    } else {
                        message = `✨ Clear night in ${location} — Perfect for stargazing!`;
                    }
                    break;

                default:
                    // Fallback for any other conditions
                    if (temp > 30) {
                        message = `🌡️ Warm day in ${location} (${Math.round(temp)}°C)`;
                    } else if (temp < 5) {
                        message = `🧊 Chilly in ${location} (${Math.round(temp)}°C) — Stay warm!`;
                    } else {
                        message = `🌍 Weather in ${location}: ${description}`;
                    }
            }

            setWeatherMessage(message);
        };

        // Update immediately
        updateWeatherMessage();

        // Listen for localStorage changes (when weather data is cached)
        const handleStorageChange = (e) => {
            if (e.key === 'weatherData' || e.key === null) {
                // Weather data was updated or storage was cleared
                updateWeatherMessage();
            }
        };

        // Listen for storage events from other tabs/windows
        window.addEventListener('storage', handleStorageChange);

        // Also listen for custom event for same-tab updates
        const handleWeatherUpdate = () => {
            updateWeatherMessage();
        };
        window.addEventListener('weatherDataUpdated', handleWeatherUpdate);

        // Update every 5 seconds initially to catch new data quickly
        const quickInterval = setInterval(updateWeatherMessage, 5 * 1000);

        // Variable to hold the slow interval reference
        let slowInterval = null;

        // After 30 seconds, switch to checking every 5 minutes
        const slowCheckTimeout = setTimeout(() => {
            clearInterval(quickInterval);
            slowInterval = setInterval(updateWeatherMessage, 5 * 60 * 1000);
        }, 30 * 1000);

        return () => {
            clearInterval(quickInterval);
            clearTimeout(slowCheckTimeout);
            if (slowInterval) {
                clearInterval(slowInterval);
            }
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('weatherDataUpdated', handleWeatherUpdate);
        };
    }, [mounted]);

    // Don't render on server or before mount to prevent hydration mismatch
    if (!mounted || !weatherMessage) return null;

    return (
        <p className="text-xs font-normal dark:text-muted-dark text-muted-light mt-2 opacity-75">
            {weatherMessage}
        </p>
    );
};

export default WeatherContext;

