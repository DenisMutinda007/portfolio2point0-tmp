"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const ProjectsAndTestimonials = () => {
  return (
    <div
      id="projects"
      className="resume border-t-2 border-foregroundbg-background text-foreground pb-2 p-8"
    >
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
      <div className="hidden">
        <Accordion type="single" collapsible defaultValue="item-1" orientation="vertical" className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      {/* Testimonials */}
      <div className="resume-content mt-12 p-5 border-4 border-foreground">
        
        <div className="testimonial-container">
          <div className="client-testimonial flex w-11/12 mx-auto mt-5 items-center">
            <div className="client hidden md:block mx-3">
              <Image
                src={"/images/Logicae.jpg"}
                alt={"Client Image"}
                width={250}
                height={250}
              />
            </div>
            <div className="testimonial bg-gray-100 flex flex-col w-11/12 mx-auto my-3 rounded-xl px-2 md:flex-row">
              <div className="photo my-auto mx-auto md:w-1/5">
                <Image
                  src={"/images/Ced.jpg"}
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
                  {/* <div className=" right text-gray-800 pr-5">
                    <a href="https://logicae.science/">View Work</a>
                  </div> */}
                </figcaption>
              </div>
            </div>
          </div>
          <div className="client-testimonial flex w-11/12 mx-auto mt-5 items-center">
            <div className="client hidden md:block mx-3">
              <Image
                src={"/images/sekani_logo.jpg"}
                alt={"Client Image"}
                width={250}
                height={250}
              />
            </div>
            <div className="testimonial bg-gray-100 flex flex-col w-11/12 mx-auto my-3 rounded-xl px-2 md:flex-row">
              <div className="photo my-auto mx-auto md:w-1/5">
                <Image
                  src={"/images/Lum.jpeg"}
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
                  {/* <div className=" right text-gray-800 pr-5">
                    <a href="https://sekani.tech/">View Work</a>
                  </div> */}
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
