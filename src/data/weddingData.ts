// export const weddingData = {
//   couple: {
//     bride: "Elizabeth",
//     groom: "Carlos",
//     brideFull: "Elizabeth",
//     groomFull: "Carlos"
//   },
//   wedding: {
//     date: "2025-06-15", // Fecha futura para que el contador funcione
//     time: "16:00",
//     ceremony: {
//       name: "Iglesia San José",
//       address: "Calle Principal 123",
//       city: "Ciudad",
//       time: "16:00"
//     },
//     reception: {
//       name: "Salón de Eventos Villa Rosa",
//       address: "Avenida Central 456", 
//       city: "Ciudad",
//       time: "18:00"
//     }
//   },
//   theme: {
//     colors: {
//       primary: "#8B4B6B",     // Rosa elegante
//       secondary: "#F8F6F3",   // Beige muy suave
//       accent: "#D4AF37",      // Dorado
//       text: "#2C2C2C",        // Gris oscuro
//       background: "#FFFFFF"   // Blanco puro
//     },
//     fonts: {
//       heading: "var(--font-playfair)",
//       script: "var(--font-dancing)",
//       body: "Inter, sans-serif"
//     }
//   },
//   messages: {
//     es: {
//       welcome: "¡Sejam bem-vindos ao nosso site!",
//       subtitle: "Nos complace compartir con ustedes este momento tan especial de nuestras vidas",
//       story: "Nuestra historia de amor comenzó hace algunos años cuando el destino nos unió. Desde entonces, hemos construido juntos un camino lleno de risas, aventuras, sueños compartidos y mucho amor. Ahora, estamos emocionados de dar el siguiente paso y queremos que ustedes, nuestros seres queridos, sean parte de este momento tan especial.",
//       invitation: "Te invitamos a celebrar con nosotros el día más importante de nuestras vidas",
//       poll: {
//         question: "¿Dónde deberíamos pasar nuestra luna de miel?",
//         options: ["París", "Roma", "Barcelona"],
//         button: "Votar"
//       }
//     },
//     pt: {
//       welcome: "Sejam bem-vindos ao nosso site!",
//       subtitle: "Temos o prazer de compartilhar com vocês este momento tão especial de nossas vidas",
//       story: "Nossa história de amor começou há alguns anos quando o destino nos uniu. Desde então, construímos juntos um caminho cheio de risos, aventuras, sonhos compartilhados e muito amor. Agora, estamos animados para dar o próximo passo e queremos que vocês, nossos entes queridos, façam parte deste momento tão especial.",
//       invitation: "Convidamos você para celebrar conosco o dia mais importante de nossas vidas",
//       poll: {
//         question: "Onde deveríamos passar nossa lua de mel?",
//         options: ["Paris", "Roma", "Barcelona"],
//         button: "Votar"
//       }
//     }
//   }
// }

// // Función helper para calcular días restantes
// export const getDaysUntilWedding = () => {
//   const weddingDate = new Date(weddingData.wedding.date)
//   const today = new Date()
//   const diffTime = weddingDate.getTime() - today.getTime()
//   const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
//   return diffDays > 0 ? diffDays : 0
// }


export const weddingData = {
  couple: {
    groom: "Elizabeth",
    bride: "Carlos",
  },
  wedding: {
    date: "2025-10-04",
    ceremony: {
      venue: "Parroquia Nossa Senhora da Conceição",
      address: "R. Gen. Carneiro, 106 - Vila Arens II, Jundiaí - SP, 13202-590",
      time: "11:00",
    },
    reception: {
      venue: "Casa Zeeby",
      address: "R. Cedro Amarelo, 10 - Soares, Jarinu - SP, 13246-710",
      time: "12:30",
    },
  },
  messages: {
    es: {
      invitation: "Los invitamos a celebrar con nosotros nuestro gran día de amor y felicidad.",
      welcome: "Bienvenidos a nuestra celebración",
      ourStory: "Nuestra Historia",
    },
    pt: {
      invitation: "Convidamos vocês para celebrar conosco nosso grande dia de amor e felicidade.",
      welcome: "Bem-vindos à nossa celebração",
      ourStory: "Nossa História",
    },
    "pt-BR": {
      invitation: "Convidamos vocês para celebrar conosco nosso grande dia de amor e felicidade.",
      welcome: "Bem-vindos à nossa celebração",
      ourStory: "Nossa História",
    },
  },
  timeline: {
    es: [
      {
        time: "10:30",
        title: "Llegada de invitados a la iglesia",
        description: "Recepción de invitados en la Iglesia Nuestra señora de la concepción",
      },
      {
        time: "11:00",
        title: "Ceremonia Religiosa",
        description: "Inicio de la ceremonia de matrimonio",
      },
      {
        time: "12:30",
        title: "Traslado",
        description: "Desplazamiento al local de la recepción",
      },
      {
        time: "13:00",
        title: "Cóctel de Bienvenida",
        description: "Recepción de invitados en la Casa Zeeby",
      },
      {
        time: "14:00",
        title: "Almuerzo",
        description: "Inicio del almuerzo de matrimonio",
      },
      {
        time: "15:00",
        title: "Primer Baile",
        description: "Apertura de la pista de baile por los novios",
      },
      {
        time: "15:30",
        title: "Fiesta",
        description: "Música y baile hasta mas no poder",
      },
    ],
    pt: [
      {
        time: "10:30",
        title: "Chegada dos Convidados",
        description: "Recepção dos convidados na Igreja Nossa Senhora da Conceição",
      },
      {
        time: "11:00",
        title: "Cerimônia Religiosa",
        description: "Início da cerimônia de casamento",
      },
      {
        time: "12:30",
        title: "Traslado",
        description: "Deslocamento para o local da recepção",
      },
      {
        time: "13:00",
        title: "Coquetel de Boas-vindas",
        description: "Recepção dos convidados na Casa Zeeby",
      },
      {
        time: "14:00",
        title: "Almoço",
        description: "Início do almoço de casamento",
      },
      {
        time: "15:00",
        title: "Primeira Dança",
        description: "Abertura da pista de dança pelos noivos",
      },
      {
        time: "15:30",
        title: "Festa",
        description: "Música e dança até o amanhecer",
      },
    ],
    "pt-BR": [
      {
        time: "10:30",
        title: "Chegada dos Convidados",
        description: "Recepção dos convidados na Igreja Nossa Senhora da Conceição",
      },
      {
        time: "11:00",
        title: "Cerimônia Religiosa",
        description: "Início da cerimônia de casamento",
      },
      {
        time: "12:30",
        title: "Traslado",
        description: "Deslocamento para o local da recepção",
      },
      {
        time: "13:00",
        title: "Coquetel de Boas-vindas",
        description: "Recepção dos convidados na Casa Zeeby",
      },
      {
        time: "14:00",
        title: "Almoço",
        description: "Início do almoço de casamento",
      },
      {
        time: "15:00",
        title: "Primeira Dança",
        description: "Abertura da pista de dança pelos noivos",
      },
      {
        time: "15:30",
        title: "Festa",
        description: "Música e dança até o amanhecer",
      },
    ],
  },
}