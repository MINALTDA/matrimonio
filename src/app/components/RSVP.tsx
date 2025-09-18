"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function RSVP() {
  const { language } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attendance: '',
    guests: '0',
    dietaryRestrictions: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const rsvpContent = {
    es: {
      title: "Confirma tu Asistencia",
      subtitle: "Tu presencia es muy importante para nosotros! Por favor, confirma hasta el dia 25º de Setiembre para que podamos organizar todo con mucho cariño",
      name: "Nombre Completo",
      namePlaceholder: "Tu nombre completo",
      email: "E-mail",
      emailPlaceholder: "seu@email.com",
      phone: "Telefone",
      phonePlaceholder: "(11) 99999-9999",
      attendance: "Usted ira a asistir?",
      attendanceYes: "Sim, estare presente!",
      attendanceNo: "Lamentablemente no podre asistir",
      guests: "Número de Acompañantes",
      dietary: "Restricciones alimenticias",
      dietaryPlaceholder: "Vegetariano, vegano, alergia, etc.",
      message: "Mensaje para los novios",
      messagePlaceholder: "Deja un mensaje cariñoso para Elizabeth e Carlos...",
      submit: "Confirmar Presencia",
      submitting: "Enviando...",
      required: "Campo obligatório",
      successMessage: "¡Gracias por confirmar! Recibimos tu respuesta.",
      errorMessage: "Error al enviar. Por favor intenta de nuevo."
    },
    pt: {
      title: "Confirme sua Presença",
      subtitle: "Sua presença é muito importante para nós! Por favor, confirme até o dia 25º de Setembro para que possamos organizar tudo com carinho.",
      name: "Nome Completo",
      namePlaceholder: "Seu nome completo",
      email: "E-mail",
      emailPlaceholder: "seu@email.com",
      phone: "Telefone",
      phonePlaceholder: "(11) 99999-9999",
      attendance: "Você irá comparecer?",
      attendanceYes: "Sim, estarei presente!",
      attendanceNo: "Infelizmente não poderei comparecer",
      guests: "Número de Acompanhantes",
      dietary: "Restrições alimentares",
      dietaryPlaceholder: "Vegetariano, vegano, alergia, etc.",
      message: "Mensagem para os noivos",
      messagePlaceholder: "Deixe uma mensagem carinhosa para Elizabeth e Carlos...",
      submit: "Confirmar Presença",
      submitting: "Enviando...",
      required: "Campo obrigatório",
      successMessage: "Obrigado por confirmar! Recebemos sua resposta.",
      errorMessage: "Erro ao enviar. Por favor tente novamente."
    },
    "pt-BR": {
      title: "Confirme sua Presença",
      subtitle: "Sua presença é muito importante para nós! Por favor, confirme até o dia 25º de Setembro para que possamos organizar tudo com carinho.",
      name: "Nome Completo",
      namePlaceholder: "Seu nome completo",
      email: "E-mail",
      emailPlaceholder: "seu@email.com",
      phone: "Telefone",
      phonePlaceholder: "(11) 99999-9999",
      attendance: "Você irá comparecer?",
      attendanceYes: "Sim, estarei presente!",
      attendanceNo: "Infelizmente não poderei comparecer",
      guests: "Número de Acompanhantes",
      dietary: "Restrições alimentares",
      dietaryPlaceholder: "Vegetariano, vegano, alergia, etc.",
      message: "Mensagem para os noivos",
      messagePlaceholder: "Deixe uma mensagem carinhosa para Elizabeth e Carlos...",
      submit: "Confirmar Presença",
      submitting: "Enviando...",
      required: "Campo obrigatório",
      successMessage: "Obrigado por confirmar! Recebemos sua resposta.",
      errorMessage: "Erro ao enviar. Por favor tente novamente."
    }
  }

  const content = rsvpContent[language] || rsvpContent.pt

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/submit-rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: content.successMessage
        })
        // Limpiar formulario
        setFormData({
          name: '',
          email: '',
          phone: '',
          attendance: '',
          guests: '0',
          dietaryRestrictions: '',
          message: ''
        })
      } else {
        throw new Error(result.message)
      }
    } catch (error) {
      console.error('Error submitting RSVP:', error)
      setSubmitStatus({
        type: 'error',
        message: content.errorMessage
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="rsvp" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-5xl font-bold text-[#3F4751] mb-4 text-center">
          {content.title}
        </h2>
        <p className="text-[#666666] text-center mb-12 text-lg max-w-3xl mx-auto">
          {content.subtitle}
        </p>

        <div className="max-w-2xl mx-auto">
          <div className="bg-[#FDFCF6] rounded-xl shadow-lg border border-[#E8E4D6] p-8">
            {/* Mensaje de estado */}
            {submitStatus.type && (
              <div className={`mb-6 p-4 rounded-md ${
                submitStatus.type === 'success' 
                  ? 'bg-green-50 border border-green-200 text-green-800' 
                  : 'bg-red-50 border border-red-200 text-red-800'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-base font-semibold text-[#333333] mb-2 block">
                    {content.name} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    placeholder={content.namePlaceholder}
                    className="flex h-12 w-full rounded-md border border-[#D4C4A8] bg-white px-3 py-2 text-sm placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#D4A82F] focus:border-transparent disabled:opacity-50"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="text-base font-semibold text-[#333333] mb-2 block">
                    {content.email} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    placeholder={content.emailPlaceholder}
                    className="flex h-12 w-full rounded-md border border-[#D4C4A8] bg-white px-3 py-2 text-sm placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#D4A82F] focus:border-transparent disabled:opacity-50"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="text-base font-semibold text-[#333333] mb-2 block">
                  {content.phone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  placeholder={content.phonePlaceholder}
                  className="flex h-12 w-full rounded-md border border-[#D4C4A8] bg-white px-3 py-2 text-sm placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#D4A82F] focus:border-transparent disabled:opacity-50"
                />
              </div>

              <div>
                <label className="text-base font-semibold text-[#333333] mb-3 block">
                  {content.attendance} *
                </label>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="attendance-yes"
                      name="attendance"
                      value="yes"
                      checked={formData.attendance === 'yes'}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="h-4 w-4 text-[#D4A82F] focus:ring-[#D4A82F] border-[#D4C4A8]"
                    />
                    <label htmlFor="attendance-yes" className="ml-3 text-sm text-[#333333]">
                      {content.attendanceYes}
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="attendance-no"
                      name="attendance"
                      value="no"
                      checked={formData.attendance === 'no'}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="h-4 w-4 text-[#D4A82F] focus:ring-[#D4A82F] border-[#D4C4A8]"
                    />
                    <label htmlFor="attendance-no" className="ml-3 text-sm text-[#333333]">
                      {content.attendanceNo}
                    </label>
                  </div>
                </div>
              </div>

              {formData.attendance === 'yes' && (
                <>
                  <div>
                    <label htmlFor="guests" className="text-base font-semibold text-[#333333] mb-2 block">
                      {content.guests}
                    </label>
                    <input
                      type="number"
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      min="0"
                      disabled={isSubmitting}
                      className="flex h-12 w-full rounded-md border border-[#D4C4A8] bg-white px-3 py-2 text-sm placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#D4A82F] focus:border-transparent disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="dietaryRestrictions" className="text-base font-semibold text-[#333333] mb-2 block">
                      {content.dietary}
                    </label>
                    <input
                      type="text"
                      id="dietaryRestrictions"
                      name="dietaryRestrictions"
                      value={formData.dietaryRestrictions}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      placeholder={content.dietaryPlaceholder}
                      className="flex h-12 w-full rounded-md border border-[#D4C4A8] bg-white px-3 py-2 text-sm placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#D4A82F] focus:border-transparent disabled:opacity-50"
                    />
                  </div>
                </>
              )}

              <div>
                <label htmlFor="message" className="text-base font-semibold text-[#333333] mb-2 block">
                  {content.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  placeholder={content.messagePlaceholder}
                  rows={4}
                  className="flex min-h-[100px] w-full rounded-md border border-[#D4C4A8] bg-white px-3 py-2 text-sm placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#D4A82F] focus:border-transparent resize-y disabled:opacity-50"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center rounded-md font-bold transition-colors bg-[#D4A82F] text-white hover:bg-[#B88B27] h-14 px-8 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? content.submitting : content.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}