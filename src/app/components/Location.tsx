// 'use client'

// import { motion } from 'framer-motion'
// import { useInView } from 'react-intersection-observer'
// import { MapPin, Clock, Car, Utensils, ExternalLink } from 'lucide-react'
// import { useTranslation } from '../../hooks/useTranslation'

// export default function Location() {
//   const { t, loading } = useTranslation('wedding')
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1
//   })

//   const scheduleItems = [
//     {
//       title: t('location.schedule.ceremony.title', 'Ceremonia'),
//       time: t('location.schedule.ceremony.time', '16:00 hrs'),
//       description: t('location.schedule.ceremony.description', 'Ceremonia religiosa en el Jardín Botánico'),
//       icon: Clock,
//       color: 'from-blue-400 to-blue-600'
//     },
//     {
//       title: t('location.schedule.cocktail.title', 'Cóctel'),
//       time: t('location.schedule.cocktail.time', '17:30 hrs'),
//       description: t('location.schedule.cocktail.description', 'Cóctel de bienvenida y sesión de fotos'),
//       icon: Utensils,
//       color: 'from-pink-400 to-pink-600'
//     },
//     {
//       title: t('location.schedule.reception.title', 'Recepción'),
//       time: t('location.schedule.reception.time', '19:00 hrs'),
//       description: t('location.schedule.reception.description', 'Cena y fiesta en el Salón de Eventos'),
//       icon: Car,
//       color: 'from-gold-400 to-yellow-600'
//     }
//   ]

//   const additionalInfo = [
//     t('location.additionalInfo.dressCode', 'Dress code: Formal / Cocktail'),
//     t('location.additionalInfo.parking', 'Estacionamiento disponible'),
//     t('location.additionalInfo.outdoor', 'Ceremonia al aire libre'),
//     t('location.additionalInfo.glutenFree', 'Menú sin gluten disponible')
//   ]

//   if (loading) {
//     return (
//       <section className="py-20 bg-gradient-to-b from-rose-50 to-white">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="animate-pulse text-center mb-16">
//             <div className="h-8 bg-gray-300 rounded w-1/2 mx-auto mb-4"></div>
//             <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
//           </div>
//         </div>
//       </section>
//     )
//   }

//   return (
//     <section className="py-20 bg-gradient-to-b from-rose-50 to-white">
//       <div className="max-w-6xl mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           ref={ref}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
//             {t('location.title', 'Lugar y Horarios')}
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             {t('location.subtitle', 'Todos los detalles para que no te pierdas ni un momento de nuestra celebración.')}
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
//           {/* Venue Information */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="space-y-6"
//           >
//             <div className="bg-white rounded-2xl p-8 shadow-lg">
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="w-12 h-12 bg-gradient-to-r from-rose-400 to-pink-600 rounded-full flex items-center justify-center">
//                   <MapPin className="w-6 h-6 text-white" />
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-bold text-gray-800">
//                     {t('location.venue', 'Jardín Botánico Real')}
//                   </h3>
//                   <p className="text-gray-600">
//                     {t('location.address', 'Plaza de Murillo, 2, Madrid')}
//                   </p>
//                 </div>
//               </div>

//               <div className="space-y-4">
//                 <button
//                   onClick={() => window.open('https://maps.google.com/?q=Plaza+de+Murillo+2+Madrid', '_blank')}
//                   className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2"
//                 >
//                   <ExternalLink className="w-5 h-5" />
//                   {t('buttons.viewMap', 'Ver en Google Maps')}
//                 </button>

//                 <button
//                   onClick={() => window.open('https://uber.com', '_blank')}
//                   className="w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2"
//                 >
//                   <Car className="w-5 h-5" />
//                   {t('buttons.orderUber', 'Pedir Uber')}
//                 </button>
//               </div>
//             </div>

//             {/* Additional Information */}
//             <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6">
//               <h4 className="text-xl font-bold text-gray-800 mb-4">
//                 {t('location.additionalInfo.title', 'Información Adicional')}
//               </h4>
//               <ul className="space-y-2">
//                 {additionalInfo.map((info, index) => (
//                   <li key={index} className="flex items-center gap-2 text-gray-700">
//                     <div className="w-2 h-2 bg-rose-400 rounded-full" />
//                     {info}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </motion.div>

