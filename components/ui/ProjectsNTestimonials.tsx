import React, { useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import clsx from "clsx";

const projects = [
  {
    title: "Taifa Casino",
    description: "",
  },
  {
    title: "Caesius Agency",
    description: "",
  },
  {
    title: "Zawadi Smiles",
    description:
      "They design the interfaces for websites, apps, and software, ensuring the user journey is intuitive, and engaging. UI/UX Designers conduct user research, create wireframes and prototypes, and perform usability testing.",
    image: "/path/to/your/image.jpg",
  },
  {
    title: "Concept Artist",
    description: "",
  },
  {
    title: "Motion Designer",
    description: "",
  },
];

const ProjectsAndTestimonials = () => {
  const [selectedService, setSelectedService] = useState(2);

  const handlePrev = () => {
    setSelectedService((prev) => (prev > 0 ? prev - 1 : projects.length - 1));
  };

  const handleNext = () => {
    setSelectedService((prev) => (prev < projects.length - 1 ? prev + 1 : 0));
  };

  return (
    <div
      id="projects"
      className="resume border-t-2 border-foregroundbg-background text-foreground pb-2 p-8"
    >
      
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-5xl font-bold text-center">MY projects</h2>
        <p className="mt-2 text-gray-400">
          All of my works are done for my satisfied clients
        </p>
        <Button variant="outline" className="mt-6 text-sm">
          Explore All
        </Button>
      </div>
      <div className="relative flex items-center justify-center">
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2"
        >
          <ArrowUp className="w-6 h-6 text-white" />
        </button>
        <div className="grid grid-cols-5 gap-4 w-full max-w-6xl">
          {projects.map((service, index) => (
            <div
              key={index}
              className={clsx(
                "flex flex-col items-center justify-center border border-gray-700 p-4",
                selectedService === index ? "col-span-3" : "rotate-90"
              )}
              onClick={() => setSelectedService(index)}
            >
              {selectedService === index && service.image ? (
                <Image
                  src={service.image}
                  alt="Service Image"
                  width={400}
                  height={300}
                  className="mb-4"
                />
              ) : null}
              <h3 className="text-xl font-bold mb-2 text-center">
                {service.title}
              </h3>
              {selectedService === index && (
                <p className="text-gray-300 text-sm text-center">
                  {service.description}
                </p>
              )}
            </div>
          ))}
        </div>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2"
        >
          <ArrowDown className="w-6 h-6 text-white" />
        </button>
      </div>
      {/* Testimonials */}
      <div className="resume-content mt-12 p-5 border-4 border-foreground">
        <div className="resume-intro text-center pb-5">
          <h1 className="text-3xl tracking-wider text-semibold font-semibold text-center">
            Projects and Testimonials
          </h1>
          <p className="text-lg">
            I will let the people I have previously worked with convince you I
            am the right fit to work on your project for you.
          </p>
          <p className="text-lg">
            Here is a list of some of the people I have being fortunate enough
            to work with and what they had to say of their experience of working
            with me.
          </p>
        </div>
        <div className="testimonial-container">
          <div className="client-testimonial flex w-11/12 mx-auto mt-5 items-center">
            <div className="client hidden md:block mx-3">
              <Image
                src={"/logos/WhiteOnBlack.png"}
                alt={"Client Image"}
                width={250}
                height={250}
              />
            </div>
            <div className="testimonial bg-gray-100 flex flex-col w-11/12 mx-auto my-3 rounded-xl px-2 md:flex-row">
              <div className="photo my-auto mx-auto md:w-1/5">
                <Image
                  src={"/logos/WhiteOnBlack.png"}
                  alt={"Client Image"}
                  width={250}
                  height={250}
                />
              </div>
              <div className="words flex flex-col ml-3 pt-1 my-auto md:w-4/5">
                <p className="review text-gray-900 font-semibold text-lg">
                  <span className="text-3xl">“</span>
                  Denis is the very definition of dedicated customer service.
                  Over the course of multiple projects I&apos;ve worked with him
                  on, his diligence, commitment and expertise have continuously
                  proved invaluable in ensuring the timely delivery of said
                  projects while always maintaining his characteristic quality
                  standards. He is quite the fast learner and his intellectual
                  curiosity is perhaps one of the most priceless assets he
                  brings into any developer team.
                  <span className="text-3xl">”</span>
                </p>
                <figcaption className="pl-5 text-lg font-medium p-1 md:flex md:justify-between">
                  <div className="left">
                    <p className="name  text-gray-700">Cedrique Wekesa</p>
                    <p className="title text-gray-500 text-sm">
                      Co-Founder & CEO of Logicae Science
                    </p>
                  </div>
                  <div className=" right text-gray-800 pr-5">
                    <a href="https://logicae.science/">View Work</a>
                  </div>
                </figcaption>
              </div>
            </div>
          </div>
          <div className="client-testimonial flex w-11/12 mx-auto mt-5 items-center">
            <div className="client hidden md:block mx-3">
              <Image
                src={"/logos/WhiteOnBlack.png"}
                alt={"Client Image"}
                width={250}
                height={250}
              />
            </div>
            <div className="testimonial bg-gray-100 flex flex-col w-11/12 mx-auto my-3 rounded-xl px-2 md:flex-row">
              <div className="photo my-auto mx-auto md:w-1/5">
                <Image
                  src={"/logos/WhiteOnBlack.png"}
                  alt={"Client Image"}
                  width={250}
                  height={250}
                />
              </div>
              <div className="words flex flex-col ml-3 pt-1 my-auto md:w-4/5">
                <p className="review text-gray-900 font-semibold text-lg">
                  <span className="text-3xl">“</span>I recently worked with
                  Denis to improve my company&apos;s web app. He delivered
                  everything I asked for in a timely manner .He is extremely
                  helpful in guiding through the whole process and overall, I am
                  beyond pleased with Denis&apos;s impeccable service.
                  <span className="text-3xl">”</span>
                </p>
                <figcaption className="pl-5 text-lg font-medium p-1 md:flex md:justify-between">
                  <div className="left">
                    <p className="name  text-gray-700">Lumona Mulengwa</p>
                    <p className="title text-gray-500 text-sm">CTO Sekani</p>
                  </div>
                  <div className=" right text-gray-800 pr-5">
                    <a href="https://sekani.tech/">View Work</a>
                  </div>
                </figcaption>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsAndTestimonials;
