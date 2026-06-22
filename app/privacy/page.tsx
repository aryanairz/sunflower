import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy | SereniDrip IV Hydration",
  description:
    "How SereniDrip IV Hydration in Edinburg, TX collects, uses, and protects your personal and health information under HIPAA and Texas law.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="June 22, 2026">
      <p>
        Welcome to SereniDrip IV Hydration (“SereniDrip,” “we,” “our,” or “us”).
        We are committed to protecting your privacy and safeguarding the personal
        and health information you share with us through our website and services.
        By using our website, you agree to the terms outlined in this Privacy
        Policy.
      </p>

      <h2>Information We Collect</h2>
      <p>
        <strong>Personal and Health Information.</strong> When you contact us,
        schedule an appointment, complete forms, or request information, we may
        collect your name, email address, phone number, physical address, and date
        of birth; medical and health histories you voluntarily provide; and any
        other information submitted through our secure patient intake forms.
      </p>
      <p>
        <strong>Automatically Collected Information.</strong> When you visit our
        website, we may automatically collect your IP address, browser type, and
        device information; the pages you visit, traffic data, and the date and
        time of access; and basic website usage data compiled through essential
        functional cookies.
      </p>

      <h2>How We Use Your Information</h2>
      <p>
        We may use your information to schedule, manage, and confirm your
        appointments; communicate with you about your services, treatments, and
        care; respond to your inquiries and provide support; maintain, secure, and
        improve our website; and meet our federal, state, and legal healthcare
        obligations.
      </p>
      <p>We do not sell your personal information.</p>

      <h2>Medical Information, HIPAA, and Texas Law</h2>
      <p>
        As a healthcare provider operating in Texas, we take the security of your
        health data seriously.
      </p>
      <p>
        <strong>Protected Health Information (PHI).</strong> Medical data collected
        as part of your treatment is classified as PHI and is protected under the
        federal Health Insurance Portability and Accountability Act (HIPAA) and the
        Texas Medical Records Privacy Act (TMRPA).
      </p>
      <p>
        <strong>No Sale or Marketing of PHI.</strong> In compliance with Texas law,
        SereniDrip will never sell, license, or use your Protected Health
        Information for marketing, fundraising, or financial gain without first
        obtaining your explicit, signed, written authorization.
      </p>
      <p>
        <strong>Notice of Privacy Practices (NPP).</strong> For comprehensive
        details on how your clinical medical data is handled, stored, shared, and
        protected, please review our{" "}
        <Link href="/notice-of-privacy-practices">
          Notice of Privacy Practices
        </Link>
        , available upon request and provided at your first appointment.
      </p>
      <p>
        <strong>Website Communication Disclaimer.</strong> General inquiries
        submitted through standard, unsecured contact forms should not include
        sensitive medical details. Please submit clinical medical information only
        through our designated, secure, HIPAA-compliant patient intake portal.
      </p>

      <h2>Cookies, Tracking, and Your Choices</h2>
      <p>We limit the use of tracking technologies to protect visitor privacy.</p>
      <p>
        <strong>Essential Cookies.</strong> We use basic, essential operational
        cookies so our website loads securely and functions properly.
      </p>
      <p>
        <strong>Your Consent.</strong> When you first visit our website, a cookie
        consent banner allows you to accept or decline any non-essential analytics
        or tracking features.
      </p>
      <p>
        <strong>Browser Adjustments.</strong> You can change your browser settings
        to refuse cookies, though doing so may cause certain automated features of
        our scheduling platform to drop performance or fail to load.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        We partner with specialized third-party providers for appointment
        scheduling and digital patient check-in; secure, encrypted payment
        processing; and email communications and HIPAA-compliant website hosting.
        These providers are bound by formal Business Associate Agreements (BAAs) or
        strict privacy clauses that forbid them from using, sharing, or exposing
        your personal data for any purpose other than providing services to
        SereniDrip.
      </p>

      <h2>Information Sharing</h2>
      <p>
        We will only disclose your personal or medical information with your
        explicit, written consent; to healthcare professionals directly involved
        in coordinating your care; to comply with lawful subpoenas, court orders,
        or state medical regulatory requirements; or to protect the rights, safety,
        or property of SereniDrip, our staff, or our patients.
      </p>

      <h2>Data Security</h2>
      <p>
        We implement administrative, technical, and physical safeguards designed to
        protect your medical and personal data from unauthorized access, loss, or
        alteration, and online forms are transmitted through encrypted channels.
        However, no internet transmission or electronic storage method is
        completely secure, and while we use medical-grade security, we cannot
        guarantee its absolute security.
      </p>

      <h2>Your Rights Under Federal and Texas Law</h2>
      <p>
        Under HIPAA and the Texas Medical Records Privacy Act, you have the right
        to:
      </p>
      <p>
        <strong>Access.</strong> Request a digital or physical copy of your
        personal and medical records. Under Texas law, we must provide access to
        electronic medical records within 15 business days of receiving a valid,
        written request.
      </p>
      <p>
        <strong>Correction.</strong> Request corrections or amendments to
        inaccurate or incomplete health or personal files.
      </p>
      <p>
        <strong>Accounting of Disclosures.</strong> Request a list of when and why
        your information was shared outside of routine treatment or billing
        operations.
      </p>
      <p>
        <strong>Revocation and Opt-Out.</strong> Revoke any previously signed data
        authorizations, or opt out of non-clinical text and email updates, at any
        time.
      </p>
      <p>
        To exercise any of these rights, please submit a written request using the
        contact information below.
      </p>

      <h2>Children’s Privacy</h2>
      <p>
        Our website and services are intended strictly for adults aged 18 and
        older. We do not knowingly collect personal or health information from
        minors under the age of 18 without verifiable parental or legal guardian
        consent.
      </p>

      <h2>External Links and Medical Disclaimer</h2>
      <p>
        <strong>External Links.</strong> Our website may contain links to
        third-party medical resources or platforms. We do not control and are not
        responsible for the privacy practices of external sites.
      </p>
      <p>
        <strong>Medical Disclaimer.</strong> Individual results from IV hydration
        may vary. Treatments described on this website are not intended to
        diagnose, treat, cure, or prevent any disease without a proper medical
        evaluation. All treatments are administered under medical supervision by
        licensed professionals, and a medical consultation is required to determine
        clinical appropriateness.
      </p>

      <h2>Medical Supervision</h2>
      <p>
        SereniDrip IV Hydration operates under the supervision of our Medical
        Director, Dr. Emily Farias, MD (Texas Medical License W1781). All
        treatments are delegated and overseen in accordance with Texas Medical
        Board regulations.
      </p>

      <h2>Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy to reflect changing state or federal
        laws. Any revisions will be published on this page with an updated
        effective date.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions, concerns, data access requests, or complaints
        regarding your privacy rights, please contact us:
      </p>
      <p>
        <strong>SereniDrip IV Hydration</strong>
        <br />
        2001 W Trenton Rd, Spc 101 Unit 22, Edinburg, TX 78539
        <br />
        Phone: <a href="tel:9566550055">(956) 655-0055</a>
        <br />
        Email:{" "}
        <a href="mailto:serenidripivhydration@gmail.com">
          serenidripivhydration@gmail.com
        </a>
        <br />
        Website:{" "}
        <a
          href="https://serenidripivhydration.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          serenidripivhydration.com
        </a>
      </p>
      <p>
        Medical Director: Dr. Emily Farias, MD · Texas Medical License W1781
      </p>
    </LegalPage>
  );
}
