import React from 'react';

interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ 
  src, 
  alt = '', 
  fallback = 'U', 
  className = '' 
}) => {
  const [imageError, setImageError] = React.useState(false);

  if (src && !imageError) {
    return (
      <div className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`}>
        <img
          className="aspect-square h-full w-full"
          src={src}
          alt={alt}
          onError={() => setImageError(true)}
        />
      </div>
    );
  }

  return (
    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted ${className}`}>
      <span className="text-sm font-medium text-muted-foreground">
        {fallback}
      </span>
    </div>
  );
};

interface AvatarImageProps {
  src: string;
  alt?: string;
  className?: string;
}

export const AvatarImage: React.FC<AvatarImageProps> = ({ src, alt = '', className = '' }) => {
  return (
    <img
      className={`aspect-square h-full w-full ${className}`}
      src={src}
      alt={alt}
    />
  );
};

interface AvatarFallbackProps {
  children: React.ReactNode;
  className?: string;
}

export const AvatarFallback: React.FC<AvatarFallbackProps> = ({ children, className = '' }) => {
  return (
    <div className={`flex h-full w-full items-center justify-center rounded-full bg-muted ${className}`}>
      <span className="text-sm font-medium text-muted-foreground">
        {children}
      </span>
    </div>
  );
};