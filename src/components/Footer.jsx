import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-md p-4 text-center text-white">
      <Typewriter cursorColor="#e11d48"
            words={['    Made with ❤️ By Saurabh  ']}
            loop={5000000}
            cursor
            cursorStyle='|'
            typeSpeed={90}
            deleteSpeed={70}
            delaySpeed={2000}
            // onLoopDone={handleDone}
            // onType={handleType}
          />
    </div>
  );
};

export default Footer;
