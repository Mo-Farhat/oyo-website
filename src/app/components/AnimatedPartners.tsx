"use client";
import { useEffect, useState } from "react";

const logos = [
  {
    name: "Cafe 95",
    url: "/partner-logos/cafe95.png",
  },
  {
    name: "Country Kitchen",
    url: "/partner-logos/countrykitchen.png",
  },
  {
    name: "GFC",
    url: "/partner-logos/gfc.png",
  },
  {
    name: "Hot Bread",
    url: "/partner-logos/hotbread.png",
  },
  {
    name: "Hot Pot",
    url: "/partner-logos/hotpot.png",
  },
  {
    name: "Mr Baker",
    url: "/partner-logos/mrbaker.png",
  },
  {
    name: "Open Kitchen",
    url: "/partner-logos/openkitchen.png",
  },
  {
    name: "Pizza Picasso",
    url: "/partner-logos/Pizza Picasso.png",
  },
  {
    name: "Spice Hub",
    url: "/partner-logos/spicehub.png",
  },
  {
    name: "Star Restaurant",
    url: "/partner-logos/star-restaurant.png",
  },
];

const AnimatedLogoCloud = () => {
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const animateLogos = () => {
      setTranslateX((prev) => {
        const logoWidth = 112 + 30; // w-28 (112px) + gap-6 (24px)
        const totalWidth = logoWidth * logos.length;
        return prev <= -totalWidth ? 0 : prev - 1;
      });
    };

    const interval = setInterval(animateLogos, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#111113] py-12">
      <div className="mx-auto w-full px-4 text-center text-white md:px-8">
        <h1 className="mb-8 text-2xl font-bold">Current Partners - Join Us!</h1>
        <div className="relative mt-6 overflow-hidden p-2">
          <div className="flex gap-6">
            {Array.from({ length: 3 }).map((_, setIndex) => (
              <div
                key={setIndex}
                className="flex shrink-0 gap-10"
                style={{
                  transform: `translateX(${translateX}px)`,
                  transition: "transform 0.02s linear",
                }}
              >
                {logos.map((logo, logoIndex) => (
                  <img
                    key={`${setIndex}-${logoIndex}`}
                    src={logo.url}
                    className="size-40 opacity-100 brightness-100 transition-opacity duration-300 hover:opacity-100"
                    alt={logo.name}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedLogoCloud;
