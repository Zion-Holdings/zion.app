import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface UserTrustData {
  id: number;
  name: string | null;
  email: string | null;
  trustScore: number | null;
  operatorGptAnalysis: string | null;
  trustScoreId: number | null;
  trustScoreUpdatedAt: string | null;
}

interface ApiResponse {
  data: UserTrustData[];
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

const AdminTrustScoresPage: React.FC = () => {
  const [usersTrustData, setUsersTrustData] = useState<UserTrustData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [limit] = useState<number>(10); // Items per page

  useEffect(() => {
    const fetchTrustScores = async (page: number) => {
      setLoading(true);
      setError(null);
      try {
        // IMPORTANT: This admin secret should be handled securely,
        // ideally via an auth context or environment variable for client-side calls if absolutely necessary,
        // but it's best if admin API calls are made from a secure backend context or with proper session management.
        // For this example, we are simulating a header.
        const adminSecret = process.env.NEXT_PUBLIC_ADMIN_SECRET_KEY || "your-dev-secret"; // Fallback for dev

        const response = await fetch(`/api/admin/trust-scores?page=${page}&limit=${limit}`, {
          headers: {
            'Content-Type': 'application/json',
            'X-Admin-Secret': adminSecret
          }
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || `Failed to fetch trust scores: ${response.status}`);
        }
        const result: ApiResponse = await response.json();
        setUsersTrustData(result.data);
        setTotalPages(result.totalPages);
        setCurrentPage(result.page);
      } catch (err: any) {
        console.error("Error fetching trust scores:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrustScores(currentPage);
  }, [currentPage, limit]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (loading) return <div className="container mx-auto p-4 text-center">Loading trust scores...</div>;
  if (error) return <div className="container mx-auto p-4 text-center text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard: User Trust Scores</h1>
        <p className="text-gray-600">Overview of all user trust scores and GPT analysis.</p>
      </header>

      {usersTrustData.length === 0 && !loading && (
        <p className="text-center text-gray-700">No user trust data found.</p>
      )}

      {usersTrustData.length > 0 && (
        <>
          <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            <table className="min-w-full table-auto">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">User ID</th>
                  <th className="px-4 py-3 text-left font-semibold">Name</th>
                  <th className="px-4 py-3 text-left font-semibold">Email</th>
                  <th className="px-4 py-3 text-left font-semibold">Trust Score</th>
                  <th className="px-4 py-3 text-left font-semibold">GPT Analysis Summary</th>
                  <th className="px-4 py-3 text-left font-semibold">Last Updated</th>
                  <th className="px-4 py-3 text-left font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {usersTrustData.map((user) => (
                  <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-100 transition-colors">
                    <td className="px-4 py-3">{user.id}</td>
                    <td className="px-4 py-3">{user.name || 'N/A'}</td>
                    <td className="px-4 py-3">{user.email || 'N/A'}</td>
                    <td className={`px-4 py-3 font-medium ${
                      user.trustScore === null ? 'text-gray-400' :
                      user.trustScore > 85 ? 'text-green-600' :
                      user.trustScore > 70 ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {user.trustScore !== null ? `${user.trustScore}/100` : 'N/A'}
                    </td>
                    <td className="px-4 py-3 text-sm italic truncate" style={{maxWidth: '250px'}} title={user.operatorGptAnalysis || undefined}>
                      {user.operatorGptAnalysis ?
                       (user.operatorGptAnalysis.length > 70 ? user.operatorGptAnalysis.substring(0, 70) + '...' : user.operatorGptAnalysis)
                       : 'N/A'}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      {user.trustScoreUpdatedAt ? new Date(user.trustScoreUpdatedAt).toLocaleDateString() : 'N/A'}
                    </td>
                    <td className="px-4 py-3">
                      <Link href={`/admin/trust-history/${user.id}`} legacyBehavior>
                        <a className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">View History</a>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          <div className="mt-6 flex justify-between items-center">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            <span className="text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        </>
      )}
       <footer className="mt-12 text-center text-sm text-gray-500">
        Zion Admin Trust Management System
      </footer>
    </div>
  );
};

export default AdminTrustScoresPage;
