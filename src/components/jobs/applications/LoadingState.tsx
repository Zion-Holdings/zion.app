
import { Loader2 } from 'lucide-react/dist/esm/icons/loader2';

export function LoadingState() {
  return (
    <div className="flex justify-center items-center p-8">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  );
}
