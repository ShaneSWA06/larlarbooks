import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Globe } from "lucide-react";
import { useLanguage, Language } from "./LanguageContext";

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Language options with proper labels
  const languageOptions = [
    { code: "EN" as Language, label: "English", flag: "🇺🇸" },
    { code: "MM" as Language, label: "မြန်မာ", flag: "🇲🇲" },
  ];

  const currentLanguage = languageOptions.find(
    (lang) => lang.code === language
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setIsOpen(false);

    // Force CSS class application
    setTimeout(() => {
      const htmlElement = document.documentElement;
      if (newLanguage === "MM") {
        htmlElement.classList.add("myanmar");
        htmlElement.classList.remove("english");
      } else {
        htmlElement.classList.add("english");
        htmlElement.classList.remove("myanmar");
      }
    }, 0);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Language Switch Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="language-switch-btn flex items-center space-x-2 px-3 py-2 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 bg-white min-w-max"
        aria-label="Switch language"
        aria-expanded={isOpen}
      >
        <Globe className="h-4 w-4 text-gray-600" />
        <span className="text-sm font-medium text-gray-700">
          {currentLanguage?.flag} {currentLanguage?.label}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="language-dropdown absolute top-full right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden">
          {languageOptions.map((option) => (
            <button
              key={option.code}
              onClick={() => handleLanguageChange(option.code)}
              className={`language-option w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-150 ${
                language === option.code
                  ? "bg-blue-50 text-blue-700 border-r-2 border-blue-500"
                  : "text-gray-700"
              }`}
            >
              <span
                className="text-lg"
                role="img"
                aria-label={`${option.label} flag`}
              >
                {option.flag}
              </span>
              <span className="font-medium text-sm">{option.label}</span>
              {language === option.code && (
                <div className="ml-auto w-2 h-2 rounded-full bg-blue-500"></div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
