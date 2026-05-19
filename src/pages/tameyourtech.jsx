import { useState } from "react";
import sage from '../assets/sage.png'
import sage_logo from '../assets/logo-sage.png'
import kelsi from '../assets/kelsi.jpg'
import kelsi_logo from '../assets/logo-kelsi.png'


const painPoints = [
  {
    emoji: "⏳",
    headline: "You're losing hours you don't have.",
    body: "You carved out 4 hours today to work on your business. Somehow, three of them disappeared into a rabbit hole of error messages and platform comparisons."
  },
  {
    emoji: "😵‍💫",
    headline: "Googling it makes everything worse.",
    body: "You search the problem. You get 47 tabs of conflicting answers. Now you're more confused than when you started — and the afternoon is gone."
  },
  {
    emoji: "💸",
    headline: "You're paying for software you can't fully use.",
    body: "The platform promised it would all make sense. It didn't. Now you're half-using tools you're fully paying for, wondering if it's even worth it."
  },
  {
    emoji: "😤",
    headline: "Tech kills the joy of what you actually love.",
    body: "You love writing, connecting, creating. But every email you send first costs you an afternoon of technical headaches. The spark dims a little every time."
  },
  {
    emoji: "🚧",
    headline: "You're sitting on offers you haven't launched.",
    body: "Not because the idea isn't ready. Because the tech felt too daunting to set up — so you didn't. And the idea is still sitting there."
  },
  {
    emoji: "😬",
    headline: "One wrong click and everything breaks.",
    body: "CRMs. Automations. Email sequences. You've sent things to the wrong people. Accidentally triggered the whole workflow. Tech shouldn't feel this risky."
  }
];

const whatYouGet = [
  {
    title: "Platform Connection",
    desc: "Link one platform to another so your data flows exactly where it should — no more copying and pasting between tools."
  },
  {
    title: "Mini Automation",
    desc: "Create one short, focused automation (like lead capture → welcome email) so you save time instantly and consistently."
  },
  {
    title: "Short Web Page or Form Setup",
    desc: "Build or fix one page or form so it looks right, works right, and stops being the thing on your to-do list."
  },
  {
    title: "Email Analytics Checkup",
    desc: "Review one sequence to see what's working, what's not, and what to tweak — so your emails actually do their job."
  },
  {
    title: "Quick Tech Troubleshoot",
    desc: "Find and fix one specific problem that's been quietly slowing you down. Bring it. We'll handle it."
  }
];

const faqs = [
  {
    q: "What if I don't know what I need?",
    a: "That's actually the most common starting point. When you join, we'll have a quick conversation to figure out the right task for the month. You don't need to come in with a plan — that's what I'm here for."
  },
  {
    q: "How do we communicate?",
    a: "You'll have email and text support throughout the month, plus co-working access so we can work through things together when needed."
  },
  {
    q: "What platforms do you work with?",
    a: "Most platforms coaches and service providers use — including Kartra, GoHighLevel, Kajabi, ConvertKit, MailerLite, Squarespace, WordPress, Dubsado, ThriveCart, Stripe, Zapier, and more."
  },
  {
    q: "Is there a contract?",
    a: "No long-term contract. Tame Your Tech is month-to-month — stay as long as it's working for you."
  },
  {
    q: "What's the difference between this and Tech Whisperer?",
    a: "Tame Your Tech is one focused task per month — lightweight, simple, no overwhelm. Tech Whisperer is full ecosystem management: I'm in your business every month keeping everything running, proactively. If you're not sure which fits, start here."
  }
];

function NavBar() {
  return (
    <nav className="w-full px-6 py-5 flex items-center justify-between max-w-5xl mx-auto">
      <span
        className="font-['Playfair_Display'] text-xl font-bold"
        style={{ color: "#3D7267" }}
      >
        Arsh Agarwal
      </span>
      <a
        href="#join"
        className="text-sm font-semibold px-5 py-2 rounded-full text-white transition-opacity hover:opacity-90"
        style={{ backgroundColor: "#3D7267", fontFamily: "DM Sans, sans-serif" }}
      >
        Join Now — $150/mo
      </a>
    </nav>
  );
}

