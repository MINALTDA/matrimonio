// "use client"

// import { useState, useEffect } from "react"
// import { useLanguage } from "@/contexts/LanguageContext"
// import { weddingData } from "@/data/weddingData"

// // Generar posiciones fijas para las partículas (sin Math.random)
// const PARTICLE_POSITIONS = [
//   { left: 15, delay: 0, duration: 20 },
//   { left: 25, delay: 2, duration: 18 },
//   { left: 35, delay: 4, duration: 22 },
//   { left: 45, delay: 1, duration: 19 },
//   { left: 55, delay: 3, duration: 21 },
//   { left: 65, delay: 5, duration: 17 },
//   { left: 75, delay: 2.5, duration: 23 },
//   { left: 85, delay: 4.5, duration: 16 },
//   { left: 95, delay: 1.5, duration: 24 },
//   { left: 5, delay: 3.5, duration: 18 },
//   { left: 20, delay: 6, duration: 20 },
//   { left: 30, delay: 0.5, duration: 19 },
//   { left: 40, delay: 2.8, duration: 21 },
//   { left: 50, delay: 4.2, duration: 17 },
//   { left: 60, delay: 1.8, duration: 22 },
//   { left: 70, delay: 3.2, duration: 18 },
//   { left: 80, delay: 5.5, duration: 20 },
//   { left: 90, delay: 0.8, duration: 23 },
//   { left: 10, delay: 4.8, duration: 19 },
//   { left: 88, delay: 2.2, duration: 21 },
// ]

// export default function Hero() {
//   const { language, changeLanguage } = useLanguage()
//   const { couple, wedding, messages } = weddingData
//   const [isLoaded, setIsLoaded] = useState(false)
//   const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//     setIsLoaded(true)

//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth) * 100,
//         y: (e.clientY / window.innerHeight) * 100,
//       })
//     }

//     window.addEventListener("mousemove", handleMouseMove)
//     return () => window.removeEventListener("mousemove", handleMouseMove)
//   }, [])

//   const formatDateParts = (dateString: string) => {
//     const date = new Date(dateString)
//     const day = date.getDate().toString().padStart(2, "0")
//     const month = (date.getMonth() + 1).toString().padStart(2, "0")
//     const year = date.getFullYear().toString()
//     return { day, month, year }
//   }

//   const { day, month, year } = formatDateParts(wedding.date)
//   const currentMessages = messages[language as keyof typeof messages]

//   const scrollToNext = () => {
//     window.scrollTo({
//       top: window.innerHeight,
//       behavior: "smooth",
//     })
//   }

//   // Función para hacer scroll a la sección RSVP
//   const scrollToRSVP = () => {
//     const rsvpSection = document.querySelector('section:has(form)') || 
//                        document.querySelector('[data-section="rsvp"]') ||
//                        document.querySelector('section:nth-of-type(6)') // Ajusta el número según el orden de tus secciones
    
//     if (rsvpSection) {
//       rsvpSection.scrollIntoView({
//         behavior: "smooth",
//         block: "start"
//       })
//     } else {
//       // Fallback: scroll a una posición estimada
//       const estimatedPosition = window.innerHeight * 5 // Ajusta según tu layout
//       window.scrollTo({
//         top: estimatedPosition,
//         behavior: "smooth"
//       })
//     }
//   }

//   // No renderizar partículas hasta que el componente esté montado
//   if (!mounted) {
//     return (
//       <section className="hero-container">
//         <div className="hero-background">
//           <div
//             className="hero-gradient"
//             style={{
//               background: `radial-gradient(circle at 50% 50%, 
//               rgba(139, 75, 107, 0.8) 0%, 
//               rgba(212, 175, 55, 0.6) 35%, 
//               rgba(139, 75, 107, 0.9) 100%)`,
//             }}
//           />
//         </div>

//         <div className="language-switcher">
//           <button className="language-btn" aria-label="Cambiar idioma">
//             <span className={language === "es" ? "active" : ""}>ES</span>
//             <span className="separator">|</span>
//             <span className={language === "pt" ? "active" : ""}>PT</span>
//           </button>
//         </div>

