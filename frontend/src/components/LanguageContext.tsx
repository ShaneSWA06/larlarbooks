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

  // About Page - Hero
  aboutHeroTitle: string;
  aboutHeroSubtitle: string;

  // About Page - Mission
  missionLabel: string;
  missionTitle: string;
  missionDescription: string;
  missionDescription2: string;

  // About Page - Vision
  visionLabel: string;
  visionTitle: string;
  visionDescription: string;

  // About Page - Values
  valuesLabel: string;
  valuesTitle: string;
  accessibility: string;
  accessibilityDesc: string;
  quality: string;
  qualityDesc: string;
  community: string;
  communityDesc: string;
  innovation: string;
  innovationDesc: string;

  // About Page - Stats
  statsLabel: string;
  booksAvailable: string;
  activeUsers: string;
  countriesServed: string;
  satisfaction: string;

  // About Page - Team
  teamLabel: string;
  teamTitle: string;
  teamDescription: string;
  ceo: string;
  cto: string;
  designer: string;
  educator: string;

  // About Page - CTA
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;

  // Footer
  companyInfo: string;
  quickLinks: string;
  support: string;
  contactInfo: string;

  // Common Actions
  learnMore: string;
  viewAll: string;
  readMore: string;
  backToTop: string;

  // Category Labels
  allCategories: string;
  dataScience: string;
  business: string;
  psychology: string;
  finance: string;
  literature: string;
  science: string;

  // Book Card Actions
  preview: string;
  addToLibrary: string;
  share: string;
  favorite: string;

  // Filter & Sort
  sortBy: string;
  filterBy: string;
  newest: string;
  popular: string;
  rating_sort: string;
  priceLowest: string;
  priceHighest: string;

  // Pagination
  previous: string;
  next: string;
  page: string;
  of: string;
  showing: string;
  results: string;

  // Error Messages
  noResults: string;
  errorLoading: string;
  tryAgain: string;
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

    // About Page - Hero
    aboutHeroTitle: "About LarLarBooks",
    aboutHeroSubtitle:
      "We're building a living library that grows with learners, not just another static collection of books.",

    // About Page - Mission
    missionLabel: "OUR MISSION",
    missionTitle: "Democratizing Access to Quality Education",
    missionDescription:
      "At LarLarBooks, we believe that everyone deserves access to high-quality educational resources. We're not just another ebook platform – we're building a dynamic, living library that adapts to learners' needs and grows with the community.",
    missionDescription2:
      "Our platform connects learners with carefully curated educational content, from foundational concepts to advanced specialized knowledge, all designed to empower personal and professional growth.",

    // About Page - Vision
    visionLabel: "OUR VISION",
    visionTitle: "A World Where Knowledge Has No Boundaries",
    visionDescription:
      "We envision a future where geographical location, economic status, or language barriers don't limit anyone's access to quality education. Through technology and community, we're breaking down these barriers one book at a time.",

    // About Page - Values
    valuesLabel: "OUR VALUES",
    valuesTitle: "What Drives Us Forward",
    accessibility: "Accessibility",
    accessibilityDesc:
      "Education should be available to everyone, regardless of their background or circumstances.",
    quality: "Quality",
    qualityDesc:
      "We carefully curate and review all content to ensure the highest educational standards.",
    community: "Community",
    communityDesc:
      "Learning is better together. We foster a supportive community of learners and educators.",
    innovation: "Innovation",
    innovationDesc:
      "We continuously evolve our platform using the latest technology to enhance learning experiences.",

    // About Page - Stats
    statsLabel: "BY THE NUMBERS",
    booksAvailable: "Books Available",
    activeUsers: "Active Learners",
    countriesServed: "Countries Served",
    satisfaction: "Satisfaction Rate",

    // About Page - Team
    teamLabel: "OUR TEAM",
    teamTitle: "Meet the People Behind LarLarBooks",
    teamDescription:
      "We're a diverse group of educators, technologists, and dreamers united by a shared passion for democratizing education.",
    ceo: "CEO & Founder",
    cto: "CTO & Co-founder",
    designer: "Lead Designer",
    educator: "Head of Education",

    // About Page - CTA
    ctaTitle: "Ready to Start Your Learning Journey?",
    ctaDescription:
      "Join thousands of learners who are already transforming their lives through our educational resources.",
    ctaButton: "Get Started Today",

    // Footer
    companyInfo:
      "Your premier destination for educational ebooks and digital learning resources. Empowering minds through accessible knowledge.",
    quickLinks: "Quick Links",
    support: "Support",
    contactInfo: "Contact Info",

    // Common Actions
    learnMore: "Learn More",
    viewAll: "View All",
    readMore: "Read More",
    backToTop: "Back to Top",

    // Category Labels
    allCategories: "All Categories",
    dataScience: "Data Science",
    business: "Business",
    psychology: "Psychology",
    finance: "Finance",
    literature: "Literature",
    science: "Science",

    // Book Card Actions
    preview: "Preview",
    addToLibrary: "Add to Library",
    share: "Share",
    favorite: "Favorite",

    // Filter & Sort
    sortBy: "Sort By",
    filterBy: "Filter By",
    newest: "Newest",
    popular: "Most Popular",
    rating_sort: "Highest Rated",
    priceLowest: "Price: Low to High",
    priceHighest: "Price: High to Low",

    // Pagination
    previous: "Previous",
    next: "Next",
    page: "Page",
    of: "of",
    showing: "Showing",
    results: "results",

    // Error Messages
    noResults: "No books found in this category.",
    errorLoading: "Error loading content. Please try again.",
    tryAgain: "Try Again",
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
      "ခေတ်သစ်ဆော့ဖ်ဝဲလ်ဖွံ့ဖြိုးတိုးတက်မှု၏ အခြေခံအုတ်မြစ်များကို ကျယ်ကျယ်ပြန့်ပြန့် ဥပမာများနှင့် လက်တွေ့လေ့ကျင့်ခန်းများဖြင့် ကျွမ်းကျင်အောင် သင်ယူပါ။",
    bookTitle: "အဆင့်မြင့် ပရိုဂရမ်မင်းသဘောတရားများ",
    authorName: "ဒေါက်တာ စာရာ ဂျွန်ဆင်",

    // About Page - Hero
    aboutHeroTitle: "LarLarBooks အကြောင်း",
    aboutHeroSubtitle:
      "ကျွန်ုပ်တို့သည် သင်ယူသူများနှင့်အတူ ကြီးထွားနေသော သက်ရှိပညာတိုက်ကို တည်ဆောက်နေပါသည်။ ရိုးရိုး စာအုပ်စုစည်းမှုတစ်ခုမျှ မဟုတ်ပါ။",

    // About Page - Mission
    missionLabel: "ကျွန်ုပ်တို့၏ ရည်မှန်းချက်",
    missionTitle:
      "အရည်အသွေးမြင့် ပညာရေးကို လူတိုင်းလက်လှမ်းမီအောင် ဖြန့်ဝေခြင်း",
    missionDescription:
      "LarLarBooks တွင် လူတိုင်းသည် အရည်အသွေးမြင့် ပညာရေးအရင်းအမြစ်များကို ရရှိပိုင်ခွင့်ရှိသည်ဟု ကျွန်ုပ်တို့ယုံကြည်ပါသည်။ ကျွန်ုပ်တို့သည် ရိုးရိုး ebook ပလက်ဖောင်းတစ်ခုမျှ မဟုတ်ပါ။",
    missionDescription2:
      "ကျွန်ုပ်တို့၏ ပလက်ဖောင်းသည် သင်ယူသူများအား ဂရုတစိုက် ရွေးချယ်ထားသော ပညာရေးအကြောင်းအရာများနှင့် ဆက်သွယ်ပေးပါသည်။",

    // About Page - Vision
    visionLabel: "ကျွန်ုပ်တို့၏ အမြင်",
    visionTitle: "ဗဟုသုတတွင် နယ်နိမိတ်မရှိသော ကမ္ဘာကြီး",
    visionDescription:
      "ပထဝီဝင်တည်နေရာ၊ စီးပွားရေးအခြေအနေ သို့မဟုတ် ဘာသာစကားအတားအဆီးများက မည်သူ့ကိုမျှ အရည်အသွေးမြင့် ပညာရေးရရှိခြင်းကို ကန့်သတ်မထားသည့် အနာဂတ်ကို ကျွန်ုပ်တို့ မျှော်မှန်းပါသည်။",

    // About Page - Values
    valuesLabel: "ကျွန်ုပ်တို့၏ တန်ဖိုးများ",
    valuesTitle: "ကျွန်ုပ်တို့ကို တွန်းအားပေးသော အရာများ",
    accessibility: "လက်လှမ်းမီနိုင်မှု",
    accessibilityDesc:
      "ပညာရေးသည် နောက်ခံ သို့မဟုတ် အခြေအနေ မည်သို့ပင်ရှိစေကာမူ လူတိုင်းအတွက် ရရှိနိုင်သင့်ပါသည်။",
    quality: "အရည်အသွေး",
    qualityDesc:
      "အမြင့်ဆုံး ပညာရေးစံနှုန်းများကို သေချာစေရန် အကြောင်းအရာအားလုံးကို ဂရုတစိုက် ရွေးချယ်ပြီး ပြန်လည်သုံးသပ်ပါသည်။",
    community: "အသိုင်းအဝိုင်း",
    communityDesc:
      "အတူတကွ သင်ယူခြင်းသည် ပိုမိုကောင်းမွန်ပါသည်။ သင်ယူသူများနှင့် ပညာရှင်များ၏ ပံ့ပိုးမှုရှိသော အသိုင်းအဝိုင်းကို မွေးမြူပါသည်။",
    innovation: "ဆန်းသစ်တီထွင်မှု",
    innovationDesc:
      "သင်ယူမှုအတွေ့အကြုံများကို မြှင့်တင်ရန် နောက်ဆုံးပေါ် နည်းပညာကို အသုံးပြုပြီး ကျွန်ုပ်တို့၏ ပလက်ဖောင်းကို စဉ်ဆက်မပြတ် တိုးတက်စေပါသည်။",

    // About Page - Stats
    statsLabel: "ကိန်းဂဏန်းများဖြင့်",
    booksAvailable: "ရရှိနိုင်သော စာအုပ်များ",
    activeUsers: "တက်ကြွသင်ယူသူများ",
    countriesServed: "ဝန်ဆောင်မှုပေးသည့် နိုင်ငံများ",
    satisfaction: "ကျေနပ်မှုနှုန်း",

    // About Page - Team
    teamLabel: "ကျွန်ုပ်တို့၏ အဖွဲ့",
    teamTitle: "LarLarBooks နောက်ကွယ်မှ လူများနှင့် တွေ့ဆုံပါ",
    teamDescription:
      "ကျွန်ုပ်တို့သည် ပညာရေးကို လူတိုင်းလက်လှမ်းမီအောင်ပြုလုပ်ရန် တူညီသော စိတ်အားထက်သန်မှုဖြင့် ပေါင်းစည်းထားသော ပညာရှင်များ၊ နည်းပညာရှင်များနှင့် အိပ်မက်မက်သူများ၏ မတူကွဲပြားသော အဖွဲ့တစ်ခုဖြစ်ပါသည်။",
    ceo: "CEO နှင့် တည်ထောင်သူ",
    cto: "CTO နှင့် ပူးတွဲတည်ထောင်သူ",
    designer: "ဒီဇိုင်းအကြီးအကဲ",
    educator: "ပညာရေးအကြီးအကဲ",

    // About Page - CTA
    ctaTitle: "သင်၏ သင်ယူမှုခရီးကို စတင်ရန် အဆင်သင့်ဖြစ်ပြီလား?",
    ctaDescription:
      "ကျွန်ုပ်တို့၏ ပညာရေးအရင်းအမြစ်များမှတစ်ဆင့် ၎င်းတို့၏ ဘဝများကို ပြောင်းလဲနေသည့် သင်ယူသူ ထောင်ပေါင်းများစွာနှင့် ပါဝင်ပါ။",
    ctaButton: "ယနေ့ပင် စတင်ပါ",

    // Footer
    companyInfo:
      "ပညာရေးစာအုပ်များနှင့် ဒစ်ဂျစ်တယ်သင်ယူမှုအရင်းအမြစ်များအတွက် သင်၏ အဓိကနေရာ။ လက်လှမ်းမီနိုင်သော အသိပညာမှတစ်ဆင့် စိတ်ဉာဏ်များကို အားဖြည့်ပေးခြင်း။",
    quickLinks: "အမြန်လင့်များ",
    support: "ပံ့ပိုးမှု",
    contactInfo: "ဆက်သွယ်ရေးအချက်အလက်",

    // Common Actions
    learnMore: "နောက်ထပ်လေ့လာရန်",
    viewAll: "အားလုံးကြည့်ရန်",
    readMore: "နောက်ထပ်ဖတ်ရန်",
    backToTop: "အပေါ်သို့ပြန်သွားရန်",

    // Category Labels
    allCategories: "အမျိုးအစားအားလုံး",
    dataScience: "ဒေတာသိပ္ပံ",
    business: "စီးပွားရေး",
    psychology: "စိတ်ပညာ",
    finance: "ဘဏ္ဍာရေး",
    literature: "စာပေ",
    science: "သိပ္ပံ",

    // Book Card Actions
    preview: "အကြိုကြည့်ရှုရန်",
    addToLibrary: "စာကြည့်တိုက်တွင်ထည့်ရန်",
    share: "မျှဝေရန်",
    favorite: "နှစ်သက်သော",

    // Filter & Sort
    sortBy: "အလိုက်စီရန်",
    filterBy: "အလိုက်စစ်ရန်",
    newest: "အသစ်ဆုံး",
    popular: "လူကြိုက်များဆုံး",
    rating_sort: "အမြင့်ဆုံးအဆင့်သတ်မှတ်ချက်",
    priceLowest: "စျေးနှုန်း: နိမ့်မှမြင့်သို့",
    priceHighest: "စျေးနှုန်း: မြင့်မှနိမ့်သို့",

    // Pagination
    previous: "ယခင်",
    next: "နောက်",
    page: "စာမျက်နှာ",
    of: "၏",
    showing: "ပြသနေသော",
    results: "ရလဒ်များ",

    // Error Messages
    noResults: "ဤအမျိုးအစားတွင် စာအုပ်များ မတွေ့ရှိပါ။",
    errorLoading:
      "အကြောင်းအရာ ရယူရာတွင် အမှားရှိသည်။ ကျေးဇူးပြု၍ ပြန်လည်ကြိုးစားပါ။",
    tryAgain: "ပြန်လည်ကြိုးစားပါ",
  },
};

