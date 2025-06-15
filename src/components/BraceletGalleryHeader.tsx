
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const braceletImages = [
  {
    src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800&h=400&fit=crop",
    alt: "Bracelet en pierres naturelles foncées sur assiette en bois",
  },
  {
    src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=400&fit=crop",
    alt: "Bracelets et pierres naturelles lumineuses",
  },
  {
    src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=400&fit=crop",
    alt: "Bracelet en pierres naturelles posé à l'extérieur",
  },
  {
    src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop",
    alt: "Bracelet en pierres sur fond neutre",
  },
  {
    src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=800&h=400&fit=crop",
    alt: "Détente et bien-être avec bracelets de pierre",
  },
];

const BraceletGalleryHeader = () => (
  <div className="relative w-full traditional-gradient py-6 md:py-10 animate-fade-in">
    <div className="container mx-auto px-0 md:px-4">
      <div className="rounded-2xl shadow-lg overflow-hidden">
        <Carousel opts={{ loop: true }}>
          <CarouselContent>
            {braceletImages.map((img, idx) => (
              <CarouselItem key={idx}>
                <div className="w-full aspect-[16/6] md:aspect-[16/5] 2xl:aspect-[16/4] bg-background flex items-center justify-center">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="object-cover w-full h-full"
                    draggable={false}
                    loading={idx === 0 ? "eager" : "lazy"}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2 z-10" />
          <CarouselNext className="right-2 top-1/2 -translate-y-1/2 z-10" />
        </Carousel>
      </div>
    </div>
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none rounded-2xl" />
  </div>
);

export default BraceletGalleryHeader;

