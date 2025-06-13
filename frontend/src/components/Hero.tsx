import { ChevronDown, BookOpen, Users, Award } from "lucide-react";
import { useLanguage } from "./LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
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
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="text-center space-y-12">
          {/* Main Headline */}
          <h1 className="hero-title text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
            {t.heroTitle}
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t.heroSubtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <button
              onClick={scrollToBooks}
              className="btn-text bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              {t.exploreLibrary}
            </button>
            <button
              onClick={scrollToBooks}
              className="btn-text border-2 border-gray-400 text-gray-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center space-x-2"
            >
              <span>{t.howItWorks}</span>
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="space-y-3">
            <div className="flex items-center justify-center">
              <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
              <span className="text-4xl font-bold text-gray-900">10K+</span>
            </div>
            <p className="stats-text text-gray-600 font-medium">{t.ebooks}</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-center">
              <Users className="h-8 w-8 text-blue-600 mr-3" />
              <span className="text-4xl font-bold text-gray-900">50K+</span>
            </div>
            <p className="stats-text text-gray-600 font-medium">{t.learners}</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-center">
              <Award className="h-8 w-8 text-blue-600 mr-3" />
              <span className="text-4xl font-bold text-gray-900">4.8★</span>
            </div>
            <p className="stats-text text-gray-600 font-medium">{t.rating}</p>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 font-medium text-sm uppercase tracking-wider mb-8">
            TRUSTED BY LEARNERS WORLDWIDE
          </p>
          {/* You can add partner logos here later */}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToBooks}
          className="animate-bounce bg-blue-600 bg-opacity-10 rounded-full p-3 hover:bg-opacity-20 transition-all focus:outline-none"
          aria-label="Scroll to books section"
        >
          <ChevronDown className="h-6 w-6 text-blue-600" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
