import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import BookCard from "../components/BookCard";
import Footer from "../components/Footer";
import {
  AnimatedSection,
  AppleCard,
  FloatingElement,
  StaggeredList,
  GlassCard,
} from "../hooks/useScrollAnimation";

const Index = () => {
  // Single featured book
  const featuredBook = {
    id: 1,
    title: "Advanced Programming Concepts",
    author: "Dr. Sarah Johnson",
    category: "Programming",
    rating: 5,
    reviews: 324,
    image: "/placeholder.svg",
    price: "Free",
    description:
      "Master the fundamentals of modern software development with comprehensive examples and practical exercises. This comprehensive guide covers advanced topics including design patterns, algorithms, data structures, and best practices for building scalable, maintainable applications.",
    downloads: 15420,
  };

  return (
    <div className="min-h-screen bg-[#D9BBF9] dark:bg-[#1A1A1A] transition-colors duration-300">
      <Header />
      <Hero />

      {/* Featured Section with Animation */}
      <section className="py-20 relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#A56ABD]/20 dark:bg-[#6E3482]/30 rounded-full blur-xl floating" />
        <div
          className="absolute bottom-10 right-10 w-24 h-24 bg-[#7B5BA7]/20 dark:bg-[#A56ABD]/30 rounded-full blur-xl floating"
          style={{ animationDelay: "1.5s" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header with Animation */}
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <div className="space-y-6">
              <span className="text-[#7B5BA7] dark:text-[#A56ABD] font-semibold text-sm uppercase tracking-wider px-4 py-2 bg-[#EEEEEE] dark:bg-[#231F20] rounded-full inline-block transition-colors duration-300">
                FEATURED RESOURCE
              </span>

              <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] dark:text-[#EEEEEE] transition-colors duration-300">
                Start Your Learning Journey
              </h2>

              <p className="text-[#1A1A1A]/70 dark:text-[#EEEEEE]/70 text-lg max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
                Discover our most popular educational resource, carefully
                crafted to help you master new skills and advance your career.
              </p>
            </div>
          </AnimatedSection>

          {/* Featured Book with Enhanced Animation */}
          <AnimatedSection animation="scale" delay={200}>
            <div className="relative">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#7B5BA7]/10 via-[#A56ABD]/10 to-[#6E3482]/10 dark:from-[#6E3482]/20 dark:via-[#A56ABD]/20 dark:to-[#7B5BA7]/20 rounded-3xl blur-xl transform scale-105"></div>

              {/* Main book card */}
              <div className="relative z-10 transform hover:scale-[1.02] transition-all duration-500">
                <BookCard
                  title={featuredBook.title}
                  author={featuredBook.author}
                  category={featuredBook.category}
                  rating={featuredBook.rating}
                  reviews={featuredBook.reviews}
                  image={featuredBook.image}
                  price={featuredBook.price}
                  description={featuredBook.description}
                  downloads={featuredBook.downloads}
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Additional Interactive Elements */}
          <AnimatedSection animation="fadeUp" delay={400} className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Quick Stats with Animation */}
              <FloatingElement delay={0}>
                <GlassCard className="text-center p-6 bg-[#EEEEEE]/80 dark:bg-[#231F20]/80 backdrop-blur-lg border border-[#D9BBF9] dark:border-[#6E3482] hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-[#7B5BA7] dark:text-[#A56ABD] mb-2 transition-colors duration-300">
                    10K+
                  </div>
                  <div className="text-[#1A1A1A]/70 dark:text-[#EEEEEE]/70 font-medium transition-colors duration-300">
                    Educational Resources
                  </div>
                </GlassCard>
              </FloatingElement>

              <FloatingElement delay={200}>
                <GlassCard className="text-center p-6 bg-[#EEEEEE]/80 dark:bg-[#231F20]/80 backdrop-blur-lg border border-[#D9BBF9] dark:border-[#6E3482] hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-[#7B5BA7] dark:text-[#A56ABD] mb-2 transition-colors duration-300">
                    50K+
                  </div>
                  <div className="text-[#1A1A1A]/70 dark:text-[#EEEEEE]/70 font-medium transition-colors duration-300">
                    Active Learners
                  </div>
                </GlassCard>
              </FloatingElement>

              <FloatingElement delay={400}>
                <GlassCard className="text-center p-6 bg-[#EEEEEE]/80 dark:bg-[#231F20]/80 backdrop-blur-lg border border-[#D9BBF9] dark:border-[#6E3482] hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-[#7B5BA7] dark:text-[#A56ABD] mb-2 transition-colors duration-300">
                    4.8★
                  </div>
                  <div className="text-[#1A1A1A]/70 dark:text-[#EEEEEE]/70 font-medium transition-colors duration-300">
                    Average Rating
                  </div>
                </GlassCard>
              </FloatingElement>
            </div>
          </AnimatedSection>

          {/* Call to Action with Animation */}
          <AnimatedSection
            animation="fadeUp"
            delay={600}
            className="text-center mt-20"
          >
            <div className="space-y-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-[#1A1A1A] dark:text-[#EEEEEE] transition-colors duration-300">
                Ready to Transform Your Learning?
              </h3>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="apple-button group">
                  <span>Explore More Books</span>
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

                <button className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full border-2 border-[#7B5BA7] dark:border-[#A56ABD] text-[#7B5BA7] dark:text-[#A56ABD] hover:bg-[#7B5BA7] dark:hover:bg-[#A56ABD] hover:text-[#EEEEEE] transition-all duration-300">
                  <span>Browse Categories</span>
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />

      {/* Additional CSS for enhanced animations */}
      <style>{`
        .floating {
          animation: floating 3s ease-in-out infinite;
        }

        @keyframes floating {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        /* Enhanced hover effects */
        .hover-glow:hover {
          box-shadow: 0 20px 40px rgba(123, 91, 167, 0.3);
          transform: translateY(-4px);
        }

        /* Pulse animation for stats */
        .stat-pulse {
          animation: stat-pulse 2s ease-in-out infinite;
        }

        @keyframes stat-pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        /* Gradient background animation */
        .animated-bg {
          background: linear-gradient(-45deg, #7B5BA7, #A56ABD, #6E3482, #D9BBF9);
          background-size: 400% 400%;
          animation: gradient-shift 15s ease infinite;
        }

        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
