export function Mark({ size = 34 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden>
      <defs>
        <linearGradient id="ym" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#28d7ff" />
          <stop offset=".55" stopColor="#4f7bff" />
          <stop offset="1" stopColor="#8b5cff" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill="#0a1030" />
      <path d="M9.5 9.5 20 22l10.5-12.5M20 22v9" fill="none" stroke="url(#ym)" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="31" cy="31" r="2.4" fill="#28d7ff" />
    </svg>
  );
}

export function Logo() {
  return (
    <span className="logo">
      <Mark />
      <span className="logo-word">YUGTI</span>
    </span>
  );
}
