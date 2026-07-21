import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="policy-container">
      <div className="policy-header">
        <h1>Thrillathon Innovation x Whooppe<br/><span style={{fontSize: '1.2rem'}}>Privacy Policy</span></h1>
        <div className="last-updated">📅 Last Updated: 17th April, 2026</div>
        <div className="subhead">
            Self-Sovereign Identity · Privacy-first facial recognition ticketing · User controlled credentials
        </div>
      </div>

      <div className="policy-content">
          <p>This Privacy Policy outlines how Thrillathon Innovation (“Thrillathon Innovation”, "Thrillathon", “Whooppe”, “TI”, "we", "our", "us") collects, processes, uses, stores, shares, and protects personal data through its digital facial-recognition-based ticketing ecosystem, applications, and related services. Thrillathon Innovation is committed to maintaining the highest standards of privacy, security, and user control over personal information.</p>

          <h2>1. About Thrillathon Innovation</h2>
          <p>Thrillathon Innovation is a technology startup focused on developing a secure, seamless, and privacy-preserving ticketing and access management system using face recognition and digital identity technologies. Our platform uses Self-Sovereign Identity (SSI) principles, enabling users to maintain full control of their personal data.</p>
          <p>Thrillathon’s digital identity ecosystem is built on Self-Sovereign Identity (SSI), an identity framework that incorporates selective centralization. While Thrillathon uses certain SSI concepts for user‑controlled credentials, it also relies on a centralized database for operational, security, and event‑management purposes. This means:</p>
          <ul>
              <li>Users retain control of their Verifiable Credentials stored on their device</li>
              <li>Thrillathon maintains a centralized system for ticketing, event validation, logging, and security</li>
              <li>All sensitive biometric and Government-ID-based identity data is centrally stored and protected within the Thrillathon ecosystem.</li>
              <li>Central systems store only the data necessary for event operations and compliance</li>
          </ul>
          <p>We develop: a facial-recognition-enabled mobile application, a centralized identity ecosystem for generating Verifiable Credentials (VCs), and tools that allow users to authenticate seamlessly at venues using a "single face token." We maintain a centralized database for operational and security purposes; however, sensitive identity information—such as Government-ID details, biometric data, and Verifiable Credentials (VCs)—is stored only until our services are in use.</p>

          <h2>2. Introduction</h2>
          <p>Thrillathon Innovation (“Thrillathon Innovation”, “Thrillathon”, “Whooppe”, “TI”, “our”, “we”, or “us”) respects your privacy and is committed to protecting the Personal Data we process about you. This Privacy Policy (“Policy”) explains our practices regarding the Personal Data processed when users create and store their Verified Credentials (VCs) on their devices through the Thrillathon Application (Whooppe). This Policy also describes how Verified Credentials and event-entry information may be shared with authorized event verifiers to enable seamless, contactless entry using facial recognition and/or digital event passes. Additionally, this Policy outlines the legal basis for processing Personal Data, the rights of individuals, and our overall approach to safeguarding your information.</p>

          <h2>3. Scope</h2>
          <p>This Privacy Policy applies to: The Thrillathon mobile application, Thrillathon’s backend systems, any (“If”) third-party partners who assist us in providing our services. All third parties follow the same standards outlined in this policy.</p>

          <h2>4. Objective</h2>
          <p>The objectives of TI’s Privacy Policy are to:</p>
          <ul>
              <li><strong>Protection of User Privacy:</strong> Make sure that personal information gathered from users is protected while upholding the strictest data security and privacy regulations.</li>
              <li><strong>Transparency:</strong> Clearly and openly describe how TI collects, uses, retains, shares, and deletes data.</li>
              <li><strong>Collection Limitation:</strong> Restrict the gathering of personal information and acquire it in a fair and legal manner while being aware of the data principle.</li>
              <li><strong>User Control:</strong> Give users the ability to manage their digital identities, consent, and preferences by giving them access to information about their personal data.</li>
              <li><strong>Compliance:</strong> Adhere to all relevant data protection laws and rules, such as the Digital Personal Data Protection Act of 2023 and its implementing regulations.</li>
          </ul>

          <h2>5. Key Points</h2>
          <div className="highlight-note">
              <p>✔ <strong>Account & Profile Creation:</strong> To use the Thrillathon Innovation (Whooppe) service, a user profile <strong>is created</strong> on our backend systems. This profile includes your Name, Email Address, Phone Number, State, and a unique User ID. We do not claim to be "profile-less" or "anonymous" at an account level.</p>
              <p>✔ <strong>Personally Identifiable Information (PII) Storage:</strong> Thrillathon Innovation <strong>does store</strong> the PII listed above (Name, Email, Phone, State, User ID) on our secure backend servers to manage your account, issue verifiable credentials, and facilitate event ticketing. This statement corrects any previous claims of "no PII storage."</p>
              <p>✔ <strong>User Control:</strong> You remain in control of your Verifiable Credentials (VCs) stored locally on your device. You can choose to share event-entry details with event organizers after providing explicit consent before each entry.</p>
              <p>✔ <strong>Support Interactions:</strong> When you interact with our team for support, Thrillathon Innovation will never request sensitive personal details such as Government-ID numbers or copies via unsecured channels. If a user voluntarily shares any personally identifiable information while seeking support, they consent to its use in accordance with this Privacy Policy.</p>
          </div>
          
          <h2>Account Deletion Policy & Right to Erasure</h2>
          <p>In accordance with data protection principles and the Digital Personal Data Protection Act, 2023, you have the right to request permanent deletion of your account and all associated personal data from Thrillathon Innovation’s systems. We respect your control over your digital identity. Below is the official procedure to delete your Whooppe account and associated credentials.</p>

          <div>
              <h4>🗑️ How to request account deletion</h4>
              <p>To initiate the deletion of your Thrillathon Innovation (Whooppe) account and all related personal data (including Verifiable Credentials, event tickets, and any backend references), you must send a deletion request email from the registered email address associated with your account. Please use the following draft or compose a clear request.</p>
              
              <p><strong>📧 Email to:</strong> <a href="mailto:contact@thrillathon.co.in">contact@thrillathon.co.in</a><br/>
              <strong>📌 Subject line:</strong> Request for Account Deletion – Whooppe / Thrillathon Innovation</p>
              
              <div style={{background: '#f4f9fe', padding: '1rem', borderRadius: '16px', margin: '1rem 0', border: '1px solid #cbe4fe'}}>
                  <strong>✉️ Suggested email draft (copy & paste):</strong><br/><br/>
  To the Thrillathon Innovation Privacy Team,<br/><br/>
  I hereby request the permanent deletion of my Whooppe account and all personal data associated with it, including but not limited to my Verifiable Credentials, Government-ID linked data, selfie biometric references, event tickets, and any backend logs tied to my identity.<br/><br/>
  <strong>Registered Mobile Number:</strong> [Enter your Whooppe registered mobile number]<br/>
  <strong>Full Name (as displayed in app):</strong> [Optional but helpful]<br/>
  <strong>Reason for deletion (optional):</strong> [Withdraw consent / no longer using services]<br/><br/>
  I understand that once deletion is processed, all my Verifiable Credentials and locally stored data will be permanently removed from Thrillathon’s systems (centralized operational databases) and cannot be recovered. Kindly confirm via email and WhatsApp once the deletion is completed.<br/><br/>
  Thank you,<br/>
  [Your Full Name]<br/>
  [Registered Mobile Number]
              </div>

              <p><strong>✅ What happens after you send the email?</strong><br/>
              Our support team will verify your ownership of the account (by matching the registered mobile number). Once verified, we will initiate the deletion process. You will receive a confirmation notification <strong>via WhatsApp and email</strong> within <strong>7 business days</strong> from the date of receipt of a valid request. In most cases, deletion is completed within 3–5 business days. You will be notified through both channels to ensure you are fully informed.</p>

              <p><strong>⏳ Business days & communication:</strong><br/>
              Thrillathon Innovation operates on standard business days (Monday–Friday, excluding public holidays). After submitting the deletion email, you will receive an acknowledgement within 48 hours. Once the account and associated data are permanently erased from our centralized systems (including any stored biometric references and logs older than required retention), we will send a final confirmation via WhatsApp (to your registered number) and an email copy. No residual data will be retained unless required by law (e.g., transaction records for statutory audit, which will be anonymized).</p>

              <p><strong>⚠️ Note:</strong> Deleting your account will revoke all Verifiable Credentials stored on your device. Event entry passes will become invalid. You will need to onboard again if you wish to reuse Thrillathon services in the future. The deletion request is irreversible.</p>
          </div>

          <h2>6. Information Collected and Processed</h2>
          <h3>a) Personal / Account Information</h3>
          <div className="table-wrapper">
              <table>
                  <thead>
                      <tr><th>Information</th><th>Stage</th><th>Purpose</th><th>Storage Location</th><th>Retention</th><th>Sharing</th></tr>
                  </thead>
                  <tbody>
                      <tr><td><strong>Mobile Number</strong></td><td>Login / Registration</td><td>Authentication via OTP, account recovery</td><td>Backend Server</td><td>Until account deletion</td><td>With service providers for OTP delivery</td></tr>
                      <tr><td><strong>Full Name</strong></td><td>User Onboarding</td><td>Profile creation, ticket personalization</td><td>Backend Server</td><td>Until account deletion</td><td>With event organizers upon consent</td></tr>
                      <tr><td><strong>Email Address</strong></td><td>User Onboarding</td><td>Account verification, communication, password recovery</td><td>Backend Server</td><td>Until account deletion</td><td>With email service providers</td></tr>
                      <tr><td><strong>State</strong></td><td>User Onboarding</td><td>Location-based compliance, event suggestions</td><td>Backend Server</td><td>Until account deletion</td><td>Not shared externally</td></tr>
                      <tr><td><strong>User ID (Internal)</strong></td><td>Account creation</td><td>Unique identifier for account management</td><td>Backend Server</td><td>Until account deletion</td><td>With event verifiers for validation</td></tr>
                      <tr><td><strong>Government ID / Virtual ID</strong></td><td>Onboarding (eKYC)</td><td>Create Verifiable Credential (VC), age verification</td><td>Encrypted Backend & Device</td><td>Until user deletes VC or account</td><td>Shared with venue on explicit consent</td></tr>
                      <tr><td><strong>Selfie (Face Image)</strong></td><td>Onboarding</td><td>Biometric matching, identity binding</td><td>Encrypted Backend & Device VC</td><td>Until VC or account deletion</td><td>Shared with venue on consent for entry</td></tr>
                      <tr><td><strong>Event Ticket / QR Code</strong></td><td>Ticket Upload</td><td>Validate ticket and generate event-pass credential</td><td>Backend Server & Device</td><td>Until event concludes or deleted</td><td>Shared with venue on consent</td></tr>
                  </tbody>
              </table>
          </div>

          <h3>b) Device & Technical Data (Previously Missing)</h3>
          <div className="table-wrapper">
              <table>
                  <thead><tr><th>Information</th><th>Stage</th><th>Purpose</th><th>Storage Location</th><th>Retention</th><th>Notes</th></tr></thead>
                  <tbody>
                      <tr><td><strong>Device ID (Android ID)</strong></td><td>App installation / Push notification setup</td><td>Sending push notifications, fraud prevention</td><td>Backend Server (Firebase)</td><td>Until app uninstall or account deletion</td><td>Used by Firebase Cloud Messaging</td></tr>
                      <tr><td><strong>Crash Logs & Diagnostics</strong></td><td>When app crashes or encounters error</td><td>Debugging, app stability improvements</td><td>Firebase Crashlytics</td><td>90 days</td><td>May include stack traces, device model, OS version. No PII by design but could contain contextual data.</td></tr>
                      <tr><td><strong>IP Address</strong></td><td>During API requests</td><td>Security, fraud analysis, rate limiting</td><td>Temporary backend logs</td><td>Few hours to 30 days</td><td>Anonymized after processing</td></tr>
                  </tbody>
              </table>
          </div>

          <h3>c) Grievances / Support Information</h3>
          <div className="table-wrapper">
              <table>
                  <thead><tr><th>Information</th><th>Purpose</th><th>Storage</th><th>Retention</th><th>Sharing</th></tr></thead>
                  <tbody><tr><td>Email or unsolicited PII shared by user</td><td>Issue resolution</td><td>Support inbox (Zendesk or similar)</td><td>30 days after ticket closure</td><td>Yes – Our Partners for Tech Support, and Customer support teams can have access</td></tr></tbody>
              </table>
          </div>

          <h3>d) Non-Identifiable / Aggregated Data</h3>
          <div className="table-wrapper">
              <table>
                  <thead><tr><th>Information</th><th>Stage</th><th>Purpose</th><th>Storage</th><th>Retention</th><th>Sharing</th></tr></thead>
                  <tbody>
                      <tr><td>Device Types and OS Version</td><td>Feedback, Crash Analytics reports</td><td>Optimize app performance, compatibility</td><td>Firebase reports, App stores dashboards</td><td>As per platform policy</td><td>Yes – Tech support partners</td></tr>
                      <tr><td>Anonymous App Data (downloads, usage, geo availability)</td><td>From download till uninstall</td><td>Track app popularity, engagement, usage patterns</td><td>Anonymous & aggregated data as per platform policy</td><td>Per platform policy</td><td>Yes – Tech support partners</td></tr>
                  </tbody>
              </table>
          </div>

          <h2>7. Data Processing for a Minor (less than 18 years of age)</h2>
          <p>Thrillathon Innovation application does not allow creation of a VC for Minors (Any individual who is less than 18 years of age), and thus they cannot use the Thrillathon Application (Whooppe) without Guardian/Adult’s consent. This is enabled by a business rule that allows Minor profile creation only on those mobile devices where 1 Adult profile is available. This business rule is implemented by doing an age check with the Date of Birth available in the Government-ID eKYC data. Thus, TI does not collect, store, process, or transfer personal information of a child without consent from the parent or guardian.</p>

          <h2>8. Data Storage & Processing</h2>
          <p><strong>Clarification on Central Storage:</strong> Thrillathon uses a hybrid storage model. While we utilize Self-Sovereign Identity (SSI) principles to keep Verifiable Credentials (VCs) and biometric templates on the user’s device, our backend systems do centrally store certain data for operational, security, and legal compliance purposes.</p>
          
          <ul>
              <li><strong>Stored on Backend Servers (Central Storage):</strong> User profile information (Name, Email, Phone, State, User ID), hashed references to Government IDs, event ticket records, device IDs for push notifications, and encrypted logs.</li>
          
              <li><strong>Stored Only on Device (Local):</strong> Raw biometrics (face images captured during onboarding) and the private keys associated with your Verifiable Credentials. These never leave your device unless you explicitly consent to share a credential with an event verifier.</li>
          </ul>
          
          <p>All processing of sensitive data (e.g., identity verification) takes place on secure, isolated servers within India. We comply with applicable Indian data protection laws.</p>

          <h2>9. Your Rights</h2>
          <div className="table-wrapper">
              <table>
                  <thead><tr><th>Personal Right and Controls</th><th>Description</th></tr></thead>
                  <tbody>
                      <tr><td>Data Modification</td><td>Users have the right to review, access, and modify their Verifiable Credential and Entry Pass. Users can delete current entry pass and upload new one; for Government ID updates, delete credentials and re-authenticate. Updates in original Government ID must be done via Government Seva Kendra.</td></tr>
                      <tr><td>Withdrawal/Revocation or Transfer of Consent</td><td>Opt out by deleting VC and Ticket Credentials data or uninstalling the app. All data stored locally is permanently erased and cannot be retrieved. Backend data will be deleted upon account deletion request.</td></tr>
                      <tr><td>Grievance Redressal</td><td>For any questions or concerns, contact Thrillathon Innovation at <a href="mailto:contact@thrillathon.co.in">contact@thrillathon.co.in</a>.</td></tr>
                  </tbody>
              </table>
          </div>

          <h2>10. Data Sharing</h2>
          <p>In accordance with this privacy policy, TI may share personal information with TI employees, advisers, agents and third parties who provide services on TI’s behalf insofar as reasonably necessary and in relation to the fulfilment of the purpose. Service providers who assist in protecting and securing TI systems. Successors or assigns to whom TI may assign or transfer functions. TI stores necessary user data in a central repository as described in Section 8. Information from the TI App present on the user’s device is only shared with explicit consent and does not disclose any personal information to others.</p>

          <h2>11. Security Measures</h2>
          <p>TI ensures security by adopting reasonable data protection practices, internal policies, periodic security audits, data privacy by design, and encryption. Employees follow ethical code of conduct. TI implements physical and cyber safeguards, encrypted transmission channels, and restricted access on a need-to-know basis. TI performs a yearly comprehensive audit and two non-comprehensive audits in a fiscal year.</p>

          <h2>12. Personal Data Retention</h2>
          <p>Limited to the TI will only keep any personal data for a minimal amount of time and in the manner specified by relevant law and/or regulatory requirements. Account data is retained until deletion request. Logs and diagnostic data are retained as specified in Section 6.</p>

          <h2>13. Third-Party Links</h2>
          <p>Links to additional third-party websites and/or applications may be found on the TI public website. The content and privacy policies of those third-party websites are not TI’s responsibility. TI is not liable for the security and privacy of the data shared via those third-party programs.</p>

          <h2>14. Policy Changes</h2>
          <p>TI retains the right, at any time, to update, modify, add, or change any provisions in this privacy statement. The TI website and application will be updated with any changes. The modifications will be incorporated into this policy and take effect on the date of the amendment, alteration, change, modification, addition, or update.</p>

          <h2>15. Jurisdiction</h2>
          <p>If you choose to use the TI Platform, your visit and any dispute over privacy is subject to this privacy policy. In addition to the foregoing, any disputes arising under this privacy policy shall be governed by the laws of India and the courts of Kota, Rajasthan, India shall have exclusive jurisdiction in case of disputes.</p>

          <hr/>
          <p style={{fontSize: '0.85rem', textAlign: 'center'}}>End of Policy — Thrillathon Innovation x Whooppe. Privacy by design, security at core.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
