<<<<<<< HEAD
import React from 'react';
import { useRouter }  from 'next/router;;
export default function NationDashboard(): ;;
  const router = useRouter()'
  const { _slug } = router.query as { slug?: string };
  if (!slug) return null;
'
  return (;
    <div className="container mx-auto py-8 space-y-6">;"
      <h1 className="text-3xl font-bold text-white">Dashboard for {slug}</h1>;"
      <ul className="list-disc pl-6 text-gray-300 space-y-2">;
=======
import React from 'react';';
import { useRouter } from 'next/router;'
;
export default function NationDashboard(): unknown {): unknown {): unknown {): unknown {): unknown {) {;
  const router: unknown = useRouter();''
  const { _slug } = router.query as { slug?: string };
  if (!slug) return null;
;''
  return (;;
    <div className="container mx-auto py-8 space-y-6">;";";";";""
      <h1 className="text-3xl font-bold text-white">Dashboard for {slug}</h1>;";";";";""
      <ul className="list-disc pl-6 text-gray-300 space-y-2">;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
        <li>Population metrics</li>;
        <li>Talent vs. Client ratio</li>;
        <li>Nation currency details</li>;
        <li>Editable roadmap</li>;
        <li>DAO proposals for this nation</li>;
<<<<<<< HEAD
      </ul>;"
    </div>;";"
  );"
};"
;"
NationDashboard.displayName = 'NationDashboard;

}'
=======
      </ul>;""
    </div>;";""
  );";";""
};";";";""
;";";";";""
NationDashboard.displayName = 'NationDashboard;'

};''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
}
}''
}''