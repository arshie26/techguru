import { useState, useEffect } from "react";


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

const painPoints = [
  {
    emoji: "😵‍💫",
    headline: "45 minutes of Googling and 12 tabs later — still unsolved.",
    body: "You know how to find answers. You just don't want to spend your best hours hunting for them. And yet, here you are."
  },
  {
    emoji: "💸",
    headline: "Another tool that promised to 'just work.'",
    body: "It didn't. Now you have one more platform that needs to be made to talk to everything else — and one more subscription quietly draining your account."
  },
  {
    emoji: "😬",
    headline: "One wrong click and your whole list gets the wrong email.",
    body: "You've crossed your fingers before hitting send. You've accidentally triggered the whole workflow. Tech shouldn't feel this risky."
  },
  {
    emoji: "🌀",
    headline: "Every fix creates a new problem.",
    body: "You hoped the next change would simplify things. Instead it added another layer to your already duct-taped workflows. The maze keeps growing."
  },
  {
    emoji: "🧠",
    headline: "You're spending executive hours on entry-level tech tasks.",
    body: "You didn't build a business to configure webhooks at 11pm. But here you are. Again. Because no one else knows how, and you can't afford for it to break."
  },
  {
    emoji: "🚫",
    headline: "Bigger offers keep stalling before they launch.",
    body: "The idea is solid. The audience is ready. But every time you try to build the backend, you hit a wall — and the launch gets pushed another month."
  },
  {
    emoji: "🔥",
    headline: "Your business grew. Your tech didn't keep up.",
    body: "What worked at $2k/month is now duct tape and prayers at $6k. Every new client reveals another crack in a system you built to survive, not scale."
  },
  {
    emoji: "⚙️",
    headline: "You're the only one who knows how any of it works.",
    body: "You built it all yourself. So when something breaks — and something always breaks — it's you at 11pm untangling automations and chasing down the rogue Zap."
  },
  {
    emoji: "🔀",
    headline: "Your platforms don't talk to each other.",
    body: "Your CRM doesn't know what your email platform knows. Your checkout doesn't trigger your onboarding. Data lives in five places and nowhere at once."
  },
  {
    emoji: "📦",
    headline: "You're paying for tools you've outgrown — or can't use.",
    body: "Your tech stack has expanded with every business phase. Now you're paying for software that's either doing too little or too much — and you're not sure which."
  }
];

const included = [
  {
    icon: "🔄",
    title: "Ongoing Platform + Automation Management",
    desc: "No more one-off fixes. I keep your systems running, maintained, and optimized every single month — proactively, not reactively."
  },
  {
    icon: "🔍",
    title: "Proactive Troubleshooting",
    desc: "I spot and solve issues before you even know they exist. You won't find out something broke from a customer email."
  },
  {
    icon: "🔗",
    title: "Integration Management",
    desc: "Making your tools flow together so you can work faster, easier, and with fewer clicks. Your CRM, email, checkout, and automations — one seamless system."
  },
  {
    icon: "🗺️",
    title: "Monthly Tech Directions + Decisions Roadmap",
    desc: "Every month, you know exactly where your systems stand, what's been handled, and what's coming next. No more guessing."
  },
  {
    icon: "📈",
    title: "Continuous Funnel + Backend Optimization",
    desc: "Your funnels, email sequences, CRM, automations, delivery systems, and backend — continuously refined so your systems scale with you."
  },
  {
    icon: "💬",
    title: "Voxer + Slack Access",
    desc: "Reach me when something comes up. Not a ticket system, not a 3-day wait. A real partner who knows your business and responds like it."
  }
];

const transformations = [
  {
    before: "Saving 20+ hours a month to frustration, repetitive clicks, and duct-taped workflows",
    after: "20+ hours back every month — to spend closing sales, serving clients, or just living your life"
  },
  {
    before: "Platforms acting like distant cousins who only talk at Thanksgiving",
    after: "Every tool — CRM, email, scheduling, automations — collaborating like a well-trained team"
  },
  {
    before: "Wondering if you're even getting your money's worth from your subscriptions",
    after: "Every dollar you spend on software pulling its full weight"
  },
  {
    before: "Being the only person who can fix anything in your business",
    after: "A tech partner who owns the systems so you never have to again"
  },
  {
    before: "Launching slower because the backend always needs more time",
    after: "Offers that launch on schedule because your tech is already ready"
  },
  {
    before: "A business that feels like a messy garage full of tools you don't know how to use",
    after: "A self-sustaining, living system — mature, organized, and completely in sync"
  }
];

