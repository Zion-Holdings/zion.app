<<<<<<< HEAD
'use client;'
;;
import Image from 'next/image;'';
import { useState } from 'react';';
import { ImageIcon } from '@/components/ui/icons;'
;''
interface SafeImageProps {;;
  src: "string;",;"
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fallbackSrc?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
};
;
export function SafeImage(): unknown {): unknown {): unknown {): unknown {): unknown {{;""
  src,;";""
  alt,;";";""
  width,;";";";""
  height,;";";";";""
  className = '',;'
=======
'use client'

import Image from 'next/image'
import { useState } from 'react''
import { ImageIcon } from '@/components/ui/icons'
'
interface SafeImageProps {'
  src: "string,
  alt: string
  width?: number
  height?: number
  className?: string
  fallbackSrc?: string
  priority?: boolean
  sizes?: string
  quality?: number

export function SafeImage(): unknown {): unknown {): unknown {): unknown {): unknown {{"
  src,;"
  alt,;
  width,"
  height,;"
  className = '','
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
  fallbackSrc,;
  priority = false,;
  sizes,;
  quality = 75,;
}: SafeImageProps) {;
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
<<<<<<< HEAD
;''
  const handleError: unknown = () => {;
    if (!hasError && fallbackSrc && currentSrc !== fallbackSrc) {;
      setCurrentSrc(fallbackSrc);''
      setHasError(true);;
    } else if (!hasError && src.startsWith('/')) {;'
      // Try serving the image directly through our custom API route;''
      const fallbackUrl: unknown "unknown = `/api/image${src"}`;"
      setCurrentSrc(fallbackUrl);
=======
'
  const handleError = () => {'
    if (!hasError && fallbackSrc && currentSrc !== fallbackSrc) {;
      setCurrentSrc(fallbackSrc)'
      setHasError(true)'
    } else if (!hasError && src.startsWith('/')) {'
      // Try serving the image directly through our custom API route'
      const fallbackUrl: `/api/image${src}`;
      setCurrentSrc(fallbackUrl)
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
      setHasError(true);
    } else if (!hasError) {;
      setHasError(true);
    };
  };

  // If we have an error and no fallback, show a placeholder;
<<<<<<< HEAD
  if (hasError && (!fallbackSrc || currentSrc === fallbackSrc)) {;""
    return (;";""
      <div;";";""
        className={`flex items-center justify-center bg-gray-100 text-gray-400 ${className}`};";";";""
        style={{ width, height }};;
        role="img";";";""
        aria-label={alt};";";";""
      >;";";";";""
        <ImageIcon className="w-6 h-6" />;"
      </div>;
    );
=======
  if (hasError && (!fallbackSrc || currentSrc === fallbackSrc)) {
    return (;""
      <div;`
        className={`flex items-center justify-center bg-gray-100 text-gray-400 ${className}`}
        style={{ width, height }}"
        role="img
        aria-label={alt}"
      >;"
        <ImageIcon className="w-6 h-6 />
      </div>);
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
  };

  return (;
    <Image;
      src={currentSrc};
      alt={alt};
      {...(width !== undefined ? { width } : {})};
      {...(height !== undefined ? { height } : {})};
      className={className};
      onError={handleError};
      priority={priority};
      sizes={sizes};
      quality={quality};
<<<<<<< HEAD
      // Add unoptimized as fallback for problematic images;
      unoptimized={hasError};""
    />;";""
  );";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
=======
      // Add unoptimized as fallback for problematic images;"
      unoptimized={hasError}"
    />;"
  );
}"
"

}"
}"
}'';;`
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
