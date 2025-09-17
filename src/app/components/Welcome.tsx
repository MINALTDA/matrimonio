// 'use client'

// import { useLanguage } from '../../contexts/LanguageContext'
// import { weddingData } from '../../data/weddingData'

// export default function Welcome() {
//   const { language } = useLanguage()
//   const { messages } = weddingData

//   const currentMessages = messages[language as keyof typeof messages]

//   return (
//     <section id="welcome" className="py-20 px-4 bg-white">
//       <div className="max-w-4xl mx-auto text-center">
//         {/* Título principal */}
//         <h2 className="text-4xl md:text-5xl mb-6 font-playfair text-wedding-primary romantic-float">
//           {currentMessages.welcome}
//         </h2>

//         {/* Subtítulo */}
//         <p className="text-xl md:text-2xl mb-12 font-light leading-relaxed text-wedding-text">
//           {currentMessages.subtitle}
//         </p>

//         {/* Decoración */}
//         <div className="flex justify-center items-center space-x-4 mb-12">
//           <div className="w-16 h-px bg-wedding-accent"></div>
//           <div className="w-3 h-3 rounded-full bg-wedding-accent gentle-pulse"></div>
//           <div className="w-16 h-px bg-wedding-accent"></div>
//         </div>

//         {/* Historia de amor */}
//         <div className="max-w-3xl mx-auto">
//           <p className="text-lg leading-relaxed font-light text-wedding-text">
//             {currentMessages.story}
//           </p>
//         </div>
//       </div>
//     </section>
//   )
// }



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

  // // Formatear la fecha
  // const formatDate = (dateString: string) => {
  //   const date = new Date(dateString)
  //   const options: Intl.DateTimeFormatOptions = { 
  //     year: 'numeric', 
  //     month: 'long', 
  //     day: 'numeric' 
  //   }
    
  //   if (language === 'es') {
  //     return date.toLocaleDateString('es-ES', options)
  //   } else {
  //     return date.toLocaleDateString('pt-BR', options)
  //   }
  // }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Contenedor principal con fondo morado oscuro */}
        <div className="max-w-4xl mx-auto bg-[#894764] rounded-lg shadow-xl p-10 md:p-12 text-white mb-16">
          {/* Título "Bem-vindos!" */}
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            {content.title}
          </h1>

          {/* Primer párrafo */}
          <p className="text-lg mb-6 leading-relaxed text-gray-200">
            {content.paragraph1}
          </p>
          
          {/* Segundo párrafo */}
          <p className="text-lg mb-6 leading-relaxed text-gray-200">
            {content.paragraph2}
          </p>

          {/* Tercer párrafo */}
          <p className="text-lg mb-8 leading-relaxed text-gray-200">
            {content.paragraph3}
          </p>

          {/* Línea divisoria */}
          <hr className="border-t border-gray-400 my-8" />

          {/* Mensaje de cierre "Com amor," */}
          <p className="text-xl text-center mb-2 text-gray-200">
            {content.closing}
          </p>

          {/* Nombres de la pareja */}
          <p className="text-3xl font-bold text-center text-white">
            {weddingData.couple.bride} & {weddingData.couple.groom}
          </p>
        </div>
      </div>
    </section>
  )
}