import React from "react";
import Slider from "react-slick";
import Card from "./Card";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const NextArrow = ({ onClick }) => {
    return (
      <div
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-2   rounded-full cursor-pointer z-10 shadow-lg hover:bg-gray-800 transition-colors"
        onClick={onClick}
      >
         <ArrowForwardIcon style={{ color: 'white', fontSize: '24px' }} />
      </div>
    );
  };
  
  // Custom previous (left) arrow
  const PrevArrow = ({ onClick }) => {
    return (
      <div
       className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full cursor-pointer z-10"
        onClick={onClick}
      >
         <ArrowBackIcon style={{ color: 'white', fontSize: '24px' }} />
      
      </div>
    );
  };

const SliderComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of cards shown at once
    slidesToScroll: 2,
    swipe: true, // Make sure swipe is enabled
    nextArrow: <NextArrow />, // Use custom next arrow
    prevArrow: <PrevArrow />, // Use custom previous arrow

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:2 ,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const cardData = [
    { title: "Engineering", colleges: "6228 Colleges", courses: ["BE/B.Tech", "Diploma in Engineering", "ME/M.Tech"] },
    { title: "Medical", colleges: "534 Colleges", courses: ["MBBS", "BDS", "MD/MS"] },
    { title: "Business", colleges: "800 Colleges", courses: ["MBA", "BBA", "MCom"] },
    { title: "Engineering", colleges: "6228 Colleges", courses: ["BE/B.Tech", "Diploma in Engineering", "ME/M.Tech"] },
    { title: "Medical", colleges: "534 Colleges", courses: ["MBBS", "BDS", "MD/MS"] },
    { title: "Business", colleges: "800 Colleges", courses: ["MBA", "BBA", "MCom"] },
    // Add more card data here
  ];

  return (
    <div className="m-10 px-20">
      <h2 className="text-2xl font-semibold mb-8 underline ">Explore Courses</h2>
      <Slider {...settings}>
        {cardData.map((data, index) => (
          <Card key={index} title={data.title} colleges={data.colleges} courses={data.courses} />
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;