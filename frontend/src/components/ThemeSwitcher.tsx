import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="group flex items-center justify-center w-10 h-10 bg-white/10 dark:bg-[#1A1A1A]/20 border border-[#D9BBF9] dark:border-[#231F20] rounded-xl hover:border-[#7B5BA7] dark:hover:border-[#A56ABD] hover:bg-[#D9BBF9]/20 dark:hover:bg-[#231F20]/40 transition-all duration-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#7B5BA7] focus:ring-opacity-20"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <div className="relative w-5 h-5">
        {/* Sun Icon - visible in dark mode (when we can switch to light) */}
        <Sun
          className={`absolute inset-0 w-5 h-5 text-[#7B5BA7] dark:text-[#A56ABD] transition-all duration-300 group-hover:scale-110 ${
            theme === "dark"
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 rotate-90 scale-75"
          }`}
        />

        {/* Moon Icon - visible in light mode (when we can switch to dark) */}
        <Moon
          className={`absolute inset-0 w-5 h-5 text-[#7B5BA7] dark:text-[#A56ABD] transition-all duration-300 group-hover:scale-110 ${
            theme === "light"
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 -rotate-90 scale-75"
          }`}
        />
      </div>
    </button>
  );
};

export default ThemeSwitcher;
