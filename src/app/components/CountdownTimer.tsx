'use client'
import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { weddingData } from "@/data/weddingData"

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  
  const { language } = useLanguage()

  useEffect(() => {
    // ✅ Movemos la fecha dentro del useEffect para evitar el warning
    const weddingDate = new Date(weddingData.wedding.date).getTime()
    
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = weddingDate - now
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      } else {
        // Detener el temporizador si la fecha ya pasó
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000)

    return () => clearInterval(timer)
  }, []) // ✅ Array de dependencias vacío - el useEffect solo se ejecuta una vez

  const labels = {
    es: { 
      days: 'Días', 
      hours: 'Horas', 
      minutes: 'Minutos', 
      seconds: 'Segundos', 
      title: 'Cuenta Regresiva',
      tagline: '¡Faltan pocos días para nuestro gran momento!'
    },
    pt: { 
      days: 'DIAS', 
      hours: 'HORAS', 
      minutes: 'MINUTOS', 
      seconds: 'SEGUNDOS', 
      title: 'Contagem Regressiva',
      tagline: 'Faltam poucos dias para o nosso grande momento!'
    },
    'pt-BR': { 
      days: 'DIAS', 
      hours: 'HORAS', 
      minutes: 'MINUTOS', 
      seconds: 'SEGUNDOS', 
      title: 'Contagem Regressiva',
      tagline: 'Faltam poucos dias para o nosso grande momento!'
    }
  }

  const currentLabels = labels[language] || labels.pt

  return (
    <section className="py-16 bg-[#F8F5EE]"> {/* Fondo crema */}
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[#3F4751] mb-4"> {/* Título responsive */}
          {currentLabels.title}
        </h2>
        <p className="text-xl text-stone-700 mb-12"> {/* Subtítulo añadido */}
          {currentLabels.tagline}
        </p>
        <div className="grid grid-cols-4 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {/* Caja para Días */}
          <div className="bg-[#FEFEFA] p-3 md:p-6 rounded-xl border border-gray-200 shadow"> {/* Padding responsive */}
            <div className="text-2xl md:text-4xl font-bold text-[#B88720] mb-1 md:mb-2">{timeLeft.days}</div> {/* Tamaño de número responsive */}
            <div className="text-xs md:text-sm uppercase text-[#515151]">{currentLabels.days}</div> {/* Tamaño de etiqueta responsive */}
          </div>
          {/* Caja para Horas */}
          <div className="bg-[#FEFEFA] p-3 md:p-6 rounded-xl border border-gray-200 shadow">
            <div className="text-2xl md:text-4xl font-bold text-[#B88720] mb-1 md:mb-2">{timeLeft.hours}</div>
            <div className="text-xs md:text-sm uppercase text-[#515151]">{currentLabels.hours}</div>
          </div>
          {/* Caja para Minutos */}
          <div className="bg-[#FEFEFA] p-3 md:p-6 rounded-xl border border-gray-200 shadow">
            <div className="text-2xl md:text-4xl font-bold text-[#B88720] mb-1 md:mb-2">{timeLeft.minutes}</div>
            <div className="text-xs md:text-sm uppercase text-[#515151]">{currentLabels.minutes}</div>
          </div>
          {/* Caja para Segundos */}
          <div className="bg-[#FEFEFA] p-3 md:p-6 rounded-xl border border-gray-200 shadow">
            <div className="text-2xl md:text-4xl font-bold text-[#B88720] mb-1 md:mb-2">{timeLeft.seconds}</div>
            <div className="text-xs md:text-sm uppercase text-[#515151]">{currentLabels.seconds}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CountdownTimer