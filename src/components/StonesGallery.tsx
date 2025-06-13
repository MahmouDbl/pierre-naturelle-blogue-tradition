import React from 'react';
import { Star, Zap, Moon, Sun, Heart, Shield } from 'lucide-react';

interface Stone {
  id: number;
  name: string;
  color: string;
  properties: string[];
  description: string;
  chakra: string;
  icon: React.ReactNode;
  gradient: string;
  image: string;
}

const StonesGallery = () => {
  const stones: Stone[] = [
    {
      id: 1,
      name: "Améthyste",
      color: "violet",
      properties: ["Sérénité", "Méditation", "Intuition"],
      description: "Pierre de la sagesse et de la spiritualité, l'améthyste favorise la paix intérieure.",
      chakra: "Couronne",
      icon: <Star className="h-6 w-6" />,
      gradient: "from-purple-200 to-purple-100",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      name: "Quartz Rose",
      color: "rose",
      properties: ["Amour", "Compassion", "Douceur"],
      description: "Pierre de l'amour inconditionnel, elle ouvre le cœur à la tendresse.",
      chakra: "Cœur",
      icon: <Heart className="h-6 w-6" />,
      gradient: "from-rose-200 to-rose-100",
      image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=300&h=200&fit=crop"
    },
    {
      id: 3,
      name: "Œil de Tigre",
      color: "doré",
      properties: ["Protection", "Courage", "Confiance"],
      description: "Pierre de protection et de force, elle stimule la volonté et la détermination.",
      chakra: "Plexus solaire",
      icon: <Shield className="h-6 w-6" />,
      gradient: "from-amber-200 to-yellow-100",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=200&fit=crop"
    },
    {
      id: 4,
      name: "Labradorite",
      color: "irisé",
      properties: ["Transformation", "Magie", "Intuition"],
      description: "Pierre de transformation, elle révèle les dons cachés et protège l'aura.",
      chakra: "Gorge",
      icon: <Zap className="h-6 w-6" />,
      gradient: "from-slate-300 to-slate-200",
      image: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=300&h=200&fit=crop"
    },
    {
      id: 5,
      name: "Pierre de Lune",
      color: "nacré",
      properties: ["Féminin sacré", "Cycles", "Intuition"],
      description: "Pierre de la féminité, elle harmonise les cycles et développe l'intuition.",
      chakra: "Sacré",
      icon: <Moon className="h-6 w-6" />,
      gradient: "from-slate-200 to-white",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop"
    },
    {
      id: 6,
      name: "Citrine",
      color: "jaune",
      properties: ["Prospérité", "Joie", "Énergie"],
      description: "Pierre de l'abondance et de la joie, elle attire la prospérité et la créativité.",
      chakra: "Plexus solaire",
      icon: <Sun className="h-6 w-6" />,
      gradient: "from-yellow-200 to-yellow-100",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop"
    }
  ];

  return (
    <section id="pierres" className="py-20 px-4 bg-traditional-cream/30">
      <div className="container mx-auto">
        {/* En-tête avec image de fond */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 opacity-5">
            <img 
              src="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1200&h=300&fit=crop" 
              alt="Pierres naturelles"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold text-traditional-brown mb-4">
              Galerie des Pierres
            </h2>
            <p className="text-lg text-traditional-earth max-w-2xl mx-auto">
              Découvrez les propriétés uniques de chaque pierre naturelle et trouvez 
              celle qui résonne avec vos intentions et vos besoins.
            </p>
          </div>
        </div>

        {/* Grille des pierres */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stones.map((stone) => (
            <div 
              key={stone.id}
              className="bg-card rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              {/* Image de la pierre */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={stone.image}
                  alt={stone.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Contenu */}
              <div className="p-6">
                {/* Nom et chakra */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-card-foreground flex items-center">
                    <span className="mr-2">{stone.icon}</span>
                    {stone.name}
                  </h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-traditional-gold/10 text-traditional-gold">
                    {stone.chakra}
                  </span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {stone.description}
                </p>

                {/* Propriétés */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-card-foreground">Propriétés :</h4>
                  <div className="flex flex-wrap gap-2">
                    {stone.properties.map((property, index) => (
                      <span 
                        key={index}
                        className="text-xs px-2 py-1 rounded-full bg-traditional-brown/10 text-traditional-brown"
                      >
                        {property}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-traditional-brown text-traditional-cream rounded-lg hover:bg-traditional-earth transition-colors duration-200 font-medium">
            Découvrir tous nos bracelets
          </button>
        </div>
      </div>
    </section>
  );
};

export default StonesGallery;
