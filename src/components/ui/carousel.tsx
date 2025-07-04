"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useRef, useId } from "react";

interface SlideData {
  title: string;
  description: string;
  src: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const { src, description, title } = slide;
  const isActive = current === index;

  return (
    <div className="flex-shrink-0 w-full flex justify-center">
      <div
        className="relative w-80 h-80 cursor-pointer transition-all duration-500 ease-out"
        onClick={() => handleSlideClick(index)}
      >
        {/* Image Container */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#1D1F2F] shadow-2xl">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            alt={title}
            src={src}
            loading="eager"
            decoding="sync"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-8">
            <h3 className="text-xl md:text-2xl font-bold mb-6 max-w-xs">
              {title}
            </h3>
            <p className="text-sm md:text-base">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => {
  return (
    <button
      className={`w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 active:scale-95 transition-all duration-200 ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}
    >
      <IconArrowNarrowRight className="text-white w-5 h-5" />
    </button>
  );
};

interface CarouselProps {
  slides: SlideData[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const id = useId();

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <div
          ref={containerRef}
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <Slide
              key={index}
              slide={slide}
              index={index}
              current={current}
              handleSlideClick={handleSlideClick}
            />
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />

        {/* Dots Indicator */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current 
                  ? "bg-white shadow-lg" 
                  : "bg-white/30 hover:bg-white/50"
              }`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>

        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}