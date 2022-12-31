import React, { useEffect, useContext } from "react";
import gsap from "gsap";
import { StoreContext } from "../store/store-context";

const Cursor = () => {
  const {
    state: { isOverButton },
  } = useContext(StoreContext);

  useEffect(() => {
    let ball = document.querySelector(".ball");

    if (isOverButton) {
      gsap.fromTo(
        ball,
        {
          width: "20px",
          height: "20px",
          backgroundColor: "#d44d5cff",
          mixBlendMode: "normal",
        },
        {
          width: "60px",
          height: "60px",
          mixBlendMode: "difference",
          backgroundColor: "#e0e0e0",
          duration: 0.3,
        }
      );
    } else {
      gsap.fromTo(
        ball,
        {
          width: "60px",
          height: "60px",
          mixBlendMode: "difference",
          backgroundColor: "#e0e0e0",
        },
        {
          width: "20px",
          height: "20px",
          mixBlendMode: "normal",
          backgroundColor: "#d44d5cff",
          duration: 0.3,
        }
      );
    }

    return () => {};
  }, [isOverButton]);

  useEffect(() => {
    // GSAP following mouse cursor code
    let ball = document.querySelector(".ball");
    let pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let mouse = { x: pos.x, y: pos.y };
    let speed = 0.08;

    let fpms = 60 / 1000;
    let xSet = gsap.quickSetter(ball, "x", "px");
    let widthSet = gsap.quickSetter(ball, "width", "px");
    let heightSet = gsap.quickSetter(ball, "height", "px");
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
      xSet(pos.x - ball.offsetWidth / 2);
      ySet(pos.y - ball.offsetWidth / 2);
    });

    window.addEventListener("mousemove", handleBall);

    // document.addEventListener("mouseleave", function (event) {
    //   if (
    //     event.clientY <= 0 ||
    //     event.clientX <= 0 ||
    //     event.clientX >= window.innerWidth ||
    //     event.clientY >= window.innerHeight
    //   ) {
    //     if (!ball.classList.contains("hide")) {
    //       ball.classList.add("hide");
    //     }
    //   }
    // });

    // document.addEventListener("mouseenter", function (event) {
    //   if (
    //     event.clientY <= 0 ||
    //     event.clientX <= 0 ||
    //     event.clientX >= window.innerWidth ||
    //     event.clientY >= window.innerHeight
    //   ) {
    //   } else {
    //     if (ball.classList.contains("hide")) {
    //       ball.classList.remove("hide");
    //     }
    //   }
    // });

    // cleanup this component
    return () => {
      window.removeEventListener("mousemove", handleBall);
    };
  }, []);

  return <div className="ball init"></div>;
};

export default Cursor;

// TODO: deactivate component on mobile