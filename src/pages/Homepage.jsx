/**
 * Arsh Agarwal Tech Concierge — Homepage v1
 * Built by Arsh Agarwal · arshtechguru.square.site
 *
 * Brand: Teal #3D7267 / Cream #F5EDE0 / Tan #C4A882
 * Fonts: Playfair Display (headings) / DM Sans (body)
 *
 * Sections:
 * Nav → Hero → Sage Spotlight → Pain Points → About → Values
 * → Services → Testimonials → Automation Audit CTA → Footer
 */

import { useState, useEffect, useRef } from "react";
import sage from '../assets/sage.png'
import sage_logo from '../assets/logo-sage.png'
import kelsi from '../assets/kelsi.jpg'
import kelsi_logo from '../assets/logo-kelsi.png'
import allysha from '../assets/allysha.jpg'
import allysha_logo from '../assets/logo-allysha.jpg'
import bilingual_logo from '../assets/logo-katharine.jpg'
import kirby_logo from '../assets/logo-kirby.jpg'
import mangla from '../assets/mangla.jpg'
import mangla_logo from '../assets/logo-mangla.jpg'
import tracy_logo from '../assets/logo-tracy.jpg'
import arsh from '../assets/arsh-headshot.png'

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

// ─── Scroll reveal hook ────────────────────────────────────────
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
  const t = { up: "translateY(36px)", left: "translateX(-28px)", right: "translateX(28px)", none: "none" };
  return (
    <div ref={ref} style={{
      opacity: vis ? 1 : 0,
      transform: vis ? "none" : t[dir],
      transition: `opacity 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}s`
    }}>{children}</div>
  );
}

// ─── Data ──────────────────────────────────────────────────────
const painPoints = [
  { e: "😤", h: "The tech keeps getting in the way.", b: "You have the offer, the clients, and the energy. But the platforms, the integrations, and the broken automations keep eating time you don't have." },
  { e: "🕳️", h: "Leads are falling through the cracks.", b: "Someone opts in. Nothing fires. Or it fires twice. Or the wrong email goes out. You find out weeks later — if at all." },
  { e: "🔁", h: "You're still doing manually what should be automatic.", b: "You built this business to create freedom, not to spend Sunday afternoons copy-pasting data between platforms that should talk to each other." },
  { e: "🔥", h: "Every launch reveals a new problem.", b: "Checkout breaks. Automations don't fire. The page doesn't load on mobile. Something always goes wrong right when it matters most." },
  { e: "🤯", h: "You've got 12 platforms and no one who knows all of them.", b: "Kartra, GoHighLevel, Kajabi, Squarespace, Zapier, Stripe — each one has its own quirks. You need someone who actually knows them." },
  { e: "⏰", h: "You're spending CEO hours on entry-level tech tasks.", b: "You didn't build a business to configure DNS records and debug webhooks. But here you are. Again." },
];

const services = [
  {
    tag: "Monthly · $150",
    title: "Tame Your Tech",
    tagline: "One focused tech task handled every month.",
    body: "Pick one area each month — a platform connection, a mini automation, a page setup, an email audit, or a quick troubleshoot. I handle it. You move on.",
    items: ["Platform connections", "Mini automations", "Page & form setup", "Email analytics checkup", "Quick tech troubleshoot"],
    cta: "Learn More →",
    link: "../TameYourTech",
    color: TEAL,
  },
  {
    tag: "Monthly · $1,000",
    title: "Tech Whisperer",
    tagline: "Full tech ecosystem management. Every month.",
    body: "I step into your business like I've been here all along — managing your platforms, automating the repeatable stuff, troubleshooting proactively, and keeping everything running.",
    items: ["Ongoing platform management", "Proactive troubleshooting", "Integration management", "Monthly tech roadmap", "Voxer/Slack access"],
    cta: "Learn More →",
    link: "../pages/TechWhisperer",
    color: TEAL2,
  },
  {
    tag: "Hourly Packages · FROM $400",
    title: "Tech Guru Packages",
    tagline: "10, 20, or 40 hours of hands-on tech support.",
    body: "From mapping business processes to building funnels to creating SOPs — flexible hourly packages for the tech work your business needs done right.",
    items: ["Business process mapping", "Web page updates", "CRM & email management", "Web development", "Tech SOPs"],
    cta: "See Packages →",
    link: "https://arshtechguru.square.site/tech-guru-packages",
    color: "#5C6E6B",
  },
];

