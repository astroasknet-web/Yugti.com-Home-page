import type { ReactNode } from "react";
import Footer from "./Footer";
import Nav from "./Nav";

export default function Legal({ kicker, title, children }: { kicker: string; title: string; children: ReactNode }) {
  return (
    <>
      <Nav />
      <main id="main-content" className="legal-page wrap">
        <p className="kicker">{kicker}</p>
        <h1>{title}</h1>
        {children}
      </main>
      <Footer />
    </>
  );
}
