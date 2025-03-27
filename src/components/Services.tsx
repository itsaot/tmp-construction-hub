
import React from 'react';
import ServiceCard from './ServiceCard';
import { Construction, Truck, Warehouse, SquareStack } from 'lucide-react';
import RevealOnScroll from './ui/RevealOnScroll';

const Services = () => {
  const services = [
    {
      icon: <Construction size={28} />,
      title: 'Construction Services',
      description: 'CIDB 4CE/3GB/3ME certified construction services covering civil, general building, and mechanical engineering works.',
    },
    {
      icon: <Truck size={28} />,
      title: 'Plant Hire',
      description: 'Wide range of construction plant machinery available for hire, including excavators, loaders, graders, rollers, and compactors.',
    },
    {
      icon: <Warehouse size={28} />,
      title: 'Wholesale Supplies',
      description: 'Quality construction materials and supplies at wholesale prices. From cement and bricks to finishing materials.',
    },
    {
      icon: <SquareStack size={28} />,
      title: 'Project Management',
      description: 'End-to-end project management services to ensure your construction project is completed on time and within budget.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="section-container">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle mx-auto">
              TMP (PTY) LTD provides comprehensive construction and related services to meet all your project needs with exceptional quality and reliability.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
