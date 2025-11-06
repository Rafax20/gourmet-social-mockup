import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Reservations = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "¡Reserva Recibida!",
      description: "Nos pondremos en contacto contigo pronto para confirmar tu reserva.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="reservas" className="py-20 px-4 bg-gradient-elegant">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Reserva tu Mesa
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Asegura tu experiencia gastronómica única
          </p>
        </div>

        <div className="bg-card rounded-lg shadow-elegant p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground font-medium">
                  Nombre Completo
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-border focus:border-accent"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-border focus:border-accent"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground font-medium">
                  Teléfono
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="border-border focus:border-accent"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="guests" className="text-foreground font-medium flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Número de Personas
                </Label>
                <Input
                  id="guests"
                  name="guests"
                  type="number"
                  min="1"
                  max="20"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  className="border-border focus:border-accent"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="date" className="text-foreground font-medium flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Fecha
                </Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="border-border focus:border-accent"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="time" className="text-foreground font-medium flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Hora
                </Label>
                <Input
                  id="time"
                  name="time"
                  type="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="border-border focus:border-accent"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground font-medium">
                Comentarios Especiales (Opcional)
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="border-border focus:border-accent resize-none"
                placeholder="Alergias, preferencias de mesa, ocasión especial..."
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-gold text-primary font-semibold text-lg py-6 hover:opacity-90 shadow-gold transition-all hover:scale-105"
            >
              Confirmar Reserva
            </Button>
          </form>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-card p-6 rounded-lg shadow-elegant">
            <h3 className="font-serif font-bold text-lg text-foreground mb-2">Horario</h3>
            <p className="text-muted-foreground">
              Mar - Dom: 13:00 - 23:00
              <br />
              Lunes: Cerrado
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-elegant">
            <h3 className="font-serif font-bold text-lg text-foreground mb-2">Teléfono</h3>
            <p className="text-muted-foreground">+1 (555) 123-4567</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-elegant">
            <h3 className="font-serif font-bold text-lg text-foreground mb-2">Ubicación</h3>
            <p className="text-muted-foreground">
              Calle Principal 123
              <br />
              Ciudad, País
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservations;