function Hero() {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-16 pb-20 text-center">
      <p
        className="text-sm font-semibold uppercase tracking-widest mb-4"
        style={{ color: "#3D7267", fontFamily: "DM Sans, sans-serif" }}
      >
        Introducing Tame Your Tech
      </p>
      <h1
        className="font-['Playfair_Display'] text-4xl md:text-6xl font-bold leading-tight mb-6"
        style={{ color: "#1C1C1C" }}
      >
        One tech task off your plate.
        <br />
        <span style={{ color: "#3D7267" }}>Every single month.</span>
      </h1>
      <p
        className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        style={{ color: "#6B6B6B", fontFamily: "DM Sans, sans-serif" }}
      >
        A lightweight monthly membership for copywriters, coaches, and service providers who are tired of tech eating the hours they should be spending on clients — and life.
      </p>
      <a
        href="#join"
        className="inline-block text-white font-semibold px-10 py-4 rounded-full text-lg shadow-md transition-opacity hover:opacity-90"
        style={{ backgroundColor: "#3D7267", fontFamily: "DM Sans, sans-serif" }}
      >
        Yes, I'm ready — Join for $150/mo
      </a>
      <p
        className="text-sm mt-4"
        style={{ color: "#6B6B6B", fontFamily: "DM Sans, sans-serif" }}
      >
        Month-to-month. No contracts. Cancel anytime.
      </p>
    </section>
  );
}

function TrustedBy() {
  const logos = [
    { src: "../assets/logo-allysha.jpg", alt: "Allysha Lavino" },
    { src: "../assets/logo-sage.png", alt: "Sage Polaris" },
    { src: "../assets/logo-tracy.jpg", alt: "Tracy Kay" },
    { src: "../assets/logo-mangla.jpg", alt: "Business in a Bag" },
    { src: "../assets/logo-katharine.jpg", alt: "Bilingual Roadmap" },
    { src: "../assets/logo-kirby.jpg", alt: "KA Consulting" },
    { src: "../assets/logo-kelsi.png", alt: "Joie Lab" }
  ];
  return (
    <section className="py-10 px-6" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-4xl mx-auto">
        <p
          className="text-center text-xs font-semibold uppercase tracking-widest mb-6"
          style={{ color: "#C4A882", fontFamily: "DM Sans, sans-serif" }}
        >
          Trusted By
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              className="h-8 md:h-10 w-auto object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SageSpotlight() {
  return (
    <section className="py-14 px-6" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-3xl mx-auto">
        {/* YouTube embed */}
        <div
          className="rounded-2xl overflow-hidden shadow-md mb-8"
          style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}
        >
          <iframe
            src="https://www.youtube.com/embed/g8FyNwzz9UU"
            title="Sage Polaris on Arsh Agarwal"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none"
            }}
          />
        </div>

        {/* Sage testimonial card */}
        <div
          className="rounded-2xl p-7 shadow-sm"
          style={{ backgroundColor: "#FDFAF7", border: "1px solid #E8DDD0" }}
        >
          <p
            className="font-[\'Playfair_Display\'] font-bold text-base md:text-lg mb-4"
            style={{ color: "#1C1C1C", fontFamily: "Playfair Display, serif" }}
          >
            "The go-to resource for tech and funnel issues — full stop."
          </p>
          <p
            className="text-sm italic leading-relaxed mb-6"
            style={{ color: "#6B6B6B", fontFamily: "DM Sans, sans-serif" }}
          >
            "If you have tech or funnel building issues, Arsh is a wonderful resource!"
          </p>
          <div className="flex items-center gap-4">
            <img
              src="../assets/sage.png"
              alt="Sage Polaris"
              className="w-14 h-14 rounded-full object-cover flex-shrink-0"
              style={{ border: "2px solid #E8DDD0" }}
            />
            <div>
              <p
                className="font-semibold text-sm"
                style={{ color: "#1C1C1C", fontFamily: "DM Sans, sans-serif" }}
              >
                Sage Polaris
              </p>
              <p
                className="text-xs"
                style={{ color: "#6B6B6B", fontFamily: "DM Sans, sans-serif" }}
              >
                Sage Polaris Universal
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PainPoints() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-center mb-4"
          style={{ color: "#1C1C1C" }}
        >
          Does this sound familiar?
        </h2>
        <p
          className="text-center text-lg mb-14 max-w-xl mx-auto"
          style={{ color: "#6B6B6B", fontFamily: "DM Sans, sans-serif" }}
        >
          Your business isn't complicated. The technology is.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {painPoints.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 shadow-sm border"
              style={{ borderColor: "#E8DDD0", backgroundColor: "#FDFAF7" }}
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
    <section className="py-20 px-6" style={{ backgroundColor: "#3D7267" }}>
      <div className="max-w-3xl mx-auto text-center">
        <p
          className="text-sm font-semibold uppercase tracking-widest mb-4 opacity-75"
          style={{ color: "#F5EDE0", fontFamily: "DM Sans, sans-serif" }}
        >
          Hi, I'm Arsh
        </p>
        <h2
          className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold mb-6 text-white leading-snug"
        >
          I speak fluent tech — so you don't have to.
        </h2>
        <p
          className="text-lg leading-relaxed mb-6"
          style={{ color: "#D6EDE8", fontFamily: "DM Sans, sans-serif" }}
        >
          I'm a tech consultant and web developer who works with coaches, copywriters, and service providers. I've spent years helping business owners get their platforms connected, their automations running, and their tech headaches resolved — without the corporate IT department vibes.
        </p>
        <p
          className="text-lg leading-relaxed"
          style={{ color: "#D6EDE8", fontFamily: "DM Sans, sans-serif" }}
        >
          Tame Your Tech exists because most of you don't need a full-time tech person. You need one focused task handled well, every month, by someone who actually understands your business — not just the software.
        </p>
      </div>
    </section>
  );
}

