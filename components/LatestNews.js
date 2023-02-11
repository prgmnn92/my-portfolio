/* eslint-disable react/no-unescaped-entities */
import { useRouter } from "next/router";
import React from "react";

const LatestNews = () => {
  const router = useRouter();
  return (
    <div>
      <h2 className="pb-4 text-xl font-medium md:text-3xl text-brick-red md:pb-8">
        what’s going on 🏃
      </h2>
      <div className="p-4 pb-6 bg-white drop-shadow rounded-2xl">
        <p className="font-bold">
          Building things -
          <span className="font-medium opacity-80"> ongoing</span>
        </p>
        <p className="pt-4">
          Recently I built my new portfolio with NextJS using Tailwindcss. I
          really hope you enjoy it! : )
        </p>
        <p className="pt-4 ">Cheers</p>
        <p>Phillip</p>
      </div>
    </div>
  );
};

export default LatestNews;
