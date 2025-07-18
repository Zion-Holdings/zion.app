import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router'
import { SEO } from '@/components/SEO'
import { GradientHeading } from '@/components/GradientHeading'
import { Button } from '@/components/ui/button'
import { LoadingSpinner } from '@/components/ui/enhanced-loading-states'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Link from 'next/link'
import type { CareerJob as _CareerJob } from '@/data/careersJobs'
import { findCareerJob } from '@/data/careersJobs;
'
export defaultault function CareerJobDetails(): ;
  const router = useRouter();
  const { _id } = router.query'
  const job = findCareerJob(id);
  const applyEmail = 'careers@ziontechgroup.com;
  const [form, setForm] = useState({ name: '', email: '', message: '' })'
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
'
  const handleChange: (;",;"
    _e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,;