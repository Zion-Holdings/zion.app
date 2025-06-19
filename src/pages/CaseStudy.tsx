import Link from "next/link";
import { useRouter } from "next/router";
import { CASE_STUDIES } from "@/data/case-studies";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function CaseStudy() {
  const router = useRouter();
  const { slug } = router.query as { slug?: string };
  const study = CASE_STUDIES.find((s) => s.slug === slug);

  if (!study) {
    return (
      <div className="min-h-screen bg-zion-blue flex items-center justify-center text-white">
        Case study not found.
      </div>
    );
  }

  return (
    <>
      <SEO title={study.title} description={study.excerpt} />
      <div className="min-h-screen bg-zion-blue pt-12 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <Button
            variant="outline"
            className="mb-8 border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
            asChild
          >
            <Link to="/case-studies">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Case Studies
            </Link>
          </Button>
          <img src={study.companyLogo} alt={`${study.company} logo`} className="h-12 mb-4" />
          <h1 className="text-3xl font-bold text-white mb-4">{study.title}</h1>
          <p className="text-zion-slate-light mb-8">{study.excerpt}</p>
          <div className="prose prose-invert" dangerouslySetInnerHTML={{ __html: study.content }} />
          <p className="mt-8 text-white font-semibold">— {study.author}, {study.role}</p>
        </div>
      </div>
    </>
  );
}
