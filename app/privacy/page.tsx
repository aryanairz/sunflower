import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy | SereniDrip IV Hydration",
  description:
    "How SereniDrip IV Hydration in Edinburg, TX collects, uses, and protects the personal information you share through our website and services.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="June 21, 2026">
      <p>
        Welcome to SereniDrip IV Hydration (“SereniDrip,” “we,” “our,” or “us”).
        We are committed to protecting your privacy and safeguarding the personal
        information you share with us through our website and services.
      </p>
      <p>
        By using our website, you agree to the terms outlined in this Privacy
        Policy.
      </p>

      <h2>Information We Collect</h2>
      <p>We may collect the following types of information:</p>

      <h3>Personal Information</h3>
      <p>
        When you contact us, schedule an appointment, complete forms, or request
        information, we may collect:
      </p>
      <ul>
        <li>Name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Date of birth</li>
        <li>Address</li>
        <li>Medical information voluntarily provided by you</li>
        <li>Any information submitted through online forms</li>
      </ul>

      <h3>Automatically Collected Information</h3>
      <p>When you visit our website, we may automatically collect:</p>
      <ul>
        <li>IP address</li>
        <li>Browser type</li>
        <li>Device information</li>
        <li>Pages visited</li>
        <li>Date and time of website access</li>
        <li>Website usage data through cookies and analytics tools</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>We may use your information to:</p>
      <ul>
        <li>Schedule and manage appointments</li>
        <li>Communicate regarding services and treatment</li>
        <li>Respond to inquiries</li>
        <li>Provide customer support</li>
        <li>Improve our website and services</li>
        <li>Meet legal and regulatory obligations</li>
        <li>Send important updates related to our services</li>
      </ul>
      <p>We do not sell your personal information to third parties.</p>

      <h2>Medical Information and HIPAA</h2>
      <p>
        As a healthcare-related provider, we take reasonable measures to protect
        your health information.
      </p>
      <p>
        Any Protected Health Information (PHI) collected as part of your treatment
        may be subject to applicable federal and state privacy laws, including the
        Health Insurance Portability and Accountability Act (HIPAA), when
        applicable. For details on how we handle PHI, please review our{" "}
        <Link href="/notice-of-privacy-practices">
          Notice of Privacy Practices
        </Link>
        .
      </p>
      <p>
        Please note that general website inquiries submitted through contact forms
        should not include sensitive medical information unless specifically
        requested through a secure platform.
      </p>

      <h2>Cookies and Analytics</h2>
      <p>Our website may use cookies and similar technologies to:</p>
      <ul>
        <li>Improve website performance</li>
        <li>Understand visitor behavior</li>
        <li>Enhance user experience</li>
        <li>Analyze website traffic</li>
      </ul>
      <p>
        When you first visit our website, you may choose to accept or decline
        non-essential cookies. You may also disable cookies through your browser
        settings; however, some website features may not function properly.
      </p>

      <h2>Third-Party Services</h2>
      <p>We may use third-party providers for services such as:</p>
      <ul>
        <li>Appointment scheduling</li>
        <li>Payment processing</li>
        <li>Email communications</li>
        <li>Website hosting</li>
        <li>Analytics</li>
      </ul>
      <p>
        These providers may have access to information necessary to perform their
        services but are obligated to protect your information.
      </p>

      <h2>Information Sharing</h2>
      <p>We may disclose information:</p>
      <ul>
        <li>With your consent</li>
        <li>To healthcare providers involved in your care</li>
        <li>To comply with legal requirements</li>
        <li>To protect our rights, property, or safety</li>
        <li>As otherwise permitted or required by law</li>
      </ul>

      <h2>Data Security</h2>
      <p>
        We implement reasonable administrative, technical, and physical safeguards
        designed to protect personal information from unauthorized access,
        disclosure, alteration, or destruction.
      </p>
      <p>
        However, no method of electronic transmission or storage is completely
        secure, and we cannot guarantee absolute security.
      </p>

      <h2>Your Rights</h2>
      <p>You may request to:</p>
      <ul>
        <li>Access your personal information</li>
        <li>Correct inaccurate information</li>
        <li>Request deletion of information when permitted by law</li>
        <li>Opt out of certain communications</li>
      </ul>
      <p>To make a request, please contact us using the information below.</p>

      <h2>Children’s Privacy</h2>
      <p>
        Our website is not intended for children under the age of 13. We do not
        knowingly collect personal information from children without parental
        consent.
      </p>

      <h2>External Links</h2>
      <p>
        Our website may contain links to third-party websites. We are not
        responsible for the privacy practices or content of external websites.
      </p>

      <h2>Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with an updated effective date.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions regarding this Privacy Policy, please contact:
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
    </LegalPage>
  );
}
