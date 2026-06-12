// ChristmasAudit.jsx
// Christmas-themed Automation Audit page for Arsh Agarwal / Tech Concierge
// Based on TechAudit.jsx, with festive copy + Stripe link

import { useState, useEffect } from 'react';

const PINE     = "#1B4332";
const PINE_LT  = "#E7F0EA";
const SNOW     = "#F7F4EC";
const BERRY    = "#B5413A";
const GOLD     = "#D4A857";
const GOLD_LT  = "#FBF3E1";
const DARK     = "#1C1C1C";
const MUTED    = "#999999";
const WHITE    = "#FFFFFF";

const STRIPE_LINK = "https://buy.stripe.com/28E3cugR7a0Ea7f6GF1gs0c";

function Garland() {
  return (
    <svg width="100%" height="40" viewBox="0 0 800 40" preserveAspectRatio="none" style={{ display: "block" }}>
      <path d="M0 8 Q 50 32 100 8 T 200 8 T 300 8 T 400 8 T 500 8 T 600 8 T 700 8 T 800 8"
        fill="none" stroke="#7a7a7a" strokeWidth="1.5" opacity="0.4" />
      {[50, 150, 250, 350, 450, 550, 650, 750].map((x, i) => (
        <circle key={i} cx={x} cy={28} r="7"
          fill={[BERRY, GOLD, PINE, BERRY, GOLD, PINE, BERRY, GOLD][i % 8]} />
      ))}
    </svg>
  );
}

