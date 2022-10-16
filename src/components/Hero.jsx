import React from "react";
import hero from "../assets/images/hero.png";
import { Typewriter } from 'react-simple-typewriter'
const Hero = () => {
  const social_media = [
    "logo-linkedin",
    "logo-google",
    // / "logo-facebook",
    "git-branch",
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" style={{width:"400px"}} />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-3xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-rose-600 md:text-5xl text-4xl">
              Hello!
              <br />
            </span>
            My Name is <span>Saurabh Ubale</span> <br />
            <span>I'm a</span>
            <span style={{ color: '#e11d48',}}>
            <Typewriter cursorColor="#e11d48"
            words={[' Full Stack Developer .']}
            loop={5000000}
            cursor
            cursorStyle='|'
            typeSpeed={90}
            deleteSpeed={70}
            delaySpeed={2000}
            // onLoopDone={handleDone}
            // onType={handleType}
          />
          </span>
          </h1>
          {/* <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Fullstack Developer
          </h4> */}
          <button className="bg-rose-500 hover:bg-rose-700  py-3 px-4 rounded-full mt-8">Contact Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <ion-icon name={icon}></ion-icon>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
