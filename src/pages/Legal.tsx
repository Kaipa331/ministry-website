import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { site } from "../data/content";

export function Privacy() {
  return (
    <LegalShell title="Privacy Policy">
      <p>
        {site.fullName} ({site.organization}) respects your privacy. This website is a public information site. If you
        email us through the contact page, that message is sent from your own email app to {site.email}.
      </p>
      <p>We do not collect accounts, payments, or form submissions on this website.</p>
      <p>
        Questions about this policy can be sent to{" "}
        <a className="text-[#001a4d] underline" href={`mailto:${site.email}`}>
          {site.email}
        </a>
        .
      </p>
    </LegalShell>
  );
}

export function Terms() {
  return (
    <LegalShell title="Terms of Service">
      <p>
        Content on this ministry website — including messages, testimonies, and imagery — is shared for spiritual
        edification and ministry outreach by {site.fullName} / {site.organization}. This site represents a ministry, not
        a church.
      </p>
      <p>
        You may view, share links, and engage for personal non-commercial use. Please do not redistribute media as your
        own without permission.
      </p>
      <p>
        Video content is hosted on YouTube under {site.organization} and is governed by YouTube&apos;s terms of service.
      </p>
    </LegalShell>
  );
}

function LegalShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="w-full bg-page">
      <section className="mx-auto max-w-[800px] px-4 pb-20 pt-[120px] md:px-16 md:pb-28 md:pt-[160px]">
        <p className="mb-2 font-sans text-[11px] font-semibold uppercase tracking-[2px] text-[#757682]">Legal</p>
        <h1 className="mb-8 font-heading text-[36px] font-bold text-[#001a4d] md:text-[48px]">{title}</h1>
        <div className="flex flex-col gap-4 font-sans text-[15px] leading-relaxed text-[#444650] md:text-[16px]">
          {children}
        </div>
        <Link to="/" className="mt-10 inline-block font-sans text-[14px] font-semibold text-[#001a4d] hover:underline">
          ← Back home
        </Link>
      </section>
    </div>
  );
}
