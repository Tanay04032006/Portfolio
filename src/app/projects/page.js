"use client";

import React from "react";

import { Pcard } from "../components/ui/Pcard";
import chess from "../assets/Images/chess.jpg";
import expenze from "../assets/Images/Expenze.jpg";
// import ex from "../assets/Images/ex.jpg";
import ex from "../assets/Images/expense.jpg";

export default function ProjectsPage() {
  return (
    <>
      <div className="
        bg-gradient-to-b
        from-slate-900
        
        h-[100vh]
        w-screen
        pt-[150px] 
      ">
        <h1
          className="
        text-center
        text-4xl
        font-bold
        text-white
        "
        >
          <span className="text-4xl font-bold text-white">Projects</span>
        </h1>

        <div className="mx-10 flex justify-left">
          <div className="mt-10 w-full ">
          <Pcard
  pName={"Chess.js"}
  pImage={chess}
  pImageName={"chess.jpg"}
  pDesc={[
    "Explore the world of chess with my interactive chess website, powered by the chess.js library!",
    "Designed for players of all levels, the platform offers a seamless and engaging experience to play and analyze games.",
    "Sharpen your skills or enjoy a casual match with ease.",
    "A perfect chess companion for enthusiasts and learners alike.",
    "Dive in and make your move!"
  ]}
/>

            
            <Pcard pName={"Expenze"} pImage={ex} pImageName={"expenze.jpg"} lor="end" pDesc={[
    "A simple Expense Tracker app built using the MERN stack (MongoDB, Express.js, React, Node.js).",
    "Track your daily expenses and stay on top of your budget with ease.",
    "Add, view, and delete expenses with a user-friendly interface.",
    "Keep track of your spending habits and monitor your financial health.",
    "Perfect for anyone looking to manage their personal finances more effectively."
  ]} />
          </div>
        </div>
      </div>
    </>
  );
}
