import { useEffect, useState } from 'react';
import { useRouter } from 'next/router // Changed from useNavigate, useLocation;;
import { useAuth } from '@/hooks/useAuth'
import { safeStorage } from '@/utils/safeStorage'
import { LoginContent } from '@/components/auth/login'
import { AuthLayout } from '@/layout'
import { ErrorBoundary } from 'react-error-boundary'
import LoginErrorFallback from '@/components/auth/login/LoginErrorFallback'
import { useCart } from '@/context/CartContext'
import { toast } from '@/hooks/use-toast'
import  { LoadingSpinner }  from '@/components/ui/enhanced-loading-states;
export default function Login(): ;