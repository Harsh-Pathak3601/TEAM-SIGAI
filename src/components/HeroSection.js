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
        /* ✅ Base Hero Section */
        .hero-robot-section {
          background: radial-gradient(circle, #1a202c 0%, #0a0e1a 100%);
          color: #fff;
          font-family: 'Poppins', sans-serif;
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          overflow: hidden;
          padding: 40px 20px 0;
        }

        .hero-text {
          z-index: 3;
          max-width: 90%;
          text-align: center;
          margin-bottom: 10px;
        }

        .hero-text h1 {
          font-size: 1.6rem;
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 0.8rem;
        }

        .hero-text p {
          font-size: 0.9rem;
          line-height: 1.5;
          color: #d1d5db;
        }

        /* ✅ Robot Section */
        .hero-robot {
          width: 100%;
          height: 80vh; /* 🧠 Big section height for mobile */
          display: flex;
          justify-content: center;
          align-items: center;
          transform: scale(2.2); /* 🦾 Make robot BIGGER */
          transform-origin: top center;
          margin-top: -20px;
          z-index: 2;
        }

        .hero-robot canvas {
          width: 100% !important;
          height: 100% !important;
          object-fit: contain;
          position: relative !important;
        }

        /* ✨ Fade-in Animation */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hero-text, .hero-robot {
          animation: fadeIn 1.2s ease-out forwards;
        }

        /* 💻 Desktop View */
        @media (min-width: 1025px) {
          .hero-robot-section {
            flex-direction: row;
            justify-content: space-between;
            padding: 100px 120px;
            min-height: 100vh;
          }

          .hero-text {
            text-align: left;
            max-width: 550px;
            margin-bottom: 0;
          }

          .hero-text h1 {
            font-size: 3.5rem;
          }

          .hero-text p {
            font-size: 1.2rem;
          }

          .hero-robot {
            height: 100%;
            transform: scale(1.1);
            margin-top: 0;
          }
        }

        /* 📱 Tablet View */
        @media (max-width: 1024px) {
          .hero-robot-section {
            padding: 60px 40px;
          }

          .hero-text h1 {
            font-size: 2rem;
          }

          .hero-robot {
            transform: scale(1.5);
            height: 70vh;
          }
        }

        /* 📱 Extra Small Devices */
        @media (max-width: 480px) {
          .hero-text h1 {
            font-size: 1.4rem;
          }

          .hero-text p {
            font-size: 0.85rem;
          }

          .hero-robot {
            transform: scale(2.4);
            height: 85vh; /* 👀 Robot takes even more space */
          }
        }
      `}</style>

      <section id="home" className="hero-robot-section">
        <div className="hero-text">
          <h1>Meet the Minds Behind ACM SIGAI</h1>
          <p>
            We are a community of innovators exploring the world of Artificial
            Intelligence, Machine Learning, and Human–Computer Interaction. <br />
            Our mission is to bridge creativity with technology — crafting
            solutions that make intelligence truly interactive.
          </p>
        </div>

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
            />
          </Suspense>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
