<<<<<<< HEAD
import React from 'react';
import { NextSeo } from '@/components/NextSeo'
import { Button } from '@/components/ui/button'
import { generateBookPdf } from '@/utils/generateBookPdf;;
'
export default function ZionBook(): ;
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
export default function ZionBook(): unknown {): unknown {): unknown {): unknown {): unknown {) {;
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
        title="Zion OS Book"
        description="Founder story and platform philosophy.";
=======
;
  const handlePrint: unknown = () => {;''
    window.print();
  };
;''
  return (;;
    <div className="min-h-screen bg-background prose lg:prose-xl font-serif mx-auto p-8">;";";";""
      <NextSeo;";";";";""
        title="Zion OS Book";";";";";""
        description="Founder story and platform philosophy.";"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      />;
      <h1>Zion OS Book</h1>;
      <blockquote>;
        We didnt build a startup. We built a civilization protocol.;
      </blockquote>;
<<<<<<< HEAD
      <h2>Chapter 1 – The Why</h2>;
=======
;
      <h2>Chapter 1  The Why</h2>;
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      <ul>;
        <li>Origin story</li>;
        <li>Vision: AI + Talent + Trust</li>;
      </ul>;
<<<<<<< HEAD
      <h2>Chapter 2 – The Blueprint</h2>;
=======
;
      <h2>Chapter 2  The Blueprint</h2>;
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      <ul>;
        <li>Zion OS architecture</li>;
        <li>Marketplace, DAO, AI, Token, Academy</li>;
      </ul>;
<<<<<<< HEAD
      <h2>Chapter 3 – Manifesto & Constitution</h2>;
=======
;
      <h2>Chapter 3  Manifesto & Constitution</h2>;
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      <ul>;
        <li>Published values</li>;
        <li>Founding principles</li>;
      </ul>;
<<<<<<< HEAD
      <h2>Chapter 4 – Design Evolution</h2>;
=======
;
      <h2>Chapter 4  Design Evolution</h2>;
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      <ul>;
        <li>Figma timeline</li>;
        <li>Screenshots per module</li>;
      </ul>;
<<<<<<< HEAD
      <h2>Chapter 5 – Global Footprint</h2>;
=======
;
      <h2>Chapter 5  Global Footprint</h2>;
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      <ul>;
        <li>Multiverse map</li>;
        <li>Talent reach + ecosystem metrics</li>;
      </ul>;
<<<<<<< HEAD
      <h2>Chapter 6 – Road to v10</h2>;
      <ul>;
        <li>Roadmap</li>;"
        <li>DAO votes</li>;";"
        <li>Zion’s future as protocol, not platform</li>;"
      </ul>;"
;"
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
      <h2>Chapter 6  Road to v10</h2>;
      <ul>;
        <li>Roadmap</li>;""
        <li>DAO votes</li>;";""
        <li>Zions future as protocol, not platform</li>;";";""
      </ul>;";";";""
;";";";";""
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
