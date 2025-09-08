'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { X } from 'lucide-react'
import Image from 'next/image'
import { useTranslation } from '../../hooks/useTranslation'

interface ImageData {
  src: string
  alt: string
  title: string
}

export default function Gallery() {
  const { t, loading } = useTranslation('wedding')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null)

  const images: ImageData[] = [
    {
      src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Carlos y Elizabeth en la playa',
      title: t('gallery.photos.beach', 'Nuestro primer viaje juntos')
    },
    {
      src: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Cena romántica',
      title: t('gallery.photos.dinner', 'Celebrando nuestro aniversario')
    },
    {
      src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Propuesta de matrimonio',
      title: t('gallery.photos.proposal', 'El momento de la propuesta')
    },
    {
      src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Sesión de fotos',
      title: t('gallery.photos.engagement', 'Sesión de compromiso')
    },
    {
      src: 'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Aventuras juntos',
      title: t('gallery.photos.adventure', 'Explorando el mundo')
    },
    {
      src: 'https://images.unsplash.com/photo-1529636798458-92182e662485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Momentos especiales',
      title: t('gallery.photos.memories', 'Creando recuerdos')
    }
  ]

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="animate-pulse text-center mb-16">
            <div className="h-8 bg-gray-300 rounded w-1/2 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-64 bg-gray-300 rounded-2xl animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {t('gallery.title', 'Nuestros Momentos Especiales')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('gallery.subtitle', 'Una colección de los momentos más hermosos que hemos compartido juntos.')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={600}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800">{selectedImage.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}