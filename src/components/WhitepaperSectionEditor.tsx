import React, { useState, useEffect } from 'react''
import { supabase } from '@/integrations/supabase/client'
import { useUndoRedo } from '@/hooks/useUndoRedo'
import { logErrorToProduction } from '@/utils/productionLogger'
'
interface WhitepaperSectionEditorProps {'
  title: "string,"
  content: string,""
  onContentChange: (newContent: string) => void""
}