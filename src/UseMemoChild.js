import { useEffect } from "react";

let renderCount = 0;
export default function UseMemoChild() {
  useEffect(() => {
    console.log("Hello from child !");
    renderCount++;
  });

  return <>Render Count : {renderCount}</>;
}
