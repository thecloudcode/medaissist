"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            HealthCare AI
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-row gap-3 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <Image
          src="/logo.png"
          alt="work icons"
          height={70}
          width={70}
        />
          <span className="mt-1">
            Med
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              AI
            </span>
            ssist
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 max-w-[600px]"
        >
          Connect patients to doctors, in the best way out!
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary flex items-center justify-center text-white cursor-pointer rounded-full max-w-[200px] font-bold"
        >
          <Image
            src="/mic.png"
            alt="microphone icon"
            height={20}
            width={20}
            className="mr-2"
          />
          <span>Speak</span>
        </motion.a>

      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        {/* <Image
          src="/logo.png"
          alt="work icons"
          height={70}
          width={70}
        /> */}
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;