import { useLanguage } from "./LanguageContext";
import { Download, Star, Users, ArrowRight } from "lucide-react";

interface BookCardProps {
  title: string;
  author: string;
  category: string;
  rating: number;
  reviews: number;
  image: string;
  price: string;
  description: string;
  downloads: number;
}

const BookCard = ({
  title,
  author,
  category,
  rating,
  reviews,
  image,
  price,
  description,
  downloads,
}: BookCardProps) => {
  const { t } = useLanguage();

  return (
    <div className="bg-[#EEEEEE] dark:bg-[#231F20] rounded-2xl p-8 lg:p-12 shadow-lg border border-[#D9BBF9] dark:border-[#6E3482] transition-all duration-300 hover:shadow-2xl hover:border-[#7B5BA7] dark:hover:border-[#A56ABD] group">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content */}
        <div className="space-y-6">
          {/* Category Badge with Animation */}
          <div className="inline-block bg-[#D9BBF9] dark:bg-[#6E3482] text-[#7B5BA7] dark:text-[#EEEEEE] px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:bg-[#7B5BA7] hover:text-[#EEEEEE] dark:hover:bg-[#A56ABD]">
            {t.programming}
          </div>

          {/* Title with Hover Effect */}
          <h3 className="book-title text-3xl lg:text-4xl font-bold text-[#1A1A1A] dark:text-[#EEEEEE] leading-tight transition-all duration-300 group-hover:text-[#7B5BA7] dark:group-hover:text-[#A56ABD]">
            {t.bookTitle}
          </h3>

          {/* Rating and Stats with Icons */}
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-1">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < rating
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300 dark:text-gray-600"
                    } transition-colors duration-200`}
                  />
                ))}
              </div>
              <span className="text-[#1A1A1A] dark:text-[#EEEEEE] font-medium ml-2 transition-colors duration-300">
                {rating}.0
              </span>
            </div>

            <div className="flex items-center space-x-1 text-[#1A1A1A]/60 dark:text-[#EEEEEE]/60 transition-colors duration-300">
              <Users className="h-4 w-4" />
              <span>{reviews} reviews</span>
            </div>

            <div className="flex items-center space-x-1 text-[#1A1A1A]/60 dark:text-[#EEEEEE]/60 transition-colors duration-300">
              <Download className="h-4 w-4" />
              <span>{downloads.toLocaleString()} downloads</span>
            </div>
          </div>

          {/* Description with Animation */}
          <p className="book-description text-lg text-[#1A1A1A]/70 dark:text-[#EEEEEE]/70 leading-relaxed transition-colors duration-300">
            {t.bookDescription}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="apple-button group/btn">
              <Download className="h-5 w-5 mr-2 group-hover/btn:animate-bounce" />
              <span>Download Now</span>
              <ArrowRight className="h-5 w-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </button>

            <button className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-full border-2 border-[#7B5BA7] dark:border-[#A56ABD] text-[#7B5BA7] dark:text-[#A56ABD] hover:bg-[#7B5BA7] dark:hover:bg-[#A56ABD] hover:text-[#EEEEEE] transition-all duration-300 hover:scale-105">
              <span>Preview</span>
            </button>
          </div>

          {/* Author Credit with Enhanced Styling */}
          <div className="border-t border-[#D9BBF9] dark:border-[#6E3482] pt-6 transition-colors duration-300">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#7B5BA7] to-[#A56ABD] rounded-full flex items-center justify-center">
                <span className="text-[#EEEEEE] font-bold text-sm">
                  {t.authorName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div>
                <p className="text-[#1A1A1A] dark:text-[#EEEEEE] font-medium transition-colors duration-300">
                  {t.authorName}
                </p>
                <p className="text-[#1A1A1A]/60 dark:text-[#EEEEEE]/60 text-sm transition-colors duration-300">
                  Software Development Expert
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Enhanced Book Cover */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative group/cover">
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#7B5BA7]/20 to-[#A56ABD]/20 dark:from-[#6E3482]/30 dark:to-[#7B5BA7]/30 rounded-xl blur-xl group-hover/cover:blur-2xl transition-all duration-300 transform group-hover/cover:scale-110"></div>

            {/* Main book cover */}
            <div className="relative w-80 h-96 bg-gradient-to-br from-[#D9BBF9] to-[#A56ABD] dark:from-[#6E3482] dark:to-[#7B5BA7] rounded-xl shadow-lg flex items-center justify-center border border-[#7B5BA7]/20 dark:border-[#A56ABD]/30 transition-all duration-300 transform group-hover/cover:scale-105 group-hover/cover:rotate-1 overflow-hidden">
              {/* Book spine effect */}
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-b from-[#6E3482] to-[#7B5BA7] dark:from-[#A56ABD] dark:to-[#D9BBF9] opacity-50"></div>

              {/* Content area */}
              <div className="text-center space-y-4 p-8">
                <div className="text-6xl text-[#7B5BA7] dark:text-[#D9BBF9] mb-4 transform group-hover/cover:scale-110 transition-transform duration-300">
                  📚
                </div>

                <div className="space-y-2">
                  <div className="h-2 bg-[#EEEEEE]/30 rounded w-24 mx-auto"></div>
                  <div className="h-2 bg-[#EEEEEE]/30 rounded w-32 mx-auto"></div>
                  <div className="h-2 bg-[#EEEEEE]/30 rounded w-20 mx-auto"></div>
                </div>
              </div>

              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#EEEEEE]/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover/cover:translate-x-[100%] transition-transform duration-1000"></div>

              {/* Price tag */}
              <div className="absolute top-4 right-4 bg-[#BAFF29] text-[#1A1A1A] px-3 py-1 rounded-full text-sm font-bold transform group-hover/cover:scale-110 transition-transform duration-300">
                FREE
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
