"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { Gift, ExternalLink, Copy, Check } from "lucide-react"

export default function GiftList() {
  const { language } = useLanguage()
  const [copiedItem, setCopiedItem] = useState<string | null>(null)

  const giftContent = {
    es: {
      title: "Lista de Regalos",
      subtitle: "Su presencia ya es nuestro mayor presente, pero si desean obsequiarnos algo, preparamos algunas opciones que nos ayudarán a comenzar nuestra nueva vida juntos.",
      pixTitle: "Contribución vía PIX",
      pixDescription: "Contribuye vía PIX para ayudarnos a realizar nuestros sueños y empezar nuestra nueva vida.",
      pixKey: "Clave PIX",
      copied: "¡Copiado!",
      copy: "Copiar",
      viewList: "Ver Lista",
      bankContributionTitle: "Cuenta Bancaria",
      bankContributionDescription: "También puedes contribuir mediante transferencia bancaria directa a nuestra cuenta.",
      bank: "Banco",
      agency: "Agencia",
      account: "Cuenta",
      accountHolder: "Titular"
    },
    pt: {
      title: "Lista de Presentes",
      subtitle: "Sua presença já é nosso maior presente, mas se desejarem nos presentear, preparamos algumas opções que nos ajudarão a começar nossa nova vida juntos.",
      pixTitle: "Contribuição via PIX",
      pixDescription: "Contribua via PIX para nos ajudar a realizar nossos sonhos e começar nossa nova vida.",
      pixKey: "Chave PIX",
      copied: "Copiado!",
      copy: "Copiar",
      viewList: "Ver Lista",
      bankContributionTitle: "Conta Bancária",
      bankContributionDescription: "Você também pode contribuir por meio de transferência bancária direta para nossa conta.",
      bank: "Banco",
      agency: "Agência",
      account: "Conta",
      accountHolder: "Titular"
    },
    "pt-BR": {
      title: "Lista de Presentes",
      subtitle: "Sua presença já é nosso maior presente, mas se desejarem nos presentear, preparamos algumas opções que nos ajudarão a começar nossa nova vida juntos.",
      pixTitle: "Contribuição via PIX",
      pixDescription: "Contribua via PIX para nos ajudar a realizar nossos sonhos e começar nossa nova vida.",
      pixKey: "Chave PIX",
      copied: "Copiado!",
      copy: "Copiar",
      viewList: "Ver Lista",
      bankContributionTitle: "Conta Bancária",
      bankContributionDescription: "Você também pode contribuir por meio de transferência bancária direta para nossa conta.",
      bank: "Banco",
      agency: "Agência",
      account: "Conta",
      accountHolder: "Titular"
    }
  }

  const content = giftContent[language] || giftContent.pt

  // Dados de exemplo - substitua pelos dados reais
  const giftData = {
    pix: {
      key: "elizabeth.carlos@email.com",
      name: "Elizabeth & Carlos"
    },
    bankAccount: {
      bank: "Banco do Brasil",
      agency: "1234-5",
      account: "12345-6",
      holder: "Elizabeth Silva Santos"
    },
    stores: [
      {
        name: "Tok&Stok",
        category: "Casa & Decoração",
        description: "Lista de presentes com itens para decoração e casa",
        url: "https://lista.magazineluiza.com.br/ana-carlos",
        src: "/TS.jpeg"
      },
      {
        name: "Americanas",
        category: "Eletrodomésticos",
        description: "Eletrodomésticos e utensílios para o lar",
        url: "https://lista.americanas.com.br/ana-carlos",
        image: "https://images.unsplash.com/photo-1599863805342-a7d55f01e149?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        name: "Riachuelo",
        category: "Enxoval",
        description: "Enxoval completo para o casal",
        url: "https://lista.casasbahia.com.br/ana-carlos",
        image: "https://images.unsplash.com/photo-1627937517904-4c578b191c95?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
    ]
  }

  const copyToClipboard = async (text: string, item: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedItem(item)
      setTimeout(() => setCopiedItem(null), 2000)
    } catch (err) {
      console.error('Erro ao copiar:', err)
    }
  }

  return (
    <section className="py-16 bg-[#F9F5EC]"> {/* Fondo beige */}
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Gift className="w-10 h-10 text-[#D2A53F] mr-3" />
            <h2 className="text-5xl font-bold text-[#3F4751] mb-0">
              {content.title}
            </h2>
          </div>
          <p className="text-[#666666] text-lg max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        {/* Sección de Tiendas Sugeridas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {giftData.stores.map((store, index) => (
            <div key={index} className="bg-white rounded-xl border border-[#E0E0E0] shadow-md overflow-hidden">
              <img
                src={store.image}
                alt={store.name}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-playfair text-xl text-[#333333] font-semibold">
                    {store.name}
                  </h3>
                  <span className="bg-[#8B4561] text-white text-xs px-3 py-1 rounded-full font-medium">
                    {store.category}
                  </span>
                </div>
                <p className="text-[#333333] text-sm mb-4">
                  {store.description}
                </p>
                <a
                  href={store.url}
                  
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-4 py-3 bg-[#D2A53F] text-white rounded-md hover:bg-[#C29530] transition-colors font-medium text-base"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {content.viewList}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Sección de Contribuciones Monetarias */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-6xl mx-auto">
          {/* Tarjeta PIX */}
          <div className="bg-white rounded-xl border border-[#E0E0E0] shadow-md p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-[#F0F8FF] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">💳</span>
              </div>
              <h3 className="font-playfair text-2xl text-[#333333] font-semibold mb-3">
                {content.pixTitle}
              </h3>
              <p className="text-[#666666] text-sm">
                {content.pixDescription}
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-[#333333] block mb-2">
                  {content.pixKey}
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={giftData.pix.key}
                    readOnly
                    className="flex-1 h-12 rounded-md border border-[#D4C4A8] bg-[#F9F5EC] px-3 py-2 text-sm text-[#333333]"
                  />
                  <button
                    onClick={() => copyToClipboard(giftData.pix.key, 'pix')}
                    className="inline-flex items-center justify-center rounded-md bg-[#D2A53F] text-white hover:bg-[#C29530] h-12 px-4 transition-colors"
                  >
                    {copiedItem === 'pix' ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {copiedItem === 'pix' && (
                  <p className="text-green-600 text-sm mt-2 font-medium">{content.copied}</p>
                )}
              </div>
            </div>
          </div>

          {/* Tarjeta Cuenta Bancaria */}
          <div className="bg-white rounded-xl border border-[#E0E0E0] shadow-md p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-[#F0F8FF] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">🏦</span>
              </div>
              <h3 className="font-playfair text-2xl text-[#333333] font-semibold mb-3">
                {content.bankContributionTitle}
              </h3>
              <p className="text-[#666666] text-sm">
                {content.bankContributionDescription}
              </p>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-[#E0E0E0]">
                <span className="font-semibold text-[#333333]">{content.bank}:</span>
                <span className="text-[#666666]">{giftData.bankAccount.bank}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-[#E0E0E0]">
                <span className="font-semibold text-[#333333]">{content.agency}:</span>
                <span className="text-[#666666]">{giftData.bankAccount.agency}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-[#E0E0E0]">
                <span className="font-semibold text-[#333333]">{content.account}:</span>
                <span className="text-[#666666]">{giftData.bankAccount.account}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-semibold text-[#333333]">{content.accountHolder}:</span>
                <span className="text-[#666666]">{giftData.bankAccount.holder}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}