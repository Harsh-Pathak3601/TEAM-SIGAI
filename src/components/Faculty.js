import React from 'react';

// --- LinkedIn Icon Component ---
// Re-usable SVG icon for LinkedIn
const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-gray-400 hover:text-blue-300 transition-colors"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

// --- Detailed Faculty Card Component ---
// This component matches the design from your image
const FacultyCard = ({ title, imageUrl, name, role, description }) => (
  <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 md:p-8 shadow-2xl shadow-blue-500/20 w-full max-w-5xl mx-auto backdrop-blur-sm bg-opacity-80 min-h-[50rem] md:min-h-[38rem] h-full"> {/* Responsive min-height and wider max width */}
    <div className="flex flex-col md:flex-row gap-8 items-center md:items-start h-full">
      {/* Left Column: Image and Name */}
      <div className="flex-shrink-0 flex flex-col items-center md:items-start text-center md:text-left">
        <img
          src={imageUrl}
          alt={name}
          className="w-52 h-72 sm:w-60 sm:h-80 md:w-72 md:h-96 lg:w-80 lg:h-[28rem] object-cover border-4 border-gray-700 shadow-lg" /* Increased sizes: larger on md/lg */
          style={{ borderRadius: '12px' }}
          onError={(e) => { e.target.src = 'https://placehold.co/240x240/222/FFF?text=Photo'; }}
        />
        <h3 className="text-xl md:text-2xl font-bold text-white mt-5">{name}</h3>
        <p className="text-sm md:text-base text-gray-400">{role}</p>
        <a href="#" aria-label={`${name}'s LinkedIn Profile`} className="mt-4">
          <LinkedInIcon />
        </a>
      </div>
      
      {/* Right Column: Title and Description */}
      <div className="flex-1 flex flex-col"> {/* Added flex flex-col */}
        <h2 className="text-2xl md:text-3xl font-bold text-blue-300 mb-6">{title}</h2>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed flex-grow text-justify"> {/* Responsive text sizes, flex-grow and justified to fill space */}
          {description}
        </p>
      </div>
    </div>
  </div>
);

// --- Main App Component ---
// This component renders the faculty page
export default function App() {
  // Data for the faculty cards, based on your image
  const facultySponsor = {
    title: "Faculty Sponsor",
    imageUrl: "Shiwani_Mam.jpg",
    name: "Dr. Shiwani Gupta",
    role: "HOD of Department",
    description: "Dr. Shiwani Gupta, the HOD of the Department of Artificial Intelligence and Machine Learning (AIML), is a dedicated educator with over 20 years of experience in academia. She holds a Ph.D. in Technology from Mumbai University, where her doctorate research includes significant contributions in Machine Learning and AI applications. Her work has been widely published, including studies on online signature recognition, healthcare optimization using machine learning, and advanced feature selection algorithms for heart disease datasets in prestigious journals and IEEE conferences. Dr. Gupta's commitment to accessible learning and research excellence has made her a driving force in fostering institutional growth and innovation through roles like Infosys Campus Connect Trainer and R&D Coordinator."
  };

  const facultyInChargePranjali = {
    title: "Faculty In-Charge",
    imageUrl: "pranjali.jpg",
    name: "Pranjali Sankhe",
    role: "Assistant Professor",
    description: "Mrs. Pranjali Sankhe, the faculty in charge of the TCET ACM SIGAI Committee, specializes in Machine Learning, Computer Networking, and Security. With experience as a trainer at the Central Bank of India for Computer Networking and Cybersecurity, she has also completed certifications from Infosys Springboard and Microsoft. Her research contributions include publications on chronic disease prediction, image cryptography, and motion capture visualization in prominent conferences such as IEEE and IC-ICN. Passionate about advancing intelligent computing, Mrs. Sankhe actively engages in academic research and professional development in emerging technologies."
  };
  return (
    <div className="bg-gray-950 min-h-screen p-4 md:p-12 text-gray-100 font-sans" style={{ background: 'radial-gradient(circle, #1a202c 0%, #0a0e1a 100%)' }}>
      {/* Use grid to force cards to be same height */}
      <div className="grid grid-cols-1 gap-12 auto-rows-fr"> 
        {/* Faculty Sponsor Card */}
        <FacultyCard
          title={facultySponsor.title}
          imageUrl={facultySponsor.imageUrl}
          name={facultySponsor.name}
          role={facultySponsor.role}
          description={facultySponsor.description}
        />
        
        {/* Faculty In-Charge Cards */}
        <FacultyCard
          title={facultyInChargePranjali.title}
          imageUrl={facultyInChargePranjali.imageUrl}
          name={facultyInChargePranjali.name}
          role={facultyInChargePranjali.role}
          description={facultyInChargePranjali.description}
        />
      </div>
    </div>
  );
}