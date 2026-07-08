import React, { useState } from "react";
import arsh from '../assets/arsh-headshot.png'
import {
  MessageCircle,
  Sparkles,
  Layout,
  Link2,
  Heart,
  Users,
  ShieldCheck,
  Handshake,
  ArrowRight,
  Mail,
} from "lucide-react";

const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&family=DM+Sans:wght@400;500;600;700&display=swap');`;

const BOOKING_LINK = "https://tidycal.com/arshtist/tech-guru";

const PAIN_POINTS = [
  {
    emoji: "❌",
    text: "Missed out on moments with your family or clients because you got lost in the weeds of setting up your technology",
  },
  {
    emoji: "❌",
    text: "Spent so much time and energy troubleshooting your technology that you lost all of your creative energy",
  },
  {
    emoji: "💸",
    text: "Spent hundreds or thousands on a tech platform that promises a smooth ride — only to be disappointed by small but frustrating tech setup challenges",
  },
  {
    emoji: "🤝",
    text: "Missed out on creating higher tier offers that could create deeper relationships with your clients",
  },
  {
    emoji: "😵‍💫",
    text: 'Googled a tech problem, only to be overwhelmed by the "answers"',
  },
  {
    emoji: "😞",
    text: "So overwhelmed by the challenges of starting out that you didn't even bother to begin offering your services to clients you could help",
  },
];

const CALI = [
  {
    letter: "C",
    icon: <MessageCircle size={18} />,
    title: "Communications",
    copy: "Email analytics, tagging (Opens, Abandoned Cart, Unsubscribes).",
  },
  {
    letter: "A",
    icon: <Sparkles size={18} />,
    title: "Automations",
    copy: "Setting up sequences, troubleshooting, and unlocking the full potential of your platform.",
  },
  {
    letter: "L",
    icon: <Layout size={18} />,
    title: "Landing Pages",
    copy: "Implementing your sales pages, formatting your content, and making sure it looks pro.",
  },
  {
    letter: "I",
    icon: <Link2 size={18} />,
    title: "Integrations",
    copy: "Zapier, payment platforms, and making sure everything actually connects the way it should.",
  },
];

const HOW_IT_WORKS_STEPS = [
  "Understand your business goals and offers",
  "Chart out your existing sales funnels",
  "Navigate your current technology terrain",
  "Discover your current technology challenges",
  "Create your Tech Roadmap to personalize technology to your business",
];

const VALUES = [
  {
    icon: <Heart size={18} />,
    title: "Connection",
    copy: "I prioritize understanding you, your business, and your unique needs to enhance our collaboration and autonomy.",
  },
  {
    icon: <MessageCircle size={18} />,
    title: "Communication",
    copy: "Effective communication is the foundation of our partnership, essential for successful projects, especially under pressure.",
  },
  {
    icon: <ShieldCheck size={18} />,
    title: "Vulnerability",
    copy: "I create a safe space for open and honest communication, ensuring mutual respect and appreciation.",
  },
  {
    icon: <Handshake size={18} />,
    title: "Trust",
    copy: "Trust is continually nurtured through consistent performance and exceeding your expectations.",
  },
  {
    icon: <Users size={18} />,
    title: "Community",
    copy: "I promote a supportive and accountable environment within every team, fostering win-win-win outcomes.",
  },
];

const PLATFORMS = [
  "WordPress",
  "Kartra",
  "Zapier",
  "MailerLite"
];

const SERVICES = [
  "Implementing landing pages, launches and sales funnels",
  "CRM/Email management",
  "Email analytics",
  "Digitizing business processes",
  "Web integrations",
  "Troubleshooting",
  "Creating SOPs",
  "Calendar & administrative tasks",
  "Video editing",
  "Much, much more",
];

function BookCTA({ label = "BOOK FREE CALL", variant = "solid" }) {
  const isSolid = variant === "solid";
  return (
    <a
      href="#calendar1"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition-transform hover:scale-[1.02]"
      style={
        isSolid
          ? { background: "#3D7267", color: "#F5EDE0" }
          : { background: "#F5EDE0", color: "#22291F" }
      }
    >
      {label} <ArrowRight size={16} />
    </a>
  );
}

function BonusBanner() {
  return (
    <div
      className="max-w-2xl mx-auto rounded-full px-5 py-3 text-center text-sm font-medium mb-10"
      style={{ background: "rgba(196,168,130,0.18)", color: "#22291F" }}
    >
      Email campaigns not converting? Get my <strong>$497 FREE Inbox Rescue Email Analytics</strong> when
      you sign up!
    </div>
  );
}

