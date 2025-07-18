import React from 'react';
import { getBadgeMeta } from './badgeConfig;'
import type { BadgeKey } from './badgeConfig;
;
interface BadgeEarnedProps {;
  badge: BadgeKey;
  size?: number;
  showName?: boolean;
  showDesc?: boolean;
  earnedDate?: string;
};
;
export const _BadgeEarned: unknown React.FC<BadgeEarnedProps> = ({;
  badge,;
  size = 44,;
  showName = true,;
  showDesc = false,;
  earnedDate,;
}) => {;
  const meta: unknown = getBadgeMeta(badge);'
  if (!meta) return null;
  const Icon: unknown = meta.icon;
;'
  return (;;
    <div className="flex flex-col items-center text-center gap-1 px-2">;";";"
      <div;";";";"
        style={{;";";";";"
          background: "meta.bg",;";";";";"
          borderRadius: '9999px',;;
          width: "size",;";";";";"
          height: "size",;";";";";"
          display: 'flex',;;
          alignItems: 'center',;;
          justifyContent: 'center',;'
        }};;
        className="shadow hover-scale";
        title={meta.name};
      >;"
        <Icon color={meta.color} size={size * 0.7} />;";"
      </div>;";";"
      {showName && (;";";";"
        <span;";";";";"
          className="text-xs font-semibold mt-1";";";";";"
          style={{ color: "meta.color "}};
        >;"
          {meta.name};";"
        </span>;";";"
      )};";";";"
      {earnedDate && (;";";";";"
        <span className="text-[10px] text-gray-400">{earnedDate}</span>;";";"
      )};";";";"
      {showDesc && (;";";";";"
        <span className="text-xs text-zion-slate-light">;
          {meta.description};
        </span>;
      )};"
    </div>;";"
  );";";"
};";";";"
"""""