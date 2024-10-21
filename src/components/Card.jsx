import React from "react";

const Card = ({ title, colleges, courses }) => {
  return (
    <div className="bg-gray-100  border border-gray-300 rounded-lg p-6 w-56 sm:w-56">
      {/* Icon */}
      <div className="flex items-center justify-start mb-4">
        <div className="bg-teal-100 rounded-full p-2">
          {/* Replace this SVG with an actual image if needed */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8 text-teal-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5z"
            />
          </svg>
        </div>
        {/* Title and Subheading */}
        <div className="ml-4">
          <h2 className="text-xl font-semibold text-gray-800 ">
            {title}
          </h2>
          <p className="text-gray-600 ">{colleges}</p>
        </div>
      </div>    

      {/* Course List */}
      <div className="mt-4">
        <ul className="space-y-2 text-left">
          {courses.map((course, index) => (
            <li key={index} className="text-gray-700 text-sm border-b border-gray-300 pb-2">
              {course}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;