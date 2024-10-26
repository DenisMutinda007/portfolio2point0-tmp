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
    <div className="min-h-screen max-w-full overflow-hidden border-b-2 border-foreground">
      <section id="hero" className="flex flex-col justify-center">
        <div className="textAndImage flex justify-center">
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
                <span className="text-2xl font-semibold"> Denis Mutinda</span>.
                A full stack web and mobile app developer.
              </p>
              <p className="text-xl mb-5 ">
                I give wings to your ideas and you decide where to fly!🚀
              </p>

              <div className="md:pt-10">
                <Link
                  href={"/contact"}
                  className={`${buttonVariants({
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
        </div>
        {/* Technologies VelocityScroll Slider */}
        <div className="border-y-2 border-foreground inline mt-10 p-4">
          <VelocityScroll
            text={`Web & Mobile App Design 🤓 Web Development 🤓 Mobile App Development 🤓 E-Commerce 🤓 Wordpress 🤓 SEO & Digital Marketing 🤓 UI, UX & User Research 🤓 DevOps 🤓 Wireframing 🤓 Robotics & Home Automation 🤓 Internet Of Things 🤓 Dashboard 🤓 Notion Dashboard & Scripts`}
            default_velocity={0.2}
            className="font-display text-center text-3xl font-semibold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-3xl md:leading-[3rem]"
          />
        </div>
      </section>
      <div className="arrowDown">
        <div className="hidden md:relative md:flex md:justify-center md:items-center md:pt-5">
          <span className="w-[3px] h-[23px] bg-white rounded-md m-[6px] animate-move transform rotate-[-45deg]"></span>
          <span className="w-[3px] h-[23px] bg-white rounded-md m-[6px] animate-move transform rotate-[45deg]"></span>
        </div>
      </div>
    </div>
  );
  // bun create t3-app@latest
}
