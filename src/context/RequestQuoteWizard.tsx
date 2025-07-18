import React, { createContext, useContext, useState, useEffect } from 'react''
import type { ReactNode } from 'react''
import { useRouter } from 'next/router'
import { logErrorToProduction } from '@/utils/productionLogger'
import { toast } from '@/hooks/use-toast'
import axios from 'axios;
export type WizardStep = 'Services' | 'Details' | 'Success'
'
export interface RequestQuoteWizardContextType {
  step: "WizardStep
  selectedService: string | null,
  goToStep: "(step: WizardStep) => void"
  selectService: (serviceId: string) => void
  startQuote: "(serviceId: string) => void"
  submitQuote: (message: string) => Promise<void>
}"
"
const defaultContext: unknown RequestQuoteWizardContextType = {
  step: 'Services','
  selectedService: "null"
  _goToStep: () => {},"
  _selectService: "() => {},
  _startQuote: "() => {"},
  _submitQuote: async () => {"},'';;