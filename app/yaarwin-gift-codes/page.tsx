import type { Metadata } from "next";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, TELEGRAM_GIFT_CHANNEL } from "@/lib/site";

const giftCodesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Yaarwin",
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/logo.png`,
      sameAs: ["https://t.me/+4RzaZekQngA1NDA1"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Yaarwin",
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/gift-codes/#webpage`,
      url: `${SITE_URL}/gift-codes`,
      name: "Yaarwin Gift Codes",
      description: "Official Yaarwin gift code Telegram channel page.",
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Yaarwin Gift Codes | Official Telegram Channel",
  description:
    "Join the official Yaarwin Giftcode Telegram channel for latest gift codes, bonus rewards, promotional updates and special offers.",
  keywords:
    "Yaarwin gift code, Yaarwin Telegram channel, bonus rewards, Yaarwin promo code, free gift codes",
  robots: { index: true, follow: true },
  alternates: { canonical: `${SITE_URL}/gift-codes` },
  openGraph: {
    type: "website",
    title: "Yaarwin Gift Codes",
    description:
      "Get latest Yaarwin gift codes and bonus rewards from the official Telegram channel.",
    url: `${SITE_URL}/gift-codes`,
    images: [`${SITE_URL}/og-image.jpg`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yaarwin Gift Codes",
    description:
      "Official Yaarwin Telegram channel for free gift codes and bonus rewards.",
    images: [`${SITE_URL}/og-image.jpg`],
  },
};

export default function GiftCodesPage() {
  return (
    <>
      <JsonLd id="gift-codes-schema" data={giftCodesSchema} />
      <Topbar />

      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="main-text text-center">
                <div className="gift-small-title">OFFICIAL TELEGRAM CHANNEL</div>
                <h1 className="gift-title">Join GIFTCODE Channel</h1>
                <p className="gift-text">
                  Get latest Yaarwin gift codes, bonus rewards, deposit offers,
                  winning updates and exclusive promotional rewards directly from
                  the official Telegram channel.
                </p>
                <a
                  href={TELEGRAM_GIFT_CHANNEL}
                  className="gift-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-telegram"></i>
                  Free Giftcode Channel
                </a>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mt-5">
            <div className="col-lg-10">
              <div className="main-text">
                <h2>Latest Yaarwin Gift Codes &amp; Rewards</h2>
                <p>
                  Yaarwin regularly shares promotional gift codes and bonus rewards
                  for users through the official Telegram channel. Players can stay
                  updated with the latest offers, reward activities and limited-time
                  bonus announcements directly from the community updates.
                </p>
                <p>
                  The official Giftcode Channel is designed to help users quickly
                  access updated promotional rewards, trending offers and important
                  platform announcements in one place.
                </p>

                <h3>What You Can Find</h3>
                <ul>
                  <li>Latest Yaarwin gift codes</li>
                  <li>Bonus reward updates</li>
                  <li>Special promotional announcements</li>
                  <li>Trending platform activities</li>
                  <li>New user reward information</li>
                  <li>Daily entertainment updates</li>
                </ul>

                <h3>Official Telegram Community</h3>
                <p>
                  Join the official Telegram community to receive fast updates,
                  platform information and reward notifications directly on your
                  device. The channel is updated regularly with new promotional
                  content and important announcements.
                </p>

                <div className="mt-4">
                  <a
                    href={TELEGRAM_GIFT_CHANNEL}
                    className="footer-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-telegram"></i>
                    Join Official Channel
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer variant="gift-codes" />
    </>
  );
}
