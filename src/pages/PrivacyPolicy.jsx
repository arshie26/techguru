import NavBar from "../components/NavBar";

// PrivacyPolicy.jsx
const CREAM   = "#F5EDE0";
const TAN     = "#C4A882";

const EFFECTIVE_DATE = "June 12, 2026";

function Privacy() {
  return (
    <div style={{ backgroundColor: CREAM, minHeight: "100vh", fontFamily: "DM Sans, sans-serif", padding: "80px 24px" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", color: TAN, marginBottom: 8 }}>
          Privacy Policy
        </h1>
        <p style={{ color: "#888", fontSize: 14, marginBottom: 40 }}>Effective Date: {EFFECTIVE_DATE}</p>

        <div style={{ color: "#444", fontSize: 15, lineHeight: 1.8 }}>

          <p>Arsh Agarwal Tech Guru ("we," "us," or "our") operates techconcierge.vercel.app (the "Site"). This Privacy Policy explains how we collect, use, and protect information when you visit the Site, submit a form, or make a purchase.</p>

          <h2 style={sectionStyle}>1. Information We Collect</h2>
          <p>We may collect the following information:</p>
          <ul style={listStyle}>
            <li><strong>Contact information</strong> you provide through forms (name, email address, phone number, business details, and any message content).</li>
            <li><strong>Payment information</strong> processed through Stripe when you purchase a service or product. We do not directly collect or store credit card numbers — these are handled entirely by Stripe.</li>
            <li><strong>Usage data</strong> such as pages visited, browser type, and general analytics information collected automatically through standard website analytics tools.</li>
          </ul>

          <h2 style={sectionStyle}>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul style={listStyle}>
            <li>Respond to inquiries and provide requested services</li>
            <li>Process payments and deliver purchased products or services</li>
            <li>Send confirmations, scheduling details, or follow-up communications related to your purchase or inquiry</li>
            <li>Send occasional emails about our services, if you've opted in (you can unsubscribe at any time)</li>
            <li>Improve the Site and our offerings</li>
          </ul>

          <h2 style={sectionStyle}>3. Third-Party Services</h2>
          <p>We use trusted third-party services to operate the Site and deliver our services, including:</p>
          <ul style={listStyle}>
            <li><strong>Stripe</strong> for payment processing. Stripe's use of your information is governed by Stripe's own privacy policy.</li>
            <li><strong>Email and scheduling tools</strong> (such as email marketing platforms or booking software) to communicate with you and manage appointments.</li>
            <li><strong>Hosting and analytics providers</strong> (such as Vercel and standard analytics tools) to host the Site and understand site usage.</li>
          </ul>
          <p>We do not sell your personal information to third parties.</p>

          <h2 style={sectionStyle}>4. Data Retention</h2>
          <p>We retain your information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements.</p>

          <h2 style={sectionStyle}>5. Your Rights</h2>
          <p>You may request access to, correction of, or deletion of your personal information by contacting us at the email below. We will respond to reasonable requests within a reasonable timeframe.</p>

          <h2 style={sectionStyle}>6. Cookies</h2>
          <p>The Site may use cookies or similar technologies for basic functionality and analytics. You can disable cookies through your browser settings, though some features of the Site may not function properly as a result.</p>

          <h2 style={sectionStyle}>7. Children's Privacy</h2>
          <p>The Site is not directed at individuals under the age of 16, and we do not knowingly collect personal information from children.</p>

          <h2 style={sectionStyle}>8. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.</p>

          <h2 style={sectionStyle}>9. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, contact us at:</p>
          <p><strong>Arsh Agarwal Tech Guru</strong><br />Email: arshtist@gmail.com, techguru@arshagarwal.com</p>

        </div>
      </div>
    </div>
  );
}

const sectionStyle = {
  fontFamily: "Playfair Display, serif",
  fontSize: 20,
  fontWeight: 700,
  color: TAN,
  marginTop: 32,
  marginBottom: 8,
};

const listStyle = {
  paddingLeft: 22,
  marginBottom: 16,
};

export default function PrivacyPolicy(){
  return (
    <div>
      <NavBar />
      <Privacy />
    </div>
  )
}