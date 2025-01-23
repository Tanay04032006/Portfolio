"use client";
import { Card } from "@/app/components/ui/project-card";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";

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
      <CardContainer className="inter-var ">
      <CardBody className="bg-slate-500 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border flex flex-col justify-center items-center">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white dark:text-white"
        >
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <CardItem
          translateZ="100"
          // rotateX={}
          // rotateZ={-10}
          className="w-full mt-4 items-center justify-center flex"
        >
          <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          {/* <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem> */}
          <CardItem
            translateZ={20}
            // translateX={40}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
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
