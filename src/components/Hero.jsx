import React, { useState, useEffect } from "react";
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';
import p4 from '../assets/p4.jpg';
import p5 from '../assets/p5.jpg';

// List of images (add the correct image paths)
// List of imported images
const images = [p1, p2, p3, p4, p5];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
   const [searchQuery, setSearchQuery] = useState('');

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  // Automatically change slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    
   
   <div className="relative w-full" data-carousel="slide">
      {/* Search Input - Static */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10 w-full px-4">
        {/* Text above the search bar */}
        <span className="mb-6 font-bold text-gray-900 text-3xl w-full  text-center">
            Search BE/B.Tech Colleges, Courses and Exams in New Delhi</span>
        <div className="flex items-center bg-white rounded-lg shadow-lg  w-full max-w-2xl">
     
        <input
            type="text"
            className="border-none focus:outline-none px-3 w-full"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
    
          <button className=" bg-orange-500 text-white rounded-e-lg py-1 px-4 ">
           SEARCH HERE
          </button>
        </div>
      </div>

      {/* Carousel wrapper */}
      <div className="relative h-96 overflow-hidden rounded-lg md:h-96">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute block w-full transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              className="w-full h-96  oobject-contain"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-blue-500" : "bg-gray-300"
            }`}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
