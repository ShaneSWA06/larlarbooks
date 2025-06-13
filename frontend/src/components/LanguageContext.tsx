import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

// Define language types
export type Language = "EN" | "MM";

// Translation interface
interface Translations {
  // Navigation
  home: string;
  categories: string;
  library: string;
  about: string;
  contact: string;
  signIn: string;
  getStarted: string;
  searchPlaceholder: string;

  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  exploreLibrary: string;
  howItWorks: string;

  // Stats
  ebooks: string;
  learners: string;
  rating: string;

  // Book Section
  featuredResource: string;
  programming: string;
  downloadNow: string;
  reviews: string;
  downloads: string;
  bookDescription: string;
  bookTitle: string;
  authorName: string;

  // Footer
  companyInfo: string;
  quickLinks: string;
  support: string;
  contactInfo: string;
}

// Translation data
const translations: Record<Language, Translations> = {
  EN: {
    // Navigation
    home: "Home",
    categories: "Categories",
    library: "Library",
    about: "About",
    contact: "Contact",
    signIn: "Sign In",
    getStarted: "Get Started",
    searchPlaceholder: "Search for books, authors, topics...",

    // Hero Section
    heroTitle: "Access a Living Library, Not Just Static 'Books'.",
    heroSubtitle:
      "No more endless searching through outdated resources. Discover and access quality educational content while building your personal learning library you've always wanted—in real time.",
    exploreLibrary: "Explore Library",
    howItWorks: "📖 How it works",

    // Stats
    ebooks: "Educational Resources",
    learners: "Active Learners",
    rating: "Average Rating",

    // Book Section
    featuredResource: "FEATURED RESOURCE",
    programming: "Programming",
    downloadNow: "Download Now",
    reviews: "reviews",
    downloads: "downloads",
    bookDescription:
      "Master the fundamentals of modern software development with comprehensive examples and practical exercises. This comprehensive guide covers advanced topics including design patterns, algorithms, data structures, and best practices for building scalable, maintainable applications.",
    bookTitle: "Advanced Programming Concepts",
    authorName: "Dr. Sarah Johnson",

    // Footer
    companyInfo:
      "Your premier destination for educational ebooks and digital learning resources. Empowering minds through accessible knowledge.",
    quickLinks: "Quick Links",
    support: "Support",
    contactInfo: "Contact Info",
  },
  MM: {
    // Navigation
    home: "မူလစာမျက်နှာ",
    categories: "အမျိုးအစားများ",
    library: "စာကြည့်တိုက်",
    about: "အကြောင်း",
    contact: "ဆက်သွယ်ရန်",
    signIn: "အကောင့်ဝင်ရန်",
    getStarted: "စတင်ရန်",
    searchPlaceholder: "စာအုပ်များ၊ စာရေးဆရာများ၊ အကြောင်းအရာများ ရှာရန်...",

    // Hero Section
    heroTitle: "တိုက်ရိုက်စာကြည့်တိုက်ကို ရယူပါ၊ ပုံသေစာအုပ်များသာ မဟုတ်ပါ။",
    heroSubtitle:
      "ခေတ်နောက်ကျသော အရင်းအမြစ်များကို ရှာဖွေနေရန် မလိုတော့ပါ။ အရည်အသွေးမြင့် ပညာရေးဆိုင်ရာ အကြောင်းအရာများကို ရှာဖွေပြီး သင်၏ ကိုယ်ပိုင်သင်ယူမှု စာကြည့်တိုက်ကို တည်ဆောက်ပါ။",
    exploreLibrary: "စာကြည့်တိုက်ကို ရှာဖွေပါ",
    howItWorks: "📖 လုပ်ဆောင်ပုံ",

    // Stats
    ebooks: "ပညာရေးအရင်းအမြစ်များ",
    learners: "တက်ကြွသူများ",
    rating: "ပျမ်းမျှအဆင့်သတ်မှတ်ချက်",

    // Book Section
    featuredResource: "အထူးပြုအရင်းအမြစ်",
    programming: "ပရိုဂရမ်မင်း",
    downloadNow: "ယခုဒေါင်းလုဒ်လုပ်ပါ",
    reviews: "သုံးသပ်ချက်များ",
    downloads: "ဒေါင်းလုဒ်များ",
    bookDescription:
      "ခေတ်သစ်ဆော့ဖ်ဝဲလ်ဖွံ့ဖြိုးတိုးတက်မှု၏ အခြေခံအုတ်မြစ်များကို ကျယ်ကျယ်ပြန့်ပြန့် ဥပမာများနှင့် လက်တွေ့လေ့ကျင့်ခန်းများဖြင့် ကျွမ်းကျင်အောင် သင်ယူပါ။ ဤကျယ်ကျယ်ပြန့်ပြန့် လမ်းညွှန်သည် ဒီဇိုင်းပုံစံများ၊ အယ်လဂိုရီသမ်များ၊ ဒေတာဖွဲ့စည်းပုံများနှင့် တိုးချဲ့နိုင်၊ ထိန်းသိမ်းနိုင်သော အပလီကေးရှင်းများ တည်ဆောက်ရန် အကောင်းဆုံးနည်းလမ်းများကို လွှမ်းခြုံထားပါသည်။",
    bookTitle: "အဆင့်မြင့် ပရိုဂရမ်မင်းသဘောတရားများ",
    authorName: "ဒေါက်တာ စာရာ ဂျွန်ဆင်",

    // Footer
    companyInfo:
      "ပညာရေးစာအုပ်များနှင့် ဒစ်ဂျစ်တယ်သင်ယူမှုအရင်းအမြစ်များအတွက် သင်၏ အဓိကနေရာ။ လက်လှမ်းမီနိုင်သော အသိပညာမှတစ်ဆင့် စိတ်ဉာဏ်များကို အားဖြည့်ပေးခြင်း။",
    quickLinks: "အမြန်လင့်များ",
    support: "ပံ့ပိုးမှု",
    contactInfo: "ဆက်သွယ်ရေးအချက်အလက်",
  },
};

// Context interface
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

// Create context
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Provider component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("EN");

  // Apply CSS classes based on language with force refresh
  const changeLanguage = (lang: Language) => {
    setLanguage(lang);

    // Apply CSS classes immediately
    const htmlElement = document.documentElement;

    // Remove all existing language classes
    htmlElement.classList.remove("myanmar", "english");

    // Add the new language class
    if (lang === "MM") {
      htmlElement.classList.add("myanmar");
      htmlElement.setAttribute("lang", "my");
    } else {
      htmlElement.classList.add("english");
      htmlElement.setAttribute("lang", "en");
    }

    // Force a reflow to ensure CSS is applied
    htmlElement.offsetHeight;

    // Trigger a style recalculation
    setTimeout(() => {
      const elements = document.querySelectorAll("*");
      elements.forEach((el) => {
        if (el instanceof HTMLElement) {
          el.style.transform = "translateZ(0)";
          setTimeout(() => {
            el.style.transform = "";
          }, 0);
        }
      });
    }, 50);
  };

  // Initialize language classes on mount
  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.classList.add("english");
    htmlElement.setAttribute("lang", "en");
  }, []);

  const value = {
    language,
    setLanguage: changeLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export default LanguageContext;
