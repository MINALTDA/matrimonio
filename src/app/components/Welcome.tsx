// // 'use client'

// // import { useLanguage } from '../../contexts/LanguageContext'
// // import { weddingData } from '../../data/weddingData'

// // export default function Welcome() {
// //   const languageContext = useLanguage()
// //   const language = languageContext?.language || 'es' // Valor por defecto
// //   const { messages, theme } = weddingData

// //   // Mensajes seguros con fallback
// //   const currentMessages = messages[language as keyof typeof messages] || messages.es

// //   return (
// //     <section id="welcome" className="py-20 px-4" style={{ backgroundColor: theme.colors.background }}>
// //       <div className="max-w-4xl mx-auto text-center">
// //         {/* Título principal */}
// //         <h2 
// //           className="text-4xl md:text-5xl mb-6 font-playfair"
// //           style={{ color: theme.colors.primary }}
// //         >
// //           {currentMessages?.welcome || "¡Bienvenidos a nuestro sitio!"}
// //         </h2>

// //         {/* Subtítulo */}
// //         <p 
// //           className="text-xl md:text-2xl mb-12 font-light leading-relaxed"
// //           style={{ color: theme.colors.text }}
// //         >
// //           {currentMessages?.subtitle || "Nos complace compartir con ustedes este momento tan especial"}
// //         </p>

// //         {/* Decoración */}
// //         <div className="flex justify-center items-center space-x-4 mb-12">
// //           <div 
// //             className="w-16 h-px"
// //             style={{ backgroundColor: theme.colors.accent }}
// //           ></div>
// //           <div 
// //             className="w-3 h-3 rounded-full"
// //             style={{ backgroundColor: theme.colors.accent }}
// //           ></div>
// //           <div 
// //             className="w-16 h-px"
// //             style={{ backgroundColor: theme.colors.accent }}
// //           ></div>
// //         </div>

// //         {/* Historia de amor */}
// //         <div className="max-w-3xl mx-auto">
// //           <p 
// //             className="text-lg leading-relaxed font-light"
// //             style={{ color: theme.colors.text }}
// //           >
// //             {currentMessages?.story || "Nuestra historia comenzó cuando nos conocimos. Desde entonces, hemos construido juntos un amor lleno de risas, aventuras y sueños compartilhados."}
// //           </p>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }







// 'use client'

// import { useLanguage } from '../../contexts/LanguageContext'
// import { weddingData } from '../../data/weddingData'

// export default function Welcome() {
//   const { language } = useLanguage()
//   const { messages, theme } = weddingData

//   const currentMessages = messages[language as keyof typeof messages]

//   return (
//     <section id="welcome" className="py-20 px-4" style={{ backgroundColor: theme.colors.background }}>
//       <div className="max-w-4xl mx-auto text-center">
//         {/* Título principal */}
//         <h2 
//           className="text-4xl md:text-5xl mb-6 font-playfair"
//           style={{ color: theme.colors.primary }}
//         >
//           {currentMessages.welcome}
//         </h2>

//         {/* Subtítulo */}
//         <p 
//           className="text-xl md:text-2xl mb-12 font-light leading-relaxed"
//           style={{ color: theme.colors.text }}
//         >
//           {currentMessages.subtitle}
//         </p>

//         {/* Decoración */}
//         <div className="flex justify-center items-center space-x-4 mb-12">
//           <div 
//             className="w-16 h-px"
//             style={{ backgroundColor: theme.colors.accent }}
//           ></div>
//           <div 
//             className="w-3 h-3 rounded-full"
//             style={{ backgroundColor: theme.colors.accent }}
//           ></div>
//           <div 
//             className="w-16 h-px"
//             style={{ backgroundColor: theme.colors.accent }}
//           ></div>
//         </div>

//         {/* Historia de amor */}
//         <div className="max-w-3xl mx-auto">
//           <p 
//             className="text-lg leading-relaxed font-light"
//             style={{ color: theme.colors.text }}
//           >
//             {currentMessages.story}
//           </p>
//         </div>
//       </div>
//     </section>
//   )
// }





'use client'

import { useLanguage } from '../../contexts/LanguageContext'
import { weddingData } from '../../data/weddingData'

export default function Welcome() {
  const { language } = useLanguage()
  const { messages } = weddingData

  const currentMessages = messages[language as keyof typeof messages]

  return (
    <section id="welcome" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Título principal */}
        <h2 className="text-4xl md:text-5xl mb-6 font-playfair text-wedding-primary romantic-float">
          {currentMessages.welcome}
        </h2>

        {/* Subtítulo */}
        <p className="text-xl md:text-2xl mb-12 font-light leading-relaxed text-wedding-text">
          {currentMessages.subtitle}
        </p>

        {/* Decoración */}
        <div className="flex justify-center items-center space-x-4 mb-12">
          <div className="w-16 h-px bg-wedding-accent"></div>
          <div className="w-3 h-3 rounded-full bg-wedding-accent gentle-pulse"></div>
          <div className="w-16 h-px bg-wedding-accent"></div>
        </div>

        {/* Historia de amor */}
        <div className="max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed font-light text-wedding-text">
            {currentMessages.story}
          </p>
        </div>
      </div>
    </section>
  )
}