import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Notice of Privacy Practices | SereniDrip IV Hydration",
  description:
    "SereniDrip IV Hydration's HIPAA Notice of Privacy Practices: how your protected health information may be used and disclosed, and your rights.",
  path: "/notice-of-privacy-practices",
});

export default function NoticeOfPrivacyPracticesPage() {
  return (
    <LegalPage title="Notice of Privacy Practices" lastUpdated="June 2026">
      <p className="font-medium text-ink">
        THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND
        DISCLOSED AND HOW YOU CAN ACCESS THIS INFORMATION. PLEASE REVIEW IT
        CAREFULLY.
      </p>
      <p>
        At SereniDrip IV Hydration, we are committed to protecting the privacy
        and confidentiality of your health information. This Notice explains how
        we may use and disclose your Protected Health Information (PHI), your
        rights regarding your health information, and our legal responsibilities.
      </p>

      <h2>Our Responsibilities</h2>
      <p>We are required by law to:</p>
      <ul>
        <li>
          Maintain the privacy and security of your Protected Health Information
          (PHI).
        </li>
        <li>
          Provide you with this Notice of our legal duties and privacy practices.
        </li>
        <li>Follow the terms of this Notice currently in effect.</li>
        <li>
          Notify you if a breach occurs that may compromise the privacy or
          security of your information.
        </li>
      </ul>

      <h2>How We May Use and Disclose Your Health Information</h2>
      <p>
        <strong>For Treatment.</strong> We may use and share your health
        information to provide, coordinate, or manage your healthcare services.
        Examples: reviewing your medical history before treatment; consulting with
        physicians, nurse practitioners, or other healthcare providers involved in
        your care; and determining whether IV hydration therapy is appropriate for
        you.
      </p>
      <p>
        <strong>For Payment.</strong> We may use and disclose your information to
        obtain payment for services rendered. Examples: processing payments,
        verifying transactions, and providing receipts and invoices.
      </p>
      <p>
        <strong>For Healthcare Operations.</strong> We may use and disclose
        information for operational purposes, including quality improvement
        activities, staff training and education, compliance reviews, and business
        management and administrative activities.
      </p>
      <p>
        <strong>Appointment Reminders and Service Communications.</strong> We may
        contact you by phone, text message, or email for appointment reminders,
        follow-up care instructions, and service-related updates.
      </p>
      <p>
        <strong>As Required by Law.</strong> We may disclose information when
        required by federal, state, or local law, including public health
        reporting, court orders, law enforcement requests, and government audits
        and investigations.
      </p>
      <p>
        <strong>To Prevent Serious Threats.</strong> We may disclose information
        when necessary to help prevent a serious threat to health or safety.
      </p>

      <h2>Uses and Disclosures Requiring Your Authorization</h2>
      <p>
        We will obtain your written authorization before using or disclosing your
        health information for purposes not described in this Notice, except as
        otherwise permitted by law. You may revoke your authorization at any time
        in writing.
      </p>

      <h2>Your Rights Regarding Your Health Information</h2>
      <p>
        <strong>Right to Access Your Records.</strong> You have the right to
        inspect and obtain a copy of your health records, subject to certain legal
        exceptions.
      </p>
      <p>
        <strong>Right to Request Corrections.</strong> If you believe information
        in your record is inaccurate or incomplete, you may request an amendment.
      </p>
      <p>
        <strong>Right to Request Restrictions.</strong> You may request
        restrictions on certain uses or disclosures of your health information.
        While we will consider your request, we may not always be able to agree to
        it.
      </p>
      <p>
        <strong>Right to Confidential Communications.</strong> You may request that
        we communicate with you through alternative methods or at alternative
        locations (for example, calling only a specific phone number, or sending
        correspondence to a different address).
      </p>
      <p>
        <strong>Right to Receive a Copy of This Notice.</strong> You may request a
        paper or electronic copy of this Notice at any time.
      </p>
      <p>
        <strong>Right to Receive an Accounting of Disclosures.</strong> You may
        request a list of certain disclosures we have made of your health
        information.
      </p>

      <h2>Electronic Communications</h2>
      <p>
        By providing your phone number and email address, you authorize SereniDrip
        IV Hydration to communicate with you regarding appointments, scheduling,
        treatment-related information, and customer service matters. While we take
        reasonable precautions to protect information transmitted electronically,
        no method of electronic communication is completely secure.
      </p>

      <h2>Retention of Records</h2>
      <p>
        We maintain patient records in accordance with applicable federal and
        Texas laws and regulations.
      </p>

      <h2>Changes to This Notice</h2>
      <p>
        We reserve the right to change this Notice at any time. Updated versions
        will be posted on our website and available upon request.
      </p>

      <h2>Questions or Complaints</h2>
      <p>
        If you believe your privacy rights have been violated, you may file a
        complaint with us or with the U.S. Department of Health and Human
        Services. You will not be retaliated against for filing a complaint.
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
      <p>
        <strong>Privacy Officer</strong>
        <br />
        Kat Into
        <br />
        SereniDrip IV Hydration
        <br />
        Phone: <a href="tel:9566550055">(956) 655-0055</a>
        <br />
        Email:{" "}
        <a href="mailto:serenidripivhydration@gmail.com">
          serenidripivhydration@gmail.com
        </a>
      </p>
    </LegalPage>
  );
}
