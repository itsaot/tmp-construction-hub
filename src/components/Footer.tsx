
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'Construction', href: '#services' },
        { name: 'Plant Hire', href: '#services' },
        { name: 'Wholesale Supplies', href: '#services' },
        { name: 'Project Management', href: '#services' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Terms & Conditions', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Cookie Policy', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-construction-dark text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-4 sm:px-6 lg:px-8 py-16">
          <div>
            <div className="flex items-center mb-6">
              <span className="text-white font-display font-bold text-2xl">
                TMP
              </span>
              <span className="bg-construction-yellow px-2 py-1 ml-2 text-xs font-bold rounded text-construction-dark">
                PTY LTD
              </span>
            </div>
            <p className="text-gray-300 mb-6">
              Building excellence through innovation and quality. CIBD 4CE/3GB/3ME certified construction services, plant hire, and wholesale supplies.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((platform) => (
                <a 
                  key={platform}
                  href={`https://${platform}.com`}
                  className="text-gray-400 hover:text-construction-yellow transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{platform}</span>
                  <i className={`fa fa-${platform}`}></i>
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((column, columnIndex) => (
            <div key={columnIndex}>
              <h3 className="text-lg font-bold mb-6">{column.title}</h3>
              <ul className="space-y-4">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-construction-yellow transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} TMP (PTY) LTD. All rights reserved. CEO: @thlolo_mohlala
            </p>
            <button 
              onClick={scrollToTop} 
              className="mt-4 md:mt-0 bg-construction-yellow text-construction-dark p-3 rounded-full hover:bg-opacity-90 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
