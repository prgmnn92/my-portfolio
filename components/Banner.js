import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import MagneticButton from "./MagneticButton";

const Smiley = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className="absolute w-[70px] right-16 bottom-0 md:right-32 md:bottom-32"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {isHover ? (
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M94.6785 31.47C75.9099 66.3699 38.4175 80.5586 3.59528 60.9108C2.43603 60.2566 0.965988 60.6656 0.311743 61.8105C-0.342503 62.9759 0.0664445 64.4479 1.22569 65.1022C38.5504 86.1812 78.8049 71.1541 98.9229 33.7598C99.5526 32.5944 99.1131 31.1222 97.9416 30.4884C96.7701 29.875 95.3082 30.3046 94.6785 31.47Z"
            fill="black"
          />
          <path
            d="M32.8993 45.943C36.7763 45.943 39.9192 42.8002 39.9192 38.9232C39.9192 35.0462 36.7763 31.9033 32.8993 31.9033C29.0223 31.9033 25.8794 35.0462 25.8794 38.9232C25.8794 42.8002 29.0223 45.943 32.8993 45.943Z"
            fill="black"
          />
          <path
            d="M62.1219 33.0144C65.5183 31.3076 67.7422 28.8701 67.089 27.5702C66.4357 26.2703 63.1527 26.6002 59.7563 28.307C56.3598 30.0138 54.136 32.4512 54.7892 33.7512C55.4425 35.0511 58.7254 34.7212 62.1219 33.0144Z"
            fill="black"
          />
        </svg>
      ) : (
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M94.6785 31.4695C75.9099 66.3694 38.4175 80.5582 3.59528 60.9103C2.43603 60.2561 0.965988 60.6651 0.311743 61.8101C-0.342503 62.9754 0.0664445 64.4474 1.22569 65.1017C38.5504 86.1807 78.8049 71.1536 98.9229 33.7593C99.5526 32.5939 99.1131 31.1217 97.9416 30.4879C96.7701 29.8745 95.3082 30.3041 94.6785 31.4695Z"
            fill="black"
          />
          <path
            d="M32.8993 45.9426C36.7763 45.9426 39.9192 42.7997 39.9192 38.9227C39.9192 35.0457 36.7763 31.9028 32.8993 31.9028C29.0223 31.9028 25.8794 35.0457 25.8794 38.9227C25.8794 42.7997 29.0223 45.9426 32.8993 45.9426Z"
            fill="black"
          />
          <path
            d="M61.9603 38.4753C65.7615 38.4753 68.8431 35.3938 68.8431 31.5926C68.8431 27.7914 65.7615 24.71 61.9603 24.71C58.1591 24.71 55.0776 27.7914 55.0776 31.5926C55.0776 35.3938 58.1591 38.4753 61.9603 38.4753Z"
            fill="black"
          />
        </svg>
      )}
    </div>
  );
};

const Banner = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col-reverse relative md:flex md:flex-row py-4 md:h-screen md:max-h-[720px] items-center pb-[10%]">
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
        <Smiley />
      </div>
    </>
  );
};

export default Banner;
