"use client";
import React from "react";
import Image from "next/image";
import {Lato} from "next/font/local";


export const Pcard = ({ pName, pImage, pImageName,lor="left",pDesc }) => {
  
  

  return (
    
    <div className={`flex ${
      lor === "end" ? "flex-row-reverse" : ""
    } items-center my-7 `}>
      {/* Card Container */}
      <div
        className="
          
          
          h-64
          w-96
          bg-slate-800
          shadow-md
          rounded-xl
          flex
          justify-center
          items-center
          
        "
      >
        {/* Card Content */}
        <div className="flex flex-col justify-center items-center">
          {/* Project Name */}
          <h1
            className="
              text-white
              text-[1.8rem]
              font-bold
              
              text-center
              font-mono
          "
          >
            {pName}
          </h1>

          {/* Project Image */}
          <div className="mt-0 mb-2">
            <Image
              src={pImage}
              alt={pImageName}
              width={300}
              height={200}
              className="
              object-fit
              rounded-xl
              shadow-md
              border-2
              border-slate-500
              hover:shadow-xl
              transition
              duration-300
              ease-in-out
              transform
              hover:scale-105
              cursor-pointer
              hover:border-slate-900
          "
            />
          </div>
        </div>
        
      </div>
      
      <div
        className="
          text-[1rem]
            font-semibold
            text-center
            font-Lato
            w-[1200px]
            bg-slate-500
            h-64
            flex
            justify-center
            items-center
            rounded-xl
            p-10
            m-7
      "
      >
        {Array.isArray(pDesc) ? (
          <ol className="list-decimal list-inside text-left text-lg ">
            {pDesc.map((point, index) => (
              <li className="my-3" key={index}>{point}</li>
            ))}
          </ol>
        ) : (
          <p>{pDesc}</p>
        )}
      </div>
        
    </div>
  );
};
