import React, { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true");

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    // <button 
    //   onClick={() => setDarkMode(!darkMode)} 
    //   className="p-2 rounded bg-gray-800 text-white dark:bg-white dark:text-black"
    // >
    //   {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
    // </button>
    <div className="ml-auto flex items-center dark:text-muted-dark text-muted-light text-sm">
        dark mode 
        <button 
            onClick={() =>setDarkMode(!darkMode)} 
            className="dark:shadow-none dark:bg-subtle-gray-dark shadow-[0_0_5px_0px_rgba(0,0,0,0.25)] rounded-xl ml-2 w-14 h-6 flex items-center justify-center dark:text-title-dark text-title-light cursor-pointer"
        >
            {darkMode ? 'on' : 'off'} <span className="w-2 h-2 rounded-full dark:bg-green-500 bg-red-500 ml-1.5"></span>
        </button>
    </div>
  );
}

export default DarkModeToggle;