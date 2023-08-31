// import Image from 'next/image'
'use client';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import Intro from './components/Intro/page';

export default function Home() {
  useEffect(() => {
    gsap.set('.main', { autoAlpha: 1 });
    {
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      };
    }
  });
  return (
    <main data-scroll-container className="main">
      <Intro />
    </main>
  );
}
