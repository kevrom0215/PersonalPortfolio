import { useState, useEffect, useRef, RefObject } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useIntersectionObserver<T extends Element>({
  threshold = 0,
  root = null,
  rootMargin = '0px',
  triggerOnce = false,
}: UseIntersectionObserverProps = {}) {
  const [inView, setInView] = useState(false);
  const ref = useRef<T | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Disconnect previous observer if exists
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        setInView(isIntersecting);

        // Unobserve once if triggerOnce is true and element is visible
        if (triggerOnce && isIntersecting && ref.current) {
          observer.unobserve(ref.current);
        }
      },
      {
        root,
        rootMargin,
        threshold,
      }
    );

    observerRef.current = observer;

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [root, rootMargin, threshold, triggerOnce]);

  return { ref, inView };
}
