import Typewriter from "typewriter-effect";
import React from "react";

const Hero = () => {
  return (
    <div className="text-white font-bold  mt-11">
      <div className="hero ">
        <p className="text-lg md:text-xl  leading-relaxed font-bold text-center w-[70%]">
          At MUTC, we envision a future where technology seamlessly integrates
          with urban living, creating smart cities that enhance the quality of
          life for all. Our mission is to drive innovation, foster
          collaboration, and inspire the next generation of tech leaders. We are
          committed to making cities more efficient, sustainable, and connected
          through cutting-edge research, development, and education.
        </p>

        <div className="text-center text-[#00df9a] ">
          <Typewriter
            options={{
              strings: [
                "Innovating Tomorrow Today",
                "Code. Innovate. Inspired.",
                "Where Imagination Meets Implementation",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
