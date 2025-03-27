
import React from 'react';
import { CheckCircle, Award, Clock, Users } from 'lucide-react';
import RevealOnScroll from './ui/RevealOnScroll';
import BlurImage from './ui/BlurImage';

const About = () => {
  const values = [
    {
      icon: <CheckCircle className="text-construction-yellow" size={24} />,
      title: 'Quality',
      description: 'We never compromise on quality, ensuring every project meets the highest standards.',
    },
    {
      icon: <Award className="text-construction-yellow" size={24} />,
      title: 'Expertise',
      description: 'Our team brings decades of combined experience in construction and related fields.',
    },
    {
      icon: <Clock className="text-construction-yellow" size={24} />,
      title: 'Timeliness',
      description: 'We value your time and ensure projects are completed on schedule.',
    },
    {
      icon: <Users className="text-construction-yellow" size={24} />,
      title: 'Collaboration',
      description: 'We work closely with our clients to understand and exceed expectations.',
    },
  ];

  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <RevealOnScroll direction="right">
            <div className="relative">
              <div className="absolute -z-10 w-full h-full bg-construction-yellow/10 rounded-2xl -top-6 -left-6"></div>
              <BlurImage
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Construction team at work"
                className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute right-4 -bottom-8 bg-white p-5 rounded-lg shadow-lg glass-panel max-w-xs">
                <div className="flex items-center gap-3">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="CEO" 
                    className="w-14 h-14 rounded-full object-cover border-2 border-construction-yellow"
                  />
                  <div>
                    <p className="font-bold text-construction-dark">@thlolo_mohlala</p>
                    <p className="text-construction-gray text-sm">CEO & Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <div className="space-y-8">
            <RevealOnScroll>
              <div className="inline-block bg-construction-yellow/10 py-1 px-3 rounded-full text-construction-dark font-medium mb-2">
                About TMP
              </div>
              <h2 className="section-title">Building Excellence Through Innovation</h2>
              <p className="text-construction-gray">
                TMP (PTY) LTD was founded with a vision to revolutionize the construction industry through quality workmanship, innovative solutions, and exceptional service. With CIBD 4CE/3GB/3ME certification, we bring expertise in civil engineering, general building, and mechanical engineering to every project.
              </p>
              <p className="text-construction-gray">
                From plant hire to wholesale supplies, we provide comprehensive solutions that help our clients succeed. Our dedicated team works tirelessly to ensure every project is completed to the highest standards, on time and within budget.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                {values.map((value, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="mt-1">{value.icon}</div>
                    <div>
                      <h3 className="font-bold text-lg text-construction-dark">{value.title}</h3>
                      <p className="text-construction-gray text-sm">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={400}>
              <a href="#contact" className="btn-primary inline-block mt-6">
                Learn More About Us
              </a>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
