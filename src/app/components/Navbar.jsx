"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "../../lib/utils";
import { FaHome } from "react-icons/fa";         // Font Awesome Home icon
import { FaUserAlt } from "react-icons/fa";      // Font Awesome User (About)
import { GiDiploma } from "react-icons/gi";      // Game Icons for Certifications
import { MdContactMail } from "react-icons/md";  // Material Design Contact Mail icon

const Navbar = ({ className }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);  // Start with the navbar visible
  const [prevScrollY, setPrevScrollY] = useState(0);  // Track previous scroll position

  useMotionValueEvent(scrollYProgress, "change", () => {
    const currentScrollY = window.scrollY;

    // Check if the user is scrolling up or down
    if (currentScrollY > prevScrollY) {
      // Scrolling down
      setVisible(false);
    } else if (currentScrollY < prevScrollY) {
      // Scrolling up
      setVisible(true);
    }

    // Update previous scroll position
    setPrevScrollY(currentScrollY);
  });

  // navItems array with icons and colors
  const navItems = [
    { name: "Home", link: "/", icon: <FaHome size={20} color="#FFB3BA" /> },  // Light Coral
    { name: "About", link: "/about", icon: <FaUserAlt size={20} color="#FFDFBA" /> }, // Peach
    { name: "Certifications", link: "/certifications", icon: <GiDiploma size={20} color="#BAFFC9" /> }, // Mint Green
    { name: "Contact", link: "/contact", icon: <MdContactMail size={20} color="#BAE1FF" /> }, // Light Sky Blue
  ];
  
  
  
  
  
  
  

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{
            y: visible ? 0 : -100,  // Slide in/out
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className={cn(
            "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 shadow-lg z-[9999] pr-2 pl-8 py-2 items-center justify-center space-x-4",
            className
          )}
        >
          {navItems.map((navItem, idx) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-white flex items-center space-x-2 text-white rounded-full hover:bg-gray-600 px-3 py-2 transition ease-in-out duration-300",
                "hover:text-gray-300 active:text-gray-500",
                "border border-transparent"
              )}
            >
              {/* Render icon and conditional text */}
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:flex items-center">{navItem.icon}<span className="ml-2 text-sm font-semibold">{navItem.name}</span></span>
            </Link>
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Navbar;
