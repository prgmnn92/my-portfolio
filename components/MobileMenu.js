import React, { useState } from "react";
import Link from "next/link";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
      <div className="burger transistion-all">
        {isOpen ? <Cross /> : <Burger />}
      </div>
    </div>
  );
};

const Burger = () => (
  <svg
    width="20"
    height="10"
    viewBox="0 0 20 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 9H1M1 1H19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const Cross = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13 13L1 1M13 1L1 13"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default MobileMenu;
