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
      `<p>Welcome to Zion Tech Group. By accessing the marketplace you agree to these Terms of Service which form a binding agreement between you and Zion Tech Group.</p>`
  },
  {
    id: "accounts",
    title: "Accounts",
    content:
      `<p>When you create an account you must provide accurate information and keep your login credentials confidential. You are responsible for all activity under your account.</p>`
  },
  {
    id: "payments",
    title: "Payments",
    content:
      `<p>Transactions are processed through our payment partners. By making a purchase you authorize us to charge your chosen payment method for any applicable fees.</p>`
  },
  {
    id: "prohibited",
    title: "Prohibited Activities",
    content:
      `<p>You may not use the marketplace for any unlawful purpose or to violate the rights of others. We reserve the right to remove content that violates these terms.</p>`
  },
  {
    id: "termination",
    title: "Termination",
    content:
      `<p>We may suspend or terminate your access if you breach these Terms or engage in conduct that harms the platform or other users.</p>`
  },
  {
    id: "contact",
    title: "Contact Us",
    content:
      `<p>If you have questions about these Terms, please contact us at <a href="mailto:legal@ziontechgroup.com">legal@ziontechgroup.com</a>.</p>`
  }
];
