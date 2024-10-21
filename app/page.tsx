"use client";

import { Button } from "@/components/ui/button";
import EducationAndWork from "@/components/ui/EducationNWork";
import Services from "@/components/ui/Services";
import SkillSet from "@/components/ui/SkillSet";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col space-y-5 text-foreground">
        <h1 className="text-3xl font-bold underline bg-primary text-primary-foreground">
          Hello world!
        </h1>
        <div>
          <Button><Link href={"/contact"}>Contact</Link></Button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p>Hello, world from Framer Motion!</p>
          <Services />
          <SkillSet />
          <EducationAndWork />
        </motion.div>

        <Image src={"/logos/BlackCircle.png"} alt="Black Circle" width={250} height={250} />
        <Image src={"/logos/BlackOnGray.png"} alt="Black on Gray" width={250} height={250} />
        <Image src={"/logos/GrayCircle.png"} alt="Gray Circle" width={250} height={250} />
        <Image src={"/logos/WhiteOnBlack.png"} alt="White on Black" width={250} height={250} />
    </div>
  );
}
