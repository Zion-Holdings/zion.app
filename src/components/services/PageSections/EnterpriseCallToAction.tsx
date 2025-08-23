
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function EnterpriseCallToAction() {
  return (
    <div className="mt-12 text-center">
      <Link href="/request-quote">
        <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white text-lg py-6 px-8">
          Get Custom Enterprise Quote
        </Button>
      </Link>
      <p className="mt-4 text-zion-slate-light">
        Need volume pricing or custom SLAs? Contact our enterprise sales team.
      </p>
    </div>
  );
}
