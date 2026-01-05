"use client";
import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./ui/Button";
import { SparklesCore } from "./ui/sparkles";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 bg-black relative overflow-hidden" id="contact">
      {/* Background Sparkles & Mask Layer */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticles"
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={400}
          className="w-full h-full"
          particleColor="#A78BFA"
        />
        
        {/* THE CHANGE: Increased the radius from 400px_200px to 600px_300px */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(600px_300px_at_top,transparent_20%,black)]"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center">
        <h1 className = "font-bold text-xl ">
            Liked what you saw ? 
        </h1>
        {/* The divider at the top */}
        <div className="w-full max-w-2xl h-10 relative">
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-40 top-0 bg-gradient-to-r from-transparent via-violet-400 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-40 top-0 bg-gradient-to-r from-transparent via-violet-400 to-transparent h-px w-1/4" />
        </div>

        {/* Content appears below the divider */}
        <p className="text-white-200 text-center mt-10">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:abhisarprincejha@gmail.com" className="my-5">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>

        <div className="mt-16 flex flex-col items-center gap-y-4">
          <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((profile) => (
              <a
                key={profile.id}
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                  <img
                    src={profile.img}
                    alt={`social-icon-${profile.id}`}
                    width={20}
                    height={20}
                  />
                </div>
              </a>
            ))}
          </div>
          <p className="md:text-base text-sm md:font-normal font-light text-slate-400">
            Copyright © {new Date().getFullYear()} Abhisar Prince Jha
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;