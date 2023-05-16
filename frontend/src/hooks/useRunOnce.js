import { useEffect, useRef } from 'react';

export function useRunOnce(callback) {
  const hasRun = useRef(false);

  useEffect(() => {
    if (!hasRun.current) {
      callback();
      hasRun.current = true;
    }
  }, [callback]);
}