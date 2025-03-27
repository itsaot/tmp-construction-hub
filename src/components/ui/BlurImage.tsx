
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface BlurImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  wrapperClassName?: string;
}

const BlurImage: React.FC<BlurImageProps> = ({
  src,
  alt,
  className,
  wrapperClassName,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Reset loading state when src changes
    setIsLoaded(false);
  }, [src]);

  return (
    <div className={cn('overflow-hidden relative', wrapperClassName)}>
      <img
        src={src}
        alt={alt || 'Image'}
        className={cn(
          'transition-all duration-500',
          isLoaded ? 'blur-0 scale-100' : 'blur-md scale-105',
          className
        )}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </div>
  );
};

export default BlurImage;