const values = [
  { e: "🤝", t: "Connection", b: "I take time to understand you, your business, and your unique needs before anything else." },
  { e: "💬", t: "Communication", b: "Effective communication is the foundation of every project — especially when things get complicated." },
  { e: "🔓", t: "Vulnerability", b: "I create a safe space for honest conversation — no judgment, no pretending." },
  { e: "🛡️", t: "Trust", b: "Trust is built through consistent performance and by consistently exceeding your expectations." },
  { e: "🌱", t: "Community", b: "I foster a supportive, accountable environment in every team I join. Win-win-win." },
];

const testimonials = [
  {
    summary: "From 1–2 leads a month to 30 new leads in 2 months.",
    quote: "My systems clicked and I started seeing consistent sales. I went from a trickle of 1–2 clients per month to 30 new clients in 2 months. I was mind blown. Arsh is what tech support would look like if it came with a chai tea latte, a soothing voice and a plan that actually works.",
    name: "Kelsi Taylor", title: "STEAM Educator & Course Creator",
    img: kelsi, logo: kelsi_logo, initial: "K",
  },
  {
    summary: "Four-figure launch and her weekends back.",
    quote: "I went from random email marketing to launching strategically through email which gave me a four figure launch. Arsh gave me the confidence to put out more offers and use the tech to my advantage.",
    name: "Mangla Sachdev", title: "Business Coach — Expat Business in a Bag",
    img: mangla, logo: mangla_logo, initial: "M",
  },
  {
    summary: "One meeting turned a breakdown day into a breakthrough.",
    quote: "This was my one day dedicated to client work. I hit one wall after another. I had to call my mom for emotional support. You have set my day back on track.",
    name: "Allysha Lavino", title: "Real Life Magic",
    img: allysha, logo: allysha_logo, initial: "A",
  },
];

// ─── Components ────────────────────────────────────────────────

