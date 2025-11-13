import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-10 pb-16">
      
      {/* MAP SECTION */}
      <div className="w-full flex justify-center px-4">
        <div className="w-[90%] md:w-[80%] lg:w-[70%] rounded-2xl overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2685.807415056768!2d72.87278298331742!3d19.20637003525048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0e57647569d%3A0xc0aec329c82d3555!2sThakur%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1725606742168!5m2!1sen!2sin"
            className="w-full h-[300px] md:h-[360px] lg:h-[400px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="TCET Map"
          ></iframe>
        </div>
      </div>

      {/* FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mt-12 px-6">
        
        {/* Column 1 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">ACM SIGAI TCET</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            Special Interest Group on Artificial Intelligence at Thakur College
            of Engineering and Technology
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Pages</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
            <li><a href="/events" className="text-gray-300 hover:text-white">Events</a></li>
            <li><a href="#team" className="text-gray-300 hover:text-white">Team</a></li>
            <li><a href="#publications" className="text-gray-300 hover:text-white">Publications</a></li>
            <li><a href="#blogs" className="text-gray-300 hover:text-white">Blogs</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>

          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={18} />
              <span className="text-gray-300">Thakur College, Mumbai</span>
            </li>

            <li className="flex items-center gap-2">
              <Mail size={18} />
              <span className="text-gray-300">sigai@tcet.ac.in</span>
            </li>

            <li className="flex items-center gap-2">
              <Phone size={18} />
              <span className="text-gray-300">+91 12345 67890</span>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex items-center gap-3">
            
            <a
              href="https://www.instagram.com/tcet_acm.sigai?igsh=aHI0aXh4emQ4dmNp"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-pink-600 transition"
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="https://github.com/SIG-AI-OpenSource"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-600 transition"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/company/tcet-acm-sigai/"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition"
            >
              <FaLinkedin size={20} />
            </a>

          </div>
        </div>

      </div>
    </footer>
  );
}
