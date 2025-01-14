import React from 'react';
import { BarChart3, Twitter, Linkedin, Github } from 'lucide-react';

const footerLinks = {
  Product: ['Features', 'Pricing', 'Documentation', 'Updates'],
  Company: ['About', 'Blog', 'Careers', 'Contact'],
  Resources: ['Community', 'Help Center', 'Partners', 'Status'],
  Legal: ['Privacy', 'Terms', 'Security', 'Compliance']
};

export default function Footer() {
  return (
    <footer className="bg-[#1A202C] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <BarChart3 className="h-8 w-8" />
              <span className="ml-2 text-2xl font-bold">sassto</span>
            </div>
            <p className="text-gray-400 max-w-sm">
              Empowering businesses with advanced analytics and insights for better decision making.
            </p>
            <div className="flex space-x-4 mt-6">
              {[Twitter, Linkedin, Github].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}