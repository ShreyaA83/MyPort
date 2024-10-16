"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/16/solid";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import Chaos from "../main/Chaos";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 mt-8 lg:mt-10 w-full z-[20] space-y-4 lg:space-y-0"
    >
      {/* Left Section - Text Content */}
      <div className="h-full w-full flex flex-col gap-5 justify-center text-center lg:text-start">
        {/* Welcome Box */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-3 mt-5 px-6 border border-[#7042f88b] opacity-[0.9] flex items-center justify-center lg:justify-start"
        >
          <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5" />
          <h2 className="Welcome-text text-sm lg:text-[16px]">Shreya Agarwal</h2> 
        </motion.div>

        {/* Main Heading */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 mt-2 text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-full lg:max-w-[600px]"
        >
            <span >
           
              <TextGenerateEffect 
              words=" Developer. Analyst. Thinker." 
              
              />
            
            </span>
        </motion.div>

        {/* Subheading */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-2xl md:text-xl text-gray-400 my-2 max-w-full lg:max-w-[600px]"
        >
          Full Stack Software Developer & Data Scientist, with a penchant for all things space and data.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={slideInFromLeft(1.1)}
          className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 py-2"
        >
          <a
            href="https://drive.google.com/file/d/1mjG9d3Wagc2P9dvr2qP4o4IUorWFDcyH/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary text-center text-white cursor-pointer rounded-lg px-4 py-2 w-40"
          >
            Resume
          </a>
        </motion.div>
      </div>

      {/* Right Section - Image/Chaos Component */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        {/* Responsive Image Placeholder */}
        {/* <Image
          src="/heroimg.png"
          alt="work icons"
          height={650}
          width={600}
        /> */}
        <Chaos />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
