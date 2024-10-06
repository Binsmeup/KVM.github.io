import logo from "../assets/kvmlogobg.png";

import { FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="bg-white text-black flex items-center justify-between py-1 border-b">
      {/*Logo*/}
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-12" src={logo} alt="logo" />
        <h1 className="text-2xl">
            KVM Electronics Services
            </h1>
      </div>
            {/* Centered Links Section */}
            <div className="flex-1 flex justify-center">
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
      {/*Social Media*/}
      <div className="m-7 flex items-center justify-center gap-4 text-2xl">
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
