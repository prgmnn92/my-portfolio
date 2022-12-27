/* eslint-disable react/no-unescaped-entities */
import { useRouter } from "next/router";
import React from "react";

const LatestNews = () => {
  const router = useRouter();
  return (
    <div>
      <h2 className="text-xl md:text-3xl text-brick-red font-medium pb-4 md:pb-8">
        what’s going on 🏃
      </h2>
      <div className="drop-shadow bg-white rounded-2xl p-4 pb-6">
        <p className="font-bold">
          Building things -
          <span className="opacity-80 font-medium"> ongoing</span>
        </p>
        <p className="pt-4">
          Recently I built my new portfolio with NextJS using tailwindcss. I
          really hope you enjoy it! : ) <br />
          Besides my Webflow clients that I'm serving, I'm looking for potential
          clients and new opportunities to build my React / NextJS Portfolio. 🙃
          <br />
          So, if you by any luck are looking for a developer who has
          <b> a passion for tech, loves to build things</b> and to
          <b> learn new things</b> then{" "}
          <a
            className="underline cursor-pointer"
            onClick={() => router.push("mailto:pargmann92@gmail.com")}
          >
            hit me up!
          </a>
          <br />
          <p className="pt-4 ">Cheers</p>
          <p className="">Phillip</p>
        </p>
      </div>
    </div>
  );
};

export default LatestNews;
