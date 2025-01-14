import React from 'react';
import { Download, Settings, UserCheck } from 'lucide-react';

const steps = [
  {
    icon: Download,
    title: 'Download file',
    description: 'Get started by downloading our installation file',
  },
  {
    icon: Settings,
    title: 'Configure settings',
    description: 'Set up your preferences and initial configurations',
  },
  {
    icon: UserCheck,
    title: 'Set up your account',
    description: 'Create your account and start using the platform',
  },
];

export default function InstallSteps() {
  return (
    <section className="bg-[#F0FFF4] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#276749] mb-16">
          Follow the easy steps for installation
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-block p-4 bg-[#48BB78] rounded-full mb-6">
                <step.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2D3748] mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}