import Head from "next/head";
import { Fade } from "react-awesome-reveal";
import ProjectBlock from "@/components/Project";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { SiPostman } from "react-icons/si";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col justify-between bg-[#333333] overflow-x-hidden scroll-smooth">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        />
      </Head>
      <nav
        id="custom-bg"
        className="custom-bg w-full max-w-screen-lg mx-auto rounded-b-4xl font-monospace p-2 fixed top-0 left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-white bg-[#2c2c2c] backdrop-opacity-70 z-50"
      >
        <div className="h-full w-1/5">
          <a href="#home">
            <p className="text-center font-bold text-lg md:text-base">
              Wojciech Stec
            </p>
          </a>
        </div>
        <div className="h-full flex-1 flex justify-between space-x-2">
          <a href="#about" className="w-1/3 ml-4">
            <p className="text-center text-lg md:text-base">About</p>
          </a>
          <a href="#projects" className="w-1/3">
            <p className="text-center text-lg md:text-base">Projects</p>
          </a>
          <a href="#contact" className="w-1/3 mr-4">
            <p className="text-center text-lg md:text-base">Contact</p>
          </a>
        </div>
        <div className="w-1/5 flex justify-center flex-col">
          <a>
            <p className="text-center text-lg md:text-base">PL</p>
          </a>
          <a>
            <p className="text-center text-lg md:text-base">EN</p>
          </a>
        </div>
      </nav>
      <main
        id="home"
        className="w-full custom-bg flex flex-col items-center justify-center"
      >
        <div className="w-full max-w-screen-lg min-h-screen flex flex-col items-center justify-center">
          <div className="w-full h-48 flex items-center">
            <div className="h-full w-6/10 flex items-end justify-center">
              <Fade direction="down" triggerOnce>
                <h1 className="text-white text-5xl font-bold sm:text-7xl md:text-8xl text-center font-serif">
                  Front-end
                </h1>
              </Fade>
            </div>
            <div className="h-full w-4/10 flex items-center justify-center">
              <Fade direction="right" triggerOnce delay={900}>
                <a href="#projects">
                  <button className="text-black bg-white px-15 py-3 md:px-20 md:py-4 rounded-4xl mr-8 hover:cursor-pointer">
                    Projects
                  </button>
                </a>
              </Fade>
            </div>
          </div>
          <div className="w-full h-48 flex items-center">
            <div className="h-full w-4/10 flex items-center justify-center">
              <Fade direction="left" triggerOnce delay={600}>
                <p className="text-white w-64 ml-30 font-serif">
                  My goal is to write maintainable, clean and understandable
                  code to process development was enjoyable.
                </p>
              </Fade>
            </div>
            <div className="h-full w-6/10 flex items-start justify-center">
              <Fade direction="up" triggerOnce delay={300}>
                <h1 className="text-white text-5xl sm:text-7xl md:text-8xl font-bold text-center font-serif">
                  Developer
                </h1>
              </Fade>
            </div>
          </div>
          <a href="#about" className="bounce-animation mt-16 h-8 w-8 rounded-full hover:cursor-pointer" >
              <img className="h-full text-2xl" src="arrow-down.svg" />
          </a>
        </div>
        <div
          id="about"
          className="w-full max-w-screen-lg min-h-screen flex flex-col items-center justify-center"
        >
          <div className="w-full h-48 flex items-center">
            <div className="h-full w-full flex items-center justify-center">
              <Fade direction="up" triggerOnce>
                <h1 className="text-white text-5xl sm:text-7xl md:text-8xl text-center font-mono">
                  About me
                </h1>
              </Fade>
            </div>
          </div>
          <div className="w-full h-128 flex items-center">
            <div className="h-full w-full flex items-center justify-start flex-col">
              <div className="w-2/4 h-2/4 flex align-center">
                <Fade direction="up" delay={200} triggerOnce>
                  <p className="text-white md:text-xl sm:text-base text-sm w-full font-mono">
                    I have been formally learning programming since 2022,
                    focusing on the latest technologies and trends in the field.
                    My goal is to stay up-to-date with emerging tools and
                    languages, and to continuously improve my skills in order to
                    build innovative and efficient solutions.
                  </p>
                </Fade>
              </div>
              <div className="w-2/4 h-64 flex md:text-xl sm:text-sm text-base align-center font-mono">
                <Fade direction="up" delay={600} triggerOnce>
                  <ul className="text-white mt-10 list-disc list-inside md:text-xl sm:text-base text-sm">
                    <li>front-end: html, css, js, tailwindcss, react</li>
                    <li>tools: postman, docker, git</li>
                    <li>back-end: node js, php, sql</li>
                    <li>os: linux, windows</li>
                  </ul>
                </Fade>
              </div>
              <Fade
                className="w-2/4 h-full flex align-center gap-1"
                direction="up"
                delay={800}
                triggerOnce
              >
                <div className="w-full h-full flex flex-wrap gap-4 text-white mt-8">
                  <FaHtml5 className="custom-svg" />
                  <FaCss3Alt className="custom-svg" />
                  <FaJs className="custom-svg" />
                  <FaReact className="custom-svg"/>
                  <FaGitAlt className="custom-svg" />
                  <SiPostman className="custom-svg" />
                  <RiTailwindCssFill className="custom-svg" />
                  <FaNodeJs className="custom-svg" />
                  <FaPhp className="custom-svg" />
                  <SiMysql className="custom-svg" />
                  <FaLinux className="custom-svg" />
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <div
          id="projects"
          className="w-full max-w-screen-lg min-h-screen flex flex-col items-center justify-center"
        >
          <div className="w-full h-48 flex items-center">
            <div className="h-full w-full flex items-center justify-center">
              <h1 className="text-white text-5xl sm:text-7xl md:text-8xl text-center font-monospace">
                Projects
              </h1>
            </div>
          </div>
          <div className="w-full h-160 flex items-center justify-start flex-col">
            <div className="h-full w-full flex items-center flex-col justify-start gap-4">
              <ProjectBlock
                title={"Eksabajt.pl"}
                date="02-04-2025"
                description="Organization website built with team of 5 people. Focused on freelace work and helping people in need."
                testLink="https://dev.eksabajt.pl"
                codeLink="https://github.com/eksabajt-pl/website"
              />
              <ProjectBlock
                title="Pokemon Api"
                date="20-03-2025"
                description="Project based on pokemon api, inspired me to make working pokemon game"
                testLink="https://w0jtases.github.io/pokemon/"
                codeLink="https://github.com/W0jtases/pokemon"
              />
            </div>
          </div>
        </div>
        <div className="w-full h-48 flex items-center">
          <div className="h-full w-full flex items-end justify-center">
            <h1 className="text-white text-5xl mb-8 text-center font-bold font-mono">
              Contact
            </h1>
          </div>
        </div>
        <div id="contact" className="w-full h-32 flex items-center">
          <div className="h-full w-full flex items-center justify-start gap-4 flex-col">
            <a
              target="_blank"
              className="h-8 flex justify-center items-center"
              href="https://github.com/W0jtases"
            >
              <p className="text-white mr-2 font-bold">W0jtases</p>
              <img src="github.svg" className="h-full" />
            </a>
            <a
              target="_blank"
              className="h-8 flex justify-center items-center"
              href="mailto:wjtases@gmail.com"
            >
              <p className="text-white mr-2 font-bold">wjtases@gmail.com</p>
              <img src="mail.svg" className="h-full" />
            </a>
          </div>
        </div>
      </main>
      <footer className="w-full bg-[#212121] text-white p-4 flex items-center justify-center relative">
        <div className="h-full w-1/3"></div>
        <div className="h-full w-1/3 flex items-center justify-center">
          <p>&copy; 2025 Wojciech Stec</p>
        </div>
        <div className="h-full w-1/3">
          <p className="text-xs absolute hidden sm:block top-10 right-1">
            inspired by robertplawski.pl
          </p>
        </div>
      </footer>
    </div>
  );
}
