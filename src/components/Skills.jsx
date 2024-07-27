import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import chakra from '../assets/images/chakra-ui.svg'
import nextjs from "../assets/images/next-js.svg";
import tailwindcss from "../assets/images/tailwindcss.svg";

const Skills = () => {
  const skills = [
    {
      logo: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
      level: "HTML",
      count: 95,
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/240px-CSS3_logo.svg.png",
      level: "CSS",
      count: 90,
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png",
      level: "JavaScript",
      count: 80,
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
      level: "React JS",
      count: 80,
    },
    {
      logo: "https://repository-images.githubusercontent.com/347723622/92065800-865a-11eb-9626-dff3cb7fef55",
      level: "Redux",
      count: 60,
    },
    {
      logo: chakra,
      level: "Chakra UI",
      count: 90,
    },
    {
      logo: "https://twilio-cms-prod.s3.amazonaws.com/original_images/nodejs.png",
      level: "Node JS",
      count: 65,
    },
    
    {
      logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
      level: "Mongo DB",
      count: 70,
    },
    {
      logo: nextjs,
      level: "Next.js",
      count: 75,
    },
    {
      logo: "https://nestjs.com/img/logo-small.svg",
      level: "NestJS",
      count: 70,
    },
    {
      logo: "https://www.mysql.com/common/logos/logo-mysql-170x115.png",
      level: "MySQL",
      count: 70,
    },
    {
      logo: "https://material-ui.com/static/logo.png",
      level: "Material UI",
      count: 85,
    },
    {
      logo: tailwindcss,
      level: "Tailwind CSS",
      count: 80,
    },
    {
      logo: "https://seeklogo.com/images/P/postman-logo-F43375A2EB-seeklogo.com.png",
      level: "Postman",
      count: 90,
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1200px-Npm-logo.svg.png",
      level: "npm",
      count: 80,
    },
    {
      logo: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
      level: "GIT",
      count: 80,
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-rose-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div
          data-aos="zoom-in"
          className="flex items-center justify-center mt-12 gap-10 flex-wrap"
        >
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-4 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                  <img
                    width="70px"
                    src={skill.logo}
                    alt={`${skill.level} logo`}
                  />
                </div>
              </div>
              <p className="text-xl mt-3">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
