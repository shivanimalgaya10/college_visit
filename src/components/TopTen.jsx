import React, { useState } from 'react';
import { Button, Box, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import collegesData from '../api/collegesData.json'; // Adjust the path based on your project structure

const StateColleges = () => {
  const [selectedState, setSelectedState] = useState('Maharashtra');
  const scrollContainerRef = React.createRef();

  const handleStateClick = (state) => {
    setSelectedState(state);
  };

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -450, // Adjust the scroll amount as needed
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 450, // Adjust the scroll amount as needed
      behavior: 'smooth',
    });
  };

  return (
    <div className="px-20 py-10">
      <h1 className="text-2xl font-bold text-center mb-6">Top Colleges in India by State</h1>
      
      <Box display="flex" alignItems="center" justifyContent="center" mb={4}>
        <IconButton onClick={scrollLeft}>
          <ArrowBackIosIcon />
        </IconButton>

        <Box
          ref={scrollContainerRef}
          display="flex"
          overflow="hidden" // Ensures that only 8 states are visible at a time
          flexWrap="nowrap"
          width="700px" // Adjust width to control the number of visible states (8 states in this case)
          sx={{
            '&::-webkit-scrollbar': { display: 'none' },
            '-ms-overflow-style': 'none',
            scrollbarWidth: 'none',
          }}
        >
          {Object.keys(collegesData).map((state) => (
            <Button
              key={state}
              onClick={() => handleStateClick(state)}
              variant="outlined"
              sx={{
                
                borderRadius: '1000px',
                padding: '4px 10px',
                textTransform: 'none',
                whiteSpace: 'nowrap',
                margin: '0 8px',
                minWidth: 'auto', // Let the button width adjust based on content
                width: 'auto', // Ensure width adjusts dynamically based on content
                maxWidth: 'none', // Remove any fixed width constraint  
              }}
            >
              {state}
            </Button>
          ))}
        </Box>

        <IconButton onClick={scrollRight}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>


      {/* College List Table */}
      {selectedState && (
        <div className="overflow-x-auto">
          <h2 className="text-xl font-semibold text-center mb-4">{selectedState} - Top Colleges</h2>
          <table className=" min-w-full bg-white border border-green-200 ">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 bg-green-100">Rank</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 bg-green-100">Colleges</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 bg-green-100">Ranking</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 bg-green-100">Cutoff</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 bg-green-100">Application Deadline</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 bg-green-100">Fees</th>
              </tr>
            </thead>
            <tbody>
              {collegesData[selectedState].map((college, index) => (
                <tr key={index} className="border-b  hover:bg-green-100">
                  <td className="px-6 py-4  text-left text-sm text-gray-900">{college.rank}</td>
                  <td className="px-6 py-4  text-left text-sm text-gray-900">{college.college}</td>
                  <td className="px-6 py-4   text-left text-sm text-gray-900">{college.ranking}</td>
                  <td className="px-6 py-4  text-left text-sm text-gray-900">{college.cutoff}</td>
                  <td className="px-6 py-4  text-left text-sm text-gray-900">{college.applicationDeadline}</td>
                  <td className="px-6 py-4  text-left text-sm text-gray-900">{college.fees}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StateColleges;