// Team member data with localized names
export const getTeamMembers = (language: Language) => [
  {
    id: 1,
    name: language === "MM" ? "အောင်ဘုန်းမြတ်" : "Aung Bone Myat",
    role: language === "MM" ? "CEO နှင့် တည်ထောင်သူ" : "CEO & Founder",
    image: "/ceoProfile.jpg",
    bio:
      language === "MM"
        ? "ပညာရေးနည်းပညာတွင် ၁၀ နှစ်ကျော် အတွေ့အကြုံရှိသူ"
        : "10+ years experience in educational technology",
  },
  {
    id: 2,
    name: language === "MM" ? "စု စု" : "Su Su",
    role: language === "MM" ? "CTO နှင့် ပူးတွဲတည်ထောင်သူ" : "CTO & Co-founder",
    image: "/placeholder.svg",
    bio:
      language === "MM"
        ? "ဆော့ဖ်ဝဲလ် တည်ဆောက်မှုနှင့် AI တွင် ကျွမ်းကျင်သူ"
        : "Expert in software architecture and AI",
  },
  {
    id: 3,
    name: language === "MM" ? "အေးလွင်" : "Aye Lwin",
    role: language === "MM" ? "ဒီဇိုင်းအကြီးအကဲ" : "Lead Designer",
    image: "/placeholder.svg",
    bio:
      language === "MM"
        ? "UX/UI ဒီဇိုင်းနှင့် အသုံးပြုသူ အတွေ့အကြုံတွင် အထူးကျွမ်းကျင်"
        : "Specialized in UX/UI design and user experience",
  },
  {
    id: 4,
    name: language === "MM" ? "ဒေါက်တာ သန့်လင်း" : "Dr. Thant Lin",
    role: language === "MM" ? "ပညာရေးအကြီးအကဲ" : "Head of Education",
    image: "/placeholder.svg",
    bio:
      language === "MM"
        ? "ပညာရေးပညာရှင်၊ ဒေါက်တာ ဘွဲ့ရ"
        : "PhD in Education, former university professor",
  },
];

