import type { Metadata } from "next";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import { SITE_URL, TELEGRAM_SUPPORT_BOT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us | Yaarwin - Official Support",
  description:
    "Contact Yaarwin official support on Telegram for help related to registration, deposits, withdrawals, promotions and gaming assistance.",
  keywords:
    "Yaarwin contact, Yaarwin support, Yaarwin Telegram support, online gaming help, Yaarwin customer care",
  robots: { index: true, follow: true },
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: "Contact Us | Yaarwin",
    description:
      "Get in touch with Yaarwin official Telegram support for quick assistance.",
    url: `${SITE_URL}/contact`,
    images: [`${SITE_URL}/og-image.jpg`],
  },
};

export default function ContactPage() {
  return (
    <>
      <Topbar />

      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="main-title">Contact Us</h1>
            <p className="text-muted">Official Yaarwin Support</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="main-text text-center">
                <h4 className="mb-4">Need Help?</h4>

                <p>
                  Contact our official Telegram support for assistance related
                  to account registration, deposits, withdrawals, promotions,
                  login issues, and gameplay support.
                </p>

                <div className="mt-5">
                  <a
                    href={TELEGRAM_SUPPORT_BOT}
                    className="footer-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-telegram"></i>
                    Contact on Telegram
                  </a>
                </div>

                <div className="mt-5">
                  <p className="text-muted">Official Support Bot:</p>
                  <h5>@Yaarwinsbonus_bot</h5>
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
