import "./src/styles/global.css"

// Import test utilities in development
if (process.env.NODE_ENV === 'development') {
    import('./src/utils/weatherTestUtils');
}

