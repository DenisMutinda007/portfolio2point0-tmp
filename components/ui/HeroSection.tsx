"use client";

import { buttonVariants } from "@/components/ui/button";
// import ShinyButton from "@/components/ui/shiny-button";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import DenisMutungaMutinda from "@/public/images/Suit.png";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="min-h-screen border-b-8 border-foreground max-w-full overflow-hidden flex flex-col">
      <section id="hero" className="flex justify-center">
        <div className="top-content bg-background text-foreground flex flex-col-reverse md:flex-row md:items-center pb-2">
          <div className="left flex flex-col text-center space-y-4 md:space-y-10 md:w-1/2 md:relative md:pt-24 md:pl-16 px-3">
            <h1 className="text-4xl font-semibold pt-2">
              Turning Your Ideas into Reality
            </h1>
            <h2 className="text-3xl mt-2">
              Bettering the world one line of{" "}
              <span className="italic">&lt;Code/&gt;</span> at a time.
            </h2>

            <p className="text-xl my-2">
              Hey there 👋🏾, I am
              <span className="text-2xl font-semibold"> Denis Mutinda</span>. A
              full stack web and mobile app developer.
            </p>
            <p className="text-xl mb-5 ">
              I give wings to your ideas and you decide where to fly!🚀
            </p>

            <div className="md:pt-10">
              <Link
                href={"/contact"}
                className={` ${buttonVariants({
                  variant: "outline",
                  size: "lg",
                })}`}
              >
                Contact Me <EnvelopeOpenIcon />
                {/* <BorderBeam /> */}
              </Link>
            </div>
          </div>
          <div className="right flex justify-center p-2 md:w-1/2">
            <Image
              src={DenisMutungaMutinda}
              alt={"Denis Mutunga Mutinda"}
              className="cursor-pointer hover:shadow-outline rounded-full object-cover object-center h-96 w-96 md:relative"
              width={384}
              height={384}
              quality={100}
              placeholder="blur"
            />
          </div>
        </div>
      </section>
      {/* Technologies VelocityScroll Slider */}
      <div className="border-y-2 border-foreground p-4 inline mt-10 pt-4">
        <VelocityScroll
          text="Web Design | Dashboard | Notion Dashboard & Scripts | Wireframe | SEO & Digital Marketing | UI, UX & User Research | DevOps | Web Development || Mobile App Development | Robotics & Home Automation | Internet Of Things"
          default_velocity={0.2}
          className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
        />
        <p>Services Velocity Scroll</p>
      </div>
    </div>
  );
}
