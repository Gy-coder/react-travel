import { useEffect } from "react";

let observer: IntersectionObserver | null = null;

const useObserverHook = (
  ele: HTMLElement,
  callback: Function,
  watch: Array<any> = []
) => {
  useEffect(() => {
    observer = new IntersectionObserver((entries) => {
      callback?.(entries);
    });
    observer.observe(ele);
    return () => {
      if (observer) {
        observer.unobserve(ele);
        observer.disconnect();
      }
    };
  }, watch);
};

export default useObserverHook;
