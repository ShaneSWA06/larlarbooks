import { useLanguage } from "./LanguageContext";

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
    <div className="bg-[#EEEEEE] rounded-2xl p-8 lg:p-12 shadow-lg border border-[#D9BBF9]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content */}
        <div className="space-y-6">
          {/* Category Badge */}
          <div className="inline-block bg-[#D9BBF9] text-[#7B5BA7] px-3 py-1 rounded-full text-sm font-medium">
            {t.programming}
          </div>

          {/* Title */}
          <h3 className="book-title text-3xl lg:text-4xl font-bold text-[#1A1A1A] leading-tight">
            {t.bookTitle}
          </h3>

          {/* Description */}
          <p className="book-description text-lg text-[#1A1A1A]/70 leading-relaxed">
            {t.bookDescription}
          </p>

          {/* Author Credit */}
          <div className="border-t border-[#D9BBF9] pt-6">
            <p className="text-[#1A1A1A] font-medium">— {t.authorName}</p>
          </div>
        </div>

        {/* Right Side - Book Cover */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-80 h-96 bg-gradient-to-br from-[#D9BBF9] to-[#A56ABD] rounded-xl shadow-lg flex items-center justify-center border border-[#7B5BA7]/20">
            <div className="text-8xl text-[#7B5BA7]">📚</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
