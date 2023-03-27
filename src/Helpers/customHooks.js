import { useEffect, useRef, useState } from 'react';

export const useMergeState = (initialState) => {
  const [state, setState] = useState(initialState);
  const setMergedState = (newState) => setState((prevState) => {
    const expectedState = Object.assign(prevState, newState);
    return { ...expectedState };
  });
  return [state, setMergedState];
};

export const useUpdateEffect = (effect, dependencies = [], cleanup) => {
  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      effect();
    }
    return cleanup;
  }, dependencies); // eslint-disable-line react-hooks/exhaustive-deps
};
