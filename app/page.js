// import Image from 'next/image'
"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import Intro from "./components/Intro/page";
import "../node_modules/locomotive-scroll/src/locomotive-scroll.scss";
import Description from "./components/Description/page";
import Cities from "./components/Cities/page";

export default function Home() {
  useEffect(() => {
    gsap.set(".main", { autoAlpha: 1 });
    {
      async () => {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        const scrollEl = document.getElementById("main-container");
        const locomotiveScroll = new LocomotiveScroll();
      };
    }
  });
  return (
    <main data-scroll-container className="main" id="main-container">
      <Intro />
      <Description />
      <Cities />
    </main>
  );
}
