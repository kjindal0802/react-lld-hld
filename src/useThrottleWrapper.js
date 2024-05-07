import { useCallback, useRef } from "react";

export default function useThrottle(cbFn, delay) {
  const timerRef = useRef(false);

  const debounce = useCallback(() => {
    if (!timerRef.current) {
      cbFn();
      timerRef.current = true;
      setTimeout(() => {
        timerRef.current = false;
      }, delay);
    }
  }, [cbFn, delay]);

  return debounce;
}
