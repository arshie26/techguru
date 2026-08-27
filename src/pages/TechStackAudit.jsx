import { useState } from "react";
import {
  ArrowRight,
  Check,
  Search,
  Layers,
  DollarSign,
  ClipboardList,
  ScreenShare,
  Zap,
  AlertTriangle,
} from "lucide-react";

const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&family=DM+Sans:wght@400;500;600;700&display=swap');`;
const BOOKING_LINK = "https://tidycal.com/arshtist/60min";

const PAIN_CARDS = [
  {
    emoji: "🧾",
    title: "You're not sure what you're even paying for anymore.",
    copy: "There's a charge on your card every month and you have a vague sense of what it's for — but you couldn't explain it if asked.",
    quote: "\"I spent so much money in the beginning not knowing what the heck I was doing.\""
  },
  {
    emoji: "⚡",
    title: "You're paying for features you've never turned on.",
    copy: "Most business owners use 20% of what they're paying for. The fix is often already inside a tool you own — you just don't know it's there.",
    quote: "\"I am so far away from my data, I don't even know what I don't know.\""
  },
  {
    emoji: "🪜",
    title: "Two platforms are doing the same job.",
    copy: "You signed up for a new tool to solve a problem and never checked whether an existing one already handled it. Now you're paying twice.",
    quote: "\"I hate overlapping tools and paying for two tools that basically do the same thing.\""
  },
  {
    emoji: "🤷",
    title: "Generic support doesn't understand your business.",
    copy: "Customer support knows the platform. They don't know what you're building, who you serve, or why it matters. You end up more confused than when you started.",
    quote: "\"Even if you're paying for support, customer support treats you as a customer — not a business owner.\""
  },
  {
    emoji: "👻",
    title: "You built an automation once and have no idea if it still runs.",
    copy: "It worked when you set it up. Nobody's checked on it since. That's usually where things quietly break — welcome sequences, checkout confirmations, post-purchase flows.",
    quote: "\"I would spend 2 hours adding automations and then another 2 hours trying to figure out why the test didn't land in my inbox.\""
  },
  {
    emoji: "🧩",
    title: "Nothing is connected the way it should be.",
    copy: "Your form isn't talking to your CRM. Your CRM isn't talking to your email platform. You built pieces of the system at different times and they never quite came together.",
    quote: "\"Getting everything to work together, integrated, working smoothly is my problem.\""
  },
];

const WHAT_YOU_GET = [
  {
    icon: <DollarSign size={18} />,
    title: "What to cut",
    copy: "Overlapping tools and functions",
  },
  {
    icon: <Check size={18} />,
    title: "What to turn on",
    copy: "Features you're already paying for but not using — sometimes the fix is inside a tool you already own.",
  },
  {
    icon: <Zap size={18} />,
    title: "Your biggest automation gaps, named",
    copy: "The specific automations that should exist but don't — and which ones are broken or misfiring right now.",
  },
  {
    icon: <ClipboardList size={18} />,
    title: "Prioritized next steps",
    copy: "The few things worth doing first, and why — based on what's actually costing you the most time or money.",
  },
  {
    icon: <AlertTriangle size={18} />,
    title: "A written breakdown after the call",
    copy: "What to cut, what to turn on, what's overlapping, and what's worth fixing first — in writing, so you don't have to take notes.",
  },
];

const FAQS = [
  {
    q: "Is this a sales call in disguise?",
    a: "No. We're on a screen share going through your actual platforms — not a pitch deck. If something bigger comes out of it, we'll talk about that at the end, not the beginning.",
  },
  {
    q: "What do I need to prepare?",
    a: "Just logins (or someone on the call who has them) to whatever platforms you want looked at — email, CRM, automations, checkout, whatever's on your mind.",
  },
  {
    q: "What if I don't know everything I'm signed up for?",
    a: "That's honestly the most common starting point. Part of the audit is surfacing tools you forgot you had, not just optimizing ones you remember.",
  },
  {
    q: "Do I get anything after the call?",
    a: "Yes — a written breakdown of what we found: what to cut, what to turn on, what's overlapping, and what's worth fixing first.",
  },
  {
    q: "What if I need help actually fixing what we find?",
    a: "Totally optional — some people just want the clarity and handle it themselves. If you want help implementing, that's what Tame Your Tech and Tech Whisperer are for.",
  },
];

