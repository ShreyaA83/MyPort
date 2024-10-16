"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../../utils/utils";
import Link from "next/link";
import Image from "next/image";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn("fixed max-w-fit top-10 inset-x-0 mx-auto z-[5000]")}
      >
        {/* Gradient Border Wrapper with Spinning Effect */}
        <div className="relative inline-flex h-auto w-auto overflow-hidden rounded-full p-[2px]">
          <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
          
          {/* Inner Floating Nav */}
          <div
            className={cn(
              "relative flex max-w-fit rounded-full dark:bg-[#171928] bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] pr-7 pl-8 py-2 items-center justify-center space-x-4",
              className
            )}
          >
            <Link
              href="/books"
              className="h-auto w-auto flex flex-row items-center"
            >
              <Image
                src="/heroimg.png"
                alt="logo"
                width={50}
                height={50}
                className="cursor-pointer hover:animate-slowspin hover:-rotate-45"
              />
              <span className="font-bold ml-[7px] hidden md:block text-gray-300 hover:text-blue-50 hover:rotate-12 pr-20">
                Pandemonium
              </span>
            </Link>

            {navItems.map((navItem: any, idx: number) => (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                className={cn(
                  "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-[#9ebdcce1] hover:text-[#77e2a2dd]"
                )}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="hidden sm:block text-sm">{navItem.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
