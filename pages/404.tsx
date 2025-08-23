import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Custom404() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/marketplace/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 text-center">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">404 - Page Not Found</h1>
      <form onSubmit={handleSearch} className="w-full max-w-xs mb-6 space-y-3">
        <Input
          type="text"
          placeholder="Search the marketplace..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit" className="w-full">Search</Button>
      </form>
      <Button asChild variant="outline">
        <Link to="/marketplace">Back to Marketplace</Link>
      </Button>
    </main>
  );
}
