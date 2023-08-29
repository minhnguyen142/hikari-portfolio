import "@/app/globals.css";
import { useEffect, useState } from "react";
import Switch from "react-switch";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle({
  children,
  onThemeChange,
}: {
  children: React.ReactNode;
  onThemeChange: (darkMode: boolean) => void;
}) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkModePreferred = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkModePreferred);

    if (isDarkModePreferred) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    onThemeChange(darkMode);
  }, [onThemeChange]);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    onThemeChange(darkMode);
  }, [darkMode, onThemeChange]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`bg-${darkMode ? "black" : "white"} text-${
        darkMode ? "white" : "black"
      }`}
    >
      <div className="flex items-center">
        <Switch
          onChange={toggleDarkMode}
          checked={darkMode}
          onColor="#333"
          offColor="#ccc"
          checkedIcon={<FiMoon className="absolute mt-1.5 mx-2" />}
          uncheckedIcon={<FiSun className="absolute mt-1.5 mx-1.5" />}
        />
        {children}
      </div>
    </div>
  );
}
