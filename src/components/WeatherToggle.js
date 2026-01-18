import React, { useState, useEffect } from "react";

const WeatherToggle = () => {
    const isBrowser = typeof window !== 'undefined';
    const [enabled, setEnabled] = useState(true);
    const [isUserToggled, setIsUserToggled] = useState(false);

    useEffect(() => {
        if (!isBrowser) return;

        const savedPreference = localStorage.getItem('weatherAnimationEnabled');
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const initialEnabled = savedPreference !== null
            ? savedPreference === 'true'
            : !prefersReducedMotion;

        setEnabled(initialEnabled);
    }, [isBrowser]);

    const toggleWeather = () => {
        setEnabled(prevEnabled => !prevEnabled);
        setIsUserToggled(true);
    };

    useEffect(() => {
        if (!isBrowser || !isUserToggled) return;

        localStorage.setItem('weatherAnimationEnabled', enabled);

        // Reload to apply changes
        window.location.reload();
    }, [enabled, isBrowser, isUserToggled]);

    return (
        <div className="flex items-center dark:text-muted-dark text-muted-light text-sm">
            Weather
            <button
                onClick={toggleWeather}
                className="dark:shadow-none dark:bg-subtle-gray-dark shadow-[0_0_5px_0px_rgba(0,0,0,0.25)] rounded-xl ml-2 w-14 h-6 flex items-center justify-center dark:text-title-dark text-title-light cursor-pointer"
                aria-label="Toggle weather animation"
            >
                {enabled ? 'on' : 'off'}
                <span className={`animate-pulse w-2 h-2 rounded-full ml-1.5 ${enabled ? "bg-green-500" : "bg-red-500"}`}></span>
            </button>
        </div>
    );
};

export default WeatherToggle;
