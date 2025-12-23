import { MapPin, Mail, Phone } from "lucide-react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/30 py-12 px-8 cursor-auto">
      {/* Map Section */}
      <div className="mapcontainer w-full flex justify-center py-10 bg-background cursor-auto">
        <div className="w-[90%] md:w-[80%] lg:w-[70%] overflow-hidden rounded-2xl shadow-lg border border-border cursor-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2685.807415056768!2d72.87278298331742!3d19.20637003525048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0e57647569d%3A0xc0aec329c82d3555!2sThakur%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1725606742168!5m2!1sen!2sin"
            className="w-full h-[250px] sm:h-[300px] md:h-[350px] border-0 hover:scale-105 duration-500 transition-transform cursor-auto"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Thakur College of Engineering and Technology Map"
          ></iframe>
        </div>
      </div>

      {/* Footer Columns */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 cursor-auto">
        {/* Column 1 */}
        <div>
          <h3 className="text-lg font-bold mb-4 cursor-text">ACM SIGAI TCET</h3>
          <p className="text-sm text-foreground/70 leading-relaxed cursor-text">
            Special Interest Group on Artificial Intelligence at Thakur College of Engineering and Technology
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-bold mb-4 cursor-text">Pages</h3>
          <ul className="space-y-2 text-sm cursor-text">
            <li>
              <a href="https://acmsigai.tcetmumbai.in/" className="text-foreground/70 hover:text-accent transition-colors cursor-pointer">
                Home
              </a>
            </li>
            <li>
              <a href="https://acmsigai.tcetmumbai.in/Events" className="text-foreground/70 hover:text-accent transition-colors cursor-pointer">
                Events
              </a>
            </li>
            <li>
              <a href="https://acmsigai.tcetmumbai.in/Our-Team" className="text-foreground/70 hover:text-accent transition-colors cursor-pointer">
                Team
              </a>
            </li>
            <li>
              <a href="https://acmsigai.tcetmumbai.in/Publications" className="text-foreground/70 hover:text-accent transition-colors cursor-pointer">
                Publications
              </a>
            </li>
            <li>
              <a href="https://acmsigai.tcetmumbai.in/Blogs" className="text-foreground/70 hover:text-accent transition-colors cursor-pointer">
                Blogs
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-bold mb-4 cursor-text">Contact</h3>
          <ul className="space-y-3 text-sm cursor-text">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 cursor-auto" />
              <span className="text-foreground/70 cursor-text">Thakur College, Mumbai</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 flex-shrink-0 cursor-auto" />
              <span className="text-foreground/70 cursor-text">acmsigai10@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 flex-shrink-0 cursor-auto" />
              <span className="text-foreground/70 cursor-text">+91 93265 90260</span>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-lg font-bold mb-4 cursor-text">Follow Us</h3>
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/tcet_acm.sigai?igsh=aHI0aXh4emQ4dmNp"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-pink-500 transition-colors cursor-pointer"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/SIG-AI-OpenSource"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/tcet-acm-sigai/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
