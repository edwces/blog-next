import { useEffect, useState } from "react";
import { throttle } from "../utils/function.utils";

type WindowSize = {
  width: number;
  height: number;
};

// Returns {width: 0, height: 0} in ssr mode
export const useWindowSize = (): WindowSize => {
  const [size, setSize] = useState<WindowSize>({ width: 0, height: 0 });

  useEffect(() => {
    const onWindowResize = throttle(() => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }, 250);

    onWindowResize();
    window.addEventListener("resize", onWindowResize);

    return () => window.removeEventListener("resize", onWindowResize);
  }, []);

  return size;
};
