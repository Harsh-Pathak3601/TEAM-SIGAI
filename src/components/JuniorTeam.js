import React, { useEffect, useRef } from 'react';

const JuniorTeam = () => {
  const teamContainerRef = useRef(null);
  const cursorGlowRef = useRef(null);

  const teamMembers = [
    { id: 1, name: 'Tiya Rai', role: 'Joint Secretary', imageUrl: '/Tiya.jpg', linkedin: 'https://www.linkedin.com/' },
    { id: 2, name: 'Riya Yadav', role: 'Joint Event Manager', imageUrl: '/riya.jpg', linkedin: 'https://www.linkedin.com/' },
    { id: 3, name: 'Bala Sudalaimuthu', role: 'Joint Technical Head', imageUrl: '/bala.jpg', linkedin: 'https://www.linkedin.com/in/bala-sudalaimuthu-a34b53355/' },
    { id: 4, name: 'Parag Valam', role: 'Joint Creative Head', imageUrl: '/parag.jpg', linkedin: 'https://www.linkedin.com/' },
    { id: 5, name: 'Vipul Choudhary', role: 'Joint PR & Sponsorship Head', imageUrl: '/Vipul.jpg', linkedin: 'https://www.linkedin.com/' },
    { id: 6, name: 'Pranav Vishwakarma', role: 'Inhouse Head', imageUrl: '/Pranav.jpg', linkedin: 'https://www.linkedin.com/' },
  ];

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;
    const easing = 0.08;
    let animationFrameId = null;

    function animateCursor() {
      if (cursorGlowRef.current) {
        glowX += (mouseX - glowX) * easing;
        glowY += (mouseY - glowY) * easing;
        cursorGlowRef.current.style.transform = `translate(${glowX - 300}px, ${glowY - 300}px)`;
      }
      animationFrameId = requestAnimationFrame(animateCursor);
    }

    const handleWindowMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleWindowMouseMove);
    animateCursor();

    const handleCardClick = (e) => {
      if (e.target.closest('a')) return;
      
      const clickedCard = e.target.closest('.team-card');
      if (!clickedCard || !teamContainerRef.current) return;

      const allCards = teamContainerRef.current.querySelectorAll('.team-card');
      const isActive = clickedCard.classList.contains('card-active');

      allCards.forEach(card => card.classList.remove('card-active', 'card-inactive'));

      if (!isActive) {
        clickedCard.classList.add('card-active');
        allCards.forEach(card => {
          if (card !== clickedCard) card.classList.add('card-inactive');
        });
      }
    };

    const handleDocumentClick = (e) => {
      if (!e.target.closest('.team-card') && teamContainerRef.current) {
        teamContainerRef.current.querySelectorAll('.team-card').forEach(card => {
          card.classList.remove('card-active', 'card-inactive');
        });
      }
    };

    if (teamContainerRef.current) {
      teamContainerRef.current.addEventListener('click', handleCardClick);
    }
    document.addEventListener('click', handleDocumentClick);

    const allCards = teamContainerRef.current?.querySelectorAll('.team-card');
    const entranceTimers = [];
    const cardListeners = [];

    if (allCards) {
      allCards.forEach((card, index) => {
        const timerId = setTimeout(() => {
          card.classList.remove('card-hidden');
        }, 150 * index);
        entranceTimers.push(timerId);

        const cardInner = card.querySelector('.card-inner');
        const cardImage = card.querySelector('.card-image');
        const cardContent = card.querySelector('.card-content');

        const handleCardMouseMove = (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -8;
          const rotateY = ((x - centerX) / centerX) * 8;
          
          if (cardInner) cardInner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
          if (cardImage) cardImage.style.transform = `translateZ(20px)`;
          if (cardContent) cardContent.style.transform = `translateZ(50px)`;
        };

        const handleCardMouseLeave = () => {
          if (cardInner) cardInner.style.transform = 'rotateX(0deg) rotateY(0deg)';
          if (cardImage) cardImage.style.transform = 'translateZ(0px)';
          if (cardContent) cardContent.style.transform = 'translateZ(0px)';
        };

        card.addEventListener('mousemove', handleCardMouseMove);
        card.addEventListener('mouseleave', handleCardMouseLeave);

        cardListeners.push({ card, event: 'mousemove', handler: handleCardMouseMove });
        cardListeners.push({ card, event: 'mouseleave', handler: handleCardMouseLeave });
      });
    }

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);

      if (teamContainerRef.current) {
        teamContainerRef.current.removeEventListener('click', handleCardClick);
      }
      document.removeEventListener('click', handleDocumentClick);

      entranceTimers.forEach(clearTimeout);
      cardListeners.forEach(({ card, event, handler }) => {
        card.removeEventListener(event, handler);
      });
    };
  }, []);

  return (
    <>
      {/* FIX: Remove unwanted top/bottom gaps & add cursor defaults */}
      <style>{`
        .junior-team-section {
          min-height: auto !important;
          height: auto !important;
          padding-top: 20px !important;
          padding-bottom: 40px !important;
          cursor: default !important;
        }

        .team-card { 
          cursor: pointer !important;
        }

        a, svg {
          cursor: pointer !important;
        }
      `}</style>

      <section id="junior-team" className="junior-team-section text-white py-16">
        <div id="cursor-glow" ref={cursorGlowRef}></div>

        <div className="container mx-auto px-4">
          <header className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black tracking-wider uppercase">
              JUNIOR <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">CORE TEAM</span>
            </h1>
          </header>

          <div 
            id="team-container" 
            ref={teamContainerRef} 
            className="flex flex-wrap justify-center items-center gap-6"
          >
            {teamMembers.map((member, index) => (
              <div 
                key={member.id} 
                className="team-card card-hidden w-[180px] h-[350px] transition-all duration-500 ease-in-out"
                data-id={member.id}
              >
                <div className="card-inner relative group bg-gradient-to-b from-[#1E2A5A] to-[#121529] rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    className="card-image absolute top-0 left-0 w-full h-full object-cover object-top opacity-30 grayscale group-hover:opacity-100 group-hover:grayscale-0" 
                  />
                  <div className="card-content absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="font-black text-6xl text-white/40 opacity-100 group-hover:opacity-0 group-hover:-translate-y-4 transition-all duration-500 ease-in-out">
                      {index + 1}
                    </div>
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                      <h3 className="text-lg font-bold text-white">{member.name}</h3>
                      <p className="text-sm text-blue-300 font-medium">{member.role}</p>
                    </div>
                  </div>

                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="absolute top-4 right-4 w-8 h-8 bg-black/30 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm z-20"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                    </svg>
                  </a>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default JuniorTeam;
