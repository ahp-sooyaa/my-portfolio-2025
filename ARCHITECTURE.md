# Weather Animation Architecture

## 📐 System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Portfolio Website                        │
│                      (src/pages/index.js)                   │
└────────────────────┬────────────────────────────────────────┘
                     │
        ┌────────────┴────────────┐
        │                         │
        ▼                         ▼
┌───────────────┐         ┌──────────────┐
│ WeatherToggle │         │   Weather    │
│  Component    │         │  Animation   │
│               │         │  Component   │
└───────────────┘         └──────┬───────┘
                                 │
                    ┌────────────┼────────────┐
                    │            │            │
                    ▼            ▼            ▼
              ┌──────────┐ ┌─────────┐ ┌──────────┐
              │  Utils   │ │  State  │ │  Canvas  │
              │          │ │ Manager │ │ Renderer │
              └────┬─────┘ └─────────┘ └────┬─────┘
                   │                         │
         ┌─────────┼─────────┐              │
         │         │         │              │
         ▼         ▼         ▼              ▼
    ┌────────┐ ┌────────┐ ┌──────┐   ┌──────────┐
    │  Geo   │ │Weather │ │Cache │   │Animation │
    │Location│ │  API   │ │ Mgr  │   │ Classes  │
    └────────┘ └────────┘ └──────┘   └────┬─────┘
                                           │
                          ┌────────────────┼────────────┐
                          │                │            │
                          ▼                ▼            ▼
                    ┌──────────┐    ┌──────────┐ ┌──────────┐
                    │   Snow   │    │   Rain   │ │  Clouds  │
                    │Animation │    │Animation │ │Animation │
                    └──────────┘    └──────────┘ └──────────┘
                                          │
                                          ▼
                                    ┌──────────┐
                                    │ClearSky  │
                                    │Animation │
                                    └──────────┘
```

## 🔄 Data Flow

```
Page Load
    │
    ├─► Check localStorage for preference
    │   └─► weatherAnimationEnabled: true/false
    │
    ├─► Check for reduced motion preference
    │   └─► prefers-reduced-motion: reduce/no-preference
    │
    └─► If enabled:
        │
        ├─► Check cache (30 min validity)
        │   ├─► Cache hit → Use cached weather → Render animation
        │   │
        │   └─► Cache miss:
        │       │
        │       ├─► Request geolocation
        │       │   ├─► Granted → Get coords
        │       │   │   │
        │       │   │   └─► Fetch weather from API
        │       │   │       ├─► Success → Map condition → Cache → Render
        │       │   │       └─► Error → Default clouds animation
        │       │   │
        │       │   └─► Denied → Default clouds animation
        │       │
        │       └─► Render appropriate animation
        │
        └─► Start animation loop (requestAnimationFrame)
```

## 🎨 Component Hierarchy

```
<IndexPage>
  │
  ├── <WeatherAnimation>
  │     │
  │     ├── Canvas Element (z-index: 9999)
  │     │     └── pointer-events: none
  │     │
  │     └── Animation Instance
  │           ├── SnowAnimation
  │           ├── RainAnimation  
  │           ├── CloudAnimation
  │           └── ClearSkyAnimation
  │
  ├── <nav>
  │     ├── <WeatherToggle>
  │     └── <DarkModeToggle>
  │
  └── [Rest of Portfolio Content]
```

## 🗂️ File Structure

```
my-portfolio-2025/
│
├── src/
│   ├── components/
│   │   ├── DarkModeToggle.js
│   │   ├── WeatherToggle.js ............................ Toggle UI
│   │   ├── WeatherAnimation.js ........................ Main orchestrator
│   │   └── weather-animations/
│   │       ├── SnowAnimation.js ....................... Snow particles
│   │       ├── RainAnimation.js ....................... Rain drops
│   │       ├── CloudAnimation.js ...................... Floating clouds
│   │       └── ClearSkyAnimation.js ................... Twinkling stars
│   │
│   ├── utils/
│   │   ├── weatherUtils.js ............................ API & helpers
│   │   └── weatherTestUtils.js ........................ Testing tools
│   │
│   └── pages/
│       └── index.js ................................... Main page
│
├── static/
│   └── weather-animation-test.html .................... Standalone test
│
├── .env.development ................................... Dev config
├── .env.production .................................... Prod config
│
└── Documentation/
    ├── IMPLEMENTATION_SUMMARY.md ...................... Quick start
    ├── WEATHER_ANIMATION_README.md .................... Full docs
    └── TESTING_CHECKLIST.md ........................... Test guide
