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
    <div className="bg-white rounded-2xl p-8 lg:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content */}
        <div className="space-y-6">
          {/* Category Badge */}
          <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {t.programming}
          </div>

          {/* Title */}
          <h3 className="book-title text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            {t.bookTitle}
          </h3>

          {/* Description */}
          <p className="book-description text-lg text-gray-600 leading-relaxed">
            {t.bookDescription}
          </p>

          {/* Author Credit */}
          <div className="border-t pt-6">
            <p className="text-gray-900 font-medium">— {t.authorName}</p>
          </div>
        </div>

        {/* Right Side - Book Cover */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-80 h-96 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl shadow-lg flex items-center justify-center">
            <div className="text-8xl text-blue-400">📚</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
