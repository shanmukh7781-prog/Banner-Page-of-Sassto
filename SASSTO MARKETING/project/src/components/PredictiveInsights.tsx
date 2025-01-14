import React from 'react';
import { LineChart, ArrowUpRight } from 'lucide-react';

export default function PredictiveInsights() {
  return (
    <section className="bg-[#EDFDFD] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#276749] mb-4">
            Predictive Insights
          </h2>
          <p className="text-gray-600 tracking-wide max-w-2xl mx-auto">
            Make better decisions and get through strategic planning with our predictive insights and data analysis.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <LineChart className="h-8 w-8 text-[#48BB78]" />
              <h3 className="text-xl font-bold text-gray-800">Performance Metrics</h3>
            </div>
            <button className="flex items-center text-[#A8D600] font-medium hover:text-[#95BD00]">
              View Details
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </button>
          </div>
          
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
            alt="Analytics Dashboard"
            className="rounded-lg w-full"
          />
        </div>
      </div>
    </section>
  );
}