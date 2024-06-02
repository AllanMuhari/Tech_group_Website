import React from "react";

const Track = ({ title, description }) => {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg mb-8">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default Track;
