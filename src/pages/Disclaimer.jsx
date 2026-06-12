import NavBar from "../components/NavBar";

// Disclaimer.jsx
const CREAM   = "#F5EDE0";
const TAN     = "#C4A882";

const EFFECTIVE_DATE = "June 12, 2026";

function Disclaim() {
  return (
    <div style={{ backgroundColor: CREAM, minHeight: "100vh", fontFamily: "DM Sans, sans-serif", padding: "80px 24px" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", color: TAN, marginBottom: 8 }}>
          Disclaimer
        </h1>
        <p style={{ color: "#888", fontSize: 14, marginBottom: 40 }}>Effective Date: {EFFECTIVE_DATE}</p>

        <div style={{ color: "#444", fontSize: 15, lineHeight: 1.8 }}>

          <p>The information provided on techconcierge.vercel.app (the "Site") by Tech Guru ("we," "us," or "our") is for general informational purposes only. All information on the Site is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.</p>

          <h2 style={sectionStyle}>No Professional Advice</h2>
          <p>Nothing on the Site constitutes legal, financial, accounting, or professional advice. Any audits, assessments, scores, recommendations, or guides provided through the Site (including the Automation Audit) are general in nature and intended to help you identify areas of your business that may benefit from review. They are not a substitute for individualized professional advice based on your specific circumstances.</p>

          <h2 style={sectionStyle}>No Results Guarantee</h2>
          <p>Any references to results, outcomes, time savings, revenue impact, or business improvements are illustrative only. Individual results vary based on numerous factors, including your business model, existing systems, implementation, and effort. We make no guarantee that following any recommendation, completing any audit, or purchasing any Service will result in specific outcomes.</p>

          <h2 style={sectionStyle}>Third-Party Links and Tools</h2>
          <p>The Site may contain links to third-party websites, platforms, or tools (such as Stripe, scheduling software, or other business platforms) that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.</p>

          <h2 style={sectionStyle}>External Use of Information</h2>
          <p>Your use of the Site and reliance on any information from the Site is solely at your own risk. We are not liable for any loss or damage of any kind incurred as a result of the use of the Site or reliance on any information provided.</p>

          <h2 style={sectionStyle}>Contact Us</h2>
          <p>If you have questions about this Disclaimer, contact us at:</p>
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

export default function Disclaimer(){
  return (
    <div>
      <NavBar />
      <Disclaim />
    </div>
  )
}