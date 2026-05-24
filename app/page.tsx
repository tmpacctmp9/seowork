import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import HomeIndexBody from "@/components/HomeIndexBody";
import {
  breadcrumbSchema,
  faqPageSchema,
  organizationSchema,
  webPageSchema,
  websiteSchema,
} from "@/lib/home-schemas";

export const metadata: Metadata = {
  title: "Yaarwin Game Official | Yaarwin Login, Register & App Download",
  description:
    "Join Yaarwin and play exciting online games including Wingo, K3, 5D, Aviator, Teen Patti and Andar Bahar. Enjoy fast deposits, easy login, instant withdrawals and welcome rewards on India's trending gaming platform.",
  keywords:
    "Yaarwin, Yaarwin login, Yaarwin register, Yaarwin app, Yaarwin app download, Yaarwin download, Yaarwin game, Yaarwin bonus, Yaarwin bonus code, Yaarwin referral code, Yaarwin invite code, Yaarwin color prediction game, gift, codes, india, Yaarwin Wingo, Wingo game, Wingo game online, Wingo color prediction, color prediction game, online color prediction game, best color prediction game, real money color prediction, color prediction app India, Aviator game, Aviator real money game, Teen Patti online, Teen Patti real cash, Andar Bahar online, K3 game, 5D game, lottery color game, casino game online, online earning game, online earning game India, real money games India, play and earn money, fast withdrawal gaming app, instant withdrawal games, UPI withdrawal game, daily earning app, prediction game India, mobile gaming platform, gaming platform India, best online gaming platform, online casino India, cash earning games, popular online games India, online entertainment platform, Daman platform alternative, Tiranga platform alternative, Yaarwin Game color prediction, Yaarwin betting game, Online color prediction game, Real money color prediction, Best color prediction game, Lottery color prediction game, Casino color game online, Predict and win real money, Yaarwin real money game, Online casino India real money, Best gambling sites in India, Live casino games India, Fast payout betting sites, Play and win cash online, Color bet game India, Club color game trick, Best online color game, Color guessing game real money, Satta online game, Lottery color satta, Yaarwin paisa game, Color wala game paisa jeeto, yaarwin gift code",
  authors: [{ name: "Yaarwin" }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  other: {
    "max-image-preview": "large",
    language: "English",
    rating: "general",
    distribution: "global",
    "revisit-after": "1 days",
    expires: "never",
    HandheldFriendly: "true",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    referrer: "strict-origin-when-cross-origin",
  },
  alternates: {
    canonical: "https://yaarwinindian.com/",
    languages: {
      "en-in": "https://yaarwinindian.com/",
      en: "https://yaarwinindian.com/",
      "x-default": "https://yaarwinindian.com/",
    },
  },
  openGraph: {
    type: "website",
    title: "Yaarwin - Best Color Prediction Game & Online Gaming Platform",
    description:
      "Play Wingo, Aviator, Teen Patti and Andar Bahar on Yaarwin with fast deposits, instant withdrawals and exciting rewards.",
    url: "https://yaarwinindian.com/",
    siteName: "Yaarwin",
    locale: "en_IN",
    images: [
      {
        url: "https://yaarwinindian.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yaarwin Online Gaming Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yaarwin - Best Color Prediction Game",
    description:
      "Join Yaarwin and enjoy Wingo, Aviator, Teen Patti and exciting online gaming entertainment with fast deposits and withdrawals.",
    images: ["https://yaarwinindian.com/og-image.jpg"],
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd id="website-schema" data={websiteSchema} />
      <JsonLd id="organization-schema" data={organizationSchema} />
      <JsonLd id="webpage-schema" data={webPageSchema} />
      <JsonLd id="faq-schema" data={faqPageSchema} />
      <JsonLd id="breadcrumb-schema" data={breadcrumbSchema} />
      <HomeIndexBody />
    </>
  );
}
