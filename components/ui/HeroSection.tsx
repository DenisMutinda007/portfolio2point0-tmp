"use client";

import Link from "next/link";
import Image from "next/image";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

// Hi, I'm Denis Mutinda—a passionate front-end developer with a knack for crafting seamless user interfaces. With three years of experience in the field, I've worked my way up from junior roles to becoming a lead developer, honing my skills along the way at Prism.fm and through independent projects.

// I love collaborating on exciting projects, building beautiful, functional apps, and constantly finding ways to improve both the user experience and developer workflow. Whether it's bringing ideas to life with clean, intuitive code or optimizing processes to make life easier for everyone involved, I'm all in.

// Currently, I'm developing engaging web experiences at Taifa-Casino, a rising startup in Kenya's online betting scene. When I'm not doing that, you can find me working on my own creative projects under DenisWritesCode and Caesius Agency.

// Take a look at my portfolio to see some of my work. If you'd like to connect or have an interesting project in mind, don't hesitate to reach out.



export default function HeroSection() {
  return (
    <div>
        <section id="hero">
    <div className="top-content bg-gray-800 flex flex-col-reverse md:flex-row md:-mb-28">
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
          junior Full-Stack Web developer.
        </p>
        <p className="text-xl mb-5 ">
          I give wings to your ideas and you decide where to fly!🚀
        </p>
        <div className="">
          <Button>
            <Link href={"/contact"}>
              Contact Me <EnvelopeOpenIcon />
            </Link>
          </Button>
        </div>
      </div>
      <div className="right flex justify-center p-2 md:w-1/2">
        <Image
          src={"/logos/WhiteOnBlack.png"}
          alt={"Client Image"}
          width={250}
          height={250}
        />
      </div>
    </div>
    <div className="bg-gray-50">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#1f2937"
          fillOpacity="1"
          d="M0,256L34.3,266.7C68.6,277,137,299,206,282.7C274.3,267,343,213,411,186.7C480,160,549,160,617,176C685.7,192,754,224,823,213.3C891.4,203,960,149,1029,154.7C1097.1,160,1166,224,1234,229.3C1302.9,235,1371,181,1406,154.7L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>
    </div>
    <hr />
  </section></div>
  )
}