'use client';
import React, { useLayoutEffect, useRef } from 'react';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

import gsap from 'gsap';

const phrases = [
  'Nigeria is a country located in West Africa.',
  'The capital of Nigeria is Abuja, which replaced Lagos as the capital in 1991. ',
  "Nigeria's population was estimated to be over 200 million people",
  ' Nigeria has one of the largest economies in Africa',
  'There are also indigenous African religions practiced by some communities.',
];

export default function Index() {
  return (
    <div className="description">
      {phrases.map((phrase, index) => {
        return <AnimatedText key={index}>{phrase}</AnimatedText>;
      })}
    </div>
  );
}

function AnimatedText({ children }) {
  const text = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(text.current, {
      scrollTrigger: {
        trigger: text.current,
        scrub: true,
        start: '0px bottom',
        end: 'bottom+=400px bottom',
        // markers: true,
      },
      opacity: 0,
      left: '-200px',
      ease: 'power3.Out',
    });
  }, []);

  return <p ref={text}>{children}</p>;
}