export default function ChristmasAudit() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);


  return (
    <div className="min-h-screen" style={{ backgroundColor: SNOW, fontFamily: "DM Sans, sans-serif" }}>
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
          background: ${PINE_LT};
          color: ${PINE};
          margin-bottom: 16px;
        }

        .naughty-pill {
          display: inline-block;
          font-size: 30px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 99px;
          background: ${PINE_LT};
          color: ${PINE};
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
        .check-item .icon { flex-shrink: 0; color: ${PINE}; font-weight: 700; margin-top: 1px; }

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
          color: ${GOLD};
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
          background: linear-gradient(to right, transparent, ${GOLD}, transparent);
          margin: 0 auto;
          max-width: 200px;
        }

        .nav-link {
          font-size: 14px;
          font-weight: 600;
          color: ${PINE};
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
          backgroundColor: scrolled ? "rgba(247,244,236,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? `1px solid ${GOLD_LT}` : "none",
          transition: "all 0.4s ease",
          display: "flex", alignItems: "center", justifyContent: "space-between"
        }}>
          {/* Logo / Name */}
          <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 34, height: 34, borderRadius: "50%", backgroundColor: PINE, display: "flex", alignItems: "center", justifyContent: "center", color: WHITE, fontWeight: 700, fontSize: 14, fontFamily: "DM Sans, sans-serif", flexShrink: 0 }}>A</div>
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
              ["/techwhisperer", "Tech Whisperer"],
              ["/inboxrescue", "Inbox Rescue GPT"],
              ["#services", "Packages"],
              ["/audit", "Tech Audit"],
              ["/speaker", "Speaker Page"],
              ["/salespageworkshop", "Workshop"],
              ["https://tidycal.com/arshtist/60min", "Book a Call"]
            ].map(([href, label]) => (
              <a key={label} href={href}
                style={{ fontFamily: "DM Sans, sans-serif", fontSize: 13, fontWeight: 500, color: DARK, textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.color = PINE}
                onMouseLeave={e => e.currentTarget.style.color = DARK}
              >{label}</a>
            ))}
          </div>
        </nav>

        {/* ── HERO ── */}
        <section style={{ padding: "72px 24px 80px", maxWidth: 900, margin: "0 auto" }}>
          <div className="fade-in">
            <span className="pill-tag">🎄 Holiday Automation Audit · 10 Minutes</span>
          </div>
          <h1 className="fade-in delay-1" style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 700,
            color: DARK,
            lineHeight: 1.2,
            maxWidth: 720,
            marginBottom: 20
          }}>
            Santa checks his list twice —{" "}
            <span style={{ color: PINE, fontStyle: "italic" }}>when did you last check yours?</span>
          </h1>
          <p className="fade-in delay-2" style={{ fontSize: 18, color: "#555", lineHeight: 1.7, maxWidth: 580, marginBottom: 16 }}>
            The Automation Audit is a 10-minute self-assessment that shows you where your systems might be leaking leads, wasting time, or quietly breaking down — right before your busiest season.
          </p>
          <p className="fade-in delay-2" style={{ fontSize: 15, color: "#888", lineHeight: 1.6, maxWidth: 540, marginBottom: 32 }}>
            No tech knowledge required. Just honest answers about how your business actually runs — and a clear picture of what to fix before the holidays hit.
          </p>
          <div className="fade-in delay-3" style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
            <a href="#get-access" className="cta-btn" style={{ backgroundColor: PINE, color: "white" }}>
              Audit my automations →
            </a>
            <span style={{ fontSize: 13, color: "#888" }}>Coaches · Copywriters · Service Providers</span>
          </div>
        </section>

        <Garland />

        {/* ── PRICE ANCHOR BANNER ── */}
        <section style={{ backgroundColor: PINE, padding: "18px 24px" }}>
          <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 16, textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
              <span style={{ fontFamily: "Playfair Display, serif", fontSize: 28, fontWeight: 700, color: "white" }}>$47</span>
              <span style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", textDecoration: "line-through" }}>$97</span>
            </div>
            <div style={{ width: 1, height: 24, backgroundColor: "rgba(255,255,255,0.2)", flexShrink: 0 }} />
            <p style={{ color: "rgba(255,255,255,0.9)", fontSize: 14, margin: 0, fontFamily: "DM Sans, sans-serif" }}>
              🎁 HOLIDAY SPECIAL — 50% OFF for a LIMITED TIME
            </p>
            <div style={{ width: 1, height: 24, backgroundColor: "rgba(255,255,255,0.2)", flexShrink: 0 }} />
            <a href="#get-access" style={{ color: "white", fontSize: 13, fontWeight: 700, textDecoration: "none", opacity: 0.9 }}>
              Claim Now →
            </a>
          </div>
        </section>

        {/* ── REALITY SECTION ── */}
        <section style={{ backgroundColor: DARK, padding: "72px 24px" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span className="naughty-pill" style={{ backgroundColor: "rgba(27,67,50,0.4)", color: "#9FD8B8" }}>The Naughty List</span>
              <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 700, color: "white", marginBottom: 12 }}>
                The automations you built to save time might be the thing costing you the most.
              </h2>
              <p style={{ color: "#888", fontSize: 16, maxWidth: 520, margin: "0 auto" }}>
                You set it up. You assumed it was working. But here's what's actually happening behind the scenes:
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, marginBottom: 40 }}>
              {[
                { emoji: "📭", text: "New subscribers are opting in but never getting your welcome email — the automation silently broke months ago" },
                { emoji: "🎁", text: "Someone bought your offer and got… nothing. No receipt, no delivery, no onboarding" },
                { emoji: "🕳️", text: "Leads are entering your funnel and disappearing — no follow-up, no sequence, no idea where they went" },
                { emoji: "🔁", text: "You're manually doing things every week that were supposed to be automated by now" },
                { emoji: "🚨", text: "The holiday rush is coming and you have no idea if your tech will hold" },
                { emoji: "🤷", text: "You built the system once and haven't checked if it's still working since" },
              ].map((item, i) => (
                <div key={i} style={{ backgroundColor: "rgba(255,255,255,0.05)", borderRadius: 14, padding: "20px 22px", display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 22, flexShrink: 0 }}>{item.emoji}</span>
                  <p style={{ color: "#ccc", fontSize: 14, lineHeight: 1.6, margin: 0 }}>{item.text}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", padding: "24px 32px", backgroundColor: "rgba(27,67,50,0.2)", borderRadius: 16, border: "1px solid rgba(27,67,50,0.4)" }}>
              <p style={{ color: "#9FD8B8", fontSize: 16, fontStyle: "italic", margin: 0 }}>
                "Most business owners don't find out their automations are broken until a launch goes sideways, a client doesn't get their onboarding, or a subscriber writes in asking why they never heard back."
              </p>
            </div>
          </div>
        </section>

        <Garland />

        {/* ── WHAT THE AUDIT GIVES YOU ── */}
        <section style={{ padding: "72px 24px", backgroundColor: SNOW }}>
          <div style={{ maxWidth: 860, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }} className="hero-grid">
            <div>
              <span className="pill-tag">🎅 The Holiday Audit</span>
              <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, color: DARK, marginBottom: 16, lineHeight: 1.3 }}>
                10 minutes to find out what's actually working — and what isn't.
              </h2>
              <p style={{ color: "#555", fontSize: 15, lineHeight: 1.7, marginBottom: 24 }}>
                The Automation Audit is a straight-talking self-assessment for coaches, copywriters, and service providers. No jargon. No complicated tech knowledge required. Just a clear-eyed look at the systems running your business right now — and an honest score that tells you where things stand before the holidays.
              </p>
              <a href="#get-access" className="cta-btn" style={{ backgroundColor: PINE, color: "white", fontSize: 15 }}>
                Audit my automations →
              </a>
            </div>
            <div style={{ backgroundColor: "white", borderRadius: 20, padding: 32, border: "1px solid #E8DDD0", boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}>
              <p style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: 16, color: DARK, marginBottom: 20 }}>
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
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, color: DARK, marginBottom: 16 }}>
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
                "Are heading into the holiday season and want to know their tech won't let them down",
              ].map((item, i) => (
                <div key={i} className="dot-item">{item}</div>
              ))}
            </div>
            <div style={{ marginTop: 32, padding: "20px 28px", backgroundColor: SNOW, borderRadius: 14, border: "1px solid #E8DDD0" }}>
              <p style={{ color: "#555", fontSize: 14, fontStyle: "italic", margin: 0 }}>
                If your tech sometimes feels like a pile of apps duct-taped together like last year's lights — this will help.
              </p>
            </div>
          </div>
        </section>

        <Garland />

        {/* ── THE SURVEY ── */}
        <section id="get-access" style={{ padding: "72px 24px", backgroundColor: SNOW }}>
          <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
            <span className="pill-tag">🎄 Audit my automations</span>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, color: DARK, marginBottom: 12 }}>
              Claim your Holiday Automation Audit
            </h2>
            <p style={{ color: "#555", fontSize: 15, maxWidth: 420, margin: "0 auto 32px", lineHeight: 1.7 }}>
              Click below to claim your access. You'll receive the audit link instantly by email — takes about 5 minutes to complete.
            </p>
            <div style={{ backgroundColor: "white", borderRadius: 20, padding: "36px 32px", border: "2px solid #E8DDD0", boxShadow: "0 4px 24px rgba(0,0,0,0.07)", marginBottom: 16 }}>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "baseline", gap: 8, marginBottom: 8 }}>
                <span style={{ fontFamily: "Playfair Display, serif", fontSize: 42, fontWeight: 700, color: PINE }}>$47</span>
                <span style={{ fontSize: 16, color: "#888", textDecoration: "line-through" }}>$97</span>
              </div>
              <a
                href={STRIPE_LINK}
                className="cta-btn"
                style={{ backgroundColor: PINE, color: "white", display: "block", textAlign: "center", fontSize: 16 }}
              >
                Audit my automations →
              </a>
              <p style={{ color: "#aaa", fontSize: 12, marginTop: 16 }}>
                You'll receive the audit link by email immediately after checkout.
              </p>
            </div>
          </div>
        </section>

        {/* ── WHAT HAPPENS AFTER ── */}
        <section style={{ backgroundColor: PINE, padding: "72px 24px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
            <span className="pill-tag" style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "white" }}>What Happens Next</span>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, color: "white", marginBottom: 16 }}>
              You'll know in 10 minutes.
            </h2>
            <p style={{ color: "#D8EDE3", fontSize: 16, lineHeight: 1.7, maxWidth: 560, margin: "0 auto 40px" }}>
              Claim your free access, complete the 10-minute audit, and get your Automation Health Score. You'll also receive follow-up emails with clarity on your specific gaps and how to fix them — from someone who actually builds these systems for a living.
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
              <p style={{ color: "#9FD8B8", fontSize: 14, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 8 }}>
                If you scored below 30
              </p>
              <p style={{ color: "white", fontSize: 16, lineHeight: 1.6, margin: 0 }}>
                You don't need more strategy or a new platform. You need someone to get in there and fix what's broken before the season picks up. That's exactly what I do.
              </p>
            </div>
          </div>
        </section>

        {/* ── OFFERS ── */}
        <section style={{ padding: "72px 24px", backgroundColor: SNOW }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span className="pill-tag">How We Can Work Together</span>
              <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, color: DARK, marginBottom: 12 }}>
                Ready to fix what the audit reveals?
              </h2>
              <p style={{ color: "#555", fontSize: 15, maxWidth: 480, margin: "0 auto" }}>
                Two ways to get your automations working the way they should.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="offers-grid">

              {/* Tame Your Tech */}
              <div className="offer-card" style={{ backgroundColor: "white", border: "2px solid #E8DDD0", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
                <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: PINE }}>Lightweight Support</span>
                <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: 24, fontWeight: 700, color: DARK, margin: 0 }}>Tame Your Tech</h3>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                  <span style={{ fontFamily: "Playfair Display, serif", fontSize: 36, fontWeight: 700, color: PINE }}>$150</span>
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
                  className="cta-btn" style={{ backgroundColor: PINE, color: "white", textAlign: "center", marginTop: "auto", fontSize: 14 }}>
                  Learn More →
                </a>
              </div>

              {/* Tech Whisperer */}
              <div className="offer-card" style={{ backgroundColor: DARK, border: `2px solid ${PINE}`, boxShadow: "0 8px 40px rgba(0,0,0,0.2)" }}>
                <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9FD8B8" }}>Full Management</span>
                <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: 24, fontWeight: 700, color: "white", margin: 0 }}>Tech Whisperer</h3>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                  <span style={{ fontFamily: "Playfair Display, serif", fontSize: 36, fontWeight: 700, color: "#9FD8B8" }}>$1,000</span>
                  <span style={{ color: "#666", fontSize: 14 }}>/month</span>
                </div>
                <div style={{ height: 1, background: "rgba(212,168,87,0.3)", margin: "4px 0" }} />
                {[
                  "Complete management of your tech ecosystem",
                  "A tech whisperer on call (Voxer/Slack)",
                  "Seamless operations across all platforms",
                  "Ongoing maintenance + troubleshooting",
                  "Monthly tech directions + decisions roadmap",
                ].map((f, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 8 }}>
                    <span style={{ color: PINE, fontWeight: 700, fontSize: 13, flexShrink: 0, marginTop: 1 }}>✓</span>
                    <span style={{ fontSize: 14, color: "#ccc", lineHeight: 1.5 }}>{f}</span>
                  </div>
                ))}
                <a href="https://arshtechguru.square.site/tech-whisperer" target="_blank" rel="noopener noreferrer"
                  className="cta-btn" style={{ backgroundColor: PINE, color: "white", textAlign: "center", marginTop: "auto", fontSize: 14 }}>
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{ backgroundColor: DARK, padding: "32px 24px" }}>
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
