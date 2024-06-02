import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const LeaderProfile = ({ name, role, bio, image, social }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <img className="w-32 h-32 rounded-full mx-auto" src={image} alt={name} />
      <h3 className="text-xl font-semibold text-center mt-4">{name}</h3>
      <p className="text-gray-600 text-center">{role}</p>
      <p className="text-gray-600 text-center mt-2">{bio}</p>
      <div className="flex justify-center mt-4 space-x-4">
        {social.linkedin && (
          <a href={social.linkedin} aria-label="LinkedIn">
            <FaLinkedin size={24} />
          </a>
        )}
        {social.twitter && (
          <a href={social.twitter} aria-label="Twitter">
            <FaTwitter size={24} />
          </a>
        )}
        {social.facebook && (
          <a href={social.facebook} aria-label="Facebook">
            <FaFacebook size={24} />
          </a>
        )}
        {social.instagram && (
          <a href={social.instagram} aria-label="Instagram">
            <FaInstagram size={24} />
          </a>
        )}
      </div>
    </div>
  );
};

export default LeaderProfile;
