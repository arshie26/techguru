import React from "react";

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

function Footer() {
    return (
      <footer style={{ backgroundColor: DARK, padding: "32px 48px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <div>
            <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 24, color: `${TEAL}CC`, margin: 0 }}>Arsh Agarwal · Tech Concierge</p>
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 16, color: "white", margin: "2px 0 0", letterSpacing: "0.05em" }}>arshtist@gmail.com</p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
            {[
              ["/TameYourTech", "Tame Your Tech"],
              ["/TechWhisperer", "Tech Whisperer"],
              ["#services", "Packages"],
              ["/audit", "Automation Audit"],
              ["/speaker", "Speaker"],
              ["/disclaimer", "Disclaimer"],
              ["/privacy", "Privacy Policy"],
              ["/termsofservice", "Terms of Service"],
              ["mailto:arshtist@gmail.com", "Contact"],
            ].map(([href, label]) => (
              <a key={label} href={href}
                style={{ color: "white", fontFamily: "DM Sans, sans-serif", fontSize: 16, textDecoration: "none", letterSpacing: "0.05em", transition: "color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.color = `white`}
                onMouseLeave={e => e.currentTarget.style.color = "white"}
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

export default Footer