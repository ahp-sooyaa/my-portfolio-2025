import React, { useState, useEffect } from "react";

const WeatherToggle = () => {
    const [mounted, setMounted] = useState(false);
    const [enabled, setEnabled] = useState(true);
    const [isUserToggled, setIsUserToggled] = useState(false);

    // Only set mounted after component mounts on client
    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const savedPreference = localStorage.getItem('weatherAnimationEnabled');
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const initialEnabled = savedPreference !== null
            ? savedPreference === 'true'
            : !prefersReducedMotion;

        setEnabled(initialEnabled);
    }, [mounted]);

    const toggleWeather = () => {
        setEnabled(prevEnabled => !prevEnabled);
        setIsUserToggled(true);
    };

    useEffect(() => {
        if (!mounted || !isUserToggled) return;

        localStorage.setItem('weatherAnimationEnabled', enabled);

        // Reload to apply changes
        window.location.reload();
    }, [enabled, mounted, isUserToggled]);

    // Render a placeholder during SSR to prevent hydration mismatch
    // The placeholder has the same structure as the final render
    if (!mounted) {
        return (
            <div className="flex items-center dark:text-muted-dark text-muted-light text-sm">
                Weather
                <span className="dark:shadow-none dark:bg-subtle-gray-dark shadow-[0_0_5px_0px_rgba(0,0,0,0.25)] rounded-xl ml-2 w-14 h-6 flex items-center justify-center dark:text-title-dark text-title-light">
                    on
                    <span className="animate-pulse w-2 h-2 rounded-full ml-1.5 bg-green-500"></span>
                </span>
            </div>
        );
    }

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
