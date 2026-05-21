import { useState } from "react";
import arsh_headshot from '../assets/arsh-headshot.png'
import { Link } from 'react-router-dom'

// ─── Brand Colors ─────────────────────────────────────────────
const TEAL    = "#3D7267";
const CREAM   = "#F5EDE0";
const TAN     = "#C4A882";
const DARK    = "#1C1C1C";
const MID     = "#555555";
const WHITE   = "#FFFFFF";
const TEAL_LT = "#EAF2F0";

const topics = [
  {
    tag: "Workshop",
    title: "Sales Page Build Sprint",
    subtitle: "Your copy is ready. Now let's get it live — built, connected, and actually working.",
    body: "You've got the offer. You've got the words. But the page still isn't up — because the tech keeps getting in the way. In this hands-on workshop, Arsh walks your audience through the technical build of a sales page from scratch: how to set up the page in their platform, connect it to their payment processor, and make sure every button, form, and link actually works. No copywriting. No conversion strategy. Just the build — done right.",
    outcomes: [
      "How to set up a sales page in Kartra, Wordpress, GoHighLevel, Zapier and other platforms",
      "How to connect your page to your payment processor (Stripe, ThriveCart, PayPal)",
      "How to test every element before you launch so nothing breaks on launch day",
      "The tech checklist that catches the errors most people only find after going live"
    ],
    color: TEAL,
    emoji: "⚡"
  },
  {
    tag: "Workshop",
    title: "Tripwire Setup Bootcamp",
    subtitle: "You have the offer. Here's how to build the automation that delivers it automatically.",
    body: "A tripwire is a low-ticket offer that fires right after someone opts in. Great idea — but the tech setup is where most people get stuck and give up. In this workshop, Arsh shows exactly how to build the technical pieces: the thank-you page redirect, the order form, the delivery automation, and the confirmation email — so the whole thing runs without you touching it.",
    outcomes: [
      "How to set up the tripwire order form and thank-you page in your platform",
      "How to build the delivery automation in Kartra, Wordpress, GoHighLevel, Zapier and other platforms",
      "How to connect opt-in → tripwire offer → delivery in one seamless flow",
      "How to test it end-to-end so you know it fires correctly before you go live"
    ],
    color: "#8B6E50",
    emoji: "🎯"
  }
];

const testimonials = [
  {
    summary: "If you have tech or funnel building issues, Arsh is a wonderful resource!",
    quote: "",
    name: "Sage Polaris",
    title: "Copywriting Coach & Launch Strategist",
    image: "../assets/sage.png",
    logo: "../assets/logo-sage.png"
  },
  {
    summary: "From 1–2 leads a month to 30 new leads in 2 months.",
    quote: "My systems clicked and I started seeing consistent sales. I went from a trickle of 1–2 clients per month to 30 new clients in 2 months. Arsh is what tech support would look like if it came with a chai tea latte, a soothing voice and a plan that actually works.",
    name: "Kelsi Taylor",
    title: "STEAM Educator & Course Creator",
    image: "../assets/kelsi.png",
    logo: "../assets/logo-joielab.png"
  },
  {
    summary: "Four-figure launch and her weekends back.",
    quote: "I went from random email marketing to launching strategically through email which gave me a four figure launch. Arsh gave me the confidence to put out more offers and use the tech to my advantage.",
    name: "Mangla Sachdev",
    title: "Business Coach",
    image: "../assets/mangla.png",
    logo: "../assets/logo-businessinabag.png"
  }
];

const collabs = [
  { name: "Sage Polaris", note: "Copywriting coach to 615+ clients earning millions" },
  { name: "Kelsi Taylor / The Joie Lab", note: "STEAM education platform, 30 new clients in 2 months" },
  { name: "Mangla Sachdev / Expat Business in a Bag", note: "4-figure launch through strategic email" },
  { name: "Allysha Lavino / Real Life Magic", note: "Business & mindset coaching" },
  { name: "Intergalactic Education", note: "EdTech — built responsive user portal on AWS" },
  { name: "VersaAgency", note: "Led 6 web development projects as Project Manager" }
];

// ─── Components ───────────────────────────────────────────────

function Nav() {
  return (
    <nav style={{ backgroundColor: DARK }} className="w-full px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      <Link to="/" className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
          style={{ backgroundColor: TEAL, color: WHITE, fontFamily: "DM Sans, sans-serif" }}>A</div>
        <span className="font-semibold text-sm" style={{ color: WHITE, fontFamily: "DM Sans, sans-serif" }}>
          Arsh Agarwal · Tech Concierge
        </span>
      </Link>
      <a href="#book"
        className="text-xs font-bold px-4 py-2 rounded-full transition-opacity hover:opacity-90"
        style={{ backgroundColor: TEAL, color: WHITE, fontFamily: "DM Sans, sans-serif" }}>
        Book Arsh →
      </a>
    </nav>
  );
}

