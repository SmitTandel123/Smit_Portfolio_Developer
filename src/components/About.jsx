import React from "react";
import { Link } from "react-router-dom";
import bg from "../images/bg.png";
import "./About.css";
import Typed from "typed.js";
import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    const typed = new Typed("#typed-element", {
      strings: ["Web developer", "Data Scientist", "MERN stack developer"],
      typeSpeed: 50,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div>
      {" "}
      <section id="about" className="py-20 bg-gray-900 text-gray-400">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-10">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              <div>
              Hi, I'm Smit.
              <br className="hidden lg:inline-block" />I am a passionate
              </div>
              <span id="typed-element"></span>
            </h1>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
              Laborum, voluptas natus?
            </p>
            <div className="flex justify-center md:justify-start">
              <a
                href="/Resume-smit-backend.pdf" download
                className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg download"
              >
                Download resume
              </a>
              <Link
                to={"/projects"}
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg project-btn"
              >
                Projects
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded size-5/6 pt-9 mb-3"
              alt="hero"
              src={bg}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
