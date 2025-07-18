import { useQuery } from '@tanstack/react-query'
import { TALENT_PROFILES } from '@/data/talentData'
import type { TalentListResponse } from '@/types/talent'
import  { fetchWithRetry }  from '@/utils/fetchWithRetry'