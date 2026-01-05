"use client";
import React from "react";
import { CanvasRevealEffect } from "./ui/canvas-reveal-effect";
import { AnimatePresence, motion } from "motion/react";

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading text-3xl font-sans flex justify-center">
        My Approach to problem<span className="text-purple-800 ml-1 mr-1">solving</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
        <Card
          title="Phase 1: Analysis & Discovery"
          icon={<AceternityIcon order="Phase 1" />}
          description="I start by diving deep into the requirements, breaking down complex problems into manageable tasks, and defining a clear path for execution to ensure a solid foundation."
        >
          <CanvasRevealEffect
            animationSpeed={2.5} // Further slowed down
            containerClassName="bg-black"
            colors={[[57, 59, 178]]} // Deep Blue
          />
        </Card>
        <Card
          title="Phase 2: Agile Development & Iteration"
          icon={<AceternityIcon order="Phase 2" />}
          description="I thrive in an agile environment, building features with clean, efficient code. I prioritize iterative development and regular feedback to ensure the project stays on track and aligns with technical goals."
        >
          <CanvasRevealEffect
            animationSpeed={2.5} // Further slowed down
            containerClassName="bg-black"
            colors={[
              [203, 172, 249], // Main Theme Purple
            ]}
            dotSize={1.5}
          />
        </Card>
        <Card
          title="Phase 3: Testing & Deployment"
          icon={<AceternityIcon order="Phase 3" />}
          description="My process includes rigorous testing to ensure performance and reliability. I'm experienced in modern deployment workflows, delivering polished, production-ready code that solves real-world problems."
        >
          <CanvasRevealEffect
            animationSpeed={2.5} // Further slowed down
            containerClassName="bg-black"
            colors={[[226, 203, 255]]} // Lighter Purple/White
          />
        </Card>
      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-[30rem]"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center">
          {title}
        </h2>
        <p className="dark:text-white text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center" style={{color:'#e4ecff'}}>
          {description}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2  font-bold text-white backdrop-blur-3xl text-2xl">
           {order}
        </span>
        </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};