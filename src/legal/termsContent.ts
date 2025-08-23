export interface TermsSection {
  id: string;
  title: string;
  content: string;
}

export const TERMS_SECTIONS: TermsSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    content:
      `<p>Welcome to Zion Tech Group. These Terms of Service govern your use of our marketplace platform.</p>`
  },
  {
    id: "accounts",
    title: "Accounts",
    content:
      `<p>You must create an account to access certain features of the platform. You are responsible for keeping your login credentials secure.</p>`
  },
  {
    id: "payments",
    title: "Payments",
    content:
      `<p>All transactions are processed securely. You agree to provide accurate billing details and comply with our payment policies.</p>`
  },
  {
    id: "prohibited",
    title: "Prohibited Activities",
    content:
      `<p>Users may not engage in fraudulent, abusive, or illegal activity while using the platform.</p>`
  },
  {
    id: "termination",
    title: "Termination",
    content:
      `<p>We may suspend or terminate your account if you violate these terms or engage in activities that harm the platform or other users.</p>`
  },
  {
    id: "contact",
    title: "Contact Us",
    content:
      `<p>If you have questions about these Terms of Service, contact us at <a href="mailto:support@ziontechgroup.com">support@ziontechgroup.com</a>.</p>`
  }
];
