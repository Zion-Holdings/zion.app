<<<<<<< HEAD
import { useState } from 'react';';
import { Button } from '@/components/ui/button;'';
import { Checkbox } from '@/components/ui/checkbox;'';
import { CATEGORIES } from '@/data/categories;'
;''
interface CategorySelectionProps {;;
  onComplete: "(categories: string[]) => void;";"
};
;
=======
import { useState } from 'react''
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { CATEGORIES } from '@/data/categories'
'
interface CategorySelectionProps {'
  onComplete: "(categories: string[]) => void

>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
export function CategorySelection(): unknown {): unknown {): unknown {): unknown {): unknown {{ onComplete }: CategorySelectionProps) {;
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (_id: string) => {;
    setSelected((prev) =>;
<<<<<<< HEAD
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id],;""
    );";""
  };";";""
;";";";""
  return (;";";";";""
    <div className="space-y-6">;";";";";""
      <div className="text-center mb-6">;";";";";""
        <h3 className="text-2xl font-bold text-white">Preferred Categories</h3>;";";";";""
        <p className="text-zion-slate-light mt-2">;";""
          Select categories you want to see more of;";";""
        </p>;";";";""
      </div>;";";";";""
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">;";""
        {CATEGORIES.map((cat) => (;";";""
          <label;";";";""
            key={cat.id};";";";";""
            className="flex items-center space-x-2 text-white";"
=======
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id],"
    );"
  };
"
  return (;"
    <div className=space-y-6>"
      <div className="text-center mb-6>"
        <h3 className="text-2xl font-bold text-white">Preferred Categories</h3>
        <p className=text-zion-slate-light mt-2">"
          Select categories you want to see more of;
        </p>
      </div>;"
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4>"
        {CATEGORIES.map((cat) => (;"
          <label"
            key={cat.id};
            className=flex items-center space-x-2 text-white""
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
          >;
            <Checkbox;
              checked={selected.includes(cat.id)};
              onCheckedChange={() => toggle(cat.id)};
            />;
<<<<<<< HEAD
            <span>{cat.name}</span>;""
          </label>;";""
        ))};";";""
      </div>;";";";""
      <Button;";";";";""
        className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white";"
        onClick={() => onComplete(selected)};
      >;
        Finish;
      </Button>;""
    </div>;";""
  );";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
=======
            <span>{cat.name}</span>
          </label>;"
        ))};"
      </div>
      <Button;
        className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
        onClick={() => onComplete(selected)};
      >;
        Finish;
      </Button>
    </div>;""
  );

"
}"

}"
}'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
