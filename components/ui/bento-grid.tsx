"use client";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { BackgroundBeams } from "./background-beams";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import Button from "./Button";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("abhisarprincejha@gmail.com");
    setCopied(true);
    // Reset the "copied" state after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento shadow-input flex flex-col justify-between space-y-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className
      )}
      style={{
        background:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className="h-full">
        <div className="absolute inset-0">
          {img && (
            <img
              src={img}
              alt="grid image"
              className={cn(
                imgClassName,
                "object-cover object-center w-full h-full"
              )}
            />
          )}
        </div>
        <div
          className={cn(
            "absolute right-0 -bottom-5",
            id === 5 && "w-full opacity-80"
          )}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt="grid spare image"
              className={"object-cover object-center w-full h-full"}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation containerClassName="absolute z-5 items-center justify-center text-white font-bold inset-0 w-full h-full rounded-3xl" />
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10",
            // MODIFICATION: For id=3, use flex-row to layout text and tags side-by-side
            id === 3 && "flex-row justify-between items-start",
            id === 6 && "z-30" // Keep z-30 for the gradient animation text
          )}
        >
          {/* Text content wrapper */}
          <div className="flex flex-col">
            <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
              {description}
            </div>
            <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
              {title}
            </div>
          </div>
          
          {/* Tech stack tags for id=3 */}
          {id === 3 && (
            // MODIFICATION: Removed absolute positioning. This is now a flex item.
            <div className="flex gap-1 lg:gap-3 w-fit">
              <div className="flex flex-col gap-2 lg:gap-3">
                {["React.js", "Next.js", "Tailwind CSS", "MERN Stack"].map(
                  (item) => (
                    <span
                      key={item}
                      className="py-1.5 lg:py-2 lg:px-2 px-2 text-xs lg:text-sm opacity-50 lg:opacity-70 rounded-lg text-center bg-[#10132E] hover:opacity-100 transition duration-200 text-white border border-white/10"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
              <div className="flex flex-col gap-2 lg:gap-3">
                {["TypeScript", "AI integration", "Machine Learning", "AWS"].map(
                  (item) => (
                    <span
                      key={item}
                      className="py-1.5 lg:py-2 lg:px-2 px-2 text-xs lg:text-sm opacity-50 lg:opacity-70 rounded-lg text-center bg-[#10132E] hover:opacity-100 transition duration-200 text-white border border-white/10"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          )}
        </div>

        {id === 2 && (
          <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden">
            <BackgroundBeams />
          </div>
        )}

        {id === 6 && (
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50">
            <div className="absolute -bottom-5 right-0 z-50 pointer-events-none">
              {copied && (
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              )}
            </div>
            <Button
              title={copied ? "Email Copied" : "Copy Email"}
              icon={<IoCopyOutline />}
              position="left"
              otherClasses="!bg-[#161a31] hover:!bg-[#101220]"
              handleClick={handleCopy}
            />
          </div>
        )}
      </div>
    </div>
  );
};