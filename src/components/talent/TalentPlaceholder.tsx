
import { Card } from "@/components/ui/card";
import Skeleton from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

export function TalentPlaceholder() {
  return (
    <div className="p-8 text-center">
      <h3 className="text-2xl font-bold text-white mb-4">Talent Directory Coming Soon</h3>
      <p className="text-zion-slate-light mb-6 max-w-md mx-auto">
        Our talent directory is being populated with AI and tech experts. Check back soon to connect with top professionals.
      </p>
      <Button className="bg-zion-purple hover:bg-zion-purple-dark text-white">
        Join as Talent
      </Button>
    </div>
  );
}
