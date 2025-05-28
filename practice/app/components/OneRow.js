"use client";

import React, { useRef } from "react";
import Box from "./Box";

const OneRow = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between">
        <h1>title &gt; </h1>
        <div className="flex gap-3">
          <p
            onClick={() => scroll("left")}
            className="bg-gray-100 rounded-full flex items-center justify-center w-8 h-8  cursor-pointer"
          >
            {"<"}
          </p>
          <p
            onClick={() => scroll("right")}
            className="bg-gray-100 rounded-full flex items-center justify-center w-8 h-8  cursor-pointer"
          >
            {">"}
          </p>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-3 w-full overflow-x-auto scroll-smooth px-10 scrollbar-hide"
      >
        {[...Array(10)].map((_, idx) => (
          <Box key={idx} />
        ))}
      </div>
    </div>
  );
};

export default OneRow;
