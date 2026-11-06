// Small animated SVG illustration per division. Pure SVG + CSS, no images.
export function Glyph({ id, size = 24 }: { id: string; size?: number }) {
  const p = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  switch (id) {
    case "ai": return <svg {...p}><circle cx="12" cy="12" r="3" /><circle cx="4.5" cy="6" r="1.6" /><circle cx="19.5" cy="6" r="1.6" /><circle cx="4.5" cy="18" r="1.6" /><circle cx="19.5" cy="18" r="1.6" /><path d="M9.7 10.4 5.8 7M14.3 10.4 18.2 7M9.7 13.6 5.8 17M14.3 13.6 18.2 17" /></svg>;
    case "overseas": return <svg {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></svg>;
    case "learning": return <svg {...p}><path d="m2.5 9 9.5-5 9.5 5-9.5 5z" /><path d="M6.5 11.5V16c0 1.4 2.7 3 5.5 3s5.5-1.6 5.5-3v-4.5M21.5 9v5.5" /></svg>;
    case "jobs": return <svg {...p}><rect x="3" y="7.5" width="18" height="12" rx="2.5" /><path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5M3 13h18" /></svg>;
    case "technology": return <svg {...p}><path d="m8 8-4.5 4L8 16M16 8l4.5 4L16 16M13.5 5 10.5 19" /></svg>;
    case "math": return <svg {...p}><path d="M5 4.5h11a3 3 0 0 1 3 3v12H8a3 3 0 0 1-3-3z" /><path d="M9 9h6M9 13h2.5M13.2 12.2l2.6 2.6m0-2.6-2.6 2.6" /></svg>;
    case "students": return <svg {...p}><circle cx="12" cy="8" r="3.5" /><path d="M5 20c.8-4 3.4-6 7-6s6.2 2 7 6" /></svg>;
    case "seekers": return <svg {...p}><path d="M4 18 10 11l4 4 6-8" /><path d="M15 7h5v5" /></svg>;
    case "business": return <svg {...p}><path d="M4 20V8l8-4 8 4v12M9 20v-6h6v6M8 11h.01M12 11h.01M16 11h.01" /></svg>;
    case "institutions": return <svg {...p}><path d="M3 9.5 12 5l9 4.5M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20h18" /></svg>;
    default: return null;
  }
}

export function Art({ id }: { id: string }) {
  const c = { fill: "none", stroke: "var(--h)", strokeWidth: 1.3, strokeLinecap: "round" as const };
  switch (id) {
    case "ai":
      return (
        <svg className="art" viewBox="0 0 220 110" aria-hidden>
          {[[30, 25, 85, 55], [30, 85, 85, 55], [85, 55, 140, 28], [85, 55, 140, 82], [140, 28, 195, 55], [140, 82, 195, 55]].map((l, i) => (
            <line key={i} x1={l[0]} y1={l[1]} x2={l[2]} y2={l[3]} {...c} opacity=".45" className="dash" style={{ animationDelay: `${i * 0.25}s` }} />
          ))}
          {[[30, 25], [30, 85], [85, 55], [140, 28], [140, 82], [195, 55]].map((n, i) => (
            <circle key={i} cx={n[0]} cy={n[1]} r={i === 2 ? 7 : 4.5} fill="var(--h)" className="pulse" style={{ animationDelay: `${i * 0.3}s` }} />
          ))}
        </svg>
      );
    case "overseas":
      return (
        <svg className="art" viewBox="0 0 220 110" aria-hidden>
          <g className="spin" style={{ transformOrigin: "110px 55px" }}>
            <circle cx="110" cy="55" r="44" {...c} />
            <ellipse cx="110" cy="55" rx="18" ry="44" {...c} opacity=".6" />
            <ellipse cx="110" cy="55" rx="44" ry="16" {...c} opacity=".5" />
            <path d="M66 55h88M110 11v88" {...c} opacity=".4" />
          </g>
          <circle cx="62" cy="30" r="4" fill="var(--h2)" className="pulse" />
          <circle cx="160" cy="76" r="4" fill="var(--h2)" className="pulse" style={{ animationDelay: ".6s" }} />
          <path d="M62 30Q110 -6 160 76" {...c} strokeDasharray="3 4" className="dash" />
        </svg>
      );
    case "learning":
      return (
        <svg className="art" viewBox="0 0 220 110" aria-hidden>
          <rect x="38" y="14" width="144" height="80" rx="9" {...c} />
          <path d="M52 78 82 54l24 14 34-34 28 20" {...c} strokeWidth="2" className="dash" />
          <circle cx="82" cy="54" r="4" fill="var(--h)" className="pulse" />
          <circle cx="140" cy="34" r="4" fill="var(--h2)" className="pulse" style={{ animationDelay: ".5s" }} />
          <path d="M92 100h36" {...c} />
        </svg>
      );
    case "jobs":
      return (
        <svg className="art" viewBox="0 0 220 110" aria-hidden>
          <path d="M20 90C60 90 70 60 110 56s60-30 90-40" {...c} strokeWidth="2" className="dash" />
          {[[20, 90], [70, 74], [110, 56], [160, 36], [200, 16]].map((n, i) => (
            <g key={i}><circle cx={n[0]} cy={n[1]} r="7" fill="none" stroke="var(--h)" strokeWidth="1.3" opacity=".5" className="pulse" style={{ animationDelay: `${i * 0.3}s` }} /><circle cx={n[0]} cy={n[1]} r="3.5" fill="var(--h)" /></g>
          ))}
        </svg>
      );
    case "technology":
      return (
        <svg className="art" viewBox="0 0 220 110" aria-hidden>
          <rect x="24" y="14" width="124" height="82" rx="8" {...c} />
          <path d="M24 30h124" {...c} opacity=".5" />
          <path d="M40 48h34M40 62h58M40 76h26" {...c} strokeWidth="2.2" className="dash" />
          <path d="M82 48h30M106 62h26" stroke="var(--h2)" strokeWidth="2.2" strokeLinecap="round" opacity=".8" className="dash" style={{ animationDelay: ".4s" }} />
          <rect x="164" y="34" width="34" height="60" rx="6" {...c} />
          <circle cx="181" cy="86" r="2" fill="var(--h)" className="pulse" />
        </svg>
      );
    case "math":
      return (
        <svg className="art" viewBox="0 0 220 110" aria-hidden>
          <path d="M30 18h60a8 8 0 0 1 8 8v66H38a8 8 0 0 1-8-8z" {...c} />
          <path d="M98 26a8 8 0 0 1 8-8h60v66a8 8 0 0 1-8 8H98" {...c} />
          <text x="46" y="62" fontSize="22" fill="var(--h)" fontFamily="Georgia,serif" className="pulse">∑</text>
          <text x="118" y="48" fontSize="14" fill="var(--h2)" fontFamily="Georgia,serif">π r²</text>
          <text x="118" y="72" fontSize="14" fill="var(--h)" fontFamily="Georgia,serif" opacity=".8">∫ f(x)</text>
        </svg>
      );
    default: return null;
  }
}
