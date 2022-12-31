import React, {
  useRef,
  useState,
  useEffect,
  createRef,
  useContext,
} from "react";
import { gsap, Elastic, Power3, SteppedEase } from "gsap";
import { ACTION_TYPES, StoreContext } from "../store/store-context";

const MagneticButton = ({
  children,
  className,
  speed = 1,
  tollerance = 0.8,
  scale = 1.2,
  debug = false,
  borderRadius = 0,
  ...props
}) => {
  const $root = useRef();
  const $item = useRef();
  const $hover = useRef();
  const rootBound = useRef();
  const itemBound = useRef();
  const diffBound = useRef({ x: 0, y: 0 });

  const { dispatch } = useContext(StoreContext);

  const handleMouseEnter = () => {
    dispatch({
      type: ACTION_TYPES.SET_IS_OVER_BUTTON,
      payload: true,
    });
    gsap.killTweensOf($item.current);
    gsap.set($hover.current, {
      scale: scale,
      borderRadius,
      background: debug ? "rgba(0, 125, 255, .4)" : "transparent",
    });

    rootBound.current = $root.current.getBoundingClientRect();
    itemBound.current = $item.current.getBoundingClientRect();
    diffBound.current.x =
      (rootBound.current.width * scale - rootBound.current.width) / 2;
    diffBound.current.y =
      (rootBound.current.height * scale - rootBound.current.height) / 2;
  };

  const handleMouseLeave = () => {
    dispatch({
      type: ACTION_TYPES.SET_IS_OVER_BUTTON,
      payload: false,
    });
    gsap.killTweensOf($item.current);
    gsap.killTweensOf($root.current);
    gsap.to($item.current, {
      x: 0,
      y: 0,
      ease: Elastic.easeOut,
      duration: 1.1,
    });
    gsap.to($root.current, {
      x: 0,
      y: 0,
      ease: Elastic.easeOut,
      duration: 1,
    });
    gsap.set($hover.current, {
      scale: 1,
    });
  };

  const handleMouseMove = (e) => {
    const x = e.clientX || e.touches[0].clientX;
    const y = e.clientY || e.touches[0].clientY;

    const maxX =
      ((rootBound.current.width - itemBound.current.width) / 2) * tollerance;
    const maxY =
      ((rootBound.current.height - itemBound.current.height) / 2) * tollerance;

    const newX = gsap.utils.mapRange(
      0,
      rootBound.current.width * scale,
      -maxX,
      maxX,
      x - rootBound.current.x + diffBound.current.x
    );

    const newY = gsap.utils.mapRange(
      0,
      rootBound.current.height * scale,
      -maxY,
      maxY,
      y - rootBound.current.y + diffBound.current.y
    );

    gsap.killTweensOf($item.current);
    gsap.killTweensOf($root.current);
    gsap.to($item.current, {
      x: newX,
      y: newY,
      ease: "power3.out",
      duration: speed,
    });
    gsap.to($root.current, {
      x: newX,
      y: newY,
      ease: "power3.out",
      duration: speed,
    });
  };

  return (
    <button
      ref={$root}
      className="px-8 py-2 relative bg-brick-red text-neutral-50 rounded-3xl"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onTouchMove={handleMouseMove}
      onTouchStart={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchEnd={handleMouseLeave}
      {...props}
    >
      <span ref={$item} className="inline-block ">
        {children}
      </span>
      <span ref={$hover} className="absolute left-0 top-0 w-full h-full" />
    </button>
  );
};

export default MagneticButton;
