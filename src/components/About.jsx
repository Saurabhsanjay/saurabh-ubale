import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import aboutImg from "../assets/images/about.gif";
const About = () => {
  
  const info = [
    { text: "Years experience", count: "04" },
    { text: "Completed Projects", count: "24" },
    { text: "Companies Work", count: "06" },
  ];
  useEffect(()=>{
    Aos.init({duration: 2000});
  },[])
  return (
    <section id="about" className="py-10 text-white">
      <div data-aos="zoom-in" className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-rose-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                A
                Passionate and Quick learner Full Stack Web Developer with 1200+
                hours hands-on coding experience and 1.5 years of work
                experience, building Web applications with JavaScript | Reactjs
                | Nodejs | MongoDb | Redux and some other cool libraries and
                frameworks.
              </p>
              {/* <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div> */}
              <br />
              <br />
              <a href="./src/assets/Saurabh_Ubale_Resume.pdf" download>
                <button className="bg-rose-500 hover:bg-rose-700  py-3 px-4 rounded-full">
                  Download CV
                </button>
              </a>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="flex-1 md:mt-0 mt-6 flex justify-center items-center"
          >
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                style={{ borderRadius: "10px" }}
                src={aboutImg}
                alt=""
                // className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
