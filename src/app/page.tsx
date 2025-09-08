'use client'

import Hero from './components/Hero'
import Timeline from './components/Timeline'
import Gallery from './components/Gallery'
import RSVP from './components/RSVP'
import Location from './components/Location'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Timeline />
      <Gallery />
      <Location />
      <RSVP />
      <Footer />
    </main>
  )
}