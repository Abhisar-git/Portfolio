import React from "react";
import { Projects } from "@/data/index";
import { PinContainer } from "./ui/3d-pin";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="flex flex-wrap items-center justify-center gap-x-2 text-4xl">
        A small selection of my{" "}
        <span className="text-purple-800"> recent Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-4 gap-y-20 mt-10">
        {Projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="lg:min-h-[32.5rem] h-[28rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={title} href={link}>
              {/* Main container for card content */}
              <div className="relative flex flex-col justify-between sm:w-[26rem] w-[80vw] h-[32.5rem] p-4 lg:rounded-3xl bg-[#13162d]">
                {/* Image container */}
                <div className="relative w-full h-[15rem] overflow-hidden rounded-xl">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text content container */}
                <div className="flex flex-col mt-4">
                  <h1 className=" lg:text-2xl md:text-xl text-base line-clamp-1">
                    {title}
                  </h1>

                  <p className="lg:text-sm lg:font-sans font-light text-sm line-clamp-2 text-purple-200 mt-2">
                    {des}
                  </p>

                  <div className="flex items-center justify-between mt-7 mb-3">
                    <div className="flex items-center">
                      {iconLists.map((icon, index) => (
                        <div
                          key={index}
                          className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index * 2}px)`,
                          }}
                        >
                          <img
                            src={icon}
                            alt={`icon-${index}`}
                            className="p-2"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-center items-center">
                      <p className="flex lg:text-xl md:text-xs text-lg text-purple-400">
                        Check Live Website
                      </p>
                      {/* Arrow icon goes here */}
                    </div>
                  </div>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
