import React from "react";
import Navbar from "./components/nav";
import "./index.css"; // Ensure Tailwind CSS is imported

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-gray-50 min-h-screen">
        {/* Left Column */}
        {/* Left Column */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-7xl font-extrabold text-gray-800 text-center leading-tight">
            YOUR FEET <br />
            DESERVE <br />
            THE BEST
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed text-center">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br />
            HELP YOU WITH OUR SHOES. YOUR FEET DESERVE <br />
            THE BEST AND WE’RE HERE TO HELP YOU WITH OUR <br />
            SHOES.
          </p>
          <div className="flex flex-col items-center space-y-4">
            {/* Buttons */}
            <div className="flex space-x-4">
              <button className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-600 transition duration-300">
                Shop Now
              </button>
              <button className="bg-transparent border border-black text-black px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
                Category
              </button>
            </div>

            {/* "Also available on" Text */}
            <p className="text-gray-600 text-lg mt-6">Also available on</p>

            {/* Logos */}
            <div className="flex space-x-6 mt-0">
            <a href="https://www.amazon.in/"  ><img
                src="/Images/amz.jpg" // Replace with the actual Amazon logo path
                alt="Amazon"
                className="w-10 h-auto"
              /></a>
             <a href="https://www.flipkart.com/"> <img
                src="/Images/flp.png" // Replace with the actual Flipkart logo path
                alt="Flipkart"
                className="w-10 h-auto"
              /></a>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex justify-center items-center p-10">
          <img
            src="/Images/shoe_image.png" // Replace with your image URL
            alt="Brand"
            className="w-60% h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
