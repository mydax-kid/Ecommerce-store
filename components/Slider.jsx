'use client'

import React, { useState } from "react";
import {FaArrowLeftLong} from 'react-icons/fa6'
import {FaArrowRightLong} from 'react-icons/fa6'

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
  'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1538329972958-465d6d2144ed?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
]

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="h-[calc(90vh-80px)] w-full relative overflow-hidden">
      <div
        className="w-[300%] h-full flex transition-all duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 33.3333}%)` }} >
            {
                data.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt=""
                    className="w-[33.3333%] h-full object-cover object-center"
                />
                ))
            }
      </div>
      <div className="w-[fit-content] flex absolute left-0 right-0 bottom-[70px] mx-auto gap-10">
        <div
          className="w-16 h-16 border border-gray-300 flex items-center justify-center cursor-pointer"
          onClick={prevSlide}
        >
          <FaArrowLeftLong color="white"/>
        </div>
        <div
          className="w-16 h-16 border border-gray-300 flex items-center justify-center cursor-pointer"
          onClick={nextSlide}
        >
          <FaArrowRightLong color="white"/>
        </div>
      </div>
    </div>
  );
};

export default Slider;

