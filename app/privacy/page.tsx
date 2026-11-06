import type { Metadata } from "next";
import Legal from "@/components/Legal";
import { CONTACT_EMAIL } from "@/lib/content";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function Privacy() {
  return (
    <Legal kicker="PRIVACY" title="Privacy Policy">
      <p>This site is a gateway to the YUGTI divisions. It has no accounts and no forms, and it does not use advertising trackers.</p>
      <h2>Contacting us</h2>
      <p>If you email {CONTACT_EMAIL}, we use your message only to reply. We do not sell your details.</p>
      <h2>Other websites</h2>
      <p>Each division runs its own website and has its own privacy practices. Links to them open in a new tab, and this policy does not cover them.</p>
    </Legal>
  );
}
