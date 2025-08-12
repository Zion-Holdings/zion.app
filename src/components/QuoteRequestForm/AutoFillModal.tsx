import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface AutoFillModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (description: string) => void;
  loading: boolean;
}

export function AutoFillModal({
  open,
  onOpenChange,
  onSubmit,
  loading,
}: AutoFillModalProps) {
  const [description, setDescription] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (loading) {
      setProgress(0);
      const id = setInterval(() => {
        setProgress((p) => (p >= 90 ? 90 : p + 10));
      }, 300);
      return () => clearInterval(id);
    }
    if (!loading) {
      setProgress(100);
    }
    return undefined;
  }, [loading]);

  const handleSubmit = () => {
    if (!description.trim()) return;
    onSubmit(description);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-zion-blue border-zion-blue-light">
        <DialogHeader>
          <DialogTitle className="text-white text-lg">
            Describe your project
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Brief project description"
            className="min-h-32 bg-zion-blue-dark border-zion-blue-light text-white"
          />
          {loading && <Progress value={progress} />}
        </div>
        <DialogFooter className="mt-4">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="border-zion-blue-light text-white hover:bg-zion-blue-light"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={loading || !description.trim()}
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
          >
            {loading ? "Matching..." : "Continue"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
