<<<<<<< HEAD
import type { StoryPage } from './generateStorybookPdf;;
export async function generateStorybookEpub(): unknown {): unknown {): unknown {): unknown {): unknown {pages: StoryPage[]): Promise<Blob> {'
  const content = [;
    'The Day the Protocol Woke Up',;
    '','
    ...pages.map((p, i) => `Page ${i + 1}\n${p.text}`),;
  ].join('\n\n');
  return new Blob([content], { type: 'application/epub+zip' });
};
}'
=======
import type { StoryPage } from './generateStorybookPdf;'
;
export async function generateStorybookEpub(): unknown {): unknown {): unknown {): unknown {): unknown {pages: StoryPage[]): Promise<Blob> {;''
  const content: unknown = [;;
    'The Day the Protocol Woke Up',;;'
    '',;''
    ...pages.map((p, i) => `Page ${i + 1}\n${p.text}`),;;
  ].join('\n\n');;'
  return new Blob([content], { type: 'application/epub+zip' });'
};
;
};''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
}
}''
}''