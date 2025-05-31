import React from 'react';

export const WalletIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.25H3M21 12.25a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12.25m18 0V6.75a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6.75v5.5M21 12.25c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 12.25m0 0V6.75m18 5.5V6.75m0 5.5H3m18-5.5a2.25 2.25 0 0 0-2.25-2.25H5.25a2.25 2.25 0 0 0-2.25 2.25m15 0H3" />
  </svg>
);