const faqs = [
  {
    q: "Who is Tech Whisperer actually for?",
    a: "It's for copywriters and coaches with established funnels — business owners who already have recurring revenue and lead gen in place, but whose systems are straining under the weight of growth. If you're drowning in platforms, manually managing things that should be automated, or can't scale without your tech falling apart, this is for you."
  },
  {
    q: "Can you guarantee my emails won't land in spam?",
    a: "No one can — and if they say they can, they're lying. But I make sure your setup is done right so your chances are as strong as possible."
  },
  {
    q: "How many hours do I get?",
    a: "I don't track hours — I track outcomes. You get the results you need within the scope of ongoing management."
  },
  {
    q: "What if I need something big, like a summit build?",
    a: "We can roll large projects into your Tech Whisperer retainer, or add them on separately at a discounted rate."
  },
  {
    q: "How is this different from Tame Your Tech?",
    a: "Tame Your Tech is one focused task per month — lightweight support for business owners who need occasional help. Tech Whisperer is full management. I'm inside your business every month, proactively handling everything so you never have to think about your tech again."
  },
  {
    q: "What happens on the discovery call?",
    a: "We spend 30–45 minutes mapping your current tech stack, identifying what's working, what's broken, and what's missing. You'll walk away with clarity even if we don't work together. If it's a fit, we'll talk about next steps."
  }
];

const notFor = [
  "You want a one-time setup or quick fix (Tame Your Tech is better for that)",
  "You're just starting out and haven't chosen your platforms yet",
  "You want to stay hands-on and in control of every tech decision",
  "You're looking for a VA — this is strategic, systems-level partnership"
];

const isFor = [
  "You've got systems in place but they're not fully optimized or integrated",
  "You want to stop thinking about the 'how' and focus entirely on the 'what'",
  "You value having a dedicated tech partner who understands your business goals",
  "You're tired of being the only person who knows how your tech works",
  "You're ready to hand off your tech completely and get your time back"
];

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

function NavBar() {
  return (
    <nav className="w-full px-6 py-5 flex items-center justify-between max-w-5xl mx-auto">
      <span className="font-['Playfair_Display'] text-xl font-bold" style={{ color: "#3D7267" }}>
        Arsh Agarwal
      </span>
      <a
        href="#apply"
        className="text-sm font-semibold px-5 py-2 rounded-full text-white transition-opacity hover:opacity-90"
        style={{ backgroundColor: "#3D7267", fontFamily: "DM Sans, sans-serif" }}
      >
        Book a Discovery Call
      </a>
    </nav>
  );
}

function Hero() {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-16 pb-24 text-center">
      <div
        className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
        style={{ backgroundColor: "#EAF2F0", color: "#3D7267", fontFamily: "DM Sans, sans-serif" }}
      >
        Tech Whisperer — Monthly Retainer
      </div>
      <h1
        className="font-['Playfair_Display'] text-4xl md:text-6xl font-bold leading-tight mb-6"
        style={{ color: "#1C1C1C" }}
      >
        Your systems, finally
        <br />
        <span style={{ color: "#3D7267" }}>speaking the same language.</span>
      </h1>
      <p
        className="text-lg md:text-xl max-w-2xl mx-auto mb-5 leading-relaxed"
        style={{ color: "#6B6B6B", fontFamily: "DM Sans, sans-serif" }}
      >
        You didn't start your business so you could spend your best hours elbow-deep in settings menus.
      </p>
      <p
        className="text-base max-w-xl mx-auto mb-12 leading-relaxed"
        style={{ color: "#6B6B6B", fontFamily: "DM Sans, sans-serif" }}
      >
        Tech Whisperer is my high-touch, comprehensive monthly retainer where I become your systems' translator, negotiator, and problem-solver — stepping into your business like I've been here all along.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a
          href="#apply"
          className="inline-block text-white font-semibold px-10 py-4 rounded-full text-lg shadow-md transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#3D7267", fontFamily: "DM Sans, sans-serif" }}
        >
          Book Your Discovery Call →
        </a>
        <a
          href="#checkout"
          className="text-sm font-medium underline underline-offset-4"
          style={{ color: "#6B6B6B", fontFamily: "DM Sans, sans-serif" }}
        >
          Already know you're in? Go straight to checkout.
        </a>
      </div>
      <p
        className="text-xs mt-5"
        style={{ color: "#C4A882", fontFamily: "DM Sans, sans-serif" }}
      >
        Limited spots. This is a high-touch, full-management relationship.
      </p>
    </section>
  );
}

