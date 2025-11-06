import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-elegant">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold">
              <span className="text-2xl font-serif font-bold text-primary">R</span>
            </div>
            <span className="text-2xl font-serif font-bold bg-gradient-gold bg-clip-text text-transparent">
              Restaurante
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("sobre-nosotros")}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Sobre Nosotros
            </button>
            <button
              onClick={() => scrollToSection("galeria")}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Galería
            </button>
            <button
              onClick={() => scrollToSection("reservas")}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Reservas
            </button>
            <Button
              onClick={() => scrollToSection("reservas")}
              className="bg-gradient-gold text-primary font-semibold hover:opacity-90 shadow-gold"
            >
              Reservar Mesa
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button
              onClick={() => scrollToSection("inicio")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("sobre-nosotros")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
            >
              Sobre Nosotros
            </button>
            <button
              onClick={() => scrollToSection("galeria")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
            >
              Galería
            </button>
            <button
              onClick={() => scrollToSection("reservas")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
            >
              Reservas
            </button>
            <Button
              onClick={() => scrollToSection("reservas")}
              className="w-full bg-gradient-gold text-primary font-semibold hover:opacity-90 shadow-gold"
            >
              Reservar Mesa
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
