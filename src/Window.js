import { useEffect, useState } from "react";

export default function Window() {
  const [size, setSize] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setSize(window.innerWidth);
    });
    // return () => {
    //   window.removeEventListener("resize", setSize(window.innerWidth));
    // };
  }, []);
  return (
    <div>
      <p>Window Width is {size}</p>
    </div>
  );
}
