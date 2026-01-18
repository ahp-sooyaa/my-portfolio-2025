# Weather Animation - Testing Checklist

Use this checklist to verify everything works correctly.

## ✅ Pre-Flight Checks

- [ ] WeatherAPI key is in `.env.development` and `.env.production`
- [ ] All new files are created (check IMPLEMENTATION_SUMMARY.md for list)
- [ ] `src/pages/index.js` imports are correct
- [ ] No console errors when running `npm run develop`

## ✅ Basic Functionality Tests

### Test 1: Default Animation (No Permission)
- [ ] Open site in **Incognito/Private mode**
- [ ] When prompted for location, click **Block/Deny**
- [ ] **Expected**: Cloud animation should appear
- [ ] **Expected**: No errors in console

### Test 2: Geolocation Permission Granted
- [ ] Open site in **normal mode**
- [ ] When prompted for location, click **Allow**
- [ ] **Expected**: Animation based on your actual weather appears
- [ ] **Expected**: Check console for weather condition code
- [ ] **Expected**: Data cached in localStorage

### Test 3: Weather Toggle
- [ ] Click **Weather off** button
- [ ] **Expected**: Page reloads, animation stops
- [ ] Click **Weather on** button  
- [ ] **Expected**: Page reloads, animation resumes
- [ ] **Expected**: Preference persists after refresh

## ✅ Animation Tests

### Test Each Animation Type
Use browser console commands:

- [ ] **Snow**: Type `weatherTest.snow()` → Should see falling snowflakes
- [ ] **Rain**: Type `weatherTest.rain()` → Should see diagonal rain
- [ ] **Clouds**: Type `weatherTest.clouds()` → Should see floating clouds
- [ ] **Clear**: Type `weatherTest.clear()` → Should see twinkling stars

### Test Animation Quality
- [ ] Animations are **smooth** (60fps)
- [ ] Animations **don't lag** when scrolling
- [ ] Canvas **resizes** correctly when window resizes
- [ ] Particles **reset properly** when going off-screen

## ✅ Interaction Tests

### Test Non-Interference
With animations running:
- [ ] Can **select text** normally
- [ ] Can **click links** normally
- [ ] Can **scroll page** smoothly
- [ ] Can **focus inputs** normally
- [ ] Can use **Dark Mode toggle** normally
- [ ] Can use **Weather toggle** normally

## ✅ Performance Tests

### Check Resource Usage
- [ ] Open DevTools → Performance tab
- [ ] Record for 10 seconds with animation running
- [ ] **Expected**: Consistent frame rate (close to 60fps)
- [ ] **Expected**: No memory leaks (check Memory tab)

### Check Mobile Performance
- [ ] Test on mobile device or DevTools mobile emulation
- [ ] **Expected**: Animations run smoothly
- [ ] **Expected**: No significant battery drain

## ✅ Browser Compatibility Tests

Test in multiple browsers:
- [ ] **Chrome/Edge** - Animations work
- [ ] **Firefox** - Animations work
- [ ] **Safari** - Animations work
- [ ] **Mobile Safari (iOS)** - Animations work
- [ ] **Mobile Chrome (Android)** - Animations work

## ✅ Edge Cases & Error Handling

### Test Error Scenarios
- [ ] **No internet**: Offline → Should show default cloud animation
- [ ] **Invalid API key**: Temporarily change key → Should show default
- [ ] **API timeout**: Network throttling → Should show default
- [ ] **Geolocation denied**: Block permission → Should show default

### Test Cache Scenarios
- [ ] Visit page → Check cache in localStorage
- [ ] Revisit within 30 min → Should use cache (no new API call)
- [ ] Wait 31+ min → Should fetch new weather data
- [ ] Clear localStorage → Should fetch fresh data

## ✅ Accessibility Tests

### Reduced Motion
- [ ] Enable system "Reduce motion" setting
- [ ] **Expected**: Animations disabled automatically
- [ ] Disable "Reduce motion"
- [ ] **Expected**: Animations resume

### Keyboard Navigation
- [ ] Tab through page with keyboard
- [ ] **Expected**: Weather toggle is keyboard accessible
- [ ] Press Enter/Space on Weather toggle
- [ ] **Expected**: Toggle works with keyboard

### Screen Reader
- [ ] Test with screen reader (VoiceOver/NVDA/JAWS)
- [ ] **Expected**: Weather toggle has proper ARIA label
- [ ] **Expected**: Animations don't interfere with reading

## ✅ Production Build Tests

### Build & Serve
```bash
npm run build
npm run serve
```

- [ ] Build completes **without errors**
- [ ] Production site loads correctly
- [ ] Animations work in production build
- [ ] `.env.production` variables are used
- [ ] Console has no errors/warnings

## ✅ Real-World Tests

### Test Real Weather Locations
Use console commands:

- [ ] Iceland: `weatherTest.locations.iceland()` (often snowy)
- [ ] Singapore: `weatherTest.locations.singapore()` (often rainy)  
- [ ] London: `weatherTest.locations.london()` (often cloudy)
- [ ] Dubai: `weatherTest.locations.dubai()` (often clear)

### Verify Correct Mapping
- [ ] Check console for condition code
- [ ] Verify animation matches weather description
- [ ] Try multiple locations at different times

## ✅ User Experience Tests

### First-Time Visitor Flow
- [ ] Clear all localStorage and cookies
- [ ] Visit site as new user
- [ ] Accept location permission
- [ ] See appropriate weather animation
- [ ] Toggle weather off → Preference saved
- [ ] Refresh → Preference persists

### Returning Visitor Flow  
- [ ] Visit site with existing cache
- [ ] Animation loads immediately (no API call)
- [ ] Cache expires after 30 min
- [ ] Fresh data fetched automatically

## 🐛 Known Issues / Notes

Document any issues found:

```
Issue:
Browser:
Steps to Reproduce:
Expected:
Actual:
```

## 📊 Test Results Summary

**Date Tested**: _______________
**Tested By**: _______________

| Category | Pass | Fail | Notes |
|----------|------|------|-------|
| Basic Functionality | ☐ | ☐ | |
| Animations | ☐ | ☐ | |
| Interactions | ☐ | ☐ | |
| Performance | ☐ | ☐ | |
| Browser Compatibility | ☐ | ☐ | |
| Error Handling | ☐ | ☐ | |
| Accessibility | ☐ | ☐ | |
| Production Build | ☐ | ☐ | |

**Overall Status**: ☐ Ready for Production  ☐ Needs Fixes

---

## 🚀 Quick Test Commands

Open browser console and type:

```javascript
// Show all test commands
weatherTest.help()

// Test animations
weatherTest.snow()
weatherTest.rain()
weatherTest.clouds()
weatherTest.clear()

// Test real locations
weatherTest.locations.iceland()
weatherTest.locations.singapore()

// Reset to real weather
weatherTest.reset()

// Check what's cached
localStorage.getItem('weatherData')
```

---

**Happy Testing! 🎉**

