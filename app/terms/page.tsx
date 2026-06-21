import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service | SereniDrip IV Hydration",
  description:
    "The terms and conditions for using the SereniDrip IV Hydration website and wellness services in Edinburg, TX.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" lastUpdated="June 21, 2026">
      <h2>Acceptance of Terms</h2>
      <p>
        Welcome to SereniDrip IV Hydration (“SereniDrip,” “we,” “our,” or “us”).
        By accessing or using our website, scheduling services, or receiving
        treatment, you agree to be bound by these Terms of Service.
      </p>
      <p>
        If you do not agree to these Terms, please do not use our website or
        services.
      </p>

      <h2>Services Provided</h2>
      <p>
        SereniDrip IV Hydration provides wellness services, including but not
        limited to:
      </p>
      <ul>
        <li>IV hydration therapy</li>
        <li>Vitamin infusions</li>
        <li>Wellness injections</li>
        <li>Nutrient supplementation</li>
        <li>Mobile and in-clinic wellness services</li>
      </ul>
      <p>
        All services are subject to medical screening, provider approval, and
        applicable laws and regulations.
      </p>

      <h2>Medical Disclaimer</h2>
      <p>
        The information provided on our website is for educational and
        informational purposes only and is not intended to replace professional
        medical advice, diagnosis, or treatment.
      </p>
      <p>No information on this website should be interpreted as medical advice.</p>
      <p>
        Always consult with a qualified healthcare provider regarding any medical
        condition or treatment decision.
      </p>
      <p>
        Use of this website does not create a provider-patient relationship. A
        provider-patient relationship is established only after completion of
        required medical screening, consent forms, and approval by a qualified
        healthcare provider.
      </p>

      <h2>Eligibility for Services</h2>
      <p>To receive treatment, you must:</p>
      <ul>
        <li>
          Be at least 18 years of age or have a parent/legal guardian present.
        </li>
        <li>Complete all required medical forms honestly and accurately.</li>
        <li>Provide complete health history information.</li>
        <li>
          Meet eligibility requirements as determined by the supervising medical
          provider.
        </li>
      </ul>
      <p>
        SereniDrip reserves the right to decline treatment when medically
        appropriate.
      </p>

      <h2>Appointments and Cancellations</h2>
      <p>
        Appointments may be scheduled online, by phone, or through approved
        booking platforms.
      </p>
      <p>
        We request at least 24 hours’ notice for cancellations or rescheduling.
      </p>
      <p>
        SereniDrip reserves the right to charge cancellation, no-show, or travel
        fees where permitted by law and disclosed at the time of booking.
      </p>

      <h2>Payment Terms</h2>
      <p>
        Payment is due at the time services are rendered unless otherwise agreed.
      </p>
      <p>
        We accept approved payment methods as displayed at booking or service
        locations.
      </p>
      <p>SereniDrip does not guarantee insurance reimbursement for services.</p>
      <p>Clients are responsible for all charges associated with services received.</p>

      <h2>No Guarantee of Results</h2>
      <p>Individual results vary.</p>
      <p>SereniDrip makes no guarantees regarding:</p>
      <ul>
        <li>Specific health outcomes</li>
        <li>Symptom improvement</li>
        <li>Athletic performance</li>
        <li>Energy levels</li>
        <li>Wellness benefits</li>
      </ul>
      <p>
        Treatment results depend on individual circumstances and health
        conditions.
      </p>

      <h2>Website Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the website for unlawful purposes.</li>
        <li>Attempt to gain unauthorized access to systems or data.</li>
        <li>Introduce malicious software or harmful code.</li>
        <li>Copy, reproduce, or distribute website content without permission.</li>
      </ul>
      <p>We reserve the right to suspend access for violations of these Terms.</p>

      <h2>Intellectual Property</h2>
      <p>
        All website content, including logos, graphics, text, designs, branding,
        and marketing materials, is the property of SereniDrip IV Hydration unless
        otherwise noted. Unauthorized use is prohibited.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        Our website may contain links to third-party websites, scheduling
        platforms, payment processors, or social media pages.
      </p>
      <p>
        We are not responsible for the content, privacy practices, or policies of
        third-party services. Use of third-party platforms is subject to their
        respective terms and policies.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, SereniDrip IV Hydration, its
        owners, employees, contractors, medical providers, and affiliates shall
        not be liable for any indirect, incidental, consequential, special, or
        punitive damages arising from:
      </p>
      <ul>
        <li>Use of the website</li>
        <li>Reliance on website information</li>
        <li>Appointment scheduling</li>
        <li>Delays or interruptions of service</li>
        <li>Use of wellness services</li>
      </ul>
      <p>
        Nothing in these Terms limits rights that cannot legally be limited under
        applicable law.
      </p>

      <h2>Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless SereniDrip IV Hydration, its
        employees, contractors, providers, and affiliates from claims, damages,
        losses, liabilities, and expenses arising from your violation of these
        Terms or misuse of our services.
      </p>

      <h2>Privacy</h2>
      <p>
        Your use of our website and services is also governed by our{" "}
        <Link href="/privacy">Privacy Policy</Link> and{" "}
        <Link href="/notice-of-privacy-practices">
          Notice of Privacy Practices
        </Link>
        .
      </p>

      <h2>Modifications</h2>
      <p>We reserve the right to update or modify these Terms at any time.</p>
      <p>Changes become effective upon posting to our website.</p>
      <p>
        Continued use of the website or services after changes are posted
        constitutes acceptance of the revised Terms.
      </p>

      <h2>Governing Law</h2>
      <p>
        These Terms shall be governed by and interpreted in accordance with the
        laws of the State of Texas, without regard to conflict of law principles.
      </p>
      <p>
        Any disputes arising from these Terms shall be resolved in the appropriate
        courts located in Texas.
      </p>

      <h2>Contact Information</h2>
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

      <h2>Important Notice</h2>
      <p className="font-medium text-ink">
        IV hydration therapy and wellness services are elective wellness services
        and are not intended to diagnose, treat, cure, or prevent any disease
        unless specifically directed by a licensed healthcare provider. Medical
        eligibility for treatment is determined on a case-by-case basis by the
        supervising provider and clinical staff.
      </p>
    </LegalPage>
  );
}
