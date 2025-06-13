
import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const BlogSection = () => {
  const articles: Article[] = [
    {
      id: 1,
      title: "Les Propriétés Énergétiques de l'Améthyste",
      excerpt: "Découvrez comment l'améthyste peut favoriser la sérénité et la méditation dans votre quotidien. Cette pierre violette aux reflets mystiques...",
      date: "15 Mars 2024",
      readTime: "5 min",
      category: "Propriétés",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Comment Choisir son Premier Bracelet en Pierres",
      excerpt: "Guide complet pour sélectionner le bracelet en pierres naturelles qui vous correspond. Les critères essentiels à considérer...",
      date: "12 Mars 2024",
      readTime: "7 min",
      category: "Guide",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Le Quartz Rose : Pierre de l'Amour Inconditionnel",
      excerpt: "Explorez les vertus du quartz rose, symbole de l'amour de soi et de la compassion. Son histoire et ses utilisations traditionnelles...",
      date: "10 Mars 2024",
      readTime: "4 min",
      category: "Propriétés",
      image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Purification et Rechargement des Pierres",
      excerpt: "Méthodes traditionnelles pour nettoyer et recharger vos pierres naturelles. Maintenez leur énergie positive au maximum...",
      date: "8 Mars 2024",
      readTime: "6 min",
      category: "Entretien",
      image: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "L'Œil de Tigre : Force et Protection",
      excerpt: "Découvrez les propriétés protectrices de l'œil de tigre, pierre de courage et de détermination utilisée depuis l'antiquité...",
      date: "5 Mars 2024",
      readTime: "5 min",
      category: "Propriétés",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Méditation avec les Pierres Naturelles",
      excerpt: "Techniques de méditation utilisant les pierres naturelles pour approfondir votre pratique spirituelle et votre bien-être...",
      date: "3 Mars 2024",
      readTime: "8 min",
      category: "Spiritualité",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Propriétés': 'bg-traditional-gold/10 text-traditional-gold',
      'Guide': 'bg-traditional-brown/10 text-traditional-brown',
      'Entretien': 'bg-traditional-earth/10 text-traditional-earth',
      'Spiritualité': 'bg-purple-100 text-purple-700'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  return (
    <section id="articles" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-traditional-brown mb-4">
            Articles & Guides
          </h2>
          <p className="text-lg text-traditional-earth max-w-2xl mx-auto">
            Explorez nos articles détaillés sur les pierres naturelles, leurs propriétés 
            et comment les intégrer dans votre vie quotidienne.
          </p>
        </div>

        {/* Grille d'articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article 
              key={article.id}
              className="bg-card rounded-lg shadow-sm border border-border overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Contenu */}
              <div className="p-6">
                {/* Catégorie */}
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${getCategoryColor(article.category)}`}>
                  {article.category}
                </span>

                {/* Titre */}
                <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-traditional-gold transition-colors">
                  {article.title}
                </h3>

                {/* Extrait */}
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Métadonnées */}
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Lien de lecture */}
                <a 
                  href={`#article-${article.id}`}
                  className="inline-flex items-center text-traditional-brown hover:text-traditional-gold font-medium transition-colors"
                >
                  Lire l'article
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
