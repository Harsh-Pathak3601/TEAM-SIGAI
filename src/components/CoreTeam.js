import React, { useState } from 'react';

// --- Stateful TeamCard Component ---
// We add an 'isChairperson' prop to toggle styling
const TeamCard = ({ member, isChairperson = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const cardId = `team-card-desc-${member.name.replace(/\s+/g, '-').toLowerCase()}`;

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  return (
    <div 
      // Add the 'chairperson-card' class if the prop is true
      className={`team-card ${isChairperson ? 'chairperson-card' : ''} ${isOpen ? 'is-open' : ''}`}
      onClick={handleClick} 
      onKeyDown={handleKeyDown} 
      role="button"
      tabIndex="0"
      aria-expanded={isOpen}
      aria-controls={cardId}
    >
      <div className="card-content">
        <div className="card-header">
          <div className="card-name">{member.name}</div>
          <div className="card-role">{member.role}</div>
          <div className="card-toggle-icon" aria-hidden="true" />
        </div>
        <div className="card-desc-wrapper" id={cardId}>
          <div className="card-desc short-desc">{member.shortDesc}</div>
          <div className="card-desc long-desc">{member.longDesc}</div>
        </div>
        <div className="card-image">
          <img src={member.image} alt={member.name} />
        </div>
      </div>
    </div>
  );
};


// --- Main CoreTeam Component ---
const CoreTeam = () => {
  // This is your 10-member data structure (3-4-3)
  const teamMembers = {
    column1: [
      {
        name: "Rishikesh Saroj",
        role: "Chairperson",
        shortDesc: "Meet our exceptional Chairperson, Diya Manapetty! Diya's beauty is matched...",
        longDesc: "Diya's beauty is matched by her inner grace, with kindness that deeply enriches every aspect of her work. Her dedication, resilience, and unwavering commitment drive our team forward.",
        image: "Rishikesh.png"
      },
      {
        name: "Ishan Dubey",
        role: "Vice - Chairperson",
        shortDesc: "Meet our exceptional Vice Chairperson, Satish Gupta! Satish combines sharp...",
        longDesc: "Satish combines sharp intellect with a proactive approach to problem-solving. His leadership fosters a culture of innovation and excellence, making him an invaluable asset to our team's success.",
        image: "ishan.png"
      },
      {
        name: "Mudassir Shaikh",
        role: "Secretary",
        shortDesc: "Introducing our exceptional Public Relations Head Saurabh Shukla! He's a...",
        longDesc: "He's a master of communication and strategic outreach. Saurabh's ability to build strong relationships and manage our public image is crucial to our organization's growth and reputation.",
        image: "mudassir.png"
      }
    ],
    column2: [
      {
        name: "Reva Purohit",
        role: "Treasurer",
        shortDesc: "Meet our exceptional Secretary, Sagar Kanekar! Sagar's unwavering...",
        longDesc: "Sagar's unwavering commitment and tireless work ethic make him an invaluable asset. He handles every task with unmatched efficiency, ensuring everything runs smoothly.",
        image: "reva.png"
      },
      {
        name: "Taran Shetty",
        role: "Event Manager",
        shortDesc: "Meet our incredible Treasurer, Saloni Parab! Saloni's blend of...",
        longDesc: "Saloni's blend of beauty and brains makes her an outstanding treasurer. Her meticulous attention to detail and strategic financial planning ensure the fiscal health of our organization.",
        image: "taran.png"
      },
      {
        name: "Dev Tripati",
        role: "Sponsorship Head",
        shortDesc: "Introducing the creative powerhouse of ACM SIG AI! Shrutika Konduri...",
        longDesc: "Whether designing stunning visuals or conceptualizing innovative campaigns, Shrutika's artistic vision and creativity are unmatched. She brings our ideas to life with flair and passion.",
        image: "dev.png"
      },
      {
        name: "Aniket Bhaskar",
        role: "Public Relation Head",
        shortDesc: "Meet Rohan, our social media maestro! Rohan's creative...",
        longDesc: "Rohan's creative content and strategic engagement build our vibrant online community, connecting with our audience and amplifying our message across all platforms.",
        image: "aniket.png"
      }
    ],
    column3: [
      {
        name: "Anuj Singh",
        role: "Technical Head",
        shortDesc: "Meet our exceptional Event Manager, Akshita Chunchu! Say hello to our...",
        longDesc: "Say hello to our Event Manager, whose expertise turns visions into unforgettable experiences. Akshita's organizational skills and creative flair are the cornerstones of our successful events.",
        image: "anuj.png"
      },
      {
        name: "Kartik Bankar",
        role: "Webmaster",
        shortDesc: "Meet our incredible Sponsorship Head, Rahul George!! The absolute...",
        longDesc: "The absolute charmer, Rahul excels at building and maintaining strong partnerships. His strategic approach to sponsorship is key to our financial stability and growth.",
        image: "kartik.png"
      },
      {
        name: "Krish Vanani",
        role: "Creative Head",
        shortDesc: "Meet Khushi Sharma, our brilliant webmaster! With her sharp intellect...",
        longDesc: "With her sharp intellect and skills, Khushi ensures our digital presence is flawless. She manages our website with precision, ensuring a seamless experience for our community.",
        image: "krish.png"
      }
    ]
  };

  // --- START: New Data Logic ---
  // 1. Extract the Chairperson
  const chairperson = teamMembers.column1[0];

  // 2. Get all 9 other members into one array
  const otherMembers = [
    ...teamMembers.column1.slice(1), // 2 members
    ...teamMembers.column2,           // 4 members
    ...teamMembers.column3,           // 3 members
  ];

  // 3. Split the 9 members into 3 columns for the 3x3 grid
  const gridCol1 = otherMembers.slice(0, 3);
  const gridCol2 = otherMembers.slice(3, 6);
  const gridCol3 = otherMembers.slice(6, 9);
  // --- END: New Data Logic ---

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Poppins:wght@300;500;700&family=Teko:wght@600&display=swap');

        /* --- CSS Variables for easy theming --- */
        .core-team-wrapper {
          --bg-primary: #030712;
          --bg-secondary: #0B1120;
          --border-color: #1F2937;
          --border-hover: #38BDF8;
          --text-primary: #F9FAFB;
          --text-secondary: #D1D5DB;
          --accent-color: #38BDF8;
          
          --font-body: 'Poppins', sans-serif;
          --font-heading: 'Abril Fatface', serif;
          --font-display: 'Teko', sans-serif;
          
          --card-transition: 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .core-team-wrapper {
          font-family: var(--font-body);
          background-color: var(--bg-primary);
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 40px 20px;
        }

        .main-wrapper {
          width: 100%;
          max-width: 1200px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .section-title {
          font-family: var(--font-display);
          font-size: 4.5rem;
          color: var(--text-primary);
          letter-spacing: 2px;
          margin-bottom: 40px;
          text-align: center;
        }

        .section-title span {
          color: var(--accent-color);
        }

        .team-container {
          display: flex;
          gap: 20px;
          width: 100%;
          /* This is the base style for the animation */
          height: 1200px; 
        }
        
        /* By default, hide the new desktop-only layouts */
        .chairperson-container,
        .grid-column {
          display: none;
        }
        
        #grid-3x3-container {
          display: none; /* Hide this by default */
        }

        .team-column {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .team-card {
          background-color: var(--bg-secondary);
          border-radius: 16px;
          padding: 24px;
          color: var(--text-primary);
          cursor: pointer;
          overflow: hidden;
          border: 1px solid var(--border-color);
          /* Base styles for the animation */
          flex-grow: 1;
          flex-basis: 0;
          transition: flex-grow var(--card-transition), border-color 0.3s ease, transform 0.3s ease;
          position: relative; 
        }
        
        .team-card:focus-visible {
          outline: 2px solid var(--accent-color);
          outline-offset: 2px;
        }

        .card-content {
          /* Base style for the animation */
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
        }
        
        .card-header {
          position: relative;
        }
        
        .card-toggle-icon {
          position: absolute;
          top: 0;
          right: 0;
          width: 24px;
          height: 24px;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .card-toggle-icon::before {
          content: '';
          border: solid var(--accent-color);
          border-width: 0 2px 2px 0;
          display: inline-block;
          padding: 4px;
          transform: rotate(45deg); 
          transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        .team-card.is-open .card-toggle-icon::before {
          transform: rotate(-135deg); 
        }

        .card-name {
          font-family: var(--font-heading);
          font-size: 2.2rem;
          line-height: 1.1;
          font-weight: 400;
          padding-right: 30px; 
        }

        .card-role {
          font-size: 1rem;
          color: var(--accent-color);
          font-weight: 500;
          margin-bottom: 16px;
        }

        .card-desc-wrapper {
          transition: all 0.4s ease;
          min-height: 80px;
        }

        .card-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          font-weight: 300;
          line-height: 1.6;
          transition: opacity 0.4s ease 0.1s, max-height 0.4s ease 0.1s;
        }

        .short-desc {
          max-height: 100px;
          opacity: 1;
        }

        .long-desc {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
        }

        .card-image {
          width: 100%;
          border-radius: 8px;
          overflow: hidden;
          /* Base style for the animation */
          margin-top: auto;
          flex-shrink: 0;
          transition: all var(--card-transition);
        }

        .card-image img {
          width: 100%;
          /* Base style for the animation */
          height: 100%;
          background-color: transparent;
          display: block;
          object-fit: cover;
          object-position: top center;
        }
        
        /* --- START: Desktop Layout (1 + 3x3) --- */
        @media (hover: hover) and (min-width: 901px) {
          
          .team-container {
            flex-direction: column;
            height: auto;
            gap: 20px;
          }

          .chairperson-container {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
          }
          
          .chairperson-container .team-card {
            width: 350px;
            max-width: 100%;
          }
        
          .grid-column {
            display: flex;
            flex-direction: column;
            gap: 20px;
            flex: 1;
          }
          
          .mobile-only-column {
            display: none;
          }

          #grid-3x3-container {
            display: flex;
            flex-direction: row;
            gap: 20px;
            width: 100%;
            /* This height is CRITICAL for the 3x3 animation */
            height: 1200px; 
          }
          
          /* --- START: CHAIRPERSON CARD STYLES --- */
          /* Horizontal expansion animation for chairperson */
          
          .chairperson-card {
            flex-grow: 0 !important;
            flex-basis: auto !important;
            height: 400px !important;
            width: 350px;
            transition: width var(--card-transition), border-color 0.3s ease, box-shadow 0.3s ease;
            overflow: visible;
          }
          
          .chairperson-card .card-content {
            height: 100% !important;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: auto auto 1fr auto;
            transition: grid-template-columns var(--card-transition);
          }
          
          .chairperson-card .card-header {
            grid-column: 1;
            grid-row: 1 / 3;
          }
          
          .chairperson-card .card-desc-wrapper {
            grid-column: 1;
            grid-row: 3;
            overflow: hidden;
          }
          
          .chairperson-card .card-image {
            grid-column: 1;
            grid-row: 4;
            margin-top: auto !important;
            height: 200px;
            flex-shrink: 0;
            transition: all var(--card-transition);
          }
          
          .chairperson-card .card-image img {
            height: 100% !important;
            object-fit: cover !important;
            transition: transform var(--card-transition);
          }

          /* Hover state - expand horizontally */
          .chairperson-card:hover {
            width: 700px;
            border-color: var(--accent-color);
            box-shadow: 0 20px 60px rgba(56, 189, 248, 0.3);
          }
          
          .chairperson-card:hover .card-content {
            grid-template-columns: 1fr 1fr;
          }
          
          .chairperson-card:hover .card-image {
            grid-column: 2;
            grid-row: 1 / 5;
            margin-top: 0 !important;
            height: 100%;
            border-radius: 0 8px 8px 0;
            margin-left: 24px;
          }
          
          .chairperson-card:hover .card-image img {
            transform: scale(1.05);
          }
          
          .chairperson-card:hover .short-desc {
            max-height: 0;
            opacity: 0;
          }

          .chairperson-card:hover .long-desc {
            max-height: 400px;
            opacity: 1;
          }

          /* Accent border animation */
          .chairperson-card::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: linear-gradient(45deg, var(--accent-color), #0EA5E9, var(--accent-color));
            border-radius: 16px;
            opacity: 0;
            z-index: -1;
            transition: opacity 0.3s ease;
          }
          
          .chairperson-card:hover::before {
            opacity: 1;
          }
          
          /* Subtle glow effect */
          .chairperson-card::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.1) 0%, transparent 70%);
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
            border-radius: 16px;
          }
          
          .chairperson-card:hover::after {
            opacity: 1;
          }
          
          /* --- END: CHAIRPERSON CARD STYLES --- */


          /* --- 3x3 Grid Card Styles (Unaffected) --- */
          /* These rules apply to the 9 grid cards
             and use the base animation styles */
          .grid-column .team-card:hover {
            flex-grow: 2.5;
            border-color: var(--border-hover);
          }
          
          .grid-column .team-card:hover .short-desc {
            max-height: 0;
            opacity: 0;
          }

          .grid-column .team-card:hover .long-desc {
            max-height: 400px;
            opacity: 1;
          }
          
          .grid-column .team-card::after {
            display: none;
          }
        }
        /* --- END: Desktop Layout --- */
        
        
        .team-card.is-open .short-desc {
          max-height: 0;
          opacity: 0;
        }

        .team-card.is-open .long-desc {
          max-height: 999px;
          opacity: 1;
        }
        

        @media (max-width: 900px) {
          .core-team-wrapper {
            padding: 30px 15px;
          }

          .section-title {
            font-size: 3.5rem;
          }

          /* This query correctly disables the animation for mobile */
          .team-container {
            flex-direction: column;
            height: auto; 
            gap: 15px;
          }
          
          .mobile-only-column {
            display: flex;
            flex: 1;
            flex-direction: column;
            gap: 15px;
          }

          .team-card {
            flex-grow: 0; 
            flex-basis: auto; /* Disables animation */
            transition: transform 0.2s ease-out;
          }
          
          .team-card:active {
             transform: scale(0.98);
          }
          
          .card-toggle-icon {
            opacity: 0.7;
          }
          .team-card:hover .card-toggle-icon {
            opacity: 1;
          }

          .team-card:hover {
            flex-grow: 0;
            border-color: var(--border-color);
          }

          /* Mobile overrides for card content */
          .card-content {
            height: auto;
          }
          .card-image {
            margin-top: 24px;
          }
          .card-image img {
            height: auto;
          }

          .short-desc {
            max-height: 100px;
            opacity: 1;
          }
          
          .long-desc {
            max-height: 0;
            opacity: 0;
          }
          
          .team-card.is-open .short-desc {
            max-height: 0;
            opacity: 0;
          }
          .team-card.is-open .long-desc {
            max-height: 999px;
            opacity: 1;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 2.8rem;
          }
           .card-name {
            font-size: 1.9rem;
          }
          .team-card {
            padding: 20px;
          }
        }
      `}</style>

      <div className="core-team-wrapper">
        <div className="main-wrapper">
          <h1 className="section-title">CORE <span>TEAM</span></h1>

          <div className="team-container">
            
            {/* --- START: Desktop Layout (1 + 3x3) --- */}

            <div className="chairperson-container">
              <TeamCard 
                key={chairperson.name} 
                member={chairperson} 
                isChairperson={true} 
              />
            </div>

            <div id="grid-3x3-container">
              <div className="team-column grid-column">
                {gridCol1.map((member, idx) => (
                  <TeamCard key={member.name || idx} member={member} />
                ))}
              </div>

              <div className="team-column grid-column">
                {gridCol2.map((member, idx) => (
                  <TeamCard key={member.name || idx} member={member} />
                ))}
              </div>

              <div className="team-column grid-column">
                {gridCol3.map((member, idx) => (
                  <TeamCard key={member.name || idx} member={member} />
                ))}
              </div>
            </div>
            
            {/* --- END: Desktop Layout --- */}


            {/* --- START: Mobile Layout (Original 3-4-3) --- */}
            
            <div className="team-column mobile-only-column">
              {teamMembers.column1.map((member, idx) => (
                <TeamCard key={member.name || idx} member={member} />
              ))}
            </div>

            <div className="team-column mobile-only-column">
              {teamMembers.column2.map((member, idx) => (
                <TeamCard key={member.name || idx} member={member} />
              ))}
            </div>

            <div className="team-column mobile-only-column">
              {teamMembers.column3.map((member, idx) => (
                <TeamCard key={member.name || idx} member={member} />
              ))}
            </div>
            
            {/* --- END: Mobile Layout --- */}
            
          </div>
        </div>
      </div>
    </>
  );
};

export default CoreTeam;