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
          min-height: 100vh;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          overflow: hidden;
          padding: 100px 120px;
        }

        /* ✍️ Text Section (Left) */
        .hero-text {
          flex: 1;
          z-index: 3;
          max-width: 550px;
          text-align: left;
          opacity: 0;
          animation: fadeIn 1.4s ease-out forwards;
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
          align-items: flex-start;
          height: 100%;
          min-height: 600px;
          max-height: 700px;
          transform: translateY(-25px);
          animation: fadeUp 1.2s ease-out forwards;
        }

        .hero-robot canvas {
          width: 650px !important;
          height: 650px !important;
          object-fit: contain;
        }

        /* ✨ Animations */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(-25px); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* 💻 Larger Screens */
        @media (min-width: 1200px) {
          .hero-robot canvas {
            width: 700px !important;
            height: 700px !important;
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
            margin-top: 30px;
          }

          .hero-robot {
            order: 1;
            align-items: center;
            transform: scale(1.5) translateY(0);
            height: 70vh;
          }

          .hero-text h1 {
            font-size: 2rem;
          }

          .hero-text p {
            font-size: 1rem;
          }
        }

        /* 📱 Mobile — EXACT 25px SPACING BELOW ROBOT */
        @media (max-width: 768px) {
          .hero-robot-section {
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            padding-top: 40px;
            text-align: center;
          }

          .hero-robot {
            order: 1;
            height: 80vh;
            transform: scale(2.2);
            transform-origin: top center;
            margin-top: 20px;
            margin-bottom: 25px; /* ✅ EXACT 25px gap between robot & text */
          }

          .hero-text {
            order: 2;
            margin-top: 0; /* clean start */
            padding-bottom: 80px;
          }

          .hero-text h1 {
            font-size: 1.5rem;
          }

          .hero-text p {
            font-size: 0.9rem;
          }
        }

        /* 📱 Extra Small Devices */
        @media (max-width: 480px) {
          .hero-robot {
            transform: scale(2.4);
            height: 85vh;
          }

          .hero-text h1 {
            font-size: 1.4rem;
          }

          .hero-text p {
            font-size: 0.85rem;
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
