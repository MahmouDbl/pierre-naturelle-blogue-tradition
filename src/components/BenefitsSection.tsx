
import React from 'react';
import { Brain, Zap, Heart, Leaf, Star, Moon } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Clarté Mentale",
      description: "Les pierres comme l'améthyste et le quartz clair favorisent la concentration et la prise de décision éclairée."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Équilibre Émotionnel",
      description: "Le quartz rose et la prehnite apaisent les émotions et cultivent la compassion envers soi et autrui."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Énergie Vitale",
      description: "La citrine et l'œil de tigre stimulent l'énergie personnelle et renforcent la motivation au quotidien."
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Connexion à la Nature",
      description: "Porter des pierres naturelles nous reconnecte aux énergies terrestres et aux cycles naturels."
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Développement Spirituel",
      description: "Certaines pierres comme la labradorite accompagnent l'éveil spirituel et l'intuition."
    },
    {
      icon: <Moon className="h-8 w-8" />,
      title: "Harmonisation des Chakras",
      description: "Chaque pierre résonne avec des centres énergétiques spécifiques pour un équilibre global."
    }
  ];

  return (
    <section id="bienfaits" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-traditional-brown mb-4">
            Les Bienfaits des Pierres Naturelles
          </h2>
          <p className="text-lg text-traditional-earth max-w-3xl mx-auto">
            Depuis des millénaires, les civilisations du monde entier reconnaissent 
            les propriétés énergétiques des pierres naturelles. Découvrez comment elles 
            peuvent enrichir votre quotidien.
          </p>
        </div>

        {/* Grille des bienfaits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-all duration-300 group"
            >
              {/* Icône */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-traditional-gold/10 text-traditional-brown mb-4 group-hover:scale-105 transition-transform">
                {benefit.icon}
              </div>

              {/* Titre */}
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Section témoignage/citation */}
        <div className="earth-gradient rounded-2xl p-8 text-center text-traditional-cream">
          <blockquote className="text-xl md:text-2xl font-medium mb-4">
            "Les pierres ne sont pas seulement belles à regarder, elles portent en elles 
            la mémoire de la Terre et peuvent nous accompagner dans notre cheminement personnel."
          </blockquote>
          <cite className="text-traditional-cream/80">— Sagesse ancestrale</cite>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
