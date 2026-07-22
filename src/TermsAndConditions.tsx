import React from 'react';
import './TermsAndConditions.css';
import logoUrl from './assets/logo.png';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="terms-page">

      {/* Header gradient pill */}
      <div className="terms-header-pill">
        <div className="terms-header-logo">
          <img src={logoUrl} alt="Thrillathon Logo" />
        </div>
        <div className="terms-header-contact">
          <div><a href="https://thrillathon.co.in" target="_blank" rel="noreferrer">www.thrillathon.co.in</a></div>
          <div>CIN: U72100RJ2024PTC097560</div>
          <div><a href="mailto:contact@thrillathon.co.in">contact@thrillathon.co.in</a></div>
          <div><a href="tel:+918824223395">MOB: +91-8824223395</a></div>
        </div>
      </div>

      {/* Lavender content panel */}
      <div className="terms-panel">

        <div className="terms-panel-title">
          <h1>THRILLATHON TERMS &amp; CONDITIONS</h1>
          <p className="updated">Last Updated: July 1st, 2026</p>
        </div>
        
        <hr className="terms-divider" />

        <div className="terms-section">
          <h2>1. Introduction and Acceptance of Terms</h2>
          <p>Welcome to Thrillathon Innovation Private Limited (“Thrillathon”, “we”, “our”, “us”). These Terms and Conditions (“Terms”, “Agreement”) govern your access to and use of:</p>
          <ul>
            <li>The Thrillathon website www.thrillathon.co.in,</li>
            <li>The Thrillathon mobile application,</li>
            <li>Thrillathon Stream (digital content services),</li>
            <li>Thrillathon Credits/Wallet services,</li>
            <li>Any other platforms, products, tools, software or services (collectively, the “Platform”).</li>
          </ul>
          <p>By accessing, browsing, registering or using the Platform, you acknowledge that:</p>
          <p>
            You have read and understood these Terms<br />
            You agree to be bound by them<br />
            You consent to our Privacy Policy<br />
            You are legally competent under Indian law
          </p>
          <p>If you do not agree, you must stop using the Platform immediately.</p>
        </div>
        <hr className="terms-divider" />

        <div className="terms-section">
          <h2>2. Company Information</h2>
          <p>Thrillathon Innovation Pvt. Ltd.<br />
          Registered Office:<br />
          Nand Bhawan, 1-A-23, Mahaveer Nagar 3, Keshopura P.I.P., Kota, Ladpura, Kota, Rajasthan – 324005, India.</p>
          <p>Support, Legal, Grievances: contact@thrillathon.co.in</p>
        </div>
        <hr className="terms-divider" />

        <div className="terms-section">
          <h2>3. Scope of Services</h2>
          <p>Thrillathon provides an online platform facilitating:</p>
          <ul>
            <li>Discovery of entertainment events (movies, concerts, sports, exhibitions, etc.)</li>
            <li>Ticket bookings for events, cinemas and venues</li>
            <li>Streaming and digital content access via Thrillathon Stream</li>
            <li>Account management, loyalty rewards and credits</li>
            <li>Information related to events, venues and availability</li>
            <li>Wallet and promotional credit usage</li>
            <li>Integration with third-party service providers and payment gateways</li>
          </ul>
          <p>Thrillathon acts as a technology intermediary, not the event organizer unless specifically stated.</p>
        </div>
        <hr className="terms-divider" />

        <div className="terms-section">
          <h2>4. Acceptance of Additional Policies</h2>
          <p>These Terms incorporate by reference:</p>
          <ul>
            <li>Privacy Policy</li>
            <li>Refund &amp; Cancellation Policy</li>
            <li>Streaming &amp; Digital Content Policy</li>
            <li>Copyright &amp; Takedown Policy</li>
            <li>Thrillathon Credits Policy</li>
            <li>Age-Restricted Content Policy</li>
            <li>Grievance Redressal Policy</li>
          </ul>
          <p>Any future policies posted on the Platform also become part of these Terms.</p>
        </div>
        <hr className="terms-divider" />

        <div className="terms-section">
          <h2>5. Modifications to Terms</h2>
          <p>Thrillathon may revise these Terms at any time:</p>
          <ul>
            <li>With or without prior notice</li>
            <li>By updating this page</li>
            <li>Effective immediately upon posting</li>
          </ul>
          <p>Continued use of the Platform constitutes acceptance of updated Terms.</p>
        </div>
        <hr className="terms-divider" />

        <div className="terms-section">
          <h2>6. User Eligibility</h2>
          <p>By using the Platform, you represent that:</p>
          <ul>
            <li>You are at least 18 years old OR using under supervised parental guidance</li>
            <li>You are competent to enter binding contracts under the Indian Contract Act, 1872</li>
            <li>You are not legally barred from receiving services under applicable law</li>
          </ul>
          <p>Minors below 18 must use the Platform under parent/guardian supervision.</p>
        </div>
        <hr className="terms-divider" />

        <div className="terms-section">
          <h2>7. User Account Registration</h2>
          <p>To access certain Services (tickets, streaming, wallet, rewards) you must create a Thrillathon Account.</p>
          <p>You agree to:</p>
          <ul>
            <li>Provide accurate and complete information</li>
            <li>Maintain the confidentiality of your password</li>
            <li>Immediately notify Thrillathon of unauthorized access</li>
            <li>Be solely responsible for all activities under your account</li>
          </ul>
          <p>Thrillathon is not liable for losses due to unauthorized access caused by your negligence.</p>
        </div>
        <hr className="terms-divider" />

        <div className="terms-section">
          <h2>8. User Obligations</h2>
          <p>You agree NOT to:</p>
          <ul>
            <li>Misuse the Platform</li>
            <li>Violate Indian law or third-party rights</li>
            <li>Post harmful, abusive or illegal content</li>
            <li>Upload viruses, malware or harmful scripts</li>
            <li>Copy, modify, reverse-engineer or distribute Platform content</li>
            <li>Conduct fraudulent bookings or resale of tickets</li>
            <li>Collect user data without consent</li>
            <li>Impersonate any person or entity</li>
          </ul>
          <p>Violation may result in termination, blocking, legal action, and damages.</p>
        </div>
        <hr className="terms-divider" />

        <div className="terms-section">
          <h2>9. Event Information &amp; Third-Party Providers</h2>
          <p>Most listings, schedules, pricing, availability and event details are provided by third-party organizers, cinemas, venues or content licensors.</p>
          <p>Thrillathon:</p>
          <ul>
            <li>Does not control event operations</li>
            <li>Does not guarantee accuracy of event descriptions</li>
            <li>Is not responsible for event quality, postponement or cancellation</li>
            <li>Is not liable for organizer's actions, decisions or misconduct</li>
          </ul>
          <p>Your booking constitutes a contract between you and the Event Organizer/Cinema.</p>
        </div>
        <hr className="terms-divider" />

        <div className="terms-section">
          <h2>10. Booking, Pricing, Fees &amp; Payments</h2>
          <p><strong>10.1 Payment Methods</strong></p>
          <p>Thrillathon accepts:</p>
          <ul>
            <li>Debit &amp; Credit Cards</li>
            <li>UPI</li>
            <li>Net Banking</li>
            <li>Thrillathon Credits (where applicable)</li>
            <li>Wallets and other third-party payment methods</li>
          </ul>
          <p><strong>10.2 Internet Handling Fees &amp; Order Processing Fees</strong></p>
          <ul>
            <li>May apply per ticket</li>
            <li>Are non-refundable unless required by law</li>
          </ul>
          <p><strong>10.3 Pricing Errors</strong></p>
          <p>If a ticket is purchased at an incorrect price due to a system or human error:</p>
          <ul>
            <li>Thrillathon may cancel the booking</li>
            <li>A full refund for the incorrect amount will be issued</li>
          </ul>
          <p><strong>10.4 Booking Confirmation</strong></p>
          <p>A booking is confirmed only when:</p>
          <ul>
            <li>Payment is successful</li>
            <li>You receive a confirmation ID/email/SMS</li>
          </ul>
          <p>In case of technical issues, it is YOUR responsibility to check booking history or contact support.</p>
        </div>
        <hr className="terms-divider" />

        <div className="terms-section">
          <h2>11. Refunds, Cancellations &amp; Exchanges</h2>
          <p><strong>11.1 Ticket Purchases</strong></p>
          <p>Before purchasing:</p>
          <ul>
            <li>Verify showtime, location, language, format and seat selection</li>
            <li>Many tickets are non-refundable and non-transferable</li>
          </ul>
          <p><strong>11.2 Event Organizer–Based Cancellation</strong></p>
          <p>If an event/movie is cancelled or postponed, refunds depend on:</p>
          <ul>
            <li>Organizer/Cinema policy</li>
            <li>Venue instructions</li>
            <li>Applicable law</li>
          </ul>
          <p>Thrillathon will facilitate refunds where authorized but cannot override organizer policies.</p>
          <p><strong>11.3 Partial Service Disruption</strong></p>
          <p>Thrillathon is not responsible for:</p>
          <ul>
            <li>Venue issues</li>
            <li>Technical disruptions at cinemas</li>
            <li>Entry denial due to ID/age restrictions</li>
            <li>Safety or experience at event premises</li>
          </ul>
        </div>
        <hr className="terms-divider" />

        <div className="terms-section">
          <h2>12. Ticket Delivery &amp; Collection</h2>
          <p><strong>12.1 e-Tickets</strong></p>
          <p>Delivered via:</p>
          <ul>
            <li>Email</li>
            <li>SMS</li>
            <li>App Wallet</li>
          </ul>
          <p>Must be presented at the venue for entry.</p>
          <p><strong>12.2 Physical Tickets (rare cases)</strong></p>
          <p>Courier delivery:</p>
          <ul>
            <li>7–20 business days</li>
            <li>No delivery on Sundays/holidays</li>
            <li>Subject to courier timelines</li>
          </ul>
        </div>
        <hr className="terms-divider" />

        <div className="terms-section">
          <h2>13. Age Restrictions for Events</h2>
          <p>Certain events enforce age restrictions such as:</p>
          <ul>
            <li>18+ Adults Only</li>
            <li>A-rated movies (no entry below 18)</li>
            <li>Child ticket policies set by cinemas/organisers</li>
            <li>Event-specific requirements</li>
          </ul>
          <p>Age compliance is the user's responsibility.</p>
        </div>
        <hr className="terms-divider" />

        <div className="terms-section">
          <h2>14. User Conduct &amp; Communication Services</h2>
          <p>The Platform may include:</p>
          <ul>
            <li>Reviews</li>
            <li>Comments</li>
            <li>Chat support</li>
            <li>Forums</li>
            <li>Community pages</li>
          </ul>
          <p>You agree not to:</p>
          <ul>
            <li>Harass or abuse users</li>
            <li>Post defamatory or obscene content</li>
            <li>Upload copyrighted materials without rights</li>
            <li>Spread misinformation</li>
            <li>Promote illegal activities</li>
          </ul>
          <p>Thrillathon may moderate or remove content without notice.</p>
        </div>
        <hr className="terms-divider" />

        <div className="terms-section">
          <h2>15. Thrillathon Stream (Digital Content Terms)</h2>
          <p><strong>15.1 Content Nature</strong></p>
          <p>Thrillathon Stream provides:</p>
          <ul>
            <li>Live Shows</li>
            <li>Live concerts</li>
          </ul>
          <p>Content may be:</p>
          <ul>
            <li>Licensed from third-party providers</li>
            <li>Subject to DRM protection</li>
            <li>Restricted by geography (India-only)</li>
          </ul>
          <p><strong>15.2 Limited License</strong></p>
          <p>You receive a personal, non-transferable, revocable license to view content.</p>
          <p>You MAY NOT:</p>
          <ul>
            <li>Copy or record content</li>
            <li>Share downloads</li>
            <li>Use VPNs to bypass geo-restrictions</li>
            <li>Remove DRM</li>
            <li>Distribute or broadcast content</li>
          </ul>
          <p><strong>15.3 Streaming Refunds</strong></p>
          <p>Refunds permitted ONLY when:</p>
          <ul>
            <li>Content fails to start playback due to Thrillathon fault</li>
            <li>You report within 24 hours</li>
            <li>You have not consumed significant playback</li>
          </ul>
        </div>
        <hr className="terms-divider" />

        <div className="terms-section">
          <h2>16. Thrillathon Credits (Wallet)</h2>
          <ul>
            <li>Credits have expiry dates (usually 60–365 days)</li>
            <li>Non-redeemable for cash</li>
            <li>Non-transferable</li>
            <li>Used before other payment methods automatically</li>
            <li>In cancellation scenarios, credits used are re-credited</li>
          </ul>
          <p>Fraudulent use leads to forfeiture.</p>
        </div>
        <hr className="terms-divider" />

        <div className="terms-section">
          <h2>17. Copyright, Content Ownership &amp; Takedown Policy</h2>
          <p>All:</p>
          <ul>
            <li>Logos</li>
            <li>UI/UX elements</li>
            <li>Software</li>
            <li>Text</li>
            <li>Images</li>
            <li>Videos</li>
            <li>Databases</li>
            <li>Metadata</li>
          </ul>
          <p>…are owned by Thrillathon or content licensors.</p>
          <p>To report infringement:</p>
          <p>Email: contact@thrillathon.co.in</p>
          <p>Include:</p>
          <ul>
            <li>Name &amp; contact</li>
            <li>Copyright proof</li>
            <li>Description of infringing content</li>
            <li>URL</li>
            <li>Good-faith statement</li>
            <li>Digital/physical signature</li>
          </ul>
          <p>Thrillathon will respond within reasonable timelines.</p>
        </div>
        <hr className="terms-divider" />

        <div className="terms-section">
          <h2>18. Suspension &amp; Termination</h2>
          <p>We may suspend or terminate:</p>
          <ul>
            <li>Your account</li>
            <li>Services</li>
            <li>Bookings</li>
            <li>Access to platform</li>
          </ul>
          <p>…for violations, fraud, abuse, or legal obligations.</p>
          <p>Upon termination:</p>
          <ul>
            <li>Access ends immediately</li>
            <li>Data may be deleted</li>
            <li>No further obligations to Thrillathon remain</li>
          </ul>
        </div>
        <hr className="terms-divider" />

        <div className="terms-section">
          <h2>19. Disclaimers</h2>
          <p>Thrillathon disclaims all warranties:</p>
          <ul>
            <li>Platform being error-free</li>
            <li>Event content accuracy</li>
            <li>Availability of service</li>
            <li>Quality of 3rd-party services</li>
            <li>Completeness of listings</li>
          </ul>
          <p>You use the Platform at your own risk.</p>
        </div>
        <hr className="terms-divider" />

        <div className="terms-section">
          <h2>20. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law:</p>
          <p>Thrillathon's total liability for any claim is limited to:</p>
          <p>→ The amount you paid to Thrillathon for that specific transaction only.</p>
          <p>Thrillathon is not liable for:</p>
          <ul>
            <li>Loss of data</li>
            <li>Loss of profits</li>
            <li>Emotional distress</li>
            <li>Damages from technical failures</li>
            <li>Organizer or venue misconduct</li>
            <li>Unauthorized account access</li>
            <li>Indirect, incidental or punitive damages</li>
          </ul>
        </div>
        <hr className="terms-divider" />

        <div className="terms-section">
          <h2>21. Indemnification</h2>
          <p>You agree to indemnify Thrillathon from claims arising due to:</p>
          <ul>
            <li>Misuse of Platform</li>
            <li>Violation of Terms</li>
            <li>Illegal activity</li>
            <li>Infringement of rights</li>
            <li>Fraudulent transactions</li>
          </ul>
        </div>
        <hr className="terms-divider" />

        <div className="terms-section">
          <h2>22. Notices &amp; Grievances</h2>
          <p>Primary Contact, Legal Notices, Grievance Officer<br />
          <a href="mailto:contact@thrillathon.co.in">contact@thrillathon.co.in</a><br />
          (Responsibility: compliance with IT Act &amp; intermediary Guidelines)</p>
          <p>Notices deemed served:</p>
          <ul>
            <li>48 hours after email dispatch</li>
            <li>Immediately when acknowledged</li>
          </ul>
        </div>
        <hr className="terms-divider" />

        <div className="terms-section">
          <h2>23. Governing Law, Jurisdiction &amp; Dispute Resolution</h2>
          <p>These Terms are governed by the laws of India.</p>
          <p>Disputes:</p>
          <ul>
            <li>Subject to exclusive jurisdiction of Kota courts</li>
            <li>May involve arbitration under the Arbitration &amp; Conciliation Act, 1996</li>
            <li>Arbitration seat: Kota, Rajasthan</li>
            <li>Language: English, Hindi</li>
          </ul>
        </div>
        <hr className="terms-divider" />

        <div className="terms-section">
          <h2>24. Miscellaneous</h2>
          <ul>
            <li>Severability: Invalid parts do not affect remainder</li>
            <li>No Waiver: Failure to enforce rights is not a waiver</li>
            <li>Assignment: Thrillathon may assign rights; you may not</li>
            <li>Entire Agreement: These Terms supersede all prior discussions</li>
          </ul>
        </div>
        <hr className="terms-divider" />

        <div className="terms-section" style={{ textAlign: 'center' }}>
          <p>© 2026 Thrillathon Innovation. All rights reserved. For any privacy concerns, contact <a href="mailto:contact@thrillathon.co.in">contact@thrillathon.co.in</a>.</p>
        </div>

      </div>
    </div>
  );
};

export default TermsAndConditions;