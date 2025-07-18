<<<<<<< HEAD
import React from 'react';';
import { SeverityIndicator } from '@/components/ui/severity-indicator;'
;''
interface SeverityDisplayProps {;;
  _severity: "string;";"
};
;
export const _SeverityDisplay: unknown React.FC<SeverityDisplayProps> = ({;""
  severity,;";""
}) => {;";";""
  return (;";";";""
    <SeverityIndicator;";";";";""
      severity={severity as 'safe' | 'suspicious' | 'dangerous'};'
      showIcon={true};
      showText={true};''
    />;
  );
};''
''''''
=======
import React from 'react'
import { SeverityIndicator } from '@/components/ui/severity-indicator'
'
interface SeverityDisplayProps {'
  _severity: "string

export const _SeverityDisplay: unknown React.FC<SeverityDisplayProps> = ({"
  severity,;"
}) => {;";"
  return (;";"
    <SeverityIndicator;";""
      severity={severity as 'safe' | 'suspicious' | 'dangerous'}'
      showIcon={true};
      showText={true}'
    />'
  );
}'
'''''';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
