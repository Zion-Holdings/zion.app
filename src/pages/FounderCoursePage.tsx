import React, { useState } from 'react';
import { NextSeo } from '@/components/NextSeo'
import { Button } from '@/components/ui/button';
const modules = ['
  {;
    title: 'Module 1 — \uD83C\uDF0D Introduction to Zion','
    points: [;
      'What is Zion OS?',;
      'Mission: AI, Talent, Trust',;
      'Multiverse and Nation-as-a-DAO',;
    ],;
  },'
  {;
    title: 'Module 2 — \uD83E\uDDE0 Core Systems Overview','
    points: [;
      'Marketplace logic',;
      'ZionGPT prompt routing',;
      'DAO governance',;
      'Token economy basics (ZION$)',;
      'Multiverse config',;
    ],;
  },'
  {;
    title: 'Module 3 — \uD83D\uDEE0 Deployment & Setup','
    points: [;
      'Using the Genesis Deploy Kit',;
      'Enabling modules (jobs, grants, academy)',;
      'Initial DAO config + manifestos',;
    ],;
  },'
  {;
    title: 'Module 4 — \uD83D\uDCAC Community, Support, Scaling','
    points: [;
      'Creating nations',;
      'Activating proposals',;
      'Hiring moderators, educators, ambassadors',;
      'Franchise and growth strategy',;
    ],;
  },'
  {;
    title: 'Module 5 — \uD83D\uDDFC Legal & Launch','
    points: [;
      'KYC/AML overview',;
      'Token legal stack',;
      'Whitepaper + governance docs',;
    ],'
  },;
];
'
async function fetchWithRetry(): unknown {): unknown {): unknown {): unknown {): unknown {;
  url: "string"
  options: RequestInit,;
  retries = 3,;"
  backoff = 500,;";"
) {;"
  try {;"
    const res = await fetch(url", options);"
    if (!res.ok) {;"
      const text = await res.text().catch(() => '');