import React, { useState, useEffect, useRef } from "react";
import { Check, ArrowRight, Clock, MessageCircle, Sparkles, ShieldCheck, TimerReset } from "lucide-react";

const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&family=DM+Sans:wght@400;500;600;700&display=swap');`;

const TRIAL_LINK = "https://buy.stripe.com/bJeeVc58p7Swdjr8ON1gs0d";
const EXPIRED_LINK = "https://buy.stripe.com/9B6aEW0S9gp24MV6GF1gs04";
const WINDOW_MS = 24 * 60 * 60 * 1000;
const DEADLINE_KEY = "tyt-tripwire-deadline";

function useCountdown() {
  const [remainingMs, setRemainingMs] = useState(null); // null = still loading
  const deadlineRef = useRef(null);

  useEffect(() => {
    let interval;

    async function init() {
      let deadline = null;
      try {
        const result = await window.storage.get(DEADLINE_KEY);
        if (result && result.value) {
          deadline = parseInt(result.value, 10);
        }
      } catch (e) {
        deadline = null; // key didn't exist yet
      }

      if (!deadline || isNaN(deadline)) {
        deadline = Date.now() + WINDOW_MS;
        try {
          await window.storage.set(DEADLINE_KEY, String(deadline));
        } catch (e) {
          // storage failed — fall back to an in-memory deadline for this session
        }
      }

      deadlineRef.current = deadline;
      setRemainingMs(Math.max(0, deadline - Date.now()));

      interval = setInterval(() => {
        setRemainingMs(Math.max(0, deadlineRef.current - Date.now()));
      }, 1000);
    }

    init();
    return () => clearInterval(interval);
  }, []);

  return remainingMs;
}

function formatDuration(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  const pad = (n) => String(n).padStart(2, "0");
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
}

const PROBLEMS = [
  { id: "email", label: "My emails aren't landing in inboxes" },
  { id: "automation", label: "A Zap or automation broke and I don't know why" },
  { id: "crm", label: "My CRM is a mess of duplicate contacts" },
  { id: "page", label: "A page or form on my site is glitching" },
  { id: "checkout", label: "My checkout or Stripe link isn't working right" },
  { id: "other", label: "Something else entirely" },
];

const FAQS = [
  {
    q: "What exactly do I get for $7?",
    a: "One tech problem, fully diagnosed and fixed by me, within 7 days. Not a call, not a checklist — the actual thing gets handled.",
  },
  {
    q: "What if my problem is bigger than one fix?",
    a: "I'll tell you honestly. If it needs more than a week or falls outside a single task, I'll scope it and let you decide — no pressure, no upsell games.",
  },
  {
    q: "What happens after 7 days?",
    a: "Your trial simply ends. If you want ongoing help, you can roll into Tame Your Tech at $150/month. If not, you don't owe anything else — cancel anytime, no contracts.",
  },
  {
    q: "How do we communicate?",
    a: "Email or a quick async video — whatever's fastest for the problem. No mandatory calls unless it genuinely helps.",
  },
  {
    q: "What platforms do you work with?",
    a: "Most of the common ones — ConvertKit, MailerLite, Kajabi, Squarespace, WordPress, Wix, Showit, Zapier, Dubsado, GoHighLevel, Stripe, and more. If I haven't seen your exact setup, I'll say so upfront.",
  },
];

