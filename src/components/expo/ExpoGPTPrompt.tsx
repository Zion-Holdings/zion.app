export function ExpoGPTPrompt() {
  return (
    <section className="py-12 bg-background text-center" id="gpt-prompt">
      <div className="container mx-auto px-4 space-y-4">
        <h2 className="text-3xl font-bold">Ask ZionGPT</h2>
        <p className="text-lg">
          Summarize today’s top 3 Zion Expo highlights, including multiverse launches, DAO decisions, and global talent trends.
        </p>
        <textarea
          className="w-full max-w-xl mx-auto p-4 border rounded-md"
          rows={4}
          defaultValue="Multiverse Alpha launched with new funding..."
        />
      </div>
    </section>
  );
}
