import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description:
    "The terms that govern your use of the Sunflower Ranch website and inquiries made through it.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="June 2026">
      <p>
        These terms govern your use of the Sunflower Ranch website. By browsing
        this site or sending an inquiry through it, you agree to the terms below.
      </p>

      <div>
        <h2>Use of This Website</h2>
        <p>
          This site is provided for general information about Sunflower Ranch, an
          outdoor event venue in Edinburg, Texas. You agree to use it for lawful
          purposes only and not to interfere with its operation.
        </p>
      </div>

      <div>
        <h2>Bookings and Inquiries</h2>
        <p>
          Submitting our contact form is a request for information, not a
          confirmed booking. Dates are reserved only after we speak with you and
          confirm the details directly. To book or check availability, call{" "}
          <a href={PHONE_HREF}>{PHONE}</a>. Pricing, deposits, and event terms are
          discussed and agreed on at that time.
        </p>
      </div>

      <div>
        <h2>Photos and Content</h2>
        <p>
          The photographs, text, and the Sunflower Ranch name and logo on this
          site are our property. Please do not copy or reuse them without our
          permission.
        </p>
      </div>

      <div>
        <h2>Accuracy</h2>
        <p>
          We work to keep the information on this site current and correct, but we
          do not guarantee that every detail is complete or error-free. Details
          may change, so please confirm specifics with us when you book.
        </p>
      </div>

      <div>
        <h2>Limitation of Liability</h2>
        <p>
          This website is provided as is. To the fullest extent permitted by law,
          Sunflower Ranch is not liable for any damages arising from your use of
          the site or reliance on its content.
        </p>
      </div>

      <div>
        <h2>Governing Law</h2>
        <p>
          These terms are governed by the laws of the State of Texas, without
          regard to its conflict-of-law rules.
        </p>
      </div>

      <div>
        <h2>Changes to These Terms</h2>
        <p>
          We may update these terms from time to time. Any changes take effect
          when posted on this page.
        </p>
      </div>

      <div>
        <h2>Contact Us</h2>
        <p>
          Questions about these terms? Call us at{" "}
          <a href={PHONE_HREF}>{PHONE}</a> or email{" "}
          <a href={EMAIL_HREF}>{EMAIL}</a>.
        </p>
      </div>
    </LegalPage>
  );
}
