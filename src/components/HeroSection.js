'use client';
import React, { useEffect, lazy, Suspense } from 'react';
const Spline = lazy(() => import('@splinetool/react-spline'));

const HeroSection = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <>
      <style>{`
        /* ✅ Hero Section */
        .hero-robot-section {
          background: radial-gradient(circle, #1a202c 0%, #0a0e1a 100%);
          color: #fff;
          font-family: 'Poppins', sans-serif;
          position: relative;
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: space-between;
          overflow: hidden;
          padding: 60px 100px;
          gap: 80px; /* 🔥 Adds clear space between text and robot */
        }

        .hero-text {
          flex: 1;
          z-index: 2;
          max-width: 550px;
        }

        /* ✅ Slide-in Animation */
        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-100px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .hero-text h1,
        .hero-text p {
          opacity: 0;
          animation: slideInLeft 1.2s ease-out forwards;
        }

        .hero-text h1 {
          font-size: 3.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1.2rem;
          line-height: 1.2;
        }

        .hero-text p {
          font-size: 1.2rem;
          font-weight: 400;
          color: #d1d5db;
          line-height: 1.7;
        }

        /* ✅ Robot Container */
        .hero-robot {
          flex: 1.2;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
        }

        .hero-robot canvas {
          width: 100% !important;
          height: 100% !important;
          object-fit: contain;
          position: relative !important;
        }

        /* 💻 Fix for screens wider than 1024px */
        @media (min-width: 1025px) {
          .hero-robot-section {
            padding-left: 120px;
            padding-right: 120px;
            gap: 120px; /* 🧠 more spacing between text & robot */
          }

          .hero-robot {
            transform: scale(0.95); /* ⚖️ slight scale-down for large screens */
          }

          .hero-text h1 {
            font-size: 3.8rem;
          }

          .hero-text p {
            font-size: 1.25rem;
          }
        }

        /* ✅ Responsive Layout below 1024px */
        @media (max-width: 1024px) {
          .hero-robot-section {
            flex-direction: column;
            height: auto;
            padding: 80px 40px;
            gap: 60px;
          }

          .hero-text {
            max-width: 700px;
            text-align: center;
            margin-top: 40px;
          }

          .hero-robot {
            width: 100%;
            height: 60vh;
          }
        }

        @media (max-width: 768px) {
          .hero-text h1 {
            font-size: 2.2rem;
          }

          .hero-text p {
            font-size: 1rem;
          }

          .hero-robot {
            height: 50vh;
          }
        }
      `}</style>

      <section id="home" className="hero-robot-section">
        {/* ✅ Text */}
        <div className="hero-text">
          <h1>Meet the Minds Behind ACM SIGAI</h1>
          <p>
            We are a community of innovators exploring the world of Artificial
            Intelligence, Machine Learning, and Human–Computer Interaction. <br />
            Our mission is to bridge creativity with technology — crafting
            solutions that make intelligence truly interactive.
          </p>
        </div>

        {/* ✅ Robot */}
        <div className="hero-robot">
          <Suspense
            fallback={
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  color: '#ccc',
                }}
              >
                Loading Robot...
              </div>
            }
          >
            <Spline
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              style={{
                transform: 'scale(1.25)',
                transformOrigin: 'center',
              }}
            />
          </Suspense>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
