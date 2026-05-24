"use client";

import Script from "next/script";

const REGISTER =
  "https://4yaarwin.com/#/register?invitationCode=76643108674";

/**
 * Body markup ported 1:1 from index.html (lines 281–1216).
 */
export default function HomeIndexBody() {
  return (
    <>
      <div className="topbar" role="header">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <img src="/logo.png" className="logo" alt="Yaarwin" />
            </div>
            <div>
              <a href={REGISTER} className="top-btn login-btn">
                Login
              </a>
              <a href={REGISTER} className="top-btn register-btn">
                Register
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="hero" role="main">
        <div className="container">
          <h1>Play Popular Games On Yaarwin</h1>
          <p>
            {"    Yaarwin offers exciting online games including Wingo Color Prediction, Aviator, Teen Patti, Andar Bahar and many more trending entertainment games loved by players across India. "}
            <strong>YAAR WIN PLATFORM OF DAMAN & TIRANGA</strong>
            {" offering exciting gameplay and entertainment experiences in one place."}
          </p>
          <a href={REGISTER} className="main-btn">
            <i className="bi bi-gift-fill"></i>
            Get ₹500 signup Bonus
          </a>
          <div className="bonus-box">
            Use referral code below to unlock welcome rewards
            <br />
            <div className="code">76643108674</div>
          </div>
          <div>
            <img src="/logo.png" className="hero-image" alt="Yaarwin" />
          </div>
        </div>
      </section>

      <section className="giftcode-section">
        <div className="container">
          <div className="giftcode-content text-center">
            <div className="gift-small-title">OFFICIAL TELEGRAM CHANNEL</div>
            <h2 className="gift-title">Join GIFTCODE Channel</h2>
            <p className="gift-text">
              Get latest Yaarwin gift codes, bonus rewards, deposit offers,
              winning updates and exclusive promotional rewards directly from
              the official Telegram channel.
            </p>
            <a
              href="https://t.me/+4RzaZekQngA1NDA1"
              className="gift-btn"
              target="_blank"
            >
              <i className="bi bi-telegram"></i>
              Free Giftcode Channel
            </a>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="container">
          <div className="small-title">POPULAR ONLINE GAME</div>
          <h2 className="main-title">Play Wingo Color Prediction</h2>
          <p className="main-text">
            Wingo Color Prediction is one of the most popular online games
            available on Yaarwin. Every round gives players a new chance to
            predict colors and numbers while enjoying fast-paced gameplay and
            exciting entertainment. Thousands of users enjoy Wingo daily
            because of its engaging game style and nonstop action.
          </p>
          <p className="main-text">
            Along with Wingo, Yaarwin also offers many other trending games
            including Aviator, Teen Patti and Andar Bahar. Players can explore
            different game categories and enjoy exciting online entertainment
            experiences in one platform.
          </p>
          <div className="play-btn-wrapper">
            <a href={REGISTER} className="play-btn">
              <i className="bi bi-controller"></i>
              Start Playing Now
            </a>
          </div>
        </div>
      </section>

      <section className="section-dark py-5">
        <div className="container">
          <div className="text-center mb-5">
            <div className="small-title">WHY PLAYERS LOVE US</div>
            <h2 className="main-title">Why Choose Yaarwin in 2026?</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <p className="main-text">
                Yaarwin has become one of the most trusted and popular online
                gaming platforms in India. With a perfect mix of exciting
                games, fast payments, and excellent user experience, thousands
                of players join daily to enjoy real money gaming.
              </p>
              <p className="main-text">
                Whether you are a beginner or an experienced player, Yaarwin
                offers smooth gameplay, instant UPI deposits & withdrawals, and
                generous bonuses. The platform is fully optimized for mobile
                devices and works perfectly even on low internet speeds, making
                it ideal for users across India.
              </p>
              <h3 className="mt-5 mb-3">Key Highlights:</h3>
              <ul className="main-text" style={{ lineHeight: 2.0 }}>
                <li>
                  <strong>Fast Withdrawals</strong> – Most withdrawals processed
                  within 5 to 30 minutes
                </li>
                <li>
                  <strong>Low Minimum Deposit</strong> – Start playing with just
                  ₹100
                </li>
                <li>
                  <strong>Popular Games</strong> – Wingo Color Prediction,
                  Aviator, Teen Patti, Andar Bahar & more
                </li>
                <li>
                  <strong>Welcome Bonus</strong> – New users get up to ₹500
                  bonus using referral code <strong>76643108674</strong>
                </li>
                <li>
                  <strong>24/7 Support</strong> – Dedicated Telegram support for
                  quick help
                </li>
                <li>
                  <strong>Secure & Transparent</strong> – Trusted by over
                  50,000+ daily active players
                </li>
              </ul>
              <div className="text-center mt-4">
                <a href={REGISTER} className="main-btn">
                  Join Yaarwin Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="middle-image-section">
        <div className="container">
          <img
            src="/iphone-wingogame-loading-page-screenshot.webp"
            className="middle-image"
            alt="Yaarwin Wingo"
          />
        </div>
      </section>

      <section className="feature-section">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="feature-box">
                <div className="feature-icon">
                  <i className="bi bi-controller"></i>
                </div>
                <h4>Trending Games</h4>
                <p>
                  Explore popular online games including Wingo, Aviator, Teen
                  Patti and more exciting categories.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box">
                <div className="feature-icon">
                  <i className="bi bi-trophy-fill"></i>
                </div>
                <h4>Daily Entertainment</h4>
                <p>
                  Enjoy exciting gameplay experiences and engaging online
                  entertainment every day.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box">
                <div className="feature-icon">
                  <i className="bi bi-stars"></i>
                </div>
                <h4>Popular Platform</h4>
                <p>
                  Join thousands of players exploring trending online games and
                  exciting game modes on Yaarwin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="support-section">
        <div className="container">
          <div className="support-content text-center">
            <div className="support-small-title">OFFICIAL SUPPORT BOT</div>
            <h2 className="support-title">Deposit Bonus & Support</h2>
            <p className="support-text">
              Contact the official Telegram bot for deposit bonus rewards,
              latest offers, account help and support related queries on Yaarwin
              platform.
            </p>
            <a
              href="https://t.me/Yaarwinsbonus_bot"
              className="support-btn"
              target="_blank"
            >
              <i className="bi bi-telegram"></i>
              Open Telegram Bot
            </a>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-6 col-md-3">
              <div className="stat-box">
                <div className="stat-icon">
                  <i className="bi bi-person-circle"></i>
                </div>
                <h2>50,000+</h2>
                <p>Daily Winners</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-box">
                <div className="stat-icon">
                  <i className="bi bi-download"></i>
                </div>
                <h2>984K</h2>
                <p>Downloads</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-box">
                <div className="stat-icon">
                  <i className="bi bi-currency-rupee"></i>
                </div>
                <h2>100M+</h2>
                <p>Bets Played</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-box">
                <div className="stat-icon">
                  <i className="bi bi-wallet2"></i>
                </div>
                <h2>5 Minutes</h2>
                <p>Fast Withdrawals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="proof-slider-section">
        <div className="container">
          <div className="proof-head">
            <h5>Fast Deposits & Withdrawals</h5>
            <h2>Live Payment Proofs</h2>
          </div>
          <div id="proofSlider" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="phone-mockup">
                  <div className="phone-camera"></div>
                  <img
                    src="/proof1.jpg"
                    className="proof-image"
                    alt="Proof 1"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="carousel-item">
                <div className="phone-mockup">
                  <div className="phone-camera"></div>
                  <img
                    src="/proof2.jpg"
                    className="proof-image"
                    alt="Proof 2"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="carousel-item">
                <div className="phone-mockup">
                  <div className="phone-camera"></div>
                  <img
                    src="/proof3.jpg"
                    className="proof-image"
                    alt="Proof 3"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="carousel-item">
                <div className="phone-mockup">
                  <div className="phone-camera"></div>
                  <img
                    src="/proof4.jpg"
                    className="proof-image"
                    alt="Proof 4"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="carousel-item">
                <div className="phone-mockup">
                  <div className="phone-camera"></div>
                  <img
                    src="/proof5.jpg"
                    className="proof-image"
                    alt="Proof 5"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#proofSlider"
              data-bs-slide="prev"
            >
              <span className="slider-arrow">
                <i className="bi bi-chevron-left"></i>
              </span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#proofSlider"
              data-bs-slide="next"
            >
              <span className="slider-arrow">
                <i className="bi bi-chevron-right"></i>
              </span>
            </button>
          </div>
        </div>
      </section>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          const proofSlider = document.querySelector("#proofSlider");
          const bootstrap = (
            window as Window & {
              bootstrap?: {
                Carousel: new (
                  element: Element,
                  options?: Record<string, unknown>,
                ) => unknown;
              };
            }
          ).bootstrap;
          if (proofSlider && bootstrap?.Carousel) {
            new bootstrap.Carousel(proofSlider, {
              interval: 2500,
              ride: "carousel",
              pause: false,
              wrap: true,
            });
          }
        }}
      />

      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="main-title">Wingo Color Prediction Game on Yaarwin</h2>
            <p
              className="main-text"
              dangerouslySetInnerHTML={{
                __html:
                  "• Most Popular Game </br>• Fast Rounds </br>• Real Money Wins",
              }}
            />
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <p className="main-text">
                Wingo is a simple yet highly engaging color prediction game.
                Every few minutes, a new round starts and players predict whether
                the next color will be <strong>Red</strong>,{" "}
                <strong>Green</strong>, or <strong>Violet</strong>. You can also
                bet on specific numbers for bigger payouts.
              </p>
              <h4 className="mt-4">How to Play Wingo:</h4>
              <ol className="main-text">
                <li>Register or Login on Yaarwin</li>
                <li>Go to Wingo section</li>
                <li>Choose your bet amount</li>
                <li>Select Red, Green, Violet or Number</li>
                <li>Wait for result and claim your winnings</li>
              </ol>
              <p className="main-text mt-4">
                The game is loved for its fast pace and multiple winning
                opportunities every hour. Many experienced players study previous
                results and patterns to make smarter predictions. Start with
                small bets, understand the game flow, and gradually increase
                your stakes as you gain confidence.
              </p>
              <div className="text-center mt-4">
                <a href={REGISTER} className="main-btn">
                  <i className="bi bi-controller"></i> Play Wingo Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="main-title">Other Popular Games on Yaarwin</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h4>Aviator Game</h4>
              <p className="main-text">
                The most thrilling crash game on Yaarwin. Watch the plane fly
                higher and cash out at the right moment before it flies away.
                Higher multipliers give bigger wins, but timing is everything.
              </p>
              <h4 className="mt-4">Teen Patti</h4>
              <p className="main-text">
                Classic Indian card game with real excitement. Play against real
                players or enjoy single player mode. Perfect for traditional card
                game lovers.
              </p>
              <h4 className="mt-4">Andar Bahar</h4>
              <p className="main-text">
                Simple and fast card game where you predict whether the next card
                will appear on Andar or Bahar side. Very popular among Indian
                players for its quick rounds and easy rules.
              </p>
              <p className="main-text mt-4 text-center">
                <strong>
                  All games are available 24/7 with instant deposits and fast
                  withdrawals.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="faq-head text-center">
            <div className="faq-small-title">HELP & SUPPORT</div>
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <p className="faq-text">
              Find answers to common questions related to Yaarwin registration,
              deposits, withdrawals, bonuses and account support.
            </p>
          </div>
          <div className="accordion faq-accordion" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq1"
                >
                  Is Yaarwin safe to use?
                </button>
              </h2>
              <div
                id="faq1"
                className="accordion-collapse collapse show"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Yaarwin is used by many players daily for online gaming and
                  earning. While thousands of users actively play and withdraw,
                  it’s always recommended to start with a small amount and
                  understand the platform before investing more.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq2"
                >
                  How long do withdrawals take?
                </button>
              </h2>
              <div
                id="faq2"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Most withdrawals are processed within 5–30 minutes, depending on
                  the payment method and server load. In some cases, it may take a
                  few hours during peak time.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq3"
                >
                  What is the minimum deposit amount?
                </button>
              </h2>
              <div
                id="faq3"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  The minimum deposit usually starts from ₹100–₹200, making it
                  easy for new users to begin without a big investment.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq4"
                >
                  What is the minimum withdrawal amount?
                </button>
              </h2>
              <div
                id="faq4"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  You can withdraw starting from around ₹100–₹200, depending on
                  your account status and method selected.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq5"
                >
                  Why is the app not installing on my phone?
                </button>
              </h2>
              <div
                id="faq5"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Enable “Install from unknown sources” in your phone settings,
                  make sure you have enough storage, then re-download the APK
                  file and try again.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq6"
                >
                  Do I need a referral code to register?
                </button>
              </h2>
              <div
                id="faq6"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  In some cases, a referral code is required to unlock bonuses.
                  If you have one, enter it during registration to get extra
                  rewards.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq7"
                >
                  Can I use UPI for deposit and withdrawal?
                </button>
              </h2>
              <div
                id="faq7"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Yes, most users can use UPI, Paytm, or bank transfer for quick
                  deposits and withdrawals.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq8"
                >
                  What should I do if my withdrawal is delayed?
                </button>
              </h2>
              <div
                id="faq8"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Wait for some time because server delays can happen during peak
                  time. If the issue continues, contact customer support via the
                  app or official Telegram channel.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq9"
                >
                  Can I create multiple accounts?
                </button>
              </h2>
              <div
                id="faq9"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  No, it’s recommended to use only one account per user. Multiple
                  accounts may lead to restrictions or account suspension.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq10"
                >
                  Is there any bonus for new users?
                </button>
              </h2>
              <div
                id="faq10"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Yes, new users often get a welcome bonus after registration or
                  first deposit. Bonus offers may change from time to time.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Join Yaarwin Today</h2>
          <p>
            Register now using the referral code and explore exciting online
            games including Wingo Color Prediction, Aviator, Teen Patti and many
            more trending entertainment games available on Yaarwin platform.
          </p>
          <a href={REGISTER} className="main-btn">
            Register Now
          </a>
        </div>
      </section>

      <section className="rating-section">
        <div className="container">
          <div className="rating-content text-center">
            <div className="rating-stars">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-half"></i>
            </div>
            <h2 className="rating-score">4.3/5 Rating</h2>
            <p className="rating-text">
              Thousands of players enjoy Yaarwin for exciting online games, smooth
              gameplay experience and trending entertainment categories.
            </p>
          </div>
        </div>
      </section>

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
                <li>
                  <a href="/privacy">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h4 className="footer-title">Get Started</h4>
              <p className="footer-text small-text">
                Join thousands of players and explore fast online entertainment
                with exciting gameplay and trending game modes.
              </p>
              <a href={REGISTER} className="footer-btn">
                Register Now
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Yaarwin. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