//         <div className="hero-content loaded">
//           <div className="hero-date">
//             <div className="date-container">
//               <span className="date-part">{day}</span>
//               <div className="date-separator">
//                 <div className="separator-dot"></div>
//               </div>
//               <span className="date-part">{month}</span>
//               <div className="date-separator">
//                 <div className="separator-dot"></div>
//               </div>
//               <span className="date-part">{year}</span>
//             </div>
//             <div className="date-label">{language === "es" ? "Nuestra Boda" : "Nosso Casamento"}</div>
//           </div>

//           <div className="hero-names">
//             <h1 className="names-container">
//               <span className="name name-groom">{couple.groom}</span>
//               <span className="ampersand">&</span>
//               <span className="name name-bride">{couple.bride}</span>
//             </h1>
//           </div>

//           <div className="hero-message">
//             <p className="invitation-text">{currentMessages.invitation}</p>
//           </div>

//           <div className="hero-actions">
//             <button className="cta-primary" onClick={scrollToNext}>
//               <span>{language === "es" ? "Descubrir más" : "Descobrir mais"}</span>
//               <div className="btn-shine"></div>
//             </button>

//             <button className="cta-secondary" onClick={scrollToRSVP}>
//               <span>{language === "es" ? "Confirmar asistencia" : "Confirmar presença"}</span>
//             </button>
//           </div>
//         </div>
//       </section>
//     )
//   }

//   return (
//     <section className="hero-container">
//       {/* Background with guaranteed coverage */}
//       <div className="hero-background">
//         {/* Static gradient that always shows */}
//         <div className="hero-gradient" />

//         {/* Particles only if mounted */}
//         {mounted && (
//           <div className="hero-particles">
//             {PARTICLE_POSITIONS.map((particle, i) => (
//               <div
//                 key={i}
//                 className="particle"
//                 style={{
//                   left: `${particle.left}%`,
//                   animationDelay: `${particle.delay}s`,
//                   animationDuration: `${particle.duration}s`,
//                 }}
//               />
//             ))}
//           </div>
//         )}

//         {/* Geometric shapes */}
//         <div className="hero-shapes">
//           <div className="shape shape-1"></div>
//           <div className="shape shape-2"></div>
//           <div className="shape shape-3"></div>
//         </div>
//       </div>

//       {/* Language Switcher */}
//       <div className="language-switcher">
//         <button
//           onClick={() => changeLanguage(language === "es" ? "pt-BR" : "es")}
//           className="language-btn"
//           aria-label="Cambiar idioma"
//         >
//           <span className={language === "es" ? "active" : ""}>ES</span>
//           <span className="separator">|</span>
//           <span className={language === "pt" ? "active" : ""}>PT</span>
//         </button>
//       </div>

//       {/* Main Content - always show with loaded class */}
//       <div className="hero-content loaded">
//         {/* Date Display */}
//         <div className="hero-date">
//           <div className="date-container">
//             <span className="date-part">{day}</span>
//             <div className="date-separator">
//               <div className="separator-dot"></div>
//             </div>
//             <span className="date-part">{month}</span>
//             <div className="date-separator">
//               <div className="separator-dot"></div>
//             </div>
//             <span className="date-part">{year}</span>
//           </div>
//           <div className="date-label">{language === "es" ? "Nuestra Boda" : "Nosso Casamento"}</div>
//         </div>

//         {/* Names */}
//         <div className="hero-names">
//           <h1 className="names-container">
//             <span className="name name-groom">{couple.groom}</span>
//             <span className="ampersand">&</span>
//             <span className="name name-bride">{couple.bride}</span>
//           </h1>
//         </div>

//         {/* Invitation Message */}
//         <div className="hero-message">
//           <p className="invitation-text">{currentMessages.invitation}</p>
//         </div>

//         {/* CTA Buttons */}
//         <div className="hero-actions">
//           <button className="cta-primary" onClick={scrollToNext} aria-label="Descubrir más sobre nuestra boda">
//             <span>{language === "es" ? "Descubrir más" : "Descobrir mais"}</span>
//             <div className="btn-shine"></div>
//           </button>

