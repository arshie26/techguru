import joielablogo from '../assets/logo-kelsi.png'

/**
 * DEMO PAGE v2 — Built by Arsh Agarwal · Tech Concierge
 * NOTE: Voice-refined version using Kelsi's email sequence patterns.
 * Client: Kelsi Taylor — The Joie Lab
 * Built from: Website PDF screenshot, 18 email campaigns, Madam Ambition profile
 *
 * IMPROVEMENTS MADE:
 * - Consolidated multiple offers into one clear hero CTA (Joie Scholar Pass)
 * - Added ACT Bootcamp as a secondary offer card
 * - Strengthened pain point copy using Kelsi's own email language
 * - Credibility Bridge pulls from her real story (Harvard, homeschooling, 28 states)
 * - FAQ derived from common objections implied by email campaigns
 *
 * ASSUMPTIONS:
 * - Primary offer featured = Joie Scholar Pass (most recurring, most emailed about)
 * - Audience = homeschool parents + educators of middle/high schoolers
 * - Booking link = #book-a-call (replace with real Calendly/booking URL)
 * - Kelsi headshot sourced from Madam Ambition article
 *
 * MOCK CONTENT (replace before launch):
 * - Testimonial 3 is MOCK — replace with a real quote before publishing
 * - Testimonials 1 & 2 adapted from PDF (partial text) — verify exact wording with Kelsi
 *
 * Images: place in ../assets/ relative to this file's location in /pages/
 */

import { useState } from "react";

// ─── Brand Colors ──────────────────────────────────────────────
const PINK       = "#E84393";
const TEAL       = "#4DC8C8";
const GREEN      = "#8CC63F";
const ORANGE     = "#F7941D";
const PURPLE     = "#9B59B6";
const YELLOW     = "#FFF176";
const BG_PINK    = "#FDF0F5";
const BG_WHITE   = "#FFFFFF";
const TEXT_DARK  = "#2D2D2D";
const TEXT_MID   = "#666666";

// ─── Data ──────────────────────────────────────────────────────
const painPoints = [
  {
    emoji: "😩",
    headline: "The joy of learning got buried under the logistics of it.",
    body: "You love your kids. You love the idea. But somewhere between the blank stares and the curriculum overwhelm, it stopped feeling like a privilege and started feeling like a sentence."
  },
  {
    emoji: "📌",
    headline: "You've got the Pinterest board. You just never use it.",
    body: "The plans look great at 10pm. Come Monday morning, 'low-prep' is the only thing that survives contact with real life. You need resources that work in the chaos, not in theory."
  },
  {
    emoji: "🔬",
    headline: "STEAM sounds amazing in the brochure. Pulling it off is another story.",
    body: "Hands-on science is incredible — when someone else has already done the sourcing, sequencing, and simplifying. You've got the enthusiasm. You just need the done-for-you part."
  },
  {
    emoji: "🎢",
    headline: "You've bought the curriculum. Used it twice. And moved on.",
    body: "Buy it, try it, abandon it, repeat. You're not doing it wrong — the resources just weren't built for how your family actually learns. That changes here."
  },
  {
    emoji: "📅",
    headline: "December sneaks up on you every single year.",
    body: "The seasonal ideas hit your inbox in October. By the time December actually arrives, it's too late, too much, too loud. You deserve to be prepared before the chaos starts — not while you're already inside it."
  },
  {
    emoji: "🧪",
    headline: "Your teen can't just 'wing it' on the ACT.",
    body: "They've seen math problems before. They've read a passage before. So they assume they can figure it out on test day — just like my kid assumed he could drive us to the store without a single lesson. You don't wing it when something important is on the line."
  }
];

const offers = [
  {
    name: "Joie Scholar Pass",
    tagline: "Your all-access pass to joyful learning",
    color: TEAL,
    price: "$7/month",
    priceNote: "or $47/year — lock in for life",
    description: "One membership. Hundreds of done-for-you STEAM lessons, printables, cooking science, story-based units, and seasonal bundles — ready to download and use today.",
    includes: [
      "Full library of STEAM printables and bundles",
      "New resources added regularly",
      "Teenpreneurship & personal finance classes",
      "Story-based STEAM novels and units",
      "Ancient Civilizations STEAM challenges",
      "Seasonal bundles (no scrambling in December!)",
      "Access to live classes and office hours"
    ]
  },
  {
    name: "ACT Mastery Bootcamp",
    tagline: "10 weeks to test-day confidence",
    color: ORANGE,
    price: "$400",
    priceNote: "Founder's rate — limited spots",
    description: "The ACT is designed to trick even the smartest kids. This 10-week bootcamp teaches your teen exactly how to take the test — not just how to know the material.",
    includes: [
      "10 weeks of structured ACT prep",
      "Real strategies, not just practice tests",
      "Built for how homeschooled teens actually learn",
      "No gaps, no guessing, no winging it",
      "A real plan that leads to real results"
    ]
  }
];

