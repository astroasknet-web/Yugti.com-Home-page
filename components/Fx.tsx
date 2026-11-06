"use client";
import { useEffect } from "react";

// Reveal-on-scroll for every .rv element, plus a pointer-follow glow on .card.
export default function Fx() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".rv");
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((e) => e.classList.add("in"));
    } else {
      const io = new IntersectionObserver(
        (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
        { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
      );
      els.forEach((e) => io.observe(e));
    }
    const mv = (e: PointerEvent) => {
      const c = (e.target as HTMLElement).closest<HTMLElement>(".card");
      if (!c) return;
      const r = c.getBoundingClientRect();
      c.style.setProperty("--mx", `${e.clientX - r.left}px`);
      c.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    document.addEventListener("pointermove", mv, { passive: true });
    return () => document.removeEventListener("pointermove", mv);
  }, []);
  return null;
}
