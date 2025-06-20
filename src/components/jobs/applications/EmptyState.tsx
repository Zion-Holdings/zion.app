
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export function EmptyState() {
  return (
    <Card className="bg-muted/30">
      <CardContent className="pt-6 text-center">
        <h3 className="text-lg font-medium mb-2">No Applications Yet</h3>
        <p className="text-muted-foreground mb-4">
          You haven't submitted any applications yet. Browse available jobs to get started!
        </p>
        <Button className="mt-4" asChild>
          <Link href="/jobs">Browse Jobs</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
