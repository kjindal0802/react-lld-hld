import React from "react";

export default function Card({ title, subtitle, height, width, index }) {
  return (
    <div
      className={`blog-card-${index}`}
      style={{ height: height, width: width }}
    >
      <p>{title}</p>
      <p>{subtitle}</p>
    </div>
  );
}
