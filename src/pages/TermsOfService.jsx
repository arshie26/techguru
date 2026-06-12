import NavBar from "../components/NavBar";

// TermsOfService.jsx
const CREAM   = "#F5EDE0";
const TAN     = "#C4A882";

const EFFECTIVE_DATE = "June 12, 2026";

function Terms() {
  return (
    <div style={{ backgroundColor: CREAM, minHeight: "100vh", fontFamily: "DM Sans, sans-serif", padding: "80px 24px" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", color: TAN, marginBottom: 8 }}>
          Terms of Service
        </h1>
        <p style={{ color: "#888", fontSize: 14, marginBottom: 40 }}>Effective Date: {EFFECTIVE_DATE}</p>

        <div style={{ color: "#444", fontSize: 15, lineHeight: 1.8 }}>

          <p>These Terms of Service ("Terms") govern your use of techconcierge.vercel.app (the "Site") and any services, products, or content offered by Tech Guru ("we," "us," or "our"). By using the Site or purchasing any service, you agree to these Terms.</p>

          <h2 style={sectionStyle}>1. Services</h2>
          <p>We provide web development, automation, and technology consulting services, including but not limited to website builds, automation setup, audits, and ongoing technical support packages ("Services"). Specific scope, deliverables, and timelines for any Service will be communicated separately, such as via email, proposal, or order confirmation.</p>

          <h2 style={sectionStyle}>2. Payments</h2>
          <p>Payments for Services are processed through Stripe. By making a purchase, you agree to provide accurate billing information and authorize us to charge the applicable fees. All fees are listed in U.S. dollars unless otherwise stated.</p>

          <h2 style={sectionStyle}>3. Refunds and Cancellations</h2>
          <p>Unless otherwise stated at the time of purchase, digital products (such as audits, templates, or guides) are non-refundable once delivered. Subscription-based Services (such as monthly retainers) may be cancelled at any time, with cancellation effective at the end of the current billing period unless otherwise agreed in writing. Custom project work (such as website builds) is governed by the payment and refund terms outlined in the applicable project agreement or invoice.</p>

          <h2 style={sectionStyle}>4. Client Responsibilities</h2>
          <p>To deliver Services effectively, we may require timely access to accounts, platforms, content, or feedback from you. Delays in providing requested access or materials may affect project timelines and are not the responsibility of Tech Guru.</p>

          <h2 style={sectionStyle}>5. Intellectual Property</h2>
          <p>Upon full payment for custom project work, you will own the final deliverables created specifically for you (such as a completed website or custom automation), excluding any third-party tools, platforms, templates, or pre-existing assets used in the build, which remain subject to their own licenses. We retain the right to showcase completed work in our portfolio unless otherwise agreed in writing.</p>

          <h2 style={sectionStyle}>6. No Guarantee of Results</h2>
          <p>While we are committed to delivering high-quality work, we do not guarantee specific business outcomes, revenue results, or performance metrics resulting from the use of our Services, including audits, websites, or automations.</p>

          <h2 style={sectionStyle}>7. Limitation of Liability</h2>
          <p>To the fullest extent permitted by law, Tech Guru shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Site or Services, including but not limited to loss of revenue, data, or business opportunities. Our total liability for any claim arising from the Services shall not exceed the amount paid by you for the Service giving rise to the claim.</p>

          <h2 style={sectionStyle}>8. Third-Party Tools and Platforms</h2>
          <p>Our Services may involve the use of third-party platforms (such as CRMs, email marketing tools, payment processors, or website builders). We are not responsible for the performance, availability, downtime, pricing changes, or policy changes of these third-party platforms.</p>

          <h2 style={sectionStyle}>9. Acceptable Use</h2>
          <p>You agree not to use the Site or Services for any unlawful purpose or in any way that could damage, disable, or impair the Site or interfere with any other party's use of it.</p>

          <h2 style={sectionStyle}>10. Changes to These Terms</h2>
          <p>We may update these Terms from time to time. Continued use of the Site or Services after changes are posted constitutes acceptance of the revised Terms.</p>

          <h2 style={sectionStyle}>11. Governing Law</h2>
          <p>These Terms are governed by the laws of the State of Maryland, without regard to conflict of law principles.</p>

          <h2 style={sectionStyle}>12. Contact Us</h2>
          <p>If you have questions about these Terms, contact us at:</p>
          <p><strong>Tech Guru</strong><br />Email: arshtist@gmail.com</p>

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

export default function TermsOfService(){
  return (
    <div>
      <NavBar />
      <Terms />
    </div>
  )
}