import { FaGithub, FaLinkedin, FaHackerrank, FaEnvelope, FaPhone } from "react-icons/fa";

const ContactNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#080808] text-white shadow-md p-4 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h2 className="text-xl font-bold">Contact Me</h2>
        <div className="flex space-x-6">
          <a href="https://github.com/VanisthSharma" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/vanisth-sharma" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.hackerrank.com/vanisth24bander" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
            <FaHackerrank size={24} />
          </a>
          <a href="mailto:vanisthsharma@gmail.com" className="hover:text-gray-400 transition">
            <FaEnvelope size={24} />
          </a>
          <a href="tel:+7357505500" className="hover:text-gray-400 transition">
            <FaPhone size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default ContactNavbar;