```

## 🔧 Key Technologies

```
┌─────────────────────────────────────────────────────────────┐
│ Technology Stack                                             │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Frontend Framework    React (via Gatsby)                   │
│  Animation Engine      HTML5 Canvas API                     │
│  API Service           WeatherAPI.com                       │
│  Geolocation           Browser Geolocation API              │
│  State Management      React Hooks (useState, useEffect)    │
│  Persistence           localStorage                         │
│  Performance           requestAnimationFrame                │
│  Build Tool            Gatsby                               │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## 🎯 Animation Lifecycle

```
Initialization
    │
    ├─► Create Canvas
    ├─► Set dimensions (window.innerWidth/Height)
    ├─► Get 2D context
    └─► Initialize particle array
        │
        ▼
Create Particles
    │
    ├─► Generate N particles (count varies by type)
    ├─► Set random positions (x, y)
    ├─► Set properties (speed, size, opacity, etc.)
    └─► Store in particles array
        │
        ▼
Animation Loop (requestAnimationFrame)
    │
    ├─► Clear Canvas
    │   └─► ctx.clearRect(0, 0, width, height)
    │
    ├─► Update Particles
    │   ├─► Move particles (y += speed)
    │   ├─► Apply effects (drift, twinkle, etc.)
    │   └─► Reset off-screen particles
    │
    ├─► Draw Particles
    │   ├─► Set fill/stroke style
    │   ├─► Draw shapes (circles, lines, etc.)
    │   └─► Apply opacity/gradients
    │
    └─► Request next frame
        └─► requestAnimationFrame(animate)
            │
            └─► Loop continues...
                │
                ▼
Cleanup (on unmount/change)
    │
    ├─► Cancel animation frame
    ├─► Clear particles array
    ├─► Remove event listeners
    └─► Destroy animation instance
```

## 📊 Weather Condition Mapping

```
WeatherAPI Condition Code
         │
         ▼
┌────────────────────┐
│ getAnimationType() │
└─────────┬──────────┘
          │
    ┌─────┼─────┬─────┬─────┐
    │     │     │     │     │
    ▼     ▼     ▼     ▼     ▼
  Snow  Rain Clouds Clear Default
  1066  1063  1003  1000   (Clouds)
  1114  1150  1006
  1210  1153  1009
  1213  1168  1030
  1216  1171  1135
  ... (more codes)
```

## 🎮 User Interaction Flow

```
User Action: Toggle Weather
         │
         ├─► onClick → setEnabled(!enabled)
         │
         ├─► Save to localStorage
         │   └─► 'weatherAnimationEnabled': 'true'/'false'
         │
         └─► Reload page
             │
             ▼
         Check preference
             │
      ┌──────┴──────┐
      │             │
   enabled      disabled
      │             │
      ▼             ▼
  Show animation  No animation
```

## 💾 Cache Strategy

```
Request Weather Data
         │
         ▼
    Check Cache
         │
    ┌────┴────┐
    │         │
  Valid   Expired/Missing
    │         │
    ▼         ▼
  Return   Fetch New
  Cached      │
              ├─► API Call
              ├─► Process Data
              └─► Cache (30 min TTL)
                  │
                  └─► Return Data

Cache Structure:
{
  data: {
    condition: 1000,
    isDay: true,
    location: "City, Country",
    temp: 25,
    description: "Clear"
  },
  timestamp: 1705584000000
}
```

## 🚀 Performance Optimizations

```
┌─────────────────────────────────────────────────────────┐
│ Optimization Strategies                                  │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  ✓ requestAnimationFrame      60fps, browser-optimized │
│  ✓ Limited particle counts    Prevents overload        │
│  ✓ Efficient clearRect        Fast canvas clearing     │
│  ✓ Object pooling             Reuse particles          │
│  ✓ Cache API responses        Reduce network calls     │
│  ✓ pointer-events: none       No interaction overhead  │
│  ✓ Reduced motion support     Accessibility            │
│  ✓ Lazy initialization        Only when enabled        │
│  ✓ Cleanup on unmount         Prevent memory leaks     │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

## 🔒 Error Handling

```
Error Scenarios
    │
    ├─► Geolocation Denied
    │   └─► Fallback: Default clouds animation
    │
    ├─► API Request Failed
    │   └─► Fallback: Default clouds animation
    │
    ├─► Invalid API Key
    │   └─► Fallback: Default clouds animation
    │
    ├─► Network Offline
    │   └─► Fallback: Default clouds animation
    │
    └─► Browser Not Supported
        └─► Graceful degradation (no animation)
```

---

## 📱 Responsive Behavior

```
Window Resize Event
    │
    ├─► Update canvas dimensions
    ├─► Recreate particles (new positions)
    └─► Continue animation seamlessly

Mobile Considerations
    │
    ├─► Touch events not blocked (pointer-events: none)
    ├─► Reduced particle count for performance
    └─► Battery-efficient animation loop
```

---

**Version**: 1.0.0
**Last Updated**: January 18, 2026

