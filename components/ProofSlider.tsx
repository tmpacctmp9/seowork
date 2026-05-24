"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    bootstrap?: {
      Carousel: new (
        element: Element,
        options?: {
          interval?: number;
          ride?: string;
          pause?: boolean | string;
          wrap?: boolean;
        },
      ) => unknown;
    };
  }
}

const PROOF_IMAGES = [
  { src: "/proof1.jpg", alt: "Proof 1" },
  { src: "/proof2.jpg", alt: "Proof 2" },
  { src: "/proof3.jpg", alt: "Proof 3" },
  { src: "/proof4.jpg", alt: "Proof 4" },
  { src: "/proof5.jpg", alt: "Proof 5" },
];

export default function ProofSlider() {
  useEffect(() => {
    const initCarousel = () => {
      const proofSlider = document.querySelector("#proofSlider");
      if (!proofSlider || !window.bootstrap?.Carousel) return;

      new window.bootstrap.Carousel(proofSlider, {
        interval: 2500,
        ride: "carousel",
        pause: false,
        wrap: true,
      });
    };

    if (window.bootstrap?.Carousel) {
      initCarousel();
      return;
    }

    const interval = window.setInterval(() => {
      if (window.bootstrap?.Carousel) {
        window.clearInterval(interval);
        initCarousel();
      }
    }, 50);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="proof-slider-section">
      <div className="container">
        <div className="proof-head">
          <h5>Fast Deposits &amp; Withdrawals</h5>
          <h2>Live Payment Proofs</h2>
        </div>

        <div
          id="proofSlider"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {PROOF_IMAGES.map((image, index) => (
              <div
                key={image.src}
                className={`carousel-item${index === 0 ? " active" : ""}`}
              >
                <div className="phone-mockup">
                  <div className="phone-camera"></div>
                  <img
                    src={image.src}
                    className="proof-image"
                    alt={image.alt}
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
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
  );
}
