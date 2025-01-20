"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import { TypewriterEffectSmooth } from "./components/ui/typewriter-effect";
import { BackgroundBeamsWithCollision } from "./components/ui/background-beams-with-collision";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaGithub, FaGitAlt,FaDatabase } from "react-icons/fa"; // Import icons for skills
import { SiC, SiCplusplus } from "react-icons/si"; // Import C and C++ icons

export default function Home() {
  const words = [
    { text: "Hi, I am" },
    { text: " Tanay.", className: "text-blue-500 dark:text-blue-500" },
  ];

  return (
    <div>
    <BackgroundBeamsWithCollision className="min-h-screen flex items-center justify-center mt-[19px]">
      <div className="flex flex-col items-center text-center">
        
        {/* Animated profile picture */}
        <motion.div
          className="relative w-40 h-40 rounded-full overflow-hidden shadow-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src="/tanay.jpg"
            alt="Tanay Gupta"
            layout="fill"
            objectFit="cover"
            priority // Ensures faster load
          />
        </motion.div>

        {/* Typewriter effect for name */}
        <TypewriterEffectSmooth words={words} />

        {/* Role */}
        <motion.p
          className="text-xl mt-2 text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeInOut" }}
        >
          Full Stack Developer!
        </motion.p>

        {/* Stats Section */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between bg-gray-100 dark:bg-gray-800 p-5 rounded-lg shadow-lg mt-5 w-full max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeInOut" }}
        >
          <div className="flex flex-col w-full sm:w-1/3">
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 flex items-center mb-3">
              <SiLeetcode className="text-[#FFA539] text-xl mr-2" />
              LeetCode Stats:
            </p>
            <ul className="ml-5 text-gray-600 dark:text-gray-400 space-y-1">
              <li>
                <span className="font-medium">Rank:</span> 2,066,586
              </li>
              <li>
                <span className="font-medium">Problems Solved:</span> 35
              </li>
              <li>
                <span className="font-medium">Easy:</span> 14, <span className="font-medium">Medium:</span> 20, <span className="font-medium">Hard:</span> 1
              </li>
            </ul>
          </div>

          <div className="flex flex-col w-full sm:w-1/3 mt-5 sm:mt-0">
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 flex items-center mb-3">
              <SiHackerrank className="text-green-500 text-xl mr-2" />
              HackerRank Badges:
            </p>
            <ul className="ml-5 text-gray-600 dark:text-gray-400 space-y-1">
              <li>
                <span className="font-medium">Problem Solving:</span> 4 stars
              </li>
              <li>
                <span className="font-medium">C++:</span> 5 stars
              </li>
            </ul>
          </div>

          <div className="flex flex-col w-full sm:w-1/3 mt-5 sm:mt-0">
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 flex items-center mb-3">
              <span className="text-orange-500 text-xl mr-2">👨‍💻</span>
              CodeChef Stats:
            </p>
            <ul className="ml-5 text-gray-600 dark:text-gray-400 space-y-2">
              <li className="font-medium">Skill Tests</li>
              <li>
                <span className="font-medium">Java Online Test & Quiz</span> 
              </li>
              <li>
                <span className="font-medium">Data Structures and Algorithms in C Test</span>
              </li>
              <li>
                <span className="font-medium">Operating Systems Skill Test</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Social icons with staggered animation */}
        <motion.div
          className="flex gap-5 mt-5"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          <motion.a
            href="https://www.linkedin.com/in/tanay-gupta-8ab736296/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-3xl text-blue-500 hover:text-blue-700 transition duration-300" />
          </motion.a>
          <motion.a
            href="https://github.com/tanay04032006"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            aria-label="GitHub"
          >
            <FaGithub className="text-3xl text-gray-500 hover:text-gray-800 transition duration-300" />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/iam.tanayy"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            aria-label="Instagram"
          >
            <FaInstagram className="text-3xl text-pink-500 hover:text-pink-700 transition duration-300" />
          </motion.a>
          <motion.a
            href="https://leetcode.com/u/Tanay_Gupta18/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            aria-label="LeetCode"
          >
            <SiLeetcode className="text-3xl text-[#FFA539] hover:text-[#FF8C00] transition duration-300" />
          </motion.a>
          <motion.a
            href="https://www.hackerrank.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            aria-label="HackerRank"
          >
            <SiHackerrank className="text-3xl text-green-500 hover:text-green-700 transition duration-300" />
          </motion.a>
        </motion.div>

        {/* Resume Download Button */}
        <motion.div
          className="mt-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3, ease: "easeInOut" }}
        >
          <a
            href="/Resume_TanayGupta.pdf" // Make sure to place your resume file in the public folder
            download="TanayGupta_CV.pdf" // Suggested file name
            className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block"
          >
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
              <span>Download Resume</span>
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 12h6m-3-3l3 3-3 3m-4 7H6a2 2 0 01-2-2V4a2 2 0 012-2h10m0 16v4l4-4-4-4"
                />
              </svg>
            </div>
          </a>
        </motion.div>
      </div>
      
      
    </BackgroundBeamsWithCollision>
    <div className="min-h-screen flex flex-col items-center mt-20">
            <motion.div
              className="container mx-auto py-16 px-4 text-center flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              {/* About Header */}
              <h1 className="text-4xl font-bold mb-6 text-gray-800 transition-transform transform hover:scale-105 font-poppins">
                About Me
              </h1>
      
              <p className="text-lg leading-7 text-gray-600 mb-10 max-w-3xl mx-auto">
                I am a full-stack software developer pursuing a degree in Computer Science and Engineering from SRMIST KTR.
                With a passion for building interactive and user-friendly web applications, I am experienced in a variety of languages and frameworks. 
                I enjoy solving problems and continually pushing myself to learn new technologies and frameworks.
              </p>
      
              {/* Skills Section */}
              <div className="space-y-12">
                <h2 className="text-3xl font-semibold mb-6 text-gray-800 transition-transform transform hover:scale-105 font-roboto">
                  Skills & Technologies
                </h2>
      
                <div className="flex flex-wrap justify-center gap-10">
                  {/* Skill Card Components */}
                  <div className="flex flex-col items-center space-y-2 hover:scale-110 transition duration-300 ease-in-out">
                    <FaHtml5 className="text-orange-500 text-5xl transition-transform transform hover:scale-125" />
                    <span className="text-sm font-medium">HTML</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2 hover:scale-110 transition duration-300 ease-in-out">
                    <FaCss3Alt className="text-blue-500 text-5xl transition-transform transform hover:scale-125" />
                    <span className="text-sm font-medium">CSS</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2 hover:scale-110 transition duration-300 ease-in-out">
                    <FaJs className="text-yellow-500 text-5xl transition-transform transform hover:scale-125" />
                    <span className="text-sm font-medium">JavaScript</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2 hover:scale-110 transition duration-300 ease-in-out">
                    <FaReact className="text-blue-400 text-5xl transition-transform transform hover:scale-125" />
                    <span className="text-sm font-medium">React</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2 hover:scale-110 transition duration-300 ease-in-out">
                    <FaNodeJs className="text-green-500 text-5xl transition-transform transform hover:scale-125" />
                    <span className="text-sm font-medium">Node.js</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2 hover:scale-110 transition duration-300 ease-in-out">
                    <FaPython className="text-blue-600 text-5xl transition-transform transform hover:scale-125" />
                    <span className="text-sm font-medium">Python</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2 hover:scale-110 transition duration-300 ease-in-out">
                    <FaJava className="text-red-500 text-5xl transition-transform transform hover:scale-125" />
                    <span className="text-sm font-medium">Java</span>
                  </div>
                  {/* New Skills */}
                  <div className="flex flex-col items-center space-y-2 hover:scale-110 transition duration-300 ease-in-out">
                    <SiC className="text-blue-700 text-5xl transition-transform transform hover:scale-125" />
                    <span className="text-sm font-medium">C</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2 hover:scale-110 transition duration-300 ease-in-out">
                    <SiCplusplus className="text-blue-600 text-5xl transition-transform transform hover:scale-125" />
                    <span className="text-sm font-medium">C++</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2 hover:scale-110 transition duration-300 ease-in-out">
                    <span className="text-gray-800 text-5xl transition-transform transform hover:scale-125">📚</span>
                    <span className="text-sm font-medium">DSA and <div>Problem Solving</div></span>
                  </div>
                  {/* Existing Skills Continued */}
                  <div className="flex flex-col items-center space-y-2 hover:scale-110 transition duration-300 ease-in-out">
                    <FaGithub className="text-black text-5xl transition-transform transform hover:scale-125" />
                    <span className="text-sm font-medium">GitHub</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2 hover:scale-110 transition duration-300 ease-in-out">
                    <FaGitAlt className="text-orange-600 text-5xl transition-transform transform hover:scale-125" />
                    <span className="text-sm font-medium">Git</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2 hover:scale-110 transition duration-300 ease-in-out">
            <FaDatabase className="text-orange-400 text-5xl transition-transform transform hover:scale-125" /> {/* Database icon for SQL */}
            <span className="text-sm font-medium">SQL</span>
          </div>
                </div>
              </div>
      
              {/* Education Timeline Section */}
              <div className="mt-16 space-y-12">
                <h2 className="text-3xl font-semibold mb-6 text-gray-800 transition-transform transform hover:scale-105">
                  Education Timeline
                </h2>
                <div className="border-l-2 border-gray-300 pl-6 space-y-6">
                <div className="relative bg-gradient-to-r from-blue-100 to-transparent p-4 rounded-md shadow-md flex justify-between items-center">
            <div className="flex flex-col">
              <div className="absolute -left-4 top-1 bg-blue-500 p-2 rounded-full"></div>
              <h3 className="font-semibold text-lg text-blue-700">2023 - Present</h3>
              <p className="text-gray-600">Pursuing Bachelor's in Computer Science and Engineering from SRMIST KTR.</p>
              <p className="text-gray-600">Specializing in Full Stack Development, Data Structures, and Algorithms.</p>
      
              {/* Semester-wise CGPA */}
              <div className="mt-4 space-y-2 text-left">
                <h4 className="font-semibold text-md text-gray-700">Semester-wise CGPA:</h4>
                <ul className="text-gray-600 text-sm">
                  <li>Semester 1: 9.81</li>
                  <li>Semester 2: 9.90</li>
                  
                  {/* Add more semesters as needed */}
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-gray-600 text-lg">Overall CGPA: 9.86/10</p>
            </div>
          </div>
      
                  <div className="relative bg-gradient-to-r from-green-100 to-transparent p-4 rounded-md shadow-md flex justify-between items-center">
                    <div className="flex flex-col">
                      <div className="absolute -left-4 top-1 bg-green-500 p-2 rounded-full"></div>
                      <h3 className="font-semibold text-lg text-green-700">2023</h3>
                      <p className="text-gray-600">Completed Senior Secondary Education from Vivekanand School</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className="text-gray-600 text-lg">Percentage: 87%</p>
                    </div>
                  </div>
      
                  <div className="relative bg-gradient-to-r from-green-100 to-transparent p-4 rounded-md shadow-md flex justify-between items-center">
                    <div className="flex flex-col">
                      <div className="absolute -left-4 top-1 bg-green-500 p-2 rounded-full"></div>
                      <h3 className="font-semibold text-lg text-green-700">2021</h3>
                      <p className="text-gray-600">Completed Higher Secondary Education from Vivekanand School</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className="text-gray-600 text-lg">Percentage: 93%</p>
                    </div>
                  </div>
                </div>
              </div>
      
              {/* Hobbies or Interests Section */}
              <div className="mt-16 space-y-12">
                <h2 className="text-3xl font-semibold mb-6 text-gray-800 transition-transform transform hover:scale-105">
                  Hobbies & Interests
                </h2>
                <p className="text-gray-600 leading-7 max-w-2xl mx-auto">
                  Beyond coding, I have a passion for photography and love capturing the beauty of everyday moments. I also enjoy exploring new technologies, experimenting with creative projects, and staying updated with the latest trends in web development and design. And I am an avid reader!
                </p>
              </div>
            </motion.div>
          </div>
    </div>
    
    
  );
}
