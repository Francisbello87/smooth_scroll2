import Image from 'next/image';
import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

export default function Intro() {
  const backgroundImage = useRef(null);
  const introImage = useRef(null);
  useLayoutEffect(() => {
    gsap.registerEffect(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: top,
        end: '+=500px',
        scrub: true,
      },
    });

    tl.from(backgroundImage.current, { clipPath: 'inset(15%)' }).to(
      introImage.current,
      { height: '200px' },
      0
    );
  }, []);

  return (
    <div className="intro">
      <div ref={backgroundImage} className="backgroundImage">
        <Image src={'/assets/backgroundImage.avif'} alt="Abuja" fill={true} />
      </div>
      <div className="intro-container">
        <div
          ref={introImage}
          data-scroll
          data-scroll-speed="0.3"
          className="introImage"
        >
          <Image
            data-scroll
            data-scroll-speed="0.3"
            src={'/assets/backgroundImageSmall.avif'}
            alt="background image"
            fill={true}
          />
        </div>
        <h1 data-scroll data-scroll-speed="0.6">
          Showcasing Nigeria
        </h1>
      </div>
    </div>
  );
}