function Nav() {
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
      <a href="#home" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 34, height: 34, borderRadius: "50%", backgroundColor: TEAL, display: "flex", alignItems: "center", justifyContent: "center", color: WHITE, fontWeight: 700, fontSize: 14, fontFamily: "DM Sans, sans-serif", flexShrink: 0 }}>A</div>
        <div>
          <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 14, color: DARK, margin: 0, lineHeight: 1.1 }}>Arsh Agarwal</p>
          <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 10, color: MUTED, margin: 0, letterSpacing: "0.08em", textTransform: "uppercase" }}>Tech Concierge</p>
        </div>
      </a>

      {/* Nav links */}
      <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
        {[
          ["#home", "Home"],
          ["#values", "Values"],
          ["/tameyourtech", "Tame Your Tech"],
          ["#services", "Tech Whisperer"],
          ["#services", "Packages"],
          ["/audit", "Tech Audit"],
          ["https://arshtechguru.square.site/tame-your-tech", "DKIM Guide Bundle"],
          ["/speaker", "Speaker Page"],
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

function Hero() {
  return (
    <section id="home" style={{ minHeight: "100vh", backgroundColor: CREAM, display: "flex", flexDirection: "column", justifyContent: "center", padding: "120px 48px 80px", position: "relative", overflow: "hidden" }}>
      {/* Organic blobs */}
      <div style={{ position: "absolute", top: "5%", right: "-5%", width: 500, height: 500, borderRadius: "62% 38% 50% 50% / 55% 45% 55% 45%", backgroundColor: TEAL, opacity: 0.06, pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "5%", left: "-8%", width: 380, height: 380, borderRadius: "42% 58% 65% 35% / 45% 55% 45% 55%", backgroundColor: TAN, opacity: 0.1, pointerEvents: "none" }} />
      {/* Ghost bg text */}
      <div style={{ position: "absolute", bottom: 0, right: "-2%", fontFamily: "'Playfair Display', serif", fontSize: "22vw", fontWeight: 700, color: "transparent", WebkitTextStroke: `1px ${TEAL}08`, lineHeight: 0.85, pointerEvents: "none", userSelect: "none" }}>TC</div>

      <div style={{ maxWidth: 900, margin: "0 auto", position: "relative" }}>
        <Reveal delay={0}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <div style={{ width: 32, height: 1, backgroundColor: TEAL, opacity: 0.5 }} />
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: TEAL, margin: 0 }}>Tech Concierge · Arsh Agarwal</p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(2.8rem, 7vw, 6rem)", lineHeight: 1.0, color: DARK, marginBottom: 8, letterSpacing: "-0.01em" }}>
            Hand off the tech.<br />
            <span style={{ color: TEAL }}>Get back to the work</span><br />
            <span style={{ WebkitTextStroke: `1px ${DARK}`, color: "transparent" }}>you actually love.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.18}>
          <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 18, lineHeight: 1.75, color: MID, maxWidth: 540, margin: "28px 0 16px" }}>
            Empathic, passionate copywriters, course creators, and coaches — if tech is what's holding you back, you've found your person.
          </p>
          <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 15, lineHeight: 1.7, color: MUTED, maxWidth: 500, marginBottom: 36 }}>
            I handle the platforms, the automations, the integrations, and everything that breaks right before a launch — so you can focus on serving your clients and enjoying your life.
          </p>
        </Reveal>

        <Reveal delay={0.28}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
            <a href="/audit" target="_blank" rel="noopener noreferrer"
              style={{ backgroundColor: TEAL, color: WHITE, fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: 15, padding: "16px 36px", borderRadius: 99, textDecoration: "none", boxShadow: `0 4px 28px ${TEAL}40`, transition: "all 0.2s" }}>
              Take the Tech Audit
            </a>
            <a href="#services"
              style={{ backgroundColor: "transparent", color: TEAL, fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: 15, padding: "16px 28px", borderRadius: 99, textDecoration: "none", border: `2px solid ${TAN_LT}`, transition: "all 0.2s" }}>
              See How I Help ↓
            </a>
          </div>
        </Reveal>

        {/* Credential strip */}
        <Reveal delay={0.38}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 40, marginTop: 64, paddingTop: 40, borderTop: `1px solid ${TAN_LT}` }}>
            {[
              { v: "B.S.", l: "Computer Science, UMD" },
              { v: "2+", l: "Years as Tech Concierge" },
              { v: "100+", l: "Client Hours Saved!" },
            ].map((s, i) => (
              <div key={i}>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 700, color: TEAL, lineHeight: 1, margin: 0 }}>{s.v}</p>
                <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 11, color: MUTED, marginTop: 4, letterSpacing: "0.06em", textTransform: "uppercase" }}>{s.l}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SageSpotlight() {
  return (
    <section style={{ backgroundColor: WHITE, padding: "80px 48px" }}>
      <div style={{ maxWidth: 820, margin: "0 auto" }}>
        <Reveal>
          <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: TAN, marginBottom: 8, textAlign: "center" }}>— Trusted By —</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: DARK, textAlign: "center", marginBottom: 36 }}>
            But don't just take my word for it...
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          {/* Video embed */}
          <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: `0 8px 40px rgba(0,0,0,0.1)`, border: `2px solid ${TAN_LT}`, position: "relative", paddingBottom: "56.25%", height: 0, marginBottom: 24 }}>
          <iframe
            src="https://www.youtube.com/embed/g8FyNwzz9UU"
            title="Sage Polaris on Arsh Agarwal"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none"
            }}
          />
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          {/* Sage testimonial card */}
          <div style={{ backgroundColor: CREAM, borderRadius: 16, padding: "28px 32px", border: `1px solid ${TAN_LT}` }}>
            <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(1rem, 2vw, 1.15rem)", color: DARK, marginBottom: 12, lineHeight: 1.5 }}>
            "If you have tech or funnel building issues, Arsh is a wonderful resource!"
            </p>
            
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <img src={sage} alt="Sage Polaris"
                style={{ width: 48, height: 48, borderRadius: "50%", objectFit: "cover", border: `2px solid ${TAN_LT}`, flexShrink: 0 }}
                onError={e => { e.target.style.display = "none"; e.target.parentElement.innerHTML = `<div style="width:48px;height:48px;border-radius:50%;background:${TEAL};display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:16px;flex-shrink:0">S</div>` + e.target.parentElement.innerHTML; }}
              />
              <div>
                <p style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: 14, color: DARK, margin: 0 }}>Sage Polaris</p>
                <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, color: MUTED, margin: 0 }}>Copywriting Coach & Launch Strategist</p>
              </div>
              <img src={sage_logo} alt="Sage Polaris" style={{ height: 28, width: "auto", objectFit: "contain", marginLeft: "auto", opacity: 0.7 }} onError={e => e.target.style.display = "none"} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PainSection() {
  return (
    <section style={{ backgroundColor: DARK, padding: "90px 48px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Reveal>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
            <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: 11, color: TAN, letterSpacing: "0.18em", opacity: 0.7 }}>— 01</span>
            <div style={{ width: 28, height: 1, backgroundColor: TAN, opacity: 0.35 }} />
            <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: TAN }}>You're in the right place if...</span>
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(2rem, 4.5vw, 3.5rem)", color: WHITE, marginBottom: 52, lineHeight: 1.1 }}>
            The tech is supposed to work <em style={{ color: TAN }}>for</em> you.<br />
            <span style={{ WebkitTextStroke: `1px rgba(255,255,255,0.3)`, color: "transparent" }}>Not the other way around.</span>
          </h2>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 1, border: "1px solid rgba(255,255,255,0.06)", borderRadius: 4, overflow: "hidden" }}>
          {painPoints.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div style={{ padding: "30px 26px", backgroundColor: "rgba(255,255,255,0.03)", borderRight: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", transition: "background 0.3s" }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = "rgba(61,114,103,0.12)"}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.03)"}
              >
                <div style={{ fontSize: 26, marginBottom: 12 }}>{p.e}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 17, color: WHITE, marginBottom: 8 }}>{p.h}</h3>
                <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, margin: 0 }}>{p.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// Scattered testimonial card
function TestimonialCard({ t, bg }) {
  return (
    <section style={{ backgroundColor: bg || WHITE, padding: "56px 48px" }}>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <Reveal>
          <div style={{ backgroundColor: bg === WHITE ? CREAM : WHITE, borderRadius: 16, padding: "32px 36px", border: `1px solid ${TAN_LT}`, position: "relative" }}>
            <span style={{ position: "absolute", top: 16, left: 24, fontFamily: "'Playfair Display', serif", fontSize: 56, color: TAN, opacity: 0.25, lineHeight: 1 }}>"</span>
            <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(1rem, 2vw, 1.1rem)", color: DARK, marginBottom: 10, lineHeight: 1.45, paddingTop: 12 }}>"{t.summary}"</p>
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 14, fontStyle: "italic", color: MID, lineHeight: 1.7, marginBottom: 20 }}>"{t.quote}"</p>
            <div style={{ display: "flex", alignItems: "center", gap: 12, borderTop: `1px solid ${TAN_LT}`, paddingTop: 16 }}>
              <div style={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: TEAL, display: "flex", alignItems: "center", justifyContent: "center", color: WHITE, fontWeight: 700, fontSize: 15, fontFamily: "DM Sans, sans-serif", flexShrink: 0 }}><img src={t.img} /></div>
              <div>
                <p style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: 14, color: DARK, margin: 0 }}>{t.name}</p>
                <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, color: MUTED, margin: 0 }}>{t.title}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" style={{ backgroundColor: CREAM, padding: "90px 48px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "50%", right: "-4%", transform: "translateY(-50%)", fontFamily: "'Playfair Display', serif", fontSize: "26vw", fontWeight: 700, color: "transparent", WebkitTextStroke: `1px ${TEAL}06`, lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>A</div>
      <div style={{ maxWidth: 1000, margin: "0 auto", position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
        <Reveal dir="left">
          <div style={{ position: "relative" }}>
            <div style={{ borderRadius: "42% 58% 55% 45% / 52% 48% 52% 48%", overflow: "hidden", aspectRatio: "1", border: `3px solid ${TAN_LT}`, boxShadow: `0 24px 80px rgba(61,114,103,0.15)`, backgroundColor: TEAL_LT }}>
              <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {/* PLACEHOLDER: Add ../assets/arsh-headshot.jpg here */}
                <img src={arsh} />
              </div>
            </div>
            <div style={{ position: "absolute", bottom: -10, left: -10, right: 40, height: 2, backgroundColor: TAN, opacity: 0.5 }} />
            <div style={{ position: "absolute", top: 20, right: -24, backgroundColor: WHITE, borderRadius: 10, padding: "12px 16px", boxShadow: "0 8px 28px rgba(0,0,0,0.1)", border: `1px solid ${TAN_LT}` }}>
              <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 24, color: TEAL, margin: 0, lineHeight: 1 }}>UMD</p>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 9, color: MUTED, margin: 0, letterSpacing: "0.06em", textTransform: "uppercase" }}>Computer Science</p>
            </div>
          </div>
        </Reveal>

        <Reveal dir="right" delay={0.1}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ width: 28, height: 1, backgroundColor: TEAL, opacity: 0.5 }} />
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: TEAL, margin: 0 }}>— 02 · About Arsh</p>
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: DARK, marginBottom: 20, lineHeight: 1.15 }}>
              Former IT project manager.<br />
              <span style={{ color: TEAL, fontStyle: "italic" }}>Now your tech concierge.</span>
            </h2>
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 15, color: MID, lineHeight: 1.8, marginBottom: 14 }}>
              My experience in IT as a project manager taught me how to implement and troubleshoot the technology that supports business processes. I loved bringing businesses to life — but I wanted more. I wanted to work on my own time with passionate clients who appreciated what I did.
            </p>
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 15, color: MID, lineHeight: 1.8, marginBottom: 28 }}>
              Today I specialize in simplifying your tech woes and enhancing your brand. I help coaches, copywriters, and service providers flesh out their launch plans, nurturing sequences, and business processes — and implement the technology required to make them a reality without the headache.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 28 }}>
              {[
                ["💻", "B.S. Computer Science — University of Maryland"],
                ["🏢", "Former IT Project Manager"],
                ["⚙️", "Kartra, Kajabi, GoHighLevel, WordPress, Zapier + more"],
                ["🌱", "Building tech that works for your business, not against it"],
              ].map(([icon, text], i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "10px 14px", borderLeft: `2px solid ${TAN_LT}`, backgroundColor: `${TEAL}08`, borderRadius: "0 8px 8px 0" }}>
                  <span style={{ fontSize: 14, flexShrink: 0 }}>{icon}</span>
                  <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 13, color: MID, margin: 0, lineHeight: 1.5 }}>{text}</p>
                </div>
              ))}
            </div>
            <a href="https://tidycal.com/arshtist/60min" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", backgroundColor: TEAL, color: WHITE, fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: 14, padding: "14px 30px", borderRadius: 99, textDecoration: "none", boxShadow: `0 0 28px ${TEAL}25` }}>
              Book a Free 15-Min Call →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ValuesSection() {
  return (
    <section id="values" style={{ backgroundColor: WHITE, padding: "90px 48px" }}>
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "center", marginBottom: 16 }}>
              <div style={{ width: 28, height: 1, backgroundColor: TEAL, opacity: 0.5 }} />
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: TEAL, margin: 0 }}>— 03 · My Values</p>
              <div style={{ width: 28, height: 1, backgroundColor: TEAL, opacity: 0.5 }} />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: DARK, marginBottom: 12 }}>
              When we work together, I don't just do work for you.
            </h2>
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 16, color: MID, maxWidth: 540, margin: "0 auto", lineHeight: 1.7 }}>
              I appreciate that you've trusted me with a business that's deeply personal and close to your heart. That's why these five values guide every engagement.
            </p>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
          {values.map((v, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div style={{ backgroundColor: CREAM, borderRadius: 16, padding: "28px 22px", textAlign: "center", border: `1px solid ${TAN_LT}`, transition: "all 0.3s" }}
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

function ServicesSection() {
  return (
    <section id="services" style={{ backgroundColor: CREAM, padding: "90px 48px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "center", marginBottom: 16 }}>
              <div style={{ width: 28, height: 1, backgroundColor: TEAL, opacity: 0.5 }} />
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: TEAL, margin: 0 }}>— 04 · How I Can Help</p>
              <div style={{ width: 28, height: 1, backgroundColor: TEAL, opacity: 0.5 }} />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: DARK, marginBottom: 12 }}>
              I can help you with...
            </h2>
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 16, color: MID, maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
              Pick the level of support that fits your business right now.
            </p>
          </div>
        </Reveal>

        {/* Services list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div style={{ backgroundColor: WHITE, borderRadius: 16, padding: "36px 36px", border: `1px solid ${TAN_LT}`, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36, alignItems: "start", transition: "box-shadow 0.3s, border-color 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 8px 40px rgba(61,114,103,0.1)`; e.currentTarget.style.borderColor = `${TEAL}30`; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = TAN_LT; }}
              >
                <div>
                  <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 14 }}>
                    <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "3px 10px", borderRadius: 99, backgroundColor: `${s.color}15`, color: s.color }}>{s.tag}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", color: DARK, marginBottom: 6, lineHeight: 1.2 }}>{s.title}</h3>
                  <p style={{ fontFamily: "DM Sans, sans-serif", fontStyle: "italic", fontSize: 14, color: s.color, marginBottom: 12 }}>{s.tagline}</p>
                  <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 14, color: MID, lineHeight: 1.75, marginBottom: 20 }}>{s.body}</p>
                  <a href={s.link} style={{ display: "inline-block", backgroundColor: s.color, color: WHITE, fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: 13, padding: "11px 24px", borderRadius: 99, textDecoration: "none" }}>
                    {s.cta}
                  </a>
                </div>
                <div>
                  <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: MUTED, marginBottom: 14 }}>Includes</p>
                  {s.items.map((item, j) => (
                    <div key={j} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                      <span style={{ color: s.color, flexShrink: 0 }}>✓</span>
                      <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 13, color: MID, margin: 0, lineHeight: 1.5 }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Also help with list */}
        <Reveal delay={0.1}>
          <div style={{ backgroundColor: WHITE, borderRadius: 16, padding: "28px 32px", border: `1px solid ${TAN_LT}` }}>
            <p style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: 13, color: DARK, marginBottom: 16, letterSpacing: "0.05em", textTransform: "uppercase" }}>I can also help you with:</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 20px" }}>
              {["Mapping & digitizing business processes", "Email automations", "Web integrations", "CRM management", "Troubleshooting", "Creating SOPs", "Calendar management", "Video editing", "Administrative tasks"].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 6, alignItems: "center" }}>
                  <span style={{ color: TAN, fontSize: 12 }}>✦</span>
                  <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 13, color: MID, margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AuditCTA() {
  return (
    <section style={{ backgroundColor: TEAL, padding: "90px 48px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 400, borderRadius: "50%", backgroundColor: WHITE, opacity: 0.04, pointerEvents: "none" }} />
      <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center", position: "relative" }}>
        <Reveal>
          <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: 20 }}>Free · 5 Minutes · No Tech Knowledge Required</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.8rem)", color: WHITE, marginBottom: 18, lineHeight: 1.1 }}>
            Not sure where<br />
            your tech is <em>breaking?</em>
          </h2>
          <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 17, color: "rgba(255,255,255,0.85)", lineHeight: 1.7, maxWidth: 480, margin: "0 auto 40px" }}>
            Take the free Automation Audit. 5 honest questions about your business — and you'll know exactly what to fix first.
          </p>
          <a href="/audit" target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-block", backgroundColor: WHITE, color: TEAL, fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: 16, padding: "18px 44px", borderRadius: 99, textDecoration: "none", boxShadow: "0 8px 32px rgba(0,0,0,0.15)", transition: "all 0.2s" }}>
            Take the Free Automation Audit →
          </a>
          <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 16 }}>Use code <strong style={{ color: "rgba(255,255,255,0.85)", letterSpacing: "0.06em" }}>AUTOMATION</strong> at checkout for 100% off</p>
        </Reveal>
      </div>
    </section>
  );
}