function SectionLabel({ children, light = false }) {
  return (
    <p
      className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-center"
      style={{ color: light ? "rgba(245,237,224,0.6)" : "#3D7267" }}
    >
      {children}
    </p>
  );
}

function VocQuote({ children }) {
  return (
    <p
      className="text-xs leading-relaxed mt-3 pt-3 italic"
      style={{
        color: "rgba(61,114,103,0.75)",
        borderTop: "1px solid rgba(61,114,103,0.12)",
      }}
    >
      {children}
    </p>
  );
}

export default function TechStackAudit() {
  const [openFaq, setOpenFaq] = useState(null);
  const year = new Date().getFullYear();

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#F5EDE0", color: "#22291F" }}>
      <style>{FONT_IMPORT}</style>

      {/* ── NAV ── */}
      <div className="w-full border-b sticky top-0 z-50" style={{ borderColor: "rgba(61,114,103,0.15)", background: "rgba(245,237,224,0.96)", backdropFilter: "blur(12px)" }}>
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold" style={{ background: "#3D7267", color: "#F5EDE0" }}>
              A
            </div>
            <span className="text-sm tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
              Arsh Agarwal <span className="opacity-60">· Tech Concierge</span>
            </span>
          </div>
          <a href="#book" className="text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full transition-opacity hover:opacity-85" style={{ background: "#3D7267", color: "#F5EDE0" }}>
            Book the Audit
          </a>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-12 text-center">
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-widest uppercase mb-6" style={{ background: "rgba(61,114,103,0.1)", color: "#3D7267", border: "1px solid rgba(61,114,103,0.2)" }}>
          ✓ Free · 60 Minutes · No Obligation
        </div>
        <SectionLabel>Live Tech Stack Audit</SectionLabel>
        <h1 className="text-4xl sm:text-5xl leading-tight mb-5" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}>
          Let's cut through your{" "}
          <span style={{ color: "#3D7267", fontStyle: "italic" }}>bloated tech stack</span>, live.
        </h1>
        <p className="text-base sm:text-lg opacity-80 max-w-xl mx-auto mb-4 leading-relaxed">
          Not a questionnaire. Not a generic checklist. I get on a call, pull up your actual platforms with you, and show you exactly what's underused, overlapping, or quietly costing you money.
        </p>
        <p className="text-sm opacity-60 max-w-md mx-auto mb-8 leading-relaxed">
          You'll leave with a clear picture of what's working, what's broken, and what to do first — plus a written breakdown after the call.
        </p>
        <a
          href={BOOKING_LINK}
          className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold transition-transform hover:scale-[1.02]"
          style={{ background: "#3D7267", color: "#F5EDE0" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Book Your Free Audit <ArrowRight size={16} />
        </a>
        <p className="text-xs opacity-50 mt-3">60 minutes · live screen share · free</p>
      </section>

      {/* ── PAIN POINTS ── */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className="text-2xl sm:text-3xl text-center mb-2" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}>
          Does this sound familiar?
        </h2>
        <p className="text-sm opacity-70 text-center mb-10 max-w-md mx-auto">
          You didn't set out to collect software. It just happened. And now you're not sure if any of it is actually working.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PAIN_CARDS.map((card, i) => (
            <div key={i} className="rounded-xl p-6" style={{ background: "#FFFFFF", border: "1px solid rgba(61,114,103,0.15)" }}>
              <div className="text-2xl mb-3">{card.emoji}</div>
              <h3 className="font-semibold text-sm mb-2">{card.title}</h3>
              <p className="text-sm opacity-70 leading-relaxed">{card.copy}</p>
              <VocQuote>{card.quote}</VocQuote>
            </div>
          ))}
        </div>

        {/* VOC pull quote */}
        <div className="mt-10 rounded-2xl p-8 text-center" style={{ background: "#FFFFFF", border: "1px solid rgba(61,114,103,0.15)" }}>
          <p className="text-base sm:text-lg leading-relaxed italic mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "#22291F", maxWidth: "56ch", margin: "0 auto 16px" }}>
            "There is definitely value in what Arsh offers. I spent so much money in the beginning not knowing what the heck I was doing."
          </p>
          <p className="text-xs tracking-widest uppercase opacity-60">Community member</p>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="px-6 pb-0" style={{ background: "#22291F" }}>
        <div className="max-w-4xl mx-auto py-20">
          <SectionLabel light>How It Works</SectionLabel>
          <h2 className="text-2xl sm:text-3xl text-center mb-3" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, color: "#F5EDE0" }}>
            What actually happens on the call
          </h2>
          <p className="text-sm text-center mb-10 max-w-lg mx-auto" style={{ color: "rgba(245,237,224,0.55)" }}>
            This is a working session. We look at your actual platforms together — not a hypothetical version of them.
          </p>
          <div className="grid sm:grid-cols-3 gap-5 mb-16">
            {[
              {
                icon: <ScreenShare size={18} />,
                title: "We screen-share, together",
                copy: "You pull up your platforms — email, CRM, automations, checkout, whatever's on your mind — and I go through them with you in real time.",
              },
              {
                icon: <Search size={18} />,
                title: "I flag what's underused, broken, or overlapping",
                copy: "Features you're paying for but not using. Tools doing the same job twice. Automations that quietly stopped working months ago.",
              },
              {
                icon: <ClipboardList size={18} />,
                title: "You leave with a written plan",
                copy: "What to cut, what to turn on, and what's worth fixing first — sent to you after the call, not just a list of problems.",
              },
            ].map((step, i) => (
              <div key={i} className="rounded-xl p-6" style={{ background: "rgba(245,237,224,0.06)", border: "1px solid rgba(245,237,224,0.15)" }}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center mb-4" style={{ background: "#3D7267", color: "#F5EDE0" }}>
                  {step.icon}
                </div>
                <h3 className="font-semibold text-sm mb-2" style={{ color: "#F5EDE0" }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#D8CCB5" }}>{step.copy}</p>
              </div>
            ))}
          </div>

          {/* Testimonial block inside dark section */}
          <div className="rounded-2xl p-8 text-center" style={{ background: "rgba(61,114,103,0.2)", border: "1px solid rgba(61,114,103,0.35)" }}>
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "rgba(196,168,130,0.8)" }}>
              Four-figure launch
            </p>
            <p className="text-base sm:text-lg leading-relaxed italic mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "rgba(245,237,224,0.85)", maxWidth: "52ch", margin: "0 auto 16px" }}>
              "Before, I felt like the tech was in my way. Now, I have the confidence to put out more offers and use the tech to my advantage. I can spend the weekend with family."
            </p>
            <p className="text-xs tracking-widest uppercase" style={{ color: "rgba(196,168,130,0.7)" }}>
              Mangla Sachdev — Expat Business in a Bag
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT YOU WALK AWAY WITH ── */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <SectionLabel>What You Walk Away With</SectionLabel>
        <h2 className="text-2xl sm:text-3xl text-center mb-3" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}>
          Clarity, not just a list of problems
        </h2>
        <p className="text-sm opacity-70 text-center mb-10 max-w-md mx-auto">
          Every audit is different because every tech stack is different. But here's what's always on the table.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {WHAT_YOU_GET.map((item, i) => (
            <div key={i} className="rounded-xl p-6 flex gap-4" style={{ background: "#FFFFFF", border: "1px solid rgba(61,114,103,0.15)" }}>
              <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(61,114,103,0.12)", color: "#3D7267" }}>
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-sm opacity-70 leading-relaxed">{item.copy}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl p-6" style={{ background: "#FFFFFF", borderLeft: "4px solid #3D7267", borderRadius: "0 12px 12px 0" }}>
          <p className="text-sm leading-relaxed" style={{ color: "#22291F" }}>
            <strong>One important note:</strong> I only recommend fixing things that will actually make a difference to how your business runs. There's no upsell for its own sake here — if your stack is mostly working, I'll tell you that too.
          </p>
        </div>
      </section>

      {/* ── BEFORE / AFTER ── */}
      <section className="px-6 pb-20" style={{ background: "#22291F" }}>
        <div className="max-w-4xl mx-auto pt-20 pb-4">
          <SectionLabel light>Here's what changes</SectionLabel>
          <h2 className="text-2xl sm:text-3xl text-center mb-10" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, color: "#F5EDE0" }}>
            From guessing to knowing.
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: "rgba(255,255,255,0.35)" }}>
                Before the audit
              </p>
              {[
                "Paying for platforms you can't fully explain",
                "Assuming your automations are working",
                "No idea which tech problem to fix first",
                "Googling platform questions with no context about your specific business",
                "Spending work hours on tech instead of clients",
              ].map((t, i) => (
                <div key={i} className="flex items-start gap-3 mb-3 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: "rgba(255,255,255,0.2)", marginTop: 7, flexShrink: 0, display: "block" }} />
                  {t}
                </div>
              ))}
            </div>
            <div className="rounded-xl p-6" style={{ background: "rgba(61,114,103,0.2)", border: "1px solid rgba(61,114,103,0.35)" }}>
              <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: "rgba(196,168,130,0.8)" }}>
                After the audit
              </p>
              {[
                "A clear picture of what's actually working in your stack",
                "The specific automations that are broken or missing",
                "A prioritized list of what to fix first",
                "Personalized guidance based on your actual platforms and business",
                "A path forward — with or without more help from me",
              ].map((t, i) => (
                <div key={i} className="flex items-start gap-3 mb-3 text-sm" style={{ color: "rgba(245,237,224,0.88)" }}>
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#C4A882", marginTop: 7, flexShrink: 0, display: "block" }} />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Kelsi testimonial */}
        <div className="max-w-4xl mx-auto mt-10 mb-4">
          <div className="rounded-2xl p-8 text-center" style={{ background: "rgba(245,237,224,0.05)", border: "1px solid rgba(245,237,224,0.12)" }}>
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "rgba(196,168,130,0.8)" }}>
              30 leads in 2 months
            </p>
            <p className="text-base sm:text-lg leading-relaxed italic mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "rgba(245,237,224,0.85)", maxWidth: "52ch", margin: "0 auto 16px" }}>
              "Then came Arsh! And all of a sudden, my systems clicked, and I started seeing consistent sales. Arsh is what tech support would look like if it came with a chai tea latte, a soothing voice and a plan that actually works."
            </p>
            <p className="text-xs tracking-widest uppercase" style={{ color: "rgba(196,168,130,0.7)" }}>
              Kelsi Taylor — The Joie Lab
            </p>
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Is this for you?</SectionLabel>
          <h2 className="text-2xl sm:text-3xl text-center mb-10" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}>
            Be honest with yourself.
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="rounded-xl p-6" style={{ background: "#FFFFFF", border: "1px solid rgba(61,114,103,0.2)" }}>
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#3D7267" }}>This is for you if</p>
              <ul className="space-y-3">
                {[
                  "You've been using the same platforms for a while but aren't sure you're getting the most out of them",
                  "You suspect something in your automations is broken — but you can't figure out what",
                  "You genuinely don't know everything you're paying for right now",
                  "You want a second, technical set of eyes before your next renewal cycle",
                  "You'd rather see it live than fill out a form about it",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check size={15} style={{ color: "#3D7267", marginTop: 2, flexShrink: 0 }} />
                    <span className="opacity-80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl p-6" style={{ background: "rgba(196,168,130,0.12)", border: "1px solid rgba(196,168,130,0.35)" }}>
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#8a6d3b" }}>Not quite the right fit if</p>
              <ul className="space-y-3">
                {[
                  "You're just starting out and haven't chosen your platforms yet — let's talk about that separately",
                  "You want ongoing implementation help, not an audit (Tame Your Tech or Tech Whisperer fits that better)",
                  "You already know exactly what you're paying for and why",
                  "You're not able to share screens or logins during the call",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span style={{ color: "#8a6d3b", flexShrink: 0 }}>—</span>
                    <span className="opacity-80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOOKING ── */}
      <section id="book" className="px-6 pb-20">
        <div className="max-w-2xl mx-auto rounded-2xl p-10 text-center" style={{ background: "#3D7267", color: "#F5EDE0" }}>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-2" style={{ opacity: 0.75 }}>
            Free · 60 Minutes · No Obligation
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            Book Your Free<br />Tech Stack Audit
          </h2>
          <p className="text-sm mb-8 max-w-md mx-auto leading-relaxed" style={{ opacity: 0.85 }}>
            60 minutes, live, on a screen share — plus a written breakdown after the call. Pick a time that works for you.
          </p>
          <a
            href={BOOKING_LINK}
            className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold transition-transform hover:scale-[1.02]"
            style={{ background: "#F5EDE0", color: "#22291F" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book My Free Audit <ArrowRight size={16} />
          </a>
          <p className="text-xs mt-4" style={{ opacity: 0.6 }}>
            No payment required. No pitch. Just clarity about your tech.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="px-6 pb-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl text-center mb-8" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}>
            Questions? Answered.
          </h2>
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <div key={i} className="rounded-xl overflow-hidden" style={{ background: "#FFFFFF", border: "1px solid rgba(61,114,103,0.15)" }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between text-sm font-semibold"
                >
                  {f.q}
                  <span
                    className="text-lg ml-4 flex-shrink-0 transition-transform duration-200"
                    style={{ transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)", color: "#3D7267" }}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <p className="px-5 pb-4 text-sm leading-relaxed" style={{ opacity: 0.75 }}>{f.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUE LADDER ── */}
      <section className="px-6 pb-20" style={{ background: "#22291F" }}>
        <div className="max-w-3xl mx-auto pt-20">
          <SectionLabel light>After the audit</SectionLabel>
          <h2 className="text-2xl sm:text-3xl text-center mb-3" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, color: "#F5EDE0" }}>
            Ready to fix what we find?
          </h2>
          <p className="text-sm text-center mb-10 max-w-md mx-auto" style={{ color: "rgba(245,237,224,0.55)" }}>
            There's no pressure to work together after the audit. But if you want help fixing what we uncover, here's how we can.
          </p>
          <div className="space-y-3">
            {[
              { num: "1", title: "Tame Your Tech", sub: "One task/month — fix the single biggest thing from your audit list.", price: "$150/mo" },
              { num: "2", title: "Hourly Packages", sub: "A block of focused hours to tackle multiple items from your priority list.", price: "From $400" },
              { num: "3", title: "Tech Whisperer", sub: "Full ongoing management — I handle everything so you never have to think about it.", price: "$1,000/mo" },
            ].map(({ num, title, sub, price }) => (
              <div key={num} className="rounded-xl px-5 py-4 flex items-center gap-5 transition-transform hover:translate-x-1" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.13)" }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, color: "rgba(255,255,255,0.2)", width: 40, textAlign: "center", flexShrink: 0 }}>{num}</span>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold" style={{ color: "#F5EDE0" }}>{title}</h4>
                  <p className="text-xs mt-1" style={{ color: "rgba(245,237,224,0.55)" }}>{sub}</p>
                </div>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: "rgba(196,168,130,0.7)", flexShrink: 0 }}>{price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="px-6 py-20 text-center" style={{ background: "#F5EDE0" }}>
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl mb-4" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}>
            Your tech should be working while you're working with clients.
          </h2>
          <p className="text-sm opacity-70 mb-8">Let's find out if it is.</p>
          <a
            href={BOOKING_LINK}
            className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold transition-transform hover:scale-[1.02]"
            style={{ background: "#3D7267", color: "#F5EDE0" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book My Free Audit <ArrowRight size={16} />
          </a>
          <p className="text-xs opacity-50 mt-3">Free · 60 minutes · No pitch</p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="px-6 py-10" style={{ background: "#22291F", color: "#F5EDE0" }}>
        <div className="max-w-4xl mx-auto text-center">
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px", opacity: 0.9, marginBottom: "6px" }}>
            Arsh Agarwal · Tech Concierge
          </p>
          <p className="text-xs mb-6" style={{ opacity: 0.5 }}>arshtist@gmail.com</p>
          <div className="flex flex-wrap justify-center gap-5 text-xs" style={{ opacity: 0.45 }}>
            {[
              ["https://techconcierge.vercel.app/", "Home"],
              ["https://techconcierge.vercel.app/tameyourtech", "Tame Your Tech"],
              ["https://techconcierge.vercel.app/techwhisperer", "Tech Whisperer"],
              ["https://techconcierge.vercel.app/audit", "Automation Audit"],
              ["https://techconcierge.vercel.app/disclaimer", "Disclaimer"],
              ["https://techconcierge.vercel.app/privacy", "Privacy Policy"],
              ["https://techconcierge.vercel.app/terms", "Terms of Service"],
            ].map(([href, label]) => (
              <a key={label} href={href} className="hover:opacity-100 transition-opacity" style={{ color: "#F5EDE0", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">{label}</a>
            ))}
          </div>
          <p className="text-xs mt-6" style={{ opacity: 0.3 }}>© {year} Arsh Agarwal</p>
        </div>
      </footer>
    </div>
  );
}