const faqs = [
  {
    q: "Are the resources really low-prep?",
    a: "Yes — genuinely. Kelsi designs everything knowing that parents are already juggling a lot. Most resources are download-and-go. Some have a little setup, but the instructions are always clear and the payoff is worth it."
  },
  {
    q: "What age range is the Joie Scholar Pass for?",
    a: "Primarily middle and high school, with some content for elementary. If your kids are roughly ages 8–18, there's something in the library for them."
  },
  {
    q: "Do I need a science background to use these resources?",
    a: "Not at all. Kelsi has a master's in Medical Microbiology, so she's already done the hard part. The resources are written so any parent can facilitate them confidently."
  },
  {
    q: "We're not a homeschool family — can we still use these?",
    a: "Absolutely. Many Joie Lab families use the resources for after-school enrichment, summer learning, or just making Saturdays more interesting. Learning doesn't have to stop when the school bell does."
  },
  {
    q: "What if I join and it's not the right fit?",
    a: "Reach out to Kelsi directly. She'd rather help you find the right resource than have you feel stuck with something that doesn't serve your family."
  }
];

// ─── Components ────────────────────────────────────────────────

function NavBar() {
  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between max-w-5xl mx-auto">
      <img
        src={joielablogo}
        alt="The Joie Lab"
        className="h-14 w-auto object-contain"
      />
      <a
        href="#join"
        className="text-sm font-bold px-5 py-2 rounded-full text-white transition-opacity hover:opacity-90 shadow-sm"
        style={{ backgroundColor: PINK, fontFamily: "Nunito, sans-serif" }}
      >
        Join the Lab 🧪
      </a>
    </nav>
  );
}

function Hero() {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-10 pb-20 text-center">
      <div
        className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
        style={{ backgroundColor: YELLOW, color: TEXT_DARK, fontFamily: "Nunito, sans-serif" }}
      >
        ✨ STEAM Learning for Real Families
      </div>
      <h1
        className="text-4xl md:text-6xl font-bold leading-tight mb-6"
        style={{ color: PINK, fontFamily: "Fredoka One, cursive" }}
      >
        Make learning{" "}
        <span style={{ color: TEAL }}>joyful again.</span>
      </h1>
      <p
        className="text-lg md:text-xl max-w-2xl mx-auto mb-5 leading-relaxed"
        style={{ color: TEXT_DARK, fontFamily: "Nunito, sans-serif" }}
      >
        Picture this: your kids are actually excited about science. You didn't spend last night hunting for lesson ideas. And December didn't sneak up on you with nothing ready to go.
      </p>
      <p
        className="text-base max-w-xl mx-auto mb-10 leading-relaxed"
        style={{ color: TEXT_MID, fontFamily: "Nunito, sans-serif" }}
      >
        That's the Joie Lab. Done-for-you STEAM bundles, story-based units, and seasonal resources — low-prep, high-joy, and ready to download today.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a
          href="#join"
          className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg shadow-md transition-opacity hover:opacity-90"
          style={{ backgroundColor: PINK, fontFamily: "Nunito, sans-serif" }}
        >
          Join Joie Scholar Pass 🎉
        </a>
        <a
          href="#offers"
          className="text-sm font-semibold underline underline-offset-4"
          style={{ color: TEAL, fontFamily: "Nunito, sans-serif" }}
        >
          See all offers →
        </a>
      </div>
      <p className="text-xs mt-4" style={{ color: TEXT_MID, fontFamily: "Nunito, sans-serif" }}>
        Monthly membership from $7/month · Cancel anytime
      </p>
    </section>
  );
}

function PainPoints() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: BG_WHITE }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          style={{ color: TEXT_DARK, fontFamily: "Fredoka One, cursive" }}
        >
          Does this sound familiar?
        </h2>
        <p
          className="text-center text-lg mb-14 max-w-xl mx-auto"
          style={{ color: TEXT_MID, fontFamily: "Nunito, sans-serif" }}
        >
          You didn't sign up for this to spend your evenings wrestling with curriculum decisions. But here you are — toggling between 27 tabs and wondering where the joy went.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {painPoints.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 shadow-sm"
              style={{ border: "2px solid #FCE4F0", backgroundColor: BG_PINK }}
            >
              <div className="text-3xl mb-3">{p.emoji}</div>
              <h3
                className="font-bold text-base mb-2"
                style={{ color: TEXT_DARK, fontFamily: "Nunito, sans-serif" }}
              >
                {p.headline}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: TEXT_MID, fontFamily: "Nunito, sans-serif" }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Trust Builder 2 — Testimonial Card Component
