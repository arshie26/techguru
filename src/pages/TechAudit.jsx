// TechScorecard.jsx
// Survey/lead magnet page for Arsh Agarwal Tech Concierge
// Embeds the existing Google Form and wraps it with branded copy + offer cards

export default function TechScorecard() {
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

        {/* ── NAV ── */}
        <nav style={{ backgroundColor: "#1C1C1C", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 50 }}>
          <span style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: 15, color: "white" }}>
            Arsh Agarwal · Tech Concierge
          </span>
          <a href="#survey" className="cta-btn" style={{ backgroundColor: "#3D7267", color: "white", padding: "8px 20px", fontSize: 13 }}>
            Take the Survey →
          </a>
        </nav>

        {/* ── HERO ── */}
        <section style={{ padding: "72px 24px 80px", maxWidth: 900, margin: "0 auto" }}>
          <div className="fade-in">
            <span className="pill-tag">Free · 5 Minutes · No Tech Knowledge Required</span>
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
            Is your tech helping your business grow —{" "}
            <span style={{ color: "#3D7267", fontStyle: "italic" }}>or quietly holding it back?</span>
          </h1>
          <p className="fade-in delay-2" style={{ fontSize: 18, color: "#555", lineHeight: 1.7, maxWidth: 580, marginBottom: 32 }}>
            Take the free Tech Scorecard to find out exactly where your systems are slowing you down, leaking leads, or wasting hours of your week.
          </p>
          <div className="fade-in delay-3" style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
            <a href="#survey" className="cta-btn" style={{ backgroundColor: "#3D7267", color: "white" }}>
              Take the Survey Now →
            </a>
            <span style={{ fontSize: 13, color: "#888" }}>Coaches · Copywriters · Service Providers</span>
          </div>
        </section>

        {/* ── REALITY SECTION ── */}
        <section style={{ backgroundColor: "#1C1C1C", padding: "72px 24px" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span className="pill-tag" style={{ backgroundColor: "rgba(61,114,103,0.3)", color: "#A8D4CC" }}>Sound Familiar?</span>
              <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 700, color: "white", marginBottom: 12 }}>
                The reality most business owners face
              </h2>
              <p style={{ color: "#888", fontSize: 16, maxWidth: 520, margin: "0 auto" }}>
                You started your business to serve clients and grow your income. But instead, your days look like this:
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, marginBottom: 40 }}>
              {[
                { emoji: "⚙️", text: "Spending hours trying to connect tools that should \"just work\"" },
                { emoji: "🕳️", text: "Wondering if your leads are slipping through the cracks" },
                { emoji: "🔁", text: "Rebuilding the same manual processes over and over" },
                { emoji: "🔥", text: "Losing time to tech troubleshooting instead of growing your business" },
                { emoji: "🩹", text: "Feeling like your systems are barely holding everything together" },
                { emoji: "🤷", text: "Knowing automation could help — but not knowing where to start" },
              ].map((item, i) => (
                <div key={i} style={{ backgroundColor: "rgba(255,255,255,0.05)", borderRadius: 14, padding: "20px 22px", display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 22, flexShrink: 0 }}>{item.emoji}</span>
                  <p style={{ color: "#ccc", fontSize: 14, lineHeight: 1.6, margin: 0 }}>{item.text}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", padding: "24px 32px", backgroundColor: "rgba(61,114,103,0.15)", borderRadius: 16, border: "1px solid rgba(61,114,103,0.3)" }}>
              <p style={{ color: "#A8D4CC", fontSize: 16, fontStyle: "italic", margin: 0 }}>
                "It's not that you can't figure it out. You just don't want to keep trading your creative energy for endless tech troubleshooting."
              </p>
            </div>
          </div>
        </section>

        {/* ── WHAT THE SCORECARD GIVES YOU ── */}
        <section style={{ padding: "72px 24px", backgroundColor: "#F5EDE0" }}>
          <div style={{ maxWidth: 860, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }} className="hero-grid">
            <div>
              <span className="pill-tag">The Tech Scorecard</span>
              <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, color: "#1C1C1C", marginBottom: 16, lineHeight: 1.3 }}>
                Clarity in 5 minutes. No tech knowledge required.
              </h2>
              <p style={{ color: "#555", fontSize: 15, lineHeight: 1.7, marginBottom: 24 }}>
                The Tech Scorecard is a simple self-assessment designed for entrepreneurs who want their business systems to work for them instead of against them. Just honest answers about how your business currently runs.
              </p>
              <a href="#survey" className="cta-btn" style={{ backgroundColor: "#3D7267", color: "white", fontSize: 15 }}>
                Get My Tech Health Score →
              </a>
            </div>
            <div style={{ backgroundColor: "white", borderRadius: 20, padding: 32, border: "1px solid #E8DDD0", boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}>
              <p style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: 16, color: "#1C1C1C", marginBottom: 20 }}>
                In just a few minutes, you'll discover:
              </p>
              {[
                "Where your tech stack is creating friction",
                "Which systems are missing or incomplete",
                "What processes could be automated to save time",
                "Where your leads, sales, or follow-ups might be breaking",
                "Your overall Tech Health Score",
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
              If this sounds like you, the scorecard is for you.
            </h2>
            <p style={{ color: "#555", fontSize: 15, marginBottom: 36, lineHeight: 1.7 }}>
              The Tech Scorecard is perfect for coaches, copywriters, and service providers who:
            </p>
            <div style={{ textAlign: "left", display: "inline-block", maxWidth: 480 }}>
              {[
                "Feel like their tech is more complicated than it should be",
                "Are juggling multiple tools that don't talk to each other",
                "Want more automation and less manual work",
                "Know their systems could be better but don't know what to fix first",
                "Are generating revenue but feeling like something is quietly leaking",
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
        <section id="survey" style={{ padding: "72px 24px", backgroundColor: "#F5EDE0" }}>
          <div style={{ maxWidth: 780, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <span className="pill-tag">Take the Survey</span>
              <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, color: "#1C1C1C", marginBottom: 12 }}>
                Find out your Tech Health Score
              </h2>
              <p style={{ color: "#555", fontSize: 15, maxWidth: 480, margin: "0 auto" }}>
                Takes about 5 minutes. You'll receive your score and next steps by email.
              </p>
            </div>
            <div className="form-wrapper">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfVPnTNyumqPpCFjeg6r3OfQzF5Ng7MJYjb_sMduMep0KBZTA/viewform?embedded=true"
                width="100%"
                height="900"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Tech Scorecard Survey"
                style={{ display: "block" }}
              >
                Loading…
              </iframe>
            </div>
          </div>
        </section>

        {/* ── WHAT HAPPENS AFTER ── */}
        <section style={{ backgroundColor: "#3D7267", padding: "72px 24px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
            <span className="pill-tag" style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "white" }}>What Happens Next</span>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, color: "white", marginBottom: 16 }}>
              Your score is just the beginning.
            </h2>
            <p style={{ color: "#D6EDE8", fontSize: 16, lineHeight: 1.7, maxWidth: 560, margin: "0 auto 40px" }}>
              Once you complete the Tech Scorecard, you'll receive your Tech Health Score along with information about your specific tech challenges and how to fix them. From there, you decide your next step.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, maxWidth: 600, margin: "0 auto" }}>
              {[
                { step: "01", label: "Complete the 5-minute survey" },
                { step: "02", label: "Receive your Tech Health Score by email" },
                { step: "03", label: "Choose your path forward" },
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
                You don't need more strategy. You need infrastructure support. See the options below.
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
                Ready to fix what the scorecard reveals?
              </h2>
              <p style={{ color: "#555", fontSize: 15, maxWidth: 480, margin: "0 auto" }}>
                Two ways to get your tech working the way it should.
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
              <a href="https://arshtechguru.square.site" target="_blank" rel="noopener noreferrer" className="nav-link" style={{ color: "#666" }}>
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
