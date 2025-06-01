import { Loader2 } from 'lucide-react';

export default function LoaderOverlay() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <Loader2 className="h-12 w-12 animate-spin text-primary" />
    </div>
  );
}
