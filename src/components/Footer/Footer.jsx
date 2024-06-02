import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold mb-4">About MUTC</h3>
            <p className="text-gray-400 mb-4 text-center md:text-left">
              The MUTC club is dedicated to fostering technological learning and
              innovation among its members. We aim to create a collaborative
              environment where ideas can flourish and technology can thrive.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-400 hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-400 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-400 hover:text-white">
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-white">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <ul className="text-gray-400 space-y-2">
              <li>
                <span className="block">
                  Email:{" "}
                  <a
                    href="mailto:info@mutcclub.com"
                    className="hover:text-white">
                    info@mutcclub.com
                  </a>
                </span>
              </li>
              <li>
                <span className="block">
                  Phone:{" "}
                  <a href="tel:+1234567890" className="hover:text-white">
                    +1 234 567 890
                  </a>
                </span>
              </li>
              <li>
                <span className="block">
                  Address: 123 MUTC Street, Tech City, TC 12345
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} MUTC Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
