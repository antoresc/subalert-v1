import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR TERMS & SERVICES — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple Terms & Services for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Contact information: marc@shipfa.st
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - Ownership: when buying a package, users can download code to create apps. They own the code but they do not have the right to resell it. They can ask for a full refund within 7 day after the purchase.
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Link to privacy-policy: https://shipfa.st/privacy-policy
// - Governing Law: France
// - Updates to the Terms: users will be updated by email

// Please write a simple Terms & Services for my site. Add the current date. Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Terms and Conditions | ${config.appName}`,
  canonicalUrlRelative: "/tos",
});

const TOS = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Terms and Conditions for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Last Updated: December 20, 2024

Terms & Services
Effective Date: December 20, 2024

Welcome to SubAlert. By using our website and services at subalert.org, you agree to the following Terms & Services. If you do not agree with these terms, please do not use our services.

1. General Information

Website Owner: SubAlert
Contact Information: asksubalert@gmail.com
Description of Services: SubAlert helps users track recurring expenses, sends alerts before renewals, and provides tools to manage their finances effortlessly.

2. Ownership

By purchasing or subscribing to SubAlert, you gain access to our services but do not own the technology behind the app. You retain ownership of your personal data, which we securely manage.

3. Data Collection

Personal Data: We collect your name, email, and payment information to provide our services.
Non-Personal Data: We use web cookies to improve the user experience on subalert.org.
For more details on how we handle your data, please refer to our Privacy Policy.

4. User Responsibilities

You agree to use SubAlert for lawful purposes only.
You are responsible for ensuring the accuracy of your personal information.

5. Governing Law

These terms are governed by the laws of France. Any disputes arising from these terms will be resolved under French jurisdiction.

6. Updates to the Terms

We may update these Terms & Services occasionally. If changes occur, we will notify you by email. The updated terms will also be posted on subalert.org.

7. Disclaimer

SubAlert provides tools for tracking and managing subscriptions but does not guarantee the accuracy of all alerts or notifications. Users are encouraged to review their subscription information independently.

By continuing to use SubAlert, you confirm your agreement to these Terms & Services. For further questions, please contact us at asksubalert@gmail.com.`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;
