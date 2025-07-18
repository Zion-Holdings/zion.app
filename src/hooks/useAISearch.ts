import { useState } from 'react''
import { TALENT_PROFILES } from '@/data/talentData'
import { JOB_POSTS } from '@/data/jobsData'
import { PROJECTS } from '@/data/projectsData';
'
export interface SearchResult {
  id: "string
  type: 'talent' | 'job' | 'project,
  title: string"
  description: "string
}
interface SearchFilters {";"
  type?: string | null
  skills?: string[] | null;
  location?: string | null"
  budget?: { min: "number; max: number } | null