//           <button className="cta-secondary" onClick={scrollToRSVP} aria-label="Confirmar asistencia a la boda">
//             <span>{language === "es" ? "Confirmar asistencia" : "Confirmar presença"}</span>
//           </button>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="scroll-indicator" onClick={scrollToNext}>
//           <div className="scroll-text">{language === "es" ? "Desliza para continuar" : "Deslize para continuar"}</div>
//           <div className="scroll-arrow">
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//             </svg>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Navigation Hint */}
//       <div className="hero-nav-hint">
//         <div className="nav-dots">
//           <div className="dot active" aria-label="Sección actual"></div>
//           <div className="dot" aria-label="Siguiente sección"></div>
//           <div className="dot" aria-label="Tercera sección"></div>
//           <div className="dot" aria-label="Cuarta sección"></div>
//         </div>
//       </div>
//     </section>
//   )
// }







"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { weddingData } from "@/data/weddingData"

// Generar posiciones fijas para las partículas (sin Math.random)
const PARTICLE_POSITIONS = [
  { left: 15, delay: 0, duration: 20 },
  { left: 25, delay: 2, duration: 18 },
  { left: 35, delay: 4, duration: 22 },
  { left: 45, delay: 1, duration: 19 },
  { left: 55, delay: 3, duration: 21 },
  { left: 65, delay: 5, duration: 17 },
  { left: 75, delay: 2.5, duration: 23 },
  { left: 85, delay: 4.5, duration: 16 },
  { left: 95, delay: 1.5, duration: 24 },
  { left: 5, delay: 3.5, duration: 18 },
  { left: 20, delay: 6, duration: 20 },
  { left: 30, delay: 0.5, duration: 19 },
  { left: 40, delay: 2.8, duration: 21 },
  { left: 50, delay: 4.2, duration: 17 },
  { left: 60, delay: 1.8, duration: 22 },
  { left: 70, delay: 3.2, duration: 18 },
  { left: 80, delay: 5.5, duration: 20 },
  { left: 90, delay: 0.8, duration: 23 },
  { left: 10, delay: 4.8, duration: 19 },
  { left: 88, delay: 2.2, duration: 21 },
]

