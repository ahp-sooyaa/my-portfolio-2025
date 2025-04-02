import React, { useState, useEffect } from "react";

const DarkModeToggle = () => {
    const isBrowser = typeof window !== "undefined";
    const [darkMode, setDarkMode] = useState(false);
    const [isUserToggled, setIsUserToggled] = useState(false);

    useEffect(() => {
        if (!isBrowser) return;

        const savedMode = localStorage.getItem("darkMode");
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const initialMode = savedMode !== null ? savedMode === "true" : systemPrefersDark;

        setDarkMode(initialMode);
        document.documentElement.classList.toggle("dark", initialMode);
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
        setIsUserToggled(true);
    };

    useEffect(() => {
        if (!isBrowser || !isUserToggled) return;

        localStorage.setItem("darkMode", darkMode);
        document.documentElement.classList.toggle("dark", darkMode);
    }, [darkMode]);

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