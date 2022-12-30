import React, { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import { Inter } from "@next/font/google";
import gsap from "gsap";
import "../styles/globals.css";

const interVariable = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // GSAP following mouse cursor code
    let ball = document.querySelector(".ball");
    let pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let mouse = { x: pos.x, y: pos.y };
    let speed = 0.08;

    let fpms = 60 / 1000;
    let xSet = gsap.quickSetter(ball, "x", "px");
    let ySet = gsap.quickSetter(ball, "y", "px");

    const handleBall = (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    };

    // add function to frame animation ticker
    gsap.ticker.add((time, deltaTime) => {
      var delta = deltaTime * fpms;
      var dt = 1.0 - Math.pow(1.0 - speed, delta);

      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    });

    window.addEventListener("mousemove", handleBall);

    document.addEventListener("mouseleave", function (event) {
      if (
        event.clientY <= 0 ||
        event.clientX <= 0 ||
        event.clientX >= window.innerWidth ||
        event.clientY >= window.innerHeight
      ) {
        if (!ball.classList.contains("hide")) {
          ball.classList.add("hide");
        }
      }
    });
    document.addEventListener("mouseenter", function (event) {
      if (
        event.clientY <= 0 ||
        event.clientX <= 0 ||
        event.clientX >= window.innerWidth ||
        event.clientY >= window.innerHeight
      ) {
      } else {
        if (ball.classList.contains("hide")) {
          ball.classList.remove("hide");
        }
      }
    });

    // cleanup this component
    return () => {
      window.removeEventListener("mousemove", handleBall);
    };
  }, []);

  return (
    <ThemeProvider attribute="class">
      <main className={interVariable.className}>
        <div className="ball init"></div>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
