"use client";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import { FaGithub } from "react-icons/fa";

// Dynamically import motion components to disable server-side rendering
const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), {
  ssr: false,
});

export function Card({ projectName, description }) {
  return (
    <div className="w-full max-w-sm min-w-[250px] h-auto group/card">
      <MotionDiv
        className={cn(
          "relative card h-96 rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 group-hover:scale-105",
          "bg-[url(https://images.unsplash.com/photo-1545486332-9e0999c535b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJsYWNrfGVufDB8fDB8fHww)] bg-cover"
        )}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-black/90 transition-opacity duration-300 group-hover:from-gray-800/20 group-hover:via-gray-900/70"></div>

        {/* Top section: GitHub Icon aligned with centered Project Name */}
        <div className="flex flex-col items-center absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
          <a
            href="#"
            className="text-2xl text-gray-300 hover:text-gray-100 transition duration-300 transform hover:scale-110"
            aria-label="GitHub Link"
          >
            <FaGithub />
          </a>
          <p className="font-bold text-4xl text-teal-400 drop-shadow-md text-center">
            {projectName}
          </p>
        </div>

        {/* Centered Description */}
        <div className="flex flex-col justify-center items-center h-full z-10 px-8 text-center">
          <p className="text-gray-300 text-sm leading-relaxed tracking-wide mt-24">
            {description}
          </p>
        </div>
      </MotionDiv>
    </div>
  );
}
