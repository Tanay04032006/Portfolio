"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import { TypewriterEffectSmooth } from "./components/ui/typewriter-effect";
import { BackgroundBeamsWithCollision } from "./components/ui/background-beams-with-collision";

export default function Home() {
  const words = [
    { text: "Hi, I am" },
    { text: " Tanay.", className: "text-blue-500 dark:text-blue-500" },
  ];

  return (
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
  );
}
