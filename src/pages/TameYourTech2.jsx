import { useEffect, useState } from "react";

const STRIPE_LINK = "https://buy.stripe.com/9B6aEW0S9gp24MV6GF1gs04";

const css = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500;600;700&display=swap');

:root {
  --dark:        #1C2B1A;
  --dark2:       #162214;
  --accent:      #3D7267;
  --soft:        #F5EDE0;
  --light-accent:#C4A882;
  --muted:       #7A7A6E;
  --base:        #FAF7F2;
  --base2:       #F0EAE0;
  --white:       #FFFFFF;
  --font-display: 'Playfair Display', Georgia, serif;
  --font-body:    'DM Sans', system-ui, sans-serif;
  --font-caps:    'DM Sans', system-ui, sans-serif;
  --font-accent:  'Playfair Display', Georgia, serif;
  --max: 860px;
  --max-wide: 1080px;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: var(--font-body);
  font-size: 17px;
  line-height: 1.7;
  color: var(--dark);
  background: var(--base);
  -webkit-font-smoothing: antialiased;
}
img { max-width: 100%; height: auto; display: block; }
a { color: inherit; }

h1,h2,h3,h4 { font-family: var(--font-display); line-height: 1.2; }
h1 { font-size: clamp(2.1rem, 5vw, 3.4rem); }
h2 { font-size: clamp(1.6rem, 3.5vw, 2.4rem); }
h3 { font-size: clamp(1.2rem, 2.5vw, 1.6rem); }
p { max-width: 62ch; }

.tyt-eyebrow {
  font-family: var(--font-caps);
  text-transform: uppercase;
  letter-spacing: .18em;
  font-size: 11px;
  font-weight: 600;
  color: var(--accent);
  display: block;
  margin-bottom: 14px;
}

.tyt-wrap  { max-width: var(--max); margin: 0 auto; padding: 0 24px; }
.tyt-wrap-wide { max-width: var(--max-wide); margin: 0 auto; padding: 0 24px; }
section { padding: 80px 0; }
@media(max-width:680px) { section { padding: 56px 0; } }

