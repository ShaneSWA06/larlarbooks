import React, { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown, Check } from "lucide-react";
import { useLanguage, Language } from "./LanguageContext";

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Flag components
  const FlagIcon = ({
    country,
    className = "w-5 h-4",
  }: {
    country: string;
    className?: string;
  }) => {
    const flags = {
      US: (
        <svg
          className={className}
          viewBox="0 0 640 480"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="us-flag-clip">
              <path d="M0 0h640v480H0z" />
            </clipPath>
          </defs>
          <g clipPath="url(#us-flag-clip)">
            <path fill="#bd3d44" d="M0 0h640v480H0" />
            <path
              stroke="#fff"
              strokeWidth="37"
              d="M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640"
            />
            <path fill="#192f5d" d="M0 0h364.8v258.5H0" />
            <g fill="#fff">
              <g id="us-star">
                <path
                  id="us-star-path"
                  d="m30.4 11 2.3 7.1h7.5l-6.1 4.4 2.3 7.1-6.1-4.4-6.1 4.4 2.3-7.1-6.1-4.4h7.5z"
                />
              </g>
              <use href="#us-star" transform="translate(60.8 0)" />
              <use href="#us-star" transform="translate(121.6 0)" />
              <use href="#us-star" transform="translate(182.4 0)" />
              <use href="#us-star" transform="translate(243.2 0)" />
              <use href="#us-star" transform="translate(304 0)" />
              <use href="#us-star" transform="translate(30.4 25.8)" />
              <use href="#us-star" transform="translate(91.2 25.8)" />
              <use href="#us-star" transform="translate(152 25.8)" />
              <use href="#us-star" transform="translate(212.8 25.8)" />
              <use href="#us-star" transform="translate(273.6 25.8)" />
              <use href="#us-star" transform="translate(334.4 25.8)" />
            </g>
          </g>
        </svg>
      ),
      MM: (
        <svg
          className={className}
          viewBox="0 0 640 480"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="640" height="160" fill="#fecb00" />
          <rect width="640" height="160" y="160" fill="#34b233" />
          <rect width="640" height="160" y="320" fill="#ea2839" />
          <g transform="translate(320 240)">
            <path
              fill="#fff"
              d="M0-80 24-24H84L36 12 60 68 0 32 -60 68 -36 12 -84-24H-24z"
            />
          </g>
        </svg>
      ),
    };

    return flags[country as keyof typeof flags] || null;
  };

  // Language options with proper labels and flag components
  const languageOptions = [
    {
      code: "EN" as Language,
      label: "English",
      nativeName: "English",
      flag: "US",
      flagComponent: <FlagIcon country="US" />,
    },
    {
      code: "MM" as Language,
      label: "မြန်မာ",
      nativeName: "Myanmar",
      flag: "MM",
      flagComponent: <FlagIcon country="MM" />,
    },
  ];

  const currentLanguage =
    languageOptions.find((lang) => lang.code === language) ||
    languageOptions[0];

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
      {/* Enhanced Language Switcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="language-switch-btn group flex items-center space-x-2 px-3 py-2 bg-white border border-gray-200 rounded-xl hover:border-purple-300 hover:bg-purple-50 hover:shadow-md transition-all duration-200 min-w-max focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-20"
        aria-label="Switch language"
        aria-expanded={isOpen}
      >
        <Globe className="h-4 w-4 text-gray-600 group-hover:text-purple-600 transition-colors" />
        <div className="flex items-center space-x-2">
          <div className="flex-shrink-0">{currentLanguage.flagComponent}</div>
          <span className="text-sm font-medium text-gray-700 group-hover:text-purple-700 transition-colors">
            {currentLanguage.code}
          </span>
        </div>
        <ChevronDown
          className={`h-4 w-4 text-gray-500 group-hover:text-purple-500 transition-all duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Enhanced Dropdown Menu */}
      {isOpen && (
        <div className="language-dropdown absolute top-full right-0 mt-2 w-52 bg-white border border-gray-200 rounded-xl shadow-xl z-50 overflow-hidden backdrop-blur-sm">
          <div className="py-1">
            <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100 bg-gray-50">
              Choose Language
            </div>
            {languageOptions.map((option) => (
              <button
                key={option.code}
                onClick={() => handleLanguageChange(option.code)}
                className={`language-option w-full flex items-center justify-between px-4 py-3 hover:bg-purple-50 transition-all duration-150 group ${
                  language === option.code
                    ? "bg-purple-50 text-purple-700 border-r-4 border-purple-500"
                    : "text-gray-700 hover:text-purple-600"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">{option.flagComponent}</div>
                  <div className="flex flex-col items-start">
                    <span className="font-medium text-sm leading-tight">
                      {option.label}
                    </span>
                    <span className="text-xs text-gray-500 group-hover:text-purple-500">
                      {option.nativeName}
                    </span>
                  </div>
                </div>
                {language === option.code && (
                  <Check className="h-4 w-4 text-purple-600 flex-shrink-0" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