export default function Hero() {
  const { language, changeLanguage } = useLanguage()
  const { couple, wedding, messages } = weddingData
  // ✅ Eliminadas las variables no usadas: isLoaded y mousePosition
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // ✅ Eliminado el código del mouse que no se usa
  }, [])

  const formatDateParts = (dateString: string) => {
    const date = new Date(dateString)
    const day = (date.getDate()+1).toString().padStart(2, "0")
    const month = (date.getMonth() + 1).toString().padStart(2, "0")
    const year = date.getFullYear().toString()
    return { day, month, year }
  }

  const { day, month, year } = formatDateParts(wedding.date)
  const currentMessages = messages[language as keyof typeof messages]

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  // Función para hacer scroll a la sección RSVP
  const scrollToRSVP = () => {
    const rsvpSection = document.querySelector('section:has(form)') || 
                       document.querySelector('[data-section="rsvp"]') ||
                       document.querySelector('section:nth-of-type(6)') // Ajusta el número según el orden de tus secciones
    
    if (rsvpSection) {
      rsvpSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    } else {
      // Fallback: scroll a una posición estimada
      const estimatedPosition = window.innerHeight * 5 // Ajusta según tu layout
      window.scrollTo({
        top: estimatedPosition,
        behavior: "smooth"
      })
    }
  }

  // No renderizar partículas hasta que el componente esté montado
  if (!mounted) {
    return (
      <section className="hero-container">
        <div className="hero-background">
          <div
            className="hero-gradient"
            style={{
              background: `radial-gradient(circle at 50% 50%, 
              rgba(139, 75, 107, 0.8) 0%, 
              rgba(212, 175, 55, 0.6) 35%, 
              rgba(139, 75, 107, 0.9) 100%)`,
            }}
          />
        </div>

        <div className="language-switcher">
          <button className="language-btn" aria-label="Cambiar idioma">
            <span className={language === "es" ? "active" : ""}>ES</span>
            <span className="separator">|</span>
            <span className={language === "pt" ? "active" : ""}>PT</span>
          </button>
        </div>

        <div className="hero-content loaded">
          <div className="hero-date">
            <div className="date-container">
              <span className="date-part">{day}</span>
              <div className="date-separator">
                <div className="separator-dot"></div>
              </div>
              <span className="date-part">{month}</span>
              <div className="date-separator">
                <div className="separator-dot"></div>
              </div>
              <span className="date-part">{year}</span>
            </div>
            <div className="date-label">{language === "es" ? "Nuestro Matrimonio" : "Nosso Matrimônio"}</div>
          </div>

          <div className="hero-names">
            <h1 className="names-container">
              <span className="name name-groom">{couple.groom}</span>
              <span className="ampersand">&</span>
              <span className="name name-bride">{couple.bride}</span>
            </h1>
          </div>

          <div className="hero-message">
            <p className="invitation-text">{currentMessages.invitation}</p>
          </div>

          <div className="hero-actions">
            <button className="cta-primary" onClick={scrollToNext}>
              <span>{language === "es" ? "Descubrir más" : "Descobrir mais"}</span>
              <div className="btn-shine"></div>
            </button>

            <button className="cta-secondary" onClick={scrollToRSVP}>
              <span>{language === "es" ? "Confirmar asistencia" : "Confirmar presença"}</span>
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="hero-container">
      {/* Background with guaranteed coverage */}
      <div className="hero-background">
        {/* Static gradient that always shows */}
        <div className="hero-gradient" />

        {/* Particles only if mounted */}
        {mounted && (
          <div className="hero-particles">
            {PARTICLE_POSITIONS.map((particle, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${particle.left}%`,
                  animationDelay: `${particle.delay}s`,
                  animationDuration: `${particle.duration}s`,
                }}
              />
            ))}
          </div>
        )}

        {/* Geometric shapes */}
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      {/* Language Switcher */}
      <div className="language-switcher">
        <button
          onClick={() => changeLanguage(language === "es" ? "pt-BR" : "es")}
          className="language-btn"
          aria-label="Cambiar idioma"
        >
          <span className={language === "es" ? "active" : ""}>ES</span>
          <span className="separator">|</span>
          <span className={language === "pt" ? "active" : ""}>PT</span>
        </button>
      </div>

      {/* Main Content - always show with loaded class */}
      <div className="hero-content loaded">
        {/* Date Display */}
        <div className="hero-date">
          <div className="date-container">
            <span className="date-part">{day}</span>
            <div className="date-separator">
              <div className="separator-dot"></div>
            </div>
            <span className="date-part">{month}</span>
            <div className="date-separator">
              <div className="separator-dot"></div>
            </div>
            <span className="date-part">{year}</span>
          </div>
          <div className="date-label">{language === "es" ? "Nuestro Matrimonio" : "Nosso Matrimônio"}</div>
        </div>

        {/* Names */}
        <div className="hero-names">
          <h1 className="names-container">
            <span className="name name-groom">{couple.groom}</span>
            <span className="ampersand">&</span>
            <span className="name name-bride">{couple.bride}</span>
          </h1>
        </div>

        {/* Invitation Message */}
        <div className="hero-message">
          <p className="invitation-text">{currentMessages.invitation}</p>
        </div>

        {/* CTA Buttons */}
        <div className="hero-actions">
          <button className="cta-primary" onClick={scrollToNext} aria-label="Descubrir más sobre nuestra boda">
            <span>{language === "es" ? "Descubrir más" : "Descobrir mais"}</span>
            <div className="btn-shine"></div>
          </button>

          <button className="cta-secondary" onClick={scrollToRSVP} aria-label="Confirmar asistencia a la boda">
            <span>{language === "es" ? "Confirmar asistencia" : "Confirmar presença"}</span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator" onClick={scrollToNext}>
          <div className="scroll-text">{language === "es" ? "Desliza para continuar" : "Deslize para continuar"}</div>
          <div className="scroll-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Hint */}
      <div className="hero-nav-hint">
        <div className="nav-dots">
          <div className="dot active" aria-label="Sección actual"></div>
          <div className="dot" aria-label="Siguiente sección"></div>
          <div className="dot" aria-label="Tercera sección"></div>
          <div className="dot" aria-label="Cuarta sección"></div>
        </div>
      </div>
    </section>
  )
}