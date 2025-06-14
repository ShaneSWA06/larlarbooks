import {
  BookOpen,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  // Footer-specific translations
  const footerTranslations = {
    EN: {
      // Company Info
      companyName: "LarLarBooks",
      companyDescription:
        "Your premier destination for educational ebooks and digital learning resources. Empowering minds through accessible knowledge.",

      // Quick Links
      quickLinksTitle: "Quick Links",
      browseBooks: "Browse Books",
      categories: "Categories",
      featured: "Featured",
      newReleases: "New Releases",
      bestSellers: "Best Sellers",

      // Support
      supportTitle: "Support",
      helpCenter: "Help Center",
      contactUs: "Contact Us",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      faq: "FAQ",

      // Contact Info
      contactInfoTitle: "Contact Info",
      email: "info@larlarbooks.com",
      phone: "+95 (9) 123-456-789",
      address: "123 Education St, Yangon, Myanmar",

      // Copyright
      copyright:
        "© 2024 LarLarBooks. All rights reserved. Made with ❤️ for learners worldwide.",
    },

    MM: {
      // Company Info
      companyName: "LarLarBooks",
      companyDescription:
        "ပညာရေးစာအုပ်များနှင့် ဒစ်ဂျစ်တယ်သင်ယူမှုအရင်းအမြစ်များအတွက် သင်၏ အဓိကနေရာ။ လက်လှမ်းမီနိုင်သော အသိပညာမှတစ်ဆင့် စိတ်ဉာဏ်များကို အားဖြည့်ပေးခြင်း။",

      // Quick Links
      quickLinksTitle: "အမြန်လင့်များ",
      browseBooks: "စာအုပ်များရှာဖွေရန်",
      categories: "အမျိုးအစားများ",
      featured: "အထူးပြု",
      newReleases: "အသစ်ထွက်များ",
      bestSellers: "အရောင်းရဆုံးများ",

      // Support
      supportTitle: "ပံ့ပိုးမှု",
      helpCenter: "အကူအညီဗဟိုချက်",
      contactUs: "ကျွန်ုပ်တို့ကို ဆက်သွယ်ပါ",
      privacyPolicy: "ကိုယ်ရေးကိုယ်တာမူဝါဒ",
      termsOfService: "ဝန်ဆောင်မှုစည်းမျဉ်းများ",
      faq: "မကြာခဏမေးသောမေးခွန်းများ",

      // Contact Info
      contactInfoTitle: "ဆက်သွယ်ရေးအချက်အလက်",
      email: "info@larlarbooks.com",
      phone: "+95 (9) 123-456-789",
      address: "123 ပညာရေးလမ်း၊ ရန်ကုန်မြို့၊ မြန်မာနိုင်ငံ",

      // Copyright
      copyright:
        "© 2024 LarLarBooks။ မူပိုင်ခွင့်အားလုံးကို ကျွန်ုပ်တို့မှ သိမ်းဆည်းထားပါသည်။ ကမ္ဘာတစ်ဝှမ်းရှိ သင်ယူသူများအတွက် ❤️ ဖြင့် ပြုလုပ်ထားပါသည်။",
    },
  };

  const ft = footerTranslations[language];

  // Navigation handler that preserves language state
  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-white rounded-xl p-2.5 shadow-lg border border-purple-200">
                <img
                  src="/logo.png"
                  alt="LarLarBooks Logo"
                  className="h-8 w-8 object-contain"
                  onError={(e) => {
                    // Fallback to BookOpen icon if image fails to load
                    e.currentTarget.style.display = "none";
                  }}
                />
                <BookOpen
                  className="h-8 w-8 text-purple-400 hidden"
                  style={{ display: "none" }}
                />
              </div>
              <span
                className={`text-2xl font-bold ${
                  language === "MM" ? "myanmar-text" : ""
                }`}
              >
                {ft.companyName}
              </span>
            </div>
            <p
              className={`text-gray-300 leading-relaxed ${
                language === "MM" ? "myanmar-text text-sm" : ""
              }`}
            >
              {ft.companyDescription}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className={`text-lg font-semibold mb-4 ${
                language === "MM" ? "myanmar-text" : ""
              }`}
            >
              {ft.quickLinksTitle}
            </h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigation("/")}
                  className={`text-gray-300 hover:text-purple-400 transition-colors text-left ${
                    language === "MM" ? "myanmar-text text-sm" : ""
                  }`}
                >
                  {ft.browseBooks}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/categories")}
                  className={`text-gray-300 hover:text-purple-400 transition-colors text-left ${
                    language === "MM" ? "myanmar-text text-sm" : ""
                  }`}
                >
                  {ft.categories}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/featured")}
                  className={`text-gray-300 hover:text-purple-400 transition-colors text-left ${
                    language === "MM" ? "myanmar-text text-sm" : ""
                  }`}
                >
                  {ft.featured}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/new-releases")}
                  className={`text-gray-300 hover:text-purple-400 transition-colors text-left ${
                    language === "MM" ? "myanmar-text text-sm" : ""
                  }`}
                >
                  {ft.newReleases}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/best-sellers")}
                  className={`text-gray-300 hover:text-purple-400 transition-colors text-left ${
                    language === "MM" ? "myanmar-text text-sm" : ""
                  }`}
                >
                  {ft.bestSellers}
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3
              className={`text-lg font-semibold mb-4 ${
                language === "MM" ? "myanmar-text" : ""
              }`}
            >
              {ft.supportTitle}
            </h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigation("/help")}
                  className={`text-gray-300 hover:text-purple-400 transition-colors text-left ${
                    language === "MM" ? "myanmar-text text-sm" : ""
                  }`}
                >
                  {ft.helpCenter}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/contact")}
                  className={`text-gray-300 hover:text-purple-400 transition-colors text-left ${
                    language === "MM" ? "myanmar-text text-sm" : ""
                  }`}
                >
                  {ft.contactUs}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/privacy")}
                  className={`text-gray-300 hover:text-purple-400 transition-colors text-left ${
                    language === "MM" ? "myanmar-text text-sm" : ""
                  }`}
                >
                  {ft.privacyPolicy}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/terms")}
                  className={`text-gray-300 hover:text-purple-400 transition-colors text-left ${
                    language === "MM" ? "myanmar-text text-sm" : ""
                  }`}
                >
                  {ft.termsOfService}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/faq")}
                  className={`text-gray-300 hover:text-purple-400 transition-colors text-left ${
                    language === "MM" ? "myanmar-text text-sm" : ""
                  }`}
                >
                  {ft.faq}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3
              className={`text-lg font-semibold mb-4 ${
                language === "MM" ? "myanmar-text" : ""
              }`}
            >
              {ft.contactInfoTitle}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <span
                  className={`text-gray-300 ${
                    language === "MM" ? "myanmar-text text-sm" : ""
                  }`}
                >
                  {ft.email}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <span
                  className={`text-gray-300 ${
                    language === "MM" ? "myanmar-text text-sm" : ""
                  }`}
                >
                  {ft.phone}
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <span
                  className={`text-gray-300 ${
                    language === "MM" ? "myanmar-text text-sm" : ""
                  }`}
                >
                  {ft.address}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p
            className={`text-gray-400 ${
              language === "MM" ? "myanmar-text text-sm" : ""
            }`}
          >
            {ft.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
