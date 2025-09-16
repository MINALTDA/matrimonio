// // src\app\components\Poll.tsx
// 'use client'

// import { useState } from 'react'
// import { useLanguage } from '../../contexts/LanguageContext'
// import { weddingData } from '../../data/weddingData'

// export default function Poll() {
//   const { language } = useLanguage()
//   const { messages, theme } = weddingData
//   const [selectedOption, setSelectedOption] = useState<string | null>(null)
//   const [hasVoted, setHasVoted] = useState(false)
//   const [votes, setVotes] = useState({
//     "París": 45,
//     "Roma": 32,
//     "Barcelona": 23,
//     "Paris": 45, // Para portugués
//     "Roma": 32,
//     "Barcelona": 23
//   })

//   const currentMessages = messages[language as keyof typeof messages]
//   const pollData = currentMessages.poll

//   const handleVote = () => {
//     if (selectedOption && !hasVoted) {
//       setVotes(prev => ({
//         ...prev,
//         [selectedOption]: prev[selectedOption as keyof typeof prev] + 1
//       }))
//       setHasVoted(true)
//     }
//   }

//   const getTotalVotes = () => {
//     const options = language === 'es' ? ["París", "Roma", "Barcelona"] : ["Paris", "Roma", "Barcelona"]
//     return options.reduce((total, option) => total + votes[option as keyof typeof votes], 0)
//   }

//   const getPercentage = (option: string) => {
//     const total = getTotalVotes()
//     return total > 0 ? Math.round((votes[option as keyof typeof votes] / total) * 100) : 0
//   }

//   return (
//     <section className="py-20 px-4" style={{ backgroundColor: theme.colors.secondary }}>
//       <div className="max-w-2xl mx-auto">
//         <div className="bg-white rounded-lg shadow-lg p-8">
//           {/* Título de la encuesta */}
//           <h3 
//             className="text-2xl md:text-3xl font-playfair text-center mb-8"
//             style={{ color: theme.colors.primary }}
//           >
//             {pollData.question}
//           </h3>

//           {/* Opciones de votación */}
//           <div className="space-y-4 mb-8">
//             {pollData.options.map((option, index) => (
//               <div key={index} className="relative">
//                 <button
//                   onClick={() => !hasVoted && setSelectedOption(option)}
//                   disabled={hasVoted}
//                   className={`w-full p-4 rounded-lg border-2 text-left transition-all duration-300 ${
//                     selectedOption === option 
//                       ? 'border-pink-400 bg-pink-50' 
//                       : 'border-gray-200 hover:border-pink-300'
//                   } ${hasVoted ? 'cursor-not-allowed' : 'cursor-pointer'}`}
//                 >
//                   <div className="flex justify-between items-center">
//                     <span className="font-medium" style={{ color: theme.colors.text }}>
//                       {option}
//                     </span>
//                     {hasVoted && (
//                       <span 
//                         className="text-sm font-bold"
//                         style={{ color: theme.colors.primary }}
//                       >
//                         {getPercentage(option)}%
//                       </span>
//                     )}
//                   </div>
                  
//                   {/* Barra de progreso */}
//                   {hasVoted && (
//                     <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
//                       <div 
//                         className="h-2 rounded-full transition-all duration-500"
//                         style={{ 
//                           width: `${getPercentage(option)}%`,
//                           backgroundColor: theme.colors.primary 
//                         }}
//                       />
//                     </div>
//                   )}
//                 </button>
//               </div>
//             ))}
//           </div>

//           {/* Botón de votar */}
//           {!hasVoted && (
//             <div className="text-center">
//               <button
//                 onClick={handleVote}
//                 disabled={!selectedOption}
//                 className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
//                   selectedOption 
//                     ? 'bg-pink-500 text-white hover:bg-pink-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1' 
//                     : 'bg-gray-300 text-gray-500 cursor-not-allowed'
//                 }`}
//                 style={{ 
//                   backgroundColor: selectedOption ? theme.colors.primary : undefined,
//                 }}
//               >
//                 {pollData.button}
//               </button>
//             </div>
//           )}

//           {/* Mensaje de agradecimiento */}
//           {hasVoted && (
//             <div className="text-center">
//               <p 
//                 className="text-lg font-medium"
//                 style={{ color: theme.colors.primary }}
//               >
//                 {language === 'es' ? '¡Gracias por votar!' : 'Obrigado por votar!'}
//               </p>
//               <p className="text-sm text-gray-600 mt-2">
//                 {language === 'es' 
//                   ? `Total de votos: ${getTotalVotes()}` 
//                   : `Total de votos: ${getTotalVotes()}`
//                 }
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   )
// }