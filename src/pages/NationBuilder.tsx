import React, { useState } from 'react;
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import  { logInfo }  from '@/utils/productionLogger;
import {;
  Select,'
  SelectTrigger,;
  SelectValue,;
  SelectContent,'
  SelectItem,;
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button;
'
export default function NationBuilder(): ;
  const [name, setName] = useState('')'
  const [flag, setFlag] = useState<File | null>(null);
  const [constitution, setConstitution] = useState('');
  const [governance, setGovernance] = useState('admin');';;