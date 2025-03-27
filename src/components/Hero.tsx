
import React from 'react';
import { ArrowDown } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';
import RevealOnScroll from './ui/RevealOnScroll';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <AnimatedBackground />
      
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <RevealOnScroll delay={100}>
              <div className="inline-block bg-construction-dark py-1 px-3 rounded-full">
                <p className="text-white text-sm font-medium">CIBD 4CE/3GB/3ME</p>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={300}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight text-construction-dark">
                Building a <span className="text-construction-yellow">Stronger</span> Future Together
              </h1>
            </RevealOnScroll>
            
            <RevealOnScroll delay={500}>
              <p className="text-xl text-construction-gray max-w-lg">
                Expert construction services, plant hire, and wholesale supplies for all your project needs. Excellence in every brick, every time.
              </p>
            </RevealOnScroll>
            
            <RevealOnScroll delay={700}>
              <div className="flex flex-wrap gap-4">
                <a href="#services" className="btn-primary">
                  Our Services
                </a>
                <a href="#contact" className="btn-outline">
                  Get In Touch
                </a>
              </div>
            </RevealOnScroll>
          </div>
          
          <RevealOnScroll delay={900} direction="left">
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Construction site" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-1 w-10 bg-construction-yellow"></div>
                    <span className="text-sm font-medium">EXCELLENCE IN CONSTRUCTION</span>
                  </div>
                  <p className="text-2xl font-bold">4+ Years of Industry Experience</p>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white rounded-lg p-5 shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-construction-dark">20+</p>
                    <p className="text-sm text-construction-gray">Projects</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-construction-dark">98%</p>
                    <p className="text-sm text-construction-gray">Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#services" 
          className="flex flex-col items-center text-construction-dark"
          aria-label="Scroll down to services"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
