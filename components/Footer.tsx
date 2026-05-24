import { REGISTER_URL, TELEGRAM_GIFT_CHANNEL } from "@/lib/site";

type FooterProps = {
  variant?: "default" | "gift-codes";
};

export default function Footer({ variant = "default" }: FooterProps) {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-4">
            <img src="/logo.png" className="footer-logo" alt="Yaarwin" />
            <p className="footer-text">
              Yaarwin brings exciting online entertainment with popular games
              including Wingo Color Prediction, Aviator, Teen Patti and more
              trending game categories loved by players across India.
            </p>
          </div>

          <div className="col-6 col-lg-2">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              {variant === "gift-codes" ? (
                <li>
                  <a href="/yaarwin-gift-codes">Gift Codes</a>
                </li>
              ) : (
                <>
                  <li>
                    <a href="/privacy">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/terms">Terms &amp; Conditions</a>
                  </li>
                </>
              )}
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3">
            <h4 className="footer-title">
              {variant === "gift-codes" ? "Official Channel" : "Get Started"}
            </h4>
            <p className="footer-text small-text">
              {variant === "gift-codes"
                ? "Join the official Telegram channel for latest updates, rewards and promotional offers."
                : "Join thousands of players and explore fast online entertainment with exciting gameplay and trending game modes."}
            </p>
            <a
              href={
                variant === "gift-codes" ? TELEGRAM_GIFT_CHANNEL : REGISTER_URL
              }
              className="footer-btn"
              {...(variant === "gift-codes" ? {} : {})}
            >
              {variant === "gift-codes" ? "Join Channel" : "Register Now"}
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Yaarwin. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
