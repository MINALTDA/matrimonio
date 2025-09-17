// "use client"

// import { MapPin, Clock, Phone } from "lucide-react"
// import { useLanguage } from "@/contexts/LanguageContext"
// import { weddingData } from "@/data/weddingData"

// export default function Location() {
//   const { language } = useLanguage()

//   const locationContent = {
//     es: {
//       title: "Local & Horário",
//       subtitle: "Toda la información sobre dónde y cuándo se celebrará nuestra celebración",
//       ceremony: "Ceremonia Religiosa",
//       reception: "Recepción", 
//       getDirections: "Ver en Google Maps",
//       contactChurch: "Contacto de la iglesia",
//       contactVenue: "Contacto del local"
//     },
//     pt: {
//       title: "Local & Horário",
//       subtitle: "Todas as informações sobre onde e quando acontecerá nossa celebração",
//       ceremony: "Cerimônia Religiosa",
//       reception: "Recepção",
//       getDirections: "Ver no Google Maps",
//       contactChurch: "Contato da igreja",
//       contactVenue: "Contato do local"
//     },
//     "pt-BR": {
//       title: "Local & Horário",
//       subtitle: "Todas as informações sobre onde e quando acontecerá nossa celebração",
//       ceremony: "Cerimônia Religiosa",
//       reception: "Recepção",
//       getDirections: "Ver no Google Maps",
//       contactChurch: "Contato da igreja",
//       contactVenue: "Contato do local"
//     }
//   }

//   const content = locationContent[language] || locationContent.pt

//   const openDirections = (address: string) => {
//     const encodedAddress = encodeURIComponent(address)
//     window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank')
//   }

//   return (
//     <section className="py-16 bg-[#FDFBF2]"> {/* Fondo crema claro */}
//       <div className="container mx-auto px-4">
//         {/* Título principal igual al Timeline */}
//         <h2 className="text-5xl font-bold text-[#3F4751] mb-2 text-center">
//           {content.title}
//         </h2>
//         <p className="text-center text-[#666666] mb-12">
//           {content.subtitle}
//         </p>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
//           {/* Ceremonia */}
//           <div className="bg-[#FDFBF2] rounded-lg shadow-lg border-none overflow-hidden">
//             <div className="p-6 pb-4">
//               <h3 className="font-playfair text-2xl text-[#333333] font-semibold text-center">
//                 {content.ceremony}
//               </h3>
//             </div>
//             <div className="px-6 pb-6">
//               {/* Imagen real de la iglesia */}
//               <div className="w-full h-48 rounded-md mb-6 overflow-hidden">
//                 <img 
//                   src="/PNSDC.jpg" 
//                   alt="Parroquia Nossa Senhora da Conceição"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
              
//               <div className="space-y-5">
//                 <div className="flex items-start gap-3">
//                   <div className="bg-[#F4ECC8] rounded-full p-1.5 flex items-center justify-center flex-shrink-0">
//                     <MapPin className="w-4 h-4 text-[#CE893F]" />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-[#333333]">
//                       {weddingData.wedding.ceremony.venue}
//                     </p>
//                     <p className="text-[#333333] text-sm">
//                       {weddingData.wedding.ceremony.address}
//                     </p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start gap-3">
//                   <div className="bg-[#F4ECC8] rounded-full p-1.5 flex items-center justify-center flex-shrink-0">
//                     <Clock className="w-4 h-4 text-[#CE893F]" />
//                   </div>
//                   <div>
//                     <p className="text-[#333333] font-semibold">
//                       {weddingData.wedding.ceremony.time}
//                     </p>
//                     <p className="text-[#333333] text-sm">
//                       04 de Outubro, 2025
//                     </p>
//                   </div>
//                 </div>

//                 {/* Teléfono de ejemplo - puedes agregar al weddingData si lo necesitas */}
//                 <div className="flex items-start gap-3">
//                   <div className="bg-[#F4ECC8] rounded-full p-1.5 flex items-center justify-center flex-shrink-0">
//                     <Phone className="w-4 h-4 text-[#CE893F]" />
//                   </div>
//                   <div>
//                     <a href="tel:(11) 3456-7890" className="text-[#333333] font-semibold hover:underline">
//                       (11) 3456-7890
//                     </a>
//                     <p className="text-[#333333] text-sm">
//                       {content.contactChurch}
//                     </p>
//                   </div>
//                 </div>
                
