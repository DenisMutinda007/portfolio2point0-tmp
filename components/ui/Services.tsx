"use client";

import {
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  // CardTitle,
} from "@/components/ui/card";
import { CheckIcon } from "@radix-ui/react-icons";
// import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Full-stack Web Development",
    description:
      "Rust, Typescript, React, Angular, Next.js, Node.js, TailwindCSS & Next UI",
  },
  {
    title: "Cross-platform Mobile App Development",
    description: "Flutter & React Native",
  },
  {
    title: "Internet of Things, Robotics & Automation",
    description: "C, C++ & Rust",
  },
  {
    title: "Security Auditing, DevOps and Cloud Services",
    description: "AWS, Kubernetes, Docker & GIT",
  },
];

function Services() {
  return (
    <div
      id="services"
      className="max-w-full overflow-hidden flex flex-col content pb-2 md:pt-24"
    >
      <div className="text-center">
        <p className="text-4xl font-bold underline">Services</p>
        <section className="flex flex-col space-y-5 md:flex-row md:space-x-3 py-5 px-2">
          <div className="left md:w-1/2 md:space-y-3 md:flex md:flex-col md:items-center md:justify-center">
            
            <p>
              With perfection as the end goal, I know I have attained it, not
              when I have nothing to add, rather when there is nothing to
              remove. I iterate over your project for Perfection. By adhering
              strictly to the principle of Iterative Development you are assured
              that not only will I deliver in time but I will also deliver the
              best possible solution.
            </p>
            <p>
            By adhering strictly to the principle of Iterative Development you are assured that not only will I delvier in time but I will also deliver the best possible solution.
            </p>
            <p className="">
              We help ambitious businesses succeed by creating high-quality
              products, services, and digital experiences that exceed their
              customers&apos; expectations. This is achieved through generating
              more profits by building awereness, driving user traffic,
              connecting with customers and consequently increasing sales.
            </p>
          </div>
          <div className="md:w-1/2 md:flex md:items-center md:justify-center">
            <Card className="md:py-4">
              <CardHeader>
 
                {/* <CardTitle>Personal Ethos</CardTitle> */}
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div>
                  {/* Animate these services loading. */}
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                    >
                      <CheckIcon className="flex h-3 w-3 translate-y-0" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {service.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              {/* <CardFooter> */}
                {/* <Button className="w-full">Mark all as read</Button> */}
              {/* </CardFooter> */}
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Services;