function TrustedBy() {
  const logos = [
    { src: allysha_logo, alt: "Allysha Lavino" },
    { src: sage_logo, alt: "Sage Polaris" },
    { src: tracy_logo, alt: "Tracy Kay" },
    { src: mangla_logo, alt: "Business in a Bag" },
    { src: bilingual_logo, alt: "Bilingual Roadmap" },
    { src: kirby_logo, alt: "KA Consulting" },
    { src: kelsi_logo, alt: "Joie Lab" }
  ];
  return (
    <section style={{ backgroundColor: WHITE, padding: "40px 48px" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <Reveal>
          <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: TAN, textAlign: "center", marginBottom: 24 }}>Trusted By</p>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "16px 40px" }}>
            {logos.map((logo, i) => (
              <img key={i} src={logo.src} alt={logo.alt}
                style={{ height: 32, width: "auto", objectFit: "contain", opacity: 0.55, filter: "grayscale(100%)", transition: "all 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.filter = "none"; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = "0.55"; e.currentTarget.style.filter = "grayscale(100%)"; }}
                onError={e => e.target.style.display = "none"}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ backgroundColor: DARK, padding: "32px 48px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
        <div>
          <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 14, color: `${TEAL}CC`, margin: 0 }}>Arsh Agarwal · Tech Concierge</p>
          <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 11, color: "#555", margin: "2px 0 0", letterSpacing: "0.05em" }}>arshtist@gmail.com</p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
          {[
            ["../pages/TameYourTech", "Tame Your Tech"],
            ["../pages/TechWhisperer", "Tech Whisperer"],
            ["https://arshtechguru.square.site/tech-guru-packages", "Packages"],
            ["https://arshie26.github.io/techgurusurvey/", "Automation Audit"],
            ["../pages/SpeakerPage", "Speaker"],
            ["mailto:arshtist@gmail.com", "Contact"],
          ].map(([href, label]) => (
            <a key={label} href={href}
              style={{ color: "#555", fontFamily: "DM Sans, sans-serif", fontSize: 11, textDecoration: "none", letterSpacing: "0.05em", transition: "color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.color = `${TEAL}AA`}
              onMouseLeave={e => e.currentTarget.style.color = "#555"}
            >{label}</a>
          ))}
        </div>
        <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 11, color: "#333", margin: 0 }}>
          © {new Date().getFullYear()} Arsh Agarwal
        </p>
      </div>
    </footer>
  );
}

export default function Homepage() {
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
      <Nav />
      <Hero />
      <SageSpotlight />
      <PainSection />
      <TestimonialCard t={testimonials[0]} bg={WHITE} />
      <AboutSection />
      <TrustedBy />
      <ValuesSection />
      <TestimonialCard t={testimonials[1]} bg={CREAM} />
      <ServicesSection />
      <TestimonialCard t={testimonials[2]} bg={WHITE} />
      <AuditCTA />
      <Footer />
    </div>
  );
}
