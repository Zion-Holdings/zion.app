<<<<<<< HEAD
import React from 'react';
import { NextSeo } from '@/components/NextSeo'
import { Button } from '@/components/ui/button'
import { generateBookPdf } from '@/utils/generateBookPdf;;
'
export default function BookBuilder(): ;
  const handleDownload = async () => {;
    const blob = await generateBookPdf()'
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a')'
    link.href = url;
    link.download = 'zion-os-book.pdf;
=======
import React from 'react';';
import { NextSeo } from '@/components/NextSeo;'';
import { Button } from '@/components/ui/button;'';
import { generateBookPdf } from '@/utils/generateBookPdf;'
;'';
export default function BookBuilder(): unknown {): unknown {): unknown {): unknown {): unknown {) {;
  const handleDownload: unknown = async () => {;
    const blob: unknown = await generateBookPdf();''
    const url: unknown = URL.createObjectURL(blob);;
    const link: unknown = document.createElement('a');''
    link.href = url;;
    link.download = 'zion-os-book.pdf;'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
<<<<<<< HEAD
  const handlePrint = () => {'
    window.print();
  };
'
  return (;
    <div className="min-h-screen bg-background prose lg:prose-xl font-serif mx-auto p-8">;"
      <NextSeo;"
        title="Zion OS Book Builder"
        description="Auto-layout hardcover edition."
      />;"
      <h1>Zion OS: Building the Civilization Protocol</h1>;"
      <p className="text-xl italic">AI. Talent. Trust.</p>;"
      <blockquote>;";"
        “We didn’t build a startup. We built a civilization protocol.”;"
      </blockquote>;"
;"
      <h2>Intro – Founder's Story</h2>;
=======
;
  const handlePrint: unknown = () => {;''
    window.print();
  };
;''
  return (;;
    <div className="min-h-screen bg-background prose lg:prose-xl font-serif mx-auto p-8">;";";";""
      <NextSeo;";";";";""
        title="Zion OS Book Builder";";";";";""
        description="Auto-layout hardcover edition.";";";""
      />;";";";""
      <h1>Zion OS: Building the Civilization Protocol</h1>;";";";";""
      <p className="text-xl italic">AI. Talent. Trust.</p>;""
      <blockquote>;";""
        We didnt build a startup. We built a civilization protocol.;";";""
      </blockquote>;";";";""
;";";";";""
      <h2>Intro  Founder's Story</h2>;'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      <ul>;
        <li>Early vision and motivations</li>;
        <li>Community roots</li>;
      </ul>;
<<<<<<< HEAD
      <h2>Chapter 1 – Marketplace as OS</h2>;
=======
;
      <h2>Chapter 1  Marketplace as OS</h2>;
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      <ul>;
        <li>Decentralized commerce layers</li>;
        <li>Trustless onboarding</li>;
      </ul>;
<<<<<<< HEAD
      <h2>Chapter 2 – ZionGPT + The AI State</h2>;
=======
;
      <h2>Chapter 2  ZionGPT + The AI State</h2>;
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      <ul>;
        <li>Decentralized intelligence replaces central authority</li>;
        <li>Autonomous agents coordinate the network</li>;
      </ul>;
<<<<<<< HEAD
      <h2>Chapter 3 – The Tokenized Workforce</h2>;
=======
;
      <h2>Chapter 3  The Tokenized Workforce</h2>;
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      <ul>;
        <li>On-chain credentials</li>;
        <li>Work marketplace incentives</li>;
      </ul>;
<<<<<<< HEAD
      <h2>Chapter 4 – The Multiverse & Digital Nations</h2>;
=======
;
      <h2>Chapter 4  The Multiverse & Digital Nations</h2>;
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      <ul>;
        <li>Cross-chain identity</li>;
        <li>Immersive virtual economies</li>;
      </ul>;
<<<<<<< HEAD
      <h2>Chapter 5 – ZionDAO + The Constitution</h2>;
=======
;
      <h2>Chapter 5  ZionDAO + The Constitution</h2>;
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      <ul>;
        <li>Community law and governance</li>;
        <li>On-chain proposals</li>;
      </ul>;
<<<<<<< HEAD
      <h2>Chapter 6 – Building a Post-Platform World</h2>;
=======
;
      <h2>Chapter 6  Building a Post-Platform World</h2>;
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      <ul>;
        <li>Protocol over platform philosophy</li>;
        <li>Roadmap to v10</li>;
      </ul>;
<<<<<<< HEAD
      <h2>Appendix – Protocol Maps & Timelines</h2>;
      <ul>'
        <li>Architecture diagrams</li>;
        <li>Key governance votes</li>;
      </ul>'
;
      <div className="not-prose mt-8 flex gap-4">;"
        <Button onClick={handleDownload}>Download PDF</Button>;"
        <Button variant="outline" onClick={handlePrint}>;
          Print;
        </Button>;
      </div>;"
    </div>;";"
  );"
};"
"
}"
}";"
}"
}"
=======
;
      <h2>Appendix  Protocol Maps & Timelines</h2>;
      <ul>;''
        <li>Architecture diagrams</li>;
        <li>Key governance votes</li>;
      </ul>;''
;;
      <div className="not-prose mt-8 flex gap-4">;";";";""
        <Button onClick={handleDownload}>Download PDF</Button>;";";";";""
        <Button variant="outline" onClick={handlePrint}>;"
          Print;
        </Button>;
      </div>;""
    </div>;";""
  );";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
