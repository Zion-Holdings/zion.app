import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Free IT/AI Strategy Consultation | Zion Tech Group',
  description:
    'Book a free IT/AI strategy consultation with Zion Tech Group. Same-day proposal roadmap, ROI outline, and implementation plan for your business.',

};

export default function ConsultationPage() {
  redirect('/consulting/');
}