function OfferDetails() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: "#F5EDE0" }}>
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
          Pick one area. I'll handle it.
        </h2>
        <p
          className="text-center text-lg mb-14 max-w-2xl mx-auto"
          style={{ color: "#6B6B6B", fontFamily: "DM Sans, sans-serif" }}
        >
          Each month, you choose one task from the list below. No scope creep, no overwhelm. One thing, done well.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {whatYouGet.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 flex gap-4 shadow-sm"
              style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8DDD0" }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-white font-bold text-sm"
                style={{ backgroundColor: "#3D7267", fontFamily: "DM Sans, sans-serif" }}
              >
                {i + 1}
              </div>
              <div>
                <h3
                  className="font-semibold mb-1"
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
          {/* Bonus card */}
          <div
            className="rounded-2xl p-6 flex gap-4 shadow-sm md:col-span-2"
            style={{ backgroundColor: "#3D7267" }}
          >
            <div className="text-2xl flex-shrink-0">💬</div>
            <div>
              <h3
                className="font-semibold mb-1 text-white"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Email, Text & Co-Working Support
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#D6EDE8", fontFamily: "DM Sans, sans-serif" }}
              >
                Questions that come up mid-month? You're not on your own. Reach out by email or text, or hop on a co-working session so we can work through it together.
              </p>
            </div>
          </div>
        </div>

        {/* Positioning note */}
        <div
          className="rounded-2xl p-6 text-center max-w-xl mx-auto"
          style={{ backgroundColor: "#EDE4D6", border: "1px solid #C4A882" }}
        >
          <p
            className="text-sm font-medium"
            style={{ color: "#1C1C1C", fontFamily: "DM Sans, sans-serif" }}
          >
            💡 <strong>This is lightweight by design.</strong> One focused task per month. No rollover, no overwhelm. Just results.
          </p>
        </div>
      </div>
    </section>
  );
}