.tyt-btn {
  display: inline-block;
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 15px;
  letter-spacing: .02em;
  border-radius: 6px;
  padding: 15px 34px;
  text-decoration: none;
  transition: opacity .2s, transform .2s;
  cursor: pointer;
  border: none;
}
.tyt-btn:hover { opacity: .88; transform: translateY(-2px); }
.tyt-btn-primary { background: var(--accent); color: #fff; }
.tyt-btn-ghost   { border: 2px solid var(--accent); color: var(--accent); background: transparent; }

.tyt-divider { width: 52px; height: 3px; background: var(--light-accent); border-radius: 2px; margin: 20px 0; }

.tyt-reveal { opacity:0; transform:translateY(22px); transition:opacity .6s ease-out,transform .6s ease-out; }
.tyt-reveal.in { opacity:1; transform:none; }
@media(prefers-reduced-motion:reduce){.tyt-reveal{transition:none;opacity:1;transform:none}}

/* NAV */
.tyt-nav {
  position: sticky; top: 0; z-index: 80;
  background: rgba(250,247,242,.96);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(196,168,130,.18);
  padding: 14px 24px;
}
.tyt-nav-inner { max-width: var(--max-wide); margin: 0 auto; display: flex; align-items: center; justify-content: space-between; }
.tyt-nav-logo { font-family: var(--font-display); font-size: 17px; font-weight: 700; text-decoration: none; color: var(--dark); }
.tyt-nav-logo span { color: var(--accent); }
.tyt-nav-cta { font-size: 13px; }
@media(max-width:540px){ .tyt-nav-cta { display:none; } }

/* BUYBAR */
.tyt-buybar { position: fixed; left:0; right:0; bottom:0; z-index: 70; background: var(--dark); transform: translateY(110%); transition: transform .4s ease; box-shadow: 0 -6px 28px rgba(0,0,0,.22); }
.tyt-buybar.show { transform: none; }
.tyt-buybar-inner { max-width: var(--max-wide); margin: 0 auto; padding: 12px 24px; display: flex; align-items: center; justify-content: space-between; gap: 14px; flex-wrap: wrap; }
.tyt-buybar-text { color: #fff; }
.tyt-buybar-text strong { font-family: var(--font-display); font-size: 18px; }
.tyt-buybar-text span { font-size: 13px; color: rgba(255,255,255,.6); margin-left: 10px; }
@media(max-width:600px){ .tyt-buybar-text span { display:none; } }

/* HERO */
.tyt-hero { background: var(--dark); padding: 96px 0 80px; text-align: center; position: relative; overflow: hidden; }
.tyt-hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 70% 60% at 50% 0%, rgba(61,114,103,.22) 0%, transparent 70%); pointer-events: none; }
.tyt-hero .tyt-eyebrow { color: var(--light-accent); }
.tyt-hero h1 { color: #fff; margin-bottom: 22px; }
.tyt-hero h1 em { font-style: italic; color: var(--light-accent); display: block; }
.tyt-hero-sub { font-size: 18px; color: rgba(255,255,255,.65); max-width: 56ch; margin: 0 auto 36px; line-height: 1.7; }
.tyt-hero-ctas { display: flex; flex-wrap: wrap; gap: 14px; justify-content: center; align-items: center; }
.tyt-hero-trial { font-size: 13px; color: rgba(255,255,255,.5); margin-top: 16px; }
.tyt-hero-trial strong { color: rgba(255,255,255,.8); }

.tyt-sage-strip { margin-top: 56px; border-top: 1px solid rgba(255,255,255,.1); padding-top: 36px; display: flex; align-items: center; justify-content: center; gap: 16px; flex-wrap: wrap; text-align: left; }
.tyt-sage-strip blockquote { font-family: var(--font-accent); font-style: italic; font-size: 17px; color: rgba(255,255,255,.75); max-width: 44ch; }
.tyt-sage-strip cite { font-family: var(--font-caps); font-style: normal; text-transform: uppercase; letter-spacing: .12em; font-size: 10px; color: var(--light-accent); display: block; margin-top: 8px; }
.tyt-sage-avatar { width: 52px; height: 52px; border-radius: 50%; border: 2px solid var(--light-accent); background: var(--dark2); flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-family: var(--font-display); font-size: 20px; color: var(--light-accent); }

/* EMPATHY */
.tyt-section-empathy { background: var(--base); }
.tyt-section-empathy .tyt-wrap { max-width: 68ch; }
.tyt-section-empathy p { max-width: 100%; color: #444; margin-bottom: 18px; }
.tyt-insight-box { background: var(--soft); border-left: 4px solid var(--accent); border-radius: 0 10px 10px 0; padding: 22px 24px; margin-top: 32px; }
.tyt-insight-box p { color: var(--dark); font-weight: 500; max-width: 100%; }

/* PAIN GRID */
.tyt-section-familiar { background: var(--dark); }
.tyt-section-familiar .tyt-eyebrow { color: var(--light-accent); }
.tyt-section-familiar h2 { color: #fff; text-align: center; margin-bottom: 10px; }
.tyt-section-intro { color: rgba(255,255,255,.55); text-align: center; margin: 0 auto 52px; max-width: 52ch; }
.tyt-pain-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px,1fr)); gap: 18px; }
.tyt-pain-card { background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.09); border-radius: 14px; padding: 26px 24px; }
.tyt-pain-icon { width: 38px; height: 38px; border-radius: 8px; background: rgba(61,114,103,.25); display: flex; align-items: center; justify-content: center; margin-bottom: 14px; }
.tyt-pain-icon svg { width: 20px; height: 20px; stroke: var(--light-accent); fill: none; stroke-width: 1.8; }
.tyt-pain-card h4 { color: #fff; font-size: 16px; margin-bottom: 8px; font-family: var(--font-body); font-weight: 600; }
.tyt-pain-card p { color: rgba(255,255,255,.55); font-size: 14px; max-width: 100%; line-height: 1.6; }

/* TESTIMONIALS */
.tyt-section-testi { background: var(--base2); }
.tyt-testi-card { background: var(--white); border-radius: 18px; padding: 40px 44px; box-shadow: 0 6px 36px rgba(0,0,0,.07); max-width: 700px; margin: 0 auto; text-align: center; }
.tyt-testi-card blockquote { font-family: var(--font-accent); font-style: italic; font-size: clamp(1.05rem, 2.2vw, 1.25rem); line-height: 1.65; color: var(--dark); max-width: 100%; }
.tyt-testi-card blockquote strong { color: var(--accent); font-style: normal; }
.tyt-testi-meta { margin-top: 22px; font-family: var(--font-caps); text-transform: uppercase; letter-spacing: .12em; font-size: 11px; color: var(--muted); }
.tyt-result-pill { display: inline-block; background: var(--soft); color: var(--accent); font-weight: 700; font-size: 12px; font-family: var(--font-caps); text-transform: uppercase; letter-spacing: .1em; padding: 5px 14px; border-radius: 99px; margin-bottom: 18px; }

/* STORY */
.tyt-section-story { background: var(--base); }
.tyt-story-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
@media(max-width:720px){ .tyt-story-grid { grid-template-columns:1fr; } }
.tyt-story-text p { color: #444; margin-bottom: 18px; max-width: 100%; }
.tyt-story-callout { background: var(--dark); border-radius: 18px; padding: 36px 32px; color: #fff; position: sticky; top: 100px; }
.tyt-story-callout .tyt-eyebrow { color: var(--light-accent); }
.tyt-story-callout blockquote { font-family: var(--font-accent); font-style: italic; font-size: 1.1rem; line-height: 1.65; color: rgba(255,255,255,.85); margin: 12px 0 18px; max-width: 100%; }
.tyt-story-callout cite { font-family: var(--font-caps); font-style: normal; text-transform: uppercase; letter-spacing: .12em; font-size: 10px; color: var(--light-accent); }
.tyt-trust-names { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; }
.tyt-trust-name { font-family: var(--font-caps); text-transform: uppercase; letter-spacing: .1em; font-size: 10px; background: rgba(255,255,255,.08); color: rgba(255,255,255,.65); border-radius: 4px; padding: 5px 10px; }

/* INSIDE */
.tyt-section-inside { background: var(--soft); }
.tyt-task-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px,1fr)); gap: 16px; }
.tyt-task-card { background: var(--white); border-radius: 14px; padding: 26px 24px; border: 1px solid rgba(196,168,130,.25); box-shadow: 0 2px 12px rgba(0,0,0,.05); transition: transform .25s ease, box-shadow .25s ease; }
.tyt-task-card:hover { transform: translateY(-4px); box-shadow: 0 10px 32px rgba(0,0,0,.1); }
.tyt-task-card.featured { background: var(--dark); border-color: transparent; grid-column: 1 / -1; }
.tyt-task-card.featured h4, .tyt-task-card.featured p { color: #fff; }
.tyt-task-card.featured p { color: rgba(255,255,255,.65); }
.tyt-task-icon { width: 40px; height: 40px; border-radius: 10px; background: var(--soft); display: flex; align-items: center; justify-content: center; margin-bottom: 14px; }
.tyt-task-card.featured .tyt-task-icon { background: rgba(255,255,255,.1); }
.tyt-task-icon svg { width: 20px; height: 20px; stroke: var(--accent); fill: none; stroke-width: 1.8; }
.tyt-task-card h4 { font-family: var(--font-body); font-weight: 600; font-size: 15px; margin-bottom: 6px; color: var(--dark); }
.tyt-task-card p { font-size: 14px; color: var(--muted); max-width: 100%; line-height: 1.6; }
.tyt-inside-note { text-align: center; margin-top: 28px; font-size: 14px; color: var(--muted); font-style: italic; }

/* BEFORE/AFTER */
.tyt-section-ba { background: var(--dark); }
.tyt-ba-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
@media(max-width:640px){ .tyt-ba-grid { grid-template-columns: 1fr; } }
.tyt-ba-col { border-radius: 16px; padding: 32px 28px; }
.tyt-ba-before { background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.1); }
.tyt-ba-after  { background: rgba(61,114,103,.2); border: 1px solid rgba(61,114,103,.35); }
.tyt-ba-label { font-family: var(--font-caps); text-transform: uppercase; letter-spacing: .16em; font-size: 10px; margin-bottom: 22px; display: flex; align-items: center; gap: 8px; }
.tyt-ba-before .tyt-ba-label { color: rgba(255,255,255,.4); }
.tyt-ba-after  .tyt-ba-label { color: var(--light-accent); }
.tyt-ba-label::before { content: ''; width: 24px; height: 1px; }
.tyt-ba-before .tyt-ba-label::before { background: rgba(255,255,255,.2); }
.tyt-ba-after  .tyt-ba-label::before { background: var(--light-accent); }
.tyt-ba-item { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 14px; font-size: 15px; }
.tyt-ba-before .tyt-ba-item { color: rgba(255,255,255,.5); }
.tyt-ba-after  .tyt-ba-item { color: rgba(255,255,255,.88); }
.tyt-ba-dot { width: 7px; height: 7px; border-radius: 50%; margin-top: 8px; flex-shrink: 0; }
.tyt-ba-before .tyt-ba-dot { background: rgba(255,255,255,.25); }
.tyt-ba-after  .tyt-ba-dot { background: var(--light-accent); }

