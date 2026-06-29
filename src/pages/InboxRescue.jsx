/**
 * Inbox Rescue DKIM GPT — Sales Page
 * Built by Arsh Agarwal · Tech Concierge
 * Stripe CTA: https://buy.stripe.com/4gMdR80S9egUcfn1ml1gs03
 */

import { useState, useEffect, useRef } from "react";
import HomeFooter from '../components/HomeFooter'

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
const STRIPE  = "https://buy.stripe.com/dRmeVc44l6Os7Z74yx1gs0a";

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
  const t = { up: "translateY(32px)", left: "translateX(-24px)", right: "translateX(24px)", none: "none" };
  return (
    <div ref={ref} style={{
      opacity: vis ? 1 : 0,
      transform: vis ? "none" : t[dir],
      transition: `opacity 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}s`
    }}>{children}</div>
  );
}

const platforms = [
  "Mailchimp", "Wix", "Squarespace", "ConvertKit", "Kajabi",
  "Ontraport", "Thinkific", "LeadConnector", "Kartra",
  "Klaviyo", "ActiveCampaign", "Mailerlite", "ThriveCart"
];

const outcomes = [
  { e: "📸", t: "Upload screenshots of your records throughout the process and get step-by-step guidance" },
  { e: "🧪", t: "Test your records using the GPT and receive troubleshooting instructions instantly" },
  { e: "😌", t: "Feel confident that you won't break everything" },
  { e: "🏆", t: "Feel accomplished that you actually updated your technology" },
  { e: "🎉", t: "Feel excited that your emails will reach your followers' inboxes" },
];

const values = [
  { e: "🤝", t: "Connection", b: "I prioritize understanding you, your business, and your unique needs to enhance our collaboration and autonomy." },
  { e: "💬", t: "Communication", b: "Effective communication is the foundation of our partnership, essential for successful projects, especially under pressure." },
  { e: "🔓", t: "Vulnerability", b: "I create a safe space for open and honest communication, ensuring mutual respect and appreciation." },
  { e: "🛡️", t: "Trust", b: "Trust is continually nurtured through consistent performance and exceeding your expectations." },
  { e: "🌱", t: "Community", b: "I promote a supportive and accountable environment within every team, fostering win-win-win outcomes." },
];

// ─── Nav ──────────────────────────────────────────────────────

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
            style={{ fontFamily: "DM Sans, sans-serif", fontSize: 13, fontWeight: 500, color: TEAL, textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.color = TEAL}
            onMouseLeave={e => e.currentTarget.style.color = TEAL}
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
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 32, height: 32, borderRadius: "50%", backgroundColor: TEAL, display: "flex", alignItems: "center", justifyContent: "center", color: WHITE, fontWeight: 700, fontSize: 14, fontFamily: "DM Sans, sans-serif" }}>A</div>
        <div>
          <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 14, color: DARK, margin: 0, lineHeight: 1.1 }}>Arsh Agarwal</p>
          <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 10, color: MID, margin: 0, letterSpacing: "0.08em", textTransform: "uppercase" }}>Tech Concierge</p>
        </div>
      </div>
      <a href={STRIPE} target="_blank" rel="noopener noreferrer"
        style={{ backgroundColor: TEAL, color: WHITE, fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: 13, padding: "9px 20px", borderRadius: 99, textDecoration: "none", boxShadow: `0 0 18px ${TEAL}30` }}>
        Get Inbox Rescue →
      </a>
    </nav>
  );
}

