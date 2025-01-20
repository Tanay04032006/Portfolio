"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaHackerrank } from "react-icons/fa"; // HackerRank Icon
import { SiCoursera } from "react-icons/si"; // Coursera Icon
import { SiUdemy } from "react-icons/si"; // Udemy Icon

export default function CertificationsPage() {
  return (
    <div className="pt-20 bg-skin-white min-h-screen">
      <motion.div
        className="container mx-auto py-16 px-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <h1 className="text-5xl font-extrabold mb-4 text-slate-900">Certifications</h1>
        <p className="text-lg leading-8 text-gray-600">
          Here you can explore my certified achievements from various platforms.
        </p>

        {/* Certificate Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {/* HackerRank CSS Certificate */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="border rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
          >
            <FaHackerrank className="text-5xl text-green-500 mb-4 mx-auto" />
            <h2 className="text-2xl font-semibold text-slate-800 mb-2">HackerRank CSS Certificate</h2>
            <p className="text-gray-600 mb-4">
              Achieved a certification in CSS from HackerRank.
            </p>
            <Link href="https://www.hackerrank.com/certificates/4d4321984d32">
              <span className="text-blue-600 hover:text-blue-800 transition-colors cursor-pointer">
                View Certificate
              </span>
            </Link>
          </motion.div>

          {/* HackerRank Frontend Developer Certificate */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="border rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
          >
            <FaHackerrank className="text-5xl text-green-500 mb-4 mx-auto" />
            <h2 className="text-2xl font-semibold text-slate-800 mb-2">HackerRank Frontend Developer Certificate</h2>
            <p className="text-gray-600 mb-4">
              Achieved a certification in Frontend Development from HackerRank.
            </p>
            <Link href="https://www.hackerrank.com/certificates/frontend-developer-link">
              <span className="text-blue-600 hover:text-blue-800 transition-colors cursor-pointer">
                View Certificate
              </span>
            </Link>
          </motion.div>

           {/* HackerRank Python Basic Certificate */}
           <motion.div
            whileHover={{ scale: 1.05 }}
            className="border rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
          >
            <FaHackerrank className="text-5xl text-green-500 mb-4 mx-auto" />
            <h2 className="text-2xl font-semibold text-slate-800 mb-2">HackerRank Python Basic Certificate</h2>
            <p className="text-gray-600 mb-4">
              Achieved a basic Python certification from HackerRank.
            </p>
            <Link href="https://www.hackerrank.com/certificates/python-basic-link">
              <span className="text-blue-600 hover:text-blue-800 transition-colors cursor-pointer">
                View Certificate
              </span>
            </Link>
          </motion.div>
          {/* HackerRank Problem Solving Basic Certificate */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="border rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
          >
            <FaHackerrank className="text-5xl text-green-500 mb-4 mx-auto" />
            <h2 className="text-2xl font-semibold text-slate-800 mb-2">HackerRank Problem Solving Basic Certificate</h2>
            <p className="text-gray-600 mb-4">
              Achieved a basic problem-solving certification from HackerRank.
            </p>
            <Link href="https://www.hackerrank.com/certificates/problem-solving-basic-link">
              <span className="text-blue-600 hover:text-blue-800 transition-colors cursor-pointer">
                View Certificate
              </span>
            </Link>
          </motion.div>

          {/* Coursera Google LINUX and SQL Certificate */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="border rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
          >
            <SiCoursera className="text-5xl text-blue-500 mb-4 mx-auto" />
            <h2 className="text-2xl font-semibold text-slate-800 mb-2">Coursera Google LINUX and SQL Certificate</h2>
            <p className="text-gray-600 mb-4">
              Achieved a certification in Google LINUX and SQL from Coursera.
            </p>
            <Link
              href="https://coursera.org/verify/68WXNYRB5HAM"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-blue-600 hover:text-blue-800 transition-colors cursor-pointer">
                View Certificate
              </span>
            </Link>
          </motion.div>

          
          {/* Coursera Machine Learning Course Certificate */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="border rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
          >
            <SiCoursera className="text-5xl text-blue-500 mb-4 mx-auto" />
            <h2 className="text-2xl font-semibold text-slate-800 mb-2">Coursera Machine Learning Course 1 Certificate</h2>
            <p className="text-gray-600 mb-4">
              Achieved a certification in Machine Learning from Coursera.
            </p>
            <Link href="https://coursera.org/verify/machine-learning-course-link">
              <span className="text-blue-600 hover:text-blue-800 transition-colors cursor-pointer">
                View Certificate
              </span>
            </Link>
          </motion.div>

          

          {/* Udemy Python Udemy Certificate */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="border rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
          >
            <SiUdemy className="text-5xl text-purple-500 mb-4 mx-auto" />
            <h2 className="text-2xl font-semibold text-slate-800 mb-2">Udemy Python Udemy Certificate</h2>
            <p className="text-gray-600 mb-4">
              Completed the Python Bootcamp from Udemy.
            </p>
            <Link href="https://www.udemy.com/certificate/UC-6c6c2d60-7c95-4f09-92b0-d98596bd3d17/">
              <span className="text-blue-600 hover:text-blue-800 transition-colors cursor-pointer">
                View Certificate
              </span>
            </Link>
          </motion.div>

         

          {/* Hacktivators Hackathon Certificate */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="border rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
          >
            
            <h2 className="text-2xl font-semibold text-slate-800 mb-2">Hacktivators Hackathon Certificate</h2>
            <p className="text-gray-600 mb-4">
              Participated in the Hacktivators Hackathon and received this certificate.
            </p>
            <Link href="https://hacktivators.com/certificates/hacktivators-link">
              <span className="text-blue-600 hover:text-blue-800 transition-colors cursor-pointer">
                View Certificate
              </span>
            </Link>
          </motion.div>
          {/* HTB Workshop Certificate */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="border rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
          >
            
            <h2 className="text-2xl font-semibold text-slate-800 mb-2">HTB Workshop Certificate</h2>
            <p className="text-gray-600 mb-4">
              Achieved a workshop certification from HTB.
            </p>
            <Link href="https://www.hackthebox.com/certificates/htb-link">
              <span className="text-blue-600 hover:text-blue-800 transition-colors cursor-pointer">
                View Certificate
              </span>
            </Link>
          </motion.div>

        </div>

        {/* Project Button */}
        <div className="py-5">
          <Link href="/certifications/projects">
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[5px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Click Here to see my projects!
              </span>
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
