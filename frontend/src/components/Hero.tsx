import { ChevronDown, BookOpen, Users, Award } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { useState, useEffect } from "react";

const Hero = () => {
  const { t, language } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToBooks = () => {
    const booksSection = document.getElementById("books-section");
    if (booksSection) {
      booksSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      window.scrollTo({
        top: window.innerHeight - 10,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-gradient-to-br from-[#7B5BA7] via-[#6E3482] to-[#A56ABD] dark:from-[#1A1A1A] dark:via-[#231F20] dark:to-[#6E3482] pt-32 pb-20 relative overflow-hidden transition-colors duration-300">
      {/* Enhanced Floating background elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-[#A56ABD]/20 dark:bg-[#6E3482]/30 rounded-full blur-xl floating" />
      <div
        className="absolute top-40 right-20 w-32 h-32 bg-[#D9BBF9]/20 dark:bg-[#A56ABD]/30 rounded-full blur-xl floating-delayed"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-40 left-1/4 w-16 h-16 bg-[#6E3482]/20 dark:bg-[#7B5BA7]/30 rounded-full blur-xl floating-slow"
        style={{ animationDelay: "2s" }}
      />

      {/* Additional floating elements */}
      <div
        className="absolute top-1/3 right-1/4 w-24 h-24 bg-[#7B5BA7]/15 dark:bg-[#A56ABD]/25 rounded-full blur-2xl floating-reverse"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute bottom-1/3 left-1/3 w-28 h-28 bg-[#D9BBF9]/15 dark:bg-[#6E3482]/25 rounded-full blur-xl floating-delayed"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-[90%] 2xl:max-w-[85%]">
        {/* Main Content with Enhanced Animations */}
        <div className="text-center space-y-12 text-[#EEEEEE]">
          {/* Enhanced Logo showcase */}
          <div
            className={`flex justify-center mb-8 transition-all duration-1000 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative group">
              {/* Pulsing rings */}
              <div className="absolute inset-0 rounded-full bg-[#EEEEEE]/5 dark:bg-[#A56ABD]/10 animate-ping"></div>
              <div className="absolute inset-0 rounded-full bg-[#EEEEEE]/10 dark:bg-[#A56ABD]/20 animate-pulse"></div>

              {/* Main logo container */}
              <div className="relative p-6 bg-[#EEEEEE] dark:bg-[#231F20] backdrop-blur-lg rounded-full border border-[#7B5BA7]/30 dark:border-[#A56ABD]/50 shadow-lg floating transition-all duration-500 hover:scale-110 hover:shadow-2xl group-hover:border-[#A56ABD]">
                <img
                  src="/logo.png"
                  alt="LarLarBooks Logo"
                  className="h-16 w-16 object-contain transition-transform duration-500 group-hover:rotate-12"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <BookOpen
                  className="h-16 w-16 text-[#A56ABD] dark:text-[#7B5BA7] hidden transition-transform duration-500 group-hover:rotate-12"
                  style={{ display: "none" }}
                />

                {/* Sparkle effects */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#BAFF29] rounded-full animate-bounce opacity-80"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#A56ABD] rounded-full animate-pulse opacity-60"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Main Headline with Typewriter Effect */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1
              className={`hero-title font-bold text-[#EEEEEE] dark:text-[#A56ABD] leading-tight relative ${
                language === "MM"
                  ? "text-4xl lg:text-6xl myanmar-heading"
                  : "text-5xl lg:text-7xl"
              }`}
            >
              <span className="relative inline-block">
                {t.heroTitle}
                {/* Animated underline */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#A56ABD] via-[#D9BBF9] to-[#7B5BA7] transform scale-x-0 origin-left transition-transform duration-1000 delay-1000 animate-scale-x"></div>
              </span>
            </h1>
          </div>

          {/* Enhanced Subtitle with Fade-in Animation */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p
              className={`hero-subtitle text-[#D9BBF9] dark:text-[#A56ABD] max-w-4xl mx-auto leading-relaxed transition-colors duration-300 ${
                language === "MM"
                  ? "text-lg lg:text-xl myanmar-text"
                  : "text-xl lg:text-2xl"
              }`}
            >
              {t.heroSubtitle}
            </p>
          </div>

          {/* Enhanced CTA Buttons with Slide-in Animation */}
          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 transition-all duration-1000 delay-700 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <button
              onClick={scrollToBooks}
              className="apple-button group relative overflow-hidden"
            >
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#A56ABD] via-[#D9BBF9] to-[#A56ABD] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

              <span
                className={`relative z-10 ${
                  language === "MM" ? "myanmar-text" : ""
                }`}
              >
                {t.exploreLibrary}
              </span>

              <svg
                className="relative z-10 h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>

              {/* Ripple effect */}
              <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-active:scale-100 transition-transform duration-300"></div>
            </button>
          </div>
        </div>

        {/* Enhanced Stats Section with Staggered Animations */}
        <div
          className={`mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 text-center transition-all duration-1000 delay-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Books Stat */}
          <div className="space-y-4 group transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-center relative">
              {/* Animated ring */}
              <div className="absolute inset-0 rounded-full border-2 border-[#A56ABD]/30 animate-spin-slow"></div>

              <div className="p-3 bg-[#EEEEEE]/10 dark:bg-[#231F20]/20 backdrop-blur-lg rounded-full mr-4 group-hover:scale-110 transition-all duration-300 relative z-10">
                <img
                  src="/logo.png"
                  alt="Books"
                  className="h-8 w-8 object-contain group-hover:rotate-12 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <BookOpen
                  className="h-8 w-8 text-[#A56ABD] dark:text-[#7B5BA7] hidden group-hover:rotate-12 transition-transform duration-300"
                  style={{ display: "none" }}
                />
              </div>

              <div className="relative">
                <span className="text-4xl font-bold text-[#EEEEEE] counter-animation">
                  10K+
                </span>
                {/* Number glow */}
                <div className="absolute inset-0 text-4xl font-bold text-[#A56ABD] blur-sm opacity-50 animate-pulse">
                  10K+
                </div>
              </div>
            </div>
            <p
              className={`stats-text text-[#D9BBF9] dark:text-[#A56ABD] font-medium transition-colors duration-300 ${
                language === "MM" ? "myanmar-text" : ""
              }`}
            >
              {t.ebooks}
            </p>
          </div>

          {/* Users Stat */}
          <div
            className="space-y-4 group transform hover:scale-105 transition-all duration-300"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center justify-center relative">
              {/* Animated ring */}
              <div
                className="absolute inset-0 rounded-full border-2 border-[#D9BBF9]/30 animate-spin-slow"
                style={{ animationDirection: "reverse" }}
              ></div>

              <div className="p-3 bg-[#EEEEEE]/10 dark:bg-[#231F20]/20 backdrop-blur-lg rounded-full mr-4 group-hover:scale-110 transition-transform duration-300 relative z-10">
                <Users className="h-8 w-8 text-[#A56ABD] dark:text-[#7B5BA7] group-hover:animate-bounce" />
              </div>

              <div className="relative">
                <span className="text-4xl font-bold text-[#EEEEEE] counter-animation">
                  50K+
                </span>
                {/* Number glow */}
                <div className="absolute inset-0 text-4xl font-bold text-[#D9BBF9] blur-sm opacity-50 animate-pulse">
                  50K+
                </div>
              </div>
            </div>
            <p
              className={`stats-text text-[#D9BBF9] dark:text-[#A56ABD] font-medium transition-colors duration-300 ${
                language === "MM" ? "myanmar-text" : ""
              }`}
            >
              {t.learners}
            </p>
          </div>

          {/* Rating Stat */}
          <div
            className="space-y-4 group transform hover:scale-105 transition-all duration-300"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-center justify-center relative">
              {/* Animated ring */}
              <div className="absolute inset-0 rounded-full border-2 border-[#7B5BA7]/30 animate-spin-slow"></div>

              <div className="p-3 bg-[#EEEEEE]/10 dark:bg-[#231F20]/20 backdrop-blur-lg rounded-full mr-4 group-hover:scale-110 transition-transform duration-300 relative z-10">
                <Award className="h-8 w-8 text-[#A56ABD] dark:text-[#7B5BA7] group-hover:animate-pulse" />
              </div>

              <div className="relative">
                <span className="text-4xl font-bold text-[#EEEEEE] counter-animation">
                  4.8★
                </span>
                {/* Number glow */}
                <div className="absolute inset-0 text-4xl font-bold text-[#BAFF29] blur-sm opacity-50 animate-pulse">
                  4.8★
                </div>
              </div>
            </div>
            <p
              className={`stats-text text-[#D9BBF9] dark:text-[#A56ABD] font-medium transition-colors duration-300 ${
                language === "MM" ? "myanmar-text" : ""
              }`}
            >
              {t.rating}
            </p>
          </div>
        </div>

        {/* Enhanced Trusted By Section */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-1200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p
            className={`text-[#A56ABD] dark:text-[#D9BBF9] font-medium text-sm uppercase tracking-wider mb-8 transition-colors duration-300 relative ${
              language === "MM" ? "myanmar-text" : ""
            }`}
          >
            <span className="relative">
              TRUSTED BY LEARNERS WORLDWIDE
              {/* Animated dots */}
              <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 flex space-x-1">
                <div className="w-1 h-1 bg-[#A56ABD] rounded-full animate-bounce"></div>
                <div
                  className="w-1 h-1 bg-[#A56ABD] rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-1 h-1 bg-[#A56ABD] rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </span>
          </p>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1400 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <button
          onClick={scrollToBooks}
          className="group animate-bounce bg-[#EEEEEE]/10 dark:bg-[#231F20]/20 backdrop-blur-lg rounded-full p-4 hover:bg-[#EEEEEE]/20 dark:hover:bg-[#231F20]/40 transition-all focus:outline-none border border-[#EEEEEE]/20 dark:border-[#A56ABD]/30 hover:scale-110 hover:shadow-2xl"
          aria-label="Scroll to books section"
        >
          <ChevronDown className="h-6 w-6 text-[#EEEEEE] dark:text-[#D9BBF9] group-hover:animate-pulse" />

          {/* Ripple effect */}
          <div className="absolute inset-0 rounded-full border-2 border-[#A56ABD]/50 animate-ping"></div>
        </button>
      </div>

      {/* Enhanced CSS for animations */}
      <style>{`
        .floating {
          animation: floating 3s ease-in-out infinite;
        }

        .floating-delayed {
          animation: floating 4s ease-in-out infinite;
        }

        .floating-slow {
          animation: floating 5s ease-in-out infinite;
        }

        .floating-reverse {
          animation: floating-reverse 3.5s ease-in-out infinite;
        }

        @keyframes floating {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes floating-reverse {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(10px);
          }
        }

        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }

        .animate-scale-x {
          animation: scale-x 1s ease-out forwards;
        }

        @keyframes scale-x {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        .counter-animation {
          animation: counter-glow 2s ease-in-out infinite alternate;
        }

        @keyframes counter-glow {
          from {
            text-shadow: 0 0 10px rgba(165, 106, 189, 0.5);
          }
          to {
            text-shadow: 0 0 20px rgba(165, 106, 189, 0.8), 0 0 30px rgba(217, 187, 249, 0.4);
          }
        }

        /* Gradient text animation */
        .gradient-text-animated {
          background: linear-gradient(45deg, #7B5BA7, #A56ABD, #D9BBF9, #6E3482);
          background-size: 400% 400%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 3s ease infinite;
        }

        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
