import { Award, ChefHat, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="sobre-nosotros" className="py-20 px-4 bg-gradient-elegant">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Sobre Nosotros
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-card rounded-lg shadow-elegant hover:shadow-gold transition-all hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <ChefHat className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
              Chef Experto
            </h3>
            <p className="text-muted-foreground">
              Nuestro chef cuenta con más de 20 años de experiencia en alta cocina internacional
            </p>
          </div>

          <div className="text-center p-8 bg-card rounded-lg shadow-elegant hover:shadow-gold transition-all hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
              Ingredientes Premium
            </h3>
            <p className="text-muted-foreground">
              Seleccionamos cuidadosamente los mejores productos locales e importados
            </p>
          </div>

          <div className="text-center p-8 bg-card rounded-lg shadow-elegant hover:shadow-gold transition-all hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
              Premiados
            </h3>
            <p className="text-muted-foreground">
              Reconocidos con múltiples premios gastronómicos nacionales e internacionales
            </p>
          </div>
        </div>

        <div className="bg-card rounded-lg p-8 md:p-12 shadow-elegant">
          <p className="text-lg text-foreground leading-relaxed text-center max-w-3xl mx-auto">
            Desde hace más de una década, nos dedicamos a crear experiencias culinarias 
            que despiertan los sentidos. Cada platillo es una obra de arte diseñada para 
            sorprender y deleitar. Nuestro compromiso es ofrecer no solo comida excepcional, 
            sino momentos memorables en un ambiente de elegancia y calidez.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
