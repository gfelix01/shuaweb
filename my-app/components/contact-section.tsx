import { Instagram, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function ContactSection() {
  return (
    <section id="contacto" className="section-padding bg-gradient-to-b from-white to-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-title">Contáctanos</h2>
          <div className="divider"></div>
          <p className="section-subtitle">
            Estamos aquí para responder tus preguntas y ayudarte a reservar tu próxima cita. Contáctanos por cualquiera
            de estos medios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-on-scroll">
          <div className="bg-white p-10 rounded-xl shadow-soft">
            <h3 className="text-2xl font-serif font-bold mb-8">Información de Contacto</h3>
            <div className="space-y-8">
              <div className="flex items-center space-x-5 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-lg mb-1">Dirección</p>
                  <p className="text-neutral-600">Av. Santa Rosa esquina Altagracia, Plaza Maureen</p>
                </div>
              </div>
              <Separator />
              <div className="flex items-center space-x-5 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-lg mb-1">Teléfono</p>
                  <p className="text-neutral-600">829-641-8720</p>
                </div>
              </div>
              <Separator />
              <div className="flex items-center space-x-5 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Instagram className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-lg mb-1">Instagram</p>
                  <p className="text-neutral-600">@shuamakeupstudio</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="font-medium text-lg mb-4">Horario de Atención</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <p className="font-medium mb-1">Lunes - Viernes</p>
                  <p className="text-neutral-600">9:00 AM - 7:00 PM</p>
                </div>
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <p className="font-medium mb-1">Sábado</p>
                  <p className="text-neutral-600">9:00 AM - 5:00 PM</p>
                </div>
                <div className="bg-neutral-50 p-4 rounded-lg col-span-2">
                  <p className="font-medium mb-1">Domingo</p>
                  <p className="text-neutral-600">Cerrado</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-on-scroll">
            <div className="bg-white p-10 rounded-xl shadow-soft">
              <h3 className="text-2xl font-serif font-bold mb-8">Envíanos un Mensaje</h3>
              <div className="space-y-6">
                <input type="text" placeholder="Nombre" className="input-field" />
                <input type="email" placeholder="Email" className="input-field" />
                <textarea placeholder="Mensaje" rows={4} className="input-field" />
                <Button className="btn-primary w-full">Enviar Mensaje</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