function TestimonialCard({ summary, quote, name, business, image, bg, accentColor }) {
  return (
    <section className="py-10 px-6" style={{ backgroundColor: bg || BG_WHITE }}>
      <div className="max-w-2xl mx-auto">
        <div
          className="rounded-2xl p-7 shadow-sm"
          style={{ backgroundColor: BG_WHITE, border: `2px solid ${accentColor || "#FCE4F0"}` }}
        >
          <p
            className="font-bold text-base md:text-lg mb-4"
            style={{ color: accentColor || PINK, fontFamily: "Fredoka One, cursive" }}
          >
            "{summary}"
          </p>
          <p
            className="text-sm italic leading-relaxed mb-6"
            style={{ color: TEXT_MID, fontFamily: "Nunito, sans-serif" }}
          >
            "{quote}"
          </p>
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
              style={{ backgroundColor: accentColor || PINK }}
            >
              {name.charAt(0)}
            </div>
            <div>
              <p className="font-bold text-sm" style={{ color: TEXT_DARK, fontFamily: "Nunito, sans-serif" }}>{name}</p>
              {business && <p className="text-xs" style={{ color: TEXT_MID, fontFamily: "Nunito, sans-serif" }}>{business}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonial1() {
  return (
    <TestimonialCard
      summary="This course brought so much joy — and the confidence to make real income from it."
      quote="Oh, how thankful I am for this VIP Day! Before, I had no insight on what to do after college and it was very convincing being a part of this amazing course has brought so much clarity to what I'm capable of and how I can make medical income from the comfort of my own home. Thank you so much!"
      name="Mariah"
      accentColor={TEAL}
      bg={BG_PINK}
    />
  );
}

function Testimonial2() {
  return (
    <TestimonialCard
      summary="Exactly what she needed — she loved every project inside."
      quote="The kids absolutely loved the project! Can't wait to do more."
      name="Kim"
      accentColor={ORANGE}
      bg={BG_WHITE}
    />
  );
}

function Testimonial3() {
  // MOCK TESTIMONIAL — replace before launch
  return (
    <TestimonialCard
      summary="The first resource my daughter asked to do again the next day."
      quote="I'd been through so many curricula that looked great and sat untouched after the first week. The Joie Lab bundles are the first thing my daughter has actually asked to come back to. I didn't even have to suggest it. That alone is worth every penny."
      name="Sarah M."
      business="Homeschool mom of 3"
      accentColor={GREEN}
      bg={BG_PINK}
    />
  );
}

function CredibilityBridge() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: PINK }}>
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-shrink-0">
            <img
              src="https://madamambition.com/wp-content/uploads/2023/06/39-Kelsi-scaled.jpg"
              alt="Kelsi Taylor"
              className="w-40 h-40 rounded-full object-cover object-top shadow-lg"
              style={{ border: "4px solid white" }}
            />
          </div>
          <div>
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3 opacity-80"
              style={{ color: "white", fontFamily: "Nunito, sans-serif" }}
            >
              Hi, I'm Kelsi 👋
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-5 leading-snug"
              style={{ fontFamily: "Fredoka One, cursive" }}
            >
              Valedictorian. Turned down Harvard. Chose joy instead.
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "#FCE4F0", fontFamily: "Nunito, sans-serif" }}
            >
              I have a master's in Medical Microbiology. I spent years editing scientific publications and working in clinical research. And then I had a come-to-Jesus moment with myself — took out a piece of paper and asked, "Out of everything I've ever done, what did I actually love?" The answer changed everything.
            </p>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "#FCE4F0", fontFamily: "Nunito, sans-serif" }}
            >
              I homeschool my son. We've visited 28 states in 3 years, learning through real-world experiences wherever we land. I built The Joie Lab because I wanted other families to feel that same spark — curiosity, connection, and learning that doesn't feel like work.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "#FCE4F0", fontFamily: "Nunito, sans-serif" }}
            >
              Every resource in the Joie Lab is built by someone who actually knows the science — and knows what it's like to teach it to a kid who'd rather be doing something else.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustedBy() {
  const logos = [
    { src: joielablogo, alt: "The Joie Lab" },
    // PLACEHOLDER: Add more brand/partner logos here
  ];
  // Note: expand this section when Kelsi has additional partner logos
  return null; // Hidden until more logos are available
}

