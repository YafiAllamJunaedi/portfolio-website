import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Square from "./components/Square.jsx";
import Project from "./components/Project.jsx";
import grahaLogo from '/assets/grahakarya_logo.png';
import main from '/assets/main.jpg';
import aiPicture from '/assets/foto_gemini.png';
import project1 from '/assets/shoes_commerce.png';
import project2 from '/assets/gym.png';
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaAsymmetrik } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 600, // (milisecond)
      offset: 120, // seberapa jauh sebelum elemen masuk viewport
    });
  }, []);
  const [open, setOpen] = useState(false);
  return (
    <div className="max-w-full min-h-screen overflow-x-hidden">
      <div className="w-full bg-white text-black px-5 py-4 flex items-center justify-between relative">
        <FaAsymmetrik className="size-9 text-black" />

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            <li
              className="cursor-pointer font-semibold relative group"
              onClick={() =>
                document
                  .getElementById("intro")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Intro
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li
              className="cursor-pointer font-semibold relative group"
              onClick={() =>
                document
                  .getElementById("skills")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Skills
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li
              className="cursor-pointer font-semibold relative group"
              onClick={() =>
                document
                  .getElementById("experience")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Experience
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li
              className="cursor-pointer font-semibold relative group"
              onClick={() =>
                document
                  .getElementById("aboutMe")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              About Me
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li
              className="cursor-pointer font-semibold relative group"
              onClick={() =>
                document
                  .getElementById("recentProjects")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Latest Projects
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>

          <button
            className="font-[Roboto] bg-black text-white text-sm py-1.5 px-3 flex items-center rounded-sm gap-2 cursor-pointer"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1zaNozxVrWnPhjF_UfMX-CTZHx3ztiHx4/view?usp=sharing",
                "_blank"
              )
            }
          >
            CV
            <MdOutlineFileDownload className="size-4" />
          </button>
        </div>

        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </button>

        {open && (
          <div className="absolute top-16 left-0 w-full bg-black/90 flex flex-col items-center gap-6 py-6 md:hidden">
            <ul className="flex flex-col gap-6">
              <li
                className="cursor-pointer text-white font-[Roboto]"
                onClick={() =>
                  document
                    .getElementById("intro")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Intro
              </li>
              <li
                className="cursor-pointer text-white font-[Roboto]"
                onClick={() =>
                  document
                    .getElementById("aboutMe")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                About Me
              </li>
              <li
                className="cursor-pointer text-white font-[Roboto]"
                onClick={() =>
                  document
                    .getElementById("skills")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Skills
              </li>
              <li
                className="cursor-pointer text-white font-[Roboto]"
                onClick={() =>
                  document
                    .getElementById("recentProjects")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Latest Projects
              </li>
            </ul>

            <button
              className="font-[Roboto] bg-black text-white text-sm py-1.5 px-3 flex items-center rounded-sm gap-2 cursor-pointer"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1zaNozxVrWnPhjF_UfMX-CTZHx3ztiHx4/view?usp=sharing",
                  "_blank"
                )
              }
            >
              CV
              <MdOutlineFileDownload className="size-4" />
            </button>
          </div>
        )}
      </div>

      {/* Intro section */}
      <div className="w-full h-full md:flex" id="intro">
        <div className="flex flex-col md:flex-row w-full h-full md:pt-10">
          {/* Gambar */}
          <div className="order-1 md:order-2 w-full md:w-2/4 h-full flex justify-center items-center">
            <img
              src={main}
              alt="Allam"
              className="w-3/4 md:w-4/5 rounded-lg"
            />
          </div>

          {/* Text */}
          <div className="order-2 md:order-1 w-full md:w-2/4 h-full flex md:justify-start items-center">
            <div className="w-5/5 flex flex-col mt-4 items-center md:pt-28 md:pb-40">
              <p className="font-[Roboto] text-4xl md:text-5xl">
                <span>Hello I'am </span>
                <span className="font-[Roboto] font-semibold">Allam</span>.
              </p>
              <p className="text-4xl md:text-5xl">
                <span>A </span>
                <span className="font-[Roboto] font-semibold">
                  Web Developer
                </span>
              </p>
              <p className="text-4xl md:text-5xl">
                Based in
                <span className="font-semibold font-[Roboto]"> Indonesia.</span>
              </p>
              <p className="text-neutral-500 text-sm md:text-base text-center p-8">
                I recently graduated from Letris Indonesia 2 Vocational High
                School, majoring in Software Engineering, and currently
                continuing my education at Pembangunan Jaya University, majoring
                in Informatics.
              </p>
              <div className="w-2/6 h-12 md:w-2/12 md:h-10 grid grid-cols-2 gap-5 justify-center">
                <Square
                  Icon={FaLinkedin}
                  iconSize={18}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/yafiallamjunaedi/",
                      "_blank"
                    )
                  }
                />
                <Square
                  width="12"
                  height="12"
                  Icon={FaGithub}
                  iconSize={18}
                  onClick={() =>
                    window.open(
                      "https://github.com/YafiAllamJunaedi/",
                      "_blank"
                    )
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills section */}
      <div
        className="w-full min-h-[350px] mt-32 md:mt-0 pb-10 md:pb-0"
        id="skills"
      >
        <p className="text-center text-4xl">
          My <span className="font-[Roboto] font-semibold">Skills</span>
        </p>
        <div className="w-full h-[500px] md:h-[200px] flex justify-center mt-10">
          <div className="w-5/5 md:w-4/5 h-5/5 md:h-4/5 grid grid-cols-2 md:grid-cols-5 gap-10 p-5">
            <Square
              Icon={IoLogoJavascript}
              iconSize={50}
              text="Javascript"
              aos="zoom-in"
              aosDelay="50"
            />
            <Square
              Icon={FaReact}
              iconSize={50}
              text="React JS"
              aos="zoom-in"
              aosDelay="100"
            />
            <Square
              Icon={RiTailwindCssFill}
              iconSize={50}
              text="Tailwind CSS"
              aos="zoom-in"
              aosDelay="150"
            />
            <Square
              Icon={FaGitAlt}
              iconSize={50}
              text="Git"
              aos="zoom-in"
              aosDelay="200"
            />
            <Square
              Icon={SiExpress}
              iconSize={50}
              text="Express JS"
              aos="zoom-in"
              aosDelay="250"
            />
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="w-full bg-black py-13 pb-15" id="experience">
        <p className="text-center text-4xl text-white">
          My <span className="font-[Roboto] font-semibold">Experience</span>
        </p>

        <div className="w-full flex flex-col items-center px-5 mt-10">
          <div
            className="w-full md:w-4/5 border border-white rounded-md p-5 hover:bg-neutral-800 hover:border-neutral-800 cursor-pointer"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <div className="flex items-center gap-3">
                <img
                  className="w-16 h-auto object-contain"
                  src={grahaLogo}
                  alt="Graha Karya Logo"
                />
                <p className="text-white font-semibold text-lg font-[Roboto]">
                  Front End Developer at PT Graha Karya Informasi
                </p>
              </div>
              <p className="text-white font-[Roboto] text-sm">
                Januari 2024 - Maret 2024
              </p>
            </div>

            {/* Description */}
            <p className="text-neutral-300 mt-6 md:mt-3 leading-relaxed">
              During my internship at PT Graha Karya Informasi, I worked on
              several projects such as creating a page for customers to rate the
              company's services, participating in the development of the
              company's employee leave system, and several other pages.
            </p>
          </div>
        </div>
      </div>

      {/* About me Section */}
      <div className="w-full min-h-[590px] flex items-center" id="aboutMe">
        <div className="w-full h-full flex flex-col md:flex-row gap-y-5 md:gap-x-10">
          <div className="w-full md:w-2/4 h-full flex justify-center md:justify-end items-center pt-10 md:pt-0">
            <img
              className="w-3/5 h-4/5 border-2 border-black"
              src={aiPicture}
              alt="About Me"
            />
          </div>

          <div className="w-full p-5 md:w-1/4 h-full flex flex-col justify-center text-center md:text-left md:p-0">
            <p className="text-2xl font-[Roboto]">
              About <span className="font-semibold">Me</span>
            </p>
            <p
              className="text-sm md:text-base text-neutral-500 mt-5"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              I'm a passionate person who specialize in front-end development
              (React JS). I am very enthusiastic about bringing the technical
              and visual aspects of digital products to life. User experience
              and perfect design are so matters to me.
            </p>
            <p
              className="text-sm md:text-base text-neutral-500 mt-5"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              The first time I learned about programming was in junior high
              school, but at that time I wasn't serious about studying
              programming. Then I continued to study programming more seriously
              in vocational high school, majoring in software engineering.
            </p>
          </div>
        </div>
      </div>

      {/* Latest Projects */}
      <div
        className="w-full min-h-[900px] bg-black px-5 py-14"
        id="recentProjects"
      >
        <p className="text-2xl text-white font-[Roboto] text-center">
          Latest <span className="font-bold">Projects</span>
        </p>

        <div className="w-full pt-10 flex flex-col gap-y-24 items-center">
          <Project
            image={project1}
            number="01"
            title="Shoes E-Commerce"
            description="This application allows users to purchase shoes, and the data will be forwarded to the admin dashboard so that the admin can monitor transactions, shoe stock, and other information. But it doesn't use a payment gateway yet."
            aos="fade-right"
            aosDelay="100"
            anchor="top-bottom"
          />

          <section className="w-full overflow-hidden">
            <Project
              image={project2}
              number="02"
              title="Gym Management"
              description="An application that allows gym managers to easily manage their gym business, from managing rooms, members, trainers, and sessions."
              reverse
              aos="fade-left"
              aosDelay="200"
              className="border border-white"
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
