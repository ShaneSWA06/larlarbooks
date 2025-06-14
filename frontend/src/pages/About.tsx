import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLanguage } from "../components/LanguageContext";
import {
  BookOpen,
  Users,
  Globe,
  Award,
  Heart,
  Lightbulb,
  ArrowRight,
  Star,
  Sparkles,
  Zap,
  Shield,
} from "lucide-react";
import {
  AnimatedSection,
  AppleCard,
  FloatingElement,
  ParallaxBackground,
  StaggeredList,
  GlassCard,
  HeroText,
  ScrollProgressBar,
} from "../hooks/useScrollAnimation";

const About = () => {
  const { t, language, getTeamMembers, getValues, getStats } = useLanguage();

  // Get data from context
  const teamMembers = getTeamMembers();
  const values = getValues();
  const stats = getStats();

  // Icon mapping for values with enhanced icons
  const getValueIcon = (iconName: string) => {
    const iconMap = {
      heart: <Heart className="h-12 w-12" />,
      award: <Award className="h-12 w-12" />,
      users: <Users className="h-12 w-12" />,
      lightbulb: <Lightbulb className="h-12 w-12" />,
    };
    return (
      iconMap[iconName as keyof typeof iconMap] || (
        <Heart className="h-12 w-12" />
      )
    );
  };

  // Icon mapping for stats
  const getStatIcon = (iconName: string) => {
    const iconMap = {
      book: <BookOpen className="h-8 w-8" />,
      users: <Users className="h-8 w-8" />,
      globe: <Globe className="h-8 w-8" />,
      star: <Star className="h-8 w-8" />,
    };
    return (
      iconMap[iconName as keyof typeof iconMap] || (
        <BookOpen className="h-8 w-8" />
      )
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Parallax */}
      <ParallaxBackground
        speed={0.3}
        className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-violet-900 relative"
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-20 min-h-screen flex items-center justify-center text-white pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <HeroText>
              <div className="space-y-8">
                {/* Floating icons */}
                <div className="flex justify-center space-x-4 mb-8">
                  <FloatingElement delay={0}>
                    <div className="p-4 bg-white/10 backdrop-blur-lg rounded-full border border-white/20">
                      <img
                        src="/logo.png"
                        alt="LarLarBooks Logo"
                        className="h-8 w-8 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                      <BookOpen
                        className="h-8 w-8 text-purple-300 hidden"
                        style={{ display: "none" }}
                      />
                    </div>
                  </FloatingElement>
                  <FloatingElement delay={200}>
                    <div className="p-4 bg-white/10 backdrop-blur-lg rounded-full">
                      <Sparkles className="h-8 w-8 text-violet-300" />
                    </div>
                  </FloatingElement>
                  <FloatingElement delay={400}>
                    <div className="p-4 bg-white/10 backdrop-blur-lg rounded-full">
                      <Zap className="h-8 w-8 text-indigo-300" />
                    </div>
                  </FloatingElement>
                </div>

                <h1
                  className={`font-bold leading-tight mb-8 gradient-text ${
                    language === "MM"
                      ? "text-4xl lg:text-6xl myanmar-heading"
                      : "text-6xl lg:text-8xl"
                  }`}
                >
                  {t.aboutHeroTitle}
                </h1>

                <p
                  className={`text-purple-100 leading-relaxed max-w-4xl mx-auto mb-12 ${
                    language === "MM"
                      ? "text-lg lg:text-xl myanmar-text"
                      : "text-xl lg:text-2xl"
                  }`}
                >
                  {t.aboutHeroSubtitle}
                </p>

                <button className="apple-button group">
                  <span className={language === "MM" ? "myanmar-text" : ""}>
                    {t.exploreLibrary}
                  </span>
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </HeroText>
          </div>
        </div>

        {/* Floating background elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl floating" />
        <div
          className="absolute top-40 right-20 w-32 h-32 bg-violet-500/20 rounded-full blur-xl floating"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-40 left-1/4 w-16 h-16 bg-indigo-500/20 rounded-full blur-xl floating"
          style={{ animationDelay: "2s" }}
        />
      </ParallaxBackground>

      {/* Mission Section with Glass Cards */}
      <section className="py-32 bg-gradient-brand-light relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fadeLeft">
              <div className="space-y-8">
                <div className="inline-block">
                  <span className="text-brand font-semibold text-sm uppercase tracking-wider mb-4 px-4 py-2 bg-purple-50 rounded-full">
                    {t.missionLabel}
                  </span>
                </div>

                <h2
                  className={`font-bold text-gray-900 ${
                    language === "MM"
                      ? "text-3xl lg:text-5xl myanmar-heading"
                      : "text-4xl lg:text-6xl"
                  }`}
                >
                  {t.missionTitle}
                </h2>

                <div
                  className={`text-gray-600 space-y-6 text-lg leading-relaxed ${
                    language === "MM" ? "myanmar-text" : ""
                  }`}
                >
                  <p>{t.missionDescription}</p>
                  <p>{t.missionDescription2}</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeRight" delay={200}>
              <GlassCard className="text-center hover-lift">
                <div className="space-y-6">
                  <div className="mx-auto w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg border border-purple-200">
                    <img
                      src="/logo.png"
                      alt="LarLarBooks Logo"
                      className="h-12 w-12 object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    <BookOpen
                      className="h-12 w-12 text-purple-600 hidden"
                      style={{ display: "none" }}
                    />
                  </div>

                  <div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      1M+
                    </div>
                    <div
                      className={`text-gray-600 font-medium ${
                        language === "MM" ? "myanmar-text" : ""
                      }`}
                    >
                      {t.downloads}
                    </div>
                  </div>

                  <div className="flex justify-center space-x-4">
                    <div className="w-3 h-3 bg-brand rounded-full pulse-slow" />
                    <div
                      className="w-3 h-3 bg-brand-light rounded-full pulse-slow"
                      style={{ animationDelay: "1s" }}
                    />
                    <div
                      className="w-3 h-3 bg-brand-dark rounded-full pulse-slow"
                      style={{ animationDelay: "2s" }}
                    />
                  </div>
                </div>
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section with Apple Cards */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp" className="text-center mb-20">
            <span className="text-brand font-semibold text-sm uppercase tracking-wider mb-4 px-4 py-2 bg-purple-50 rounded-full inline-block">
              {t.valuesLabel}
            </span>
            <h2
              className={`font-bold text-gray-900 mb-8 ${
                language === "MM"
                  ? "text-3xl lg:text-5xl myanmar-heading"
                  : "text-4xl lg:text-6xl"
              }`}
            >
              {t.valuesTitle}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AppleCard key={value.id} delay={index * 100}>
                <div className="text-center space-y-6 hover-lift">
                  <div className="text-brand mb-6 flex justify-center transform hover:scale-110 transition-transform duration-300">
                    {getValueIcon(value.icon)}
                  </div>

                  <h3
                    className={`font-bold text-gray-900 mb-4 ${
                      language === "MM" ? "text-xl myanmar-text" : "text-2xl"
                    }`}
                  >
                    {value.title}
                  </h3>

                  <p
                    className={`text-gray-600 leading-relaxed ${
                      language === "MM" ? "myanmar-text text-sm" : ""
                    }`}
                  >
                    {value.description}
                  </p>

                  <div className="w-12 h-1 bg-gradient-brand rounded-full mx-auto" />
                </div>
              </AppleCard>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Counter Animation */}
      <section className="py-32 bg-gradient-to-r from-gray-900 via-purple-900 to-violet-900 text-white relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl floating" />
          <div
            className="absolute bottom-10 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl floating"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection animation="fadeUp" className="text-center mb-20">
            <span className="text-purple-300 font-semibold text-sm uppercase tracking-wider mb-4 px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full inline-block">
              {t.statsLabel}
            </span>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection
                key={index}
                animation="scale"
                delay={index * 150}
              >
                <div className="text-center group">
                  <div className="text-purple-300 mb-6 flex justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    {getStatIcon(stat.icon)}
                  </div>

                  <div className="text-5xl lg:text-6xl font-bold mb-4 gradient-text">
                    {stat.number}
                  </div>

                  <div
                    className={`text-purple-200 font-medium ${
                      language === "MM" ? "myanmar-text" : ""
                    }`}
                  >
                    {stat.label}
                  </div>

                  <div className="w-8 h-1 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full mx-auto mt-4 transform group-hover:w-16 transition-all duration-300" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section with Staggered Animation */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp" className="text-center mb-20">
            <span className="text-brand font-semibold text-sm uppercase tracking-wider mb-4 px-4 py-2 bg-white rounded-full inline-block">
              {t.teamLabel}
            </span>
            <h2
              className={`font-bold text-gray-900 mb-8 ${
                language === "MM"
                  ? "text-3xl lg:text-5xl myanmar-heading"
                  : "text-4xl lg:text-6xl"
              }`}
            >
              {t.teamTitle}
            </h2>
            <p
              className={`text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg ${
                language === "MM" ? "myanmar-text" : ""
              }`}
            >
              {t.teamDescription}
            </p>
          </AnimatedSection>

          <StaggeredList
            staggerDelay={150}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member) => (
              <div key={member.id} className="group">
                <AppleCard className="text-center hover:scale-105 transition-all duration-500">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-400 via-violet-500 to-indigo-600 rounded-full mx-auto mb-6 flex items-center justify-center relative overflow-hidden group-hover:shadow-2xl transition-all duration-300">
                      <span className="text-2xl font-bold text-white relative z-10">
                        {member.name.charAt(0)}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <h3
                      className={`font-bold text-gray-900 mb-2 ${
                        language === "MM" ? "myanmar-text" : ""
                      }`}
                    >
                      {member.name}
                    </h3>

                    <p
                      className={`text-brand font-medium mb-4 ${
                        language === "MM" ? "myanmar-text text-sm" : ""
                      }`}
                    >
                      {member.role}
                    </p>

                    <p
                      className={`text-gray-600 text-sm leading-relaxed ${
                        language === "MM" ? "myanmar-text" : ""
                      }`}
                    >
                      {member.bio}
                    </p>

                    <div className="flex justify-center space-x-2 mt-6">
                      <div className="w-2 h-2 bg-brand rounded-full" />
                      <div className="w-2 h-2 bg-brand-light rounded-full" />
                      <div className="w-2 h-2 bg-brand-dark rounded-full" />
                    </div>
                  </div>
                </AppleCard>
              </div>
            ))}
          </StaggeredList>
        </div>
      </section>

      {/* CTA Section with Apple Button */}
      <section className="py-32 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl floating" />
          <div
            className="absolute bottom-20 right-10 w-60 h-60 bg-white/10 rounded-full blur-3xl floating"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection animation="scale">
            <div className="space-y-8">
              <h2
                className={`font-bold mb-8 ${
                  language === "MM"
                    ? "text-3xl lg:text-5xl myanmar-heading"
                    : "text-4xl lg:text-6xl"
                }`}
              >
                {t.ctaTitle}
              </h2>

              <p
                className={`text-purple-100 mb-12 leading-relaxed text-lg ${
                  language === "MM" ? "myanmar-text" : ""
                }`}
              >
                {t.ctaDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="apple-button group">
                  <span className={language === "MM" ? "myanmar-text" : ""}>
                    {t.ctaButton}
                  </span>
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>

                <button className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full border-2 border-white text-white hover:bg-white hover:text-purple-600 transition-all duration-300">
                  <span className={language === "MM" ? "myanmar-text" : ""}>
                    {t.learnMore}
                  </span>
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