// ─── Hero ──────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{
      minHeight: "100vh", backgroundColor: DARK,
      display: "flex", flexDirection: "column", justifyContent: "center",
      padding: "120px 48px 80px", position: "relative", overflow: "hidden"
    }}>
      <div style={{ position: "absolute", top: "20%", right: "-8%", width: 500, height: 500, borderRadius: "50%", backgroundColor: TEAL, opacity: 0.07, filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", left: "-5%", width: 380, height: 380, borderRadius: "50%", backgroundColor: TAN, opacity: 0.05, filter: "blur(60px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center", position: "relative" }}>
        <Reveal delay={0}>
          <div style={{ display: "inline-block", fontFamily: "DM Sans, sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: WHITE, marginBottom: 24, backgroundColor: TEAL, padding: "6px 18px", borderRadius: 99 }}>
            Inbox Rescue DKIM GPT
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(2.8rem, 7vw, 5.5rem)", lineHeight: 1.05, color: WHITE, marginBottom: 12 }}>
            Guarantee inbox delivery<br />
            <span style={{ color: TAN, fontStyle: "italic" }}>in 72 hours.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.15}>
          <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 18, lineHeight: 1.75, color: "rgba(255,255,255,0.7)", maxWidth: 560, margin: "0 auto 36px" }}>
            Are your DKIM, DMARC, and SPF records set up correctly? If you're not sure — your emails may not be getting delivered at all. This action-oriented GPT walks you through fixing it, step by step, for virtually every email platform out there.
          </p>
        </Reveal>

        <Reveal delay={0.22}>
          <a href={STRIPE} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-block", backgroundColor: TEAL, color: WHITE, fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: 17, padding: "18px 48px", borderRadius: 99, textDecoration: "none", boxShadow: `0 4px 32px ${TEAL}50` }}>
            Download Inbox Rescue GPT →
          </a>
        </Reveal>

        <Reveal delay={0.28}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 32, marginTop: 56, paddingTop: 40, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            {[
              { v: "72hrs", l: "To inbox delivery" },
              { v: "13+", l: "Platforms supported" },
              { v: "7-day", l: "Personal support guarantee" },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 700, color: TAN, lineHeight: 1, margin: 0 }}>{s.v}</p>
                <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 4, letterSpacing: "0.06em", textTransform: "uppercase" }}>{s.l}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Pain ─────────────────────────────────────────────────────
function PainSection() {
  return (
    <section style={{ backgroundColor: CREAM, padding: "80px 48px" }}>
      <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
        <Reveal>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: DARK, marginBottom: 20, lineHeight: 1.2 }}>
            Are your emails actually reaching anyone?
          </h2>
          <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 17, color: MID, lineHeight: 1.8, maxWidth: 580, margin: "0 auto 32px" }}>
            You spend hours crafting the perfect email. You hit send. And it disappears entirely. The culprit is almost always a missing or misconfigured DKIM, DMARC, or SPF record.
          </p>
          <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 17, color: MID, lineHeight: 1.8, maxWidth: 580, margin: "0 auto" }}>
            Most guides make this feel impossible. Inbox Rescue DKIM GPT makes it <strong style={{ color: TEAL }}>actually doable</strong> — walking you through every step with your specific platform, your specific screenshots, and your specific questions answered in real time.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Platforms ────────────────────────────────────────────────
