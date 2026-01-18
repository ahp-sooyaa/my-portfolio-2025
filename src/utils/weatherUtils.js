// WeatherAPI condition code mappings
// Full list: https://www.weatherapi.com/docs/weather_conditions.json
export const getAnimationType = (conditionCode, isDay) => {
    // Snow conditions
    if ([1066, 1114, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258, 1279, 1282].includes(conditionCode)) {
        return 'snow';
    }

    // Rain conditions
    if ([1063, 1150, 1153, 1168, 1171, 1180, 1183, 1186, 1189, 1192, 1195, 1198, 1201, 1240, 1243, 1246, 1249, 1252, 1273, 1276].includes(conditionCode)) {
        return 'rain';
    }

    // Cloudy conditions - disabled, showing clear sky instead
    // if ([1003, 1006, 1009, 1030, 1135, 1147].includes(conditionCode)) {
    //     return 'clouds';
    // }

    // Clear/Sunny - code 1000 (also used for cloudy conditions)
    return 'clear';
};

export const fetchWeatherData = async (apiKey, latitude, longitude) => {
    try {
        const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}&aqi=no`
        );

        if (!response.ok) {
            throw new Error('Weather API request failed');
        }

        const data = await response.json();

        return {
            condition: data.current.condition.code,
            isDay: data.current.is_day === 1,
            location: `${data.location.name}, ${data.location.country}`,
            temp: data.current.temp_c,
            description: data.current.condition.text
        };
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
};

export const getUserLocation = () => {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject(new Error('Geolocation is not supported by this browser'));
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                resolve({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
            },
            (error) => {
                reject(error);
            },
            {
                timeout: 10000,
                enableHighAccuracy: false
            }
        );
    });
};

// Cache management
const CACHE_KEY = 'weatherData';
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes

export const getCachedWeather = () => {
    if (typeof window === 'undefined') return null;

    try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (!cached) return null;

        const { data, timestamp } = JSON.parse(cached);
        const now = Date.now();

        if (now - timestamp > CACHE_DURATION) {
            localStorage.removeItem(CACHE_KEY);
            return null;
        }

        return data;
    } catch (error) {
        console.error('Error reading cached weather:', error);
        return null;
    }
};

export const setCachedWeather = (data) => {
    if (typeof window === 'undefined') return;

    try {
        localStorage.setItem(CACHE_KEY, JSON.stringify({
            data,
            timestamp: Date.now()
        }));
    } catch (error) {
        console.error('Error caching weather:', error);
    }
};

