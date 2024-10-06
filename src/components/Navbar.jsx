import { useState } from "react";
import logo from "../assets/kvmlogobg.png";
import { FaLinkedin, FaBars } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-black flex flex-wrap items-center justify-between py-1 border-b">
      {/*Logo*/}
      <div className="flex flex-col sm:flex-row items-center">
        <img className="mx-2 w-12" src={logo} alt="logo" />
        <h1 className="text-xl sm:text-2xl text-center sm:text-left">
          KVM Electronics Services
        </h1>
      </div>

      {/* Hamburger menu button */}
      <button
        className="sm:hidden mx-2 p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <FaBars className="text-2xl" />
      </button>

      {/* Centered Links Section - hidden on small screens */}
      <div className="hidden sm:flex flex-1 justify-center">
        <div className="flex gap-8   items-center justify-between text-lg font-medium">
          <div className="border-r border-gray-600 px-4 py-2">
            <a href="#about" className="hover:text-red-600">About Us</a>
          </div>
          <div className="px-4 py-2">
            <a href="#services" className="hover:text-red-600">Services</a>
          </div>
          <div className="border-l border-gray-600 px-4 py-2">
            <a href="#contacts" className="hover:text-red-600">Contacts</a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`w-full sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col items-center text-lg font-medium">
          <a href="#about" className="w-full text-center py-2 hover:bg-gray-100">About Us</a>
          <a href="#services" className="w-full text-center py-2 hover:bg-gray-100">Services</a>
          <a href="#contacts" className="w-full text-center py-2 hover:bg-gray-100">Contacts</a>
        </div>
      </div>

      {/*Social Media*/}
      <div className="flex items-center justify-center gap-4 text-xl sm:text-2xl p-2 sm:p-0">
        <a href="https://www.facebook.com/people/KVM-Electronics-Services/100069775059109/?mibextid=JRoKGi" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-blue-600" />
        </a>
        <a href="https://www.facebook.com/people/KVM-Electronics-Services/100069775059109/?mibextid=JRoKGi" target="_blank" rel="noopener noreferrer">
          <FaSquareFacebook className="hover:text-blue-600" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
