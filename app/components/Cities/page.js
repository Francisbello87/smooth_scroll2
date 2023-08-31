import React, { useState, useLayoutEffect, useRef } from "react";

import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const cities = [
  {
    title: "Abuja",
    src: "abuja.avif",
  },
  {
    title: "Kano",
    src: "kano.avif",
  },
  {
    title: "Lagos",
    src: "Lagos.avif",
  },
  {
    title: "Enugu",
    src: "enugu.avif",
  },
];

export default function Cities() {
  const [selectedCities, setSelectedCities] = useState(0);
  const container = useRef(null);
  const imageContainer = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: imageContainer.current,
      pin: true,
      start: "top-=100px",
      end: document.body.offsetHeight - window.innerHeight - 50,
    });
  }, []);

  return (
    <div ref={container} className="cities">
      <div className="citiesDescription">
        <div ref={imageContainer} className="imageContainer">
          <Image
            src={`/assets/${cities[selectedCities].src}`}
            fill={true}
            alt="City image"
            priority={true}
          />
        </div>
        <div className="column">
          <p>
            Nigeria has one of the largest economies in Africa, primarily driven
            by its oil and gas industry. However, the country also faces
            economic challenges, including high unemployment rates and economic
            inequality.
          </p>
        </div>
        <div className="column">
          <p>
            Nigeria is a major oil producer, with oil being a crucial part of
            its economy. The Niger Delta region is rich in oil reserves, but
            oil-related activities have also caused environmental and social
            issues in the area.
          </p>
        </div>
      </div>

      <div className="citytList">
        {cities.map((city, index) => {
          return (
            <div
              key={index}
              onMouseOver={() => {
                setSelectedCities(index);
              }}
              className="citiesEl"
            >
              <h2>{city.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
