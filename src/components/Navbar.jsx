import { useState } from "react";
import logo from "../assets/kvmlogo-no-bg.png";
import { FaLinkedin, FaBars } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-black flex flex-wrap items-center justify-between py-1 border-b">
      <div className="flex flex-col sm:flex-row items-center pr-16">
        <img className="mx-2 w-12" src={logo} alt="logo" />
        <h1 className="text-xl sm:text-2xl text-center sm:text-left">
          KVM Electronics Services
        </h1>
      </div>

      {/* Hamburger */}
      <button
        className="sm:hidden mx-2 p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <FaBars className="text-2xl" />
      </button>

      {/*Links Section*/}
      <div className="hidden sm:flex flex-1 justify-left items-center">
        <div className="flex gap-14 items-left text-lg font-medium">
          <a href="#about" className="hover:text-red-600">
            <div className="border-x border-gray-600 px-14 py-2">
              About Us
            </div>
          </a>
          <a href="#services" className="hover:text-red-600">
            <div className="px-4 py-2">
              Services
            </div>
          </a>
          <a href="#contacts" className="hover:text-red-600">
            <div className="border-x border-gray-600 px-14 py-2">
              Contacts
            </div>
          </a>
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
