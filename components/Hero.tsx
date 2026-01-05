import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Button from "./ui/Button";
import Link from "next/link";
import { Vortex } from "./ui/vortex";
import { SiReaddotcv } from "react-icons/si";
const Hero = () => {
  return (
    // The main container is now simplified to ensure full screen coverage
    <div className="w-full h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        // These props make the vortex effect more subtle and less distracting
        particleCount={500}
        baseHue={0} // A deeper blue/purple hue to match a tech theme
        baseSpeed={0.5}
        rangeSpeed={0.6}
        className="flex items-center flex-col justify-center px-4 py-4 w-full h-full"
      >
        {/* This div adds the subtle radial gradient behind the text for readability */}
        <div className="absolute inset-0 bg-black/40 bg-[radial-gradient(ellipse_at_center,transparent_10%,black)] -z-0" />

        {/* All content is now inside a relative z-10 container to sit above the vortex and gradient */}
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            
            {/* The drop-shadow effect makes the text assertive and readable */}
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-300 max-w-80 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
              Exploring the Frontiers of Tech
            </h2>

            {/* Added a drop-shadow class to the parent of TextGenerateEffect */}
            <div className="[text-shadow:_0_3px_0_rgb(0_0_0_/_40%)]">
                <TextGenerateEffect
                    className="text-center text-[40px] md:text-5xl lg:text-6xl"
                    words="Hi, I am Abhisar Prince Jha"
                />
            </div>
            
            <p className="text-center mt-6 text-gray-300 max-w-lg md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
              An aspiring Software Engineer passionate about AI, Machine
              Learning, Full Stack Development and building what&apos;s next.
            </p>
            
            <Link href="https://drive.google.com/file/d/1-0pBwmPd3lEzYv0a-pJSw7AptqOBDhiG/view?usp=drive_link">
              <Button title="See My Resume"/> 

            </Link>
            
          </div>
        </div>
      </Vortex>
    </div>
  );
};

export default Hero;