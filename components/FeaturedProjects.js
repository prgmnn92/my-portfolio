import React from "react";
import Image from "next/image";

const FeaturedProjects = () => {
  return (
    <div>
      <h2 className="text-xl md:text-3xl text-brick-red font-medium pb-4 md:pb-8">
        greatest creations 🧠
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2  md:gap-4">
        <a
          href="https://www.culcha.com/"
          target="_blank"
          rel="noreferrer"
          className="drop-shadow min-h-[200px] bg-white rounded-2xl p-4"
        >
          <div className="font-bold text-sm">culcha</div>
          <Image
            src="/images/icons/culcha.svg"
            fill
            className="object-fit px-10"
            alt="culcha icon"
          />
        </a>
        <a
          href="https://www.sangfroidstudio.com/"
          target="_blank"
          rel="noreferrer"
          className="drop-shadow min-h-[200px] bg-white rounded-2xl p-4"
        >
          <div className="font-bold text-sm">sangfroidstudio</div>
          <Image
            src="/images/icons/sangfroid.svg"
            fill
            className="object-fit px-10"
            alt="sangfroid icon"
          />
        </a>
        <a
          href="https://www.parqhq.com/"
          target="_blank"
          rel="noreferrer"
          className="drop-shadow min-h-[200px] bg-white rounded-2xl p-4"
        >
          <div className="font-bold text-sm">parq</div>
          <Image
            src="/images/icons/parq.svg"
            fill
            className="object-fit px-10"
            alt="parq icon"
          />
        </a>
      </div>
    </div>
  );
};

export default FeaturedProjects;
