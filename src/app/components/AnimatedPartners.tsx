"use client";
import { useEffect, useState } from "react";

const logos = [
  {
    name: "Vercel",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881430/vercel_wordmark_dark_mhv8u8.svg",
  },
  {
    name: "Nextjs",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881475/nextjs_logo_dark_gfkf8m.svg",
  },
  {
    name: "Prime",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/t2awrrfzdvmg1chnzyfr.svg",
  },
  {
    name: "Trustpilot",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tkfspxqmjflfllbuqxsi.svg",
  },
  {
    name: "Webflow",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/nymiivu48d5lywhf9rpf.svg",
  },
  {
    name: "Airbnb",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/pmblusboe7vkw8vxdknx.svg",
  },
  {
    name: "Tina",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/afqhiygywyphuou6xtxc.svg",
  },
  {
    name: "Stackoverflow",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/ts1j4mkooxqmscgptafa.svg",
  },
  {
    name: "mistral",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tyos2ayezryjskox3wzs.svg",
  },
];

const AnimatedLogoCloud = () => {
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const animateLogos = () => {
      setTranslateX((prev) => {
        const logoWidth = 112 + 24; // w-28 (112px) + gap-6 (24px)
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
                className="flex shrink-0 gap-6"
                style={{
                  transform: `translateX(${translateX}px)`,
                  transition: "transform 0.02s linear",
                }}
              >
                {logos.map((logo, logoIndex) => (
                  <img
                    key={`${setIndex}-${logoIndex}`}
                    src={logo.url}
                    className="h-10 w-28 px-2 opacity-70 brightness-0 invert transition-opacity duration-300 hover:opacity-100"
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
