"use client";
import React from "react";
import { LayoutGrid } from "../ui/layout-grid";
import { FaLocationArrow } from "react-icons/fa6";

// Import your images
import byoImage from '../../../public/byo.png';
import ffImage from '../../../public/ff.png';
import tbeImage from '../../../public/tbe.png';
import nhImage from '../../../public/nh.png';
import { TextGenerateEffect } from "../ui/text-generate-effect";

export function Projects() {
    return (
        <div id="projects" className="h-screen py-10 w-full">
            <div className="flex justify-center items-center">
            <TextGenerateEffect
                        className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white-400 max-w-[600px] w-auto h-auto  z-400'
                        words='Projects' />
            </div>
            <LayoutGrid cards={cards} />
        </div>
    );
}

const SkeletonOne = () => {
    return (
        <div>
            <p className="font-bold md:text-3xl text-xl text-[#defbff] hover:underline">
                <a href="https://thebageleffect.com/" target="_blank"> The Bagel Effect{<FaLocationArrow color="#6ee7ff" />}
                </a>      </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                A house by the river is a place of peace and tranquility. It&apos;s the
                perfect place to relax, unwind, and enjoy life.
            </p>
        </div>
    );
};

const SkeletonTwo = () => {
    return (
        <div>
            <p className="font-bold md:text-3xl text-xl text-[#defbff] hover:underline">
                <a href="https://healthboard.netlify.app/" target="_blank"> Nutrition Hub{<FaLocationArrow color="#6ee7ff" />}
                </a>      </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                Perched high above the world, this house offers breathtaking views and a
                unique living experience. It&apos;s a place where the sky meets home,
                and tranquility is a way of life.
            </p>
        </div>
    );
};
const SkeletonThree = () => {
    return (
        <div>
            <p className="font-bold md:text-3xl text-xl text-[#defbff] hover:underline">
                <a href="https://willowy-syrniki-2a338e.netlify.app/" target="_blank"> FoodFul{<FaLocationArrow color="#6ee7ff" />}
                </a>      </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
                perfect place to relax, unwind, and enjoy life.
            </p>
        </div>
    );
};
const SkeletonFour = () => {
    return (
        <div>

            <p className="font-bold md:text-3xl text-xl text-[#defbff] hover:underline">
                
                <a href="https://bharatyuva.org/" target="_blank"> BharatYuva{<FaLocationArrow color="#6ee7ff" />}
                </a>
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                A serene and tranquil retreat, this house in the woods offers a peaceful
                escape from the hustle and bustle of city life.
            </p>
        </div>
    );
};

const cards = [
    {
        id: 1,
        content: <SkeletonOne />,
        className: "md:col-span-2",
        thumbnail: tbeImage.src, 
    },
    {
        id: 2,
        content: <SkeletonTwo />,
        className: "col-span-1",
        thumbnail: nhImage.src,
    },
    {
        id: 3,
        content: <SkeletonThree />,
        className: "col-span-1",
        thumbnail: ffImage.src,
    },
    {
        id: 4,
        content: <SkeletonFour />,
        className: "md:col-span-2",
        thumbnail: byoImage.src,
    },
];
