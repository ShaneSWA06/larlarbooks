import {
  Search,
  Menu,
  X,
  BookOpen,
  Bell,
  User,
  Heart,
  ChevronDown,
} from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const { t, language } = useLanguage();
  const location = useLocation();

  // Helper function to check if current path matches
  const isActivePath = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="bg-gradient-to-r from-white via-blue-50/30 to-white backdrop-blur-sm border-b border-blue-100/50 sticky top-0 z-50 shadow-sm">
      {/* Top notification bar */}
      <div className="w-full max-w-full px-2 sm:px-4 lg:px-8 mx-auto">
        <div className="flex justify-between items-center h-16 gap-2 min-w-0">
          {/* Logo with enhanced design - Fixed width */}
          <div className="flex items-center space-x-3 flex-shrink-0 min-w-0">
            <div className="relative flex-shrink-0">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-2.5 shadow-lg">
                <BookOpen className="h-7 w-7 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent truncate">
                LarLarBooks
              </span>
              <span className="text-xs text-gray-500 -mt-1 truncate">
                {language === "MM"
                  ? "ပညာရေး စာကြည့်တိုက်"
                  : "Educational Library"}
              </span>
            </div>
          </div>

          {/* Desktop Navigation with enhanced styling - Hidden on smaller screens */}
          <nav className="hidden xl:flex items-center space-x-2 flex-shrink-0">
            <a
              href="/"
              className={`navbar-text group relative rounded-lg font-semibold transition-all duration-300 hover:shadow-md whitespace-nowrap ${
                isActivePath("/")
                  ? "text-blue-700 bg-blue-50 hover:bg-blue-100"
                  : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              } ${language === "MM" ? "px-2 py-1.5 text-sm" : "px-4 py-2"}`}
            >
              {t.home}
              <span
                className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-transform duration-300 ${
                  isActivePath("/")
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>
            </a>
            <a
              href="#"
              className={`navbar-text group relative rounded-lg font-medium transition-all duration-300 hover:shadow-md whitespace-nowrap ${
                isActivePath("/categories")
                  ? "text-blue-700 bg-blue-50 hover:bg-blue-100"
                  : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              } ${language === "MM" ? "px-2 py-1.5 text-sm" : "px-4 py-2"}`}
            >
              {t.categories}
              <span
                className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-transform duration-300 ${
                  isActivePath("/categories")
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>
            </a>
            <a
              href="#"
              className={`navbar-text group relative rounded-lg font-medium transition-all duration-300 hover:shadow-md whitespace-nowrap ${
                isActivePath("/library")
                  ? "text-blue-700 bg-blue-50 hover:bg-blue-100"
                  : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              } ${language === "MM" ? "px-2 py-1.5 text-sm" : "px-4 py-2"}`}
            >
              {t.library}
              <span
                className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-transform duration-300 ${
                  isActivePath("/library")
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>
            </a>
            <a
              href="/about"
              className={`navbar-text group relative rounded-lg font-medium transition-all duration-300 hover:shadow-md whitespace-nowrap ${
                isActivePath("/about")
                  ? "text-blue-700 bg-blue-50 hover:bg-blue-100"
                  : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              } ${language === "MM" ? "px-2 py-1.5 text-sm" : "px-4 py-2"}`}
            >
              {t.about}
              <span
                className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-transform duration-300 ${
                  isActivePath("/about")
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>
            </a>
          </nav>

          {/* Enhanced Search Bar - Flexible width with constraints */}
          <div className="search-container hidden lg:flex items-center relative flex-1 max-w-xs xl:max-w-sm 2xl:max-w-md mx-4">
            <div
              className={`flex items-center w-full bg-white rounded-2xl px-4 py-3 border-2 transition-all duration-300 shadow-sm ${
                isSearchFocused
                  ? "border-blue-400 shadow-lg shadow-blue-100/50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <Search
                className={`h-5 w-5 mr-3 transition-colors duration-300 flex-shrink-0 ${
                  isSearchFocused ? "text-blue-500" : "text-gray-400"
                }`}
              />
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                className="bg-transparent flex-1 outline-none text-gray-700 placeholder-gray-400 min-w-0"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="ml-2 p-1 text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            {isSearchFocused && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-gray-200 shadow-xl p-4 z-50">
                <div className="text-sm text-gray-500 mb-2">
                  {language === "MM"
                    ? "လူကြိုက်များသော ရှာဖွေမှုများ"
                    : "Popular searches"}
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Programming",
                    "Data Science",
                    "Business",
                    "Psychology",
                  ].map((term) => (
                    <button
                      key={term}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Enhanced Desktop Actions - Fixed width */}
          <div className="hidden xl:flex items-center space-x-1 flex-shrink-0">
            {/* Notifications */}
            <button className="relative p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Favorites */}
            <button className="relative p-2 text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-300">
              <Heart className="h-5 w-5" />
            </button>

            {/* Language Switcher */}
            <div className="language-switcher flex-shrink-0">
              <LanguageSwitcher />
            </div>

            {/* Sign In */}
            <button
              className={`btn-text myanmar-signin text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 rounded-xl hover:bg-blue-50 whitespace-nowrap ${
                language === "MM" ? "px-2 py-1.5 text-sm" : "px-3 py-2"
              }`}
            >
              {t.signIn}
            </button>

            {/* Get Started - Premium Button */}
            <button
              className={`btn-text myanmar-getstarted bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap relative overflow-hidden ${
                language === "MM" ? "px-3 py-1.5 text-sm" : "px-4 py-2"
              }`}
            >
              <span className="relative z-10">{t.getStarted}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700"></div>
            </button>
          </div>

          {/* Enhanced Mobile menu button - Fixed width */}
          <div className="xl:hidden flex items-center space-x-1 flex-shrink-0">
            <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300">
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div className="xl:hidden border-t border-blue-100 py-6 bg-gradient-to-b from-blue-50/50 to-white rounded-b-2xl">
            <div className="flex flex-col space-y-4">
              {/* Mobile Search */}
              <div className="flex items-center bg-white rounded-2xl px-4 py-3 border-2 border-gray-200 shadow-sm">
                <Search className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                <input
                  type="text"
                  placeholder={t.searchPlaceholder}
                  className="bg-transparent flex-1 outline-none text-gray-700 py-1 min-w-0"
                />
              </div>

              {/* Mobile Navigation Links */}
              <div className="space-y-2">
                <a
                  href="/"
                  className={`navbar-text flex items-center justify-between font-semibold py-4 px-4 rounded-xl border-l-4 ${
                    isActivePath("/")
                      ? "text-blue-700 bg-blue-100 border-blue-600"
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50 border-transparent"
                  }`}
                >
                  <span className="truncate">{t.home}</span>
                  {isActivePath("/") && (
                    <ChevronDown className="h-4 w-4 text-blue-600 flex-shrink-0 ml-2" />
                  )}
                </a>
                <a
                  href="#"
                  className={`navbar-text font-medium py-4 px-4 rounded-xl transition-all block truncate ${
                    isActivePath("/categories")
                      ? "text-blue-700 bg-blue-100"
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {t.categories}
                </a>
                <a
                  href="#"
                  className={`navbar-text font-medium py-4 px-4 rounded-xl transition-all block truncate ${
                    isActivePath("/library")
                      ? "text-blue-700 bg-blue-100"
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {t.library}
                </a>
                <a
                  href="/about"
                  className={`navbar-text font-medium py-4 px-4 rounded-xl transition-all block truncate ${
                    isActivePath("/about")
                      ? "text-blue-700 bg-blue-100"
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {t.about}
                </a>
              </div>

              {/* Mobile Actions */}
              <div className="flex flex-col space-y-4 pt-6 border-t border-blue-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 font-medium truncate">
                    {language === "MM" ? "ဘာသာစကား" : "Language"}
                  </span>
                  <div className="flex-shrink-0">
                    <LanguageSwitcher />
                  </div>
                </div>

                <button className="btn-text text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium py-4 px-4 rounded-xl transition-all truncate">
                  {t.signIn}
                </button>

                <button className="btn-text bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-4 rounded-xl font-semibold text-center shadow-lg hover:shadow-xl transition-all">
                  {t.getStarted}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
