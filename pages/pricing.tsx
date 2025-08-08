export default function Pricing() {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-2xl font-semibold mb-6">Zion Hire AI Pricing</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border rounded p-6">
          <h2 className="font-semibold mb-2">Pay-per-hire</h2>
          <p className="text-sm text-gray-600 mb-4">Pay a success fee when a candidate accepts an offer.</p>
          <ul className="text-sm list-disc ml-4 space-y-1">
            <li>Zero upfront cost</li>
            <li>Fee on hire</li>
            <li>Includes AI screening and matching</li>
          </ul>
        </div>
        <div className="border rounded p-6">
          <h2 className="font-semibold mb-2">SaaS Subscription</h2>
          <p className="text-sm text-gray-600 mb-4">Unlimited roles and candidates for a flat monthly rate.</p>
          <ul className="text-sm list-disc ml-4 space-y-1">
            <li>Unlimited usage</li>
            <li>Team roles and API access</li>
            <li>Embeddable assistant</li>
          </ul>
        </div>
        <div className="border rounded p-6">
          <h2 className="font-semibold mb-2">Usage Credits</h2>
          <p className="text-sm text-gray-600 mb-4">Buy credits for AI actions. Optional ZION$ token crossover.</p>
          <ul className="text-sm list-disc ml-4 space-y-1">
            <li>Pay-as-you-go</li>
            <li>Volume discounts</li>
            <li>ZION$ incentives (optional)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}