//           {/* Schedule */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="space-y-6"
//           >
//             {scheduleItems.map((item, index) => {
//               const Icon = item.icon
//               return (
//                 <div key={item.title} className="bg-white rounded-2xl p-6 shadow-lg">
//                   <div className="flex items-center gap-4 mb-4">
//                     <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center`}>
//                       <Icon className="w-6 h-6 text-white" />
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
//                       <p className="text-lg font-medium text-rose-600">{item.time}</p>
//                     </div>
//                   </div>
//                   <p className="text-gray-600 leading-relaxed">{item.description}</p>
//                 </div>
//               )
//             })}
//           </motion.div>
//         </div>

//         {/* Map Embed */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8, delay: 0.6 }}
//           className="bg-white rounded-2xl overflow-hidden shadow-lg"
//         >
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.4849469138147!2d-3.6943655!3d40.4137818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228f7f2f8b7d7%3A0x8b8b8b8b8b8b8b8b!2sReal%20Jard%C3%ADn%20Bot%C3%A1nico!5e0!3m2!1ses!2ses!4v1234567890123"
//             width="100%"
//             height="400"
//             style={{ border: 0 }}
//             allowFullScreen
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//             title="Ubicación del evento"
//           />
//         </motion.div>
//       </div>
//     </section>
//   )
// }








'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Clock, Car, Utensils, ExternalLink } from 'lucide-react'
import { useTranslation } from '../../hooks/useTranslation'

export default function Location() {
  const { t, loading } = useTranslation('wedding')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const scheduleItems = [
    {
      title: t('location.schedule.ceremony.title', 'Ceremonia'),
      time: t('location.schedule.ceremony.time', '16:00 hrs'),
      description: t('location.schedule.ceremony.description', 'Ceremonia religiosa en el Jardín Botánico'),
      icon: Clock,
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: t('location.schedule.cocktail.title', 'Cóctel'),
      time: t('location.schedule.cocktail.time', '17:30 hrs'),
      description: t('location.schedule.cocktail.description', 'Cóctel de bienvenida y sesión de fotos'),
      icon: Utensils,
      color: 'from-pink-400 to-pink-600'
    },
    {
      title: t('location.schedule.reception.title', 'Recepción'),
      time: t('location.schedule.reception.time', '19:00 hrs'),
      description: t('location.schedule.reception.description', 'Cena y fiesta en el Salón de Eventos'),
      icon: Car,
      color: 'from-gold-400 to-yellow-600'
    }
  ]

  const additionalInfo = [
    t('location.additionalInfo.dressCode', 'Dress code: Formal / Cocktail'),
    t('location.additionalInfo.parking', 'Estacionamiento disponible'),
    t('location.additionalInfo.outdoor', 'Ceremonia al aire libre'),
    t('location.additionalInfo.glutenFree', 'Menú sin gluten disponible')
  ]

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-b from-rose-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="animate-pulse text-center mb-16">
            <div className="h-8 bg-gray-300 rounded w-1/2 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {t('location.title', 'Lugar y Horarios')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('location.subtitle', 'Todos los detalles para que no te pierdas ni un momento de nuestra celebración.')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Venue Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-rose-400 to-pink-600 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {t('location.venue', 'Jardín Botánico Real')}
                  </h3>
                  <p className="text-gray-600">
                    {t('location.address', 'Plaza de Murillo, 2, Madrid')}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => window.open('https://maps.google.com/?q=Plaza+de+Murillo+2+Madrid', '_blank')}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  {t('buttons.viewMap', 'Ver en Google Maps')}
                </button>

                <button
                  onClick={() => window.open('https://uber.com', '_blank')}
                  className="w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Car className="w-5 h-5" />
                  {t('buttons.orderUber', 'Pedir Uber')}
                </button>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-4">
                {t('location.additionalInfo.title', 'Información Adicional')}
              </h4>
              <ul className="space-y-2">
                {additionalInfo.map((info, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-rose-400 rounded-full" />
                    {info}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Schedule */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {scheduleItems.map((item, index) => {
              const IconComponent = item.icon
              return (
                <div key={item.title} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                      <p className="text-lg font-medium text-rose-600">{item.time}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </motion.div>
        </div>

        {/* Map Embed */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-2xl overflow-hidden shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.4849469138147!2d-3.6943655!3d40.4137818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228f7f2f8b7d7%3A0x8b8b8b8b8b8b8b8b!2sReal%20Jard%C3%ADn%20Bot%C3%A1nico!5e0!3m2!1ses!2ses!4v1234567890123"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación del evento"
          />
        </motion.div>
      </div>
    </section>
  )
}