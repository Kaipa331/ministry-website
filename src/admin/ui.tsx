import type { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

const inputBase =
  "w-full rounded-xl border border-[#d9dae4] bg-white px-4 py-2.5 font-sans text-[14px] text-[#1a1b20] outline-none transition-colors placeholder:text-[#a4a5b2] focus:border-[#001a4d] focus:ring-2 focus:ring-[rgba(0,26,77,0.12)] disabled:bg-[#f4f3f9] disabled:text-[#757682]";

export function Field({ label, hint, children }: { label: string; hint?: string; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-sans text-[13px] font-semibold text-[#001a4d]">{label}</span>
      {children}
      {hint && <span className="font-sans text-[12px] text-[#757682]">{hint}</span>}
    </label>
  );
}

export function TextInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${inputBase} ${props.className ?? ""}`} />;
}

export function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`${inputBase} min-h-[96px] resize-y ${props.className ?? ""}`} />;
}

export function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={`${inputBase} ${props.className ?? ""}`} />;
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "danger";
};

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  const styles = {
    primary: "bg-[#001a4d] text-white hover:bg-[#002a7a] disabled:bg-[#8a92a8]",
    ghost: "border border-[#d9dae4] bg-white text-[#001a4d] hover:border-[#001a4d] hover:bg-[#f4f3f9]",
    danger: "border border-[#e6b3b3] bg-white text-[#b3261e] hover:bg-[#fdf3f2]",
  }[variant];

  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 font-sans text-[13px] font-bold tracking-[0.4px] transition-colors disabled:cursor-not-allowed disabled:opacity-70 ${styles} ${className}`}
    />
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl bg-white p-5 shadow-[0px_2px_16px_rgba(0,26,77,0.07)] md:p-6 ${className}`}>
      {children}
    </div>
  );
}

export function SectionHeader({ title, description, action }: { title: string; description?: string; action?: ReactNode }) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="font-heading text-[26px] font-bold text-[#001a4d] md:text-[32px]">{title}</h1>
        {description && <p className="mt-1 max-w-[620px] font-sans text-[14px] text-[#444650]">{description}</p>}
      </div>
      {action}
    </div>
  );
}

export function Banner({ tone, children }: { tone: "error" | "success" | "info"; children: ReactNode }) {
  const styles = {
    error: "border-[#e6b3b3] bg-[#fdf3f2] text-[#b3261e]",
    success: "border-[#b7dfc4] bg-[#f2fbf5] text-[#1c6b38]",
    info: "border-[rgba(255,215,0,0.5)] bg-[#fffcf0] text-[#735c00]",
  }[tone];

  return (
    <div className={`mb-5 rounded-xl border px-4 py-3 font-sans text-[13px] leading-relaxed ${styles}`} role="status">
      {children}
    </div>
  );
}

export function Badge({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "live" | "gold" }) {
  const styles = {
    neutral: "bg-[#f4f3f9] text-[#444650]",
    live: "bg-[#e74c3c] text-white",
    gold: "bg-[#fff4c2] text-[#735c00]",
  }[tone];

  return (
    <span className={`rounded-full px-2.5 py-0.5 font-sans text-[11px] font-bold tracking-[0.8px] uppercase ${styles}`}>
      {children}
    </span>
  );
}

export function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-[#c5c6d2] px-6 py-12 text-center">
      <p className="font-heading text-[18px] font-bold text-[#001a4d]">{title}</p>
      <p className="mx-auto mt-2 max-w-[420px] font-sans text-[14px] text-[#757682]">{description}</p>
    </div>
  );
}

export function Toggle({ checked, onChange, label }: { checked: boolean; onChange: (v: boolean) => void; label: string }) {
  return (
    <label className="flex cursor-pointer items-center gap-2.5">
      <span
        role="switch"
        aria-checked={checked}
        tabIndex={0}
        onClick={() => onChange(!checked)}
        onKeyDown={(e) => {
          if (e.key === " " || e.key === "Enter") {
            e.preventDefault();
            onChange(!checked);
          }
        }}
        className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${checked ? "bg-[#001a4d]" : "bg-[#c5c6d2]"}`}
      >
        <span
          className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all ${checked ? "left-[22px]" : "left-0.5"}`}
        />
      </span>
      <span className="font-sans text-[13px] text-[#444650]">{label}</span>
    </label>
  );
}
