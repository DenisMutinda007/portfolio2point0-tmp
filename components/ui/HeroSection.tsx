"use client";

import Link from "next/link";
import Image from "next/image";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "@/components/ui/button";
import DenisMutungaMutinda from "@/public/images/Suit.png";
import { BorderBeam } from "@/components/ui/border-beam.tsx";

export default function HeroSection() {
  return (
    <div className="min-h-screen flex justify-center border-b-2 border-foreground">
      <section id="hero">
        <div className="top-content bg-background text-foreground flex flex-col-reverse md:flex-row md:items-center pb-2">
          <div className="left flex flex-col text-center mt-2 space-y-4 md:space-y-10 md:w-1/2 md:relative md:pt-44 md:pl-16 px-3">
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
              <Link href={"/contact"} className={`relative ${buttonVariants({ variant: "default", size: "lg"})}`}>Contact Me <EnvelopeOpenIcon /><BorderBeam /></Link>
            </div>
          </div>
          <div className="right flex justify-center p-2 md:w-1/2">
            <Image
              src={DenisMutungaMutinda}
              alt={"Denis Mutunga Mutinda"}
              className="cursor-pointer hover:shadow-outline rounded-full object-cover object-center h-96 w-96 md:relative md:top-20"
              width={384}
              height={384}
              quality={100}
              placeholder="blur"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
