import { ChevronDown, BookOpen, Users, Award } from "lucide-react";
import { useLanguage } from "./LanguageContext";

const Hero = () => {
  const { t, language } = useLanguage();

  const scrollToBooks = () => {
    const booksSection = document.getElementById("books-section");
    if (booksSection) {
      booksSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      window.scrollTo({
        top: window.innerHeight - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-gradient-to-br from-[#7B5BA7] via-[#6E3482] to-[#A56ABD] pt-32 pb-20 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-[#A56ABD]/20 rounded-full blur-xl floating" />
      <div
        className="absolute top-40 right-20 w-32 h-32 bg-[#D9BBF9]/20 rounded-full blur-xl floating"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-40 left-1/4 w-16 h-16 bg-[#6E3482]/20 rounded-full blur-xl floating"
        style={{ animationDelay: "2s" }}
      />

      <div className="mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-[90%] 2xl:max-w-[85%]">
        {/* Main Content */}
        <div className="text-center space-y-12 text-[#EEEEEE]">
          {/* Logo showcase */}
          <div className="flex justify-center mb-8">
            <div className="p-6 bg-[#EEEEEE] backdrop-blur-lg rounded-full border border-[#7B5BA7]/30 shadow-lg floating">
              <img
                src="/logo.png"
                alt="LarLarBooks Logo"
                className="h-16 w-16 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <BookOpen
                className="h-16 w-16 text-[#A56ABD] hidden"
                style={{ display: "none" }}
              />
            </div>
          </div>

          {/* Main Headline */}
          <h1
            className={`hero-title font-bold text-[#EEEEEE] leading-tight ${
              language === "MM"
                ? "text-4xl lg:text-6xl myanmar-heading"
                : "text-5xl lg:text-7xl"
            }`}
          >
            {t.heroTitle}
          </h1>

          {/* Subtitle */}
          <p
            className={`hero-subtitle text-[#D9BBF9] max-w-4xl mx-auto leading-relaxed ${
              language === "MM"
                ? "text-lg lg:text-xl myanmar-text"
                : "text-xl lg:text-2xl"
            }`}
          >
            {t.heroSubtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <button onClick={scrollToBooks} className="apple-button group">
              <span className={language === "MM" ? "myanmar-text" : ""}>
                {t.exploreLibrary}
              </span>
              <svg
                className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
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
            </button>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="space-y-4 group">
            <div className="flex items-center justify-center">
              <div className="p-3 bg-[#EEEEEE]/10 backdrop-blur-lg rounded-full mr-4 group-hover:scale-110 transition-transform">
                <img
                  src="/logo.png"
                  alt="Books"
                  className="h-8 w-8 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <BookOpen
                  className="h-8 w-8 text-[#A56ABD] hidden"
                  style={{ display: "none" }}
                />
              </div>
              <span className="text-4xl font-bold text-[#EEEEEE]">10K+</span>
            </div>
            <p
              className={`stats-text text-[#D9BBF9] font-medium ${
                language === "MM" ? "myanmar-text" : ""
              }`}
            >
              {t.ebooks}
            </p>
          </div>

          <div className="space-y-4 group">
            <div className="flex items-center justify-center">
              <div className="p-3 bg-[#EEEEEE]/10 backdrop-blur-lg rounded-full mr-4 group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-[#A56ABD]" />
              </div>
              <span className="text-4xl font-bold text-[#EEEEEE]">50K+</span>
            </div>
            <p
              className={`stats-text text-[#D9BBF9] font-medium ${
                language === "MM" ? "myanmar-text" : ""
              }`}
            >
              {t.learners}
            </p>
          </div>

          <div className="space-y-4 group">
            <div className="flex items-center justify-center">
              <div className="p-3 bg-[#EEEEEE]/10 backdrop-blur-lg rounded-full mr-4 group-hover:scale-110 transition-transform">
                <Award className="h-8 w-8 text-[#A56ABD]" />
              </div>
              <span className="text-4xl font-bold text-[#EEEEEE]">4.8★</span>
            </div>
            <p
              className={`stats-text text-[#D9BBF9] font-medium ${
                language === "MM" ? "myanmar-text" : ""
              }`}
            >
              {t.rating}
            </p>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="mt-16 text-center">
          <p
            className={`text-[#eeeeee] font-medium text-sm uppercase tracking-wider mb-8 ${
              language === "MM" ? "myanmar-text" : ""
            }`}
          >
            TRUSTED BY LEARNERS WORLDWIDE
          </p>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToBooks}
          className="animate-bounce bg-[#EEEEEE]/10 backdrop-blur-lg rounded-full p-4 hover:bg-[#EEEEEE]/20 transition-all focus:outline-none border border-[#EEEEEE]/20"
          aria-label="Scroll to books section"
        >
          <ChevronDown className="h-6 w-6 text-[#EEEEEE]" />
        </button>
      </div>

      {/* Add CSS for floating animation */}
      <style>{`
        .floating {
          animation: floating 3s ease-in-out infinite;
        }

        @keyframes floating {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