function OffersSection() {
  return (
    <section id="offers" className="py-20 px-6" style={{ backgroundColor: BG_WHITE }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          style={{ color: TEXT_DARK, fontFamily: "Fredoka One, cursive" }}
        >
          Ready to bring the joy back?
        </h2>
        <p
          className="text-center text-lg mb-14 max-w-2xl mx-auto"
          style={{ color: TEXT_MID, fontFamily: "Nunito, sans-serif" }}
        >
          Two ways to learn and launch with The Joie Lab.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offers.map((offer, i) => (
            <div
              key={i}
              className="rounded-2xl p-7 shadow-md flex flex-col"
              style={{ border: `3px solid ${offer.color}`, backgroundColor: BG_PINK }}
            >
              <div
                className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 self-start"
                style={{ backgroundColor: offer.color, color: "white", fontFamily: "Nunito, sans-serif" }}
              >
                {offer.tagline}
              </div>
              <h3
                className="text-2xl font-bold mb-2"
                style={{ color: offer.color, fontFamily: "Fredoka One, cursive" }}
              >
                {offer.name}
              </h3>
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: TEXT_MID, fontFamily: "Nunito, sans-serif" }}
              >
                {offer.description}
              </p>
              <ul className="space-y-2 mb-6 flex-1">
                {offer.includes.map((item, j) => (
                  <li key={j} className="flex gap-2 items-start text-sm" style={{ color: TEXT_DARK, fontFamily: "Nunito, sans-serif" }}>
                    <span style={{ color: offer.color }} className="flex-shrink-0 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <p
                  className="text-3xl font-bold mb-1"
                  style={{ color: offer.color, fontFamily: "Fredoka One, cursive" }}
                >
                  {offer.price}
                </p>
                <p className="text-xs mb-4" style={{ color: TEXT_MID, fontFamily: "Nunito, sans-serif" }}>
                  {offer.priceNote}
                </p>
                <a
                  href="#join"
                  className="inline-block w-full text-center text-white font-bold px-6 py-3 rounded-full text-sm transition-opacity hover:opacity-90"
                  style={{ backgroundColor: offer.color, fontFamily: "Nunito, sans-serif" }}
                >
                  Get Started →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Transformation() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: BG_PINK }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-14"
          style={{ color: TEXT_DARK, fontFamily: "Fredoka One, cursive" }}
        >
          Here's what changes.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl p-8" style={{ backgroundColor: "#FFF0F5", border: "2px solid #F5B8D4" }}>
            <p
              className="text-xs font-bold uppercase tracking-widest mb-6"
              style={{ color: "#C0706A", fontFamily: "Nunito, sans-serif" }}
            >
              ✕ Before The Joie Lab
            </p>
            {[
              "Scrolling for ideas at 11pm, still coming up empty",
              "Buying resources that collect digital dust after one use",
              "December sneaking up with nothing ready to go — again",
              "Kids tuned out, you running on fumes",
              "ACT prep = crossing your fingers and hoping for the best",
              "Learning feels like a battle you didn't sign up to fight"
            ].map((item, i) => (
              <div key={i} className="flex gap-3 mb-3">
                <span className="text-red-400 flex-shrink-0">✕</span>
                <p className="text-sm leading-relaxed" style={{ color: TEXT_MID, fontFamily: "Nunito, sans-serif" }}>{item}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl p-8" style={{ backgroundColor: "#F0FBF5", border: `2px solid ${GREEN}` }}>
            <p
              className="text-xs font-bold uppercase tracking-widest mb-6"
              style={{ color: GREEN, fontFamily: "Nunito, sans-serif" }}
            >
              ✓ With The Joie Lab
            </p>
            {[
              "Done-for-you lessons downloaded and ready before Monday",
              "Resources your kids ask to do again the next day",
              "Seasonal bundles already in your library before December hits",
              "Kids genuinely curious, you actually enjoying this again",
              "A real ACT plan — no gaps, no guessing, no winging it",
              "Learning feels like the adventure you always wanted it to be"
            ].map((item, i) => (
              <div key={i} className="flex gap-3 mb-3">
                <span className="flex-shrink-0" style={{ color: GREEN }}>✓</span>
                <p className="text-sm leading-relaxed font-medium" style={{ color: TEXT_DARK, fontFamily: "Nunito, sans-serif" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function JoinSection() {
  return (
    <section id="join" className="py-24 px-6" style={{ backgroundColor: TEAL }}>
      <div className="max-w-2xl mx-auto text-center">
        <p
          className="text-xs font-bold uppercase tracking-widest mb-4 opacity-75"
          style={{ color: "white", fontFamily: "Nunito, sans-serif" }}
        >
          Joie Scholar Pass
        </p>
        <h2
          className="text-4xl md:text-5xl font-bold text-white mb-4"
          style={{ fontFamily: "Fredoka One, cursive" }}
        >
          $7 / month
        </h2>
        <p
          className="text-lg mb-3 leading-relaxed"
          style={{ color: "#E0FAFA", fontFamily: "Nunito, sans-serif" }}
        >
          Or lock in $47/year — for the lifetime of your membership. Pay once, save now, and spend the year actually using it.
        </p>
        <p
          className="text-sm italic mb-10"
          style={{ color: "#B2EDED", fontFamily: "Nunito, sans-serif" }}
        >
          No more forgotten payments. No more "wait, was I supposed to renew?" Just one charge and a full library of resources ready when you are.
        </p>
        <a
          href="#"
          className="inline-block font-bold px-12 py-5 rounded-full text-lg shadow-lg transition-opacity hover:opacity-90"
          style={{ backgroundColor: PINK, color: "white", fontFamily: "Nunito, sans-serif" }}
        >
          Join Joie Scholar Pass 🎉
        </a>
        <p className="text-xs mt-5 opacity-60 text-white" style={{ fontFamily: "Nunito, sans-serif" }}>
          Cancel anytime · Instant access to the full library
        </p>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className="py-20 px-6" style={{ backgroundColor: BG_WHITE }}>
      <div className="max-w-3xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          style={{ color: TEXT_DARK, fontFamily: "Fredoka One, cursive" }}
        >
          Got questions? 💛
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden"
              style={{ border: `2px solid #FCE4F0` }}
            >
              <button
                className="w-full text-left px-6 py-5 flex justify-between items-center"
                style={{
                  backgroundColor: open === i ? BG_PINK : BG_WHITE,
                  fontFamily: "Nunito, sans-serif"
                }}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-bold text-sm md:text-base" style={{ color: TEXT_DARK }}>
                  {faq.q}
                </span>
                <span className="text-lg flex-shrink-0 ml-4" style={{ color: PINK }}>
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <div
                  className="px-6 pb-5 text-sm leading-relaxed"
                  style={{ color: TEXT_MID, backgroundColor: BG_PINK, fontFamily: "Nunito, sans-serif" }}
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
    <section className="py-20 px-6" style={{ backgroundColor: PINK }}>
      <div className="max-w-2xl mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-bold text-white mb-5 leading-snug"
          style={{ fontFamily: "Fredoka One, cursive" }}
        >
          Joy doesn't have to wait for a special occasion. 🧡
        </h2>
        <p
          className="text-lg mb-10 leading-relaxed"
          style={{ color: "#FCE4F0", fontFamily: "Nunito, sans-serif" }}
        >
          The resources are built. The library is ready. And somewhere in your house, there's a kid who would absolutely lose it over a STEAM waffle experiment on a Saturday morning. You deserve to be that parent — without the scramble.
        </p>
        <a
          href="#join"
          className="inline-block font-bold px-12 py-5 rounded-full text-lg shadow-lg transition-opacity hover:opacity-90"
          style={{ backgroundColor: BG_WHITE, color: PINK, fontFamily: "Nunito, sans-serif" }}
        >
          Let's make learning fun again 🎉
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 px-6" style={{ backgroundColor: BG_PINK }}>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={joielablogo} alt="The Joie Lab" className="h-10 w-auto" />
          <p className="text-sm" style={{ color: TEXT_MID, fontFamily: "Nunito, sans-serif" }}>
            © {new Date().getFullYear()} The Joie Lab · Kelsi Taylor
          </p>
        </div>
        <a
          href="https://arshtechguru.square.site"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs px-3 py-1 rounded-full transition-opacity hover:opacity-100 opacity-50"
          style={{ backgroundColor: "#E8E8E8", color: TEXT_MID, fontFamily: "Nunito, sans-serif" }}
        >
          ✦ Built by Arsh · Tech Concierge
        </a>
      </div>
    </footer>
  );
}

// ─── Page Assembly ─────────────────────────────────────────────
export default function TheJoieLab() {
  return (
    <div style={{ backgroundColor: BG_PINK }} className="min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800&display=swap');
      `}</style>
      <NavBar />
      <Hero />
      <PainPoints />
      <Testimonial1 />        {/* Trust Builder 2 — after Pain Points */}
      <CredibilityBridge />
      <OffersSection />
      <Testimonial2 />        {/* Trust Builder 2 — after Offers */}
      <Transformation />
      <Testimonial3 />        {/* Trust Builder 2 — MOCK, before CTA */}
      <JoinSection />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
