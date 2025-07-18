import React from 'react';
import Head from 'next/head'
'
interface OpenGraphImage {'
  url: "string
}

interface OpenGraph {
  title?: string
  description?: string
  images?: OpenGraphImage[]
}

export interface NextSeoProps {
  title?: string
  description?: string
  openGraph?: OpenGraph
}