import React, { useEffect, useState } from "react";

export default function App() {
  return (
    <MouseTracker
      render={({ x, y }) => (
        <div style={{position: 'absolute', top: y, left: x, cursor: 'pointer'}}>
          {x},{y}
        </div>
      )}
    />
  );
}

function MouseTracker(props) {
  const [coordinates, setCoordinates] = useState({
    x: null,
    y: null,
  });

  useEffect(() => {
    window.addEventListener("pointermove", handleCoordinates);

    return () => window.removeEventListener("pointermove", handleCoordinates);
  }, []);

  const handleCoordinates = ({ x, y }) => {
    setCoordinates({ x, y });
  };

  const { render } = props;

  return render(coordinates);
}
