import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Platform from './components/Platform'
import DailyJourney from './components/DailyJourney'
import Safety from './components/Safety'
import BloodEmergency from './components/BloodEmergency'
import AppDownload from './components/AppDownload'
import MediaCoverage from './components/MediaCoverage'
import Testimonials from './components/Testimonials'
import ServiceAreas from './components/ServiceAreas'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Platform />
        <DailyJourney />
        <Safety />
        <BloodEmergency />
        <AppDownload />
        <MediaCoverage />
        <Testimonials />
        <ServiceAreas />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
