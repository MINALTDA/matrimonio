// // // //src\app\page.tsx
// // // 'use client'

// // // import Hero from './components/Hero'
// // // import Welcome from './components/Welcome'
// // // import CountdownTimer from './components/CountdownTimer'
// // // import OurStory from './components/OurStory'
// // // import EventDetails from './components/EventDetails'
// // // import Gallery from './components/Gallery'
// // // import RSVP from './components/RSVP'
// // // import Location from './components/Location'
// // // import Footer from './components/Footer'

// // // export default function Home() {
// // //   return (
// // //     <main className="min-h-screen">
// // //       <Hero />
// // //       <Welcome />
// // //       <CountdownTimer />
// // //       <OurStory />
// // //       <EventDetails />
// // //       <Gallery />
// // //       <Location />
// // //       <RSVP />
// // //       <Footer />
// // //     </main>
// // //   )
// // // }





// // 'use client'

// // import Hero from './components/Hero'
// // import Welcome from './components/Welcome'
// // import CountdownTimer from './components/CountdownTimer'
// // // import OurStory from './components/OurStory' // Próximo componente
// // // import EventDetails from './components/EventDetails' // Próximo componente
// // import Gallery from './components/Gallery'
// // import RSVP from './components/RSVP'
// // import Location from './components/Location'
// // import Footer from './components/Footer'

// // export default function Home() {
// //   return (
// //     <main className="min-h-screen">
// //       <Hero />
// //       <Welcome />
// //       <CountdownTimer />
// //       {/* <OurStory /> */}
// //       {/* <EventDetails /> */}
// //       <Gallery />
// //       <Location />
// //       <RSVP />
// //       <Footer />
// //     </main>
// //   )
// // }



// 'use client'

// import Hero from './components/Hero'
// import Welcome from './components/Welcome'
// import CountdownTimer from './components/CountdownTimer'
// import Poll from './components/Poll'
// import Gallery from './components/Gallery'
// import RSVP from './components/RSVP'
// import Location from './components/Location'
// import Footer from './components/Footer'

// export default function Home() {
//   return (
//     <main className="min-h-screen">
//       <Hero />
//       <Welcome />
//       <CountdownTimer />
//       <Poll />
//       <Gallery />
//       <Location />
//       <RSVP />
//       <Footer />
//     </main>
//   )
// }



// 'use client'

// import Hero from './components/Hero'
// import Welcome from './components/Welcome'
// import CountdownTimer from './components/CountdownTimer'
// import Poll from './components/Poll'
// // Solo mantenemos los componentes que hemos creado/actualizado

// export default function Home() {
//   return (
//     <main className="min-h-screen">
//       <Hero />
//       <Welcome />
//       <CountdownTimer />
//       <Poll />
//     </main>
//   )
// }





'use client'

import Hero from './components/Hero'
import TemporarySection from './components/TemporarySection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TemporarySection />
    </main>
  )
}