function Platforms() {
  return (
    <section style={{ backgroundColor: WHITE, padding: "72px 48px" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: TEAL, marginBottom: 12 }}>Works With</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: DARK, marginBottom: 10 }}>
              Basically every email platform out there.
            </h2>
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 15, color: MID, maxWidth: 480, margin: "0 auto" }}>
              And if your platform isn't listed — ask. That's what the GPT is for.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            {platforms.map((p, i) => (
              <div key={i} style={{
                padding: "10px 20px", borderRadius: 99,
                backgroundColor: CREAM, border: `1px solid ${TAN_LT}`,
                fontFamily: "DM Sans, sans-serif", fontSize: 14, fontWeight: 600, color: DARK,
                transition: "all 0.2s"
              }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = TEAL_LT; e.currentTarget.style.borderColor = `${TEAL}40`; e.currentTarget.style.color = TEAL; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = CREAM; e.currentTarget.style.borderColor = TAN_LT; e.currentTarget.style.color = DARK; }}
              >
                {p}
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <p style={{ textAlign: "center", fontFamily: "DM Sans, sans-serif", fontSize: 14, color: MID, fontStyle: "italic", marginTop: 20 }}>
            ...and if it doesn't work for you, ask me!
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// ─── What You Get ─────────────────────────────────────────────
function WhatYouGet() {
  return (
    <section style={{ backgroundColor: DARK, padding: "90px 48px" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <Reveal>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ width: 28, height: 1, backgroundColor: TAN, opacity: 0.5 }} />
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: TAN, margin: 0 }}>What You Get</p>
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: WHITE, marginBottom: 48, lineHeight: 1.2 }}>
            Everything you need to fix your deliverability — <span style={{ color: TAN, fontStyle: "italic" }}>for good.</span>
          </h2>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          {outcomes.map((o, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div style={{
                backgroundColor: "rgba(255,255,255,0.04)", borderRadius: 14, padding: "24px 22px",
                border: "1px solid rgba(255,255,255,0.07)", display: "flex", gap: 16, alignItems: "flex-start",
                transition: "background 0.3s"
              }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = "rgba(61,114,103,0.15)"}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.04)"}
              >
                <span style={{ fontSize: 26, flexShrink: 0 }}>{o.e}</span>
                <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 15, color: "rgba(255,255,255,0.8)", margin: 0, lineHeight: 1.6 }}>{o.t}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.4}>
          <div style={{ marginTop: 28, padding: "18px 24px", backgroundColor: "rgba(196,168,130,0.1)", borderRadius: 12, border: "1px solid rgba(196,168,130,0.2)" }}>
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", margin: 0, lineHeight: 1.7 }}>
              <strong style={{ color: TAN }}>Note:</strong> This version of the GPT does not yet guarantee that your emails will skip spam and go to the Primary tab. A second version is in development.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Guarantee ────────────────────────────────────────────────
function Guarantee() {
  return (
    <section style={{ backgroundColor: TEAL, padding: "80px 48px" }}>
      <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
        <Reveal>
          <div style={{ fontSize: 48, marginBottom: 20 }}>🛡️</div>
          <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 16, color: "rgba(255,255,255,0.75)", lineHeight: 1.7, marginBottom: 32 }}>
            This GPT is for action-driven business owners who are committed to implementation. My goal is to increase your email deliverability so that your marketing actually reaches your customers.
          </p>
          <a href={STRIPE} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-block", backgroundColor: WHITE, color: TEAL, fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: 16, padding: "16px 44px", borderRadius: 99, textDecoration: "none", boxShadow: "0 8px 28px rgba(0,0,0,0.15)" }}>
            Get Inbox Rescue GPT →
          </a>
        </Reveal>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────
function About() {
  return (
    <section style={{ backgroundColor: CREAM, padding: "90px 48px" }}>
      <div style={{ maxWidth: 860, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
        <Reveal dir="left">
          <div style={{ position: "relative" }}>
            <div style={{ borderRadius: "42% 58% 55% 45% / 52% 48% 52% 48%", overflow: "hidden", aspectRatio: "1", border: `3px solid ${TAN_LT}`, boxShadow: `0 24px 60px rgba(61,114,103,0.15)`, backgroundColor: TEAL_LT, display: "flex", alignItems: "center", justifyContent: "center" }}>
              {/* PLACEHOLDER — replace with ../assets/arsh-headshot.jpg */}
              <div style={{ textAlign: "center" }}>
                <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 80, color: TEAL, lineHeight: 1 }}>A</p>
                <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, color: MID, letterSpacing: "0.1em" }}>ARSH AGARWAL</p>
              </div>
            </div>
            <div style={{ position: "absolute", bottom: -10, left: -10, right: 40, height: 2, backgroundColor: TAN, opacity: 0.5 }} />
          </div>
        </Reveal>
        <Reveal dir="right" delay={0.1}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
              <div style={{ width: 28, height: 1, backgroundColor: TEAL, opacity: 0.5 }} />
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: TEAL, margin: 0 }}>About Arsh</p>
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: DARK, marginBottom: 18, lineHeight: 1.2 }}>
              Former IT project manager.<br />
              <span style={{ color: TEAL, fontStyle: "italic" }}>Now your tech concierge.</span>
            </h2>
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 15, color: MID, lineHeight: 1.8, marginBottom: 14 }}>
              My experience in IT as a project manager taught me how to implement and troubleshoot the technology that supports business processes. I loved bringing businesses to life — but I wanted to work on my own time with passionate clients who appreciated me.
            </p>
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 15, color: MID, lineHeight: 1.8, marginBottom: 28 }}>
              I decided to leverage my tactical strengths to empower female business owners — creating a frictionless experience with the technology they need to grow their businesses and serve their clients without the headache.
            </p>
            <a href={STRIPE} target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", backgroundColor: TEAL, color: WHITE, fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: 14, padding: "13px 28px", borderRadius: 99, textDecoration: "none" }}>
              Get Inbox Rescue GPT →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Values ───────────────────────────────────────────────────