function Hero() {
  return (
    <section style={{ backgroundColor: DARK }} className="px-6 pt-20 pb-24">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
              style={{ backgroundColor: TEAL_LT, color: TEAL, fontFamily: "DM Sans, sans-serif" }}>
              Speaker · Workshop Host · Tech Concierge
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6"
              style={{ color: WHITE, fontFamily: "Playfair Display, serif" }}>
              Arsh Agarwal
            </h1>
            <p className="text-lg leading-relaxed mb-4"
              style={{ color: TAN, fontFamily: "DM Sans, sans-serif" }}>
              The tech expert your audience has been waiting for — warm, non-technical, and completely practical.
            </p>
            <p className="text-base leading-relaxed mb-8"
              style={{ color: "#999", fontFamily: "DM Sans, sans-serif" }}>
              Arsh helps coaches, copywriters, and service providers get their tech actually working — pages built and connected, tripwires firing, emails landing in inboxes. He's not a copywriter or conversion strategist. He's the person who takes what you've already created and makes it work technically, live, in front of your audience.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#topics"
                className="font-semibold px-6 py-3 rounded-full text-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: TEAL, color: WHITE, fontFamily: "DM Sans, sans-serif" }}>
                See Workshop Topics
              </a>
              <a href="#book"
                className="font-semibold px-6 py-3 rounded-full text-sm border transition-opacity hover:opacity-80"
                style={{ borderColor: TAN, color: TAN, fontFamily: "DM Sans, sans-serif" }}>
                Book for Your Community
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-2xl"
                style={{ border: `3px solid ${TEAL}` }}>
                <img
                  src={arsh_headshot}
                  alt="Arsh Agarwal"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.style.backgroundColor = TEAL;
                    e.target.parentElement.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:white;font-size:4rem;">A</div>';
                  }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl shadow-lg"
                style={{ backgroundColor: TEAL, fontFamily: "DM Sans, sans-serif" }}>
                <p className="text-white text-xs font-bold">UMD Computer Science</p>
                <p className="text-white text-xs opacity-75">B.S. · Class of 2017</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SageBar() {
  return (
    <section style={{ backgroundColor: TEAL }} className="py-8 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg font-medium italic" style={{ color: WHITE, fontFamily: "Playfair Display, serif" }}>
          "If you have tech or funnel building issues, Arsh is a wonderful resource!"
        </p>
        <p className="text-sm mt-2 opacity-80" style={{ color: WHITE, fontFamily: "DM Sans, sans-serif" }}>
          — Sage Polaris, Copywriting Coach & Launch Strategist for the Internet Famous
        </p>
      </div>
    </section>
  );
}

function Bio() {
  return (
    <section style={{ backgroundColor: CREAM }} className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: TEAL, fontFamily: "DM Sans, sans-serif" }}>About Arsh</p>
            <h2 className="text-3xl font-bold mb-6"
              style={{ color: DARK, fontFamily: "Playfair Display, serif" }}>
              Tech support — if it came with a plan that actually works.
            </h2>
            <div className="space-y-4">
              <p className="text-base leading-relaxed"
                style={{ color: MID, fontFamily: "DM Sans, sans-serif" }}>
                Arsh Agarwal is a tech concierge and web developer who helps coaches, copywriters, and service providers get their platforms working together — so they can stop losing sales to broken checkouts, emails in spam, and funnels that never actually fire.
              </p>
              <p className="text-base leading-relaxed"
                style={{ color: MID, fontFamily: "DM Sans, sans-serif" }}>
                He holds a B.S. in Computer Science from the University of Maryland and spent several years in corporate IT before leaving to serve entrepreneurs directly. He builds and connects the technical pieces that keep businesses running: sales pages set up in Kartra, Wordpress, GoHighLevel, and more; payment processors connected and tested; tripwires firing; automations working; DNS records configured correctly so emails actually land in inboxes.
              </p>
              <p className="text-base leading-relaxed"
                style={{ color: MID, fontFamily: "DM Sans, sans-serif" }}>
                What makes Arsh different: he doesn't teach theory — he builds live, in front of the room. He's not there to explain why your page isn't converting. He's there to show you how to get it live, connected, and working correctly. Audiences leave with something done, not just something to do later. Audiences feel heard, understood and relieved.
              </p>
            </div>

            <div className="mt-8 pt-8" style={{ borderTop: `1px solid #E8DDD0` }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: TAN, fontFamily: "DM Sans, sans-serif" }}>Short Bio (for event listings)</p>
              <p className="text-sm leading-relaxed italic p-4 rounded-xl"
                style={{ color: MID, backgroundColor: WHITE, border: "1px solid #E8DDD0", fontFamily: "DM Sans, sans-serif" }}>
                Arsh Agarwal is a tech concierge and web developer who builds and connects the technical infrastructure coaches and service providers need to run their business — sales pages, tripwires, payment connections, automations, and email deliverability. He doesn't write your copy or tell you why your page isn't converting. He takes what you already have and makes it work. His clients have described her as the person who shows up, figures it out, and gets it done — without the jargon, the overwhelm, or the 3-day support ticket wait.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl p-5" style={{ backgroundColor: WHITE, border: "1px solid #E8DDD0" }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: TEAL, fontFamily: "DM Sans, sans-serif" }}>Formats Available</p>
              {["Live Zoom Workshop", "Pre-Recorded / Async", "In-Community (Slack, Circle, FB)", "In-Person (US)"].map((f, i) => (
                <div key={i} className="flex items-center gap-2 mb-2">
                  <span style={{ color: TEAL }}>✓</span>
                  <span className="text-sm" style={{ color: MID, fontFamily: "DM Sans, sans-serif" }}>{f}</span>
                </div>
              ))}
            </div>
            <div className="rounded-2xl p-5" style={{ backgroundColor: WHITE, border: "1px solid #E8DDD0" }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: TEAL, fontFamily: "DM Sans, sans-serif" }}>Best For</p>
              {[
                "Coaches & consultants",
                "Copywriters",
                "Service providers",
                "At $5k–$10k+/month",
                "US-based audiences"
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-2 mb-2">
                  <span style={{ color: TAN }}>→</span>
                  <span className="text-sm" style={{ color: MID, fontFamily: "DM Sans, sans-serif" }}>{f}</span>
                </div>
              ))}
            </div>
            <div className="rounded-2xl p-5" style={{ backgroundColor: TEAL }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-2 opacity-75"
                style={{ color: WHITE, fontFamily: "DM Sans, sans-serif" }}>Arsh's Ask</p>
              <p className="text-sm leading-relaxed"
                style={{ color: WHITE, fontFamily: "DM Sans, sans-serif" }}>
                Free to your community. Arsh shares his offer at the end — but the workshop stands fully on its own.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Topics() {
  const [open, setOpen] = useState(null);
  return (
    <section id="topics" style={{ backgroundColor: WHITE }} className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest mb-4 text-center"
          style={{ color: TEAL, fontFamily: "DM Sans, sans-serif" }}>Workshop Topics</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4"
          style={{ color: DARK, fontFamily: "Playfair Display, serif" }}>
          Blockbuster topics your audience needs.
        </h2>
        <p className="text-center mb-14 max-w-xl mx-auto text-base"
          style={{ color: MID, fontFamily: "DM Sans, sans-serif" }}>
          All topics are available as live workshops, pre-recorded sessions, or custom formats. Arsh is also open to building a custom topic around your audience's specific tech challenges.
        </p>
        <div className="space-y-4">
          {topics.map((t, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-sm cursor-pointer"
              style={{ border: `2px solid ${open === i ? t.color : "#E8DDD0"}` }}
              onClick={() => setOpen(open === i ? null : i)}>
              <div className="px-6 py-5 flex items-center justify-between"
                style={{ backgroundColor: open === i ? `${t.color}10` : WHITE }}>
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{t.emoji}</span>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: `${t.color}20`, color: t.color, fontFamily: "DM Sans, sans-serif" }}>
                        {t.tag}
                      </span>
                    </div>
                    <h3 className="font-bold text-base md:text-lg"
                      style={{ color: DARK, fontFamily: "Playfair Display, serif" }}>{t.title}</h3>
                    <p className="text-sm mt-0.5"
                      style={{ color: MID, fontFamily: "DM Sans, sans-serif" }}>{t.subtitle}</p>
                  </div>
                </div>
                <span className="text-xl flex-shrink-0 ml-4" style={{ color: t.color }}>
                  {open === i ? "−" : "+"}
                </span>
              </div>
              {open === i && (
                <div className="px-6 pb-6" style={{ backgroundColor: `${t.color}08` }}>
                  <p className="text-sm leading-relaxed mb-5 pt-2"
                    style={{ color: MID, fontFamily: "DM Sans, sans-serif" }}>{t.body}</p>
                  <p className="text-xs font-bold uppercase tracking-widest mb-3"
                    style={{ color: t.color, fontFamily: "DM Sans, sans-serif" }}>Audience Takeaways</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {t.outcomes.map((o, j) => (
                      <div key={j} className="flex gap-2 items-start">
                        <span className="flex-shrink-0 mt-0.5 font-bold" style={{ color: t.color }}>✓</span>
                        <span className="text-sm" style={{ color: MID, fontFamily: "DM Sans, sans-serif" }}>{o}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section style={{ backgroundColor: CREAM }} className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest mb-4 text-center"
          style={{ color: TEAL, fontFamily: "DM Sans, sans-serif" }}>What Clients Say</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14"
          style={{ color: DARK, fontFamily: "Playfair Display, serif" }}>
          Real results. Real businesses.
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-2xl p-7 shadow-sm"
              style={{ backgroundColor: WHITE, border: "1px solid #E8DDD0" }}>
              <p className="font-bold text-base md:text-lg mb-4"
                style={{ color: DARK, fontFamily: "Playfair Display, serif" }}>
                "{t.summary}"
              </p>
              <p className="text-sm italic leading-relaxed mb-6"
                style={{ color: MID, fontFamily: "DM Sans, sans-serif" }}>
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name}
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  style={{ border: `2px solid #E8DDD0` }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<div style="width:48px;height:48px;border-radius:50%;background:${TEAL};display:flex;align-items:center;justify-content:center;color:white;font-weight:bold;flex-shrink:0">${t.name[0]}</div>` + e.target.parentElement.innerHTML;
                  }}
                />
                <div>
                  <p className="font-bold text-sm" style={{ color: DARK, fontFamily: "DM Sans, sans-serif" }}>{t.name}</p>
                  <p className="text-xs" style={{ color: MID, fontFamily: "DM Sans, sans-serif" }}>{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Collabs() {
  return (
    <section style={{ backgroundColor: DARK }} className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest mb-8 text-center opacity-60"
          style={{ color: WHITE, fontFamily: "DM Sans, sans-serif" }}>
          Past Clients + Collaborators
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {collabs.map((c, i) => (
            <div key={i} className="flex gap-3 items-start rounded-xl px-4 py-3"
              style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
              <span style={{ color: TEAL }} className="flex-shrink-0 mt-0.5 font-bold">→</span>
              <div>
                <p className="font-semibold text-sm" style={{ color: WHITE, fontFamily: "DM Sans, sans-serif" }}>{c.name}</p>
                <p className="text-xs opacity-60" style={{ color: WHITE, fontFamily: "DM Sans, sans-serif" }}>{c.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookSection() {
  return (
    <section id="book" style={{ backgroundColor: TEAL }} className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xs font-bold uppercase tracking-widest mb-4 opacity-75"
          style={{ color: WHITE, fontFamily: "DM Sans, sans-serif" }}>
          Book Arsh for Your Community
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: "Playfair Display, serif" }}>
          Free, high-value tech workshop — for your audience.
        </h2>
        <p className="text-lg mb-4 leading-relaxed"
          style={{ color: "#D6EDE8", fontFamily: "DM Sans, sans-serif" }}>
          Arsh offers workshops free to your community in exchange for the opportunity to share his offer at the end. No cost to you. No prep required. Your audience walks away having actually built or fixed something — not just with notes to act on later.
        </p>
        <p className="text-sm italic mb-10"
          style={{ color: "#A8D4CC", fontFamily: "DM Sans, sans-serif" }}>
          Available for podcasts, memberships, masterminds, Slack communities, Facebook groups, and in-person events.
        </p>
        <a href="mailto:arshtist@gmail.com?subject=Workshop Inquiry"
          className="inline-block font-bold px-12 py-5 rounded-full text-lg shadow-lg transition-opacity hover:opacity-90"
          style={{ backgroundColor: WHITE, color: TEAL, fontFamily: "DM Sans, sans-serif" }}>
          Email Arsh to Book →
        </a>
        <p className="text-xs mt-5 opacity-50 text-white"
          style={{ fontFamily: "DM Sans, sans-serif" }}>
          arshtist@gmail.com · https://techconcierge.vercel.app/
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 px-6" style={{ backgroundColor: DARK }}>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm" style={{ color: "#666", fontFamily: "DM Sans, sans-serif" }}>
          © {new Date().getFullYear()} Arsh Agarwal · Tech Concierge
        </p>
        <div className="flex gap-6">
          <a href="https://arshtechguru.square.site" target="_blank" rel="noopener noreferrer"
            className="text-xs hover:opacity-100 opacity-50 transition-opacity"
            style={{ color: WHITE, fontFamily: "DM Sans, sans-serif" }}>
            https://techconcierge.vercel.app/
          </a>
          <a href="mailto:arshtist@gmail.com"
            className="text-xs hover:opacity-100 opacity-50 transition-opacity"
            style={{ color: WHITE, fontFamily: "DM Sans, sans-serif" }}>
            arshtist@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function SpeakerPage() {
  return (
    <div className="min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@400;500;600;700&display=swap');
      `}</style>
      <Nav />
      <Hero />
      <SageBar />
      <Bio />
      <Topics />
      <Testimonials />
      <Collabs />
      <BookSection />
      <Footer />
    </div>
  );
}
