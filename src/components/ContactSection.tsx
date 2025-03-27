
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import RevealOnScroll from './ui/RevealOnScroll';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully!', {
        description: "We'll get back to you as soon as possible.",
      });
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} className="text-construction-yellow" />,
      title: 'Our Location',
      details: '123 Construction Way, Johannesburg, South Africa',
    },
    {
      icon: <Phone size={24} className="text-construction-yellow" />,
      title: 'Phone Number',
      details: '+27 12 345 6789',
    },
    {
      icon: <Mail size={24} className="text-construction-yellow" />,
      title: 'Email Address',
      details: 'info@tmpconstruction.co.za',
    },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="section-container">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle mx-auto">
              Have a project in mind? Contact us today to discuss how TMP can help bring your vision to life with our construction, plant hire, and wholesale supply services.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <RevealOnScroll direction="right">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-construction-dark">Contact Information</h3>
              <p className="text-construction-gray">
                Reach out to us for any inquiries or to discuss your project needs. Our team is ready to provide the solutions you require.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-construction-yellow/10 p-3 rounded-full">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-construction-dark">{item.title}</h4>
                      <p className="text-construction-gray">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pt-6">
                <h3 className="text-2xl font-bold text-construction-dark mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {['facebook', 'twitter', 'instagram', 'linkedin'].map((platform) => (
                    <a 
                      key={platform}
                      href={`https://${platform}.com`}
                      className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-construction-yellow hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">{platform}</span>
                      <i className={`fa fa-${platform}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="left">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-construction-dark mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-construction-dark mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-construction-yellow/50 focus:border-construction-yellow"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-construction-dark mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-construction-yellow/50 focus:border-construction-yellow"
                      placeholder="example@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-construction-dark mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-construction-yellow/50 focus:border-construction-yellow"
                      placeholder="+27 12 345 6789"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-construction-dark mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-construction-yellow/50 focus:border-construction-yellow"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-construction-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : submitted ? (
                    <>
                      <CheckCircle size={20} /> Message Sent
                    </>
                  ) : (
                    <>
                      <Send size={20} /> Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
