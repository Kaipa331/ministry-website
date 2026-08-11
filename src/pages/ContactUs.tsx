import { useEffect, useMemo, useState, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { site } from "../data/content";

const subjects = [
  "Ministry Inquiry",
  "Prayer Request",
  "Testimony",
  "General Question",
  "Partnership",
  "Donation",
] as const;

function intentToSubject(intent: string | null): (typeof subjects)[number] {
  switch (intent) {
    case "donate":
      return "Donation";
    case "partner":
      return "Partnership";
    case "help":
      return "General Question";
    case "prayer":
      return "Prayer Request";
    default:
      return "Ministry Inquiry";
  }
}

export default function ContactUs() {
  const [params] = useSearchParams();
  const intent = params.get("intent");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState<(typeof subjects)[number]>(intentToSubject(intent));
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    setSubject(intentToSubject(intent));
    if (intent === "donate") {
      setMessage("I would like to support the vision of Lord Overtone Ministry.");
    } else if (intent === "partner") {
      setMessage("I am interested in partnering with the ministry.");
    }
  }, [intent]);

  const heading = useMemo(() => {
    if (intent === "donate") return "Support the Vision";
    if (intent === "partner") return "Partner With Us";
    return "Divine Connection";
  }, [intent]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = "Name is required.";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "A valid email is required.";
    if (!message.trim() || message.trim().length < 10) next.message = "Please share a bit more (at least 10 characters).";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const body = `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="w-full bg-page">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-14 px-4 pb-20 pt-[100px] md:gap-20 md:px-16 md:pb-28 md:pt-[127px]">
        <div className="flex max-w-[672px] flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-[36px] font-bold tracking-[-1.28px] text-[#001a4d] md:text-[64px] md:leading-[1.1]">
            {heading}
          </h1>
          <p className="font-sans text-[15px] leading-relaxed text-[#444650] md:text-[18px]">
            Whether you have a testimony to share, a prayer request, or simply want to learn more about Lord Overtone
            Ministry, our doors and hearts are open.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
          <aside className="flex flex-col gap-5 md:col-span-4">
            <div className="rounded-xl border border-[rgba(197,198,210,0.2)] bg-[#f4f3f9] p-6 md:p-8">
              <svg width="28" height="22" viewBox="0 0 30 24" fill="none" aria-hidden>
                <path d="M3 0h24a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3Zm12 13.5L3 6v15h24V6L15 13.5Zm0-3L27 3H3l12 7.5Z" fill="#001A4D" />
              </svg>
              <p className="mt-3 font-heading text-[20px] font-bold text-[#001a4d] md:text-[24px]">Reach Out</p>
              <a href={`mailto:${site.email}`} className="mt-2 block font-sans text-[14px] text-[#444650] hover:text-[#001a4d] md:text-[16px]">
                {site.email}
              </a>
            </div>

            <div className="rounded-xl border border-[rgba(197,198,210,0.2)] bg-[#f4f3f9] p-6 md:p-8">
              <svg width="28" height="28" viewBox="0 0 30 30" fill="none" aria-hidden>
                <path d="M15 0a15 15 0 1 1 0 30 15 15 0 0 1 0-30Zm0 3a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm1.5 4.5h-3v9l6.45 6.45 2.1-2.1-5.55-5.55V7.5Z" fill="#001A4D" />
              </svg>
              <p className="mt-3 font-heading text-[20px] font-bold text-[#001a4d] md:text-[24px]">Office Hours</p>
              <p className="mt-2 font-sans text-[14px] text-[#444650] md:text-[16px]">{site.hours.weekdays}</p>
              <p className="font-sans text-[14px] text-[#444650] md:text-[16px]">{site.hours.sunday}</p>
            </div>

            <div className="relative overflow-hidden rounded-xl bg-[#001a4d] p-6 shadow-lg md:p-8">
              <p className="font-heading text-[20px] font-bold text-[#ffd700] md:text-[24px]">Watch Live</p>
              <p className="mt-2 mb-4 font-sans text-[14px] text-[#b3c5ff] md:text-[16px]">
                {site.organization} — teachings and live sessions on YouTube.
              </p>
              <a
                href={site.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full border-2 border-[#ffd700] px-6 py-2.5 font-sans text-[12px] font-bold tracking-[1.4px] text-[#ffd700] transition-colors hover:bg-[#ffd700] hover:text-[#001a4d] md:text-[14px]"
              >
                Open YouTube
              </a>
            </div>
          </aside>

          <div className="relative overflow-hidden rounded-3xl border border-[rgba(197,198,210,0.3)] bg-white/70 p-6 shadow-sm backdrop-blur-[10px] md:col-span-8 md:p-16">
            <div className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-[rgba(255,215,0,0.1)] blur-[32px]" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 size-64 rounded-full bg-[rgba(0,26,77,0.05)] blur-[32px]" />

            <h2 className="relative font-heading text-[24px] font-bold text-[#001a4d] md:text-[32px]">Send us a Message</h2>
            <p className="relative mt-2 font-sans text-[14px] text-[#757682]">
              Opens your email app so you can send us a note directly.
            </p>

            <form className="relative mt-8 flex flex-col gap-7" onSubmit={onSubmit} noValidate>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                <div className="flex flex-col gap-2">
                  <label htmlFor="full-name" className="px-1 font-sans text-[11px] font-semibold tracking-[0.6px] text-[#757682] md:text-[12px]">
                    FULL NAME
                  </label>
                  <input
                    id="full-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="border-b border-[#c5c6d2] bg-transparent px-3 py-3 font-sans text-[15px] text-[#1a1b20] outline-none focus:border-[#001a4d] md:text-[16px]"
                  />
                  {errors.name && <p className="px-1 text-[12px] text-[#c0392b]">{errors.name}</p>}
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="px-1 font-sans text-[11px] font-semibold tracking-[0.6px] text-[#757682] md:text-[12px]">
                    EMAIL ADDRESS
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="border-b border-[#c5c6d2] bg-transparent px-3 py-3 font-sans text-[15px] text-[#1a1b20] outline-none focus:border-[#001a4d] md:text-[16px]"
                  />
                  {errors.email && <p className="px-1 text-[12px] text-[#c0392b]">{errors.email}</p>}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="px-1 font-sans text-[11px] font-semibold tracking-[0.6px] text-[#757682] md:text-[12px]">
                  SUBJECT
                </label>
                <div className="relative border-b border-[#c5c6d2]">
                  <select
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value as (typeof subjects)[number])}
                    className="w-full appearance-none bg-transparent py-3 pl-3 pr-10 font-sans text-[15px] text-[#1a1b20] outline-none md:text-[16px]"
                  >
                    {subjects.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  <svg className="pointer-events-none absolute right-2 top-1/2 h-5 w-5 -translate-y-1/2" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M7.2 9.6L12 14.4L16.8 9.6" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                  </svg>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="px-1 font-sans text-[11px] font-semibold tracking-[0.6px] text-[#757682] md:text-[12px]">
                  YOUR MESSAGE
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share your thoughts or heart with us..."
                  rows={5}
                  className="resize-none border-b border-[#c5c6d2] bg-transparent px-3 py-3 font-sans text-[15px] text-[#1a1b20] outline-none focus:border-[#001a4d] md:text-[16px]"
                />
                {errors.message && <p className="px-1 text-[12px] text-[#c0392b]">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="inline-flex w-fit items-center gap-3 rounded-full bg-[#001a4d] px-8 py-4 font-sans text-[12px] font-bold tracking-[1.4px] text-white transition-colors hover:bg-[#002a7a] md:text-[14px]"
              >
                Open Email
                <svg width="19" height="16" viewBox="0 0 19 16" fill="none" aria-hidden>
                  <path d="M0 16V0l19 8-19 8Zm2-3 11.85-5L2 3v3.5L8 8l-6 1.5V13Z" fill="#FFD700" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className="relative h-[320px] w-full max-w-[1152px] overflow-hidden rounded-[24px] shadow-xl md:h-[540px]">
          <img src="/1.jpeg" alt="Visit Our Ministry" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,26,77,0.75)] to-[rgba(0,26,77,0.15)]" />
          <div className="absolute bottom-6 left-5 right-5 flex max-w-[512px] flex-col gap-3 md:bottom-12 md:left-12 md:right-auto">
            <h2 className="font-heading text-[28px] font-bold tracking-[-1.28px] text-[#ffd700] md:text-[56px]">
              Visit Our Ministry
            </h2>
            <p className="max-w-[440px] font-sans text-[13px] leading-relaxed text-white/90 md:text-[16px]">
              Gather with us in fellowship — a place of peace, reflection, and community under the sound of the Mighty
              Angel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
