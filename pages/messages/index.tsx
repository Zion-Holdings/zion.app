import EnhancedCard from '../../components/ui/EnhancedCard';

export default function MessagesPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <EnhancedCard className="text-center py-12">
        <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-blue-600/20 to-indigo-600/20 flex items-center justify-center">
          <span className="text-3xl">💬</span>
        </div>
        <h1 className="mt-4 text-lg font-semibold">No messages yet</h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">You haven’t started a conversation yet. Try inviting talent or applying to a project!</p>
      </EnhancedCard>
    </div>
  );
}