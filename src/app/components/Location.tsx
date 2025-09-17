"use client"

import { MapPin, Clock, Phone } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { weddingData } from "@/data/weddingData"

export default function Location() {
  const { language } = useLanguage()

  const locationContent = {
    es: {
      title: "Local & Horário",
      subtitle: "Toda la información sobre dónde y cuándo se celebrará nuestra celebración",
      ceremony: "Ceremonia Religiosa",
      reception: "Recepción", 
      getDirections: "Ver en Google Maps",
      contactChurch: "Contacto de la iglesia",
      contactVenue: "Contacto del local"
    },
    pt: {
      title: "Local & Horário",
      subtitle: "Todas as informações sobre onde e quando acontecerá nossa celebração",
      ceremony: "Cerimônia Religiosa",
      reception: "Recepção",
      getDirections: "Ver no Google Maps",
      contactChurch: "Contato da igreja",
      contactVenue: "Contato do local"
    },
    "pt-BR": {
      title: "Local & Horário",
      subtitle: "Todas as informações sobre onde e quando acontecerá nossa celebração",
      ceremony: "Cerimônia Religiosa",
      reception: "Recepção",
      getDirections: "Ver no Google Maps",
      contactChurch: "Contato da igreja",
      contactVenue: "Contato do local"
    }
  }

  const content = locationContent[language] || locationContent.pt

  const openDirections = (address: string) => {
    const encodedAddress = encodeURIComponent(address)
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank')
  }

  return (
    <section className="py-16 bg-[#FDFBF2]"> {/* Fondo crema claro */}
      <div className="container mx-auto px-4">
        {/* Título principal igual al Timeline */}
        <h2 className="text-5xl font-bold text-[#3F4751] mb-2 text-center">
          {content.title}
        </h2>
        <p className="text-center text-[#666666] mb-12">
          {content.subtitle}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Ceremonia */}
          <div className="bg-[#FDFBF2] rounded-lg shadow-lg border-none overflow-hidden">
            <div className="p-6 pb-4">
              <h3 className="font-playfair text-2xl text-[#333333] font-semibold text-center">
                {content.ceremony}
              </h3>
            </div>
            <div className="px-6 pb-6">
              {/* Imagen real de la iglesia */}
              <div className="w-full h-48 rounded-md mb-6 overflow-hidden">
                <img 
                  src="/PNSDC.jpg" 
                  alt="Parroquia Nossa Senhora da Conceição"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="bg-[#F4ECC8] rounded-full p-1.5 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-[#CE893F]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#333333]">
                      {weddingData.wedding.ceremony.venue}
                    </p>
                    <p className="text-[#333333] text-sm">
                      {weddingData.wedding.ceremony.address}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-[#F4ECC8] rounded-full p-1.5 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-[#CE893F]" />
                  </div>
                  <div>
                    <p className="text-[#333333] font-semibold">
                      {weddingData.wedding.ceremony.time}
                    </p>
                    <p className="text-[#333333] text-sm">
                      04 de Outubro, 2025
                    </p>
                  </div>
                </div>

                {/* Teléfono de ejemplo - puedes agregar al weddingData si lo necesitas */}
                <div className="flex items-start gap-3">
                  <div className="bg-[#F4ECC8] rounded-full p-1.5 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-[#CE893F]" />
                  </div>
                  <div>
                    <a href="tel:(11) 3456-7890" className="text-[#333333] font-semibold hover:underline">
                      (11) 3456-7890
                    </a>
                    <p className="text-[#333333] text-sm">
                      {content.contactChurch}
                    </p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <button
                    onClick={() => openDirections(weddingData.wedding.ceremony.address)}
                    className="w-full inline-flex items-center justify-center rounded-md font-medium transition-colors 
                               bg-[#DAB259] text-[#333333] hover:bg-[#C5A04D] h-12 py-3 px-6 text-base"
                  >
                    {content.getDirections}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Recepção */}
          <div className="bg-[#FDFBF2] rounded-lg shadow-lg border-none overflow-hidden">
            <div className="p-6 pb-4">
              <h3 className="font-playfair text-2xl text-[#333333] font-semibold text-center">
                {content.reception}
              </h3>
            </div>
            <div className="px-6 pb-6">
              {/* Imagen real del local de recepción */}
              <div className="w-full h-48 rounded-md mb-6 overflow-hidden">
                <img 
                  src="/CZ.jpeg" 
                  alt="Casa Zeeby"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="bg-[#F4ECC8] rounded-full p-1.5 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-[#CE893F]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#333333]">
                      {weddingData.wedding.reception.venue}
                    </p>
                    <p className="text-[#333333] text-sm">
                      {weddingData.wedding.reception.address}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-[#F4ECC8] rounded-full p-1.5 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-[#CE893F]" />
                  </div>
                  <div>
                    <p className="text-[#333333] font-semibold">
                      {weddingData.wedding.reception.time}
                    </p>
                    <p className="text-[#333333] text-sm">
                      04 de Outubro, 2025
                    </p>
                  </div>
                </div>

                {/* Teléfono de ejemplo - puedes agregar al weddingData si lo necesitas */}
                <div className="flex items-start gap-3">
                  <div className="bg-[#F4ECC8] rounded-full p-1.5 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-[#CE893F]" />
                  </div>
                  <div>
                    <a href="tel:(11) 9876-5432" className="text-[#333333] font-semibold hover:underline">
                      (11) 9876-5432
                    </a>
                    <p className="text-[#333333] text-sm">
                      {content.contactVenue}
                    </p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <button
                    onClick={() => openDirections(weddingData.wedding.reception.address)}
                    className="w-full inline-flex items-center justify-center rounded-md font-medium transition-colors 
                               bg-[#DAB259] text-[#333333] hover:bg-[#C5A04D] h-12 py-3 px-6 text-base"
                  >
                    {content.getDirections}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}