// export const weddingData = {
//   couple: {
//     bride: "Elizabeth",
//     groom: "Carlos",
//     brideFull: "Elizabeth",
//     groomFull: "Carlos"
//   },
//   wedding: {
//     date: "2024-12-15", // Ajusta a tu fecha real
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
//       secondary: "#F5F5DC",   // Beige suave
//       accent: "#D4AF37",      // Dorado
//       text: "#2C2C2C",        // Gris oscuro
//       background: "#FEFEFE"   // Blanco puro
//     },
//     fonts: {
//       heading: "var(--font-playfair)",
//       script: "var(--font-dancing)",
//       body: "Inter, sans-serif"
//     }
//   },
//   messages: {
//     es: {
//       welcome: "¡Bienvenidos a nuestro sitio!",
//       subtitle: "Nos complace compartir con ustedes este momento tan especial",
//       story: "Nuestra historia comenzó hace [X] años cuando nos conocimos en [lugar/situación]. Desde entonces, hemos construido juntos un amor lleno de risas, aventuras y sueños compartidos.",
//       invitation: "Te invitamos a celebrar con nosotros el día más importante de nuestras vidas"
//     },
//     pt: {
//       welcome: "Bem-vindos ao nosso site!",
//       subtitle: "Temos o prazer de compartilhar com vocês este momento tão especial",
//       story: "Nossa história começou há [X] anos quando nos conhecemos em [local/situação]. Desde então, construímos juntos um amor cheio de risos, aventuras e sonhos compartilhados.",
//       invitation: "Convidamos você para celebrar conosco o dia mais importante de nossas vidas"
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
    bride: "Elizabeth",
    groom: "Carlos",
    brideFull: "Elizabeth",
    groomFull: "Carlos"
  },
  wedding: {
    date: "2025-06-15", // Fecha futura para que el contador funcione
    time: "16:00",
    ceremony: {
      name: "Iglesia San José",
      address: "Calle Principal 123",
      city: "Ciudad",
      time: "16:00"
    },
    reception: {
      name: "Salón de Eventos Villa Rosa",
      address: "Avenida Central 456", 
      city: "Ciudad",
      time: "18:00"
    }
  },
  theme: {
    colors: {
      primary: "#8B4B6B",     // Rosa elegante
      secondary: "#F8F6F3",   // Beige muy suave
      accent: "#D4AF37",      // Dorado
      text: "#2C2C2C",        // Gris oscuro
      background: "#FFFFFF"   // Blanco puro
    },
    fonts: {
      heading: "var(--font-playfair)",
      script: "var(--font-dancing)",
      body: "Inter, sans-serif"
    }
  },
  messages: {
    es: {
      welcome: "¡Sejam bem-vindos ao nosso site!",
      subtitle: "Nos complace compartir con ustedes este momento tan especial de nuestras vidas",
      story: "Nuestra historia de amor comenzó hace algunos años cuando el destino nos unió. Desde entonces, hemos construido juntos un camino lleno de risas, aventuras, sueños compartidos y mucho amor. Ahora, estamos emocionados de dar el siguiente paso y queremos que ustedes, nuestros seres queridos, sean parte de este momento tan especial.",
      invitation: "Te invitamos a celebrar con nosotros el día más importante de nuestras vidas",
      poll: {
        question: "¿Dónde deberíamos pasar nuestra luna de miel?",
        options: ["París", "Roma", "Barcelona"],
        button: "Votar"
      }
    },
    pt: {
      welcome: "Sejam bem-vindos ao nosso site!",
      subtitle: "Temos o prazer de compartilhar com vocês este momento tão especial de nossas vidas",
      story: "Nossa história de amor começou há alguns anos quando o destino nos uniu. Desde então, construímos juntos um caminho cheio de risos, aventuras, sonhos compartilhados e muito amor. Agora, estamos animados para dar o próximo passo e queremos que vocês, nossos entes queridos, façam parte deste momento tão especial.",
      invitation: "Convidamos você para celebrar conosco o dia mais importante de nossas vidas",
      poll: {
        question: "Onde deveríamos passar nossa lua de mel?",
        options: ["Paris", "Roma", "Barcelona"],
        button: "Votar"
      }
    }
  }
}

// Función helper para calcular días restantes
export const getDaysUntilWedding = () => {
  const weddingDate = new Date(weddingData.wedding.date)
  const today = new Date()
  const diffTime = weddingDate.getTime() - today.getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return diffDays > 0 ? diffDays : 0
}