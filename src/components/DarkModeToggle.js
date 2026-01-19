import React, { useState, useEffect } from "react";

const DarkModeToggle = () => {
    const [mounted, setMounted] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [isUserToggled, setIsUserToggled] = useState(false);

    // Only set mounted after component mounts on client
    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const savedMode = localStorage.getItem("darkMode");
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const initialMode = savedMode !== null ? savedMode === "true" : systemPrefersDark;

        setDarkMode(initialMode);
        document.documentElement.classList.toggle("dark", initialMode);
    }, [mounted]);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
        setIsUserToggled(true);
    };

    useEffect(() => {
        if (!mounted || !isUserToggled) return;

        localStorage.setItem("darkMode", darkMode);
        document.documentElement.classList.toggle("dark", darkMode);
    }, [darkMode, mounted, isUserToggled]);

    // Render a placeholder during SSR to prevent hydration mismatch
    if (!mounted) {
        return (
            <div className="ml-auto flex items-center dark:text-muted-dark text-muted-light text-sm">
                Dark mode
                <span className="dark:shadow-none dark:bg-subtle-gray-dark shadow-[0_0_5px_0px_rgba(0,0,0,0.25)] rounded-xl ml-2 w-14 h-6 flex items-center justify-center dark:text-title-dark text-title-light">
                    off
                    <span className="animate-pulse w-2 h-2 rounded-full ml-1.5 bg-red-500"></span>
                </span>
            </div>
        );
    }

    return (
        <div className="ml-auto flex items-center dark:text-muted-dark text-muted-light text-sm">
            Dark mode
            <button
                onClick={toggleDarkMode}
                className="dark:shadow-none dark:bg-subtle-gray-dark shadow-[0_0_5px_0px_rgba(0,0,0,0.25)] rounded-xl ml-2 w-14 h-6 flex items-center justify-center dark:text-title-dark text-title-light cursor-pointer"
            >
                {darkMode ? 'on' : 'off'}
                <span className={`animate-pulse w-2 h-2 rounded-full ml-1.5 ${darkMode ? "bg-green-500" : "bg-red-500"}`}></span>
            </button>
        </div>
    );
};

export default DarkModeToggle;