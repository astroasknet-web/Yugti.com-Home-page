"use client";
import { useState } from "react";
import { DIVISIONS } from "@/lib/content";
import ExtLink from "./ExtLink";
import { Glyph } from "./Visual";
import { Mark } from "./Logo";

// Six divisions around a central YUGTI identity. Hover or keyboard focus lights a
// node, draws its line to the centre and shows its services. Click opens the site.
export default function Orbit() {
  const [active, setActive] = useState<string | null>(null);
  const cur = DIVISIONS.find((d) => d.id === active) ?? null;
  const R = 38; // percent radius

  return (
    <div className="orbit-wrap">
      <div className="orbit" onMouseLeave={() => setActive(null)}>
        <svg className="orbit-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
          <circle cx="50" cy="50" r={R} className="ring" />
          <circle cx="50" cy="50" r={R * 0.62} className="ring ring2" />
          {DIVISIONS.map((d, i) => {
            const a = (i / DIVISIONS.length) * Math.PI * 2 - Math.PI / 2;
            const x = 50 + Math.cos(a) * R, y = 50 + Math.sin(a) * R;
            const on = active === d.id;
            return <line key={d.id} x1="50" y1="50" x2={x} y2={y} className={on ? "ln on" : "ln"} style={{ stroke: on ? d.hue : undefined }} />;
          })}
        </svg>
        <div className="orbit-core"><Mark size={46} /><b>YUGTI</b></div>
        {DIVISIONS.map((d, i) => {
          const a = (i / DIVISIONS.length) * Math.PI * 2 - Math.PI / 2;
          const x = 50 + Math.cos(a) * R, y = 50 + Math.sin(a) * R;
          return (
            <ExtLink
              key={d.id}
              href={d.url}
              label={d.name}
              className={"onode" + (active === d.id ? " on" : "") + (active && active !== d.id ? " dim" : "")}
            >
              <span
                className="onode-in"
                style={{ left: `${x}%`, top: `${y}%`, ["--h" as string]: d.hue, ["--h2" as string]: d.hue2 }}
                onMouseEnter={() => setActive(d.id)}
                onFocus={() => setActive(d.id)}
                onBlur={() => setActive(null)}
              >
                <i><Glyph id={d.id} size={22} /></i>
                <em>{d.name.replace("YUGTI ", "")}</em>
              </span>
            </ExtLink>
          );
        })}
      </div>

      <div className="orbit-panel" aria-live="polite" style={cur ? { ["--h" as string]: cur.hue, ["--h2" as string]: cur.hue2 } : undefined}>
        {cur ? (
          <>
            <p className="kicker">{cur.category}</p>
            <h3>{cur.name}</h3>
            <p>{cur.blurb}</p>
            <ul className="chips">{cur.services.map((s) => <li key={s}>{s}</li>)}</ul>
            <span className="go">Opens {cur.host} in a new tab ↗</span>
          </>
        ) : (
          <>
            <p className="kicker">HOVER A DIVISION</p>
            <h3>Six doors, one group.</h3>
            <p>Move over any division to see what it does and which services it offers. Select it to visit its own website in a new tab.</p>
          </>
        )}
      </div>
    </div>
  );
}