//                 <div className="pt-4">
//                   <button
//                     onClick={() => openDirections(weddingData.wedding.ceremony.address)}
//                     className="w-full inline-flex items-center justify-center rounded-md font-medium transition-colors 
//                                bg-[#DAB259] text-[#333333] hover:bg-[#C5A04D] h-12 py-3 px-6 text-base"
//                   >
//                     {content.getDirections}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Recepção */}
//           <div className="bg-[#FDFBF2] rounded-lg shadow-lg border-none overflow-hidden">
//             <div className="p-6 pb-4">
//               <h3 className="font-playfair text-2xl text-[#333333] font-semibold text-center">
//                 {content.reception}
//               </h3>
//             </div>
//             <div className="px-6 pb-6">
//               {/* Imagen real del local de recepción */}
//               <div className="w-full h-48 rounded-md mb-6 overflow-hidden">
//                 <img 
//                   src="/CZ.jpeg" 
//                   alt="Casa Zeeby"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
              
//               <div className="space-y-5">
//                 <div className="flex items-start gap-3">
//                   <div className="bg-[#F4ECC8] rounded-full p-1.5 flex items-center justify-center flex-shrink-0">
//                     <MapPin className="w-4 h-4 text-[#CE893F]" />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-[#333333]">
//                       {weddingData.wedding.reception.venue}
//                     </p>
//                     <p className="text-[#333333] text-sm">
//                       {weddingData.wedding.reception.address}
//                     </p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start gap-3">
//                   <div className="bg-[#F4ECC8] rounded-full p-1.5 flex items-center justify-center flex-shrink-0">
//                     <Clock className="w-4 h-4 text-[#CE893F]" />
//                   </div>
//                   <div>
//                     <p className="text-[#333333] font-semibold">
//                       {weddingData.wedding.reception.time}
//                     </p>
//                     <p className="text-[#333333] text-sm">
//                       04 de Outubro, 2025
//                     </p>
//                   </div>
//                 </div>

//                 {/* Teléfono de ejemplo - puedes agregar al weddingData si lo necesitas */}
//                 <div className="flex items-start gap-3">
//                   <div className="bg-[#F4ECC8] rounded-full p-1.5 flex items-center justify-center flex-shrink-0">
//                     <Phone className="w-4 h-4 text-[#CE893F]" />
//                   </div>
//                   <div>
//                     <a href="tel:(11) 9876-5432" className="text-[#333333] font-semibold hover:underline">
//                       (11) 9876-5432
//                     </a>
//                     <p className="text-[#333333] text-sm">
//                       {content.contactVenue}
//                     </p>
//                   </div>
//                 </div>
                
//                 <div className="pt-4">
//                   <button
//                     onClick={() => openDirections(weddingData.wedding.reception.address)}
//                     className="w-full inline-flex items-center justify-center rounded-md font-medium transition-colors 
//                                bg-[#DAB259] text-[#333333] hover:bg-[#C5A04D] h-12 py-3 px-6 text-base"
//                   >
//                     {content.getDirections}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }







"use client"

import { useState } from "react"
import { MapPin, Clock, Phone } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { weddingData } from "@/data/weddingData"
import Image from 'next/image'

