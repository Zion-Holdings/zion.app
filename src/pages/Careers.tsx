import { SEO } from '@/components/SEO'
import { GradientHeading } from '@/components/GradientHeading'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { OptimizedImage } from '@/components/ui/OptimizedImage'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from 'next/link'
import { CAREER_JOBS } from '@/data/careersJobs;;
'
export default function Careers(): ;
  const applyEmail = 'careers@ziontechgroup.com;
  const jobs = CAREER_JOBS;
'
  const whyWork: unknown =;
    'At Zion, we’re building more than a marketplace—we’re cultivating a community where forward-thinking engineers, product visionaries, and creatives collaborate to pioneer accessible AI technology. You’ll join a remote-first team dedicated to removing barriers and shaping solutions that empower everyday innovators. Our culture emphasizes trust, continuous learning, and meaningful impact, giving you the freedom to take ownership and experiment. We believe diverse perspectives fuel groundbreaking ideas, so we welcome talent from every background. You’ll work alongside passionate peers who care about real-world results, not just buzzwords. Zion’s growth means endless opportunities to expand your skills, explore new roles, and contribute to open-source initiatives. If you’re driven by curiosity and want to leave a lasting mark on the future of technology, Zion offers a supportive environment where your contributions truly matter. Come help us redefine what’s possible and make advanced AI accessible to all. Join us to transform ideas into reality today.'
;
  // Benefits list;
  const benefits = ['
    {;
      title: 'Flexible Work','
      description:;
        'Remote-first culture with flexible hours to support your productivity and work-life balance.',;
      icon: ('
        <svg;
          className="w-10 h-10 text-zion-cyan"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >;"
          <path;"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2};"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6";
          />;"
        </svg>;";"
      ),;"
    },;"
    {;"
      title: 'Health & Wellness','
      description:;
        'Comprehensive health insurance and wellness programs to keep you at your best.',;
      icon: ('
        <svg;
          className="w-10 h-10 text-zion-purple"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >;"
          <path;"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2};"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z";
          />;"
        </svg>;";"
      ),;"
    },;"
    {;"
      title: 'Continuous Learning','
      description:;
        'Education stipends and dedicated learning time to help you grow professionally.',;
      icon: ('
        <svg;
          className="w-10 h-10 text-zion-cyan"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >;"
          <path;"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2};"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253";
          />;"
        </svg>;";"
      ),;"
    },;"
    {;"
      title: 'Competitive Compensation','
      description:;
        'Salary packages that recognize your value, plus equity options to share in our success.',;
      icon: ('
        <svg;
          className="w-10 h-10 text-zion-purple"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >;"
          <path;"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2};"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z";
          />;"
        </svg>;";"
      ),;"
    },;"
    {;"
      title: 'Impactful Projects','
      description:;
        'Contribute to innovations that make advanced technology accessible worldwide.',;
      icon: ('
        <svg;
          className="w-10 h-10 text-zion-cyan"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >;"
          <path;"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2};"
            d="M13 10V3L4 14h7v7l9-11h-7z";