import type { Metadata } from "next";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions | Yaarwin - Online Gaming Platform",
  description:
    "Yaarwin Terms and Conditions. Rules for using our platform, user responsibilities, deposits, withdrawals, and fair play policy.",
  keywords:
    "Yaarwin terms and conditions, gaming rules, Yaarwin user agreement, color prediction terms",
  robots: { index: true, follow: true },
  alternates: { canonical: `${SITE_URL}/terms` },
  openGraph: {
    title: "Terms & Conditions | Yaarwin",
    description: "Official Terms of Service for Yaarwin users.",
    url: `${SITE_URL}/terms`,
  },
};

export default function TermsPage() {
  return (
    <>
      <Topbar />

      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="main-title">Terms &amp; Conditions</h1>
            <p className="text-muted">Last Updated: May 08, 2026</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10 main-text">
              <h4>1. Acceptance of Terms</h4>
              <p>
                By accessing or using Yaarwin, you agree to be bound by these
                Terms and Conditions.
              </p>

              <h4>2. User Eligibility</h4>
              <p>
                You must be at least 18 years old and a resident of India to use
                our services.
              </p>

              <h4>3. Account Responsibility</h4>
              <ul>
                <li>Only one account per person is allowed.</li>
                <li>
                  You are responsible for maintaining the confidentiality of your
                  account.
                </li>
                <li>
                  Multiple accounts may result in permanent ban and forfeiture of
                  funds.
                </li>
              </ul>

              <h4>4. Deposits &amp; Withdrawals</h4>
              <p>
                All financial transactions are final. Minimum deposit and withdrawal
                amounts apply as per platform rules. We reserve the right to verify
                your identity before processing large withdrawals.
              </p>

              <h4>5. Fair Play &amp; Prohibited Activities</h4>
              <p>
                Any form of cheating, hacking, exploitation of bugs, or collusion
                is strictly prohibited and will result in immediate account
                suspension.
              </p>

              <h4>6. Bonus Terms</h4>
              <p>
                Welcome bonuses and referral rewards are subject to wagering
                requirements and specific terms mentioned at the time of offer.
              </p>

              <h4>7. Limitation of Liability</h4>
              <p>
                Yaarwin is not liable for any losses incurred while playing games.
                All games are for entertainment purposes.
              </p>

              <p className="mt-4">
                <strong>
                  By using Yaarwin, you acknowledge that you have read,
                  understood, and agreed to these terms.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
