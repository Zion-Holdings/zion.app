import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Changed import
import Link from 'next/link';

// Define interfaces based on your data structure
interface UserDetails {
  id: number;
  name: string | null;
  email: string | null;
  createdAt: string;
}

interface TrustScoreComponent {
  id: number;
  componentType: string;
  value: number;
  weight: number;
  details?: any;
}

interface CurrentTrustScore {
  id: number;
  score: number;
  operatorGptAnalysis?: string | null;
  updatedAt: string;
  components: TrustScoreComponent[];
}

interface TrustScoreHistoryEntry {
  id: number;
  score: number;
  operatorGptAnalysis?: string | null;
  changedAt: string;
  reasonForChange?: string | null;
  componentValues?: any; // JSON from Prisma
}

const AdminUserTrustHistoryPage: React.FC = () => {
  const { userId } = useParams<{ userId: string }>(); // Changed to useParams

  const [user, setUser] = useState<UserDetails | null>(null);
  const [currentScore, setCurrentScore] = useState<CurrentTrustScore | null>(null);
  const [history, setHistory] = useState<TrustScoreHistoryEntry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) { // userId from useParams is already a string or undefined
      setLoading(false);
      setError("User ID not found in URL.");
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        // Fetch User Details (assuming an endpoint or direct Supabase call)
        // For this example, we'll mock it or assume it's part of another fetch.
        // Ideally, you'd have an API like /api/user/[userId]
        const userRes = await fetch(`/api/user/${userId}`); // Placeholder, this API needs to exist
        if (!userRes.ok) {
          const userErrorData = await userRes.json();
          // If user API doesn't exist, we can try to get user details from other sources or show limited info
          console.warn("Failed to fetch user details, attempting to proceed:", userErrorData.error || userRes.status);
          // setUser(null); // Or set some default user data if needed
        } else {
           const userData: UserDetails = await userRes.json();
           setUser(userData);
        }


        // Fetch Current Trust Score with Components
        const scoreRes = await fetch(`/api/trust/score/${userId}`);
        if (!scoreRes.ok) {
          const scoreErrorData = await scoreRes.json();
          if (scoreRes.status !== 404) { // Don't throw for 404, just means no score yet
            throw new Error(scoreErrorData.error || `Failed to fetch current trust score: ${scoreRes.status}`);
          }
          setCurrentScore(null);
        } else {
          const scoreData: CurrentTrustScore = await scoreRes.json();
          setCurrentScore(scoreData);
        }


        // Fetch Trust History
        const historyRes = await fetch(`/api/trust/history/${userId}`);
        if (!historyRes.ok) {
          const historyErrorData = await historyRes.json();
           if (historyRes.status !== 404) { // Don't throw for 404
            throw new Error(historyErrorData.error || `Failed to fetch trust history: ${historyRes.status}`);
           }
           setHistory([]);
        } else {
          const historyData: TrustScoreHistoryEntry[] = await historyRes.json();
          setHistory(historyData);
        }

      } catch (err: any) {
        console.error("Error fetching user trust details:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  // Fallback for user data if the /api/user/:id endpoint isn't set up
  const displayName = user?.name || `User ID: ${userId}`;
  const displayEmail = user?.email || 'Email not available';

  if (loading) return <div className="container mx-auto p-4 text-center">Loading user trust history...</div>;
  if (error && !currentScore && history.length === 0) return <div className="container mx-auto p-4 text-center text-red-500">Error: {error}</div>;
  // Allow page to render if some data is available even if one endpoint fails (e.g. user details)

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <header className="mb-8">
        <Link href="/admin/trust-scores" legacyBehavior>
          <a className="text-blue-600 hover:text-blue-800 hover:underline mb-2 inline-block">&larr; Back to All Trust Scores</a>
        </Link>
        <h1 className="text-3xl font-bold text-gray-800">Trust Profile: {displayName}</h1>
        <p className="text-gray-600">Email: {displayEmail}</p>
      </header>

      {/* Current Trust Score Section */}
      <section className="mb-8 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Current Trust Score</h2>
        {currentScore ? (
          <div>
            <p className="text-xl"><strong>Score:</strong> <span className="font-bold">{currentScore.score}/100</span></p>
            <p className="mt-2"><strong>Operator GPT Analysis:</strong> <em className="text-gray-600">{currentScore.operatorGptAnalysis || 'N/A'}</em></p>
            <p className="text-sm text-gray-500 mt-1">Last Updated: {new Date(currentScore.updatedAt).toLocaleString()}</p>

            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Active Components:</h3>
            {currentScore.components && currentScore.components.length > 0 ? (
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentScore.components.map(comp => (
                  <li key={comp.id} className="p-3 bg-gray-100 rounded-md border border-gray-200">
                    <span className="font-medium text-gray-800">{comp.componentType}:</span> {comp.value.toFixed(2)} (Weight: {comp.weight*100}%)
                    {comp.details && <pre className="mt-1 text-xs bg-gray-200 p-2 rounded overflow-auto">{JSON.stringify(comp.details, null, 2)}</pre>}
                  </li>
                ))}
              </ul>
            ) : <p className="text-gray-600">No active components found for the current score.</p>}
          </div>
        ) : (
          <p className="text-gray-600">No current trust score data available for this user.</p>
        )}
      </section>

      {/* Trust Score History Section */}
      <section className="p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Trust Score History</h2>
        {history.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-300">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="border px-4 py-2 text-left">Changed At</th>
                  <th className="border px-4 py-2 text-left">Score</th>
                  <th className="border px-4 py-2 text-left">Reason for Change</th>
                  <th className="border px-4 py-2 text-left">GPT Analysis Snapshot</th>
                  {/* <th className="border px-4 py-2 text-left">Component Values (JSON)</th> */}
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {history.map((entry) => (
                  <tr key={entry.id} className="hover:bg-gray-50 transition-colors">
                    <td className="border px-4 py-2">{new Date(entry.changedAt).toLocaleString()}</td>
                    <td className="border px-4 py-2 font-medium">{entry.score}</td>
                    <td className="border px-4 py-2">{entry.reasonForChange || 'N/A'}</td>
                    <td className="border px-4 py-2 text-sm italic">{entry.operatorGptAnalysis || 'N/A'}</td>
                    {/* <td className="border px-4 py-2">
                      <pre className="text-xs max-h-24 overflow-auto bg-gray-50 p-1 rounded">{JSON.stringify(entry.componentValues, null, 2)}</pre>
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-600">No trust score history found for this user.</p>
        )}
         {error && <p className="text-red-500 mt-4">Note: There might be additional errors fetching some data: {error}</p>}
      </section>
       <footer className="mt-12 text-center text-sm text-gray-500">
        Zion Admin Trust Management System
      </footer>
    </div>
  );
};

export default AdminUserTrustHistoryPage;