function Transformation() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-center mb-14"
          style={{ color: "#1C1C1C" }}
        >
          Here's what changes.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Before */}
          <div
            className="rounded-2xl p-8"
            style={{ backgroundColor: "#FFF5F5", border: "1px solid #F0D0D0" }}
          >
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-6"
              style={{ color: "#C0706A", fontFamily: "DM Sans, sans-serif" }}
            >
              Before Tame Your Tech
            </p>
            {[
              "Whole afternoons disappearing into tech rabbit holes",
              "Launching offers you love — later than you wanted, if at all",
              "Paying for platforms you can't fully figure out",
              "Losing your creative energy to setup and troubleshooting",
              "Feeling like you need a tech degree just to run your business"
            ].map((item, i) => (
              <div key={i} className="flex gap-3 mb-4">
                <span className="text-red-400 flex-shrink-0 mt-0.5">✕</span>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#6B6B6B", fontFamily: "DM Sans, sans-serif" }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
          {/* After */}
          <div
            className="rounded-2xl p-8"
            style={{ backgroundColor: "#F0F7F5", border: "1px solid #B8D9D2" }}
          >
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-6"
              style={{ color: "#3D7267", fontFamily: "DM Sans, sans-serif" }}
            >
              After Tame Your Tech
            </p>
            {[
              "One task handled every month — without touching your schedule",
              "Offers launched because the tech is no longer the obstacle",
              "Platforms actually doing what you're paying them to do",
              "Energy spent on clients and creativity, not configuration",
              "Someone in your corner who knows your business and handles the rest"
            ].map((item, i) => (
              <div key={i} className="flex gap-3 mb-4">
                <span style={{ color: "#3D7267" }} className="flex-shrink-0 mt-0.5">✓</span>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#1C1C1C", fontFamily: "DM Sans, sans-serif" }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ summary, quote, name, business, image, bg }) {
  return (
    <section className="py-10 px-6" style={{ backgroundColor: bg || "#FFFFFF" }}>
      <div className="max-w-2xl mx-auto">
        <div className="rounded-2xl p-7 shadow-sm" style={{ backgroundColor: "#FDFAF7", border: "1px solid #E8DDD0" }}>
          <p
            className="font-bold text-base md:text-lg mb-4"
            style={{ color: "#1C1C1C", fontFamily: "Playfair Display, serif" }}
          >
            "{summary}"
          </p>
          <p
            className="text-sm italic leading-relaxed mb-6"
            style={{ color: "#6B6B6B", fontFamily: "DM Sans, sans-serif" }}
          >
            "{quote}"
          </p>
          <div className="flex items-center gap-4">
            <img
              src={image}
              alt={name}
              className="w-12 h-12 rounded-full object-cover flex-shrink-0"
              style={{ border: "2px solid #E8DDD0" }}
            />
            <div>
              <p className="font-semibold text-sm" style={{ color: "#1C1C1C", fontFamily: "DM Sans, sans-serif" }}>{name}</p>
              <p className="text-xs" style={{ color: "#6B6B6B", fontFamily: "DM Sans, sans-serif" }}>{business}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Trust Builder 2 — Client Testimonial 1 (after Pain Points)
function Testimonial1() {
  return (
    <TestimonialCard
      summary="From a never-ending to-do list to a four-figure launch — and her weekends back."
      quote="Before we started, I just had a massive to do list that never actually ended. I felt like the tech was in my way. Now I'm so much more productive. Working with Arsh brought my weekends back with my family. I didn't have to hustle every day. I knew what emails worked really well. If I need a cash injection, I can use that. I went from random email marketing to launching strategically through email which gave me a four figure launch. Arsh gave me the confidence to put out more offers and use the tech to my advantage."
      name="Mangla Sachdev"
      business="Expat Business in a Bag"
      image="../assets/mangla.jpg"
      bg="#F5EDE0"
    />
  );
}

// Trust Builder 2 — Client Testimonial 2 (after Offer Details)
function Testimonial2() {
  return (
    <TestimonialCard
      summary="One message from Arsh turned a breakdown day into a breakthrough."
      quote="This was my one day dedicated to client work. I hit one wall after another. I had to call my mom for emotional support. I can't go into full breakdown. I've already done that. I can't solve this. You have set my day back on track."
      name="Allysha Lavino"
      business="Real Life Magic"
      image="../assets/allysha.jpg"
      bg="#FFFFFF"
    />
  );
}

// Trust Builder 2 — Client Testimonial 3 (after Transformation, before CTA)
function Testimonial3() {
  return (
    <TestimonialCard
      summary="From 1-2 clients a month to 30 new clients in 2 months."
      quote="For years, I had lots of ideas, but no clue how to execute tech tasks efficiently. I would add a tag, but it wouldn't work. I would spend 2 hours adding in automations, 30 minutes setting up an email, and then another 2 hours trying to figure out why the test didn't land in my inbox. Then came Arsh! And all of a sudden, my systems clicked, and I started seeing consistent sales. I went from a trickle of 1-2 clients per month to 30 new clients in 2 months. I was mind blown. Arsh is what tech support would look like if it came with a chai tea latte, a soothing voice and a plan that actually works."
      name="Kelsi Taylor"
      business="The Joie Lab"
      image="../assets/kelsi.jpg"
      bg="#F5EDE0"
    />
  );
}

function JoinSection() {
  return (
    <section id="join" className="py-24 px-6" style={{ backgroundColor: "#3D7267" }}>
      <div className="max-w-2xl mx-auto text-center">
        <p
          className="text-sm font-semibold uppercase tracking-widest mb-4 opacity-75"
          style={{ color: "#F5EDE0", fontFamily: "DM Sans, sans-serif" }}
        >
          Tame Your Tech Membership
        </p>
        <h2
          className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-white mb-4"
        >
          $150 / month
        </h2>
        <p
          className="text-lg mb-10"
          style={{ color: "#D6EDE8", fontFamily: "DM Sans, sans-serif" }}
        >
          One focused tech task handled every month. Email, text, and co-working support included. Month-to-month — no contracts.
        </p>
        <a
          href="#"
          className="inline-block font-semibold px-12 py-5 rounded-full text-lg shadow-lg transition-opacity hover:opacity-90"
          style={{
            backgroundColor: "#F5EDE0",
            color: "#3D7267",
            fontFamily: "DM Sans, sans-serif"
          }}
        >
          Join Tame Your Tech →
        </a>
        <p
          className="text-sm mt-5 opacity-60 text-white"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          Questions? Email arshtist@gmail.com
        </p>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className="py-20 px-6" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-3xl mx-auto">
        <h2
          className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-center mb-12"
          style={{ color: "#1C1C1C" }}
        >
          Questions? Answered.
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid #E8DDD0" }}
            >
              <button
                className="w-full text-left px-6 py-5 flex justify-between items-center"
                style={{ backgroundColor: open === i ? "#F5EDE0" : "#FDFAF7", fontFamily: "DM Sans, sans-serif" }}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span
                  className="font-semibold text-sm md:text-base"
                  style={{ color: "#1C1C1C" }}
                >
                  {faq.q}
                </span>
                <span
                  className="text-lg flex-shrink-0 ml-4"
                  style={{ color: "#3D7267" }}
                >
                  {open === i ? "−" : "+"}
                </span>
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

export default function TameYourTech() {
  return (
    <div style={{ backgroundColor: "#F5EDE0" }} className="min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@400;500;600&display=swap');
      `}</style>
      <NavBar />
      <Hero />
      <SageSpotlight />        {/* Trust Builder 1 — Prominent Figure */}
      <PainPoints />
      <Testimonial1 />         {/* Trust Builder 2 — Client #1, after Pain Points */}
      <CredibilityBridge />
      <TrustedBy />            {/* Trust Builder 3 — Logos, after About */}
      <OfferDetails />
      <Testimonial2 />         {/* Trust Builder 2 — Client #2, after Offer Details */}
      <Transformation />
      <Testimonial3 />         {/* Trust Builder 2 — Client #3, before CTA */}
      <JoinSection />
      <FAQ />
      <Footer />
    </div>
  );
}
