'use client';

import React, { useState, useEffect } from 'react';
const teamData = [
  {
    id : "chairperson",
    name: "Rishikesh Saroj",
    role: "Chairperson",
    shortDesc: "Meet our exceptional Chairperson, Rishikesh Saroj! Rishikesh leads...",
    longDesc: "Rishikesh leads the committee with clarity and strong decision-making. He keeps the team united while ensuring smooth coordination. His guidance constantly pushes the committee toward excellence.",
    image: "Rishikesh.png",
    linkedin: "https://in.linkedin.com/in/rishikesh-saroj-107a89326"
  },
  {
    id: "vice-chairperson",
    name: "Ishan Dubey",
    role: "Vice - Chairperson",
    shortDesc: "Meet our outstanding Vice Chairperson, Ishan Dubey! Ishan ensures....",
    longDesc: "Ishan ensures smooth execution of plans and supports major decisions. He strengthens coordination across all teams. His proactive approach drives consistent progress for the committee.",
    image: "ishan.png",
    linkedin: "https://www.linkedin.com/in/ishan-dubey-a45378322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    id: "event-manager",
    name: "Taran Shetty",
    role: "Event Manager",
    shortDesc: "Meet our brilliant Event Manager, Taran Shetty! Taran plans ...",
    longDesc: "Taran plans and executes events with excellent coordination and structure. He handles challenges smoothly throughout every activity. His efforts make every event successful and impactful.",
    image: "taran.png",
    linkedin: "https://www.linkedin.com/in/taran-shetty?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    id: "technical-head",
    name: "Anuj Singh",
    role: "Technical Head",
    shortDesc: "Meet our skilled Technical Head, Anuj Singh! Anuj leads...",
    longDesc: "Anuj leads technical development and solves complex issues efficiently. He supports smooth digital operations for every activity. His expertise elevates the committee’s technical capabilities.",
    image: "anuj.png",
    linkedin: "https://www.linkedin.com/in/anujsingh-ai-ml?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    id: "secretary",
    name: "Mudassir Shaikh",
    role: "Secretary",
    shortDesc: "Meet our dedicated Secretary, Mudassir Shaikh! Mudassir manages...",
    longDesc: "Mudassir manages communication, documentation, and coordination effectively. He keeps every activity organized and timely. His discipline ensures the committee functions seamlessly.",
    image: "mudassir.png",
    linkedin: "https://www.linkedin.com/in/mudassir-shaikh-292a42286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    id: "sponsorship-head",
    name: "Dev Tripati",
    role: "Sponsorship Head",
    shortDesc: "Meet our dynamic Sponsorship Head, Dev Tripathi! Dev secures...",
    longDesc: "Dev secures strong partnerships with confident networking and outreach. He brings valuable sponsorship support to the committee. His communication skills drive major collaboration opportunities.",
    image: "dev.png",
    linkedin: "https://www.linkedin.com/in/dev-tripathi-1b285328a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    id: "webmaster",
    name: "Kartik Bankar",
    role: "Webmaster",
    shortDesc: "Meet our talented Webmaster, Kartik Bankar! With his...",
    longDesc: "With his sharp intellect and boundless creativity, Kartik effortlessly brings our web pages to life. He ensures smooth accessibility and user experience. His work maintains a strong digital identity for the club.",
    image: "kartik.png",
    linkedin: "https://www.linkedin.com/in/kartikbankar21?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    id: "treasurer",
    name: "Reva Purohit",
    role: "Treasurer",
    shortDesc: "Meet our responsible Treasurer, Reva Purohit! Reva manages finances...",
    longDesc: "Reva manages finances with accuracy, transparency, and responsibility. She ensures proper budgeting for all events. Her reliability keeps the committee financially secure.",
    image: "reva.png",
    linkedin: "https://www.linkedin.com/in/reva-purohit-336a88355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    id: "pr-head",
    name: "Aniket Bhaskar",
    role: "Public Relation Head",
    shortDesc: "Meet our charismatic PR Head, Aniket Bhaskar! Aniket maintains ...",
    longDesc: "Aniket maintains a positive public presence for the club through effective outreach. He builds meaningful external connections. His professionalism ensures the club is always well-represented.",
    image: "aniket.png",
    linkedin: "https://www.linkedin.com/in/aniket-bhaskar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    id: "creative-head",
    name: "Krish Vanani",
    role: "Creative Head",
    shortDesc: "Introducing the creative powerhouse of ACM SIGAI,Krish Vanani...",
    longDesc: "Krish’s artistry adds color, character, and creativity to our journey. Every design he creates reflects passion, innovation, and perfection. His imagination fuels the visual identity of our committee and inspires everyone around him.",
    image: "krish.png",
    linkedin: "https://www.linkedin.com/in/krish-vanani-445655260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  }
];
// Team Card Component
const TeamCard = ({
  member,
  isChairperson = false,
  hovered = false,
  onPointerEnter,
  onPointerLeave,
  onTouchStart,
  onTouchEnd,
  onFocus,
  onBlur,
  onClick,
  onKeyDown
}) => {
  const cardId = `team-card-desc-${member.name.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div
      className={`team-card ${isChairperson ? 'chairperson-card' : ''} ${hovered ? 'is-hovered' : ''}`}
    onPointerEnter={onPointerEnter}
onPointerLeave={onPointerLeave}
onClick={onClick}
onKeyDown={onKeyDown}
onFocus={onFocus}
onBlur={onBlur}

      role="button"
      tabIndex={0}
      aria-expanded={hovered}
      aria-controls={cardId}
    >
      <div className="card-content">
        <div className="card-header">
          <div className="card-name-row">
            <div className="card-name">{member.name}</div>

            <a
              href={member.linkedin || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-icon"
              onClick={(e) => e.stopPropagation()}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          <div className="card-role">{member.role}</div>
          <div className="card-toggle-icon" aria-hidden="true" />
        </div>

        <div className="card-desc-wrapper" id={cardId}>
          <div className="card-desc short-desc">{member.shortDesc}</div>
          <div className="card-desc long-desc">{member.longDesc}</div>
        </div>

        <div className="card-image">
          <img
            src={member.image}
            alt={member.name}
            onError={(e) => (e.currentTarget.src = '/placeholder.svg')}
          />
        </div>
      </div>
    </div>
  );
};

// Main CoreTeam Component
export default function CoreTeam() {
  const chairperson = teamData[0];
  const others = teamData.slice(1);

  const gridCol1 = others.slice(0, 3);
  const gridCol2 = others.slice(3, 6);
  const gridCol3 = others.slice(6, 9);

  const [activeCard, setActiveCard] = useState(null);
  const [devtoolsMode, setDevtoolsMode] = useState(false);

  /* Detect DevTools / Touch Emulation */
 useEffect(() => {
  if (typeof window === "undefined") return;

  let last = false;

  const detect = () => {
    const isOpen =
      Math.abs(window.outerWidth - window.innerWidth) > 160 ||
      Math.abs(window.outerHeight - window.innerHeight) > 160;

    if (isOpen !== last) {
      last = isOpen;
      setDevtoolsMode(isOpen);
    }
  };

  detect();
  window.addEventListener("resize", detect);
  return () => window.removeEventListener("resize", detect);
}, []);

useEffect(() => {
  if (devtoolsMode) {
    setActiveCard(null);
  }
}, [devtoolsMode]);


/* Handlers */
const makeHandlers = (id) => {
  if (devtoolsMode) {
    return {
      onClick: () => {
        setActiveCard(prev => (prev === id ? null : id));
      },
      onKeyDown: (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setActiveCard(prev => (prev === id ? null : id));
        }
      }
    };
  }

  return {
    onPointerEnter: () => setActiveCard(id),

    onPointerLeave: () => {
      setActiveCard(prev => (prev === id ? null : prev));
    },

    onClick: () => {
      setActiveCard(prev => (prev === id ? prev : id));
    },

    onFocus: () => setActiveCard(id),

    onBlur: (e) => {
      if (!e.currentTarget.contains(e.relatedTarget)) {
        setActiveCard(null);
      }
    },

    onKeyDown: (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setActiveCard(id);
      }
    }
  };
};


  return (
    <div className="core-team-wrapper">
      <div className="main-wrapper">

        <h1 className="section-title">
          CORE <span>TEAM</span>
        </h1>

        <div className="team-container">

          <div className="chairperson-container" role="region" aria-label="Chairperson">
            <TeamCard
              member={chairperson}
              isChairperson={true}
             hovered={activeCard === chairperson.id}
             {...makeHandlers(chairperson.id)}

            />
          </div>

          {/* Desktop 3x3 grid stays SAME */}
          <div id="grid-3x3-container">
            <div className="team-column grid-column" role="list">
              {gridCol1.map((member) => (
               <TeamCard
  key={member.id}
  member={member}
  hovered={activeCard === member.id}
  {...makeHandlers(member.id)}
/>

              ))}
            </div>

            <div className="team-column grid-column" role="list">
              {gridCol2.map((member) => (
               <TeamCard
  key={member.id}
  member={member}
  hovered={activeCard === member.id}
  {...makeHandlers(member.id)}
/>

              ))}
            </div>

            <div className="team-column grid-column" role="list">
              {gridCol3.map((member) => (
                <TeamCard
  key={member.id}
  member={member}
  hovered={activeCard === member.id}
  {...makeHandlers(member.id)}
/>
              ))}
            </div>
          </div>

          {/* 🔥 Updated Mobile Order */}
          <div className="team-column mobile-only-column">
            <TeamCard
              member={teamData.find(m => m.role === "Vice - Chairperson")}
              hovered={activeCard === "vice-chairperson"}
              {...makeHandlers("vice-chairperson")}
            />
            <TeamCard
              member={teamData.find(m => m.role === "Secretary")}
              hovered={activeCard === "secretary"}
              {...makeHandlers("secretary")}
            />
            <TeamCard
              member={teamData.find(m => m.role === "Treasurer")}
              hovered={activeCard === "treasurer"}
              {...makeHandlers("treasurer")}
            />
          </div>

          <div className="team-column mobile-only-column">
            <TeamCard
              member={teamData.find(m => m.role === "Event Manager")}
              hovered={activeCard === "event-manager"}
              {...makeHandlers("event-manager")}
            />
            <TeamCard
              member={teamData.find(m => m.role === "Sponsorship Head")}
              hovered={activeCard === "sponsorship-head"}
              {...makeHandlers("sponsorship-head")}
            />
            <TeamCard
              member={teamData.find(m => m.role === "Public Relation Head")}
              hovered={activeCard === "pr-head"}
              {...makeHandlers("pr-head")}
            />
          </div>

          <div className="team-column mobile-only-column">
            <TeamCard
              member={teamData.find(m => m.role === "Technical Head")}
              hovered={activeCard === "technical-head"}
              {...makeHandlers("technical-head")}
            />
            <TeamCard
              member={teamData.find(m => m.role === "Webmaster")}
              hovered={activeCard === "webmaster"}
              {...makeHandlers("webmaster")}
            />
            <TeamCard
              member={teamData.find(m => m.role === "Creative Head")}
              hovered={activeCard === "creative-head"}
              {...makeHandlers("creative-head")}
            />
          </div>

        </div>

      </div>
    </div>
  );
}
