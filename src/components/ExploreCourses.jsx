import React from "react";
import { Button, Box } from '@mui/material';

const ExploreCourses=()=>{
    const courseOptions = ['Bachelors', 'Masters', 'Doctorate', 'Diploma', 'Certification'];

    const handleCourseClick=(course)=>{
      alert(`You clicked on ${course}`);;
     };
     
    
    return (
        <div className="text-left py-10 px-20">
            <h2  className="text-2xl font bold  mb-4">Explore Courses</h2>
            <div className="flex  gap-4 flex-wrap">
               {courseOptions.map((course)=>(
                <Button
                key={course}
                onClick={()=>handleCourseClick(course)}
                variant="outlined"
                className="rounded-full px-4 py-2 text-gray-700 border-gray-400 hover:bg-gray-200"
                sx={{
                    textTransform:'none',
                    minWidth:'auto',
                    width:'auto',
                    maxWidth:'none'
                }}>
                    {course}
                </Button>
               ))}

            </div>
        </div>
    )
}
export default ExploreCourses;