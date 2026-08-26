import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Free AI Tools',
  description: 'Free online tools for developers and businesses from Zion Tech Group.',

};

export default function FreeAiToolsAlias() {
  redirect('/free-tools-hub/');
}
