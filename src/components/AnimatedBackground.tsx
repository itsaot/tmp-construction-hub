
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedBackgroundProps {
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ className }) => {
  return (
    <div className={cn('absolute inset-0 -z-10 overflow-hidden', className)}>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-gradient-to-r from-construction-yellow/20 to-construction-accent/20 blur-3xl -z-10 opacity-50 animate-pulse-slow" />
      
      <div className="absolute right-[-20%] bottom-[-40%] h-[800px] w-[800px] rounded-full bg-gradient-to-l from-construction-accent/10 to-construction-yellow/10 blur-3xl -z-10 opacity-40 animate-pulse-slow animation-delay-2000" />
    </div>
  );
};

export default AnimatedBackground;
