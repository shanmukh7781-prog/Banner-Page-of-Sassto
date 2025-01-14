import React, { useState, useEffect } from 'react';
import { BarChart3, ChevronDown, Menu, X, ShoppingCart } from 'lucide-react';
import { Button } from './ui/Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const handleSignIn = () => {
    window.location.href = '/signin';
  };

  const handleCart = () => {
    window.location.href = '/cart';
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const closeDropdown = (e: MouseEvent) => {
      if (isDropdownOpen && !(e.target as Element).closest('.dropdown-container')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', closeDropdown);
    return () => document.removeEventListener('click', closeDropdown);
  }, [isDropdownOpen]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'insights', label: 'Insights' },
    { id: 'install', label: 'Install' }
  ];

  return (
    <header className="fixed w-full bg-[#276749] z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => scrollToSection('home')}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && scrollToSection('home')}
          >
            <BarChart3 className="text-[#9AE62D] h-8 w-8" />
            <span className="text-white text-2xl font-bold ml-2">sassto</span>
          </div>
          
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          <nav className={`
            absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto
            bg-[#276749] md:bg-transparent
            ${isMenuOpen ? 'block' : 'hidden'} md:flex items-center space-x-8
            transition-all duration-300
          `}>
            {navItems.map(item => (
              <button
                key={item.id}
                className="block w-full md:w-auto text-left md:inline-block px-4 py-2 md:p-0 
                         text-white hover:text-[#9AE62D] transition-colors"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            ))}
            
            <div className="relative dropdown-container">
              <button 
                className="flex items-center px-4 py-2 md:p-0 text-white hover:text-[#9AE62D] transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsDropdownOpen(!isDropdownOpen);
                }}
              >
                Pages
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 
                  ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white 
                             ring-1 ring-black ring-opacity-5 animate-fade-in">
                  <div className="py-1">
                    {['About Us', 'Blog', 'Contact'].map((item) => (
                      <a
                        key={item}
                        href={`/${item.toLowerCase().replace(' ', '-')}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 
                                 transition-colors duration-200"
                        onClick={(e) => {
                          e.preventDefault();
                          // Add navigation logic here
                          console.log(`Navigating to ${item}`);
                        }}
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button 
              className="relative text-white hover:text-[#9AE62D] transition-colors p-2"
              onClick={handleCart}
              aria-label="Shopping cart"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#9AE62D] rounded-full w-5 h-5 
                               flex items-center justify-center text-xs text-white">
                  {cartCount}
                </span>
              )}
            </button>
            <Button 
              onClick={handleSignIn}
              className="bg-[#9AE62D] text-white px-6 py-2 rounded-full font-medium 
                       hover:bg-[#8BD229] transition-all duration-300 transform 
                       hover:scale-105 focus:outline-none focus:ring-2 
                       focus:ring-[#9AE62D] focus:ring-opacity-50"
            >
              Sign in
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}