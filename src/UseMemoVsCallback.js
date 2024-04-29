import { useMemo, useCallback } from "react";

export default function UseMemoVsCallback() {
  function doSomething() {
    return "I am logging the value";
  }

  const memo = useMemo(doSomething, []);
  const callback = useCallback(doSomething, []);

  console.log(memo, callback); // memo will print the string, while callback will print the complete function

  return (
    <div>
      <h1>UseMemo Vs UseCallback</h1>
    </div>
  );
}
