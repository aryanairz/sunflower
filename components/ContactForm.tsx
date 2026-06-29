"use client";

import { useState, type FormEvent } from "react";
import { EVENT_TYPE_OPTIONS } from "@/lib/venue";

const FORM_NAME = "contact";

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");
}

// Format US digits as (XXX) XXX-XXXX, capped at 10 digits.
function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length === 0) return "";
  if (digits.length < 4) return `(${digits}`;
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

const labelClass =
  "block text-[12px] uppercase tracking-label text-ink-muted mb-2.5";
const fieldClass =
  "w-full border border-line bg-paper-3 px-4 py-3 text-ink placeholder:text-ink-soft rounded-[4px] transition-colors focus:border-ink focus:outline-none";

export function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [phone, setPhone] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data: Record<string, string> = { "form-name": FORM_NAME };
    formData.forEach((value, key) => {
      data[key] = typeof value === "string" ? value : "";
    });
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(data),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("success");
      form.reset();
      setPhone("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-line bg-paper-3 px-8 py-12 rounded-[6px]">
        <h3 className="font-serif text-3xl text-ink">Thank you.</h3>
        <p className="mt-4 text-ink-muted leading-relaxed max-w-[44ch]">
          We have received your message and will be in touch shortly to confirm
          your date. For anything urgent, please call (956) 331-4450.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-7 text-[12px] uppercase tracking-label text-ink border-b border-ink/40 pb-1 transition-colors hover:border-ink"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      name={FORM_NAME}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="grid grid-cols-1 sm:grid-cols-2 gap-5"
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <p className="hidden">
        <label>
          Skip this field: <input name="bot-field" />
        </label>
      </p>

      <div className="sm:col-span-2">
        <label htmlFor="name" className={labelClass}>
          Name
        </label>
        <input id="name" name="name" type="text" required autoComplete="name" placeholder="Your name" className={fieldClass} />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@email.com" className={fieldClass} />
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          inputMode="tel"
          autoComplete="tel"
          placeholder="(956) 000-0000"
          value={phone}
          onChange={(e) => setPhone(formatPhone(e.target.value))}
          maxLength={14}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="event-type" className={labelClass}>
          Event Type
        </label>
        <select id="event-type" name="event-type" defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Select one
          </option>
          {EVENT_TYPE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="event-date" className={labelClass}>
          Event Date
        </label>
        <input id="event-date" name="event-date" type="date" className={fieldClass} />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea id="message" name="message" rows={5} placeholder="Tell us about your event." className={`${fieldClass} resize-y`} />
      </div>

      {status === "error" && (
        <p className="sm:col-span-2 text-sm text-[#9F2F2D]">
          Something went wrong. Please try again, or call us at (956) 331-4450.
        </p>
      )}

      <div className="sm:col-span-2 pt-1">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full sm:w-auto bg-ink text-paper text-[12px] uppercase tracking-label px-10 py-4 rounded-[4px] transition-transform transition-colors hover:bg-ink/85 active:scale-[0.98] disabled:opacity-60"
        >
          {status === "submitting" ? "Sending" : "Send Message"}
        </button>
      </div>
    </form>
  );
}
