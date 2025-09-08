'use client'

import { motion } from 'framer-motion'
import { Heart, Instagram, Facebook, Twitter, Mail, Phone } from 'lucide-react'
import { useTranslation } from '../../hooks/useTranslation'

export default function Footer() {
  const { locale } = useTranslation('common')

  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://instagram.com/carlosyelizabeth',
      label: 'Instagram'
    },
    {
      icon: Facebook,
      href: 'https://facebook.com/carlosyelizabeth',
      label: 'Facebook'
    },
    {
      icon: Twitter,
      href: 'https://twitter.com/carlosyelizabeth',
      label: 'Twitter'
    }
  ]

  const contactInfo = [
    {
      icon: Mail,
      text: 'carlos.elizabeth@wedding.com',
      href: 'mailto:carlos.elizabeth@wedding.com'
    },
    {
      icon: Phone,
      text: '+34 123 456 789',
      href: 'tel:+34123456789'
    }
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Wedding Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <Heart className="w-8 h-8 text-rose-400" />
              <h3 className="text-2xl font-bold">Carlos & Elizabeth</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              {locale === 'pt-BR' 
                ? 'Obrigado por fazer parte da nossa história de amor. Mal podemos esperar para celebrar com você!'
                : 'Gracias por ser parte de nuestra historia de amor. ¡No podemos esperar a celebrar contigo!'
              }
            </p>
            <div className="text-rose-400 font-medium">
              15 {locale === 'pt-BR' ? 'de Junho' : 'de Junio'}, 2024
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h4 className="text-xl font-bold mb-6">
              {locale === 'pt-BR' ? 'Contato' : 'Contacto'}
            </h4>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon
                return (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center justify-center gap-3 text-gray-300 hover:text-rose-400 transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5" />
                    <span>{contact.text}</span>
                  </a>
                )
              })}
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <h4 className="text-xl font-bold mb-6">
              {locale === 'pt-BR' ? 'Siga Nossa Jornada' : 'Sigue Nuestro Viaje'}
            </h4>
            <div className="flex justify-center md:justify-end gap-4 mb-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center hover:from-rose-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                )
              })}
            </div>
            <p className="text-gray-400 text-sm">
              {locale === 'pt-BR' 
                ? 'Compartilhe nossos momentos especiais'
                : 'Comparte nuestros momentos especiales'
              }
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm text-center md:text-left"
            >
              © 2024 Carlos & Elizabeth. {locale === 'pt-BR' ? 'Todos os direitos reservados.' : 'Todos los derechos reservados.'}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-gray-400 text-sm"
            >
              <span>
                {locale === 'pt-BR' ? 'Feito com' : 'Hecho con'}
              </span>
              <Heart className="w-4 h-4 text-rose-400 animate-pulse" />
              <span>
                {locale === 'pt-BR' ? 'para nosso dia especial' : 'para nuestro día especial'}
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}