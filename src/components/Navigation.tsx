
import React from 'react';
import { Gem, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'Articles', href: '#articles' },
    { label: 'Pierres', href: '#pierres' },
    { label: 'Bienfaits', href: '#bienfaits' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="bg-traditional-cream border-b border-traditional-gold/20 sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Gem className="h-8 w-8 text-traditional-brown" />
            <span className="text-xl font-bold text-traditional-brown">
              Pierres Naturelles
            </span>
          </div>

          {/* Menu desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-traditional-brown hover:text-traditional-gold transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Menu mobile toggle */}
          <button
            className="md:hidden text-traditional-brown hover:text-traditional-gold transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-traditional-gold/20">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-traditional-brown hover:text-traditional-gold hover:bg-traditional-gold/5 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
