import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import BookCard from "../components/BookCard";
import Footer from "../components/Footer";

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
    <div className="min-h-screen bg-purple-100">
      <Header />
      <Hero />

      {/* Single Book Section - Clean and Simple */}
      <main
        id="books-section"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        {/* Featured Book */}
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
      </main>

      <Footer />
    </div>
  );
};

export default Index;
