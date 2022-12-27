import React from "react";

const Container = ({ children }) => {
  return (
    <div className="p-4 md:p-8 max-w-screen-xl mx-auto text-[#1E1E1E] text-sm md:text-lg">
      <>{children}</>
    </div>
  );
};

export default Container;
