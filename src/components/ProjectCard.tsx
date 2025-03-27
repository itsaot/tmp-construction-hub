
import React from 'react';
import { cn } from '@/lib/utils';
import BlurImage from './ui/BlurImage';

interface ProjectCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  category,
  title,
  description,
  className,
}) => {
  return (
    <div className={cn(
      'group rounded-xl overflow-hidden shadow-md relative card-hover',
      className
    )}>
      <BlurImage
        src={image}
        alt={title}
        className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80"></div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
        <span className="inline-block bg-construction-yellow text-construction-dark text-xs font-medium px-2 py-1 rounded mb-3">
          {category}
        </span>
        <h3 className="text-xl font-bold mb-2 group-hover:text-construction-yellow transition-colors">{title}</h3>
        <p className="text-white/90 text-sm line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
