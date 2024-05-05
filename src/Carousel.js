import React, { useState } from "react";
import "./carousel.css";

const imageSrc = [
  "https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg",
  "https://wallpapers.com/images/featured/ultra-hd-wazf67lzyh5q7k32.jpg",
];

export default function App() {
  const [counter, setCounter] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setCounter((prev) => (prev > 0 ? prev - 1 : imageSrc.length - 1));
    } else {
      setCounter((prev) => (prev < imageSrc.length - 1 ? prev + 1 : 0));
    }
  };

  return (
    <>
      <div className="container">
        <button onClick={() => handleClick("left")}>Left</button>
        {imageSrc.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className="image-carousel"
            style={{ transform: `translateX(${-100 * index}%)` }}
          />
        ))}
        <button onClick={() => handleClick("right")}>Right</button>
      </div>
    </>
  );
}
