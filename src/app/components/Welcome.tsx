// src\app\components\Welcome.tsx
"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { weddingData } from "@/data/weddingData"

export default function Welcome() {
  const { language } = useLanguage()

  const welcomeContent = {
    es: {
      title: "¡Bienvenidos!",
      paragraph1: "Queridos familiares y amigos, es con inmensa alegría que los invitamos a celebrar con nosotros el inicio de una nueva jornada. Después de años de noviazgo, llegó el momento de oficializar nuestro amor ante Dios y de todos los que amamos.",
      paragraph2: "Este día representa no solo la unión de dos personas, sino también la unión de dos familias y de todos los amigos queridos que han formado parte de nuestra historia. Su presencia hará que este momento sea aún más especial.",
      paragraph3: "Los esperamos para compartir con nosotros mucha alegría, emoción y celebración. ¡Será un día inolvidable!",
      closing: "Con amor,",
      dateLabel: "Fecha",
      ceremonyLabel: "Ceremonia", 
      receptionLabel: "Recepción"
    },
    pt: {
      title: "Bem-vindos!",
      paragraph1: "Queridos familiares e amigos, é com imensa alegria que convidamos vocês para celebrar conosco o início de uma nova jornada. Depois de anos de namoro, chegou o momento de oficializar nosso amor diante de Deus e de todos que amamos.",
      paragraph2: "Este dia representa não apenas a união de duas pessoas, mas também a união de duas famílias e de todos os amigos queridos que fizeram parte da nossa história. Sua presença é fundamental para tornar este momento ainda mais especial.",
      paragraph3: "Esperamos vocês para compartilhar conosco muita alegria, emoção e celebração. Será um dia inesquecível!",
      closing: "Com amor,",
      dateLabel: "Data",
      ceremonyLabel: "Cerimônia",
      receptionLabel: "Recepção"
    },
    "pt-BR": {
      title: "Bem-vindos!",
      paragraph1: "Queridos familiares e amigos, é com imensa alegria que convidamos vocês para celebrar conosco o início de uma nova jornada. Depois de anos de namoro, chegou o momento de oficializar nosso amor diante de Deus e de todos que amamos.",
      paragraph2: "Este dia representa não apenas a união de duas pessoas, mas também a união de duas famílias e de todos os amigos queridos que fizeram parte da nossa história. Sua presença é fundamental para tornar este momento ainda mais especial.",
      paragraph3: "Esperamos vocês para compartilhar conosco muita alegria, emoção e celebração. Será um dia inesquecível!",
      closing: "Com amor,",
      dateLabel: "Data",
      ceremonyLabel: "Cerimônia",
      receptionLabel: "Recepção"
    }
  }

  const content = welcomeContent[language] || welcomeContent.pt

  return (
    <section className="welcome-section">
      {/* Background con imagen y overlay */}
      <div className="welcome-background">
        {/* Imagen de fondo */}
        <div className="welcome-bg-image"></div>
        
        {/* Overlay con gradiente */}
        <div className="welcome-overlay"></div>
        
        {/* Patrón decorativo opcional */}
        <div className="welcome-pattern"></div>
      </div>

      {/* Contenido principal */}
      <div className="welcome-content">
        <div className="container mx-auto px-6 md:px-4 relative z-10">
          
          {/* Decoración superior */}
          <div className="welcome-decoration-top">
            <div className="decoration-line"></div>
            <div className="decoration-heart">♥</div>
            <div className="decoration-line"></div>
          </div>

          {/* Contenedor principal con efecto cristal */}
          <div className="welcome-card">
            
            {/* Título principal */}
            <div className="welcome-header">
              <h1 className="welcome-title">
                {content.title}
              </h1>
              <div className="title-underline"></div>
            </div>

            {/* Contenido del mensaje */}
            <div className="welcome-message">
              
              {/* Primer párrafo */}
              <p className="welcome-paragraph">
                {content.paragraph1}
              </p>
              
              {/* Segundo párrafo */}
              <p className="welcome-paragraph">
                {content.paragraph2}
              </p>

              {/* Tercer párrafo */}
              <p className="welcome-paragraph">
                {content.paragraph3}
              </p>

              {/* Línea divisoria decorativa */}
              <div className="welcome-divider">
                <div className="divider-line"></div>
                <div className="divider-ornament">❦</div>
                <div className="divider-line"></div>
              </div>

              {/* Mensaje de cierre */}
              <div className="welcome-closing">
                <p className="closing-text">
                  {content.closing}
                </p>

                {/* Nombres de la pareja con estilo elegante */}
                <div className="couple-names">
                  <span className="groom-name">{weddingData.couple.groom}</span>
                  <span className="ampersand">&</span>
                  <span className="bride-name">{weddingData.couple.bride}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Decoración inferior */}
          <div className="welcome-decoration-bottom">
            <div className="decoration-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}





