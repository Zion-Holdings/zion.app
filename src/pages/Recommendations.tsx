import { useRecommendations } from '@/hooks/useRecommendations';
import { Card, CardContent } from '@/components/ui/card';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function RecommendationsPage() {
  const { recommendations, isLoading, error } = useRecommendations('general');

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan" />
      </div>
    );
  }

  if (error) {
    return <p className="p-4 text-center text-red-500">Failed to load recommendations.</p>;
  }

  return (
    <>
      <Header />
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4 text-white">AI Recommendations</h1>
        <div className="space-y-4">
          {recommendations?.map((rec) => (
            <Card key={rec.id} className="bg-zion-blue-dark border-zion-blue-light text-white">
              <CardContent className="p-4">
                <p className="font-medium">{rec.title}</p>
                <p className="text-sm text-zion-slate-light">{rec.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
