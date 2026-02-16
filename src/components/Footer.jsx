import React from 'react';
import { Pill, Github, Linkedin, Twitter, Instagram, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="h-5 w-5" />,
      url: 'https://github.com/Rakesh-Dey-013',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="h-5 w-5" />,
      url: 'https://www.linkedin.com/in/rakeshdey007/',
    },
    {
      name: 'Twitter',
      icon: <Twitter className="h-5 w-5" />,
      url: 'https://x.com/RD_Gaming796974?t=KjHhp857TH3bu5ze5qKNGA&s=09',
    },
    {
      name: 'Instagram',
      icon: <Instagram className="h-5 w-5" />,
      url: 'https://www.instagram.com/rakesh._._007?igsh=MXc3NGxxY2I0dnprMA==',
    },
  ];

  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'How it works', href: '#how-it-works' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'FAQ', href: '#faq' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About us', href: '/Suggest-Medicine/about' },
        { name: 'Contact', href: '#contact' },
        { name: 'Careers', href: '#careers' },
        { name: 'Blog', href: '#blog' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#privacy' },
        { name: 'Terms of Service', href: '#terms' },
        { name: 'Medical Disclaimer', href: '#disclaimer' },
        { name: 'Cookies', href: '#cookies' },
      ]
    },
  ];

  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <Pill className="h-6 w-6 text-blue-500" />
              </div>
              <span className="text-xl font-bold text-white">MediSuggest</span>
            </div>
            <p className="text-zinc-400 text-sm max-w-md leading-relaxed">
              Empowering healthcare decisions with AI-driven medical insights. 
              Get personalized health suggestions and connect with healthcare professionals.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-zinc-400 text-sm">
                <Mail className="h-4 w-4" />
                <span>rakesh.coding.007@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-zinc-400 text-sm">
                <MapPin className="h-4 w-4" />
                <span>Available worldwide</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-zinc-400 hover:text-white text-sm transition-colors duration-200 hover:underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-800"></div>

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          {/* Social Links */}
          <div className="flex items-center space-x-3">
            <span className="text-zinc-400 text-sm hidden sm:block">Follow us:</span>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-all duration-200 p-2 rounded-lg hover:bg-zinc-800 hover:scale-110"
                aria-label={`Follow us on ${social.name}`}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright and Disclaimer */}
          <div className="text-center sm:text-right">
            <p className="text-zinc-400 text-sm">
              &copy; {currentYear} MediSuggest. All rights reserved.
            </p>
            <p className="text-zinc-500 text-xs mt-1 max-w-xs">
              ⚠️ Not a substitute for professional medical advice. Always consult healthcare providers.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;