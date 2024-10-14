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
                <a href="https://thebageleffect.com/" target="_blank"> The Bagel Effect{<FaLocationArrow color="#6ee7ff" className="hover:-scale-125" />}
                </a>      </p>
            <p className="font-semibold text-base text-white my-2">                NFT Minting SaaS
            </p>
            <p className="font-normal text-sm my-1 max-w-lg text-neutral-200">

                [Next.js, Solidity, Three.js, Openzeppelin]

            </p>
        </div>
    );
};

const SkeletonTwo = () => {
    return (
        <div>
            <p className="font-bold md:text-3xl text-xl text-[#defbff] hover:underline">
                <a href="https://healthboard.netlify.app/" target="_blank"> Nutrition Hub{<FaLocationArrow color="#6ee7ff" className="hover:-scale-125" />}
                </a>      </p>
            <p className="font-semibold text-base text-white my-2">Comprehensive nutrition data analysis platform</p>
            <p className="font-normal text-sm my-1 max-w-lg text-neutral-200">
                [Python (NumPy, Pandas, Scikit-learn), MongoDB, Express.js, React, Node.js, Chart.js, Redux]

            </p>
        </div>
    );
};
const SkeletonThree = () => {
    return (
        <div>
            <p className="font-bold md:text-3xl text-xl text-[#defbff] hover:underline">
                <a href="https://willowy-syrniki-2a338e.netlify.app/" target="_blank"> FoodFul{<FaLocationArrow color="#6ee7ff" className="hover:-scale-125" />}
                </a>      </p>
            <p className="font-semibold text-base text-white my-2">  Community-based leftover food sharing</p>
            <p className="font-normal text-sm my-1 max-w-lg text-neutral-200">
                [React, Flutter, Firebase, Three.js]

            </p>
        </div>
    );
};
const SkeletonFour = () => {
    return (
        <div>

            <p className="font-bold md:text-3xl text-xl text-[#defbff] hover:underline">

                <a href="https://bharatyuva.org/" target="_blank"> BharatYuva{<FaLocationArrow color="#6ee7ff" className="hover:-scale-125" />}
                </a>
            </p>
            <p className="font-semibold text-base text-white my-2"> Comprehensive event management website
            </p>
            <p className="font-normal text-sm my-1 max-w-lg text-neutral-200">

                [Joomla, PHP, MySQL, HTML, CSS, JS]

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
