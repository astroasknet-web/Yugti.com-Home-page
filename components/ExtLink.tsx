import type { ReactNode } from "react";

// Every division link opens in a new tab. noopener/noreferrer stop the new page
// from reaching back into this one through window.opener.
export default function ExtLink({ href, className, children, label }: { href: string; className?: string; children: ReactNode; label?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} aria-label={label ? `${label} (opens in a new tab)` : undefined}>
      {children}
    </a>
  );
}
