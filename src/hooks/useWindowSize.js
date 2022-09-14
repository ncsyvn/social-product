/* eslint-disable react-hooks/exhaustive-deps */
import { debounce } from "lodash";
import { useCallback, useEffect, useState } from "react";

const useWindowSize = () => {
  const [width, setWidth] = useState(typeof window === 'undefined' ? 1366 : window.innerWidth);

  const windowListener = useCallback(
    debounce(() => {
      if (window) setWidth(window.innerWidth);
    }, 50),
    []
  );

  useEffect(() => {
    if (window) {
      setWidth(window.innerWidth);
      window.addEventListener("resize", windowListener);
    }
    return () => window.removeEventListener("resize", windowListener);
  }, []);

  return width;
};

export default useWindowSize;