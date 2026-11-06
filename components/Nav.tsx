"use client";
import { useEffect, useState } from "react";
import { DIVISIONS, NAV } from "@/lib/content";
import ExtLink from "./ExtLink";
import { Glyph } from "./Visual";
import { Logo } from "./Logo";

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);

  useEffect(() => {
    const on = () => setSolid(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") { setMega(false); setOpen(false); } };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);

  const close = () => { setOpen(false); setMega(false); };

  return (
    <header className={"nav" + (solid ? " solid" : "")}>
      <div className="nav-in">
        <a href="#top" className="nav-logo" aria-label="YUGTI home" onClick={close}><Logo /></a>

        <nav className={"nav-links" + (open ? " open" : "")} aria-label="Primary">
          {NAV.map((n) =>
            n.mega ? (
              <div key={n.label} className="has-mega" onMouseEnter={() => setMega(true)} onMouseLeave={() => setMega(false)}>
                <a href={n.href} aria-haspopup="true" aria-expanded={mega} onClick={close}>{n.label} <span className="chev">▾</span></a>
                <div className={"mega" + (mega ? " show" : "")}>
                  <div className="mega-grid">
                    {DIVISIONS.map((d) => (
                      <ExtLink key={d.id} href={d.url} label={d.name} className="mega-item">
                        <span className="mi" style={{ ["--h" as string]: d.hue }}><Glyph id={d.id} size={20} /></span>
                        <span><b>{d.name}</b><small>{d.category}</small></span>
                      </ExtLink>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a key={n.label} href={n.href} onClick={close}>{n.label}</a>
            ),
          )}
          <a className="btn btn-sm nav-cta-m" href="#ecosystem" onClick={close}>Explore Yugti</a>
        </nav>

        <a className="btn btn-sm nav-cta" href="#ecosystem">Explore Yugti</a>
        <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}><i /><i /><i /></button>
      </div>
    </header>
  );
}
