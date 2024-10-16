"use client";
import React from 'react';
import { PinContainer } from '../ui/3d-pin';
import { TextGenerateEffect } from "../ui/text-generate-effect";
import Image from 'next/image';
import gitwhite from '../../../public/gitwhite.png';
import Linkedin from '../../../public/Linkedin.png';
import mail from '../../../public/Mail.png';
import Link from 'next/link';


const Contact = () => {
  return (
    <div id="connect">
    <div className="flex justify-center items-center pt-15">
      <h2
        className='gap-6 text-4xl sm:text-xl lg:text-6xl font-bold text-white max-w-[600px] w-auto h-auto z-[40]'>
        <Link href="/books" className="h-auto w-auto flex flex-row items-center ">
        <TextGenerateEffect words="Connect With Me"
        className='hover:rotate-3'
        />
        </Link>
      </h2>
    </div>
    <div className="h-auto w-full flex items-center justify-center p-4 pt-20 pb-20">
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
          {/* First Contact Card */}
          <PinContainer
            title="GitHub - CLICK ME"
            href="https://github.com/ShreyaA83"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                GitHub Profile
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500">ShreyaA83</span>
              </div>
              <div
                className="flex flex-1 w-full rounded-lg mt-4"
                style={{
                  backgroundImage: 'linear-gradient(to right bottom, #061f78, #173086, #264193, #34529f, #4363ab, #3168a9, #206da5, #1570a0, #006687, #005b6d, #004f54, #03423e)',
                }}
              >                {/* Display GitHub Image */}
                <Image
                  src={gitwhite}
                  alt="GitHub Logo"
                  width={180} // Set the desired width
                  height={180} // Set the desired height
                  className="m-auto" // Center the image
                />
              </div>
            </div>
          </PinContainer>
          <PinContainer
            title="LinkedIn - CLICK ME"
            href="https://www.linkedin.com/in/shreyaagarwal83/"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                LinkedIn
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500">Shreya Agarwal</span>
              </div>
              <div
                className="flex flex-1 w-full rounded-lg mt-4"
                style={{
                  backgroundImage: 'linear-gradient(to right bottom, #061f78, #173086, #264193, #34529f, #4363ab, #3168a9, #206da5, #1570a0, #006687, #005b6d, #004f54, #03423e)',
                }}
              >                {/* Optional Image for LinkedIn Card */}
                <Image
                  src={Linkedin}
                  alt="Linkedin Logo"
                  width={180} // Set the desired width
                  height={180} // Set the desired height
                  className="m-auto" // Center the image
                />
              </div>
            </div>
          </PinContainer>

          {/* Third Contact Card */}
          <PinContainer
            title="Email - CLICK ME"
            href="mailto:a.shreya0806@gmail.com"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                Email
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500">Write to me</span>
              </div>
              <div
                className="flex flex-1 w-full rounded-lg mt-4"
                style={{
                  backgroundImage: 'linear-gradient(to right bottom, #061f78, #173086, #264193, #34529f, #4363ab, #3168a9, #206da5, #1570a0, #006687, #005b6d, #004f54, #03423e)',
                }}
              >
                <Image
                  src={mail}
                  alt="Mail Logo"
                  width={180} // Set the desired width
                  height={180} // Set the desired height
                  className="m-auto" // Center the image
                />
              </div>
            </div>
          </PinContainer>
        </div>
      </div>
    </div>
  );
};

export default Contact;
