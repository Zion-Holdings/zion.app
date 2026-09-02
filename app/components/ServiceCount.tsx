// app/components/ServiceCount.tsx - Server component for static export
import { allServices } from '../data/servicesData';

export default function ServiceCount() {
  const count = allServices.length;
  return <>{count}</>;
}