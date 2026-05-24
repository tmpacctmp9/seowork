import { SITE_URL } from "./site";

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: "Yaarwin",
  description:
    "Yaarwin online gaming platform with Wingo Color Prediction, Aviator, Teen Patti and Andar Bahar games.",
  inLanguage: "en-IN",
  keywords: [
    "Yaarwin",
    "Yaarwin login",
    "Yaarwin register",
    "Yaarwin Game color prediction",
    "Yaarwin betting game",
    "Online color prediction game",
    "Real money color prediction",
    "Best color prediction game",
    "Lottery color prediction game",
    "yaarwin gift code",
    "Casino color game online",
    "Predict and win real money",
    "Yaarwin real money game",
    "Online casino India real money",
    "Best gambling sites in India",
    "Live casino games India",
    "Fast payout betting sites",
    "Real money games India",
    "Play and win cash online",
    "Wingo game online",
    "Aviator game real money",
    "Color bet game India",
    "Club color game trick",
    "Best online color game",
    "Color guessing game real money",
    "Teen Patti real cash",
    "Andar Bahar game online",
    "Satta online game",
    "Lottery color satta",
    "Yaarwin paisa game",
    "Color wala game paisa jeeto",
  ],
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Yaarwin",
  url: `${SITE_URL}/`,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.png`,
  },
  sameAs: [
    "https://t.me/+4RzaZekQngA1NDA1",
    "https://t.me/Yaarwinsbonus_bot",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    url: `${SITE_URL}/contact`,
  },
};

export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  url: `${SITE_URL}/`,
  name: "Yaarwin Official Website",
  description:
    "Play online games including Wingo Color Prediction, Aviator, Teen Patti and more on Yaarwin.",
  isPartOf: {
    "@id": `${SITE_URL}/#website`,
  },
  about: {
    "@id": `${SITE_URL}/#organization`,
  },
  inLanguage: "en-IN",
};

export const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Yaarwin safe to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Users should understand the platform and start carefully before spending money on online games.",
      },
    },
    {
      "@type": "Question",
      name: "How long do withdrawals take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most withdrawals are processed within minutes depending on payment method and server load.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use UPI for deposit and withdrawal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, many users use UPI and bank transfer methods for deposits and withdrawals.",
      },
    },
    {
      "@type": "Question",
      name: "Is there any bonus for new users?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "New users may receive welcome rewards and promotional bonus offers.",
      },
    },
  ],
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${SITE_URL}/#breadcrumb`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${SITE_URL}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Privacy Policy",
      item: `${SITE_URL}/privacy`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Terms & Conditions",
      item: `${SITE_URL}/terms`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Contact Us",
      item: `${SITE_URL}/contact`,
    },
  ],
};
