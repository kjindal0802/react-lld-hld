import React, { useEffect, useRef, useState } from "react";

export default function App() {
  const canvasRef = useRef(null);
  const startPoint = useRef({ x: 0, y: 0 });
  const isDrawing = useRef(false);
  const [rectangles, setRectangles] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;

    // Attach pointerdown and pointerup event listeners
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
    };
  }, [rectangles]);

  // Handles the start of the drawing
  const handlePointerDown = (event) => {
    isDrawing.current = true;
    startPoint.current = { x: event.offsetX, y: event.offsetY };

    // Attach the pointermove event listener when drawing starts
    const canvas = canvasRef.current;
    canvas.addEventListener("pointermove", drawRectangle);
  };

  // Handles the end of the drawing
  const handlePointerUp = (event) => {
    isDrawing.current = false;

    // Calculate the final rectangle dimensions
    const width = event.offsetX - startPoint.current.x;
    const height = event.offsetY - startPoint.current.y;

    // Save the new rectangle to the state
    setRectangles((prev) => [
      ...prev,
      {
        x: startPoint.current.x,
        y: startPoint.current.y,
        width,
        height,
      },
    ]);

    // Remove the pointermove event listener when drawing ends
    const canvas = canvasRef.current;
    canvas.removeEventListener("pointermove", drawRectangle);
  };

  // Draws a rectangle
  const drawRectangle = (event) => {
    if (!isDrawing.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Redraw all existing rectangles
    rectangles.forEach((rect) => {
      ctx.beginPath();
      ctx.rect(rect.x, rect.y, rect.width, rect.height);
      ctx.strokeStyle = "black";
      ctx.stroke();
    });

    // Draw the current rectangle being drawn
    const width = event.offsetX - startPoint.current.x;
    const height = event.offsetY - startPoint.current.y;

    ctx.beginPath();
    ctx.rect(startPoint.current.x, startPoint.current.y, width, height);
    ctx.strokeStyle = "red";
    ctx.stroke();
  };

  return (
    <canvas
      height={window.innerHeight}
      width={window.innerWidth}
      ref={canvasRef}
      id="canvas"
      style={{ border: "1px solid black" }}
    ></canvas>
  );
}
