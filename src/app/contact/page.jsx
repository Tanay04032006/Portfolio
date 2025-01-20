"use client";

import { FloatingDock } from "../components/ui/Dock";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"; // Import social icons

export default function ContactPage() {
  const items = [
    { title: "LinkedIn", href: "https://www.linkedin.com/in/tanay-gupta-8ab736296/", icon: <FaLinkedin className="text-blue-600 hover:text-blue-800 transition duration-300" /> },
    { title: "GitHub", href: "https://github.com/tanay04032006", icon: <FaGithub className="text-gray-600 hover:text-gray-800 transition duration-300" /> },
    { title: "Instagram", href: "https://www.instagram.com/iam.tanayy", icon: <FaInstagram className="text-pink-600 hover:text-pink-800 transition duration-300" /> },
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-white to-gray-100 flex flex-col items-center">
      <motion.div
        className="container mx-auto py-16 px-4 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mb-4 font-poppins text-gray-800">Contact Me</h1>
        <p className="text-lg leading-7 text-gray-600 mb-6 max-w-xl mx-auto">
          Feel free to reach out to me through the contact form below or connect with me on social media.
        </p>
        
        {/* Catchy Line with animation */}
        <motion.p
          className="text-xl font-semibold text-gray-700 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Let’s connect and turn your ideas into reality—your next great conversation starts here!
        </motion.p>
      </motion.div>

      {/* Social Icons with hover effect */}
      <motion.div
        className="flex justify-center gap-6 mb-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <FloatingDock items={items} desktopClassName="your-desktop-class" mobileClassName="your-mobile-class" />
      </motion.div>

      {/* Contact Form Section with animations */}
      <motion.div
        className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full transition-transform duration-300 ease-in-out transform hover:scale-105"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Get in Touch</h2>

        {/* Contact Details */}
        <div className="text-gray-700 mb-6">
          <p>Email: <a href="mailto:tg7803@srmist.edu.in" className="text-blue-600 hover:underline">tg7803@srmist.edu.in</a></p>
          <p>Phone: <a href="tel:+919560841383" className="text-blue-600 hover:underline">+91 9560841383</a></p>
        </div>

        {/* Contact Form */}
        <form className="flex flex-col space-y-4">
          <motion.input
            type="text"
            placeholder="Your Name"
            className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200 ease-in-out"
            required
            whileFocus={{ scale: 1.05 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.input
            type="email"
            placeholder="Your Email"
            className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200 ease-in-out"
            required
            whileFocus={{ scale: 1.05 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          />
          <motion.textarea
            rows="4"
            placeholder="Your Message"
            className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200 ease-in-out"
            required
            whileFocus={{ scale: 1.05 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          />
          <motion.button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-300"
            whileHover={{ scale: 1.05, backgroundColor: "#3b82f6" }} // Slightly darker blue on hover
            whileTap={{ scale: 0.95 }} // Slightly smaller when clicked
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
