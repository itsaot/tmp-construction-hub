
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import RevealOnScroll from './ui/RevealOnScroll';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  index?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  className,
  index = 0,
}) => {
  return (
    <RevealOnScroll delay={index * 100 + 100}>
      <div className={cn(
        'bg-white rounded-lg p-8 shadow-md border border-gray-100 card-hover h-full',
        className
      )}>
        <div className="bg-construction-yellow/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6 text-construction-dark">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-construction-dark">{title}</h3>
        <p className="text-construction-gray mb-6">{description}</p>
        <a 
          href="#contact" 
          className="inline-flex items-center text-construction-dark font-medium hover:text-construction-yellow transition-colors"
        >
          Learn More <ArrowRight size={16} className="ml-2" />
        </a>
      </div>
    </RevealOnScroll>
  );
};

export default ServiceCard;
