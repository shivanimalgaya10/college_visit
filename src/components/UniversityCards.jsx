import React, { useRef } from 'react';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import s1 from '../assets/s1.jpg'
import s2 from '../assets/s2.jpg';
import s3 from '../assets/s3.jpg';
import s4 from '../assets/s4.jpg';

const UniversityCards = () => {
  const scrollRef = useRef(null);

  // Example JSON data
  const data = [
    {
      id: 1,
      name: 'Lexicon MILE',
      location: 'Pune, Maharashtra | AICTE',
      course: 'MBA/PGDM',
      fees: '11.50 Lacs',
      rating: '4.3/5',
      reviews: '60 reviews',
      image: s1,
      score: '6.8/10'
    },
    {
      id: 2,
      name: 'KIIT School of Management',
      location: 'Bhubaneswar, Odisha | AICTE, NBA',
      course: 'MBA/PGDM',
      fees: '6.95 Lacs',
      rating: '4.3/5',
      reviews: '123 reviews',
      image: s2,
      score: '8.8/10'
    },
    {
        id: 2,
        name: 'KIIT School of Management',
        location: 'Bhubaneswar, Odisha | AICTE, NBA',
        course: 'MBA/PGDM',
        fees: '6.95 Lacs',
        rating: '4.3/5',
        reviews: '123 reviews',
        image: s3,
        score: '8.8/10'
      }, {
        id: 2,
        name: 'KIIT School of Management',
        location: 'Bhubaneswar, Odisha | AICTE, NBA',
        course: 'MBA/PGDM',
        fees: '6.95 Lacs',
        rating: '4.3/5',
        reviews: '123 reviews',
        image: s4,
        score: '8.8/10'
      }, {
        id: 2,
        name: 'KIIT School of Management',
        location: 'Bhubaneswar, Odisha | AICTE, NBA',
        course: 'MBA/PGDM',
        fees: '6.95 Lacs',
        rating: '4.3/5',
        reviews: '123 reviews',
        image: s1,
        score: '8.8/10'
      }, {
        id: 2,
        name: 'KIIT School of Management',
        location: 'Bhubaneswar, Odisha | AICTE, NBA',
        course: 'MBA/PGDM',
        fees: '6.95 Lacs',
        rating: '4.3/5',
        reviews: '123 reviews',
        image: s2,
        score: '8.8/10'
      }, {
        id: 2,
        name: 'KIIT School of Management',
        location: 'Bhubaneswar, Odisha | AICTE, NBA',
        course: 'MBA/PGDM',
        fees: '6.95 Lacs',
        rating: '4.3/5',
        reviews: '123 reviews',
        image: s3,
        score: '8.8/10'
      }, {
        id: 2,
        name: 'KIIT School of Management',
        location: 'Bhubaneswar, Odisha | AICTE, NBA',
        course: 'MBA/PGDM',
        fees: '6.95 Lacs',
        rating: '4.3/5',
        reviews: '123 reviews',
        image: s4,
        score: '8.8/10'
      },
    // Add more university/college objects here as needed
  ];

  const scroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="container mx-auto px-3 py-8">
      <h2 className="text-3xl font-bold text-center mb-12">Top Universities/Colleges</h2>
      <div className="relative">
        <MdArrowBackIos
          onClick={() => scroll(-1000)}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-3 rounded-full cursor-pointer shadow"
        />
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 scrollbar-hide px-10"
        >
          {data.map((university) => (
            <div
              key={university.id}
              className="min-w-[300px] bg-white shadow-lg rounded-lg overflow-hidden"
            >
              {/* College Name Section */}
              <div className="text-center py-3 bg-gray-100">
                <h3 className="font-bold text-xl mb-1">{university.name}</h3>
              </div>

              {/* College Image Section */}
              <img
                src={university.image}
                alt={university.name}
                className="w-full h-48 object-cover"
              />
 

 <div className="py-3 px-5">
        <h2 className="text-xl font-bold  mb-2">BE/B.Tech</h2>
        <div className=" items-center mt-3 flex  justify-between">
        
          <span className="  font-semibold">BE/B.Tech</span> 
          <div className="text-yellow-500 flex items-center">
            {/* Star icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <span className="ml-1 text-gray-800">4.3/5</span>
          </div>
        </div>
        <div className=" items-center mt-3 flex  justify-between">

        <p className="text-sm  justify-between ">
          <span className="text-blue-600 font-semibold  ">2.42 Lacs</span> First Year Fees
        </p>
        <span className="ml-4 text-gray-500">374 reviews</span>
        </div>       
      </div>
              {/* Details Section */}
              <div className="pb-4 ">
                <div className="mt-0">
                  <p className="text-gray-700 text-sm border-b border-gray-300 pb-2 hover:bg-gray-100">
                    <strong>Course:</strong> {university.course}
                  </p>
                  <p className="text-gray-700 text-sm border-b border-gray-300 pb-2 hover:bg-gray-100">
                    <strong>Fees:</strong> {university.fees}
                  </p>
                  <p className="text-gray-700 text-sm border-b border-gray-300 pb-2 hover:bg-gray-100">
                    <strong>Rating:</strong> {university.rating} ({university.reviews})
                  </p>
                  <p className="text-gray-700 text-sm border-b border-gray-300 pb-2 hover:bg-gray-100">
                    {university.location}
                  </p>
                </div>
                <div className="mt-4 flex justify-center ">
               
                  <button className="bg-primary text-white px-4 py-1 rounded-full shadow hover:bg-orange-600">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <MdArrowForwardIos
          onClick={() => scroll(1000)}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-3 rounded-full cursor-pointer shadow"
        />
      </div>
    </div>
  );  
};

export default UniversityCards;