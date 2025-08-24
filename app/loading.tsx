export default function Loading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-500 mx-auto mb-8"></div>
        <h2 className="text-2xl font-bold text-white mb-4">Loading Zion Tech Group</h2>
        <p className="text-gray-400">Preparing the future...</p>
      </div>
    </div>
  );
}