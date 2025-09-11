'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { weddingData } from '../../data/weddingData'

export default function Hero() {
  const { language, changeLanguage } = useLanguage()
  const { couple, wedding, messages } = weddingData
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsLoaded(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const formatDateParts = (dateString: string) => {
    const date = new Date(dateString)
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear().toString()
    return { day, month, year }
  }

  const { day, month, year } = formatDateParts(wedding.date)
  const currentMessages = messages[language as keyof typeof messages]

  return (
    <section className="hero-container">
      {/* Background con parallax y efectos */}
      <div className="hero-background">
        {/* Gradiente dinámico que sigue el mouse */}
        <div 
          className="hero-gradient"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(139, 75, 107, 0.8) 0%, 
              rgba(212, 175, 55, 0.6) 35%, 
              rgba(139, 75, 107, 0.9) 100%)`
          }}
        />
        
        {/* Partículas flotantes */}
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>

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
          onClick={() => changeLanguage(language === 'es' ? 'pt-BR' : 'es')}
          className="language-btn"
        >
          <span className={language === 'es' ? 'active' : ''}>ES</span>
          <span className="separator">|</span>
          <span className={language === 'pt' ? 'active' : ''}>PT</span>
        </button>
      </div>

      {/* Main Content */}
      <div className={`hero-content ${isLoaded ? 'loaded' : ''}`}>
        
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
          <div className="date-label">
            {language === 'es' ? 'Nuestra Boda' : 'Nosso Casamento'}
          </div>
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
          <p className="invitation-text">
            {currentMessages.invitation}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="hero-actions">
          <button 
            className="cta-primary"
            onClick={() => {
              document.getElementById('welcome')?.scrollIntoView({ 
                behavior: 'smooth' 
              })
            }}
          >
            <span>{language === 'es' ? 'Descubrir más' : 'Descobrir mais'}</span>
            <div className="btn-shine"></div>
          </button>
          
          <button className="cta-secondary">
            <span>{language === 'es' ? 'Confirmar asistencia' : 'Confirmar presença'}</span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-text">
            {language === 'es' ? 'Desliza para continuar' : 'Deslize para continuar'}
          </div>
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
          <div className="dot active"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </section>
  )
}