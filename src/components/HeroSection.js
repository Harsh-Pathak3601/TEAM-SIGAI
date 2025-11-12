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
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: space-between;
          overflow: hidden;
          padding: 60px 100px;
          gap: 80px;
        }

        .hero-text {
          flex: 1;
          z-index: 3;
          max-width: 550px;
          position: relative;
        }

        .hero-text h1,
        .hero-text p {
          animation: fadeInUp 1s ease-out forwards;
          opacity: 0;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-text h1 {
          font-size: 3.2rem;
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

        /* ✅ Robot Section */
        .hero-robot {
          flex: 1.2;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          z-index: 2;
        }

        .hero-robot canvas {
          width: 100% !important;
          height: 100% !important;
          object-fit: contain;
        }

        /* 💻 Desktop View */
        @media (min-width: 1025px) {
          .hero-robot-section {
            padding: 80px 140px;
            gap: 120px;
          }
          .hero-robot {
            transform: scale(0.9);
          }
        }

        /* 📱 Tablet */
        @media (max-width: 1024px) {
          .hero-robot-section {
            flex-direction: column;
            height: auto;
            padding: 60px 40px;
            gap: 40px;
          }

          .hero-text {
            text-align: center;
            max-width: 700px;
          }

          .hero-robot {
            height: 65vh;
            transform: scale(1.1);
          }
        }

        /* 📱 Mobile Optimization */
        @media (max-width: 768px) {
          .hero-robot-section {
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            padding: 40px 20px 0;
            height: auto;
            text-align: center;
          }

          .hero-text {
            max-width: 90%;
            margin: 0 auto 20px auto;
            z-index: 3;
          }

          .hero-text h1 {
            font-size: 1.7rem;
            line-height: 1.3;
            margin-bottom: 0.8rem;
          }

          .hero-text p {
            font-size: 0.95rem;
            line-height: 1.6;
            color: #d3d3d3;
          }

          .hero-robot {
            position: relative;
            width: 100%;
            height: 70vh;
            transform: scale(1.8);
            transform-origin: top center;
            margin-top: -20px;
            z-index: 2;
          }

          .hero-robot canvas {
            position: relative;
            top: 0;
            object-fit: contain;
          }
        }

        /* 📱 Extra Small (Phones <480px) */
        @media (max-width: 480px) {
          .hero-text h1 {
            font-size: 1.5rem;
          }

          .hero-text p {
            font-size: 0.9rem;
          }

          .hero-robot {
            transform: scale(2);
            height: 75vh;
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
              style={{
                transform: 'scale(1.2)',
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
