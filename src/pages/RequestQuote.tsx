
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteRequestForm } from "@/components/QuoteRequestForm";

export default function RequestQuote() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-zion-blue">
        <QuoteRequestForm />
      </div>
      <Footer />
    </>
  );
}
