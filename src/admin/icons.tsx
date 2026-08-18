export function IconOverview({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 4h7v7H4V4Zm9 0h7v7h-7V4ZM4 13h7v7H4v-7Zm9 0h7v7h-7v-7Z" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function IconVideo({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="6" width="13" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M16 10.5 21 8v8l-5-2.5v-3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

export function IconAudio({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M9 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 15V5l8-2v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M20 13a3 3 0 1 1-3 3" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function IconAnnounce({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 11v2a3 3 0 0 0 3 3h1l2 3V8H7a3 3 0 0 0-3 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M10 8.5 19 5v14l-9-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

export function IconGallery({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3.5" y="5" width="17" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="m7 15 3.2-3.4 2.4 2.5L16 11l3.5 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="8.5" cy="9" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function IconTeam({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 18.5c.6-2.8 2.6-4.5 5-4.5s4.4 1.7 5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="17" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M16.2 14.2c1.9.3 3.4 1.6 3.8 4.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconExternal({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M14 5h5v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M19 5 11 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M17 13.5V18a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 4 18V8A1.5 1.5 0 0 1 5.5 6.5H10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
