
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import RevealOnScroll from './ui/RevealOnScroll';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3',
      category: 'Civil Engineering',
      title: 'Highway Interchange Construction',
      description: 'Design and construction of a complex highway interchange, including bridges, ramps, and drainage systems.',
      type: 'civil',
    },
    {
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3',
      category: 'Building Construction',
      title: 'Corporate Office Complex',
      description: 'Construction of a modern office complex featuring energy-efficient design and state-of-the-art facilities.',
      type: 'building',
    },
    {
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      category: 'Plant Hire',
      title: 'Mining Site Equipment Supply',
      description: 'Provided comprehensive equipment solutions for a large-scale mining operation.',
      type: 'plant',
    },
    {
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      category: 'Mechanical Engineering',
      title: 'Industrial Facility Upgrade',
      description: 'Mechanical systems upgrade for a large manufacturing facility, improving efficiency and reducing energy consumption.',
      type: 'mechanical',
    },
    {
      image: 'https://images.unsplash.com/photo-1583802777375-b49865fb950e?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.0.3',
      category: 'Wholesale Supply',
      title: 'Residential Development Materials',
      description: 'Supplied all construction materials for a 200-unit residential development project.',
      type: 'wholesale',
    },
    {
      image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.0.3',
      category: 'Civil Engineering',
      title: 'Water Treatment Plant',
      description: 'Construction of a municipal water treatment facility with advanced filtration systems.',
      type: 'civil',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  const filters = [
    { label: 'All Projects', value: 'all' },
    { label: 'Civil', value: 'civil' },
    { label: 'Building', value: 'building' },
    { label: 'Mechanical', value: 'mechanical' },
    { label: 'Plant Hire', value: 'plant' },
    { label: 'Wholesale', value: 'wholesale' },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="section-container">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="section-title">Our Projects</h2>
            <p className="section-subtitle mx-auto">
              Take a look at some of our recent projects showcasing our expertise in different areas of construction, plant hire, and wholesale supplies.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.value}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter.value
                    ? 'bg-construction-yellow text-construction-dark'
                    : 'bg-white text-construction-gray hover:bg-gray-100'
                }`}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <RevealOnScroll key={index} delay={index * 100 + 200}>
              <ProjectCard
                image={project.image}
                category={project.category}
                title={project.title}
                description={project.description}
              />
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={800}>
          <div className="text-center mt-16">
            <a href="#contact" className="btn-secondary">
              Discuss Your Project
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Projects;
