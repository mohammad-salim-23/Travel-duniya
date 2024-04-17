/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
const SingleVisits = ({ state }) => {
  
  const { id, image, description, location, place_name } = state;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      style={{
        border: isHovered ? '2px solid red' : 'none', // Apply border if hovered
        // Add any other inline styles you need here
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
     <div className="hero min-h-screen"
       
        style={{
          backgroundImage:`url(${image})`,
        }}
     >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{place_name}</h1>
            <h2 className="text-3xl text-green-500 font-bold">{location}</h2>
            <p className="mb-5">{description}</p>
            {/* Additional content here */}
          <Link to={`/Tour/${id}`}>  <button className="btn bg-purple-600">View Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleVisits;
