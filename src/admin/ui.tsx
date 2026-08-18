import type { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

const inputBase =
  "w-full rounded-lg border border-[#d8dbe4] bg-white px-3.5 py-2.5 font-sans text-[14px] text-[#1a1b20] outline-none transition-shadow placeholder:text-[#9aa0b4] focus:border-[#001a4d] focus:ring-2 focus:ring-[rgba(0,26,77,0.12)] disabled:bg-[#f5f6fa] disabled:text-[#757682]";

export const fileInputClass =
  "w-full rounded-lg border border-dashed border-[#c8cbd6] bg-[#fafbfe] px-4 py-4 font-sans text-[13px] text-[#444650] file:mr-3 file:rounded-md file:border-0 file:bg-[#001a4d] file:px-3.5 file:py-1.5 file:font-sans file:text-[12px] file:font-semibold file:text-white hover:border-[#001a4d]/40 hover:file:bg-[#002a7a]";

export function Field({ label, hint, children }: { label: string; hint?: string; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-sans text-[12px] font-semibold tracking-[0.2px] text-[#2a3350]">{label}</span>
      {children}
      {hint && <span className="font-sans text-[12px] leading-relaxed text-[#7a8194]">{hint}</span>}
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
  size?: "md" | "sm";
};

export function Button({ variant = "primary", size = "md", className = "", ...props }: ButtonProps) {
  const styles = {
    primary: "bg-[#001a4d] text-white hover:bg-[#002a7a] disabled:bg-[#8a92a8]",
    ghost: "border border-[#d8dbe4] bg-white text-[#001a4d] hover:border-[#001a4d]/50 hover:bg-[#f5f6fa]",
    danger: "border border-[#ead0ce] bg-white text-[#b3261e] hover:bg-[#fdf3f2]",
  }[variant];

  const sizing = size === "sm" ? "px-3 py-1.5 text-[12px]" : "px-4 py-2.5 text-[13px]";

  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center gap-2 rounded-lg font-sans font-semibold tracking-[0.2px] transition-colors disabled:cursor-not-allowed disabled:opacity-70 ${sizing} ${styles} ${className}`}
    />
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-[12px] border border-[#e6e8ef] bg-white p-5 shadow-[0_1px_2px_rgba(16,24,40,0.04)] md:p-6 ${className}`}>
      {children}
    </div>
  );
}

export function Panel({
  title,
  description,
  children,
  className = "",
}: {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden rounded-[12px] border border-[#e6e8ef] bg-white shadow-[0_1px_2px_rgba(16,24,40,0.04)] ${className}`}>
      {(title || description) && (
        <div className="border-b border-[#eef0f5] px-5 py-4 md:px-6">
          {title && <h2 className="font-sans text-[14px] font-semibold tracking-[0.1px] text-[#001a4d]">{title}</h2>}
          {description && <p className="mt-1 font-sans text-[13px] leading-relaxed text-[#7a8194]">{description}</p>}
        </div>
      )}
      <div className="p-5 md:p-6">{children}</div>
    </div>
  );
}

export function SectionHeader({
  eyebrow = "Console",
  title,
  description,
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="mb-1.5 font-sans text-[11px] font-semibold uppercase tracking-[1.8px] text-[#8a6d00]">{eyebrow}</p>
        <h1 className="font-sans text-[26px] font-semibold tracking-[-0.4px] text-[#001a4d] md:text-[30px]">{title}</h1>
        {description && (
          <p className="mt-2 max-w-[640px] font-sans text-[14px] leading-relaxed text-[#5d6478]">{description}</p>
        )}
      </div>
      {action}
    </div>
  );
}

export function Banner({ tone, children }: { tone: "error" | "success" | "info"; children: ReactNode }) {
  const styles = {
    error: "border-[#ead0ce] bg-[#fdf6f5] text-[#b3261e]",
    success: "border-[#c5e4d1] bg-[#f4fbf6] text-[#1c6b38]",
    info: "border-[#ead9a0] bg-[#fff9e8] text-[#735c00]",
  }[tone];

  return (
    <div
      className={`mb-5 rounded-lg border px-4 py-3 font-sans text-[13px] leading-relaxed ${styles}`}
      role="status"
    >
      {children}
    </div>
  );
}

export function Badge({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "live" | "gold" }) {
  const styles = {
    neutral: "bg-[#f1f2f7] text-[#4b5163]",
    live: "bg-[#e74c3c] text-white",
    gold: "bg-[#fff4c2] text-[#735c00]",
  }[tone];

  return (
    <span className={`inline-flex items-center rounded-md px-2 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-[0.8px] ${styles}`}>
      {children}
    </span>
  );
}

export function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-[12px] border border-dashed border-[#d4d7e1] bg-white px-6 py-14 text-center">
      <p className="font-sans text-[15px] font-semibold text-[#001a4d]">{title}</p>
      <p className="mx-auto mt-2 max-w-[420px] font-sans text-[13px] leading-relaxed text-[#7a8194]">{description}</p>
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
        className={`relative h-5 w-9 shrink-0 rounded-full transition-colors ${checked ? "bg-[#001a4d]" : "bg-[#c5c8d4]"}`}
      >
        <span
          className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-all ${checked ? "left-[18px]" : "left-0.5"}`}
        />
      </span>
      <span className="font-sans text-[13px] text-[#444650]">{label}</span>
    </label>
  );
}

export function LoadingLine({ children }: { children: ReactNode }) {
  return <p className="font-sans text-[13px] text-[#7a8194]">{children}</p>;
}
