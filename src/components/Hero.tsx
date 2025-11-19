import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import heroImage1 from "@/assets/hero-gourmet-1.jpg";
import heroImage2 from "@/assets/hero-gourmet-2.jpg";
import heroImage3 from "@/assets/hero-gourmet-3.jpg";

const Hero = () => {
  const [api, setApi] = useState<CarouselApi>();
  
  const heroImages = [heroImage1, heroImage2, heroImage3];

  useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [api]);
  const scrollToReservas = () => {
    const element = document.getElementById("reservas");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      <Carousel 
        setApi={setApi}
        className="absolute inset-0"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="h-screen ml-0">
          {heroImages.map((image, index) => (
            <CarouselItem key={index} className="pl-0 h-screen">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700"
                style={{
                  backgroundImage: `url(${image})`,
                }}
              >
                <div className="w-full h-full bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90"></div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary-foreground mb-6">
          Experiencia Gastronómica
          <span className="block mt-2 bg-gradient-gold bg-clip-text text-transparent">
            Extraordinaria
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Déjate seducir por sabores únicos en un ambiente de elegancia inigualable
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={scrollToReservas}
            size="lg"
            className="bg-gradient-gold text-primary font-semibold text-lg px-8 py-6 hover:opacity-90 shadow-gold transition-all hover:scale-105"
          >
            Reservar Ahora
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary-foreground text-primary hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6 transition-all hover:scale-105"
          >
            Ver Menú
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-primary-foreground"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
