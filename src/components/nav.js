import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
      {/* Logo */}
      <img src="/Images/brand_logo.png" alt="Brand Logo" className="w-15 h-10" />
      {/* <div className="text-2xl font-bold text-gray-800">BrandLogo</div> */}

      {/* Menu Options */}
      <ul className="hidden md:flex space-x-8 text-lg font-medium text-gray-600">
        <li className="cursor-pointer hover:text-gray-800">MENU</li>
        <li className="cursor-pointer hover:text-gray-800">LOCATION</li>
        <li className="cursor-pointer hover:text-gray-800">ABOUT</li>
        <li className="cursor-pointer hover:text-gray-800">CONTACT</li>
      </ul>

      {/* Login Button */}
      <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-300">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
