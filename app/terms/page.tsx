import type { Metadata } from "next";
import Legal from "@/components/Legal";

export const metadata: Metadata = { title: "Terms of Use" };

export default function Terms() {
  return (
    <Legal kicker="TERMS" title="Terms of Use">
      <p>This website introduces the YUGTI group and links to its divisions. The information is general and may change.</p>
      <h2>Division websites</h2>
      <p>Services are provided by each division on its own website, under that website&apos;s own terms.</p>
      <h2>Content</h2>
      <p>The YUGTI name, logo and site content belong to YUGTI. Please do not reuse them without permission.</p>
    </Legal>
  );
}
