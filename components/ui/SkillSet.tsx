"use client";

import Image from "next/image";
// import { useTheme } from "next-themes";
// import { MagicCard } from "@/components/ui/magic-card";
// import { motion } from "framer-motion";

function SkillSet() {
  // const { theme } = useTheme();
  return (
    // <motion.div
    //     initial={{ opacity: 0 }}
    //     animate={{ opacity: 1 }}
    //     transition={{ duration: 0.5 }}
    //     className="border-8 border-red-500"
    //   ></motion.div>
    <div
      id="toolsNSkills"
      className="flex flex-col items-center bg-foreground text-background p-5 md:pt-24"
    >
      <div className="intro pb-5 text-center space-y-5">
        <h1 className="text-4xl font-bold underline">Skillset</h1>
        <p className="text-xl w-11/12 mx-auto">
          By adhering strictly to the principle of&nbsp;
          <span className="italic underline">Iterative Development</span> you
          are assured that not only will I deliver in time but I will also
          deliver the best possible solution.
        </p>
      </div>
      {/* Magic Cards */}
      {/* <div
        className={
          "w-full flex flex-col md:flex-row gap-4 mb-5"
        }
      >
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <p className="text-xl font-bold underline">
            Full-stack Web Development
          </p>
          <div className="flex items-center justify-center">
            <Image
              src={"/images/WebDevelopment.png"}
              alt={"Client Image"}
              width={250}
              height={250}
            />
            <p className="">
              By adhering strictly to the principle of&nbsp;
              <span className="italic underline">
                Iterative Development
              </span>{" "}
              you are assured that not only will I deliver in time but I will
              also deliver the best possible solution.
            </p>
          </div>
        </MagicCard>
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          001
        </MagicCard>
      </div> */}

      {/* GitHub Button */}
      <div className="pt-5 flex align-center justify-center md:left-1/2">
        <a
          href="https://github.com/DenisWritesCode/"
          target="_blank"
          className="flex align-center justify-center text-xl text-gray-800 bg-gray-100 font-semibold rounded-2xl p-3"
        >
          Github{" "}
          <svg
            className="w-6 h-6 ml-2"
            role="img"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>GitHub icon</title>
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        </a>
      </div>
      {/* Skill Cards */}
      <div className="skills-wrapper w-full h-fit flex flex-col md:flex-row mx-auto md:space-x-5 md:items-end">
        <div className="skill pt-3 md:w-1/3 md:h-full">
          <div className="skill-contents text-foreground bg-background flex flex-col items-center px-5 relative">
            <Image
              src={"/images/WebDevelopment.png"}
              alt={"Client Image"}
              width={350}
              height={350}
            />
            <div className="p-6 shadow-2xl mx-auto flex-col flex rounded-t-lg">
              <h2 className="mx-auto text-2xl text-gray-800 pt-14 pb-1 font-semibold uppercase tracking-wider">
                Web Development
              </h2>
              <p className="text-lg">
                For world leading user experiences on the web, be it via mobile or desktop screen, I promise to deliver the best possible solution.
              </p>
              <div className="stack">
                <h3 className="mt-2 mb-1 text-xl font-semibold text-center">
                  Web Technologies Used
                </h3>
                <p>
                  HTML, CSS, Tailwind CSS, Bootstrap, Vanilla Javascript, React, Angular, Next.js, Next UI, ShadcnUI, Framer-motion, NodeJS & Rust
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="skill pt-3 md:w-1/3 md:h-full">
          <div className="skill-contents text-foreground bg-background flex flex-col items-center px-5  relative">
            <Image
              src={"/images/CryptoMobile.png"}
              alt={"Client Image"}
              width={350}
              height={350}
            />
            <div className=" p-6 shadow-2xl mx-auto flex-col flex rounded-t-lg">
              <h2 className="mx-auto text-2xl text-gray-800 pt-14 pb-1 font-semibold uppercase tracking-wider">
                Mobile Development
              </h2>
              <p className="text-lg">
                Be it writing native code for a single codebase or even
                cross-platform mobile development, you can rest assured that
                Denis has got you.
              </p>
              <div className="stack">
                <h3 className="mt-2 mb-1 text-xl font-semibold text-center">
                  Technologies Used
                </h3>
                <p>
                  <span className="font-semibold text-lg">
                    Cross-Platform -{" "}
                  </span>{" "}
                  Flutter & React-Native.
                </p>
                <p>
                  <span className="font-semibold text-lg">Native - </span>
                  Kotlin & Java.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="skill pt-3 md:w-1/3">
          <div className="skill-contents text-foreground bg-background flex flex-col items-center px-5  relative">
            <Image
              src={"/images/Robotics.png"}
              alt={"Client Image"}
              width={350}
              height={350}
            />
            <div className=" p-6 shadow-2xl mx-auto flex-col flex rounded-b-lg">
              <h2 className="mx-auto text-2xl pt-14 pb-1 font-semibold uppercase tracking-wider">
                Robotics & Automation
              </h2>
              <p className="text-lg">
                With the experience of representing Kenya in the 2019 FIRST
                Global Robotics competition, you know that all your automation
                needs will be solved with impeccable quality and in record times
                as well.
              </p>
              <div className="stack">
                <h3 className="mt-2 mb-1 text-xl font-semibold text-center">
                  Platforms Used
                </h3>
                <p>
                  <span className="font-semibold text-lg">Automation - </span>
                  Arduino & other Microcontrollers, Raspberry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillSet;
