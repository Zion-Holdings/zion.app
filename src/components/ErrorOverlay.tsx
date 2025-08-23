import { Button } from '@/components/ui/button';

interface Props {
  error: any;
  onClose: () => void;
}

export default function ErrorOverlay({ error, onClose }: Props) {
  const message = error?.message || 'An unexpected error occurred';
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 text-white">
      <div className="bg-destructive text-destructive-foreground p-6 rounded shadow-lg max-w-sm text-center">
        <p className="mb-4 break-words">{message}</p>
        <Button onClick={onClose}>Dismiss</Button>
      </div>
    </div>
  );
}
