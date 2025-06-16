import { Menu, X, BookOpen, ChevronDown } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { useTheme } from "./ThemeContext";
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
    <header className="fixed top-0 left-0 right-0 bg-[#EEEEEE]/80 dark:bg-[#1A1A1A]/80 backdrop-blur-md border-b border-[#D9BBF9]/50 dark:border-[#231F20]/50 z-[100] shadow-sm transition-colors duration-300">
      <div className="w-[70%] max-w-none px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex justify-between items-center h-20 gap-4">
          {/* Logo */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <div className="relative flex-shrink-0">
              <div className="bg-[#EEEEEE] dark:bg-[#231F20] rounded-xl p-2.5 shadow-lg border border-[#D9BBF9] dark:border-[#A56ABD] transition-colors duration-300">
                <a href="/">
                  <img
                    src="/logo.png"
                    alt="LarLarBooks Logo"
                    className="h-8 w-8 object-contain"
                  />
                </a>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#A56ABD] rounded-full border-2 border-[#EEEEEE] animate-pulse"></div>
            </div>
            <div className="flex flex-col -space-y-2">
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#7B5BA7] to-[#6E3482] bg-clip-text text-transparent logo-text-english">
                LarLarBooks
              </span>
              <span className="text-l sm:text-xl font-bold bg-gradient-to-r from-[#7B5BA7] to-[#6E3482] bg-clip-text text-transparent logo-text-myanmar">
                လာလာစာပေ
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-2 flex-shrink-0">
            <button
              onClick={(e) => handleNavigation("/", e)}
              className={`navbar-text group relative rounded-lg transition-all duration-300 hover:shadow-md whitespace-nowrap ${
                isActivePath("/")
                  ? "text-[#7B5BA7] dark:text-[#A56ABD] bg-[#D9BBF9] dark:bg-[#231F20] hover:bg-[#A56ABD]/20 dark:hover:bg-[#A56ABD]/20 font-bold"
                  : "text-[#1A1A1A] dark:text-[#EEEEEE] hover:text-[#7B5BA7] dark:hover:text-[#A56ABD] hover:bg-[#D9BBF9] dark:hover:bg-[#231F20] font-medium"
              } ${language === "MM" ? "px-2 py-1.5 text-sm" : "px-4 py-2"}`}
            >
              {t.home}
              <span
                className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#7B5BA7] to-[#6E3482] rounded-full transition-transform duration-300 ${
                  isActivePath("/")
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>
            </button>
            <button
              onClick={(e) => handleNavigation("/categories", e)}
              className={`navbar-text group relative rounded-lg transition-all duration-300 hover:shadow-md whitespace-nowrap ${
                isActivePath("/categories")
                  ? "text-[#7B5BA7] dark:text-[#A56ABD] bg-[#D9BBF9] dark:bg-[#231F20] hover:bg-[#A56ABD]/20 dark:hover:bg-[#A56ABD]/20 font-bold"
                  : "text-[#1A1A1A] dark:text-[#EEEEEE] hover:text-[#7B5BA7] dark:hover:text-[#A56ABD] hover:bg-[#D9BBF9] dark:hover:bg-[#231F20] font-medium"
              } ${language === "MM" ? "px-2 py-1.5 text-sm" : "px-4 py-2"}`}
            >
              {t.categories}
              <span
                className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#7B5BA7] to-[#6E3482] rounded-full transition-transform duration-300 ${
                  isActivePath("/categories")
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>
            </button>
            <button
              onClick={(e) => handleNavigation("/library", e)}
              className={`navbar-text group relative rounded-lg transition-all duration-300 hover:shadow-md whitespace-nowrap ${
                isActivePath("/library")
                  ? "text-[#7B5BA7] dark:text-[#A56ABD] bg-[#D9BBF9] dark:bg-[#231F20] hover:bg-[#A56ABD]/20 dark:hover:bg-[#A56ABD]/20 font-bold"
                  : "text-[#1A1A1A] dark:text-[#EEEEEE] hover:text-[#7B5BA7] dark:hover:text-[#A56ABD] hover:bg-[#D9BBF9] dark:hover:bg-[#231F20] font-medium"
              } ${language === "MM" ? "px-2 py-1.5 text-sm" : "px-4 py-2"}`}
            >
              {t.library}
              <span
                className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#7B5BA7] to-[#6E3482] rounded-full transition-transform duration-300 ${
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
                  ? "text-[#7B5BA7] dark:text-[#A56ABD] bg-[#D9BBF9] dark:bg-[#231F20] hover:bg-[#A56ABD]/20 dark:hover:bg-[#A56ABD]/20 font-bold"
                  : "text-[#1A1A1A] dark:text-[#EEEEEE] hover:text-[#7B5BA7] dark:hover:text-[#A56ABD] hover:bg-[#D9BBF9] dark:hover:bg-[#231F20] font-medium"
              } ${language === "MM" ? "px-2 py-1.5 text-sm" : "px-4 py-2"}`}
            >
              {t.about}
              <span
                className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#7B5BA7] to-[#6E3482] rounded-full transition-transform duration-300 ${
                  isActivePath("/about")
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>
            </button>
          </nav>

          {/* Desktop Actions - Theme and Language in one line */}
          <div className="hidden xl:flex items-center space-x-3 flex-shrink-0">
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden flex items-center flex-shrink-0">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-[#1A1A1A]/60 hover:text-[#7B5BA7] hover:bg-[#D9BBF9] rounded-xl transition-all duration-300"
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
          <div className="xl:hidden border-t border-[#D9BBF9] dark:border-[#231F20] py-6 bg-gradient-to-b from-[#D9BBF9]/50 dark:from-[#231F20]/50 to-[#EEEEEE] dark:to-[#1A1A1A] rounded-b-2xl transition-colors duration-300">
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
                      ? "text-[#7B5BA7] dark:text-[#A56ABD] bg-[#A56ABD]/20 dark:bg-[#231F20] border-[#7B5BA7] dark:border-[#A56ABD]"
                      : "text-[#1A1A1A] dark:text-[#EEEEEE] hover:text-[#7B5BA7] dark:hover:text-[#A56ABD] hover:bg-[#D9BBF9] dark:hover:bg-[#231F20] border-transparent"
                  }`}
                >
                  <span>{t.home}</span>
                  {isActivePath("/") && (
                    <ChevronDown className="h-4 w-4 text-[#7B5BA7] flex-shrink-0" />
                  )}
                </button>
                <button
                  onClick={() => {
                    handleNavigation("/categories");
                    setIsMenuOpen(false);
                  }}
                  className={`navbar-text font-medium py-4 px-4 rounded-xl transition-all block w-full text-left ${
                    isActivePath("/categories")
                      ? "text-[#7B5BA7] bg-[#A56ABD]/20"
                      : "text-[#1A1A1A] hover:text-[#7B5BA7] hover:bg-[#D9BBF9]"
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
                      ? "text-[#7B5BA7] bg-[#A56ABD]/20"
                      : "text-[#1A1A1A] hover:text-[#7B5BA7] hover:bg-[#D9BBF9]"
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
                      ? "text-[#7B5BA7] bg-[#A56ABD]/20 font-bold border-l-4 border-[#7B5BA7]"
                      : "text-[#1A1A1A] hover:text-[#7B5BA7] hover:bg-[#D9BBF9] font-medium"
                  }`}
                >
                  {t.about}
                </button>
              </div>

              {/* Mobile Actions */}
              <div className="flex flex-col space-y-4 pt-6 border-t border-[#D9BBF9] dark:border-[#231F20]">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#1A1A1A]/60 dark:text-[#EEEEEE]/60 font-medium">
                    {language === "MM" ? "ဘာသာစကား" : "Language"}
                  </span>
                  <div className="flex items-center space-x-2">
                    <ThemeSwitcher />
                    <LanguageSwitcher />
                  </div>
                </div>

                <button className="btn-text text-left text-[#1A1A1A] dark:text-[#EEEEEE] hover:text-[#7B5BA7] dark:hover:text-[#A56ABD] hover:bg-[#D9BBF9] dark:hover:bg-[#231F20] font-medium py-4 px-4 rounded-xl transition-all">
                  {t.signIn}
                </button>

                <button className="btn-text bg-gradient-to-r from-[#7B5BA7] to-[#6E3482] hover:from-[#A56ABD] hover:to-[#7B5BA7] text-[#EEEEEE] px-6 py-4 rounded-xl font-semibold text-center shadow-lg hover:shadow-xl transition-all">
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