export default function Location() {
  const { language } = useLanguage()
  const [churchImageLoaded, setChurchImageLoaded] = useState(false)
  const [venueImageLoaded, setVenueImageLoaded] = useState(false)

  const locationContent = {
    es: {
      title: "Local & Horário",
      subtitle: "Toda la información sobre dónde y cuándo se celebrará nuestra celebración",
      ceremony: "Ceremonia Religiosa",
      reception: "Recepción", 
      getDirections: "Ver en Google Maps",
      contactChurch: "Contacto de la iglesia",
      contactVenue: "Contacto del local"
    },
    pt: {
      title: "Local & Horário",
      subtitle: "Todas as informações sobre onde e quando acontecerá nossa celebração",
      ceremony: "Cerimônia Religiosa",
      reception: "Recepção",
      getDirections: "Ver no Google Maps",
      contactChurch: "Contato da igreja",
      contactVenue: "Contato do local"
    },
    "pt-BR": {
      title: "Local & Horário",
      subtitle: "Todas as informações sobre onde e quando acontecerá nossa celebração",
      ceremony: "Cerimônia Religiosa",
      reception: "Recepção",
      getDirections: "Ver no Google Maps",
      contactChurch: "Contato da igreja",
      contactVenue: "Contato do local"
    }
  }

  const content = locationContent[language] || locationContent.pt

  const openDirections = (address: string) => {
    const encodedAddress = encodeURIComponent(address)
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank')
  }

  return (
    <section className="py-16 bg-[#FDFBF2]">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-[#3F4751] mb-2 text-center">
          {content.title}
        </h2>
        <p className="text-center text-[#666666] mb-12">
          {content.subtitle}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Ceremonia */}
          <div className="bg-[#FDFBF2] rounded-lg shadow-lg border-none overflow-hidden">
            <div className="p-6 pb-4">
              <h3 className="font-playfair text-2xl text-[#333333] font-semibold text-center">
                {content.ceremony}
              </h3>
            </div>
            <div className="px-6 pb-6">
              {/* ✅ Imagen con estado de carga controlado */}
              <div className="relative w-full h-48 rounded-md mb-6 overflow-hidden">
                <Image 
                  src="/PNSDC.jpg" 
                  alt="Parroquia Nossa Senhora da Conceição"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={`object-cover transition-opacity duration-300 ${
                    churchImageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setChurchImageLoaded(true)}
                  onError={() => {
                    console.log('Error loading church image')
                    setChurchImageLoaded(false)
                  }}
                />
                {/* Fallback solo visible cuando la imagen NO ha cargado */}
                {!churchImageLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-amber-300 flex items-center justify-center rounded-md">
                    <div className="text-center text-amber-800">
                      <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                      </svg>
                      <p className="text-sm font-medium">Igreja</p>
                      <p className="text-xs">Cerimônia Religiosa</p>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="bg-[#F4ECC8] rounded-full p-1.5 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-[#CE893F]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#333333]">
                      {weddingData.wedding.ceremony.venue}
                    </p>
                    <p className="text-[#333333] text-sm">
                      {weddingData.wedding.ceremony.address}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-[#F4ECC8] rounded-full p-1.5 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-[#CE893F]" />
                  </div>
                  <div>
                    <p className="text-[#333333] font-semibold">
                      {weddingData.wedding.ceremony.time}
                    </p>
                    <p className="text-[#333333] text-sm">
                      04 de Outubro, 2025
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-[#F4ECC8] rounded-full p-1.5 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-[#CE893F]" />
                  </div>
                  <div>
                    <a href="tel:(11) 3456-7890" className="text-[#333333] font-semibold hover:underline">
                      (11) 3456-7890
                    </a>
                    <p className="text-[#333333] text-sm">
                      {content.contactChurch}
                    </p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <button
                    onClick={() => openDirections(weddingData.wedding.ceremony.address)}
                    className="w-full inline-flex items-center justify-center rounded-md font-medium transition-colors 
                               bg-[#DAB259] text-[#333333] hover:bg-[#C5A04D] h-12 py-3 px-6 text-base"
                  >
                    {content.getDirections}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Recepção */}
          <div className="bg-[#FDFBF2] rounded-lg shadow-lg border-none overflow-hidden">
            <div className="p-6 pb-4">
              <h3 className="font-playfair text-2xl text-[#333333] font-semibold text-center">
                {content.reception}
              </h3>
            </div>
            <div className="px-6 pb-6">
              {/* ✅ Imagen con estado de carga controlado */}
              <div className="relative w-full h-48 rounded-md mb-6 overflow-hidden">
                <Image 
                  src="/CZ.jpeg" 
                  alt="Casa Zeeby"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={`object-cover transition-opacity duration-300 ${
                    venueImageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setVenueImageLoaded(true)}
                  onError={() => {
                    console.log('Error loading venue image')
                    setVenueImageLoaded(false)
                  }}
                />
                {/* Fallback solo visible cuando la imagen NO ha cargado */}
                {!venueImageLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-green-300 flex items-center justify-center rounded-md">
                    <div className="text-center text-green-800">
                      <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                      </svg>
                      <p className="text-sm font-medium">Local da Festa</p>
                      <p className="text-xs">Recepção</p>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="bg-[#F4ECC8] rounded-full p-1.5 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-[#CE893F]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#333333]">
                      {weddingData.wedding.reception.venue}
                    </p>
                    <p className="text-[#333333] text-sm">
                      {weddingData.wedding.reception.address}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-[#F4ECC8] rounded-full p-1.5 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-[#CE893F]" />
                  </div>
                  <div>
                    <p className="text-[#333333] font-semibold">
                      {weddingData.wedding.reception.time}
                    </p>
                    <p className="text-[#333333] text-sm">
                      04 de Outubro, 2025
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-[#F4ECC8] rounded-full p-1.5 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-[#CE893F]" />
                  </div>
                  <div>
                    <a href="tel:(11) 9876-5432" className="text-[#333333] font-semibold hover:underline">
                      (11) 9876-5432
                    </a>
                    <p className="text-[#333333] text-sm">
                      {content.contactVenue}
                    </p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <button
                    onClick={() => openDirections(weddingData.wedding.reception.address)}
                    className="w-full inline-flex items-center justify-center rounded-md font-medium transition-colors 
                               bg-[#DAB259] text-[#333333] hover:bg-[#C5A04D] h-12 py-3 px-6 text-base"
                  >
                    {content.getDirections}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}