import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

export function Input({ icon, className = '', ...props }: InputProps) {
  return (
    <div className="relative flex items-center">
      {icon && (
        <div className="absolute left-3 text-gray-400">
          {icon}
        </div>
      )}
      <input
        className={`w-full px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#9AE62D] 
          shadow-sm hover:shadow-md transition-shadow duration-300 
          ${icon ? 'pl-10' : ''} ${className}`}
        {...props}
      />
    </div>
  );
}