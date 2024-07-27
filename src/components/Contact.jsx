import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  const contact_info = [
    { logo: "mail", text: "Saurabhubale371@gmail.com" },
    { logo: "logo-whatsapp", text: "8 6 6 8 7 2 7 1 5 1" },
    {
      logo: "location",
      text: "Akola,Maharashtra",
    },
  ];
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  return (
    <section data-aos="zoom-in" id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-rose-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form className="flex flex-col flex-1 gap-5">
            <input type="text" placeholder="Your Name" />
            <input type="Email" placeholder="Your Email Address" />
            <textarea placeholder="Your Message" rows={10}></textarea>
            <button className="bg-rose-500 hover:bg-rose-700  py-3 px-4 rounded-full w-fit">Send Message</button>
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-rose-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
