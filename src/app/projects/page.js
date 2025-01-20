"use client";
import { Card } from "@/app/components/ui/project-card";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectsPage() {
  // Array of projects with unique names, descriptions, and links
  const projects = [
    {
      name: "HackMatch",
      description: "A hackathon platform that helps you find the perfect teammates. Filter profiles by skills and interests, connect through real-time chat, and easily form teams to collaborate on innovative projects.",
      link: "https://github.com/Tanay04032006/HackMatch",
    },
    {
      name: "Markdown Previewer",
      description: "A simple markdown previewer that instantly converts markdown syntax into formatted text. Write markdown on one side, and see a live preview on the other, making it easy to create and edit content in real time.",
      link: "https://github.com/Tanay04032006/Markdown-Previewer",
    },
    {
      name: "Fusion",
      description: "An e-commerce platform built using Java, Maven, MySQL, Thymeleaf, and Spring Boot. Fusion offers a seamless shopping experience with features like user authentication, a product catalog, and an integrated shopping cart.",
      link: "https://github.com/username/fusion",
    },
    
      {
        name: "Jarvis",
        description: "Jarvis is a personal assistant inspired by Iron Man's Jarvis, built using Java, Maven, MySQL, Thymeleaf, and Spring Boot. It offers features like task management, voice commands, and smart notifications to enhance productivity.",
        link: "https://github.com/username/fusion",
      },
      {
        name: "Portfolio Website",
        description: "This Portfolio Website showcases my projects and skills as a software developer. Built with React, Next.js, and Tailwind CSS, it features an interactive user interface and is fully responsive, ensuring a great experience across devices.",
        link: "https://github.com/username/portfolio",
      },
    
    
  ];

  return (
    <div className="pt-20">
      <motion.div
        className="container mx-auto py-16 px-4 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <h1 className="text-4xl font-bold mb-6">Projects</h1>
        <p className="text-lg leading-7 text-gray-600 mb-8">
          Browse through the projects I've worked on.
        </p>

        {/* Project List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Map over projects array to render each project */}
          {projects.map((project, index) => (
            <Link
              href={project.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                className="shadow-lg rounded-lg p-6 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full flex justify-center items-center">
                  <Card
                    projectName={project.name}
                    description={project.description}
                  />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
