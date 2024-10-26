import { useEffect, useRef } from "react";

export const useEventListener = <K extends keyof WindowEventMap>(
  eventType: K,
  callback: (e: WindowEventMap[K]) => void
) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);
  useEffect(() => {
    const handler = (e: WindowEventMap[K]) => callbackRef.current(e);

    window.addEventListener(eventType, handler);

    return () => window.removeEventListener(eventType, handler);
  }, [eventType]);
};
