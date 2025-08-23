import { Button } from '@/components/ui/button';

export function ExportsSection() {
  const items = [
    'Auto-email summary to attendees',
    'Web3 wallet connect for VIP streams',
    'Claimable NFT ticket & proof-of-attendance'
  ];
  return (
    <section className="py-12 bg-zion-blue-light text-foreground" id="exports">
      <div className="container mx-auto px-4 space-y-6 text-center">
        <h2 className="text-3xl font-bold">Exports</h2>
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item} className="text-lg">
              {item}
            </li>
          ))}
        </ul>
        <Button>Send Summary</Button>
      </div>
    </section>
  );
}
