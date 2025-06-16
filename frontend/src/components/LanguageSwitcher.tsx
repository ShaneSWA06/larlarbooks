import React, { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown, Check } from "lucide-react";
import { useLanguage, Language } from "./LanguageContext";

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Flag components - Fixed React validation
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
              <use xlinkHref="#us-star" transform="translate(60.8 0)" />
              <use xlinkHref="#us-star" transform="translate(121.6 0)" />
              <use xlinkHref="#us-star" transform="translate(182.4 0)" />
              <use xlinkHref="#us-star" transform="translate(243.2 0)" />
              <use xlinkHref="#us-star" transform="translate(304 0)" />
              <use xlinkHref="#us-star" transform="translate(30.4 25.8)" />
              <use xlinkHref="#us-star" transform="translate(91.2 25.8)" />
              <use xlinkHref="#us-star" transform="translate(152 25.8)" />
              <use xlinkHref="#us-star" transform="translate(212.8 25.8)" />
              <use xlinkHref="#us-star" transform="translate(273.6 25.8)" />
              <use xlinkHref="#us-star" transform="translate(334.4 25.8)" />
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

  // Language options
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
      {/* Language Switcher Button - SUPER SIMPLE with CSS classes only */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`language-switch-btn group inline-flex items-center space-x-2 px-3 py-2 bg-[#EEEEEE] dark:bg-[#231F20] border border-[#D9BBF9] dark:border-[#6E3482] rounded-xl hover:border-[#7B5BA7] dark:hover:border-[#A56ABD] hover:bg-[#D9BBF9] dark:hover:bg-[#6E3482] hover:shadow-md transition-all duration-200 min-w-max focus:outline-none focus:ring-2 focus:ring-[#7B5BA7] focus:ring-opacity-20 ${
          language === "MM" ? "myanmar-lang-switcher" : ""
        }`}
        aria-label="Switch language"
        aria-expanded={isOpen}
      >
        <Globe className="h-4 w-4 text-[#1A1A1A] dark:text-[#EEEEEE] group-hover:text-[#7B5BA7] dark:group-hover:text-[#A56ABD] transition-colors flex-shrink-0" />

        <span
          className={`flag-container ${
            language === "MM" ? "myanmar-flag" : ""
          }`}
        >
          {currentLanguage.flagComponent}
        </span>

        <span
          className={`text-sm font-medium text-[#1A1A1A] dark:text-[#EEEEEE] group-hover:text-[#7B5BA7] dark:group-hover:text-[#A56ABD] transition-colors whitespace-nowrap ${
            language === "MM" ? "myanmar-text-code" : ""
          }`}
        >
          {currentLanguage.code}
        </span>

        <ChevronDown
          className={`h-4 w-4 text-[#1A1A1A] dark:text-[#EEEEEE] group-hover:text-[#7B5BA7] dark:group-hover:text-[#A56ABD] transition-all duration-200 flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown - KEEP ORIGINAL STRUCTURE */}
      {isOpen && (
        <div className="language-dropdown absolute top-full right-0 mt-2 w-52 bg-[#EEEEEE] dark:bg-[#231F20] border border-[#D9BBF9] dark:border-[#6E3482] rounded-xl shadow-xl z-50 overflow-hidden backdrop-blur-sm">
          <div className="py-1">
            <div className="px-4 py-2 text-xs font-semibold text-[#1A1A1A]/60 dark:text-[#EEEEEE]/60 uppercase tracking-wide border-b border-[#D9BBF9] dark:border-[#6E3482] bg-[#D9BBF9]/50 dark:bg-[#6E3482]/20">
              Choose Language
            </div>
            {languageOptions.map((option) => (
              <button
                key={option.code}
                onClick={() => handleLanguageChange(option.code)}
                className={`language-option w-full inline-flex items-center justify-between px-4 py-3 hover:bg-[#D9BBF9] dark:hover:bg-[#6E3482] transition-all duration-150 group ${
                  language === option.code
                    ? "bg-[#D9BBF9] dark:bg-[#6E3482] text-[#7B5BA7] dark:text-[#EEEEEE] border-r-4 border-[#7B5BA7] dark:border-[#A56ABD]"
                    : "text-[#1A1A1A] dark:text-[#EEEEEE] hover:text-[#7B5BA7] dark:hover:text-[#A56ABD]"
                }`}
              >
                {/* ORIGINAL dropdown structure - NO changes */}
                <div className="inline-flex items-center space-x-3 flex-1">
                  <div className="flex-shrink-0 inline-flex items-center justify-center">
                    {option.flagComponent}
                  </div>
                  <div className="inline-flex flex-col items-start min-w-0">
                    <span className="font-medium text-sm leading-tight whitespace-nowrap">
                      {option.label}
                    </span>
                    <span className="text-xs text-[#1A1A1A]/50 dark:text-[#EEEEEE]/50 group-hover:text-[#7B5BA7]/70 dark:group-hover:text-[#A56ABD]/70 whitespace-nowrap">
                      {option.nativeName}
                    </span>
                  </div>
                </div>
                {language === option.code && (
                  <Check className="h-4 w-4 text-[#7B5BA7] dark:text-[#A56ABD] flex-shrink-0" />
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
