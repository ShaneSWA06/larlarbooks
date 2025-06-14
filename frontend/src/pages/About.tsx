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
    <div className="min-h-screen bg-[#EEEEEE] dark:bg-[#1A1A1A] transition-colors duration-300">
      <Header />

      {/* Hero Section with Parallax - Dark Mode Support */}
      <ParallaxBackground
        speed={0.3}
        className="min-h-screen bg-gradient-to-br from-[#7B5BA7] via-[#6E3482] to-[#A56ABD] dark:from-[#1A1A1A] dark:via-[#231F20] dark:to-[#6E3482] relative transition-colors duration-300"
      >
        <div className="absolute inset-0 bg-black/20 dark:bg-black/40" />
        <div className="relative z-20 min-h-screen flex items-center justify-center text-[#EEEEEE] pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <HeroText>
              <div className="space-y-8">
                {/* Floating icons */}
                <div className="flex justify-center space-x-4 mb-8">
                  <FloatingElement delay={0}>
                    <div className="p-4 bg-[#EEEEEE]/10 dark:bg-[#231F20]/20 backdrop-blur-lg rounded-full border border-[#EEEEEE]/20 dark:border-[#A56ABD]/30">
                      <img
                        src="/logo.png"
                        alt="LarLarBooks Logo"
                        className="h-8 w-8 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                      <BookOpen
                        className="h-8 w-8 text-[#A56ABD] dark:text-[#D9BBF9] hidden"
                        style={{ display: "none" }}
                      />
                    </div>
                  </FloatingElement>
                  <FloatingElement delay={200}>
                    <div className="p-4 bg-[#EEEEEE]/10 dark:bg-[#231F20]/20 backdrop-blur-lg rounded-full">
                      <Sparkles className="h-8 w-8 text-[#D9BBF9] dark:text-[#A56ABD]" />
                    </div>
                  </FloatingElement>
                  <FloatingElement delay={400}>
                    <div className="p-4 bg-[#EEEEEE]/10 dark:bg-[#231F20]/20 backdrop-blur-lg rounded-full">
                      <Zap className="h-8 w-8 text-[#6E3482] dark:text-[#7B5BA7]" />
                    </div>
                  </FloatingElement>
                </div>

                <h1
                  className={`font-bold leading-tight text-[#EEEEEE] mb-8 dark:gradient-text ${
                    language === "MM"
                      ? "text-4xl lg:text-6xl myanmar-heading"
                      : "text-6xl lg:text-8xl"
                  }`}
                >
                  {t.aboutHeroTitle}
                </h1>

                <p
                  className={`text-[#D9BBF9] dark:text-[#A56ABD] leading-relaxed max-w-4xl mx-auto mb-12 transition-colors duration-300 ${
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
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#A56ABD]/20 dark:bg-[#6E3482]/30 rounded-full blur-xl floating" />
        <div
          className="absolute top-40 right-20 w-32 h-32 bg-[#D9BBF9]/20 dark:bg-[#A56ABD]/30 rounded-full blur-xl floating"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-40 left-1/4 w-16 h-16 bg-[#6E3482]/20 dark:bg-[#7B5BA7]/30 rounded-full blur-xl floating"
          style={{ animationDelay: "2s" }}
        />
      </ParallaxBackground>

      {/* Mission Section with Glass Cards - Dark Mode Support */}
      <section className="py-32 bg-gradient-to-r from-[#D9BBF9]/20 to-[#A56ABD]/20 dark:from-[#231F20]/50 dark:to-[#6E3482]/30 relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fadeLeft">
              <div className="space-y-8">
                <div className="inline-block">
                  <span className="text-[#7B5BA7] dark:text-[#A56ABD] font-semibold text-sm uppercase tracking-wider mb-4 px-4 py-2 bg-[#D9BBF9] dark:bg-[#231F20] rounded-full transition-colors duration-300">
                    {t.missionLabel}
                  </span>
                </div>

                <h2
                  className={`font-bold text-[#1A1A1A] dark:text-[#EEEEEE] transition-colors duration-300 ${
                    language === "MM"
                      ? "text-3xl lg:text-5xl myanmar-heading"
                      : "text-4xl lg:text-6xl"
                  }`}
                >
                  {t.missionTitle}
                </h2>

                <div
                  className={`text-[#1A1A1A]/70 dark:text-[#EEEEEE]/70 space-y-6 text-lg leading-relaxed transition-colors duration-300 ${
                    language === "MM" ? "myanmar-text" : ""
                  }`}
                >
                  <p>{t.missionDescription}</p>
                  <p>{t.missionDescription2}</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeRight" delay={200}>
              <GlassCard className="text-center hover-lift bg-[#EEEEEE]/80 dark:bg-[#231F20]/80 backdrop-blur-lg border border-[#D9BBF9] dark:border-[#6E3482] transition-colors duration-300">
                <div className="space-y-6">
                  <div className="mx-auto w-24 h-24 bg-[#EEEEEE] dark:bg-[#231F20] rounded-full flex items-center justify-center shadow-lg border border-[#D9BBF9] dark:border-[#A56ABD] transition-colors duration-300">
                    <img
                      src="/logo.png"
                      alt="LarLarBooks Logo"
                      className="h-12 w-12 object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    <BookOpen
                      className="h-12 w-12 text-[#7B5BA7] dark:text-[#A56ABD] hidden"
                      style={{ display: "none" }}
                    />
                  </div>

                  <div>
                    <div className="text-4xl font-bold text-[#1A1A1A] dark:text-[#EEEEEE] mb-2 transition-colors duration-300">
                      1M+
                    </div>
                    <div
                      className={`text-[#1A1A1A]/60 dark:text-[#EEEEEE]/60 font-medium transition-colors duration-300 ${
                        language === "MM" ? "myanmar-text" : ""
                      }`}
                    >
                      {t.downloads}
                    </div>
                  </div>

                  <div className="flex justify-center space-x-4">
                    <div className="w-3 h-3 bg-[#7B5BA7] dark:bg-[#A56ABD] rounded-full pulse-slow" />
                    <div
                      className="w-3 h-3 bg-[#A56ABD] dark:bg-[#D9BBF9] rounded-full pulse-slow"
                      style={{ animationDelay: "1s" }}
                    />
                    <div
                      className="w-3 h-3 bg-[#6E3482] dark:bg-[#7B5BA7] rounded-full pulse-slow"
                      style={{ animationDelay: "2s" }}
                    />
                  </div>
                </div>
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section with Apple Cards - Dark Mode Support */}
      <section className="py-32 bg-[#EEEEEE] dark:bg-[#1A1A1A] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp" className="text-center mb-20">
            <span className="text-[#7B5BA7] dark:text-[#A56ABD] font-semibold text-sm uppercase tracking-wider mb-4 px-4 py-2 bg-[#D9BBF9] dark:bg-[#231F20] rounded-full inline-block transition-colors duration-300">
              {t.valuesLabel}
            </span>
            <h2
              className={`font-bold text-[#1A1A1A] dark:text-[#EEEEEE] mb-8 transition-colors duration-300 ${
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
              <AppleCard
                key={value.id}
                delay={index * 100}
                className="bg-[#EEEEEE] dark:bg-[#231F20] border border-[#D9BBF9] dark:border-[#6E3482] transition-colors duration-300"
              >
                <div className="text-center space-y-6 hover-lift">
                  <div className="text-[#7B5BA7] dark:text-[#A56ABD] mb-6 flex justify-center transform hover:scale-110 transition-all duration-300">
                    {getValueIcon(value.icon)}
                  </div>

                  <h3
                    className={`font-bold text-[#1A1A1A] dark:text-[#EEEEEE] mb-4 transition-colors duration-300 ${
                      language === "MM" ? "text-xl myanmar-text" : "text-2xl"
                    }`}
                  >
                    {value.title}
                  </h3>

                  <p
                    className={`text-[#1A1A1A]/70 dark:text-[#EEEEEE]/70 leading-relaxed transition-colors duration-300 ${
                      language === "MM" ? "myanmar-text text-sm" : ""
                    }`}
                  >
                    {value.description}
                  </p>

                  <div className="w-12 h-1 bg-gradient-to-r from-[#7B5BA7] to-[#6E3482] dark:from-[#A56ABD] dark:to-[#7B5BA7] rounded-full mx-auto" />
                </div>
              </AppleCard>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Counter Animation - Dark Mode Support */}
      <section className="py-32 bg-gradient-to-r from-[#1A1A1A] via-[#7B5BA7] to-[#6E3482] dark:from-[#231F20] dark:via-[#6E3482] dark:to-[#A56ABD] text-[#EEEEEE] relative overflow-hidden transition-colors duration-300">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-1/4 w-64 h-64 bg-[#A56ABD]/10 dark:bg-[#D9BBF9]/10 rounded-full blur-3xl floating" />
          <div
            className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#D9BBF9]/10 dark:bg-[#A56ABD]/10 rounded-full blur-3xl floating"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection animation="fadeUp" className="text-center mb-20">
            <span className="text-[#D9BBF9] dark:text-[#A56ABD] font-semibold text-sm uppercase tracking-wider mb-4 px-4 py-2 bg-[#EEEEEE]/10 dark:bg-[#231F20]/20 backdrop-blur-lg rounded-full inline-block transition-colors duration-300">
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
                  <div className="text-[#A56ABD] dark:text-[#D9BBF9] mb-6 flex justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    {getStatIcon(stat.icon)}
                  </div>

                  <div className="text-5xl lg:text-6xl font-bold mb-4 text-[#EEEEEE]">
                    {stat.number}
                  </div>

                  <div
                    className={`text-[#D9BBF9] dark:text-[#A56ABD] font-medium transition-colors duration-300 ${
                      language === "MM" ? "myanmar-text" : ""
                    }`}
                  >
                    {stat.label}
                  </div>

                  <div className="w-8 h-1 bg-gradient-to-r from-[#A56ABD] to-[#D9BBF9] dark:from-[#D9BBF9] dark:to-[#A56ABD] rounded-full mx-auto mt-4 transform group-hover:w-16 transition-all duration-300" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section with Staggered Animation - Dark Mode Support */}
      <section className="py-32 bg-[#D9BBF9]/20 dark:bg-[#231F20]/50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp" className="text-center mb-20">
            <span className="text-[#7B5BA7] dark:text-[#A56ABD] font-semibold text-sm uppercase tracking-wider mb-4 px-4 py-2 bg-[#EEEEEE] dark:bg-[#231F20] rounded-full inline-block transition-colors duration-300">
              {t.teamLabel}
            </span>
            <h2
              className={`font-bold text-[#1A1A1A] dark:text-[#EEEEEE] mb-8 transition-colors duration-300 ${
                language === "MM"
                  ? "text-3xl lg:text-5xl myanmar-heading"
                  : "text-4xl lg:text-6xl"
              }`}
            >
              {t.teamTitle}
            </h2>
            <p
              className={`text-[#1A1A1A]/70 dark:text-[#EEEEEE]/70 max-w-3xl mx-auto leading-relaxed text-lg transition-colors duration-300 ${
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
                <AppleCard className="text-center hover:scale-105 transition-all duration-500 bg-[#EEEEEE] dark:bg-[#231F20] border border-[#D9BBF9] dark:border-[#6E3482]">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#A56ABD] via-[#D9BBF9] to-[#6E3482] dark:from-[#6E3482] dark:via-[#A56ABD] dark:to-[#D9BBF9] rounded-full mx-auto mb-6 flex items-center justify-center relative overflow-hidden group-hover:shadow-2xl transition-all duration-300">
                      <span className="text-2xl font-bold text-[#EEEEEE] relative z-10">
                        {member.name.charAt(0)}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-br from-[#EEEEEE]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <h3
                      className={`font-bold text-[#1A1A1A] dark:text-[#EEEEEE] mb-2 transition-colors duration-300 ${
                        language === "MM" ? "myanmar-text" : ""
                      }`}
                    >
                      {member.name}
                    </h3>

                    <p
                      className={`text-[#7B5BA7] dark:text-[#A56ABD] font-medium mb-4 transition-colors duration-300 ${
                        language === "MM" ? "myanmar-text text-sm" : ""
                      }`}
                    >
                      {member.role}
                    </p>

                    <p
                      className={`text-[#1A1A1A]/70 dark:text-[#EEEEEE]/70 text-sm leading-relaxed transition-colors duration-300 ${
                        language === "MM" ? "myanmar-text" : ""
                      }`}
                    >
                      {member.bio}
                    </p>

                    <div className="flex justify-center space-x-2 mt-6">
                      <div className="w-2 h-2 bg-[#7B5BA7] dark:bg-[#A56ABD] rounded-full" />
                      <div className="w-2 h-2 bg-[#A56ABD] dark:bg-[#D9BBF9] rounded-full" />
                      <div className="w-2 h-2 bg-[#6E3482] dark:bg-[#7B5BA7] rounded-full" />
                    </div>
                  </div>
                </AppleCard>
              </div>
            ))}
          </StaggeredList>
        </div>
      </section>

      {/* CTA Section with Apple Button - Dark Mode Support */}
      <section className="py-32 bg-gradient-to-r from-[#7B5BA7] to-[#6E3482] dark:from-[#231F20] dark:to-[#6E3482] text-[#EEEEEE] relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-40 h-40 bg-[#EEEEEE]/10 dark:bg-[#A56ABD]/10 rounded-full blur-2xl floating" />
          <div
            className="absolute bottom-20 right-10 w-60 h-60 bg-[#EEEEEE]/10 dark:bg-[#D9BBF9]/10 rounded-full blur-3xl floating"
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
                className={`text-[#D9BBF9] dark:text-[#A56ABD] mb-12 leading-relaxed text-lg transition-colors duration-300 ${
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

                <button className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full border-2 border-[#EEEEEE] text-[#EEEEEE] hover:bg-[#EEEEEE] hover:text-[#7B5BA7] dark:hover:text-[#6E3482] transition-all duration-300">
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
