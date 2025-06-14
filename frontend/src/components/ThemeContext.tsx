import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

// Define theme types
export type Theme = "light" | "dark";

// Theme context interface
interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

// Create context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Provider component
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>("light");

  // Apply theme classes to html element
  const applyTheme = (newTheme: Theme) => {
    const htmlElement = document.documentElement;

    // Remove existing theme classes
    htmlElement.classList.remove("light", "dark");

    // Add new theme class
    htmlElement.classList.add(newTheme);

    // Set data attribute for CSS targeting
    htmlElement.setAttribute("data-theme", newTheme);

    // Force a reflow to ensure CSS is applied
    htmlElement.offsetHeight;
  };

  // Initialize theme on mount
  useEffect(() => {
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem("theme") as Theme;
    const initialTheme = savedTheme || "light";

    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  // Update theme
  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Toggle between light and dark
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    changeTheme(newTheme);
  };

  const value = {
    theme,
    setTheme: changeTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default ThemeContext;
