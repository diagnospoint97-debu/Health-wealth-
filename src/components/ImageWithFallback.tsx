import React, { useState } from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackClassName?: string;
}

export function ImageWithFallback({ src, alt, className, fallbackClassName = '', ...props }: ImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`overflow-hidden bg-emerald-50 ${className?.includes('absolute') ? '' : 'relative'} ${className || ''}`}>
      {/* Loading Skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-emerald-100/50 animate-pulse"></div>
      )}
      
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            setHasError(true);
            setIsLoaded(true);
          }}
          loading={props.loading || "lazy"}
          {...props}
        />
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center ${fallbackClassName}`}>
          <div className="w-16 h-16 rounded-full bg-white/50 flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald-300">
               <path d="M12 2C7.5 2 2 6 2 12C2 18 6.5 22 12 22C17.5 22 22 18 22 12C22 6 16.5 2 12 2Z" fillOpacity="0.5"/>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
