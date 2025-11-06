import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";

const Gallery = () => {
  const dishes = [
    {
      image: dish1,
      title: "Entrada Gourmet",
      description: "Selección de aperitivos con ingredientes de temporada",
    },
    {
      image: dish2,
      title: "Plato Principal",
      description: "Cortes premium con guarniciones artesanales",
    },
    {
      image: dish3,
      title: "Postre Signature",
      description: "Creaciones dulces que deleitan el paladar",
    },
  ];

  return (
    <section id="galeria" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Nuestra Galería
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada platillo es una experiencia visual y gastronómica única
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-elegant hover:shadow-gold transition-all duration-500 hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                  <h3 className="text-2xl font-serif font-bold mb-2">{dish.title}</h3>
                  <p className="text-sm">{dish.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
