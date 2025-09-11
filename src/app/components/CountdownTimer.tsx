// 'use client'

// import { useState, useEffect } from 'react'
// import { useLanguage } from '../../contexts/LanguageContext'
// import { weddingData } from '../../data/weddingData'

// interface TimeLeft {
//   days: number
//   hours: number
//   minutes: number
//   seconds: number
// }

// export default function CountdownTimer() {
//   const languageContext = useLanguage()
//   const language = languageContext?.language || 'es' // Valor por defecto
//   const { wedding, theme } = weddingData
  
//   const [timeLeft, setTimeLeft] = useState<TimeLeft>({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0
//   })

//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   useEffect(() => {
//     const calculateTimeLeft = () => {
//       const weddingDate = new Date(wedding.date + 'T' + wedding.time)
//       const now = new Date()
//       const difference = weddingDate.getTime() - now.getTime()

//       if (difference > 0) {
//         setTimeLeft({
//           days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//           hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//           minutes: Math.floor((difference / 1000 / 60) % 60),
//           seconds: Math.floor((difference / 1000) % 60)
//         })
//       } else {
//         setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
//       }
//     }

//     calculateTimeLeft()
//     const timer = setInterval(calculateTimeLeft, 1000)

//     return () => clearInterval(timer)
//   }, [wedding.date, wedding.time])

//   const labels = {
//     es: {
//       title: "Faltan",
//       days: "Días",
//       hours: "Horas", 
//       minutes: "Minutos",
//       seconds: "Segundos",
//       subtitle: "para nuestro gran día"
//     },
//     pt: {
//       title: "Faltam",
//       days: "Dias",
//       hours: "Horas",
//       minutes: "Minutos", 
//       seconds: "Segundos",
//       subtitle: "para nosso grande dia"
//     }
//   }

//   const currentLabels = labels[language as keyof typeof labels] || labels.es

//   if (!mounted) {
//     return (
//       <section className="py-20 px-4" style={{ backgroundColor: theme.colors.secondary }}>
//         <div className="max-w-6xl mx-auto text-center">
//           <div className="animate-pulse">
//             <div className="h-12 bg-gray-300 rounded mb-8 mx-auto w-64"></div>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//               {[...Array(4)].map((_, i) => (
//                 <div key={i} className="bg-white rounded-lg p-6 shadow-lg">
//                   <div className="h-16 bg-gray-300 rounded mb-4"></div>
//                   <div className="h-6 bg-gray-300 rounded"></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     )
//   }

//   return (
//     <section className="py-20 px-4" style={{ backgroundColor: theme.colors.secondary }}>
//       <div className="max-w-6xl mx-auto text-center">
//         {/* Título */}
//         <h2 
//           className="text-3xl md:text-4xl font-playfair mb-4"
//           style={{ color: theme.colors.primary }}
//         >
//           {currentLabels.title}
//         </h2>
        
//         <p 
//           className="text-lg mb-12 font-light"
//           style={{ color: theme.colors.text }}
//         >
//           {currentLabels.subtitle}
//         </p>

//         {/* Contador */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
//           {/* Días */}
//           <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
//             <div 
//               className="text-4xl md:text-5xl font-bold mb-2 font-playfair"
//               style={{ color: theme.colors.primary }}
//             >
//               {timeLeft.days.toString().padStart(2, '0')}
//             </div>
//             <div 
//               className="text-sm md:text-base font-medium uppercase tracking-wide"
//               style={{ color: theme.colors.text }}
//             >
//               {currentLabels.days}
//             </div>
//           </div>

//           {/* Horas */}
//           <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
//             <div 
//               className="text-4xl md:text-5xl font-bold mb-2 font-playfair"
//               style={{ color: theme.colors.primary }}
//             >
//               {timeLeft.hours.toString().padStart(2, '0')}
//             </div>
//             <div 
//               className="text-sm md:text-base font-medium uppercase tracking-wide"
//               style={{ color: theme.colors.text }}
//             >
//               {currentLabels.hours}
//             </div>
//           </div>

//           {/* Minutos */}
//           <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
//             <div 
//               className="text-4xl md:text-5xl font-bold mb-2 font-playfair"
//               style={{ color: theme.colors.primary }}
//             >
//               {timeLeft.minutes.toString().padStart(2, '0')}
//             </div>
//             <div 
//               className="text-sm md:text-base font-medium uppercase tracking-wide"
//               style={{ color: theme.colors.text }}
//             >
//               {currentLabels.minutes}
//             </div>
//           </div>

