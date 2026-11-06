import { AUDIENCES, CONTACT_EMAIL, DIVISIONS, STRENGTHS } from "@/lib/content";
import ExtLink from "@/components/ExtLink";
import Footer from "@/components/Footer";
import Fx from "@/components/Fx";
import HeroGlobe from "@/components/HeroGlobe";
import Nav from "@/components/Nav";
import Orbit from "@/components/Orbit";
import { Art, Glyph } from "@/components/Visual";

const hue = (h: string, h2: string) => ({ ["--h" as string]: h, ["--h2" as string]: h2 });

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        {/* HERO */}
        <section className="hero" id="top">
          <div className="hero-bg" aria-hidden />
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="pill"><i /> Connecting Intelligence, Technology &amp; Opportunities</p>
              <h1>The Future Begins with <span className="grad">Yugti.</span></h1>
              <p className="lead">From Artificial Intelligence and enterprise technology to global education, career opportunities and digital learning, YUGTI brings multiple possibilities together under one innovative ecosystem.</p>
              <div className="cta-row">
                <a className="btn" href="#divisions">Explore Our Ecosystem <span aria-hidden>→</span></a>
                <a className="btn ghost" href="#about">Discover Yugti</a>
              </div>
              <ul className="facts" aria-label="At a glance">
                <li><b>6</b><span>specialised divisions</span></li>
                <li><b>6</b><span>independent websites</span></li>
                <li><b>1</b><span>connected ecosystem</span></li>
              </ul>
            </div>
            <div className="hero-vis"><HeroGlobe /></div>
          </div>
          <a className="scroll" href="#divisions" aria-label="Scroll to divisions"><i /></a>
        </section>

        {/* DIVISIONS */}
        <section className="sec light" id="divisions">
          <div className="wrap">
            <div className="head rv">
              <p className="kicker">OUR BUSINESS ECOSYSTEM</p>
              <h2>Six specialised businesses. <span className="grad">One group.</span></h2>
              <p className="sub">Each division runs on its own website, built for its own audience. Select a card to visit it in a new tab.</p>
            </div>
            <div className="bento">
              {DIVISIONS.map((d, i) => (
                <ExtLink key={d.id} href={d.url} label={d.name} className={`card c-${d.id} rv`}>
                  <span className="card-in" style={{ ...hue(d.hue, d.hue2), transitionDelay: `${(i % 3) * 70}ms` } as React.CSSProperties}>
                    <span className="card-top">
                      <span className="ico"><Glyph id={d.id} size={24} /></span>
                      <span className="host">{d.host} ↗</span>
                    </span>
                    <span className="card-art"><Art id={d.id} /></span>
                    <span className="card-txt">
                      <small>{d.category}</small>
                      <strong>{d.name}</strong>
                      <span className="blurb">{d.blurb}</span>
                      <span className="chips sm">{d.services.slice(0, 4).map((s) => <span key={s}>{s}</span>)}{d.services.length > 4 && <span>+{d.services.length - 4} more</span>}</span>
                      <span className="explore">Explore <b aria-hidden>→</b></span>
                    </span>
                  </span>
                </ExtLink>
              ))}
            </div>
          </div>
        </section>

        {/* ORBIT */}
        <section className="sec dark" id="ecosystem">
          <div className="wrap">
            <div className="head rv center">
              <p className="kicker">INTERACTIVE ECOSYSTEM</p>
              <h2>One Ecosystem. Six Specialised Divisions. <span className="grad">Endless Possibilities.</span></h2>
            </div>
            <div className="rv"><Orbit /></div>
          </div>
        </section>

        {/* WHY */}
        <section className="sec light" id="about">
          <div className="wrap">
            <div className="head rv">
              <p className="kicker">WHY YUGTI</p>
              <h2>A group built to connect <span className="grad">people and possibilities.</span></h2>
              <p className="sub">What sets the group apart is how its divisions work together.</p>
            </div>
            <div className="why">
              {STRENGTHS.map((s, i) => (
                <div key={s.t} className={"why-i rv" + (i === 0 ? " big" : "")}>
                  <span className="n">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VISION */}
        <section className="sec dark vision" id="vision">
          <div className="vision-bg" aria-hidden>
            <svg viewBox="0 0 800 800">
              {[120, 200, 280, 360].map((r) => <circle key={r} cx="400" cy="400" r={r} className="vr" />)}
              {DIVISIONS.map((d, i) => {
                const a = (i / 6) * Math.PI * 2, r = [200, 280, 360][i % 3];
                return <circle key={d.id} cx={400 + Math.cos(a) * r} cy={400 + Math.sin(a) * r} r="6" fill={d.hue} className="pulse" style={{ animationDelay: `${i * 0.4}s` }} />;
              })}
            </svg>
          </div>
          <div className="wrap center rv">
            <p className="kicker">OUR VISION</p>
            <h2>Building a Smarter, <span className="grad">More Connected Future.</span></h2>
            <p className="lead mid">Our vision is to create an integrated ecosystem where technology, artificial intelligence, education and opportunities work together to empower individuals, organisations and businesses worldwide.</p>
          </div>
        </section>

        {/* AUDIENCE */}
        <section className="sec light">
          <div className="wrap">
            <div className="head rv">
              <p className="kicker">WHO WE SERVE</p>
              <h2>Built for people at every <span className="grad">stage.</span></h2>
            </div>
            <div className="aud">
              {AUDIENCES.map((a) => (
                <div key={a.id} className="aud-i rv">
                  <span className="aud-ico"><Glyph id={a.id} size={30} /></span>
                  <h3>{a.t}</h3>
                  <p>{a.d}</p>
                  <small>{a.go}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta">
          <div className="wrap center rv">
            <h2>Your Next Opportunity <span className="grad">Starts Here.</span></h2>
            <p className="lead mid">Whether you are looking to learn, study abroad, build intelligent technology, develop your career or transform your business, discover how YUGTI can help.</p>
            <div className="cta-row c">
              <a className="btn" href="#divisions">Explore Our Divisions</a>
              <a className="btn ghost" href={`mailto:${CONTACT_EMAIL}`}>Contact Us</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Fx />
    </>
  );
}
