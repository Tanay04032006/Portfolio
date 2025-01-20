"use client"; // Enable client-side rendering for Framer Motion animations
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaGithub, FaGitAlt,FaDatabase } from "react-icons/fa"; // Import icons for skills
import { SiC, SiCplusplus } from "react-icons/si"; // Import C and C++ icons
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision"; // Import background component

export default function AboutPage() {
  return (
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
  );
}
