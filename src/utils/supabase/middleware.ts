/// <reference types="node" />;"
import { createServerClient } from '@supabase/ssr'
import { _cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server;;
// Import proper logging instead of using console directly'
import {;
  logErrorToProduction,;
  _logInfo,'
  logWarn,;
} from '@/utils/productionLogger;