import React from 'react';}
import Sidebar from ../ui/Sidebar';}
import { useRouter } from 'next/router';

interface ModernLayoutProps {
  children: React.ReactNode;
}
;
const ModernLayout: React.FC<ModernLayoutProps> = ({ children }) => {
  const router = useRouter();

  return (</div>
    <div className="flex h-screen bg-gray-50>"</div>
      <Sidebar />"</div>
      <main className="flex-1 overflow-auto""></div>
        <div className="min-h-screen">
          {children}</div>
        </div></div>
      </main></div>
    </div>
  );
};
;}
export default ModernLayout;</div>