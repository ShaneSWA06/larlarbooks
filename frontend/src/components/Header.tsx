import { Menu, X, BookOpen, ChevronDown } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, language } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  // Helper function to check if current path matches
  const isActivePath = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  // Navigation handler that preserves language state
  const handleNavigation = (path: string, event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault();
    }
    navigate(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-purple-200/50 z-[100] shadow-sm">
      <div className="w-full max-w-full px-2 sm:px-4 lg:px-8 mx-auto">
        <div className="flex justify-between items-center h-16 gap-4">
          {/* Logo */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <div className="relative flex-shrink-0">
              <div className="bg-white rounded-xl p-2.5 shadow-lg border border-purple-200">
                <img
                  src="/logo.png"
                  alt="LarLarBooks Logo"
                  className="h-7 w-7 object-contain"
                />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-violet-400 rounded-full border-2 border-white animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                LarLarBooks
              </span>
              <span className="text-xs text-gray-500 -mt-1">
                {language === "MM"
                  ? "ပညာရေး စာကြည့်တိုက်"
                  : "Educational Library"}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-2 flex-shrink-0">
            <button
              onClick={(e) => handleNavigation("/", e)}
              className={`navbar-text group relative rounded-lg font-semibold transition-all duration-300 hover:shadow-md whitespace-nowrap ${
                isActivePath("/")
                  ? "text-purple-700 bg-purple-50 hover:bg-purple-100"
                  : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
              } ${language === "MM" ? "px-2 py-1.5 text-sm" : "px-4 py-2"}`}
            >
              {t.home}
              <span
                className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full transition-transform duration-300 ${
                  isActivePath("/")
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>
            </button>
            <button
              onClick={(e) => handleNavigation("/categories", e)}
              className={`navbar-text group relative rounded-lg font-medium transition-all duration-300 hover:shadow-md whitespace-nowrap ${
                isActivePath("/categories")
                  ? "text-purple-700 bg-purple-50 hover:bg-purple-100"
                  : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
              } ${language === "MM" ? "px-2 py-1.5 text-sm" : "px-4 py-2"}`}
            >
              {t.categories}
              <span
                className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full transition-transform duration-300 ${
                  isActivePath("/categories")
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>
            </button>
            <button
              onClick={(e) => handleNavigation("/library", e)}
              className={`navbar-text group relative rounded-lg font-medium transition-all duration-300 hover:shadow-md whitespace-nowrap ${
                isActivePath("/library")
                  ? "text-purple-700 bg-purple-50 hover:bg-purple-100"
                  : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
              } ${language === "MM" ? "px-2 py-1.5 text-sm" : "px-4 py-2"}`}
            >
              {t.library}
              <span
                className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full transition-transform duration-300 ${
                  isActivePath("/library")
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>
            </button>
            <button
              onClick={(e) => handleNavigation("/about", e)}
              className={`navbar-text group relative rounded-lg transition-all duration-300 hover:shadow-md whitespace-nowrap ${
                isActivePath("/about")
                  ? "text-purple-700 bg-purple-50 hover:bg-purple-100 font-bold"
                  : "text-gray-700 hover:text-purple-600 hover:bg-purple-50 font-medium"
              } ${language === "MM" ? "px-2 py-1.5 text-sm" : "px-4 py-2"}`}
            >
              {t.about}
              <span
                className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full transition-transform duration-300 ${
                  isActivePath("/about")
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>
            </button>
          </nav>

          {/* Desktop Actions - Language, Sign In, Get Started */}
          <div className="hidden xl:flex items-center space-x-2 flex-shrink-0">
            {/* Language Switcher */}
            <div className="language-switcher flex-shrink-0">
              <LanguageSwitcher />
            </div>

            {/* Sign In */}
            <button
              className={`btn-text myanmar-signin text-gray-700 hover:text-purple-600 font-medium transition-all duration-300 rounded-xl hover:bg-purple-50 whitespace-nowrap ${
                language === "MM" ? "px-2 py-1.5 text-sm" : "px-3 py-2"
              }`}
            >
              {t.signIn}
            </button>

            {/* Get Started */}
            <button
              className={`btn-text myanmar-getstarted bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap relative overflow-hidden ${
                language === "MM" ? "px-3 py-1.5 text-sm" : "px-4 py-2"
              }`}
            >
              <span className="relative z-10">{t.getStarted}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700"></div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden flex items-center flex-shrink-0">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-300"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="xl:hidden border-t border-purple-100 py-6 bg-gradient-to-b from-purple-50/50 to-white rounded-b-2xl">
            <div className="flex flex-col space-y-4">
              {/* Mobile Navigation Links */}
              <div className="space-y-2">
                <button
                  onClick={() => {
                    handleNavigation("/");
                    setIsMenuOpen(false);
                  }}
                  className={`navbar-text flex items-center justify-between font-semibold py-4 px-4 rounded-xl border-l-4 w-full text-left ${
                    isActivePath("/")
                      ? "text-purple-700 bg-purple-100 border-purple-600"
                      : "text-gray-700 hover:text-purple-600 hover:bg-purple-50 border-transparent"
                  }`}
                >
                  <span>{t.home}</span>
                  {isActivePath("/") && (
                    <ChevronDown className="h-4 w-4 text-purple-600 flex-shrink-0" />
                  )}
                </button>
                <button
                  onClick={() => {
                    handleNavigation("/categories");
                    setIsMenuOpen(false);
                  }}
                  className={`navbar-text font-medium py-4 px-4 rounded-xl transition-all block w-full text-left ${
                    isActivePath("/categories")
                      ? "text-purple-700 bg-purple-100"
                      : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                  }`}
                >
                  {t.categories}
                </button>
                <button
                  onClick={() => {
                    handleNavigation("/library");
                    setIsMenuOpen(false);
                  }}
                  className={`navbar-text font-medium py-4 px-4 rounded-xl transition-all block w-full text-left ${
                    isActivePath("/library")
                      ? "text-purple-700 bg-purple-100"
                      : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                  }`}
                >
                  {t.library}
                </button>
                <button
                  onClick={() => {
                    handleNavigation("/about");
                    setIsMenuOpen(false);
                  }}
                  className={`navbar-text py-4 px-4 rounded-xl transition-all block w-full text-left ${
                    isActivePath("/about")
                      ? "text-purple-700 bg-purple-100 font-bold border-l-4 border-purple-600"
                      : "text-gray-700 hover:text-purple-600 hover:bg-purple-50 font-medium"
                  }`}
                >
                  {t.about}
                </button>
              </div>

              {/* Mobile Actions */}
              <div className="flex flex-col space-y-4 pt-6 border-t border-purple-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 font-medium">
                    {language === "MM" ? "ဘာသာစကား" : "Language"}
                  </span>
                  <div className="flex-shrink-0">
                    <LanguageSwitcher />
                  </div>
                </div>

                <button className="btn-text text-left text-gray-700 hover:text-purple-600 hover:bg-purple-50 font-medium py-4 px-4 rounded-xl transition-all">
                  {t.signIn}
                </button>

                <button className="btn-text bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-6 py-4 rounded-xl font-semibold text-center shadow-lg hover:shadow-xl transition-all">
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
