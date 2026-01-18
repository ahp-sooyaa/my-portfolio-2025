# Weather Animation - Quick Reference Card

## 🚀 Getting Started (3 Steps)

1. **Start Development Server**
   ```bash
   npm run develop
   ```

2. **Open Browser**
   ```
   http://localhost:8000
   ```

3. **Allow Location Permission**
   - Click "Allow" when browser asks for location
   - Weather animation should appear based on your weather!

---

## 🎮 Browser Console Commands

Open DevTools Console (F12) and type:

### Quick Tests
```javascript
// Show help menu
weatherTest.help()

// Test snow animation
weatherTest.snow()

// Test rain animation
weatherTest.rain()

// Test clear sky animation
weatherTest.clear()

// Reset to real weather
weatherTest.reset()
```

### Test Real Locations
```javascript
// Iceland (often snowy)
weatherTest.locations.iceland()

// Singapore (often rainy)
weatherTest.locations.singapore()

// London (often cloudy)
weatherTest.locations.london()

// Dubai (often clear)
weatherTest.locations.dubai()
```

### Debug Commands
```javascript
// View cached weather data
localStorage.getItem('weatherData')

// Check if animation is enabled
localStorage.getItem('weatherAnimationEnabled')

// Clear weather cache
localStorage.removeItem('weatherData')

// Disable animations
localStorage.setItem('weatherAnimationEnabled', 'false')

// Enable animations
localStorage.setItem('weatherAnimationEnabled', 'true')

// Force page reload
window.location.reload()
```

---

## 📁 Important Files

| File | Purpose |
|------|---------|
| `src/components/WeatherAnimation.js` | Main animation component |
| `src/components/WeatherToggle.js` | Toggle control UI |
| `src/utils/weatherUtils.js` | API & helper functions |
| `src/components/weather-animations/` | Animation classes |
| `static/weather-animation-test.html` | Standalone test page |

---

## 🎨 Animation Types

| Type | Particles | Weather Conditions |
|------|-----------|-------------------|
| ❄️ Snow | 150 | Snow, Sleet, Blizzard |
| 🌧️ Rain | 200 | Rain, Drizzle, Showers |
| ✨ Clear | 50 (stars) / Sun glow | Clear, Sunny (also used for cloudy) |

**Note**: Cloud animation removed due to flashing on page load. Cloudy weather now shows clear sky animation.

---

## 🔧 Configuration

### Environment Variables
```env
GATSBY_WEATHER_API_KEY=ea121839f5804dd8a4241937261801
```

### API Limits
- **Free Tier**: 1,000,000 calls/month
- **Cache Duration**: 30 minutes
- **Dashboard**: https://www.weatherapi.com/my/

---

## 🐛 Troubleshooting

### Animation not showing?
1. Check console for errors (F12)
2. Verify toggle is "on"
3. Check: `localStorage.getItem('weatherAnimationEnabled')`
4. Try: `weatherTest.reset()`

### Wrong animation?
1. Clear cache: `localStorage.removeItem('weatherData')`
2. Refresh page: `F5`
3. Check console for condition code

### Performance issues?
1. Close other tabs
2. Disable other extensions
3. Check: `prefers-reduced-motion` setting
4. Try different browser

---

## 📝 Quick Edits

### Change particle count
Edit animation files in `src/components/weather-animations/`:
```javascript
// SnowAnimation.js
this.particleCount = 150; // Reduce to 75 for better performance
```

### Change cache duration
Edit `src/utils/weatherUtils.js`:
```javascript
const CACHE_DURATION = 30 * 60 * 1000; // Change 30 to 60 for 1 hour
```

### Force specific animation
Edit `src/utils/weatherUtils.js`:
```javascript
export const getAnimationType = (conditionCode, isDay) => {
    return 'snow'; // Force snow for testing
};
```

---

## 🎯 Testing Workflow

### Test All Animations (1 minute)
```javascript
weatherTest.snow()    // Wait 10 seconds
weatherTest.rain()    // Wait 10 seconds
weatherTest.clear()   // Wait 10 seconds
weatherTest.reset()   // Back to normal
```

### Test Real Weather Locations (3 minutes)
```javascript
weatherTest.locations.iceland()    // Should be snowy
weatherTest.locations.singapore()  // Should be rainy
weatherTest.locations.london()     // Should be cloudy
weatherTest.locations.dubai()      // Should be clear
weatherTest.reset()                // Back to your location
```

---

## 📚 Documentation

- **Getting Started**: `IMPLEMENTATION_SUMMARY.md`
- **Full Guide**: `WEATHER_ANIMATION_README.md`
- **Testing**: `TESTING_CHECKLIST.md`
- **Architecture**: `ARCHITECTURE.md`
- **This Guide**: `QUICK_REFERENCE.md`

---

## 🎉 Common Tasks

### Task: Change default animation
**File**: `src/components/WeatherAnimation.js`
**Line**: `const [animationType, setAnimationType] = useState('clear');`
**Change to**: `'snow'`, `'rain'`, or `'clear'`

### Task: Disable auto-start
**File**: `src/components/WeatherAnimation.js`
**Line**: `const [isEnabled, setIsEnabled] = useState(true);`
**Change to**: `useState(false);`

### Task: Test without geolocation
**Console**: 
```javascript
weatherTest.clear() // Or any animation type
```

### Task: Build for production
```bash
npm run build
npm run serve
```

---

## 💡 Pro Tips

1. **Use standalone test page** for quick animation testing:
   - Open `static/weather-animation-test.html` in browser
   - No need to run Gatsby server

2. **Console helpers auto-load** in development:
   - Just type `weatherTest` in console
   - Full help with `weatherTest.help()`

3. **Cache is your friend**:
   - Saves API calls
   - Instant loading on revisit
   - Lasts 30 minutes

4. **Incognito mode** for fresh tests:
   - No cache
   - No saved preferences
   - Clean slate every time

---

## ⚡ Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Open DevTools | `F12` or `Cmd+Opt+I` |
| Refresh Page | `F5` or `Cmd+R` |
| Hard Refresh | `Ctrl+F5` or `Cmd+Shift+R` |
| Clear Console | `Ctrl+L` |
| Open Console | `Ctrl+Shift+J` |

---

## 🔗 Useful Links

- WeatherAPI Dashboard: https://www.weatherapi.com/my/
- Weather Condition Codes: https://www.weatherapi.com/docs/weather_conditions.json
- Canvas API Docs: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
- Geolocation API: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API

---

**Need Help?** Check the detailed documentation files or open an issue.

**Ready to Deploy?** Run `npm run build` and check production build.

**Have Fun!** 🎉 The weather animations make your portfolio unique!
