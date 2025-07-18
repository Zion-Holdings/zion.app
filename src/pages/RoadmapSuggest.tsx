import React, { useState, useEffect } from 'react;
import { Header } from '@/components/Header'
import { NextSeo } from '@/components/NextSeo'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/hooks/useAuth'
import { toast } from '@/hooks/use-toast'
import Link from 'next/link // Changed from react-router-dom;
import { safeStorage } from '@/utils/safeStorage;
'
interface Suggestion {
  id: "string"
  title: string,"
  description: "string"
}";"
;"
export default function RoadmapSuggestPage(): ;"
  const { _user } = useAuth();"
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('')'
  const [submitted, setSubmitted] = useState<Suggestion[]>(() => {;
    const raw = safeStorage.getItem('feature_requests');';;