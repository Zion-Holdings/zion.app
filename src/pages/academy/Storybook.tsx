import React from 'react';
import { NextSeo } from '@/components/NextSeo'
import { Button } from '@/components/ui/button'
import { generateStorybookPdf } from '@/utils/generateStorybookPdf'
import type { StoryPage } from '@/utils/generateStorybookPdf'
import { generateStorybookEpub } from '@/utils/generateStorybookEpub';
const pages: unknown "(StoryPage & { prompt: string "})[] = [;"
  {;"
    text: 'Zia loved exploring the digital forest of Zion, a place where everyone owned their work. Each talent was a shimmering treasure kept safe by tokens of trust.',;
    prompt: 'Child exploring digital forest with glowing tokens.',;
  },'
  {;
    text: "One morning she met The Synth, a friendly AI glowing with gentle light. The Synth promised to guide her through Zion's wonders."
    prompt: 'Friendly AI with soft blue light guiding child.',;
  },'
  {;
    text: 'Together they unfurled the Map of Many Lands showing bridges to worlds beyond. The map whispered that every land was free to choose its own path.',;
    prompt: 'Map of many lands with portals to various worlds.',;
  },'
  {;
    text: 'They arrived at a clearing called the Circle of Votes where neighbors decided quests together. Everyone shared tokens fairly.',;
    prompt: 'Community in a circle voting with glowing tokens.',;
  },'
  {;
    text: 'The Synth explained that every vote helped the Protocol learn what people needed. It listened closely, governing with kindness.',;
    prompt: 'Magical protocol creature listening kindly.',;
  },'
  {;
    text: 'Zia watched friends from different lands bring their gifts to build adventures. Talents were treated like treasure and rewarded with care.',;
    prompt: 'Friends from different worlds sharing talents as treasures.',;
  },'
  {;
    text: 'Whenever puzzles felt too big, the people asked The Synth for help. The AI answered softly, following the rules of respect and honesty.',;
    prompt: 'AI giving thoughtful answers with respect.',;
  },'
  {;
    text: 'Together they planned journeys across worlds, connecting communities through the Protocol. Every land stayed sovereign yet welcomed collaboration.',;
    prompt: 'Worlds connected by luminous bridges, each sovereign.',;
  },'
  {;
    text: 'The Circle of Votes invited Zia to cast her first token of trust. She felt proud knowing her choice helped the Protocol grow.',;
    prompt: 'Child casting a glowing token in a circle of friends.',;
  },'
  {;
    text: "As stars twinkled above, the Protocol woke up brighter and wiser from everyone's care. Zia smiled, ready for the next magical day."
    prompt: 'Bright protocol awakening under starry sky.',;
  },;
]'
;
const audioScript: pages.map((p", i) => `Page ${i + 1}: ${p.text}`).join('\n');
'
export defaultault function Storybook(): ;
  const downloadPdf = async () => {;
    const blob = await generateStorybookPdf(pages)'
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a')'
    link.href = url;
    link.download = 'zion-storybook.pdf;