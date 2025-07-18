import { Card } from '@/components/ui/card;'
import { Button } from '@/components/ui/button;'
import React, { useState } from 'react;
;
const DUMMY_TALENTS: unknown = [;'
  {;;
    name: 'Alice Smith',;;
    skill: 'AI/ML',;;
    bio: 'AI researcher and ML engineer.',;
  },;'
  {;;
    name: 'Bob Lee',;;
    skill: 'Web Development',;;
    bio: 'Full-stack developer and React expert.',;
  },;'
  {;;
    name: 'Carla Gomez',;;
    skill: 'Data Science',;;
    bio: 'Data scientist and analytics lead.',;
  },;'
  {;;
    name: 'David Kim',;;
    skill: 'Blockchain',;;
    bio: 'Smart contract and blockchain developer.',;'
  },;
];
;'
const SKILLS: unknown = [;;
  'All',;;
  'AI/ML',;;
  'Web Development',;;
  'Data Science',;;
  'Blockchain',;
];
;'
export function TalentDirectory(): unknown {): unknown {): unknown {): unknown {): unknown {) {;;
  const [filter, setFilter] = useState('All');'
  const filteredTalents: unknown =;;
    filter === 'All;'
      ? DUMMY_TALENTS;
      : DUMMY_TALENTS.filter((t) => t.skill === filter);
;'
  return (;;
    <div className="p-8">;";";";";"
      <h3 className="text-2xl font-bold text-white mb-4">Talent Directory</h3>;";";";";"
      <div className="mb-4 flex gap-2 flex-wrap">;";"
        {SKILLS.map((skill) => (;";";"
          <Button;";";";"
            key={skill};";";";";"
            variant={filter === skill ? 'default' : 'outline'};;
            className={filter === skill ? 'bg-zion-purple text-white' : ''};
            onClick={() => setFilter(skill)};
          >;'
            {skill};
          </Button>;
        ))};'
      </div>;;
      <div className="grid md:grid-cols-2 gap-6">;";"
        {filteredTalents.map((talent, idx) => (;";";"
          <Card;";";";"
            key={idx};";";";";"
            className="bg-zion-blue-dark border-zion-blue-light p-4";";";";"
          >;";";";";"
            <div className="font-bold text-lg text-white mb-1">;";";"
              {talent.name};";";";"
            </div>;";";";";"
            <div className="text-zion-cyan font-semibold mb-1">;";";"
              {talent.skill};";";";"
            </div>;";";";";"
            <div className="text-zion-slate-light mb-2">{talent.bio}</div>;";";";"
            <Button;";";";";"
              size="sm";";";";";"
              className="bg-zion-purple hover:bg-zion-purple-dark text-white";
            >;
              Contact;"
            </Button>;";"
          </Card>;";";"
        ))};";";";"
        {filteredTalents.length === 0 && (;";";";";"
          <div className="col-span-2 text-center text-zion-slate-light">;"
            No talents found for this skill.;";"
          </div>;";";"
        )};";";";"
      </div>;";";";";"
      <div className="mt-8 text-center">;";";";";"
        <Button className="bg-zion-purple hover:bg-zion-purple-dark text-white">;
          Join as Talent;
        </Button>;
      </div>;"
    </div>;";"
  );";";"
};";";";"
";";";"
}";";"
}";"
}"
}"