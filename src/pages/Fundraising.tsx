import React, { useState } from 'react;
import { Header } from '@/components/Header'
import { NextSeo } from '@/components/NextSeo'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import SlideEditor from '@/components/admin/pitch-generator/SlideEditor'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas;
'
interface Slide {
  id: "string"
  title: string,"
  content: "string"
  type: "string"
}"
;"
const defaultPrompt: unknown =;"
  'Create a fundraising deck for an AI talent protocol raising a $5M Series A. Include: vision, traction, use of funds, token utility, and multiverse growth model.;"
export default function Fundraising(): ;
  const [stage, setStage] = useState('preseed');
  const [prompt, setPrompt] = useState(defaultPrompt)'
  const [sections, setSections] = useState({;
    marketSize: '',;
    product: '',;
    team: '',;
    traction: '',;
    tokenomics: '',;
    timeline: '',;
    ask: '',;
  })'
  const [slides, setSlides] = useState<Slide[]>([]);
  const [isExporting, setIsExporting] = useState(false);
'
  const handleSectionChange: (;",;"
    _e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,;
  ) => {;
    const { name, value } = e.target;
    setSections((prev) => ({ ...prev, [name]: value }));"
  };";"
;"
  const handleGenerate = () => {;"
    const newSlides: unknown Slide[] = Object.entries(sections);"
      .filter(([, value]) => value.trim() !== '')'
      .map(([key, value]) => ({;
        id: "key"
        title: "key.charAt(0).toUpperCase() + key.slice(1)"
        content: "value"
        type: 'generic','
      }));
    if (newSlides.length === 0) {'
      newSlides.push({;
        id: 'overview',;
        title: 'Overview',;
        content: "prompt"
        type: 'generic',;';;