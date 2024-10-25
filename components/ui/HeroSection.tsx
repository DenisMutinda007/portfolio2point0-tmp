"use client";

import Link from "next/link";
import Image from "next/image";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="min-h-screen">
      <section id="hero">
        <div className="top-content bg-background text-foreground flex flex-col-reverse md:flex-row md:items-center md:-mb-28">
          <div className="left flex flex-col text-center mt-2 md:w-1/2 md:relative md:top-20 md:pl-16 px-3">
            <h1 className="text-4xl font-semibold">
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

            
            <div className="">
              <Link href={"/contact"} className={buttonVariants({ variant: "default", size: "lg"})}>Contact Me <EnvelopeOpenIcon /></Link>
            </div>
          </div>
          <div className="right flex justify-center p-2 md:w-1/2">
            <Image
              src={"/images/Suit.png"}
              alt={"Denis Mutunga Mutinda"}
              className="cursor-pointer hover:shadow-outline rounded-full object-cover object-center h-96 w-96 md:relative md:top-20"
              width={250}
              height={250}
            />
          </div>
        </div>
        {/* <div className="bg-gray-50">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#1f2937"
              fillOpacity="1"
              d="M0,256L34.3,266.7C68.6,277,137,299,206,282.7C274.3,267,343,213,411,186.7C480,160,549,160,617,176C685.7,192,754,224,823,213.3C891.4,203,960,149,1029,154.7C1097.1,160,1166,224,1234,229.3C1302.9,235,1371,181,1406,154.7L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
            ></path>
          </svg>
        </div> */}
      </section>
    </div>
  );
}