export default function TechTransformationAudit() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#F5EDE0", color: "#22291F" }}>
      <style>{FONT_IMPORT}</style>

      {/* NAV */}
      <div className="w-full border-b" style={{ borderColor: "rgba(61,114,103,0.15)" }}>
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold"
              style={{ background: "#3D7267", color: "#F5EDE0" }}
            >
              A
            </div>
            <span className="text-sm tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
              Arsh Agarwal <span className="opacity-60">· Tech Concierge</span>
            </span>
          </div>
          <div className="hidden sm:block">
            <BookCTA label="Book Call" />
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-10 text-center">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "#3D7267" }}>
          Emerging &amp; Established Consultants, Copywriters &amp; Service Providers
        </p>
        <h1
          className="text-4xl sm:text-5xl leading-tight mb-5"
          style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
        >
          Jumpstart your backend funnel setup so it{" "}
          <span style={{ color: "#3D7267", fontStyle: "italic" }}>JUST WORKS</span>.
        </h1>
        <p className="text-base sm:text-lg opacity-80 max-w-xl mx-auto mb-4 leading-relaxed">
          Serve your clients with ease, increase sales, and enjoy time with your family while
          technology works smoothly in the background for YOU.
        </p>
        <p className="text-lg opacity-70 max-w-xl mx-auto mb-8 leading-relaxed">
          The Tech Transformation Audit is the <strong>first step</strong> to getting technology to work for your
          business goals.
        </p>

        <div
          className="inline-flex items-center gap-3 rounded-full px-6 py-3 mb-6"
          style={{ background: "#22291F", color: "#F5EDE0" }}
        >
          <span className="text-sm line-through opacity-50">$497</span>
          <span className="text-xl font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
            FREE
          </span>
          <span className="text-lg opacity-80">Tech Transformation Audit</span>
        </div>
        <div>
          <BookCTA />
        </div>
      </section>


      {/* TESTIMONIAL 1 */}
      <section className="px-6 pb-16">
        <div
          className="max-w-2xl mx-auto rounded-2xl p-8 text-center"
          style={{ background: "#22291F", color: "#F5EDE0" }}
        >
          <p
            className="text-xl leading-relaxed mb-5"
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
          >
            "Your tech assistance and email analytics gave me a 4 figure launch and the
            confidence to put out more offers!"
          </p>
          <p className="text-sm opacity-80 mb-6 leading-relaxed max-w-lg mx-auto">
            I went from random email marketing to launching strategically with email which gave
            me a four figure launch. Before, I felt like the tech was in my way. Now, I have the
            confidence to put out more offers and use the tech to my advantage.
          </p>
          <div className="flex items-center justify-center gap-3">
            <img
              src="https://framerusercontent.com/images/9Lm7rgi6si5JIQuaF2wpIMobQ.jpg"
              alt="Mangla Sachdev"
              className="w-10 h-10 rounded-full object-cover"
            />
            <p className="text-sm opacity-70">Mangla Sachdev</p>
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: "#3D7267" }}>
            I can work with
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {PLATFORMS.map((p, i) => (
              <span
                key={i}
                className="text-xs sm:text-sm px-3 py-1.5 rounded-full"
                style={{ background: "#FFFFFF", border: "1px solid rgba(61,114,103,0.2)" }}
              >
                {p}
              </span>
            ))}
          </div>
          <p className="text-sm opacity-60 mt-4">...and more</p>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <h2
          className="text-2xl sm:text-3xl text-center mb-2"
          style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
        >
          Tech was supposed to make your life easier, but you've…
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 mt-8">
          {PAIN_POINTS.map((p, i) => (
            <div
              key={i}
              className="rounded-xl p-6"
              style={{ background: "#FFFFFF", border: "1px solid rgba(61,114,103,0.15)" }}
            >
              <div className="text-2xl mb-3">{p.emoji}</div>
              <p className="text-sm opacity-75 leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BIO / HOW YOU CAN TAP IN */}
      <section className="px-6 pb-16">
        <div
          className="max-w-3xl mx-auto rounded-2xl p-8 sm:p-10"
          style={{ background: "#3D7267", color: "#F5EDE0" }}
        >
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            <img
              src={arsh}
              alt="Arsh Agarwal"
              className="w-20 h-20 rounded-full object-cover flex-shrink-0"
              style={{ border: "3px solid #F5EDE0" }}
            />
            <div>
              <h2
                className="text-2xl mb-3"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
              >
                How You Can Tap Into My Tech Trained Brain
              </h2>
              <p className="text-sm opacity-90 leading-relaxed mb-3">
                As a former IT project manager turned Tech OBM, I specialize in simplifying your
                tech woes and enhancing your brand. My mission is to help you focus on what you do
                best — serving your clients and expanding your services.
              </p>
              <p className="text-sm opacity-90 leading-relaxed">
                That means I digitize business processes, implement launches and sales funnels,
                and manage web development, email, CRM, automations, and integrations — it's all
                within reach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL 2 */}
      <section className="px-6 pb-16">
        <div
          className="max-w-2xl mx-auto rounded-2xl p-8 text-center"
          style={{ background: "#FFFFFF", border: "1px solid rgba(61,114,103,0.15)" }}
        >
          <p
            className="text-xl leading-relaxed mb-5"
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", color: "#3D7267" }}
          >
            "You have set my day back on track."
          </p>
          <p className="text-sm opacity-70 mb-6 leading-relaxed max-w-lg mx-auto">
            "This was one my one day dedicated to client work. I hit one wall after another. I
            had to call my mom for emotional support. I can't go into full breakdown. You have
            set my day back on track."
          </p>
          <div className="flex items-center justify-center gap-3">
            <img
              src="https://framerusercontent.com/images/QcyxIXApIQcIP7EOudPPMRRcHwk.jpg"
              alt="Allysha Lavino"
              className="w-10 h-10 rounded-full object-cover"
            />
            <p className="text-sm opacity-70">Allysha Lavino</p>
          </div>
        </div>
      </section>

      {/* MAIN OFFER */}
      <section id="calendar1" className="px-6 pb-16">
        <div
          className="mx-auto rounded-2xl p-10 text-center"
          style={{ background: "#22291F", color: "#F5EDE0" }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase opacity-70 mb-3">
            Free Tech Transformation Audit
          </p>
          <p className="text-3xl sm:text-4xl font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            (Value $497)
          </p>
          <p className="text-lg opacity-85 mb-7 mx-auto leading-relaxed">
            In this DONE-WITH-YOU no-cost 90-minute session, we'll meet over Zoom to comb through
            your current systems and automations, review your vision and business goals, and
            address your technology challenges. Then we'll map out how I will take this off your
            plate and implement it for you — so you can relax as you enjoy serving your clients
            and increasing your sales.
          </p>
          <iframe style={{ width: "95%", height: "65vh", margin: "0 auto"}} src={BOOKING_LINK}>

          </iframe>
          <p className="text-xs opacity-60 mt-5">
            You'll receive an email with instructions to prepare for the audit.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl text-center mb-8"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
          >
            How it works
          </h2>
          <p className="text-sm opacity-70 text-center mb-8 max-w-xl mx-auto">
            Simply sign up for the no-cost audit using the button above. You'll receive an email
            with instructions to prepare. On the call, we'll:
          </p>
          <div className="space-y-3 mb-10">
            {HOW_IT_WORKS_STEPS.map((step, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-xl p-4"
                style={{ background: "#FFFFFF", border: "1px solid rgba(61,114,103,0.15)" }}
              >
                <span
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold"
                  style={{ background: "#3D7267", color: "#F5EDE0" }}
                >
                  {i + 1}
                </span>
                <span className="text-sm">{step}</span>
              </div>
            ))}
          </div>
          <p className="text-sm opacity-70 text-center mb-10 max-w-xl mx-auto">
            If you like what I share and want to have me implement what we map out together,
            we'll set up another call to talk details and pricing.
          </p>

          <h3
            className="text-xl text-center mb-2"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
          >
            My signature CALI method
          </h3>
          <p className="text-sm opacity-70 text-center mb-8">
            I optimize your Tech Roadmap so every piece works together effortlessly.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {CALI.map((item, i) => (
              <div
                key={i}
                className="rounded-xl p-6"
                style={{ background: "#FFFFFF", border: "1px solid rgba(61,114,103,0.15)" }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center mb-4"
                  style={{ background: "#3D7267", color: "#F5EDE0" }}
                >
                  {item.icon}
                </div>
                <h4 className="font-semibold text-sm mb-2">
                  <span style={{ color: "#3D7267" }}>{item.letter} —</span> {item.title}
                </h4>
                <p className="text-sm opacity-70 leading-relaxed">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-2xl sm:text-3xl mb-8"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
          >
            This could be you…
          </h2>
          <p className="text-sm opacity-70 mb-8 max-w-xl mx-auto">
            She went from lead magnet idea to brand-aligned landing page + email within 15 hours.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: "From setting up hosting…" },
              { title: "…to setting up the website…" },
              { title: "…to setting up email, with consistent follow up throughout to support her" },
            ].map((step, i) => (
              <div
                key={i}
                className="rounded-xl p-6"
                style={{ background: "#FFFFFF", border: "1px solid rgba(61,114,103,0.15)" }}
              >
                <span
                  className="inline-flex w-7 h-7 rounded-full items-center justify-center text-xs font-semibold mb-3"
                  style={{ background: "#3D7267", color: "#F5EDE0" }}
                >
                  {i + 1}
                </span>
                <p className="text-sm opacity-75 leading-relaxed">{step.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl text-center mb-8"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
          >
            I can help you with
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {SERVICES.map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm"
                style={{ background: "#FFFFFF", border: "1px solid rgba(61,114,103,0.15)" }}
              >
                <span style={{ color: "#3D7267" }}>•</span>
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIENCE / AUTOPILOT */}
      <section className="px-6 pb-16">
        <div
          className="max-w-3xl mx-auto rounded-2xl p-8 sm:p-10 text-center"
          style={{ background: "rgba(196,168,130,0.15)", border: "1px solid rgba(196,168,130,0.35)" }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#8a6d3b" }}>
            For empathic and passionate women entrepreneurs
          </p>
          <h2
            className="text-2xl sm:text-3xl mb-5"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
          >
            Your technology can run on autopilot while you serve your clients, grow your income,
            and spend time with your family.
          </h2>
          <p className="text-sm opacity-75 leading-relaxed max-w-xl mx-auto mb-3">
            This call is the perfect first step to make your technology systems and workflows run
            seamlessly — especially if you don't know where or how to get started, or if you feel
            you might break everything with one click.
          </p>
          <p className="text-sm opacity-75 leading-relaxed max-w-xl mx-auto mb-3">
            Is this still for you if you feel confident with technology? Absolutely. I can help
            you confirm your tech strategy and shave hours off your to-do list so you can focus
            on your business and your family.
          </p>
          <p className="text-sm opacity-75 leading-relaxed max-w-xl mx-auto">
            Let's get your technology setup and workflows to where they should be — running on
            autopilot while you're serving your clients, increasing cashflow, and enjoying time
            with your family.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-2xl sm:text-3xl mb-3"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
          >
            My Values
          </h2>
          <p className="text-sm opacity-70 max-w-xl mx-auto mb-10 leading-relaxed">
            When we work together, I don't just do work for you. I appreciate that you've trusted
            me with a business that's deeply personal to you and close to your heart. That's why
            I work to maintain 5 values in our business relationship.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 text-left">
            {VALUES.map((v, i) => (
              <div
                key={i}
                className="rounded-xl p-6"
                style={{ background: "#FFFFFF", border: "1px solid rgba(61,114,103,0.15)" }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center mb-4"
                  style={{ background: "#3D7267", color: "#F5EDE0" }}
                >
                  {v.icon}
                </div>
                <h3 className="font-semibold text-sm mb-2">{v.title}</h3>
                <p className="text-sm opacity-70 leading-relaxed">{v.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-16">
        <div
          className=" mx-auto rounded-2xl p-10 text-center"
          style={{ background: "#3D7267", color: "#F5EDE0" }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase opacity-80 mb-3">
            Free Tech Transformation Audit
          </p>
          <p className="text-4xl font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            $497 value, FREE
          </p>
          <p className="text-sm opacity-85 mb-7 max-w-md mx-auto">
            90 minutes to map your tech roadmap — no cost, no obligation.
          </p>
          <iframe style={{ width: "95%", height: "65vh", margin: "0 auto"}} src={BOOKING_LINK}>

          </iframe>
          
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-8" style={{ background: "#22291F", color: "#F5EDE0" }}>
        <div className="max-w-4xl mx-auto text-center text-xs opacity-60">
          <p
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "14px", opacity: 0.9, marginBottom: "10px" }}
          >
            Arsh Agarwal · Tech Concierge
          </p>
          <div className="flex items-center justify-center gap-4 mb-3">
            <Mail size={16} />
          </div>
          <p>arshtist@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}
