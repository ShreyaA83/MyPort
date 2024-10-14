"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/16/solid';
import { TextGenerateEffect } from '../ui/text-generate-effect';
import Chaos from '../main/Chaos';

const HeroContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-row items-center justify-center 
            px-20 mt-40 w-full z-[20]"
        >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
      <motion.div
                    variants={slideInFromTop}
                    className='Welcome-box py-[12px] px-[30px] border border-[#7042f88b] opacity-[0.9]'
                >
                    <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />

                    {/* <h1 className='Welcome-text text-[13px]'> Developer. Thinker. Analyst</h1> */}
                    <TextGenerateEffect
                        className='Welcome-text text-[13px]'
                        words='Developer. Analyst. Thinker.' />

                </motion.div>
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'>
                    <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project experience
          </span>

                </motion.div>
                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className='text-lg text-gray-400 my-5 max-w-[600px]'
                >
                    I am a Full Stack Software Developer & Data Scientist, 
                    
                    with a penchant for all things space and data.
      
                    </motion.p>
                    <motion.a
    href="https://drive.google.com/file/d/1mjG9d3Wagc2P9dvr2qP4o4IUorWFDcyH/view?usp=sharing" 
    target="_blank" // Optional: opens the link in a new tab
    variants={slideInFromLeft(1.1)}
    className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'
>
Know Me More!
  <div>[Resume]</div>
</motion.a>

            </div>
            <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        {/* <Image
          src="/heroimg.png"
          alt="work icons"
          height={650}
          width={600}
        /> */}
        <Chaos />
      </motion.div>
    </motion.div>


    )
}

export default HeroContent