function Values() {
  return (
    <section style={{ backgroundColor: WHITE, padding: "90px 48px" }}>
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "center", marginBottom: 14 }}>
              <div style={{ width: 28, height: 1, backgroundColor: TEAL, opacity: 0.5 }} />
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: TEAL, margin: 0 }}>My Values</p>
              <div style={{ width: 28, height: 1, backgroundColor: TEAL, opacity: 0.5 }} />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", color: DARK, marginBottom: 12 }}>
              When we work together, I don't just do work for you.
            </h2>
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 16, color: MID, maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
              I appreciate that you've trusted me with a business that's deeply personal and close to your heart.
            </p>
          </div>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
          {values.map((v, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div style={{
                backgroundColor: CREAM, borderRadius: 16, padding: "28px 22px", textAlign: "center",
                border: `1px solid ${TAN_LT}`, transition: "all 0.3s"
              }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = TEAL_LT; e.currentTarget.style.borderColor = `${TEAL}40`; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = CREAM; e.currentTarget.style.borderColor = TAN_LT; e.currentTarget.style.transform = "none"; }}
              >
                <div style={{ fontSize: 28, marginBottom: 12 }}>{v.e}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 17, color: TEAL, marginBottom: 8 }}>{v.t}</h3>
                <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 13, color: MID, lineHeight: 1.65, margin: 0 }}>{v.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section style={{ backgroundColor: DARK, padding: "90px 48px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 400, borderRadius: "50%", backgroundColor: TEAL, opacity: 0.05, filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center", position: "relative" }}>
        <Reveal>
          <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: TAN, marginBottom: 20 }}>Ready to fix your deliverability?</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.5rem)", color: WHITE, marginBottom: 18, lineHeight: 1.1 }}>
            Your emails deserve<br />
            <span style={{ color: TAN, fontStyle: "italic" }}>to be read.</span>
          </h2>
          <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 17, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, maxWidth: 480, margin: "0 auto 40px" }}>
            Get Inbox Rescue DKIM GPT and get your records configured correctly — in 72 hours or less.
          </p>
          <a href={STRIPE} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-block", backgroundColor: TEAL, color: WHITE, fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: 17, padding: "18px 48px", borderRadius: 99, textDecoration: "none", boxShadow: `0 4px 32px ${TEAL}50` }}>
            Get Inbox Rescue GPT →
          </a>
          <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.35)", marginTop: 16 }}>
            7-day personal support guarantee · Action-driven business owners only
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ backgroundColor: "#111", padding: "28px 48px" }}>
      <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 14, color: `${TEAL}CC`, margin: 0 }}>
          Arsh Agarwal · Tech Concierge
        </p>
        <a href="https://techconcierge.vercel.app" target="_blank" rel="noopener noreferrer"
          style={{ color: "#444", fontFamily: "DM Sans, sans-serif", fontSize: 11, textDecoration: "none", letterSpacing: "0.05em" }}>
          techconcierge.vercel.app
        </a>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────
export default function InboxRescue() {
  return (
    <div style={{ backgroundColor: CREAM }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::selection { background: rgba(61,114,103,0.2); }
        html { scroll-behavior: smooth; }
        @media (max-width: 768px) {
          .two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <NavBar />
      <Hero />
      <PainSection />
      <Platforms />
      <WhatYouGet />
      <Guarantee />
      <About />
      <Values />
      <FinalCTA />
      <HomeFooter />
    </div>
  );
}
