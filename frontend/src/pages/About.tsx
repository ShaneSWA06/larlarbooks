import Header from "../components/Header";
import Footer from "../components/Footer";
import { BookOpen, Users, Award, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            About LarLarBooks
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
            We're building a living library that grows with learners, not just
            another static collection of books.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="space-y-6">
              <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                OUR MISSION
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Democratizing Access to Quality Education
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                At LarLarBooks, we believe that everyone deserves access to
                high-quality educational resources. We're not just another ebook
                platform – we're building a dynamic, living library that adapts
                to learners' needs and grows with the community.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Our platform connects learners with carefully curated
                educational content, from programming and data science to
                business and psychology. We focus on quality over quantity,
                ensuring every resource meets our high standards for educational
                value.
              </p>
            </div>

            {/* Right - Image/Icon */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                <BookOpen className="h-32 w-32 text-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              What We Stand For
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our values guide everything we do, from content curation to
              community building.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quality */}
            <div className="text-center space-y-4">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Quality First</h3>
              <p className="text-gray-600">
                Every resource is carefully reviewed and curated to ensure it
                meets our high standards for educational value and clarity.
              </p>
            </div>

            {/* Accessibility */}
            <div className="text-center space-y-4">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">For Everyone</h3>
              <p className="text-gray-600">
                Education should be accessible to all. We offer free resources
                alongside premium content to serve learners at every level.
              </p>
            </div>

            {/* Growth */}
            <div className="text-center space-y-4">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Continuous Growth
              </h3>
              <p className="text-gray-600">
                We're constantly evolving, adding new resources and improving
                our platform based on community feedback and learning trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 lg:p-12">
            <div className="space-y-6">
              <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                OUR STORY
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                From Idea to Impact
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                LarLarBooks started with a simple observation: while there are
                thousands of educational resources available online, finding
                quality content that truly helps you learn can be overwhelming
                and time-consuming.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                We set out to solve this problem by creating a curated platform
                where every resource is vetted for quality and relevance. Our
                team of educators and industry experts work together to build a
                library that serves real learning needs.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Today, LarLarBooks serves thousands of learners worldwide, from
                students just starting their journey to professionals looking to
                advance their careers. We're proud to be part of their learning
                story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-blue-100">Numbers that matter to us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-white">10K+</div>
              <div className="text-blue-100">Educational Resources</div>
            </div>

            <div className="space-y-2">
              <div className="text-4xl font-bold text-white">50K+</div>
              <div className="text-blue-100">Active Learners</div>
            </div>

            <div className="space-y-2">
              <div className="text-4xl font-bold text-white">4.8★</div>
              <div className="text-blue-100">Average Rating</div>
            </div>

            <div className="space-y-2">
              <div className="text-4xl font-bold text-white">95%</div>
              <div className="text-blue-100">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
