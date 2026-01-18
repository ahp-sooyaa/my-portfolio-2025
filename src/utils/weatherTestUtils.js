/**
 * Weather Animation Testing Utilities
 *
 * Use these functions in browser console to test different scenarios
 */

// Test different weather animations
export const testAnimations = {
    // Force snow animation
    snow: () => {
        localStorage.setItem('weatherData', JSON.stringify({
            data: {
                condition: 1066, // Snow code
                isDay: true,
                location: 'Test Location',
                temp: -5,
                description: 'Light Snow'
            },
            timestamp: Date.now()
        }));
        console.log('✅ Snow animation set. Reload page to see effect.');
        window.location.reload();
    },

    // Force rain animation
    rain: () => {
        localStorage.setItem('weatherData', JSON.stringify({
            data: {
                condition: 1063, // Rain code
                isDay: true,
                location: 'Test Location',
                temp: 15,
                description: 'Light Rain'
            },
            timestamp: Date.now()
        }));
        console.log('✅ Rain animation set. Reload page to see effect.');
        window.location.reload();
    },

    // Force clear sky animation
    clear: () => {
        localStorage.setItem('weatherData', JSON.stringify({
            data: {
                condition: 1000, // Clear code
                isDay: true,
                location: 'Test Location',
                temp: 25,
                description: 'Clear'
            },
            timestamp: Date.now()
        }));
        console.log('✅ Clear sky animation set. Reload page to see effect.');
        window.location.reload();
    },

    // Clear cache and fetch real weather
    reset: () => {
        localStorage.removeItem('weatherData');
        console.log('✅ Weather cache cleared. Reload page to fetch real weather.');
        window.location.reload();
    }
};

// Famous locations for testing
export const testLocations = {
    // Iceland - Often snowy
    iceland: async () => {
        const apiKey = process.env.GATSBY_WEATHER_API_KEY;
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=64.1466,-21.9426&aqi=no`);
        const data = await response.json();
        console.log('🇮🇸 Iceland Weather:', data.current.condition.text);
        localStorage.setItem('weatherData', JSON.stringify({
            data: {
                condition: data.current.condition.code,
                isDay: data.current.is_day === 1,
                location: `${data.location.name}, ${data.location.country}`,
                temp: data.current.temp_c,
                description: data.current.condition.text
            },
            timestamp: Date.now()
        }));
        window.location.reload();
    },

    // Singapore - Often rainy
    singapore: async () => {
        const apiKey = process.env.GATSBY_WEATHER_API_KEY;
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=1.3521,103.8198&aqi=no`);
        const data = await response.json();
        console.log('🇸🇬 Singapore Weather:', data.current.condition.text);
        localStorage.setItem('weatherData', JSON.stringify({
            data: {
                condition: data.current.condition.code,
                isDay: data.current.is_day === 1,
                location: `${data.location.name}, ${data.location.country}`,
                temp: data.current.temp_c,
                description: data.current.condition.text
            },
            timestamp: Date.now()
        }));
        window.location.reload();
    },

    // London - Often cloudy
    london: async () => {
        const apiKey = process.env.GATSBY_WEATHER_API_KEY;
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=51.5074,-0.1278&aqi=no`);
        const data = await response.json();
        console.log('🇬🇧 London Weather:', data.current.condition.text);
        localStorage.setItem('weatherData', JSON.stringify({
            data: {
                condition: data.current.condition.code,
                isDay: data.current.is_day === 1,
                location: `${data.location.name}, ${data.location.country}`,
                temp: data.current.temp_c,
                description: data.current.condition.text
            },
            timestamp: Date.now()
        }));
        window.location.reload();
    },

    // Dubai - Often clear
    dubai: async () => {
        const apiKey = process.env.GATSBY_WEATHER_API_KEY;
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=25.2048,55.2708&aqi=no`);
        const data = await response.json();
        console.log('🇦🇪 Dubai Weather:', data.current.condition.text);
        localStorage.setItem('weatherData', JSON.stringify({
            data: {
                condition: data.current.condition.code,
                isDay: data.current.is_day === 1,
                location: `${data.location.name}, ${data.location.country}`,
                temp: data.current.temp_c,
                description: data.current.condition.text
            },
            timestamp: Date.now()
        }));
        window.location.reload();
    }
};

// Console helpers
if (typeof window !== 'undefined') {
    window.weatherTest = {
        ...testAnimations,
        locations: testLocations,
        help: () => {
            console.log(`
🌦️ Weather Animation Testing

Quick Tests:
  weatherTest.snow()    - Test snow animation
  weatherTest.rain()    - Test rain animation
  weatherTest.clear()   - Test clear sky animation
  weatherTest.reset()   - Clear cache, fetch real weather

Real Location Tests:
  weatherTest.locations.iceland()   - 🇮🇸 Test Iceland weather
  weatherTest.locations.singapore() - 🇸🇬 Test Singapore weather
  weatherTest.locations.london()    - 🇬🇧 Test London weather
  weatherTest.locations.dubai()     - 🇦🇪 Test Dubai weather

Debug:
  localStorage.getItem('weatherData')           - View cached weather
  localStorage.getItem('weatherAnimationEnabled') - Check if enabled
  localStorage.removeItem('weatherData')        - Clear weather cache
  localStorage.setItem('weatherAnimationEnabled', 'false') - Disable
  localStorage.setItem('weatherAnimationEnabled', 'true')  - Enable

Note: Cloud animation removed (causes flashing). Most commands reload page automatically.
            `);
        }
    };

    // Show help on first load
    console.log('🌦️ Weather Animation Loaded! Type weatherTest.help() for testing commands.');
}

export default testAnimations;

