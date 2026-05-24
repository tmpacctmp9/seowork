import type { Metadata } from "next";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, TELEGRAM_SUPPORT_BOT } from "@/lib/site";

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Yaarwin",
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/logo.png`,
      description:
        "Yaarwin is an online gaming and entertainment platform featuring popular games including Wingo, Aviator, Teen Patti and more.",
      sameAs: ["https://t.me/Yaarwinsbonus_bot"],
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
      "@type": "AboutPage",
      "@id": `${SITE_URL}/about/#webpage`,
      url: `${SITE_URL}/about`,
      name: "About Yaarwin",
      description:
        "Learn more about Yaarwin and our online gaming entertainment platform.",
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
      about: {
        "@id": `${SITE_URL}/#organization`,
      },
      breadcrumb: {
        "@id": `${SITE_URL}/about/#breadcrumb`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${SITE_URL}/og-image.jpg`,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/about/#breadcrumb`,
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
          name: "About",
          item: `${SITE_URL}/about`,
        },
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: "About Us | Yaarwin Online Gaming Platform",
  description:
    "Learn about Yaarwin, India's fast-growing online gaming and entertainment platform featuring Wingo, Aviator, Teen Patti and more exciting game categories.",
  keywords:
    "About Yaarwin, Yaarwin India, online gaming platform, Wingo game, Aviator game, Teen Patti, gaming entertainment India",
  robots: { index: true, follow: true },
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    type: "website",
    title: "About Us | Yaarwin",
    description:
      "Discover Yaarwin - A trusted online entertainment platform offering trending games and exciting gameplay experiences across India.",
    url: `${SITE_URL}/about`,
    images: [`${SITE_URL}/og-image.jpg`],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Yaarwin",
    description: "Explore Yaarwin's online gaming and entertainment experience.",
    images: [`${SITE_URL}/og-image.jpg`],
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd id="about-schema" data={aboutSchema} />
      <Topbar />

      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="main-title">About Yaarwin</h1>
            <p className="text-muted">
              India&apos;s Trending Online Gaming &amp; Entertainment Platform
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="main-text">
                <h4>Who We Are</h4>
                <p>
                  Yaarwin is a fast-growing online gaming and entertainment
                  platform designed for users who enjoy engaging gameplay
                  experiences and trending game categories. Our platform
                  provides easy access to popular entertainment games enjoyed by
                  players across India.
                </p>

                <h4>What We Offer</h4>
                <p>
                  Players on Yaarwin can explore a wide variety of exciting games
                  including Wingo Color Prediction, Aviator, Teen Patti and many
                  other trending online entertainment experiences.
                </p>

                <ul>
                  <li>Fast and user-friendly platform experience</li>
                  <li>Simple registration and gameplay access</li>
                  <li>Mobile-friendly gaming interface</li>
                  <li>Trending entertainment game categories</li>
                  <li>Promotional rewards and bonuses</li>
                </ul>

                <h4>Our Mission</h4>
                <p>
                  Our mission is to create a smooth, engaging and modern online
                  entertainment experience for users while continuously improving
                  platform quality, accessibility and user satisfaction.
                </p>

                <h4>User Support</h4>
                <p>
                  Yaarwin provides official Telegram support for users requiring
                  assistance related to registration, gameplay, account support
                  and promotional activities.
                </p>

                <div className="mt-4">
                  <a
                    href={TELEGRAM_SUPPORT_BOT}
                    className="footer-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-telegram"></i>
                    Official Telegram Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
