import { Facebook, Instagram, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold">
                  <div className="flex items-center space-x-3">
                  <img 
                    src={logo} 
                    alt="Mil Quinientos Veintinueve Gastrobar" 
                    className="w-20 h-20 rounded-full object-cover shadow-gold"
                  />
              </div>
              <span className="text-xl font-serif font-bold">Mil Quinientos Veintinueve Gastrobar</span>
            </div>
            <p className="text-primary-foreground/80">
              Experiencia gastronómica de excelencia desde 2010
            </p>
          </div>

          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Contacto</h3>
            <div className="space-y-2 text-primary-foreground/80">
              <p>Calle Principal 123</p>
              <p>Ciudad, País</p>
              <p>Tel: +1 (555) 123-4567</p>
              <p>info@restaurante.com</p>
            </div>
          </div>

          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-gradient-gold rounded-full flex items-center justify-center transition-all hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-gradient-gold rounded-full flex items-center justify-center transition-all hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-gradient-gold rounded-full flex items-center justify-center transition-all hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2025 Restaurante Gourmet. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
