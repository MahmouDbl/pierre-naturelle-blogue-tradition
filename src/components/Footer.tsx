
import React from 'react';
import { Gem, Mail, MapPin, Phone, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-traditional-brown text-traditional-cream">
      {/* Section principale */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Gem className="h-8 w-8 text-traditional-gold" />
              <span className="text-2xl font-bold">Pierres Naturelles</span>
            </div>
            <p className="text-traditional-cream/80 mb-6 max-w-md">
              Découvrez l'univers fascinant des pierres naturelles et leurs propriétés 
              énergétiques ancestrales. Chaque bracelet raconte une histoire unique.
            </p>
            
            {/* Réseaux sociaux */}
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-traditional-cream/10 hover:bg-traditional-gold/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-traditional-cream/10 hover:bg-traditional-gold/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-traditional-cream/10 hover:bg-traditional-gold/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-traditional-gold">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#accueil" className="text-traditional-cream/80 hover:text-traditional-gold transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#articles" className="text-traditional-cream/80 hover:text-traditional-gold transition-colors">
                  Articles
                </a>
              </li>
              <li>
                <a href="#pierres" className="text-traditional-cream/80 hover:text-traditional-gold transition-colors">
                  Galerie des Pierres
                </a>
              </li>
              <li>
                <a href="#bienfaits" className="text-traditional-cream/80 hover:text-traditional-gold transition-colors">
                  Bienfaits
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-traditional-gold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-traditional-gold" />
                <span className="text-traditional-cream/80">contact@pierres-naturelles.fr</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-traditional-gold" />
                <span className="text-traditional-cream/80">+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-traditional-gold mt-1" />
                <span className="text-traditional-cream/80">
                  123 Rue des Cristaux<br />
                  75001 Paris, France
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barre de copyright */}
      <div className="border-t border-traditional-cream/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-traditional-cream/60 text-sm">
              © 2024 Pierres Naturelles. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-traditional-cream/60 hover:text-traditional-gold text-sm transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-traditional-cream/60 hover:text-traditional-gold text-sm transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-traditional-cream/60 hover:text-traditional-gold text-sm transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
