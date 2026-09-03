"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import ResumeModal from "./ResumeModal";
import { useMotionPreference } from "./MotionPreferenceProvider";

const HeroSection = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const { reduceMotion } = useMotionPreference();

  return (
    <section className="pb-16 sm:pb-8 lg:pb-16 lg:pt-6">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{""}
            </span>
            <br></br>
            {reduceMotion ? (
              <span className="whitespace-nowrap">Annabel Zhuang</span>
            ) : (
              <TypeAnimation
                sequence={[
                  "Annabel Zhuang",
                  1000,
                  "Data Analyst",
                  1000,
                  "BI Analyst",
                  1000,
                ]}
                wrapper="span"
                className="whitespace-nowrap"
                speed={50}
                repeat={Infinity}
              />
            )}
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Curious about people, fascinated by how things connect, and always <span className="whitespace-nowrap">learning along the way.</span>
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#contact"
              className="inline-block w-full sm:w-fit rounded-full border-2 border-primary-500 px-6 py-3 text-xl text-white hover:border-white hover:bg-white/5 cursor-pointer"
            >
              Contact Me
            </Link>
            <button
              onClick={() => setIsResumeModalOpen(true)}
              className="inline-block w-full sm:w-fit rounded-full border-2 border-primary-500 px-6 py-3 text-xl text-white hover:border-white hover:bg-white/5 cursor-pointer"
            >
              View Resume
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-20 sm:mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/meeee.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
      
      <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={() => setIsResumeModalOpen(false)} 
      />
    </section>
  );
};

export default HeroSection;
