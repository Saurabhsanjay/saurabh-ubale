import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/bewakoof-front.png";
import project2 from "../assets/images/project-2.jpg";
import project3 from "../assets/images/porject-3.png";
import project4 from "../assets/images/project-4.jpg";
import project5 from "../assets/images/project5.png";
// import project_person from "../assets/images/project_person1.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Bewakoof.com ",
      github_link: "https://github.com/Saurabhsanjay/Bewakoof.com",
      live_link: "https://subtle-strudel-c8db2e.netlify.app/",
    },
    {
      img: project2,
      name: "My-Glamm",
      github_link: "https://github.com/Saurabhsanjay/fearless-humor-9094",
      live_link: "https://myglammclone.vercel.app/",
    },
    {
      img: project3,
      name: "1Mg",
      github_link: "https://github.com/mohitbirla20/team_1mg",
      live_link: "https://fabulous-sorbet-67ec69.netlify.app/",
    },
    // {
    //   img: project4,
    //   name: "React Nav",
    //   github_link:
    //     "https://github.com/Sridhar-C-25/reacttailwindnavbar-with-dropdown",
    //   live_link: "https://reacttailwindnavbar.netlify.app",
    // },
    {
      img: project5,
      name: "HelloBrightLine",
      github_link: "https://github.com/sadhakvishu/material-road-6006",
      live_link: "https://vuecountry05.netlify.app",
    },
  ];
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section data-aos="zoom-in" id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-rose-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-3/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img
                    src={project_info.img}
                    alt=""
                    className="rounded-lg"
                  />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* <div className="lg:block hidden">
          <img src={project_person} alt="" />
        </div> */}
      </div>
    </section>
  );
};

export default Project;
