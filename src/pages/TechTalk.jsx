/**
 * Tech Talk — Promo Page
 * "Stop waiting on a developer. AI builds your sales page. No code. No excuses."
 * Simple single-page: Hero → What You'll Learn → Who It's For → Email Signup → Footer
 */

import { useState, useEffect, useRef } from "react";

const TEAL    = "#3D7267";
const TEAL2   = "#2E5650";
const TEAL_LT = "#EAF2F0";
const CREAM   = "#F5EDE0";
const TAN     = "#C4A882";
const TAN_LT  = "#EDE4D6";
const DARK    = "#1C1C1C";
const MID     = "#6B6B6B";
const MUTED   = "#999999";
const WHITE   = "#FFFFFF";

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, vis];
}

function Reveal({ children, delay = 0, dir = "up" }) {
  const [ref, vis] = useInView();
  const t = { up: "translateY(28px)", left: "translateX(-24px)", right: "translateX(24px)" };
  return (
    <div ref={ref} style={{
      opacity: vis ? 1 : 0,
      transform: vis ? "none" : t[dir],
      transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`
    }}>{children}</div>
  );
}

const bullets = [
  { icon: "💬", text: "How to prompt AI to write your sales page structure" },
  { icon: "🚀", text: "How to get the page live without touching code" },
  { icon: "🗺️", text: "How to get AI to walk you through all the manual steps" },
  { icon: "⚖️", text: "What AI handles vs. what you still control" },
  { icon: "🔁", text: "How to iterate fast using AI as your build partner" },
  { icon: "📋", text: "A series of actionable, step-by-step prompts you keep — walking you through sales page creation and payment processor connection" },
];

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "14px 32px",
      backgroundColor: scrolled ? "rgba(245,237,224,0.96)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? `1px solid ${TAN_LT}` : "none",
      transition: "all 0.4s ease",
      display: "flex", alignItems: "center", justifyContent: "space-between"
    }}>
      {/* Logo / Name */}
      <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 34, height: 34, borderRadius: "50%", backgroundColor: TEAL, display: "flex", alignItems: "center", justifyContent: "center", color: WHITE, fontWeight: 700, fontSize: 14, fontFamily: "DM Sans, sans-serif", flexShrink: 0 }}>A</div>
        <div>
          <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 14, color: DARK, margin: 0, lineHeight: 1.1 }}>Arsh Agarwal</p>
          <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 10, color: MUTED, margin: 0, letterSpacing: "0.08em", textTransform: "uppercase" }}>Tech Concierge</p>
        </div>
      </a>

      {/* Nav links */}
      <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
        {[
          ["/", "Home"],
          ["/#values", "Values"],
          ["/tameyourtech", "Tame Your Tech"],
          ["/techwhisperer", "Tech Whisperer"],
          ["/inboxrescue", "Inbox Rescue GPT"],
          ["/#services", "Packages"],
          ["/audit", "Tech Audit"],
          ["/speaker", "Speaker Page"],
          ["/salespageworkshop", "Workshop"],
          ["https://tidycal.com/arshtist/60min", "Book a Call"]
        ].map(([href, label]) => (
          <a key={label} href={href}
            style={{ fontFamily: "DM Sans, sans-serif", fontSize: 13, fontWeight: 500, color: DARK, textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.color = TEAL}
            onMouseLeave={e => e.currentTarget.style.color = DARK}
          >{label}</a>
        ))}

        {/* More dropdown */}
        <div style={{ position: "relative" }}
          onMouseEnter={() => setMoreOpen(true)}
          onMouseLeave={() => setMoreOpen(false)}>
          <button style={{ fontFamily: "DM Sans, sans-serif", fontSize: 13, fontWeight: 500, color: DARK, background: "none", border: "none", cursor: "pointer", padding: 0 }}>
            More ▾
          </button>
          {/*moreOpen && (
            <div style={{ position: "absolute", top: "calc(100% + 10px)", right: 0, backgroundColor: WHITE, borderRadius: 10, padding: "8px 0", boxShadow: "0 8px 32px rgba(0,0,0,0.1)", minWidth: 200, border: `1px solid ${TAN_LT}`, zIndex: 200 }}>
              {[
                ["https://arshie26.github.io/techgurusurvey/", "Tech Audit"],
                ["https://arshtechguru.square.site/tame-your-tech", "DKIM Guide Bundle"],
                ["../pages/SpeakerPage", "Speaker Page"],
                ["https://tidycal.com/arshtist/60min", "Book a Call"],
              ].map(([href, label]) => (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : "_self"} rel="noopener noreferrer"
                  style={{ display: "block", padding: "10px 20px", fontFamily: "DM Sans, sans-serif", fontSize: 13, color: DARK, textDecoration: "none", transition: "background 0.15s" }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = TEAL_LT}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = "transparent"}
                >{label}</a>
              ))}
            </div>
          )*/}
        </div>

        <a href="https://techconcierge.vercel.app/audit" target="_blank" rel="noopener noreferrer"
          style={{ backgroundColor: TEAL, color: WHITE, fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: 13, padding: "10px 22px", borderRadius: 99, textDecoration: "none", transition: "opacity 0.2s", boxShadow: `0 0 20px ${TEAL}30` }}>
          Take the Audit →
        </a>
      </div>
    </nav>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "14px 32px",
      backgroundColor: scrolled ? "rgba(245,237,224,0.96)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? `1px solid ${TAN_LT}` : "none",
      transition: "all 0.4s ease",
      display: "flex", alignItems: "center", justifyContent: "space-between"
    }}>
      <a href="https://techconcierge.vercel.app" style={{ textDecoration: "none" }}>
        <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 15, color: DARK }}>
          Arsh Agarwal · Tech Concierge
        </span>
      </a>
      <a href="#signup"
        style={{
          backgroundColor: TEAL, color: WHITE,
          fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: 13,
          padding: "9px 20px", borderRadius: 99, textDecoration: "none",
          boxShadow: `0 0 18px ${TEAL}30`, transition: "opacity 0.2s"
        }}>
        Save My Spot →
      </a>
    </nav>
  );
}

function Hero() {
  return (
    <section style={{
      minHeight: "100vh", backgroundColor: CREAM,
      display: "flex", flexDirection: "column", justifyContent: "center",
      padding: "120px 48px 80px", position: "relative", overflow: "hidden"
    }}>
      {/* Blobs */}
      <div style={{ position: "absolute", top: "5%", right: "-5%", width: 480, height: 480, borderRadius: "62% 38% 50% 50% / 55% 45% 55% 45%", backgroundColor: TEAL, opacity: 0.06, pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "5%", left: "-8%", width: 360, height: 360, borderRadius: "40% 60% 65% 35% / 45% 55% 45% 55%", backgroundColor: TAN, opacity: 0.1, pointerEvents: "none" }} />

      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative" }}>
        <Reveal delay={0}>
          <div style={{
            display: "inline-block", fontFamily: "DM Sans, sans-serif",
            fontSize: 11, fontWeight: 700, letterSpacing: "0.2em",
            textTransform: "uppercase", color: WHITE, marginBottom: 24,
            backgroundColor: TEAL, padding: "6px 18px", borderRadius: 99
          }}>
            Free Tech Talk
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)", lineHeight: 1.05,
            color: DARK, marginBottom: 8
          }}>
            Stop waiting on
            a developer.
          </h1>
        </Reveal>

        <Reveal delay={0.15}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            fontSize: "clamp(1.8rem, 4.5vw, 3.5rem)", lineHeight: 1.1,
            color: TEAL, marginBottom: 16
          }}>
            AI builds your sales page.
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p style={{
            fontFamily: "'Playfair Display', serif", fontStyle: "italic",
            fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)", color: TAN, marginBottom: 32
          }}>
            No code. No excuses.
          </p>
        </Reveal>

        <Reveal delay={0.26}>
          <p style={{
            fontFamily: "DM Sans, sans-serif", fontSize: 18, lineHeight: 1.75,
            color: MID, maxWidth: 560, margin: "0 auto 40px"
          }}>
            A free live workshop for coaches, copywriters, and service providers who are tired of waiting on a developer — or paying for one. I'll show you exactly how AI builds your sales page while you watch.
          </p>
        </Reveal>

        <Reveal delay={0.32}>
          <a href="#signup"
            style={{
              display: "inline-block", backgroundColor: TEAL, color: WHITE,
              fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: 16,
              padding: "18px 44px", borderRadius: 99, textDecoration: "none",
              boxShadow: `0 4px 28px ${TEAL}40`
            }}>
            Save My Spot — It's Free
          </a>
        </Reveal>

        {/* Details strip */}
        <Reveal delay={0.38}>
          <div style={{
            display: "flex", flexWrap: "wrap", justifyContent: "center",
            gap: 32, marginTop: 56, paddingTop: 36,
            borderTop: `1px solid ${TAN_LT}`
          }}>
            {[
              { icon: "💻", label: "Format", val: "Live · Free" },
              { icon: "🎯", label: "For", val: "Coaches, Copywriters, Service Providers" },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <p style={{ fontSize: 22, margin: "0 0 4px" }}>{s.icon}</p>
                <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 10, color: TAN, textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 2px" }}>{s.label}</p>
                <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 15, color: DARK, margin: 0 }}>{s.val}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WhatYoullLearn() {
  return (
    <section style={{ backgroundColor: DARK, padding: "90px 48px" }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <Reveal>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ width: 28, height: 1, backgroundColor: TAN, opacity: 0.5 }} />
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: TAN, margin: 0 }}>
              What You'll Learn
            </p>
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            fontSize: "clamp(2rem, 4vw, 3rem)", color: WHITE, marginBottom: 48, lineHeight: 1.15
          }}>
            In one free session, you'll go from{" "}
            <span style={{ color: TAN, fontStyle: "italic" }}>blank screen to live page.</span>
          </h2>
        </Reveal>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {bullets.map((b, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div style={{
                display: "flex", gap: 18, alignItems: "flex-start",
                backgroundColor: "rgba(255,255,255,0.04)", borderRadius: 12,
                padding: "18px 22px", border: "1px solid rgba(255,255,255,0.07)",
                transition: "background 0.3s"
              }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = "rgba(61,114,103,0.15)"}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.04)"}
              >
                <span style={{ fontSize: 22, flexShrink: 0 }}>{b.icon}</span>
                <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 16, color: "rgba(255,255,255,0.85)", margin: 0, lineHeight: 1.5 }}>
                  {b.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatYouGet() {
  return (
    <section style={{ backgroundColor: CREAM, padding: "90px 48px" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <Reveal>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ width: 28, height: 1, backgroundColor: TEAL, opacity: 0.5 }} />
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: TEAL, margin: 0 }}>
              What This Talk Covers
            </p>
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: DARK, marginBottom: 20, lineHeight: 1.2
          }}>
            Not theory. The actual build.
          </h2>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start" }}>
          <Reveal dir="left" delay={0.1}>
            <div>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 16, color: MID, lineHeight: 1.85, marginBottom: 24 }}>
                You have the offer. You have the words. But the page still is not up because the tech keeps getting in the way.
              </p>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 16, color: MID, lineHeight: 1.85, marginBottom: 24 }}>
                In this hands-on workshop, Arsh walks through the full technical build of a sales page from scratch using AI — how to set it up in your platform, connect it to your payment processor, and make sure every button, form, and link actually works.
              </p>
              <div style={{
                backgroundColor: TEAL_LT, borderRadius: 12, padding: "16px 20px",
                border: "1px solid rgba(61,114,103,0.2)"
              }}>
                <p style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: 14, color: TEAL, margin: "0 0 4px" }}>
                  Important note:
                </p>
                <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 14, color: MID, margin: 0, lineHeight: 1.65 }}>
                  No copywriting. No conversion strategy. Just the build done right. You bring the copy. AI and Arsh handle the rest.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal dir="right" delay={0.15}>
            <div style={{ backgroundColor: WHITE, borderRadius: 16, padding: "28px 28px", border: "1px solid " + TAN_LT }}>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", color: DARK, marginBottom: 20 }}>
                You will walk away knowing:
              </p>
              {[
                "How to set up a sales page in Kartra, WordPress, GoHighLevel, Zapier, and other platforms",
                "How to connect your page to your payment processor (Stripe, ThriveCart, PayPal)",
                "How to test every element before you launch so nothing breaks on launch day",
                "How to get AI to walk you through all the manual steps",
                "What AI handles vs. what you still need to control",
                "A series of actionable, step-by-step prompts to build your next sales page and connect your payment processor — yours to keep",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 14 }}>
                  <div style={{
                    width: 22, height: 22, borderRadius: "50%", backgroundColor: TEAL,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, marginTop: 1
                  }}>
                    <span style={{ color: WHITE, fontSize: 11, fontWeight: 700 }}>{"\u2713"}</span>
                  </div>
                  <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 14, color: MID, margin: 0, lineHeight: 1.6 }}>{item}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SuggestedFormat() {
  const steps = [
    {
      n: "01",
      title: "The Anatomy of a Sales Page",
      body: "We start with the fundamentals — the essential sections every sales page needs, what order they go in, and why each one exists. No fluff, no theory. Just the structure that works."
    },
    {
      n: "02",
      title: "The AI Prompts That Build It",
      body: "I walk you through the exact prompts I give AI to generate each section of the page. You'll leave with a prompt library you can use again and again for any offer. ASK ME ANYTHING"
    },
    {
      n: "03",
      title: "Live Construction Demo",
      body: "I build a sales page live using HTML, CSS, and JavaScript — and show you how AI navigates you through the construction step by step. The same process works REGARDLESS OF PLATFORM. AI walks you through it either way. ASK ME ANYTHING"
    },
    {
      n: "04",
      title: "You Start Building",
      body: "Attendees start building their own sales page using the instructions, prompts, and process from the demo. Your offer, your copy, your page — started during the session."
    },
    {
      n: "05",
      title: "Live Troubleshooting (Time Dependent)",
      body: "Got stuck? I'm in the room. Attendees can ask questions and troubleshoot in real time as they work through building their page."
    },
  ];

  return (
    <section style={{ backgroundColor: WHITE, padding: "90px 48px" }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <Reveal>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ width: 28, height: 1, backgroundColor: TEAL, opacity: 0.5 }} />
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: TEAL, margin: 0 }}>
              How It Runs
            </p>
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: DARK, marginBottom: 12, lineHeight: 1.2
          }}>
            Suggested format.
          </h2>
          <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 16, color: MID, lineHeight: 1.7, marginBottom: 48, maxWidth: 520 }}>
            Here is how I typically run this talk — from context to construction to hands-on building.
          </p>
        </Reveal>

        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {steps.map((step, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div style={{
                display: "flex", gap: 28, alignItems: "flex-start",
                padding: "28px 0",
                borderBottom: i < steps.length - 1 ? "1px solid " + TAN_LT : "none"
              }}>
                {/* Step number */}
                <div style={{ flexShrink: 0, textAlign: "right", width: 40 }}>
                  <p style={{
                    fontFamily: "'Playfair Display', serif", fontWeight: 700,
                    fontSize: 32, color: TAN, lineHeight: 1, margin: 0, opacity: 0.6
                  }}>{step.n}</p>
                </div>
                {/* Content */}
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif", fontWeight: 700,
                    fontSize: 18, color: DARK, marginBottom: 8
                  }}>{step.title}</h3>
                  <p style={{
                    fontFamily: "DM Sans, sans-serif", fontSize: 15,
                    color: MID, lineHeight: 1.7, margin: 0
                  }}>{step.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoItsFor() {
  return (
    <section style={{ backgroundColor: WHITE, padding: "90px 48px" }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <Reveal>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ width: 28, height: 1, backgroundColor: TEAL, opacity: 0.5 }} />
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: TEAL, margin: 0 }}>
              Who It's For
            </p>
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: DARK, marginBottom: 40, lineHeight: 1.2
          }}>
            This talk is for you if...
          </h2>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          {[
            { e: "✅", t: "You have an offer that needs a sales page — right now." },
            { e: "✅", t: "You've been putting it off because the tech feels too hard." },
            { e: "✅", t: "You're a coach, copywriter, or service provider who's done paying for developers." },
            { e: "✅", t: "You've heard AI can help but have no idea where to start." },
            { e: "✅", t: "You want to watch it happen live — not just read about it." },
            { e: "✅", t: "You want to keep ownership of your tech stack." },
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div style={{
                backgroundColor: CREAM, borderRadius: 12, padding: "20px 20px",
                border: `1px solid ${TAN_LT}`, display: "flex", gap: 12, alignItems: "flex-start",
                transition: "transform 0.25s, box-shadow 0.25s"
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = `0 8px 24px rgba(61,114,103,0.12)`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <span style={{ fontSize: 18, flexShrink: 0 }}>{item.e}</span>
                <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 14, color: MID, margin: 0, lineHeight: 1.6 }}>{item.t}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section style={{ backgroundColor: TEAL, padding: "72px 48px" }}>
      <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
        <Reveal>
          <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "clamp(1rem, 2.2vw, 1.25rem)", color: "rgba(255,255,255,0.9)", lineHeight: 1.75, marginBottom: 24 }}>
            "If you have tech or funnel building issues, Arsh is a wonderful resource!"
          </p>
          <p style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: 14, color: "rgba(255,255,255,0.7)", marginBottom: 32 }}>
            — Sage Polaris, Copywriting Coach & Launch Strategist
          </p>
          <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 16, color: "rgba(255,255,255,0.85)", lineHeight: 1.75, maxWidth: 520, margin: "0 auto" }}>
            Arsh Agarwal is a Tech Concierge and web developer who builds sales pages, automations, and funnels for coaches and service providers. In this free talk, he shows you exactly how he does it — live — using AI.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function SignupSection() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Tech Talk — Save My Spot");
    const body = encodeURIComponent(`Hi Arsh,\n\nI'd like to save my spot for the Tech Talk!\n\nName: ${name}\nEmail: ${email}\n\nCan't wait!`);
    window.location.href = `mailto:arshtist@gmail.com?subject=${subject}&body=${body}`;
    setDone(true);
  };

  return (
    <section id="signup" style={{ backgroundColor: CREAM, padding: "90px 48px" }}>
      <div style={{ maxWidth: 520, margin: "0 auto", textAlign: "center" }}>
        <Reveal>
          <div style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "center", marginBottom: 16 }}>
            <div style={{ width: 28, height: 1, backgroundColor: TEAL, opacity: 0.5 }} />
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: TEAL, margin: 0 }}>
              Save Your Spot
            </p>
            <div style={{ width: 28, height: 1, backgroundColor: TEAL, opacity: 0.5 }} />
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: DARK, marginBottom: 12, lineHeight: 1.2
          }}>
            Be the first to know<br />when it goes live.
          </h2>
          <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 16, color: MID, lineHeight: 1.7, marginBottom: 36 }}>
            Drop your email below and I'll send you the date, time, and link the moment it's confirmed.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          {done ? (
            <div style={{ backgroundColor: TEAL_LT, borderRadius: 16, padding: "36px 28px", border: `1px solid ${TEAL}30` }}>
              <p style={{ fontSize: 36, marginBottom: 12 }}>🎉</p>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 22, color: DARK, marginBottom: 8 }}>You're on the list!</h3>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 15, color: MID }}>Your mail client should have opened. I'll be in touch with the details soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <input
                  type="text" value={name} onChange={e => setName(e.target.value)}
                  placeholder="Your first name"
                  required
                  style={{
                    width: "100%", padding: "14px 18px", borderRadius: 10,
                    border: `1px solid ${TAN_LT}`, backgroundColor: WHITE,
                    fontFamily: "DM Sans, sans-serif", fontSize: 15, color: DARK,
                    outline: "none", transition: "border-color 0.2s", boxSizing: "border-box"
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = TEAL}
                  onBlur={e => e.currentTarget.style.borderColor = TAN_LT}
                />
                <input
                  type="email" value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  style={{
                    width: "100%", padding: "14px 18px", borderRadius: 10,
                    border: `1px solid ${TAN_LT}`, backgroundColor: WHITE,
                    fontFamily: "DM Sans, sans-serif", fontSize: 15, color: DARK,
                    outline: "none", transition: "border-color 0.2s", boxSizing: "border-box"
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = TEAL}
                  onBlur={e => e.currentTarget.style.borderColor = TAN_LT}
                />
                <button type="submit"
                  style={{
                    backgroundColor: TEAL, color: WHITE,
                    fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: 16,
                    padding: "16px", borderRadius: 99, border: "none",
                    cursor: "pointer", boxShadow: `0 4px 24px ${TEAL}40`,
                    transition: "opacity 0.2s"
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                  onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                >
                  Save My Spot — It's Free
                </button>
              </div>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, color: TAN, marginTop: 14 }}>
                No spam. Just the date, time, and link when it's ready.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ backgroundColor: DARK, padding: "28px 48px" }}>
      <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 14, color: `${TEAL}CC`, margin: 0 }}>
          Arsh Agarwal · Tech Concierge
        </p>
        <a href="https://techconcierge.vercel.app" target="_blank" rel="noopener noreferrer"
          style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, color: "#555", textDecoration: "none" }}>
          techconcierge.vercel.app
        </a>
      </div>
    </footer>
  );
}

export default function TechTalk() {
  return (
    <div style={{ backgroundColor: CREAM }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::selection { background: rgba(61,114,103,0.2); }
        html { scroll-behavior: smooth; }
        input::placeholder { color: #BBAA99; }
      `}</style>
      <NavBar />
      <Hero />
      <WhatYoullLearn />
      <WhatYouGet />
      <SuggestedFormat />
      <WhoItsFor />
      <AboutSection />
      <SignupSection />
      <Footer />
    </div>
  );
}
