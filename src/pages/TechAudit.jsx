// TechScorecard.jsx
// Survey/lead magnet page for Arsh Agarwal Tech Concierge
// Embeds the existing Google Form and wraps it with branded copy + offer cards

import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

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

export default function TechScorecard() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);


  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F5EDE0", fontFamily: "DM Sans, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@400;500;600;700&display=swap');

        .survey-page * { box-sizing: border-box; }

        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.6s ease forwards;
        }
        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        .delay-4 { animation-delay: 0.4s; }

        .pill-tag {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 99px;
          background: #EAF2F0;
          color: #3D7267;
          margin-bottom: 16px;
        }

        .check-item {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          margin-bottom: 12px;
          font-size: 15px;
          color: #444;
          line-height: 1.5;
        }
        .check-item .icon { flex-shrink: 0; color: #3D7267; font-weight: 700; margin-top: 1px; }

        .dot-item {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          margin-bottom: 10px;
          font-size: 15px;
          color: #555;
          line-height: 1.5;
        }
        .dot-item::before {
          content: "•";
          color: #C4A882;
          flex-shrink: 0;
          font-size: 18px;
          line-height: 1.3;
        }

        .offer-card {
          border-radius: 20px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .offer-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.12);
        }

        .cta-btn {
          display: inline-block;
          padding: 14px 36px;
          border-radius: 99px;
          font-weight: 700;
          font-size: 16px;
          text-decoration: none;
          transition: opacity 0.2s ease, transform 0.2s ease;
          cursor: pointer;
          border: none;
        }
        .cta-btn:hover { opacity: 0.9; transform: translateY(-1px); }

        .divider-line {
          height: 1px;
          background: linear-gradient(to right, transparent, #C4A882, transparent);
          margin: 0 auto;
          max-width: 200px;
        }

        .form-wrapper {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 40px rgba(0,0,0,0.1);
          border: 2px solid #E8DDD0;
          background: white;
        }

        .nav-link {
          font-size: 14px;
          font-weight: 600;
          color: #3D7267;
          text-decoration: none;
          opacity: 0.8;
          transition: opacity 0.2s;
        }
        .nav-link:hover { opacity: 1; }

        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .offers-grid { grid-template-columns: 1fr !important; }
          .stats-row { flex-direction: column !important; gap: 16px !important; }
        }
      `}</style>

      <div className="survey-page">

        

        
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
          ["/#services", "Packages"],
          ["/audit", "Tech Audit"],
          ["/speaker", "Speaker Page"],
          ["https://tidycal.com/arshtist/60min", "Book a Call"]

        ].map(([href, label]) => (
          <a key={label} href={href}
            style={{ fontFamily: "DM Sans, sans-serif", fontSize: 13, fontWeight: 500, color: DARK, textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.color = TEAL}
            onMouseLeave={e => e.currentTarget.style.color = DARK}
          >{label}</a>
        ))}

        </div>  
      </nav>

        {/* ── HERO ── */}
        <section style={{ padding: "72px 24px 80px", maxWidth: 900, margin: "0 auto" }}>
          <div className="fade-in">
            <span className="pill-tag">Automation Audit · 5 Minutes</span>
          </div>
          <h1 className="fade-in delay-1" style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 700,
            color: "#1C1C1C",
            lineHeight: 1.2,
            maxWidth: 720,
            marginBottom: 20
          }}>
            Your automations might be broken —{" "}
            <span style={{ color: "#3D7267", fontStyle: "italic" }}>and you might not know it yet.</span>
          </h1>
          <p className="fade-in delay-2" style={{ fontSize: 18, color: "#555", lineHeight: 1.7, maxWidth: 580, marginBottom: 16 }}>
            The Automation Audit is a 5-minute self-assessment that shows you exactly where your systems are leaking leads, wasting time, or quietly breaking down between launches.
          </p>
          <p className="fade-in delay-2" style={{ fontSize: 15, color: "#888", lineHeight: 1.6, maxWidth: 540, marginBottom: 32 }}>
            No tech knowledge required. Just honest answers about how your business actually runs — and a clear picture of what to fix first.
          </p>
          <div className="fade-in delay-3" style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
            <a href="#get-access" className="cta-btn" style={{ backgroundColor: "#3D7267", color: "white" }}>
              Audit my automations →
            </a>
            <span style={{ fontSize: 13, color: "#888" }}>Coaches · Copywriters · Service Providers</span>
          </div>
        </section>

        {/* ── PRICE ANCHOR BANNER ── */}
        <section style={{ backgroundColor: "#3D7267", padding: "18px 24px" }}>
          <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 16, textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
              <span style={{ fontFamily: "Playfair Display, serif", fontSize: 28, fontWeight: 700, color: "white" }}>$47</span>
              <span style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", textDecoration: "line-through" }}>$97</span>
            </div>
            <div style={{ width: 1, height: 24, backgroundColor: "rgba(255,255,255,0.2)", flexShrink: 0 }} />
            <p style={{ color: "rgba(255,255,255,0.9)", fontSize: 14, margin: 0, fontFamily: "DM Sans, sans-serif" }}>
              50% OFF for a LIMITED TIME
            </p>
            <div style={{ width: 1, height: 24, backgroundColor: "rgba(255,255,255,0.2)", flexShrink: 0 }} />
            <a href="#get-access" style={{ color: "white", fontSize: 13, fontWeight: 700, textDecoration: "none", opacity: 0.9 }}>
              Claim Now →
            </a>
          </div>
        </section>

        {/* ── REALITY SECTION ── */}
        <section style={{ backgroundColor: "#1C1C1C", padding: "72px 24px" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span className="pill-tag" style={{ backgroundColor: "rgba(61,114,103,0.3)", color: "#A8D4CC" }}>Sound Familiar?</span>
              <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 700, color: "white", marginBottom: 12 }}>
                The automations you built to save time might be the thing costing you the most.
              </h2>
              <p style={{ color: "#888", fontSize: 16, maxWidth: 520, margin: "0 auto" }}>
                You set it up. You assumed it was working. But here's what's actually happening:
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, marginBottom: 40 }}>
              {[
                { emoji: "📭", text: "New subscribers are opting in but never getting your welcome email — the automation silently broke months ago" },
                { emoji: "🛒", text: "Someone bought your offer and got… nothing. No receipt, no delivery, no onboarding" },
                { emoji: "🕳️", text: "Leads are entering your funnel and disappearing — no follow-up, no sequence, no idea where they went" },
                { emoji: "🔁", text: "You're manually doing things every week that were supposed to be automated by now" },
                { emoji: "🚨", text: "A launch is coming and you have no idea if your tech will hold" },
                { emoji: "🤷", text: "You built the system once and haven't checked if it's still working since" },
              ].map((item, i) => (
                <div key={i} style={{ backgroundColor: "rgba(255,255,255,0.05)", borderRadius: 14, padding: "20px 22px", display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 22, flexShrink: 0 }}>{item.emoji}</span>
                  <p style={{ color: "#ccc", fontSize: 14, lineHeight: 1.6, margin: 0 }}>{item.text}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", padding: "24px 32px", backgroundColor: "rgba(61,114,103,0.15)", borderRadius: 16, border: "1px solid rgba(61,114,103,0.3)" }}>
              <p style={{ color: "#A8D4CC", fontSize: 16, fontStyle: "italic", margin: 0 }}>
                "Most business owners don't find out their automations are broken until a launch goes sideways, a client doesn't get their onboarding, or a subscriber writes in asking why they never heard back."
              </p>
            </div>
          </div>
        </section>

        {/* ── WHAT THE SCORECARD GIVES YOU ── */}
        <section style={{ padding: "72px 24px", backgroundColor: "#F5EDE0" }}>
          <div style={{ maxWidth: 860, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }} className="hero-grid">
            <div>
              <span className="pill-tag">The Automation Audit</span>
              <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, color: "#1C1C1C", marginBottom: 16, lineHeight: 1.3 }}>
                5 minutes to find out what's actually working — and what isn't.
              </h2>
              <p style={{ color: "#555", fontSize: 15, lineHeight: 1.7, marginBottom: 24 }}>
                The Automation Audit is a straight-talking self-assessment for coaches, copywriters, and service providers. No jargon. No complicated tech knowledge required. Just a clear-eyed look at the systems running your business right now — and an honest score that tells you where things stand.
              </p>
              <a href="#get-access" className="cta-btn" style={{ backgroundColor: "#3D7267", color: "white", fontSize: 15 }}>
                Audit my automations →
              </a>
            </div>
            <div style={{ backgroundColor: "white", borderRadius: 20, padding: 32, border: "1px solid #E8DDD0", boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}>
              <p style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: 16, color: "#1C1C1C", marginBottom: 20 }}>
                In about 5 minutes, you'll know:
              </p>
              {[
                "Whether your lead capture and welcome sequences are actually firing",
                "Where your sales and delivery automations have gaps or breaks",
                "Which manual tasks in your business could (and should) be automated",
                "How your email deliverability setup is holding up",
                "Your Automation Health Score — and what it means",
              ].map((item, i) => (
                <div key={i} className="check-item">
                  <span className="icon">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHO IT'S FOR ── */}
        <section style={{ backgroundColor: "white", padding: "72px 24px" }}>
          <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
            <span className="pill-tag">Who This Is For</span>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, color: "#1C1C1C", marginBottom: 16 }}>
              This audit is for you if:
            </h2>
            <p style={{ color: "#555", fontSize: 15, marginBottom: 36, lineHeight: 1.7 }}>
              The Automation Audit was built for coaches, copywriters, and service providers who:
            </p>
            <div style={{ textAlign: "left", display: "inline-block", maxWidth: 480 }}>
              {[
                "Have set up automations before — but aren't 100% sure they're still working",
                "Are generating consistent revenue and want their backend to finally match",
                "Have experienced a broken checkout, a missed delivery, or a ghost subscriber",
                "Know their systems could be tighter but don't know where to start",
                "Are heading into a launch and want to know their tech won't let them down",
              ].map((item, i) => (
                <div key={i} className="dot-item">{item}</div>
              ))}
            </div>
            <div style={{ marginTop: 32, padding: "20px 28px", backgroundColor: "#F5EDE0", borderRadius: 14, border: "1px solid #E8DDD0" }}>
              <p style={{ color: "#555", fontSize: 14, fontStyle: "italic", margin: 0 }}>
                If your tech sometimes feels like a pile of apps duct-taped together — this will help.
              </p>
            </div>
          </div>
        </section>

        {/* ── THE SURVEY ── */}
        <section id="get-access" style={{ padding: "72px 24px", backgroundColor: "#F5EDE0" }}>
          <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
            <span className="pill-tag">Audit my automations</span>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, color: "#1C1C1C", marginBottom: 12 }}>
              Claim your Automation Audit
            </h2>
            <p style={{ color: "#555", fontSize: 15, maxWidth: 420, margin: "0 auto 32px", lineHeight: 1.7 }}>
              Click below to claim your access. You'll receive the audit link instantly by email — takes about 5 minutes to complete.
            </p>
            <div style={{ backgroundColor: "white", borderRadius: 20, padding: "36px 32px", border: "2px solid #E8DDD0", boxShadow: "0 4px 24px rgba(0,0,0,0.07)", marginBottom: 16 }}>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "baseline", gap: 8, marginBottom: 8 }}>
                <span style={{ fontFamily: "Playfair Display, serif", fontSize: 42, fontWeight: 700, color: "#3D7267" }}>$47</span>
                <span style={{ fontSize: 16, color: "#888", textDecoration: "line-through" }}>$97</span>
              </div>
              <p style={{ color: "#888", fontSize: 13, marginBottom: 24 }}>100% off — apply code <strong>AUTOMATION</strong> at checkout</p>
              <a
                href="https://buy.stripe.com/cNicN444l0q4djre971gs0b"
                className="cta-btn"
                style={{ backgroundColor: "#3D7267", color: "white", display: "block", textAlign: "center", fontSize: 16 }}
              >
                {/* REPLACE href with your Stripe payment link */}
                Audit my automations →
              </a>
              <p style={{ color: "#aaa", fontSize: 12, marginTop: 16 }}>
                You'll receive the audit link by email immediately after checkout.
              </p>
            </div>
            
          </div>
        </section>

        {/* ── WHAT HAPPENS AFTER ── */}
        <section style={{ backgroundColor: "#3D7267", padding: "72px 24px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
            <span className="pill-tag" style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "white" }}>What Happens Next</span>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, color: "white", marginBottom: 16 }}>
              You'll know in 5 minutes.
            </h2>
            <p style={{ color: "#D6EDE8", fontSize: 16, lineHeight: 1.7, maxWidth: 560, margin: "0 auto 40px" }}>
              Claim your free access, complete the 5-minute audit, and get your Automation Health Score. You'll also receive follow-up emails with clarity on your specific gaps and how to fix them — from someone who actually builds these systems for a living.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, maxWidth: 600, margin: "0 auto" }}>
              {[
                { step: "01", label: "Claim free access — code applied at Stripe checkout" },
                { step: "02", label: "Receive the audit link instantly by email" },
                { step: "03", label: "Complete the 5-minute audit and get your score" },
              ].map((s, i) => (
                <div key={i} style={{ backgroundColor: "rgba(255,255,255,0.1)", borderRadius: 14, padding: "24px 20px", textAlign: "center" }}>
                  <p style={{ fontFamily: "Playfair Display, serif", fontSize: 32, fontWeight: 700, color: "rgba(255,255,255,0.3)", margin: "0 0 8px" }}>{s.step}</p>
                  <p style={{ color: "white", fontSize: 14, lineHeight: 1.5, margin: 0 }}>{s.label}</p>
                </div>
              ))}
            </div>

            {/* Score callout */}
            <div style={{ marginTop: 48, padding: "28px 32px", backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 16 }}>
              <p style={{ color: "#A8D4CC", fontSize: 14, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 8 }}>
                If you scored below 30
              </p>
              <p style={{ color: "white", fontSize: 16, lineHeight: 1.6, margin: 0 }}>
                You don't need more strategy or a new platform. You need someone to get in there and fix what's broken. That's exactly what I do.
              </p>
            </div>
          </div>
        </section>

        {/* ── OFFERS ── */}
        <section style={{ padding: "72px 24px", backgroundColor: "#F5EDE0" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span className="pill-tag">How We Can Work Together</span>
              <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, color: "#1C1C1C", marginBottom: 12 }}>
                Ready to fix what the audit reveals?
              </h2>
              <p style={{ color: "#555", fontSize: 15, maxWidth: 480, margin: "0 auto" }}>
                Two ways to get your automations working the way they should.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="offers-grid">

              {/* Tame Your Tech */}
              <div className="offer-card" style={{ backgroundColor: "white", border: "2px solid #E8DDD0", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
                <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#3D7267" }}>Lightweight Support</span>
                <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: 24, fontWeight: 700, color: "#1C1C1C", margin: 0 }}>Tame Your Tech</h3>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                  <span style={{ fontFamily: "Playfair Display, serif", fontSize: 36, fontWeight: 700, color: "#3D7267" }}>$150</span>
                  <span style={{ color: "#888", fontSize: 14 }}>/month</span>
                </div>
                <div className="divider-line" style={{ margin: "4px 0" }} />
                {[
                  "Pick one tech task per month — I handle it",
                  "Platform connections, mini automations, page setups",
                  "Email analytics checkup or quick troubleshoot",
                  "Email, text & co-working support",
                  "Cancel anytime",
                ].map((f, i) => (
                  <div key={i} className="check-item" style={{ marginBottom: 8 }}>
                    <span className="icon" style={{ fontSize: 13 }}>✓</span>
                    <span style={{ fontSize: 14, color: "#444" }}>{f}</span>
                  </div>
                ))}
                <a href="https://arshtechguru.square.site/tame-your-tech" target="_blank" rel="noopener noreferrer"
                  className="cta-btn" style={{ backgroundColor: "#3D7267", color: "white", textAlign: "center", marginTop: "auto", fontSize: 14 }}>
                  Learn More →
                </a>
              </div>

              {/* Tech Whisperer */}
              <div className="offer-card" style={{ backgroundColor: "#1C1C1C", border: "2px solid #3D7267", boxShadow: "0 8px 40px rgba(0,0,0,0.2)" }}>
                <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A8D4CC" }}>Full Management</span>
                <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: 24, fontWeight: 700, color: "white", margin: 0 }}>Tech Whisperer</h3>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                  <span style={{ fontFamily: "Playfair Display, serif", fontSize: 36, fontWeight: 700, color: "#A8D4CC" }}>$1,000</span>
                  <span style={{ color: "#666", fontSize: 14 }}>/month</span>
                </div>
                <div style={{ height: 1, background: "rgba(196,168,130,0.3)", margin: "4px 0" }} />
                {[
                  "Complete management of your tech ecosystem",
                  "A tech whisperer on call (Voxer/Slack)",
                  "Seamless operations across all platforms",
                  "Ongoing maintenance + troubleshooting",
                  "Monthly tech directions + decisions roadmap",
                ].map((f, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 8 }}>
                    <span style={{ color: "#3D7267", fontWeight: 700, fontSize: 13, flexShrink: 0, marginTop: 1 }}>✓</span>
                    <span style={{ fontSize: 14, color: "#ccc", lineHeight: 1.5 }}>{f}</span>
                  </div>
                ))}
                <a href="https://arshtechguru.square.site/tech-whisperer" target="_blank" rel="noopener noreferrer"
                  className="cta-btn" style={{ backgroundColor: "#3D7267", color: "white", textAlign: "center", marginTop: "auto", fontSize: 14 }}>
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{ backgroundColor: "#1C1C1C", padding: "32px 24px" }}>
          <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
            <p style={{ color: "#555", fontSize: 13, margin: 0 }}>
              © {new Date().getFullYear()} Arsh Agarwal · Tech Concierge
            </p>
            <div style={{ display: "flex", gap: 24 }}>
              <a href="https://techconcierge.vercel.app/" target="_blank" rel="noopener noreferrer" className="nav-link" style={{ color: "#666" }}>
                arshtechguru.square.site
              </a>
              <a href="mailto:arshtist@gmail.com" className="nav-link" style={{ color: "#666" }}>
                arshtist@gmail.com
              </a>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