// Category data with translations
export const getCategories = (language: Language) => [
  { id: "all", name: language === "MM" ? "အားလုံး" : "All" },
  {
    id: "programming",
    name: language === "MM" ? "ပရိုဂရမ်မင်း" : "Programming",
  },
  {
    id: "data-science",
    name: language === "MM" ? "ဒေတာသိပ္ပံ" : "Data Science",
  },
  { id: "business", name: language === "MM" ? "စီးပွားရေး" : "Business" },
  { id: "psychology", name: language === "MM" ? "စိတ်ပညာ" : "Psychology" },
  { id: "finance", name: language === "MM" ? "ဘဏ္ဍာရေး" : "Finance" },
  { id: "literature", name: language === "MM" ? "စာပေ" : "Literature" },
  { id: "science", name: language === "MM" ? "သိပ္ပံ" : "Science" },
];

// Values data for About page
export const getValues = (language: Language, translations: Translations) => [
  {
    id: 1,
    title: translations.accessibility,
    description: translations.accessibilityDesc,
    icon: "heart",
  },
  {
    id: 2,
    title: translations.quality,
    description: translations.qualityDesc,
    icon: "award",
  },
  {
    id: 3,
    title: translations.community,
    description: translations.communityDesc,
    icon: "users",
  },
  {
    id: 4,
    title: translations.innovation,
    description: translations.innovationDesc,
    icon: "lightbulb",
  },
];

// Stats data for About page
export const getStats = (language: Language, translations: Translations) => [
  {
    number: "10,000+",
    label: translations.booksAvailable,
    icon: "book",
  },
  {
    number: "50,000+",
    label: translations.activeUsers,
    icon: "users",
  },
  {
    number: "95+",
    label: translations.countriesServed,
    icon: "globe",
  },
  {
    number: "98%",
    label: translations.satisfaction,
    icon: "star",
  },
];

// Context interface
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  getTeamMembers: () => ReturnType<typeof getTeamMembers>;
  getCategories: () => ReturnType<typeof getCategories>;
  getValues: () => ReturnType<typeof getValues>;
  getStats: () => ReturnType<typeof getStats>;
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
    getTeamMembers: () => getTeamMembers(language),
    getCategories: () => getCategories(language),
    getValues: () => getValues(language, translations[language]),
    getStats: () => getStats(language, translations[language]),
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
