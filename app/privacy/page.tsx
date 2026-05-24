import type { Metadata } from "next";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Yaarwin - Online Gaming Platform",
  description:
    "Read Yaarwin's Privacy Policy. Learn how we collect, use, and protect your personal data while you enjoy Wingo, Aviator, Teen Patti and other games.",
  keywords:
    "Yaarwin privacy policy, Yaarwin data protection, online gaming privacy, color prediction game privacy, Yaarwin terms",
  robots: { index: true, follow: true },
  alternates: { canonical: `${SITE_URL}/privacy` },
  openGraph: {
    title: "Privacy Policy | Yaarwin",
    description:
      "Yaarwin Privacy Policy - Transparent data practices for our gaming community.",
    url: `${SITE_URL}/privacy`,
    images: [`${SITE_URL}/og-image.jpg`],
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Topbar />

      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="main-title">Privacy Policy</h1>
            <p className="text-muted">Last Updated: May 08, 2026</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="main-text">
                <h4>1. Introduction</h4>
                <p>
                  Yaarwin (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is
                  committed to protecting your privacy. This Privacy Policy
                  explains how we collect, use, disclose, and safeguard your
                  information when you visit our website or use our gaming
                  services.
                </p>

                <h4>2. Information We Collect</h4>
                <ul>
                  <li>
                    Personal Information: Name, phone number, UPI ID, email (if
                    provided)
                  </li>
                  <li>
                    Payment Information: Transaction details (processed securely
                    via third-party gateways)
                  </li>
                  <li>
                    Usage Data: IP address, device information, game activity,
                    betting history
                  </li>
                  <li>Cookies and Tracking Technologies</li>
                </ul>

                <h4>3. How We Use Your Information</h4>
                <p>
                  To provide and improve our gaming services, process deposits
                  &amp; withdrawals, send promotional offers, and ensure platform
                  security.
                </p>

                <h4>4. Data Sharing</h4>
                <p>
                  We do not sell your personal data. Information may be shared with
                  payment processors, legal authorities when required by law, and
                  service providers under strict confidentiality.
                </p>

                <h4>5. Security</h4>
                <p>
                  We implement industry-standard security measures to protect your
                  data. However, no system is 100% secure.
                </p>

                <h4>6. Your Rights</h4>
                <p>
                  You have the right to access, correct, or delete your personal
                  data. Contact us via official Telegram support.
                </p>

                <h4>7. Changes to This Policy</h4>
                <p>
                  We may update this policy from time to time. Continued use of our
                  services after changes constitutes acceptance of the new policy.
                </p>

                <p className="mt-4">
                  <strong>
                    For any privacy-related queries, contact our official support
                    on Telegram.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
