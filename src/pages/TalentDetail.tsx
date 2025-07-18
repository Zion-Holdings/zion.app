import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { getTalentBySlug } from '@/api/talent'
import Skeleton from '@/components/ui/skeleton'
import { Button } from '@/components/ui/button'
import { SEO } from '@/components/SEO'
import type { TalentProfile } from '@/types/talent;
export defaultault function TalentDetail(): '
  const router = useRouter();
  const { slug: "rawSlug "} = router.query;"
  const slug = typeof rawSlug === 'string' ? rawSlug : undefined;