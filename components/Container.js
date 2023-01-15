import React from "react";
import Navbar from "./Navbar";

const Container = ({ children }) => {
  return (
    <div className="relative md:flex md:items-start">
      <Navbar />
      <div className="p-4 md:p-8 max-w-screen-xl mx-auto grow text-[#1E1E1E] text-sm md:text-lg">
        <>{children}</>
      </div>
    </div>
  );
};

export default Container;
