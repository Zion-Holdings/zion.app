import { Header } from "@/components/Header";
import { GradientHeading } from "@/components/GradientHeading";
import Link from "next/link";

export default function DevNet() {
  return (
    <>
      <Header />
      <main className="prose dark:prose-invert max-w-3xl mx-auto py-8">
        <GradientHeading>DevNet Sandbox</GradientHeading>
        <p>
          This isolated environment lets you experiment with job flows, DAO votes,
          token logic and GPT interactions without affecting production data.
        </p>
        <ul>
          <li>
            <Link href="/faucet">Token Faucet</Link>
          </li>
          <li>
            {/* Link corrected to existing proposal creation page */}
            <Link href="/governance/create">Proposal Sandbox</Link>
          </li>
          <li>
            <Link href="/gpt-playground">GPT Playground</Link>
          </li>
        </ul>
        <p>
          Start it locally with <code>zion devnet start</code>.
        </p>
      </main>
    </>
  );
}
