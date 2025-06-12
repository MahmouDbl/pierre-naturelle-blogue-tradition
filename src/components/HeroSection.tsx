
import React from 'react';
import { Sparkles, Heart, Shield } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="accueil" className="relative py-20 px-4 traditional-gradient">
      <div className="container mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-traditional-brown/10 border border-traditional-brown/20 mb-6">
          <Sparkles className="h-4 w-4 text-traditional-brown mr-2" />
          <span className="text-sm font-medium text-traditional-brown">
            Découvrez les secrets des pierres ancestrales
          </span>
        </div>

        {/* Titre principal */}
        <h1 className="text-4xl md:text-6xl font-bold text-traditional-brown mb-6 animate-fade-in">
          Bracelets en
          <span className="block text-traditional-gold">Pierres Naturelles</span>
        </h1>

        {/* Sous-titre */}
        <p className="text-lg md:text-xl text-traditional-earth max-w-3xl mx-auto mb-12 leading-relaxed">
          Explorez l'univers fascinant des pierres naturelles et découvrez leurs 
          propriétés énergétiques millénaires. Chaque bracelet raconte une histoire, 
          chaque pierre porte une intention.
        </p>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-traditional-brown/10">
                <Heart className="h-6 w-6 text-traditional-brown" />
              </div>
            </div>
            <div className="text-2xl font-bold text-traditional-brown mb-2">50+</div>
            <div className="text-traditional-earth">Variétés de pierres</div>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-traditional-brown/10">
                <Shield className="h-6 w-6 text-traditional-brown" />
              </div>
            </div>
            <div className="text-2xl font-bold text-traditional-brown mb-2">1000+</div>
            <div className="text-traditional-earth">Années de tradition</div>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-traditional-brown/10">
                <Sparkles className="h-6 w-6 text-traditional-brown" />
              </div>
            </div>
            <div className="text-2xl font-bold text-traditional-brown mb-2">100%</div>
            <div className="text-traditional-earth">Pierres authentiques</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
