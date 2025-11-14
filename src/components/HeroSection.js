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
        /* 🌌 Base Hero Section */
        .hero-robot-section {
          background: radial-gradient(circle, #1a202c 0%, #0a0e1a 100%);
          color: #fff;
          font-family: 'Poppins', sans-serif;
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          overflow: hidden;
          padding: 80px 120px;
          cursor: default;
        }

        /* ✍️ Text Section (Left) */
        .hero-text {
          flex: 1;
          z-index: 3;
          max-width: 550px;
          text-align: left;
          opacity: 0;
          animation: fadeIn 1.4s ease-out forwards;
          cursor: text;
        }

        .hero-text h1 {
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 1.2rem;
        }

        .hero-text p {
          font-size: 1.2rem;
          line-height: 1.7;
          color: #d1d5db;
        }

        /* 🤖 Robot Section (Right) */
        .hero-robot {
          flex: 1.2;
          display: flex;
          justify-content: center;
          align-items: center;
          max-height: 600px;
          animation: fadeUp 1.2s ease-out forwards;
          cursor: default; 
        }

        .hero-robot canvas {
          width: 500px !important;
          height: 500px !important;
          object-fit: contain;
        }

        /* ✨ Animations */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0px); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* 💻 Larger Screens */
        @media (min-width: 1200px) {
          .hero-robot canvas {
            width: 650px !important;
            height: 650px !important;
          }
        }

        /* 📱 Tablet */
        @media (max-width: 1024px) {
          .hero-robot-section {
            flex-direction: column;
            justify-content: flex-start;
            padding: 60px 40px;
            text-align: center;
          }

          .hero-text {
            order: 2;
            text-align: center;
            max-width: 90%;
            margin-top: 25px;
          }

          .hero-robot {
            order: 1;
            max-height: 380px;
          }
        }

        /* 📱 Mobile */
        @media (max-width: 768px) {
          .hero-robot-section {
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            padding: 40px 20px;
          }

          .hero-robot {
            max-height: 320px;
            margin-bottom: 20px;
          }

          .hero-robot canvas {
            width: 350px !important;
            height: 350px !important;
          }

          .hero-text h1 {
            font-size: 1.7rem;
          }

          .hero-text p {
            font-size: 0.95rem;
          }
        }

        /* 📱 Extra Small */
        @media (max-width: 480px) {
          .hero-robot {
            max-height: 280px;
          }

          .hero-robot canvas {
            width: 300px !important;
            height: 300px !important;
          }

          .hero-text h1 {
            font-size: 1.5rem;
          }

          .hero-text p {
            font-size: 0.85rem;
          }
        }

        /* 📱 MOBILE DEVICE USING DESKTOP-SITE MODE — FIX GAP */
        @media (max-width: 900px) and (min-aspect-ratio: 1/1) {
          .hero-robot {
            margin-bottom: 120px !important;
          }

          .hero-text {
            margin-top: 40px !important;
          }
        }

      `}</style>

      <section id="home" className="hero-robot-section">

        {/* ✍️ Text Left */}
        <div className="hero-text">
          <h1>Meet the Minds Behind ACM SIGAI</h1>
          <p>
            We are a community of innovators exploring the world of Artificial
            Intelligence, Machine Learning, and Human–Computer Interaction. <br />
            Our mission is to bridge creativity with technology — crafting
            solutions that make intelligence truly interactive.
          </p>
        </div>

        {/* 🤖 Robot Right */}
        <div className="hero-robot">
          <Suspense fallback={<div>Loading Robot...</div>}>
            <Spline scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" />
          </Suspense>
        </div>

      </section>
    </>
  );
};

export default HeroSection;
