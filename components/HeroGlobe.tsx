"use client";
import { useEffect, useRef } from "react";
import { DIVISIONS } from "@/lib/content";

type P = { x: number; y: number; z: number };

// Rotating digital globe: a lattice of points joined by faint lines, with six
// brighter nodes (one per division) linked to a glowing core.
export default function HeroGlobe() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const pts: P[] = [];
    const N = 150;
    const ga = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      pts.push({ x: Math.cos(ga * i) * r, y, z: Math.sin(ga * i) * r });
    }
    const nodes = DIVISIONS.map((d, i) => {
      const a = (i / DIVISIONS.length) * Math.PI * 2;
      const y = i % 2 ? 0.45 : -0.4;
      const r = Math.sqrt(1 - y * y);
      return { d, x: Math.cos(a) * r, y, z: Math.sin(a) * r };
    });

    let w = 0, h = 0, raf = 0, t = 0;
    const mouse = { x: 0, y: 0 };
    const resize = () => {
      const r = cv.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width; h = r.height;
      cv.width = w * dpr; cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const rot = (p: P, ay: number, ax: number): P => {
      const cy = Math.cos(ay), sy = Math.sin(ay), cx = Math.cos(ax), sx = Math.sin(ax);
      const x1 = p.x * cy + p.z * sy, z1 = -p.x * sy + p.z * cy;
      return { x: x1, y: p.y * cx - z1 * sx, z: p.y * sx + z1 * cx };
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const R = Math.min(w, h) * 0.33, cx = w / 2, cy = h / 2;
      const ay = t * 0.0035 + mouse.x * 0.5, ax = -0.28 + mouse.y * 0.3;
      const proj = pts.map((p) => rot(p, ay, ax));
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 1.5);
      g.addColorStop(0, "rgba(79,123,255,.32)");
      g.addColorStop(0.5, "rgba(139,92,255,.10)");
      g.addColorStop(1, "rgba(10,16,48,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      ctx.lineWidth = 1;
      for (let i = 0; i < proj.length; i++) {
        for (let j = i + 1; j < proj.length; j++) {
          const a = proj[i], b = proj[j];
          const d = (a.x - b.x) ** 2 + (a.y - b.y) ** 2 + (a.z - b.z) ** 2;
          if (d < 0.2 && a.z + b.z > -0.4) {
            ctx.strokeStyle = `rgba(120,170,255,${(0.22 * (1 - d / 0.2) * ((a.z + b.z + 2) / 4)).toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(cx + a.x * R, cy + a.y * R);
            ctx.lineTo(cx + b.x * R, cy + b.y * R);
            ctx.stroke();
          }
        }
      }
      for (const p of proj) {
        const s = (p.z + 1.4) / 2.4;
        ctx.fillStyle = `rgba(190,215,255,${(0.15 + 0.6 * s).toFixed(2)})`;
        ctx.beginPath();
        ctx.arc(cx + p.x * R, cy + p.y * R, 0.8 + 1.4 * s, 0, 7);
        ctx.fill();
      }
      // division nodes
      const pulse = 0.5 + 0.5 * Math.sin(t * 0.05);
      for (const n of nodes) {
        const p = rot(n, ay, ax);
        const px = cx + p.x * R * 1.12, py = cy + p.y * R * 1.12;
        const front = p.z > -0.2;
        ctx.globalAlpha = front ? 1 : 0.35;
        const lg = ctx.createLinearGradient(cx, cy, px, py);
        lg.addColorStop(0, "rgba(255,255,255,.0)");
        lg.addColorStop(1, n.d.hue + "aa");
        ctx.strokeStyle = lg;
        ctx.lineWidth = 1.2;
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(px, py); ctx.stroke();
        const halo = ctx.createRadialGradient(px, py, 0, px, py, 26);
        halo.addColorStop(0, n.d.hue + "88");
        halo.addColorStop(1, n.d.hue + "00");
        ctx.fillStyle = halo;
        ctx.beginPath(); ctx.arc(px, py, 26 + pulse * 5, 0, 7); ctx.fill();
        ctx.fillStyle = n.d.hue;
        ctx.beginPath(); ctx.arc(px, py, 5.5, 0, 7); ctx.fill();
        ctx.fillStyle = "#fff";
        ctx.beginPath(); ctx.arc(px, py, 2, 0, 7); ctx.fill();
        if (front) {
          ctx.font = "600 11px var(--text), system-ui, sans-serif";
          ctx.fillStyle = "rgba(235,242,255,.92)";
          ctx.textAlign = p.x >= 0 ? "left" : "right";
          ctx.fillText(n.d.short, px + (p.x >= 0 ? 12 : -12), py + 4);
        }
        ctx.globalAlpha = 1;
      }
      // core
      const core = ctx.createRadialGradient(cx, cy, 0, cx, cy, 34 + pulse * 6);
      core.addColorStop(0, "rgba(255,255,255,.95)");
      core.addColorStop(0.3, "rgba(120,200,255,.7)");
      core.addColorStop(1, "rgba(79,123,255,0)");
      ctx.fillStyle = core;
      ctx.beginPath(); ctx.arc(cx, cy, 40 + pulse * 6, 0, 7); ctx.fill();
    };

    const loop = () => { t++; draw(); raf = requestAnimationFrame(loop); };
    const onMove = (e: PointerEvent) => {
      const r = cv.getBoundingClientRect();
      mouse.x = ((e.clientX - r.left) / r.width - 0.5) * 2;
      mouse.y = ((e.clientY - r.top) / r.height - 0.5) * 2;
    };
    resize();
    if (reduce) { t = 40; draw(); } else { raf = requestAnimationFrame(loop); }
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); window.removeEventListener("pointermove", onMove); };
  }, []);

  return <canvas ref={ref} className="globe" role="img" aria-label="Rotating network globe linking the six YUGTI divisions" />;
}
