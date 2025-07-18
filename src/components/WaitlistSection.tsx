import React from 'react'
import { useState } from 'react''
import { Button } from '@/components/ui/button'
import { GradientHeading } from '@/components/GradientHeading'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'
import { Checkbox } from '@/components/ui/checkbox'
'
export function WaitlistSection(): '
  const [email, setEmail] = useState('')'
  const [name, setName] = useState('')'
  const [role, setRole] = useState('')'
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { _toast } = useToast();
  const handleSubmit = async (_e: React.FormEvent) => {'
    e.preventDefault()'

    if (!email || !name || !role || !agreeTerms) {'
      toast({'
        variant: 'destructive','
        title: 'Missing information','
        description: 'Please fill all fields and agree to the terms.','