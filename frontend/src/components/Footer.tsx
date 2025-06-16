import {
  BookOpen,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  ExternalLink,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTiktok,
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

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

      // Connect
      connectTitle: "Connect With Us",
      followUs: "Follow us on social media",

      // Contact Info
      contactInfoTitle: "Contact Info",
      email: "contact-us@larlarbooks.com",
      phone: "+65 88525324",
      location: "Singapore",

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

      // Connect
      connectTitle: "ကျွန်ုပ်တို့နှင့် ဆက်သွယ်ပါ",
      followUs: "လူမှုကွန်ယက်များတွင် ကျွန်ုပ်တို့ကို စောင့်ကြည့်ပါ",

      // Contact Info
      contactInfoTitle: "ဆက်သွယ်ရေးအချက်အလက်",
      email: "contact-us@larlarbooks.com",
      phone: "+၆၅ ၈၈၅၂၅၃၂၄",
      location: "စင်ကာပူ",

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

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/larlarbooks",
      icon: <Facebook className="h-5 w-5" />,
      hoverColor: "hover:text-blue-500",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/larlar-books/",
      icon: <Linkedin className="h-5 w-5" />,
      hoverColor: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/larlarbooks/",
      icon: <Instagram className="h-5 w-5" />,
      hoverColor: "hover:text-pink-500",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@larlar_books",
      icon: <FontAwesomeIcon icon={faTiktok} className="h-5 w-5" />,
      hoverColor: "hover:text-gray-900 dark:hover:text-white",
    },
  ];

  return (
    <footer className="bg-background border-t border-border">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-primary/10 to-violet-500/10 rounded-xl p-2.5 border border-border">
                <img
                  src="/logo.png"
                  alt="LarLarBooks Logo"
                  className="h-8 w-8 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const nextElement = e.currentTarget
                      .nextElementSibling as HTMLElement | null;
                    if (nextElement) {
                      nextElement.style.display = "block";
                    }
                  }}
                />
                <BookOpen
                  className="h-8 w-8 text-primary hidden"
                  style={{ display: "none" }}
                />
              </div>
              <div>
                <span
                  className={`text-2xl font-bold bg-gradient-to-r from-primary to-violet-600 bg-clip-text text-transparent ${
                    language === "MM" ? "myanmar-text" : ""
                  }`}
                >
                  {ft.companyName}
                </span>
                <div className="text-xs text-muted-foreground">
                  {language === "MM"
                    ? "ပညာရေး စာကြည့်တိုက်"
                    : "Educational Library"}
                </div>
              </div>
            </div>

            <p
              className={`text-muted-foreground leading-relaxed ${
                language === "MM" ? "myanmar-text text-sm" : ""
              }`}
            >
              {ft.companyDescription}
            </p>

            {/* Social Links */}
            <div className="space-y-3">
              <h4
                className={`font-semibold text-foreground ${
                  language === "MM" ? "myanmar-text" : ""
                }`}
              >
                {ft.connectTitle}
              </h4>
              <p
                className={`text-sm text-muted-foreground ${
                  language === "MM" ? "myanmar-text" : ""
                }`}
              >
                {ft.followUs}
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative inline-flex items-center justify-center w-10 h-10 rounded-lg bg-muted/50 text-muted-foreground border border-border ${social.hoverColor} hover:bg-muted hover:border-primary/20 transition-all duration-200 group`}
                    aria-label={social.name}
                  >
                    <span className="flex items-center justify-center w-full h-full">
                      {social.icon}
                    </span>
                    <ExternalLink className="absolute -top-1 -right-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-primary-foreground rounded-full p-0.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3
              className={`text-lg font-semibold text-foreground ${
                language === "MM" ? "myanmar-text" : ""
              }`}
            >
              {ft.quickLinksTitle}
            </h3>
            <ul className="space-y-3">
              {[
                { label: ft.browseBooks, path: "/" },
                { label: ft.categories, path: "/categories" },
                { label: ft.featured, path: "/featured" },
                { label: ft.newReleases, path: "/new-releases" },
                { label: ft.bestSellers, path: "/best-sellers" },
              ].map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => handleNavigation(link.path)}
                    className={`text-muted-foreground hover:text-primary transition-colors text-left group ${
                      language === "MM" ? "myanmar-text text-sm" : ""
                    }`}
                  >
                    <span className="border-b border-transparent group-hover:border-primary/30 transition-colors">
                      {link.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h3
              className={`text-lg font-semibold text-foreground ${
                language === "MM" ? "myanmar-text" : ""
              }`}
            >
              {ft.supportTitle}
            </h3>
            <ul className="space-y-3">
              {[
                { label: ft.helpCenter, path: "/help" },
                { label: ft.contactUs, path: "/contact" },
                { label: ft.privacyPolicy, path: "/privacy" },
                { label: ft.termsOfService, path: "/terms" },
                { label: ft.faq, path: "/faq" },
              ].map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => handleNavigation(link.path)}
                    className={`text-muted-foreground hover:text-primary transition-colors text-left group ${
                      language === "MM" ? "myanmar-text text-sm" : ""
                    }`}
                  >
                    <span className="border-b border-transparent group-hover:border-primary/30 transition-colors">
                      {link.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3
              className={`text-lg font-semibold text-foreground ${
                language === "MM" ? "myanmar-text" : ""
              }`}
            >
              {ft.contactInfoTitle}
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="bg-primary/10 p-2 rounded-lg border border-border group-hover:border-primary/20 transition-colors">
                  <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-medium text-foreground">
                    Email
                  </div>
                  <a
                    href={`mailto:${ft.email}`}
                    className={`text-muted-foreground hover:text-primary transition-colors break-all ${
                      language === "MM" ? "myanmar-text text-sm" : ""
                    }`}
                  >
                    {ft.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 group">
                <div className="bg-primary/10 p-2 rounded-lg border border-border group-hover:border-primary/20 transition-colors">
                  <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-medium text-foreground">
                    Phone
                  </div>
                  <a
                    href={`tel:${ft.phone}`}
                    className={`text-muted-foreground hover:text-primary transition-colors ${
                      language === "MM" ? "myanmar-text text-sm" : ""
                    }`}
                  >
                    {ft.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 group">
                <div className="bg-primary/10 p-2 rounded-lg border border-border group-hover:border-primary/20 transition-colors">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-medium text-foreground">
                    Location
                  </div>
                  <span
                    className={`text-muted-foreground ${
                      language === "MM" ? "myanmar-text text-sm" : ""
                    }`}
                  >
                    {ft.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-border bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p
              className={`text-muted-foreground text-center sm:text-left ${
                language === "MM" ? "myanmar-text text-sm" : ""
              }`}
            >
              {ft.copyright}
            </p>

            {/* Additional footer links */}
            <div className="flex items-center space-x-6 text-sm">
              <button
                onClick={() => handleNavigation("/privacy")}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy
              </button>
              <button
                onClick={() => handleNavigation("/terms")}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Terms
              </button>
              <button
                onClick={() => handleNavigation("/cookies")}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
