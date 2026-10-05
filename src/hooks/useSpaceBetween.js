import { useLayoutEffect, useState } from 'react';

// Tracks the empty strip between two elements stacked inside a container, as
// fractions of the container's height (0 = top edge, 1 = bottom edge).
// `padding` (px) is kept clear next to each element.
const useSpaceBetween = (containerRef, aboveRef, belowRef, padding = 0) => {
  const [space, setSpace] = useState(null);

  useLayoutEffect(() => {
    const measure = () => {
      const container = containerRef.current.getBoundingClientRect();
      const above = aboveRef.current.getBoundingClientRect();
      const below = belowRef.current.getBoundingClientRect();

      setSpace({
        top: (above.bottom + padding - container.top) / container.height,
        bottom: (below.top - padding - container.top) / container.height,
      });
    };

    measure();
    const observer = new ResizeObserver(measure);
    [containerRef, aboveRef, belowRef].forEach((ref) => observer.observe(ref.current));

    return () => observer.disconnect();
  }, [containerRef, aboveRef, belowRef, padding]);

  return space;
};

export default useSpaceBetween;
