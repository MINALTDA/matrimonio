"use client"

import { Clock } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { weddingData } from "@/data/weddingData"

export default function Timeline() {
  const { language } = useLanguage()

  const timelineContent = {
    es: {
      title: "Cronograma del Día",
      subtitle: "Confira la programación completa de nuestro gran día para no perder ningún momento especial."
    },
    pt: {
      title: "Cronograma do Dia",
      subtitle: "Confira a programação completa do nosso grande dia para não perder nenhum momento especial."
    },
    "pt-BR": {
      title: "Cronograma do Dia",
      subtitle: "Confira a programação completa do nosso grande dia para não perder nenhum momento especial."
    }
  }

  const content = timelineContent[language] || timelineContent.pt
  const timeline = weddingData.timeline[language] || weddingData.timeline.pt

  return (
    <section className="py-16 bg-[#FDF8ED]"> {/* Fondo crema claro */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          {/* Título principal igual a otras secciones */}
          <h2 className="text-5xl font-bold text-[#3F4751] mb-4">
            {content.title}
          </h2>
          <p className="text-[#666666] text-lg max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative pt-4 pb-4">
          {/* Línea vertical central */}
          <div className="absolute left-[20px] top-0 w-[2px] h-full bg-[#D4A82F] z-0"></div>

          {timeline.map((event, index) => (
            <div key={index} className="relative mb-8">
              {/* Círculo marcador del evento */}
              <div className="absolute left-[20px] top-0 w-10 h-10 rounded-full bg-[#D4A82F] border-2 border-[#B88B27] flex items-center justify-center -translate-x-1/2 mt-4 z-10">
                <Clock className="w-5 h-5 text-white" />
              </div>

              {/* Tarjeta del evento */}
              <div className="ml-12 bg-[#FDFCF6] rounded-lg shadow-md p-6 relative">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl text-[#333333] leading-tight pr-20">
                    {event.title}
                  </h3>
                  {/* Hora del evento, alineada a la derecha y en color dorado */}
                  <span className="font-semibold text-[#D4A82F] text-lg whitespace-nowrap ml-auto">
                    {event.time}
                  </span>
                </div>
                <p className="text-[#666666] text-base">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}