//           {/* Segundos */}
//           <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
//             <div 
//               className="text-4xl md:text-5xl font-bold mb-2 font-playfair"
//               style={{ color: theme.colors.primary }}
//             >
//               {timeLeft.seconds.toString().padStart(2, '0')}
//             </div>
//             <div 
//               className="text-sm md:text-base font-medium uppercase tracking-wide"
//               style={{ color: theme.colors.text }}
//             >
//               {currentLabels.seconds}
//             </div>
//           </div>
//         </div>

//         {/* Decoración */}
//         <div className="mt-12 flex justify-center items-center space-x-4">
//           <div 
//             className="w-12 h-px"
//             style={{ backgroundColor: theme.colors.accent }}
//           ></div>
//           <div 
//             className="w-2 h-2 rounded-full"
//             style={{ backgroundColor: theme.colors.accent }}
//           ></div>
//           <div 
//             className="w-12 h-px"
//             style={{ backgroundColor: theme.colors.accent }}
//           ></div>
//         </div>
//       </div>
//     </section>
//   )
// }








'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { weddingData } from '../../data/weddingData'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer() {
  const { language } = useLanguage()
  const { wedding, theme } = weddingData
  
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const calculateTimeLeft = () => {
      const weddingDate = new Date(wedding.date + 'T' + wedding.time)
      const now = new Date()
      const difference = weddingDate.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [wedding.date, wedding.time])

  const labels = {
    es: {
      title: "Faltan",
      days: "Días",
      hours: "Horas", 
      minutes: "Minutos",
      seconds: "Segundos",
      subtitle: "para nuestro gran día"
    },
    pt: {
      title: "Faltam",
      days: "Dias",
      hours: "Horas",
      minutes: "Minutos", 
      seconds: "Segundos",
      subtitle: "para nosso grande dia"
    }
  }

  const currentLabels = labels[language as keyof typeof labels]

  if (!mounted) {
    return (
      <section className="py-20 px-4" style={{ backgroundColor: theme.colors.secondary }}>
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-300 rounded mb-8 mx-auto w-64"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="h-16 bg-gray-300 rounded mb-4"></div>
                  <div className="h-6 bg-gray-300 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-4" style={{ backgroundColor: theme.colors.secondary }}>
      <div className="max-w-6xl mx-auto text-center">
        {/* Título */}
        <h2 
          className="text-3xl md:text-4xl font-playfair mb-4"
          style={{ color: theme.colors.primary }}
        >
          {currentLabels.title}
        </h2>
        
        <p 
          className="text-lg mb-12 font-light"
          style={{ color: theme.colors.text }}
        >
          {currentLabels.subtitle}
        </p>

        {/* Contador */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {/* Días */}
          <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div 
              className="text-4xl md:text-5xl font-bold mb-2 font-playfair"
              style={{ color: theme.colors.primary }}
            >
              {timeLeft.days.toString().padStart(2, '0')}
            </div>
            <div 
              className="text-sm md:text-base font-medium uppercase tracking-wide"
              style={{ color: theme.colors.text }}
            >
              {currentLabels.days}
            </div>
          </div>

          {/* Horas */}
          <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div 
              className="text-4xl md:text-5xl font-bold mb-2 font-playfair"
              style={{ color: theme.colors.primary }}
            >
              {timeLeft.hours.toString().padStart(2, '0')}
            </div>
            <div 
              className="text-sm md:text-base font-medium uppercase tracking-wide"
              style={{ color: theme.colors.text }}
            >
              {currentLabels.hours}
            </div>
          </div>

          {/* Minutos */}
          <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div 
              className="text-4xl md:text-5xl font-bold mb-2 font-playfair"
              style={{ color: theme.colors.primary }}
            >
              {timeLeft.minutes.toString().padStart(2, '0')}
            </div>
            <div 
              className="text-sm md:text-base font-medium uppercase tracking-wide"
              style={{ color: theme.colors.text }}
            >
              {currentLabels.minutes}
            </div>
          </div>

          {/* Segundos */}
          <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div 
              className="text-4xl md:text-5xl font-bold mb-2 font-playfair"
              style={{ color: theme.colors.primary }}
            >
              {timeLeft.seconds.toString().padStart(2, '0')}
            </div>
            <div 
              className="text-sm md:text-base font-medium uppercase tracking-wide"
              style={{ color: theme.colors.text }}
            >
              {currentLabels.seconds}
            </div>
          </div>
        </div>

        {/* Decoración */}
        <div className="mt-12 flex justify-center items-center space-x-4">
          <div 
            className="w-12 h-px"
            style={{ backgroundColor: theme.colors.accent }}
          ></div>
          <div 
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: theme.colors.accent }}
          ></div>
          <div 
            className="w-12 h-px"
            style={{ backgroundColor: theme.colors.accent }}
          ></div>
        </div>
      </div>
    </section>
  )
}