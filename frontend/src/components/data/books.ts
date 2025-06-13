export interface Book {
  id: number;
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

export const books: Book[] = [
  {
    id: 1,
    title: "Advanced Programming Concepts",
    author: "Dr. Sarah Johnson",
    category: "Programming",
    rating: 5,
    reviews: 324,
    image: "/placeholder.svg",
    price: "Free",
    description:
      "Master the fundamentals of modern software development with comprehensive examples and practical exercises.",
    downloads: 15420,
  },
  {
    id: 2,
    title: "Data Science Fundamentals",
    author: "Prof. Michael Chen",
    category: "Data Science",
    rating: 4,
    reviews: 287,
    image: "/placeholder.svg",
    price: "$19.99",
    description:
      "Learn data analysis, visualization, and machine learning techniques from industry experts.",
    downloads: 12890,
  },
  {
    id: 3,
    title: "Digital Marketing Strategy",
    author: "Emma Rodriguez",
    category: "Business",
    rating: 5,
    reviews: 456,
    image: "/placeholder.svg",
    price: "$24.99",
    description:
      "Complete guide to modern digital marketing techniques and strategies for business growth.",
    downloads: 18650,
  },
  {
    id: 4,
    title: "Introduction to Psychology",
    author: "Dr. James Wilson",
    category: "Psychology",
    rating: 4,
    reviews: 189,
    image: "/placeholder.svg",
    price: "Free",
    description:
      "Explore the fascinating world of human behavior and mental processes.",
    downloads: 9340,
  },
  {
    id: 5,
    title: "Modern Web Development",
    author: "Alex Thompson",
    category: "Programming",
    rating: 5,
    reviews: 512,
    image: "/placeholder.svg",
    price: "$29.99",
    description:
      "Build modern web applications using the latest technologies and best practices.",
    downloads: 22100,
  },
  {
    id: 6,
    title: "Financial Planning 101",
    author: "Lisa Anderson",
    category: "Finance",
    rating: 4,
    reviews: 298,
    image: "/placeholder.svg",
    price: "$16.99",
    description:
      "Essential guide to personal finance management and investment strategies.",
    downloads: 11780,
  },
  {
    id: 7,
    title: "Machine Learning Basics",
    author: "Dr. Robert Kim",
    category: "Data Science",
    rating: 5,
    reviews: 423,
    image: "/placeholder.svg",
    price: "$34.99",
    description:
      "Introduction to machine learning algorithms and their practical applications.",
    downloads: 16540,
  },
  {
    id: 8,
    title: "Creative Writing Workshop",
    author: "Sophie Martinez",
    category: "Literature",
    rating: 4,
    reviews: 167,
    image: "/placeholder.svg",
    price: "Free",
    description:
      "Develop your creative writing skills with exercises and techniques from published authors.",
    downloads: 7890,
  },
  {
    id: 9,
    title: "Environmental Science Today",
    author: "Dr. Green Peters",
    category: "Science",
    rating: 5,
    reviews: 234,
    image: "/placeholder.svg",
    price: "$21.99",
    description:
      "Current environmental challenges and sustainable solutions for the future.",
    downloads: 13250,
  },
];

export const categories = [
  "All",
  "Programming",
  "Data Science",
  "Business",
  "Psychology",
  "Finance",
  "Literature",
  "Science",
];
