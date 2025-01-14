import React from 'react';
import { Check } from 'lucide-react';

const features = [
  'Real-time analytics and reporting',
  'Advanced data visualization tools',
  'Custom dashboard creation',
  'Automated report generation',
  'Team collaboration features',
  'Data export capabilities'
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
            alt="Professional using software"
            className="rounded-lg shadow-xl"
          />
          
          <div className="bg-[#276749] text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-8">Powerful Features</h2>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-6 w-6 text-[#A8D600] mr-3" />
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}