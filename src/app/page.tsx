import Hero from "@/app/components/Hero"
import CountdownTimer from "@/app/components/CountdownTimer"
import Welcome from "@/app/components/Welcome"
import Gallery from "@/app/components/Gallery"
import Location from "@/app/components/Location"
import Timeline from "@/app/components/Timeline"
import RSVP from "@/app/components/RSVP"
import GiftList from "@/app/components/GiftList"
import Footer from "@/app/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <CountdownTimer />
      <Welcome />
      <Gallery />
      <Location />
      <Timeline />
      <RSVP />
      <GiftList />
      <Footer />
    </main>
  )
}