function PainPoints() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-center mb-4"
          style={{ color: "#1C1C1C" }}
        >
          But here you are.
        </h2>
        <p
          className="text-center text-xl mb-16 max-w-2xl mx-auto leading-relaxed"
          style={{ color: "#6B6B6B", fontFamily: "DM Sans, sans-serif" }}
        >
          It's not that you can't figure it out. You just don't want to keep trading your creative energy for endless tech troubleshooting.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {painPoints.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl p-7 shadow-sm"
              style={{ border: "1px solid #E8DDD0", backgroundColor: "#FDFAF7" }}
            >
              <div className="text-3xl mb-3">{p.emoji}</div>
              <h3
                className="font-semibold text-base mb-2"
                style={{ color: "#1C1C1C", fontFamily: "DM Sans, sans-serif" }}
              >
                {p.headline}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#6B6B6B", fontFamily: "DM Sans, sans-serif" }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CredibilityBridge() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#3D7267" }}>
      <div className="max-w-3xl mx-auto text-center">
        <p
          className="text-sm font-semibold uppercase tracking-widest mb-6 opacity-75"
          style={{ color: "#F5EDE0", fontFamily: "DM Sans, sans-serif" }}
        >
          Hi, I'm Arsh
        </p>
        <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold mb-8 text-white leading-snug">
          What tech support would look like if it came with a chai latte, a soothing voice, and a plan that actually works.
        </h2>
        <p
          className="text-lg leading-relaxed mb-6"
          style={{ color: "#D6EDE8", fontFamily: "DM Sans, sans-serif" }}
        >
          I've been on both sides — running my own business while trying to keep the tech from eating my week, and diving into clients' setups that looked like they'd been held together with duct tape and hope.
        </p>
        <p
          className="text-lg leading-relaxed mb-14"
          style={{ color: "#D6EDE8", fontFamily: "DM Sans, sans-serif" }}
        >
          In the last 5 years, I've seen it all: half-built automations, CRMs on the verge of imploding, platforms that refuse to integrate, and websites throwing mysterious errors. And I've made them all work together like they were meant to from day one.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { stat: "20+", label: "Hours reclaimed per month for most clients" },
            { stat: "5 yrs", label: "Inside business owners' tech stacks" },
            { stat: "1", label: "Point of contact who knows your full stack" }
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 text-center"
              style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            >
              <p className="font-['Playfair_Display'] text-4xl font-bold text-white mb-2">{item.stat}</p>
              <p className="text-sm leading-snug" style={{ color: "#D6EDE8", fontFamily: "DM Sans, sans-serif" }}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatIsThis() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#F5EDE0" }}>
      <div className="max-w-4xl mx-auto">
        <p
          className="text-sm font-semibold uppercase tracking-widest text-center mb-4"
          style={{ color: "#3D7267", fontFamily: "DM Sans, sans-serif" }}
        >
          What's Included
        </p>
        <h2
          className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-center mb-4"
          style={{ color: "#1C1C1C" }}
        >
          Not a VA. Not IT support. Not a one-off fix.
        </h2>
        <p
          className="text-center text-lg max-w-2xl mx-auto mb-16 leading-relaxed"
          style={{ color: "#6B6B6B", fontFamily: "DM Sans, sans-serif" }}
        >
          This is high-level tech partnership without the corporate IT department vibes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {included.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 flex gap-4 shadow-sm"
              style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8DDD0" }}
            >
              <div className="text-2xl flex-shrink-0">{item.icon}</div>
              <div>
                <h3
                  className="font-semibold mb-1 text-sm md:text-base"
                  style={{ color: "#1C1C1C", fontFamily: "DM Sans, sans-serif" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#6B6B6B", fontFamily: "DM Sans, sans-serif" }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div
            className="rounded-2xl p-8 text-center shadow-sm"
            style={{ backgroundColor: "#FFFFFF", border: "2px solid #3D7267" }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#3D7267", fontFamily: "DM Sans, sans-serif" }}
            >
              Monthly
            </p>
            <p className="font-['Playfair_Display'] text-5xl font-bold mb-1" style={{ color: "#1C1C1C" }}>$1,000</p>
            <p className="text-sm mb-6" style={{ color: "#6B6B6B", fontFamily: "DM Sans, sans-serif" }}>/month</p>
            <a
              href="#apply"
              className="inline-block w-full text-white font-semibold px-6 py-3 rounded-full text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#3D7267", fontFamily: "DM Sans, sans-serif" }}
            >
              Book Discovery Call →
            </a>
          </div>
          <div
            className="rounded-2xl p-8 text-center shadow-sm"
            style={{ backgroundColor: "#EAF2F0", border: "1px solid #E8DDD0" }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#3D7267", fontFamily: "DM Sans, sans-serif" }}
            >
              Quarterly — Save $500
            </p>
            <p className="font-['Playfair_Display'] text-5xl font-bold mb-1" style={{ color: "#1C1C1C" }}>$2,500</p>
            <p className="text-sm mb-6" style={{ color: "#6B6B6B", fontFamily: "DM Sans, sans-serif" }}>/quarter</p>
            <a
              href="#apply"
              className="inline-block w-full font-semibold px-6 py-3 rounded-full text-sm transition-opacity hover:opacity-90 border"
              style={{ borderColor: "#3D7267", color: "#3D7267", backgroundColor: "transparent", fontFamily: "DM Sans, sans-serif" }}
            >
              Book Discovery Call →
            </a>
          </div>
        </div>
        <p
          className="text-center text-sm mt-6 italic"
          style={{ color: "#6B6B6B", fontFamily: "DM Sans, sans-serif" }}
        >
          If we worked together in one-off sprints, the cost would add up fast — not to mention the downtime while you hunt me down for the next fix. Full value: $5,000+/month.
        </p>
      </div>
    </section>
  );
}

function Transformation() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-center mb-4"
          style={{ color: "#1C1C1C" }}
        >
          Here's the shift.
        </h2>
        <p
          className="text-center text-lg mb-16 max-w-2xl mx-auto leading-relaxed"
          style={{ color: "#6B6B6B", fontFamily: "DM Sans, sans-serif" }}
        >
          Your tech stops holding you hostage — and starts operating like your favorite playlist.
        </p>
        <div className="space-y-4">
          {transformations.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
              style={{ border: "1px solid #E8DDD0" }}
            >
              <div className="p-5 flex gap-3 items-start" style={{ backgroundColor: "#FFF5F5" }}>
                <span className="text-red-400 flex-shrink-0 font-bold mt-0.5">✕</span>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B", fontFamily: "DM Sans, sans-serif" }}>{t.before}</p>
              </div>
              <div className="p-5 flex gap-3 items-start" style={{ backgroundColor: "#F0F7F5" }}>
                <span className="flex-shrink-0 font-bold mt-0.5" style={{ color: "#3D7267" }}>✓</span>
                <p className="text-sm leading-relaxed font-medium" style={{ color: "#1C1C1C", fontFamily: "DM Sans, sans-serif" }}>{t.after}</p>
              </div>
            </div>
          ))}
        </div>

        {/* The wins list */}
        <div
          className="mt-14 rounded-2xl p-8"
          style={{ backgroundColor: "#F5EDE0", border: "1px solid #E8DDD0" }}
        >
          <h3
            className="font-['Playfair_Display'] text-2xl font-bold mb-6 text-center"
            style={{ color: "#1C1C1C" }}
          >
            With Tech Whisperer, you get to:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "Save 20+ hours every month — and make 10x more from the work you actually want to be doing",
              "Spend your time inside your zone of genius, not inside platform tutorials",
              "Launch confidently, knowing your systems will deliver without a hitch",
              "Feel held by your technology because it's actually working for you",
              "Never again choose between family time and untangling tech",
              "Feel like your business has a single, smooth-operating brain"
            ].map((win, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="flex-shrink-0 mt-0.5" style={{ color: "#3D7267" }}>→</span>
                <p className="text-sm leading-relaxed" style={{ color: "#1C1C1C", fontFamily: "DM Sans, sans-serif" }}>{win}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function IsItForYou() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#F5EDE0" }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-center mb-16"
          style={{ color: "#1C1C1C" }}
        >
          Is Tech Whisperer right for you?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl p-8" style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8DDD0" }}>
            <p className="text-sm font-semibold uppercase tracking-widest mb-6" style={{ color: "#3D7267", fontFamily: "DM Sans, sans-serif" }}>
              ✅ Perfect for you if...
            </p>
            {isFor.map((item, i) => (
              <div key={i} className="flex gap-3 mb-4">
                <span className="flex-shrink-0 mt-0.5" style={{ color: "#3D7267" }}>→</span>
                <p className="text-sm leading-relaxed" style={{ color: "#1C1C1C", fontFamily: "DM Sans, sans-serif" }}>{item}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl p-8" style={{ backgroundColor: "#FDFAF7", border: "1px solid #E8DDD0" }}>
            <p className="text-sm font-semibold uppercase tracking-widest mb-6" style={{ color: "#C0706A", fontFamily: "DM Sans, sans-serif" }}>
              ❌ Not for you if...
            </p>
            {notFor.map((item, i) => (
              <div key={i} className="flex gap-3 mb-4">
                <span className="text-red-300 flex-shrink-0 mt-0.5">→</span>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B", fontFamily: "DM Sans, sans-serif" }}>{item}</p>
              </div>
            ))}
            <div
              className="mt-6 rounded-xl p-4 text-sm"
              style={{ backgroundColor: "#EDE4D6", fontFamily: "DM Sans, sans-serif", color: "#1C1C1C" }}
            >
              💡 If you want a one-time setup or occasional help, <strong>Tame Your Tech</strong> ($150/mo) is the better fit.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

let testimonials = [
  {  
    summary: "From a never-ending to-do list to a four-figure launch — and her weekends back.",
    quote: "If you're looking for funnel or technology help, Arsh is a wonderful resource",
    name: "Sage Polaris",
    business: "Sage Polaris",
    image: sage,
    bg: "#F5EDE0"
  },
  {  
    summary: "From a never-ending to-do list to a four-figure launch — and her weekends back.",
    quote: "Before we started, I just had a massive to do list that never actually ended. I felt like the tech was in my way. Now I'm so much more productive. Working with Arsh brought my weekends back with my family. I didn't have to hustle every day. I knew what emails worked really well. If I need a cash injection, I can use that. I went from random email marketing to launching strategically through email which gave me a four figure launch. Arsh gave me the confidence to put out more offers and use the tech to my advantage.",
    name: "Mangla Sachdev",
    business: "Expat Business in a Bag",
    image: mangla,
    bg: "#F5EDE0"
  },
  {
    summary: "One session with Arsh turned a breakdown day into a breakthrough.",
    quote: "This was my one day dedicated to client work. I hit one wall after another. I had to call my mom for emotional support. I can't go into full breakdown. I've already done that. I can't solve this. You have set my day back on track.",
    name: "Allysha Lavino",
    business: "Real Life Magic",
    image: allysha,
    bg: "#FFFFFF"
  },
  {
    summary: "From 1-2 leads a month to 30 new leads in 2 months.",
    quote: "For years, I had lots of ideas, but no clue how to execute tech tasks efficiently. I would add a tag, but it wouldn't work. I would spend 2 hours adding in automations, 30 minutes setting up an email, and then another 2 hours trying to figure out why the test didn't land in my inbox. Then came Arsh! And all of a sudden, my systems clicked, and I started seeing consistent sales. I went from a trickle of 1-2 clients per month to 30 new clients in 2 months. I was mind blown. Arsh is what tech support would look like if it came with a chai tea latte, a soothing voice and a plan that actually works.",
    name: "Kelsi Taylor",
    business: "The Joie Lab",
    image: kelsi,
    bg: "#F5EDE0"
  }
]

function Testimonials() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-center mb-16"
          style={{ color: "#1C1C1C" }}
        >
          What clients say.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="rounded-2xl p-7 shadow-sm"
              style={{ backgroundColor: "#FDFAF7", border: "1px solid #E8DDD0" }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, s) => (
                  <span key={s} style={{ color: "#C4A882" }}>★</span>
                ))}
              </div>
              <p
                className="text-sm italic leading-relaxed mb-5"
                style={{ color: "#6B6B6B", fontFamily: "DM Sans, sans-serif" }}
              >
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ backgroundColor: "#3D7267" }}
                >
                  <img src={testimonial.image} />
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "#1C1C1C", fontFamily: "DM Sans, sans-serif" }}>
                    {testimonial.name}
                  </p>
                  <p className="text-xs" style={{ color: "#6B6B6B", fontFamily: "DM Sans, sans-serif" }}>
                    {testimonial.business}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApplySection() {
  return (
    <section id="apply" className="py-28 px-6" style={{ backgroundColor: "#3D7267" }}>
      <div className="max-w-2xl mx-auto text-center">
        <p
          className="text-sm font-semibold uppercase tracking-widest mb-4 opacity-75"
          style={{ color: "#F5EDE0", fontFamily: "DM Sans, sans-serif" }}
        >
          Ready to hand off your tech for good?
        </p>
        <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Let's find out if Tech Whisperer is your next move.
        </h2>
        <p
          className="text-lg mb-4 leading-relaxed"
          style={{ color: "#D6EDE8", fontFamily: "DM Sans, sans-serif" }}
        >
          Book a 30–45 minute discovery call. We'll map your current tech stack, identify what's working, what's broken, and what's missing.
        </p>
        <p
          className="text-sm mb-10 italic"
          style={{ color: "#A8D4CC", fontFamily: "DM Sans, sans-serif" }}
        >
          You'll walk away with clarity — whether we work together or not.
        </p>
        <a
          href="https://tidycal.com/arshtist/60min"
          className="inline-block font-semibold px-12 py-5 rounded-full text-lg shadow-lg transition-opacity hover:opacity-90 mb-5"
          style={{ backgroundColor: "#F5EDE0", color: "#3D7267", fontFamily: "DM Sans, sans-serif" }}
        >
          Book Your Discovery Call →
        </a>
        <br />
        <a
          id="checkout"
          href="#"
          className="text-sm underline underline-offset-4 opacity-70 hover:opacity-100 transition-opacity text-white"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          Already know you're ready? Go straight to checkout — $1,000/month →
        </a>
        <p
          className="text-xs mt-8 opacity-50 text-white"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          I only take on a limited number of Tech Whisperer clients so I can give each one the depth of attention their systems deserve.
        </p>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className="py-20 px-6" style={{ backgroundColor: "#F5EDE0" }}>
      <div className="max-w-3xl mx-auto">
        <h2
          className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-center mb-12"
          style={{ color: "#1C1C1C" }}
        >
          Questions? Answered.
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-2xl overflow-hidden" style={{ border: "1px solid #E8DDD0" }}>
              <button
                className="w-full text-left px-6 py-5 flex justify-between items-center"
                style={{ backgroundColor: open === i ? "#F5EDE0" : "#FDFAF7", fontFamily: "DM Sans, sans-serif" }}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-sm md:text-base" style={{ color: "#1C1C1C" }}>{faq.q}</span>
                <span className="text-lg flex-shrink-0 ml-4" style={{ color: "#3D7267" }}>{open === i ? "−" : "+"}</span>
              </button>
              {open === i && (
                <div
                  className="px-6 pb-5 text-sm leading-relaxed"
                  style={{ color: "#6B6B6B", backgroundColor: "#F5EDE0", fontFamily: "DM Sans, sans-serif" }}
                >
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: "#1C1C1C" }}>
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-white mb-5 leading-snug">
          You could keep piecing it together yourself.
        </h2>
        <p
          className="text-lg mb-5 leading-relaxed"
          style={{ color: "#888", fontFamily: "DM Sans, sans-serif" }}
        >
          But every day you spend in the weeds is another day you're not closing deals, delivering for your clients, or taking a breath.
        </p>
        <p
          className="text-lg mb-10 leading-relaxed"
          style={{ color: "#A8D4CC", fontFamily: "DM Sans, sans-serif" }}
        >
          Your systems deserve a translator. You deserve your time back.
        </p>
        <a
          href="#apply"
          className="inline-block font-semibold px-12 py-5 rounded-full text-lg shadow-lg transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#3D7267", color: "#FFFFFF", fontFamily: "DM Sans, sans-serif" }}
        >
          Let's make it happen →
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="py-8 px-6 text-center text-sm"
      style={{ backgroundColor: "#F5EDE0", color: "#6B6B6B", fontFamily: "DM Sans, sans-serif" }}
    >
      © {new Date().getFullYear()} Arsh Agarwal Tech Concierge · arshtist@gmail.com
    </footer>
  );
}

export default function TechWhisperer() {
  return (
    <div style={{ backgroundColor: "#F5EDE0" }} className="min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@400;500;600&display=swap');
      `}</style>
      <Nav />
      <Hero />
      <PainPoints />
      <CredibilityBridge />
      <WhatIsThis />
      <Transformation />
      <IsItForYou />
      <Testimonials />
      <ApplySection />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
