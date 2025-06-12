
import React from 'react';
import { Images } from 'lucide-react';

const PhotoGallery = () => {
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
      alt: "Collection de bracelets en pierres naturelles",
      title: "Collection Premium"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      alt: "Améthyste violette brillante",
      title: "Améthyste Naturelle"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=300&fit=crop",
      alt: "Quartz rose délicat",
      title: "Quartz Rose"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop",
      alt: "Œil de tigre doré",
      title: "Œil de Tigre"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=400&h=300&fit=crop",
      alt: "Pierres en méditation",
      title: "Méditation & Bien-être"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      alt: "Pierres de lune nacrées",
      title: "Pierre de Lune"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        {/* En-tête */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-traditional-brown/10">
              <Images className="h-8 w-8 text-traditional-brown" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-traditional-brown mb-4">
            Galerie Photos
          </h2>
          <p className="text-lg text-traditional-earth max-w-2xl mx-auto">
            Découvrez la beauté naturelle de nos pierres à travers cette collection 
            d'images soigneusement sélectionnées.
          </p>
        </div>

        {/* Grille de photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id}
              className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-lg">{image.title}</h3>
                  <p className="text-sm opacity-90">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section mosaic pour plus de variété */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-traditional-brown text-center mb-8">
            Nos Créations Artisanales
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=600&fit=crop"
                alt="Atelier de création de bracelets"
                className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=300&fit=crop"
                alt="Pierre précieuse"
                className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=300&h=300&fit=crop"
                alt="Environnement naturel"
                className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop"
                alt="Bracelet sur ordinateur"
                className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=300&h=300&fit=crop"
                alt="Détente et bien-être"
                className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
