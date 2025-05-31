import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Changed import
import Link from 'next/link';
import TrustScoreBadge from '../../../components/TrustScoreBadge'; // Adjust path as needed

// Define interfaces for the data structures based on your API and Prisma schema
interface TrustScoreComponent {
  id: number;
  componentType: string;
  value: number;
  weight: number;
  details?: any; // JSON field
  createdAt: string;
}

interface TrustScoreData {
  id: number;
  score: number;
  userId: number;
  operatorGptAnalysis?: string | null;
  components: TrustScoreComponent[];
  createdAt: string;
  updatedAt: string;
}

interface TrustScoreHistoryEntry {
  id: number;
  userId: number;
  trustScoreId?: number | null;
  score: number;
  operatorGptAnalysis?: string | null;
  changedAt: string;
  reasonForChange?: string | null;
  componentValues?: any; // JSON field
}

const UserProfileTrustPage: React.FC = () => {
  const { id: userId } = useParams<{ id: string }>(); // Changed to useParams, assuming route is /profile/:id/trust

  const [trustScoreData, setTrustScoreData] = useState<TrustScoreData | null>(null);
  const [history, setHistory] = useState<TrustScoreHistoryEntry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showCalculationDetails, setShowCalculationDetails] = useState<boolean>(false);

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
        // Fetch Trust Score
        const scoreRes = await fetch(`/api/trust/score/${userId}`);
        if (!scoreRes.ok) {
          const scoreErrorData = await scoreRes.json();
          throw new Error(scoreErrorData.error || `Failed to fetch trust score: ${scoreRes.status}`);
        }
        const scoreData: TrustScoreData = await scoreRes.json();
        setTrustScoreData(scoreData);

        // Fetch Trust History
        const historyRes = await fetch(`/api/trust/history/${userId}`);
        if (!historyRes.ok) {
          const historyErrorData = await historyRes.json();
          throw new Error(historyErrorData.error || `Failed to fetch trust history: ${historyRes.status}`);
        }
        const historyData: TrustScoreHistoryEntry[] = await historyRes.json();
        setHistory(historyData);

      } catch (err: any) {
        console.error("Error fetching trust data:", err);
        setError(err.message || "An unexpected error occurred.");
        setTrustScoreData(null); // Clear data on error
        setHistory([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  const getRiskStatus = (score: number | undefined | null): string => {
    if (score === null || score === undefined) return 'Status Unknown';
    if (score > 85) return 'High Trust';
    if (score > 70) return 'Moderate Trust';
    return 'Risk Alert';
  };

  const riskStatusColor = (score: number | undefined | null): string => {
    if (score === null || score === undefined) return 'text-gray-500';
    if (score > 85) return 'text-green-700';
    if (score > 70) return 'text-yellow-700';
    return 'text-red-700';
  }

  if (loading) return <div className="container mx-auto p-4 text-center">Loading trust profile...</div>;
  if (error) return <div className="container mx-auto p-4 text-center text-red-500">Error: {error}</div>;
  if (!trustScoreData) return <div className="container mx-auto p-4 text-center">No trust score data found for this user.</div>;

  return (
    <div className="container mx-auto p-4 space-y-8">
      <header className="text-center">
        <h1 className="text-3xl font-bold mb-4">Zion Trust Profile</h1>
        {trustScoreData && <TrustScoreBadge score={trustScoreData.score} tooltipText={trustScoreData.operatorGptAnalysis || 'View detailed analysis.'} />}
      </header>

      {trustScoreData && trustScoreData.score < 70 && (
        <div className="my-4 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 rounded-md">
          <p className="font-semibold">Your Trust Score is {trustScoreData.score}.</p>
          <p>If you believe there might be an error or wish to provide context for a recent drop, you can
            <Link href="/trust-appeal" legacyBehavior>
              <a className="text-yellow-800 hover:text-yellow-900 underline font-medium ml-1">submit an appeal</a>
            </Link>.
          </p>
        </div>
      )}

      <section className="p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-3">Trust Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-lg">
              <strong>Overall Score:</strong> <span className={`font-bold text-xl ${riskStatusColor(trustScoreData.score)}`}>{trustScoreData.score}/100</span>
            </p>
            <p className="text-lg">
              <strong>Status:</strong> <span className={`font-semibold ${riskStatusColor(trustScoreData.score)}`}>{getRiskStatus(trustScoreData.score)}</span>
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-md">
            <h3 className="text-xl font-semibold mb-2">Operator GPT Analysis</h3>
            <p className="text-gray-700 italic">
              {trustScoreData.operatorGptAnalysis || 'No analysis available.'}
            </p>
          </div>
        </div>
      </section>

      <section className="p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-3">Trust Metrics Breakdown</h2>
        <div className="p-4 border rounded-md bg-gray-50 text-center text-gray-600 mb-6">
          [Radar Graph for Trust Metrics will be displayed here]
          <p className="text-sm mt-2">(Placeholder for graphical representation of trust components)</p>
        </div>

        <div>
          <button
            onClick={() => setShowCalculationDetails(!showCalculationDetails)}
            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {showCalculationDetails ? 'Hide' : 'Show'} Calculation Details
          </button>
          {showCalculationDetails && (
            <div className="p-4 border rounded-md bg-gray-50">
              <h3 className="text-xl font-semibold mb-3 text-gray-700">How Your Score is Calculated:</h3>
              {trustScoreData.components && trustScoreData.components.length > 0 ? (
                <ul className="space-y-3">
                  {trustScoreData.components.map(comp => (
                    <li key={comp.id} className="p-4 bg-white rounded-md shadow border border-gray-200">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800 capitalize">{comp.componentType.replace(/([A-Z])/g, ' $1').trim()}:</span>
                        <span className="text-gray-700 font-semibold">{comp.value.toFixed(2)}</span>
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        <span>(Weight: {(comp.weight * 100).toFixed(0)}%)</span>
                        {comp.details && typeof comp.details === 'object' && comp.details.normalized !== undefined && (
                           <span className="ml-2 text-gray-400">(Normalized: {Number(comp.details.normalized).toFixed(2)})</span>
                        )}
                      </div>
                      {comp.details && (
                        <div className="mt-2 p-2 bg-gray-100 rounded">
                           <p className="text-xs text-gray-600">Details: {JSON.stringify(comp.details)}</p>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">No component data available.</p>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="p-6 bg-white shadow-lg rounded-lg mt-8">
        <h2 className="text-2xl font-semibold mb-3">Trust Score History</h2>
        {history.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Score</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Reason for Change</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Analysis Snapshot</th>
                </tr>
              </thead>
              <tbody>
                {history.map((entry) => (
                  <tr key={entry.id} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">{new Date(entry.changedAt).toLocaleDateString()}</td>
                    <td className="border border-gray-300 px-4 py-2">{entry.score}</td>
                    <td className="border border-gray-300 px-4 py-2">{entry.reasonForChange || 'N/A'}</td>
                    <td className="border border-gray-300 px-4 py-2 text-sm italic">{entry.operatorGptAnalysis || 'N/A'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>No trust score history available for this user.</p>
        )}
      </section>

      <footer className="text-center text-sm text-gray-500 mt-8">
        Zion Trust System v1.0
      </footer>
    </div>
  );
};

export default UserProfileTrustPage;