export default function TameYourTechTripwire() {
  const [selected, setSelected] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const remainingMs = useCountdown();
  const isLoadingTimer = remainingMs === null;
  const isExpired = remainingMs === 0;
  const checkoutLink = isExpired ? EXPIRED_LINK : TRIAL_LINK;

  const selectedLabel = PROBLEMS.find((p) => p.id === selected)?.label;

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#F5EDE0", color: "#22291F" }}>
      <style>{FONT_IMPORT}</style>

      {/* NAV */}
      <div className="w-full border-b" style={{ borderColor: "rgba(61,114,103,0.15)" }}>
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold"
              style={{ background: "#3D7267", color: "#F5EDE0" }}
            >
              A
            </div>
            <span className="text-sm tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
              Arsh Agarwal <span className="opacity-60">· Tech Concierge</span>
            </span>
          </div>
          <span
            className="hidden sm:block text-xs font-semibold tracking-[0.15em] uppercase px-3 py-1 rounded-full"
            style={{ background: "#3D7267", color: "#F5EDE0" }}
          >
            7 days · $7
          </span>
        </div>
      </div>

      {/* COUNTDOWN BANNER */}
      {!isLoadingTimer && (
        <div
          className="w-full text-center py-2.5 px-4 text-sm font-semibold tracking-wide"
          style={{
            background: isExpired ? "#22291F" : "#3D7267",
            color: "#F5EDE0",
          }}
        >
          {isExpired ? (
            <span>This $7 window has closed — but keep reading, there's still a way in.</span>
          ) : (
            <span className="inline-flex items-center gap-2">
              <Clock size={14} />
              $7 trial price ends in {formatDuration(remainingMs)}
            </span>
          )}
        </div>
      )}

      {/* HERO */}
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-14 text-center">
        <p
          className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
          style={{ color: "#3D7267" }}
        >
          Tame Your Tech · Trial Week
        </p>
        <h1
          className="text-4xl sm:text-5xl leading-tight mb-5"
          style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
        >
          One tech problem,{" "}
          <span style={{ color: "#3D7267", fontStyle: "italic" }}>solved this week</span>.
        </h1>
        <p className="text-base sm:text-lg opacity-80 max-w-xl mx-auto mb-8 leading-relaxed">
          Pick the one thing that's been quietly wrecking your week. I'll fix it — for real,
          not just a diagnosis — and you'll see exactly how Tame Your Tech works before you
          commit to anything.
        </p>

        <div
          className="inline-flex items-center gap-3 rounded-full px-6 py-3 mb-3"
          style={{ background: "#22291F", color: "#F5EDE0" }}
        >
          <span className="text-2xl font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
            $7
          </span>
          <span className="text-sm opacity-80">for 7 days · one problem, handled</span>
        </div>
        <div>
          <a
            href="#claim"
            className="inline-flex items-center gap-2 mt-4 rounded-full px-7 py-3 text-sm font-semibold transition-transform hover:scale-[1.02]"
            style={{ background: "#3D7267", color: "#F5EDE0" }}
          >
            {isExpired ? "See what's still available" : "Start my $7 trial"} <ArrowRight size={16} />
          </a>
          <p className="text-xs opacity-60 mt-3">
            After 7 days, roll into Tame Your Tech at $150/mo — or don't. No contracts either way.
          </p>
        </div>
      </section>

      {/* PICK YOUR PROBLEM — signature interactive element */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div
          className="rounded-2xl p-8 sm:p-10"
          style={{ background: "#FFFFFF", border: "1px solid rgba(61,114,103,0.15)" }}
        >
          <h2
            className="text-2xl sm:text-3xl mb-2 text-center"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
          >
            What's the one thing?
          </h2>
          <p className="text-sm opacity-70 text-center mb-7">
            Tap what's closest — this is exactly the kind of thing I'll handle first.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {PROBLEMS.map((p) => {
              const isSelected = selected === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelected(p.id)}
                  className="text-left rounded-xl px-4 py-3 text-sm transition-all flex items-center gap-3 border"
                  style={{
                    background: isSelected ? "#3D7267" : "#F5EDE0",
                    color: isSelected ? "#F5EDE0" : "#22291F",
                    borderColor: isSelected ? "#3D7267" : "rgba(61,114,103,0.2)",
                  }}
                >
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center border"
                    style={{
                      borderColor: isSelected ? "#F5EDE0" : "rgba(34,41,31,0.3)",
                      background: isSelected ? "#F5EDE0" : "transparent",
                    }}
                  >
                    {isSelected && <Check size={13} color="#3D7267" strokeWidth={3} />}
                  </span>
                  {p.label}
                </button>
              );
            })}
          </div>

          <div
            className="rounded-xl px-5 py-4 text-sm text-center transition-all"
            style={{
              background: selected ? "rgba(61,114,103,0.1)" : "rgba(196,168,130,0.15)",
              color: "#22291F",
            }}
          >
            {selected ? (
              <span>
                Got it — <strong>{selectedLabel.toLowerCase()}</strong>. That's a one-week fix.
                Let's get started.
              </span>
            ) : (
              <span className="opacity-70">Pick one above to see what happens next.</span>
            )}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl text-center mb-10"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
          >
            Here's exactly how the week goes.
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                icon: <MessageCircle size={18} />,
                title: "Tell me the problem",
                copy: "Send it over by email or a quick message the day you join. Be as messy or specific as you want.",
              },
              {
                icon: <Sparkles size={18} />,
                title: "I fix it, not just diagnose it",
                copy: "I get into your actual setup and handle it — the automation, the platform, the broken link, whatever it is.",
              },
              {
                icon: <ShieldCheck size={18} />,
                title: "You decide what's next",
                copy: "Loved it? Roll into Tame Your Tech for $150/mo. Just needed the one thing? We're done — no follow-up charges.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="rounded-xl p-6"
                style={{ background: "#FFFFFF", border: "1px solid rgba(61,114,103,0.15)" }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center mb-4"
                  style={{ background: "#3D7267", color: "#F5EDE0" }}
                >
                  {step.icon}
                </div>
                <h3 className="font-semibold text-sm mb-2">{step.title}</h3>
                <p className="text-sm opacity-70 leading-relaxed">{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED / NOT */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-5">
          <div
            className="rounded-xl p-6"
            style={{ background: "#FFFFFF", border: "1px solid rgba(61,114,103,0.2)" }}
          >
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#3D7267" }}>
              Included in your $7 week
            </p>
            <ul className="space-y-2 text-sm">
              {[
                "One tech task, fully handled — not just advice",
                "Direct email or async video support",
                "Turnaround within your 7-day window",
                "An honest read on whether Tame Your Tech fits you long-term",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check size={15} style={{ color: "#3D7267", marginTop: 2, flexShrink: 0 }} />
                  <span className="opacity-80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-xl p-6"
            style={{ background: "rgba(196,168,130,0.12)", border: "1px solid rgba(196,168,130,0.35)" }}
          >
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#8a6d3b" }}>
              Not part of the trial
            </p>
            <ul className="space-y-2 text-sm">
              {[
                "Full website builds or rebuilds",
                "Ongoing multi-week projects",
                "Anything requiring more than ~2 hours of work",
                "Fake urgency — if it's a bigger job, I'll just tell you",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Clock size={15} style={{ color: "#8a6d3b", marginTop: 2, flexShrink: 0 }} />
                  <span className="opacity-80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="px-6 pb-16">
        <div
          className="max-w-2xl mx-auto rounded-2xl p-8 text-center"
          style={{ background: "#22291F", color: "#F5EDE0" }}
        >
          <p
            className="text-xl leading-relaxed mb-5"
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
          >
            "From a never-ending to-do list to a four-figure launch — and her weekends back."
          </p>
          <p className="text-sm opacity-70">Mangla Sachdev · Expat Business in a Bag</p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="claim" className="px-6 pb-16">
        <div
          className="max-w-2xl mx-auto rounded-2xl p-10 text-center"
          style={{ background: isExpired ? "#22291F" : "#3D7267", color: "#F5EDE0" }}
        >
          {isExpired ? (
            <>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase opacity-70 mb-3">
                Trial window closed
              </p>
              <p
                className="text-3xl sm:text-4xl font-semibold mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                You've missed the $7 window.
              </p>
              <p className="text-sm opacity-80 mb-2 max-w-md mx-auto">
                The 24-hour trial price is gone — but if you email me and tell me what's
                going on, I might be able to extend it for you.
              </p>
              <p className="text-sm opacity-90 mb-7">
                <a href="mailto:arshtist@gmail.com" className="underline font-semibold">
                  arshtist@gmail.com
                </a>
              </p>
              <a
                href={checkoutLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold transition-transform hover:scale-[1.02]"
                style={{ background: "#F5EDE0", color: "#22291F" }}
              >
                <TimerReset size={16} />
                See current pricing instead
              </a>
            </>
          ) : (
            <>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase opacity-80 mb-3">
                Tame Your Tech · 7-Day Trial
              </p>
              <p className="text-4xl font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                $7 / 7 days
              </p>
              <p className="text-sm opacity-85 mb-2 max-w-md mx-auto">
                One problem, actually solved. Then decide — stay at $150/mo, or walk away clean.
              </p>
              <p className="text-sm font-semibold opacity-95 mb-7 inline-flex items-center gap-2">
                <Clock size={14} /> Offer ends in {formatDuration(remainingMs)}
              </p>
              <br />
              <a
                href={checkoutLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full px-8 py-3 text-sm font-semibold transition-transform hover:scale-[1.02]"
                style={{ background: "#F5EDE0", color: "#22291F" }}
              >
                Claim my $7 trial week →
              </a>
              <p className="text-xs opacity-70 mt-4">Month-to-month after trial. No contracts. Cancel anytime.</p>
            </>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 pb-20">
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-2xl text-center mb-8"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
          >
            Questions? Answered.
          </h2>
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden"
                style={{ background: "#FFFFFF", border: "1px solid rgba(61,114,103,0.15)" }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between text-sm font-semibold"
                >
                  {f.q}
                  <span
                    className="text-lg transition-transform"
                    style={{
                      transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)",
                      color: "#3D7267",
                    }}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <p className="px-5 pb-4 text-sm opacity-75 leading-relaxed">{f.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-8" style={{ background: "#22291F", color: "#F5EDE0" }}>
        <div className="max-w-4xl mx-auto text-center text-xs opacity-60">
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "14px", opacity: 0.9, marginBottom: "6px" }}>
            Arsh Agarwal · Tech Concierge
          </p>
          <p>arshtist@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}
