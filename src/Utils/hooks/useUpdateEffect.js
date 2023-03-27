import { useEffect, useRef } from 'react';

export default function useUpdateEffect(effect, dependencies = [], cleanup) {
  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      effect();
    }
    return cleanup;
  }, dependencies);
}
