import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import MagneticButton from "./MagneticButton";

const Banner = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col-reverse md:flex md:flex-row py-4 md:h-screen md:max-h-[720px] items-center pb-[10%]">
        <div className="md:w-1/2">
          <h1 className="text-2xl md:text-4xl font-semibold mb-4 md:mb-8">
            Hi I’m Phillip, Frontend Dev.
            <br /> and Tech Enthusiast
          </h1>
          <p className="max-w-lg opacity-80">
            Empowering Your Digital Presence with Exceptional Frontend
            Development Skills and a Passion for Technology
          </p>
          <div className="pt-8 md:pt-16">
            <MagneticButton
              className="button-1"
              scale={3}
              tollerance={1.5}
              speed={0.5}
              borderRadius="50%"
              onClick={() => router.push("mailto:pargmann92@gmail.com")}
            >
              Contact
            </MagneticButton>
          </div>
        </div>
        <div className="mb-8 md:w-1/2 flex grayscale md:h-[280px] md:w-[280px] h-[180px] w-[180px] md:ml-8">
          <Image
            src="/images/profile.jpg"
            fill
            className="rounded-full object-cover"
            alt="Profile Image"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