/* INVESTMENT */
.tyt-section-investment { background: var(--base); }
.tyt-price-card { background: var(--white); border: 2px solid rgba(61,114,103,.2); border-radius: 22px; padding: 48px 44px; text-align: center; max-width: 540px; margin: 0 auto; box-shadow: 0 8px 40px rgba(0,0,0,.08); }
.tyt-price-badge { display: inline-block; background: var(--soft); color: var(--accent); font-family: var(--font-caps); text-transform: uppercase; letter-spacing: .14em; font-size: 10px; font-weight: 700; padding: 6px 16px; border-radius: 99px; margin-bottom: 22px; }
.tyt-price-display { display: flex; align-items: baseline; justify-content: center; gap: 6px; margin-bottom: 6px; }
.tyt-price-amount { font-family: var(--font-display); font-size: clamp(3rem, 7vw, 4.5rem); font-weight: 700; color: var(--dark); line-height: 1; }
.tyt-price-per { font-size: 17px; color: var(--muted); }
.tyt-price-note { font-size: 14px; color: var(--muted); margin-bottom: 32px; }
.tyt-price-includes { text-align: left; margin-bottom: 36px; list-style: none; display: flex; flex-direction: column; gap: 10px; }
.tyt-price-includes li { display: flex; align-items: flex-start; gap: 10px; font-size: 15px; color: #444; }
.tyt-price-check { width: 20px; height: 20px; border-radius: 50%; background: var(--soft); display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px; }
.tyt-price-check svg { width: 11px; height: 11px; stroke: var(--accent); fill: none; stroke-width: 2.5; }
.tyt-trial-note { margin-top: 18px; font-size: 14px; color: var(--muted); }
.tyt-trial-note strong { color: var(--accent); }

/* FOR YOU */
.tyt-section-for-you { background: var(--base2); }
.tyt-for-you-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
@media(max-width:640px){ .tyt-for-you-grid { grid-template-columns: 1fr; } }
.tyt-for-col { border-radius: 16px; padding: 30px 28px; }
.tyt-for-yes { background: var(--white); border: 1px solid rgba(61,114,103,.2); }
.tyt-for-no  { background: rgba(0,0,0,.03); border: 1px solid rgba(0,0,0,.08); }
.tyt-for-col-label { font-family: var(--font-caps); text-transform: uppercase; letter-spacing: .16em; font-size: 10px; margin-bottom: 20px; }
.tyt-for-yes .tyt-for-col-label { color: var(--accent); }
.tyt-for-no  .tyt-for-col-label { color: var(--muted); }
.tyt-for-item { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 12px; font-size: 15px; color: #444; }
.tyt-for-indicator { font-size: 16px; flex-shrink: 0; margin-top: 2px; }
.tyt-for-yes .tyt-for-indicator { color: var(--accent); }
.tyt-for-no  .tyt-for-indicator { color: var(--muted); }

/* LADDER */
.tyt-section-ladder { background: var(--dark); }
.tyt-ladder { display: grid; grid-template-columns: 1fr; gap: 12px; }
.tyt-rung { background: rgba(255,255,255,.07); border: 1px solid rgba(255,255,255,.13); border-radius: 12px; padding: 18px 20px; display: flex; align-items: center; gap: 18px; transition: transform .3s ease, background .3s ease; }
.tyt-rung.current { background: rgba(61,114,103,.25); border-color: rgba(61,114,103,.5); }
.tyt-rung:hover { transform: translateX(6px); background: rgba(255,255,255,.12); }
.tyt-rung-num { font-family: var(--font-display); font-size: 32px; color: rgba(255,255,255,.2); flex: none; width: 46px; text-align: center; }
.tyt-rung.current .tyt-rung-num { color: var(--light-accent); }
.tyt-rung-text { flex: 1; }
.tyt-rung-text h4 { color: #fff; font-size: 17px; font-family: var(--font-body); font-weight: 600; }
.tyt-rung-text p { color: rgba(255,255,255,.55); font-size: 13px; margin-top: 3px; max-width: 100%; }
.tyt-rung-price { font-family: var(--font-display); font-size: 20px; color: rgba(255,255,255,.5); flex: none; }
.tyt-rung.current .tyt-rung-price { color: var(--light-accent); }
.tyt-rung-tag { font-family: var(--font-caps); text-transform: uppercase; letter-spacing: .1em; font-size: 9px; background: var(--accent); color: #fff; border-radius: 4px; padding: 3px 8px; flex: none; }

/* FAQ */
.tyt-section-faq { background: var(--base); }
.tyt-faq-list { max-width: 680px; margin: 0 auto; display: flex; flex-direction: column; gap: 10px; }
details.tyt-faq { background: var(--white); border: 1px solid rgba(196,168,130,.22); border-radius: 12px; overflow: hidden; }
details.tyt-faq summary { padding: 20px 24px; font-weight: 600; font-size: 15px; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; gap: 12px; }
details.tyt-faq summary::-webkit-details-marker { display: none; }
details.tyt-faq summary::after { content: '+'; font-size: 22px; font-weight: 300; color: var(--accent); flex-shrink: 0; line-height: 1; transition: transform .2s; }
details.tyt-faq[open] summary::after { transform: rotate(45deg); }
details.tyt-faq .tyt-faq-body { padding: 0 24px 22px; font-size: 15px; color: #555; line-height: 1.7; }
details.tyt-faq .tyt-faq-body p { max-width: 100%; }

/* FINAL CTA */
.tyt-section-final-cta { background: var(--dark); text-align: center; }
.tyt-section-final-cta h2 { color: #fff; margin-bottom: 16px; }
.tyt-final-cta-intro { color: rgba(255,255,255,.55); max-width: 52ch; margin: 0 auto 36px; }
.tyt-final-cta-stack { display: flex; flex-direction: column; align-items: center; gap: 14px; }

/* FOOTER */
.tyt-footer { background: var(--dark2); padding: 36px 24px; text-align: center; color: rgba(255,255,255,.4); font-size: 13px; }
.tyt-footer a { color: rgba(255,255,255,.45); text-decoration: none; }
.tyt-footer a:hover { color: rgba(255,255,255,.7); }
.tyt-footer-links { display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; margin-top: 10px; }
`;

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
);

export default function TameYourTech() {
  const [showBar, setShowBar] = useState(false);
  const year = new Date().getFullYear();

  useEffect(() => {
    // Inject CSS
    const style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    // Scroll reveal
    const els = document.querySelectorAll(".tyt-reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((x) => {
          if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    // Sticky buy bar
    const hero = document.getElementById("tyt-hero");
    const co = document.getElementById("tyt-checkout");
    if (!hero) return;
    const onScroll = () => {
      const past = window.pageYOffset > hero.offsetHeight - 40;
      const atCo = co && co.getBoundingClientRect().top < window.innerHeight && co.getBoundingClientRect().bottom > 0;
      setShowBar(past && !atCo);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* NAV */}
      <nav className="tyt-nav" aria-label="Site navigation">
        <div className="tyt-nav-inner">
          <a className="tyt-nav-logo" href="https://techconcierge.vercel.app/">
            Tech <span>Concierge</span>
          </a>
          <a href="#tyt-checkout" className="tyt-btn tyt-btn-primary tyt-nav-cta">Join for $150/mo →</a>
        </div>
      </nav>

      {/* STICKY BUY BAR */}
      <div className={`tyt-buybar${showBar ? " show" : ""}`} aria-hidden={!showBar}>
        <div className="tyt-buybar-inner">
          <div className="tyt-buybar-text">
            <strong>Tame Your Tech</strong>
            <span>· One task/month · Cancel anytime</span>
          </div>
          <a href="#tyt-checkout" className="tyt-btn tyt-btn-primary">Join for $150/mo →</a>
        </div>
      </div>

      {/* HERO */}
      <section className="tyt-hero" id="tyt-hero">
        <div className="tyt-wrap">
          <span className="tyt-eyebrow tyt-reveal">Lightweight Monthly Tech Support</span>
          <h1 className="tyt-reveal">
            One tech task off your plate.
            <em>Every single month.</em>
          </h1>
          <p className="tyt-hero-sub tyt-reveal">
            A lightweight monthly membership for copywriters, coaches, and service providers who are tired of spending the hours they should be spending on clients — fixing the software.
          </p>
          <div className="tyt-hero-ctas tyt-reveal">
            <a href="#tyt-checkout" className="tyt-btn tyt-btn-primary" style={{ fontSize: "16px", padding: "17px 40px" }}>
              Yes, I'm ready — Join for $150/mo
            </a>
            <a href="#tyt-inside" className="tyt-btn tyt-btn-ghost">See what's included</a>
          </div>
          <p className="tyt-hero-trial tyt-reveal">
            Not sure yet? <strong>Use code TECH TRIAL at checkout for your first month at $7.</strong>
          </p>
          <div className="tyt-sage-strip tyt-reveal">
            <div className="tyt-sage-avatar" aria-label="Sage Polaris avatar">S</div>
            <div>
              <blockquote>"If you're having tech or funnel building issues, Arsh is a wonderful resource!"</blockquote>
              <cite>Sage Polaris — Copywriting Coach &amp; Launch Strategist</cite>
            </div>
          </div>
        </div>
      </section>

      {/* OPENING EMPATHY */}
      <section className="tyt-section-empathy">
        <div className="tyt-wrap">
          <span className="tyt-eyebrow tyt-reveal">Sound familiar?</span>
          <div className="tyt-divider tyt-reveal" />
          <div className="tyt-reveal">
            <p>You know the one. The automation you half-built three months ago and told yourself you'd finish "next week." The form that's <em>probably</em> connected to your CRM — you're like 80% sure — but you've never actually tested it.</p>
          </div>
          <div className="tyt-reveal">
            <p>You've Googled it. You've opened the platform, stared at it, and closed the tab. You've spent an entire afternoon comparing options, then had to go take care of everything else — and by the time you came back, you'd forgotten everything.</p>
          </div>
          <div className="tyt-reveal">
            <p>And then the worst part: you love what you do. You love your clients. But somewhere between the idea and the delivery, there's this layer of technical minutiae that drains the joy right out of it.</p>
          </div>
          <div className="tyt-insight-box tyt-reveal">
            <p>Here's something most people don't know about their tech: most broken automations don't announce themselves. They quietly stop working — while you keep assuming they're fine. Your welcome sequence isn't firing. Your checkout confirmation went to spam three months ago. You have no idea.</p>
            <p style={{ marginTop: "12px" }}><strong>The reason it's still broken isn't that you're bad at tech.</strong> It's that nobody built these tools for people who have four hours a day, a business to run, and better things to do than read a forum thread from 2016. The good news: most of these are one-task fixes. Not a full systems overhaul. Not a developer retainer. One specific thing, diagnosed and handled.</p>
          </div>
        </div>
      </section>

      {/* PAIN GRID */}
      <section className="tyt-section-familiar">
        <div className="tyt-wrap-wide">
          <div style={{ textAlign: "center" }}>
            <span className="tyt-eyebrow tyt-reveal" style={{ color: "var(--light-accent)" }}>Does this sound familiar?</span>
            <h2 className="tyt-reveal">Your tech is supposed to support you.<br />Somehow it became the job.</h2>
            <p className="tyt-section-intro tyt-reveal">One of these is probably why you're here.</p>
          </div>
          <div className="tyt-pain-grid">
            {[
              { icon: <><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></>, title: "You're losing hours you don't have", body: "You sat down to fix one small thing at 10am. It's now 2pm. 14 tabs open. Somehow further from a solution than when you started." },
              { icon: <><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></>, title: "Googling it makes it worse", body: "Pages of results. They all claim to be the best software. You spend the afternoon comparing, then have to go take care of everything else, and you've forgotten everything by the time you return." },
              { icon: <><rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/></>, title: "You're paying for tools you don't fully use", body: 'You have a Zapier account you\'ve never set up. Your ConvertKit is "probably" connected to your landing page. Probably.' },
              { icon: <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>, title: "Tech kills the joy of what you love", body: "You love writing. You love sending things out into the world. But by the time you've wrestled with the technical setup — you're exhausted." },
              { icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>, title: "You're sitting on offers you haven't launched", body: "Because the checkout page. Because the platform. Because the automation that's supposed to fire after someone buys — but you can't figure out how to test it." },
              { icon: <><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></>, title: "One wrong click and everything breaks", body: "Or at least, that's how it feels. So you don't touch it. And it stays broken. Which is somehow worse than if it had never been built at all." },
            ].map(({ icon, title, body }) => (
              <div className="tyt-pain-card tyt-reveal" key={title}>
                <div className="tyt-pain-icon"><svg viewBox="0 0 24 24" aria-hidden="true">{icon}</svg></div>
                <h4>{title}</h4>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL: MANGLA */}
      <section className="tyt-section-testi">
        <div className="tyt-wrap">
          <div className="tyt-testi-card tyt-reveal">
            <span className="tyt-result-pill">Four-figure launch</span>
            <blockquote>"I went from random email marketing to launching strategically with email, which gave me a <strong>four-figure launch</strong>. Before, I felt like the tech was in my way. Now, I have the confidence to put out more offers and use the tech to my advantage. <strong>I can spend the weekend with family.</strong> I know what emails work really well. If I need a cash injection, I can use that."</blockquote>
            <p className="tyt-testi-meta">Mangla Sachdev — Expat Business in a Bag</p>
          </div>
        </div>
      </section>

      {/* FOUNDER STORY */}
      <section className="tyt-section-story">
        <div className="tyt-wrap">
          <div className="tyt-story-grid">
            <div className="tyt-story-text">
              <span className="tyt-eyebrow tyt-reveal">Hi, I'm Arsh</span>
              <h2 className="tyt-reveal">I speak fluent tech — so you don't have to.</h2>
              <div className="tyt-divider tyt-reveal" />
              <p className="tyt-reveal">Here's what happened in Allysha's business one Tuesday afternoon. She'd blocked out the whole day for client work — one of those rare, precious days. Kid is at school. Phone is on silent. Coffee is hot. And then the tech broke.</p>
              <p className="tyt-reveal">One thing led to another. She hit a wall. Then another wall. She called her mom for emotional support. She sat there, her one dedicated work day slipping away, feeling like she was going to lose it.</p>
              <p className="tyt-reveal">She reached out to me. A few hours later: <em>"You have set my day back on track."</em></p>
              <p className="tyt-reveal">I've heard a version of this story hundreds of times. Sometimes it's that dramatic. Sometimes it's just the quiet, grinding cost of an afternoon spent on something that was supposed to take twenty minutes. But the pattern is always the same: brilliant person, real offer, real clients — stopped by software.</p>
              <p className="tyt-reveal">I'm a tech consultant and web developer, and I spent years in corporate IT watching this happen to businesses that didn't have to suffer from it. I left because I wanted to work with people who actually care about what they're building.</p>
              <p className="tyt-reveal">Here's the thing about me: technology makes sense to me <em>because</em> it's predictable. It does exactly what you tell it to do. People don't work that way — and that's exactly why I work with female entrepreneurs. You're the part of this equation I find genuinely fascinating. Which means when you tell me what you're trying to build, I'm not logging a support ticket. I'm actually trying to understand it.</p>
              <p className="tyt-reveal">Mangla said it better than I can: <em>"I felt heard, understood."</em> That's the whole goal. Not just fix the tech — understand the business it's supposed to be serving first.</p>
              <p className="tyt-reveal">You shouldn't have to become a tech person to run your business. You just need someone to fix the thing so you can get back to the part that's actually yours to do.</p>
              <p className="tyt-reveal" style={{ marginTop: "24px" }}>That's what Tame Your Tech is.</p>
            </div>
            <div className="tyt-story-callout tyt-reveal">
              <span className="tyt-eyebrow">From Allysha Lavino</span>
              <blockquote>"This was my one day dedicated to client work. I hit one wall after another. I had to call my mom for emotional support. You have set my day back on track."</blockquote>
              <cite>Allysha Lavino — Energy Magic Coach &amp; Author</cite>
              <div style={{ marginTop: "28px", paddingTop: "22px", borderTop: "1px solid rgba(255,255,255,.1)" }}>
                <span className="tyt-eyebrow">Also said by clients</span>
                <blockquote style={{ fontFamily: "var(--font-accent)", fontStyle: "italic", fontSize: "15px", color: "rgba(255,255,255,.7)", lineHeight: 1.6, margin: "0 0 14px", maxWidth: "100%" }}>"Arsh is what tech support would look like if it came with a chai tea latte, a soothing voice and a plan that actually works."</blockquote>
                <cite style={{ fontFamily: "var(--font-caps)", fontStyle: "normal", textTransform: "uppercase", letterSpacing: ".12em", fontSize: "10px", color: "var(--light-accent)" }}>Kelsi Taylor — The Joie Lab</cite>
                <div style={{ marginTop: "22px", paddingTop: "18px", borderTop: "1px solid rgba(255,255,255,.1)" }}>
                  <span className="tyt-eyebrow">Trusted by</span>
                  <div className="tyt-trust-names">
                    {["Sage Polaris", "Allysha Lavino", "Mangla Sachdev", "Kelsi Taylor"].map(n => (
                      <span className="tyt-trust-name" key={n}>{n}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INSIDE */}
      <section className="tyt-section-inside" id="tyt-inside">
        <div className="tyt-wrap-wide">
          <span className="tyt-eyebrow tyt-reveal" style={{ display: "block", textAlign: "center" }}>What's included</span>
          <h2 className="tyt-reveal" style={{ textAlign: "center" }}>Pick your area. I'll handle it.</h2>
          <p className="tyt-reveal" style={{ textAlign: "center", color: "var(--muted)", margin: "0 auto 48px", maxWidth: "52ch" }}>Each month you choose one small-but-mighty task from the list below. No rollover, no overwhelm. Just results.</p>
          <div className="tyt-task-grid">
            {[
              { icon: <><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></>, title: "Platform Connection", body: "Linking one platform to another so the data flows exactly where it should. Your form to your email list. Your checkout to your CRM. The connection that's been \"almost working\" for months." },
              { icon: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>, title: "Mini Automation", body: "Creating one short, focused automation — like a lead capture → welcome email sequence — so you stop doing manually what your software should be doing for you." },
              { icon: <><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></>, title: "Short Web Page or Form Setup", body: "Building or fixing one page or form so it looks right, loads right, and actually does the thing it's supposed to do." },
              { icon: <><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></>, title: "Email Analytics Checkup", body: "Reviewing one email sequence to find out what's working, what isn't, and what one change would make the most difference." },
              { icon: <><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></>, title: "Quick Tech Troubleshoot", body: "Finding and fixing one specific problem that's been quietly slowing you down. The thing you've been side-eyeing for weeks. That one." },
            ].map(({ icon, title, body }) => (
              <div className="tyt-task-card tyt-reveal" key={title}>
                <div className="tyt-task-icon"><svg viewBox="0 0 24 24" aria-hidden="true">{icon}</svg></div>
                <h4>{title}</h4>
                <p>{body}</p>
              </div>
            ))}
            <div className="tyt-task-card featured tyt-reveal">
              <div className="tyt-task-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true" style={{ stroke: "#C4A882" }}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
              </div>
              <h4>Email, Text &amp; Co-Working Support</h4>
              <p>When you have a question or an issue, you email or text me. We go back and forth until it's resolved. Or we hop on a 30–60 minute co-working call and fix it together in real time.</p>
            </div>
          </div>
          <p className="tyt-inside-note tyt-reveal">💡 Lightweight by design — one focused task per month. No rollover, no overwhelm. Just results.</p>
        </div>
      </section>

      {/* TESTIMONIAL: ALLYSHA */}
      <section className="tyt-section-testi">
        <div className="tyt-wrap">
          <div className="tyt-testi-card tyt-reveal">
            <span className="tyt-result-pill">Day saved</span>
            <blockquote>"One session with tech turned a breakdown day into a breakthrough. This was my one day dedicated to client work. I hit one wall after another. I had to call my mom for emotional support. I can't go into full breakdown. <strong>You have set my day back on track."</strong></blockquote>
            <p className="tyt-testi-meta">Allysha Lavino — Energy Magic Coach &amp; Author</p>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="tyt-section-ba">
        <div className="tyt-wrap-wide">
          <div style={{ textAlign: "center" }}>
            <span className="tyt-eyebrow tyt-reveal" style={{ color: "var(--light-accent)" }}>Here's what changes</span>
            <h2 className="tyt-reveal" style={{ color: "#fff" }}>Before and after your tech is handled.</h2>
          </div>
          <div className="tyt-ba-grid" style={{ marginTop: "48px" }}>
            <div className="tyt-ba-col tyt-ba-before tyt-reveal">
              <div className="tyt-ba-label">Before Tame Your Tech</div>
              {["Another afternoon disappearing into the tech weeds", "Paying for software you don't fully understand or use", "Launching offers late because the checkout page isn't ready", "Crossing your fingers every time you run an automation", "Spending your four hours of work time on the wrong thing", "Googling the same problem for the third time this month"].map(t => (
                <div className="tyt-ba-item" key={t}><span className="tyt-ba-dot" /><span>{t}</span></div>
              ))}
            </div>
            <div className="tyt-ba-col tyt-ba-after tyt-reveal">
              <div className="tyt-ba-label">After Tame Your Tech</div>
              {["One task handled every month — without you having to figure out how", "Knowing your systems are actually doing what they're supposed to", "The confidence to put out more offers, because the tech isn't in the way", "Your work hours spent on client work, not platform troubleshooting", "A tech person in your corner who understands your business", "Weekends that aren't haunted by the automation you still need to fix"].map(t => (
                <div className="tyt-ba-item" key={t}><span className="tyt-ba-dot" /><span>{t}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL: KELSI */}
      <section className="tyt-section-testi">
        <div className="tyt-wrap">
          <div className="tyt-testi-card tyt-reveal">
            <span className="tyt-result-pill">30 leads in 2 months</span>
            <blockquote>"For years, I had lots of ideas, but no clue how to execute tech tasks efficiently. I would add a tag, but it wouldn't work. I would spend 2 hours adding in automations, 30 minutes setting up an email, and then another 2 hours trying to figure out why the test didn't land in my inbox. Then came Arsh! And all of a sudden, my systems clicked, and I started seeing consistent sales. <strong>I went from a trickle of 1–2 clients per month to 30 new leads in 2 months.</strong> I was mind blown. Arsh is what tech support would look like if it came with a chai tea latte, a soothing voice and a plan that actually works."</blockquote>
            <p className="tyt-testi-meta">Kelsi Taylor — The Joie Lab</p>
          </div>
        </div>
      </section>

      {/* INVESTMENT */}
      <section className="tyt-section-investment" id="tyt-checkout">
        <div className="tyt-wrap">
          <span className="tyt-eyebrow tyt-reveal" style={{ display: "block", textAlign: "center" }}>The investment</span>
          <h2 className="tyt-reveal" style={{ textAlign: "center" }}>Tame Your Tech</h2>
          <p className="tyt-reveal" style={{ textAlign: "center", color: "var(--muted)", margin: "0 auto 48px", maxWidth: "52ch" }}>One task, every month. Email, text, and co-working support included. No contracts, cancel anytime.</p>
          <div className="tyt-price-card tyt-reveal">
            <span className="tyt-price-badge">Monthly Membership</span>
            <div className="tyt-price-display">
              <span className="tyt-price-amount">$150</span>
              <span className="tyt-price-per">/month</span>
            </div>
            <p className="tyt-price-note">Cancel anytime · No long-term commitment</p>
            <ul className="tyt-price-includes">
              {[
                "One tech task handled per month (your choice from the menu above)",
                "Email and text support for back-and-forth troubleshooting",
                "Co-working calls available (30–60 min, fix it together in real time)",
                "Most tasks completed in 3–5 business days",
                "Works on Kartra, Kajabi, ConvertKit, WordPress, GHL, MailerLite, Zapier & more",
              ].map(item => (
                <li key={item}>
                  <span className="tyt-price-check"><svg viewBox="0 0 24 24" aria-hidden="true"><CheckIcon /></svg></span>
                  {item}
                </li>
              ))}
            </ul>
            <a href={STRIPE_LINK} className="tyt-btn tyt-btn-primary" style={{ display: "block", textAlign: "center", fontSize: "16px", padding: "18px" }} target="_blank" rel="noopener noreferrer">
              Yes, I'm ready — Join for $150/mo →
            </a>
            <p className="tyt-trial-note">
              Want to try it first? Use code <strong>TECH TRIAL</strong> at checkout for your first month at <strong>$7</strong>. One-time trial for new members.
            </p>
          </div>
        </div>
      </section>

      {/* IS THIS FOR YOU */}
      <section className="tyt-section-for-you">
        <div className="tyt-wrap-wide">
          <span className="tyt-eyebrow tyt-reveal" style={{ display: "block", textAlign: "center" }}>Is this for you?</span>
          <h2 className="tyt-reveal" style={{ textAlign: "center" }}>Be honest with yourself.</h2>
          <div className="tyt-for-you-grid" style={{ marginTop: "40px" }}>
            <div className="tyt-for-col tyt-for-yes tyt-reveal">
              <div className="tyt-for-col-label">This is for you if</div>
              {["You have one tech task that's been sitting on your list for longer than it should", "You're not sure what to ask for — you just know something isn't working right", "You've been burned by a VA or developer who said \"I got it\" and then didn't", "You work in limited windows and can't afford to lose one to tech", "You want to stop doing manually what your software should be doing"].map(t => (
                <div className="tyt-for-item" key={t}><span className="tyt-for-indicator">✓</span><span>{t}</span></div>
              ))}
            </div>
            <div className="tyt-for-col tyt-for-no tyt-reveal">
              <div className="tyt-for-col-label">This is not for you if</div>
              {["You have a long backlog of tasks and want them all handled at once (that's the hourly packages, from $400)", "You want someone managing all your systems on an ongoing basis (that's Tech Whisperer)", "You don't have anything pressing — you need a real task to make this worth it"].map(t => (
                <div className="tyt-for-item" key={t}><span className="tyt-for-indicator">—</span><span>{t}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUE LADDER */}
      <section className="tyt-section-ladder">
        <div className="tyt-wrap">
          <span className="tyt-eyebrow tyt-reveal" style={{ display: "block", textAlign: "center", color: "var(--light-accent)" }}>How we can work together</span>
          <h2 className="tyt-reveal" style={{ color: "#fff", textAlign: "center" }}>Start here. Scale when you're ready.</h2>
          <p className="tyt-reveal" style={{ color: "rgba(255,255,255,.55)", textAlign: "center", margin: "0 auto 40px", maxWidth: "52ch" }}>Tame Your Tech is the right starting point for most people. As your needs grow, there's a natural next step.</p>
          <div className="tyt-ladder">
            <div className="tyt-rung current tyt-reveal">
              <div className="tyt-rung-num">1</div>
              <div className="tyt-rung-text"><h4>Tame Your Tech</h4><p>One task/month. Quick in, quick out. Start here.</p></div>
              <div className="tyt-rung-price">$150/mo</div>
              <span className="tyt-rung-tag">You are here</span>
            </div>
            <div className="tyt-rung tyt-reveal">
              <div className="tyt-rung-num">2</div>
              <div className="tyt-rung-text"><h4>Hourly Packages</h4><p>A focused block of hours for launches, backlogs, or bigger builds.</p></div>
              <div className="tyt-rung-price">From $400</div>
            </div>
            <div className="tyt-rung tyt-reveal">
              <div className="tyt-rung-num">3</div>
              <div className="tyt-rung-text"><h4>Tech Whisperer</h4><p>Full ongoing management of your entire tech ecosystem. Limited spots.</p></div>
              <div className="tyt-rung-price">$1,000/mo</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="tyt-section-faq">
        <div className="tyt-wrap">
          <h2 className="tyt-reveal" style={{ textAlign: "center" }}>Questions? Answered.</h2>
          <div className="tyt-faq-list" style={{ marginTop: "40px" }}>
            {[
              { q: "What if I don't know what to ask for?", a: "That's more common than you'd think — and it's totally fine. We can hop on a quick 30-minute call, talk through what's going on in your business, and I'll help you name the thing that would move you forward most this month. The confusion is part of what I help with." },
              { q: "How quickly will my task be done?", a: "Most tasks are wrapped up in 3–5 business days from when I get the details from you." },
              { q: "What if I need more than one task?", a: "Choose your priority for this month. You can always book again next month — or if you consistently have more than one thing to tackle, we can talk about whether an hourly package or Tech Whisperer is a better fit." },
              { q: "What platforms do you work with?", a: "Kartra, WordPress, Mailerlite, ConvertKit, MailChimp, Zapier, GoHighLevel, HoneyBook, Squarespace, Kajabi, Stripe, Dubsado, and more. If you're not sure your platform is on the list, just reach out before signing up." },
              { q: "What's the difference between this and Tech Whisperer?", a: "Tame Your Tech is one focused task per month — quick in, quick out, no big commitment. Tech Whisperer is full ongoing management of your entire tech ecosystem. If you're not sure which you need, Tame Your Tech is almost always the right starting point." },
              { q: "What does co-working look like?", a: "We jump on a call for 30–60 minutes while I work on your problem live. You watch, ask questions, and leave with it fixed and a clear picture of how it works." },
            ].map(({ q, a }) => (
              <details className="tyt-faq tyt-reveal" key={q}>
                <summary>{q}</summary>
                <div className="tyt-faq-body"><p>{a}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* U FIX: BURNED OBJECTION + KELSI QUOTE */}
      <section style={{ background: "var(--base2)", padding: "72px 0" }}>
        <div className="tyt-wrap">
          <div style={{ maxWidth: "640px", margin: "0 auto" }}>
            <div className="tyt-insight-box tyt-reveal" style={{ background: "var(--white)", borderLeftColor: "var(--light-accent)" }}>
              <span className="tyt-eyebrow" style={{ marginBottom: "10px" }}>If you've been burned before</span>
              <p style={{ color: "var(--dark)", maxWidth: "100%" }}>If you've paid a VA who said they could handle it and came back with something that looked nothing like what you asked for — I get why you're reading this carefully. The difference is that I don't touch anything until I understand what you're actually trying to do. Not just the task. The business reason behind it.</p>
            </div>
            <div className="tyt-testi-card tyt-reveal" style={{ marginTop: "24px", textAlign: "center" }}>
              <blockquote style={{ fontFamily: "var(--font-accent)", fontStyle: "italic", fontSize: "clamp(1.05rem, 2.2vw, 1.2rem)", lineHeight: 1.65, color: "var(--dark)", maxWidth: "100%" }}>"If it comes between having you there to help me run the platform or keeping the platform, I'd choose you every time."</blockquote>
              <p className="tyt-testi-meta" style={{ marginTop: "16px" }}>Kelsi Taylor — The Joie Lab</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="tyt-section-final-cta">
        <div className="tyt-wrap">
          <h2 className="tyt-reveal">Your business deserves momentum — not month-long delays while you untangle tech.</h2>
          <p className="tyt-final-cta-intro tyt-reveal">You don't need to know how to fix the thing. You just need it fixed.</p>
          <div className="tyt-final-cta-stack tyt-reveal">
            <a href={STRIPE_LINK} className="tyt-btn tyt-btn-primary" style={{ fontSize: "16px", padding: "18px 44px" }} target="_blank" rel="noopener noreferrer">
              Yes, I'm ready — Join for $150/mo →
            </a>
            <p style={{ color: "rgba(255,255,255,.4)", fontSize: "14px" }}>First month $7 with code <strong style={{ color: "rgba(255,255,255,.6)" }}>TECH TRIAL</strong> · Cancel anytime</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="tyt-footer">
        <p>© {year} Arsh Agarwal · Tech Concierge</p>
        <div className="tyt-footer-links">
          {[
            ["https://techconcierge.vercel.app/", "Home"],
            ["https://techconcierge.vercel.app/techwhisperer", "Tech Whisperer"],
            ["https://techconcierge.vercel.app/audit", "Free Audit"],
            ["https://techconcierge.vercel.app/disclaimer", "Disclaimer"],
            ["https://techconcierge.vercel.app/privacy", "Privacy Policy"],
            ["https://techconcierge.vercel.app/terms", "Terms of Service"],
            ["mailto:arshtist@gmail.com", "Contact"],
          ].map(([href, label]) => (
            <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>{label}</a>
          ))}
        </div>
      </footer>
    </>
  );
}
