import React from "react";
import './NavBar.css'
import { useState, useEffect } from "react";

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
        backgroundColor: scrolled ? "rgba(245,237,224,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? `1px solid ${TAN_LT}` : "none",
      }}>
        {/* Logo / Name */}
        <a href="#home">
          <div style={{ width: 34, height: 34, borderRadius: "50%", backgroundColor: TEAL, display: "flex", alignItems: "center", justifyContent: "center", color: WHITE, fontWeight: 700, fontSize: 14, fontFamily: "DM Sans, sans-serif", flexShrink: 0 }}>A</div>
          <div>
            <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 14, color: DARK, margin: 0, lineHeight: 1.1 }}>Arsh Agarwal</p>
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 10, color: MUTED, margin: 0, letterSpacing: "0.08em", textTransform: "uppercase" }}>Tech Concierge</p>
          </div>
        </a>
  
        {/* Nav links */}
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {[
            ["/#home", "Home"],
            ["/#values", "Values"],
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

  export default NavBar