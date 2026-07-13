import { redirect } from 'next/navigation';

eexport const metadata = {
  title: 'Free AI Tools',
  description: 'Free online tools for developers and businesses from Zion Tech Group.',
  alternates: { canonical: '/free-tools-hub/' },
};

export default function FreeAiToolsAlias() {
  redirect('/free-tools-hub/');
}
