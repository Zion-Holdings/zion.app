import React from 'react';
import { NextSeo } from '@/components/NextSeo'
import { Button } from '@/components/ui/button'
import { generateBookPdf } from '@/utils/generateBookPdf;;
'
export default function ZionBook(): ;
  const handleDownload = async () => {;
    const blob = await generateBookPdf()'
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a')'
    link.href = url;
    link.download = 'zion-os-book.pdf;