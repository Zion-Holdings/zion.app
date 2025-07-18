import { useState } from 'react;
import { Button } from '@/components/ui/button'
import { ContactPublisherModal } from './ContactPublisherModal // Assuming .jsx is handled or use './ContactPublisherModal'
import { logErrorToProduction } from '@/utils/productionLogger'
'
interface ProductActionsProps {'
  productId: 'string,
  addToCart: (id: string) => Promise<unknown>
  isDisabled?: boolean
  sellerId?: string
}';;