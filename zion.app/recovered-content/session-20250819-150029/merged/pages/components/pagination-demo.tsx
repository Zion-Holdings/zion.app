import { useState } from 'react';
import Pagination from '../../components/Pagination';

export default function PaginationDemo() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Pagination Component Demo</h1>
        <div className="bg-slate-900 p-8 rounded-lg mb-8">
          <h2 className="text-xl mb-4">Current Page: {currentPage}</h2>
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}

<Link href="/components/form-demo" className="internal-link">Related Content</Link>

<Link href="/components/modal-demo" className="internal-link">Related Content</Link>
