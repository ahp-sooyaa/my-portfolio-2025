# Weather Animation Feature

## Overview
This feature adds dynamic weather animations to your portfolio based on the user's real-time geolocation and weather conditions. The animations are non-intrusive, using `pointer-events: none` to ensure they don't interfere with website interactions, similar to Google AI Studio's "let it snow" effect.

## Features Implemented

### 1. **Canvas-Based Animations**
Four weather animation types using HTML5 Canvas:
- **Snow** - Gentle falling snowflakes with drift effect
- **Rain** - Diagonal rain drops with varying speeds
- **Clouds** - Floating clouds moving across the screen
- **Clear Sky** - Twinkling stars with subtle glow (default fallback)

### 2. **WeatherAPI Integration**
- Uses WeatherAPI.com (1 million free API calls/month)
- Automatically detects user location via browser Geolocation API
- Maps weather condition codes to appropriate animations
- 30-minute caching to reduce API calls

### 3. **User Controls**
- Weather toggle button in the navigation bar
- Saved user preferences in localStorage
- Automatic detection of `prefers-reduced-motion` for accessibility
- Page reload applies changes when toggling animation on/off

### 4. **Smart Fallbacks**
- Default cloud animation when:
  - Geolocation permission is denied
  - Weather API fails
  - Network errors occur
  - API key is missing
- Graceful error handling with console logging

## File Structure

```
src/
├── components/
│   ├── WeatherAnimation.js       # Main weather animation component
│   ├── WeatherToggle.js          # Toggle control for weather animations
│   └── weather-animations/
│       ├── SnowAnimation.js      # Snow particle system
│       ├── RainAnimation.js      # Rain particle system
│       ├── CloudAnimation.js     # Cloud particle system
│       └── ClearSkyAnimation.js  # Stars/clear sky particle system
├── utils/
│   └── weatherUtils.js           # Weather API utilities & helpers
└── pages/
    └── index.js                  # Integrated into main page

.env.development                  # Environment variables
.env.production                   # Production environment variables
```

## Configuration

### Environment Variables
Add to `.env.development` and `.env.production`:
```env
GATSBY_WEATHER_API_KEY=your_api_key_here
```

### API Key Setup
1. Sign up at [weatherapi.com](https://www.weatherapi.com/)
2. Get your free API key (1M calls/month)
3. Add to environment files

## Weather Condition Mapping

The system maps WeatherAPI condition codes to animations:

| Weather Condition | Animation Type | Condition Codes |
|------------------|----------------|-----------------|
| Snow/Blizzard | Snow | 1066, 1114, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258, 1279, 1282 |
| Rain/Drizzle | Rain | 1063, 1150, 1153, 1168, 1171, 1180, 1183, 1186, 1189, 1192, 1195, 1198, 1201, 1240, 1243, 1246, 1249, 1252, 1273, 1276 |
| Cloudy/Overcast | Clouds | 1003, 1006, 1009, 1030, 1135, 1147 |
| Clear/Sunny | Clear Sky | 1000 |

## Performance Optimizations

1. **RequestAnimationFrame** - Smooth 60fps animations
2. **Caching** - Weather data cached for 30 minutes
3. **Reduced Motion** - Respects user accessibility preferences
4. **Lazy Loading** - Canvas only renders when animations are enabled
5. **Particle Limits**:
   - Snow: 150 particles
   - Rain: 200 particles
   - Clouds: 30 particles
   - Clear Sky: 50 particles

## User Experience

### First Visit
1. Page loads → Geolocation permission prompt appears
2. User grants permission → Location detected
3. Weather API fetches current conditions
4. Appropriate animation starts playing
5. Weather data cached for 30 minutes

### Permission Denied / Error
- Default cloud animation plays automatically
- No error messages shown to user
- Console logs error for debugging

### Return Visit (within 30 min)
- Cached weather data used instantly
- No API call or geolocation request
- Immediate animation based on cached data

### User Preference
- Toggle "Weather on/off" button in navigation
- Preference saved to localStorage
- Page reloads to apply changes

## Browser Compatibility

- ✅ Modern browsers with Canvas support
- ✅ Geolocation API support
- ✅ LocalStorage support
- ✅ RequestAnimationFrame support
- ⚠️ Graceful degradation for older browsers

## Accessibility

- Respects `prefers-reduced-motion` setting
- Animations can be manually disabled
- No interference with keyboard navigation
- Semantic HTML for controls
- ARIA labels on toggle button

## Testing

### Manual Testing Steps
1. **Test Default Animation**:
   - Deny geolocation → Should show clouds
   - Invalid API key → Should show clouds

2. **Test Weather Conditions**:
   - Mock different weather codes in `weatherUtils.js`
   - Verify correct animation loads

3. **Test Toggle**:
   - Turn weather off → Animation stops
   - Refresh page → Preference persists
   - Turn weather on → Animation resumes

4. **Test Caching**:
   - Load page twice within 30 min → No API call on 2nd load
   - Check localStorage for cached data
   - Wait 30+ min → New API call on reload

5. **Test Responsiveness**:
   - Resize window → Canvas adjusts
   - Particles redistribute correctly

## Future Enhancements (Optional)

1. **Animation Intensity**: Vary particle count based on weather severity (light rain vs heavy rain)
2. **Time-Based Variations**: Different animations for day/night
3. **Seasonal Themes**: Special animations for holidays
4. **Custom Animations**: Thunderstorm, fog, aurora effects
5. **Performance Monitoring**: FPS counter for debugging
6. **A/B Testing**: Analytics on user preferences

## Troubleshooting

### Animation Not Showing
1. Check browser console for errors
2. Verify API key in `.env` file
3. Check localStorage for `weatherAnimationEnabled: true`
4. Disable browser extensions (ad blockers)
5. Check `prefers-reduced-motion` setting

### Wrong Animation Playing
1. Check console for weather condition code
2. Verify mapping in `weatherUtils.js`
3. Clear localStorage cache
4. Check WeatherAPI dashboard for request logs

### Performance Issues
1. Reduce particle count in animation classes
2. Check for memory leaks (particles not cleaning up)
3. Disable other animations temporarily
4. Check Canvas rendering performance

## Credits

- **WeatherAPI**: Weather data provider
- **Canvas API**: Animation rendering
- **Browser Geolocation API**: Location detection

---

**Implementation Date**: January 2026
**Version**: 1.0.0

