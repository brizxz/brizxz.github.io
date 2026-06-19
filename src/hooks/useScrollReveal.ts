import { useEffect, useRef } from "react";

/**
 * 當元素捲入畫面時加上 `reveal-visible`,做出淡入上滑的進場效果。
 * 用法:<div ref={useScrollReveal()} className="reveal">…</div>
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // 不支援 IntersectionObserver 時直接顯示
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("reveal-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
