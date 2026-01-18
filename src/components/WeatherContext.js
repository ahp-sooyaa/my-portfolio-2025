import React, { useState, useEffect } from 'react';
import { getCachedWeather, getAnimationType } from '../utils/weatherUtils';

const WeatherContext = () => {
    const [weatherMessage, setWeatherMessage] = useState('');
    const isBrowser = typeof window !== 'undefined';

    useEffect(() => {
        if (!isBrowser) return;

        const updateWeatherMessage = () => {
            const cachedWeather = getCachedWeather();

            if (!cachedWeather) {
                setWeatherMessage('');
                return;
            }

            const { location, temp, description, condition, isDay } = cachedWeather;
            const animationType = getAnimationType(condition, isDay);

            // Generate context-aware messages based on weather type
            let message = '';

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

        // Update every 5 minutes to check for changes
        const interval = setInterval(updateWeatherMessage, 5 * 60 * 1000);

        return () => clearInterval(interval);
    }, [isBrowser]);

    if (!weatherMessage) return null;

    return (
        <p className="text-xs font-normal dark:text-muted-dark text-muted-light mt-2 opacity-75">
            {weatherMessage}
        </p>
    );
};

export default WeatherContext;

