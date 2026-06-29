import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Sunflower Ranch collects, uses, and protects the information you share through our website and contact form.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="June 2026">
      <p>
        Sunflower Ranch (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
        respects your privacy. This policy explains what information we collect
        through this website, how we use it, and the choices you have. By using
        this site or submitting our contact form, you agree to the practices
        described here.
      </p>

      <div>
        <h2>Information We Collect</h2>
        <p>
          When you submit our contact form, we collect the details you provide:
          your name, email address, phone number, the type of event, your
          preferred date, and any message you include. We do not collect payment
          information through this website.
        </p>
      </div>

      <div>
        <h2>How We Use Your Information</h2>
        <p>
          We use the information you share only to respond to your inquiry, check
          availability, and coordinate the details of your event. We do not sell,
          rent, or trade your information to anyone.
        </p>
      </div>

      <div>
        <h2>How the Form Is Processed</h2>
        <p>
          Our contact form is processed through Netlify, the service that hosts
          this website. The information you submit is delivered to us so we can
          follow up with you. Their handling of that data is governed by their
          own privacy practices.
        </p>
      </div>

      <div>
        <h2>Cookies and Tracking</h2>
        <p>
          This website does not use advertising or third-party tracking cookies.
          We are interested in helping you plan an event, not in following you
          around the web.
        </p>
      </div>

      <div>
        <h2>Data Retention</h2>
        <p>
          We keep inquiry messages only as long as needed to respond to you and
          manage your event. You may ask us to delete your information at any
          time.
        </p>
      </div>

      <div>
        <h2>Your Choices</h2>
        <p>
          If you would like us to update or remove the information you have
          shared, contact us and we will take care of it.
        </p>
      </div>

      <div>
        <h2>Contact Us</h2>
        <p>
          Questions about this policy? Call us at{" "}
          <a href={PHONE_HREF}>{PHONE}</a> or email{" "}
          <a href={EMAIL_HREF}>{EMAIL}</a>.
        </p>
      </div>
    </LegalPage>
  );
}
