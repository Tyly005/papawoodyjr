import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WhyUs from './components/WhyUs'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import CTABanner from './components/CTABanner'
import Contact from './components/Contact'
import Footer from './components/Footer'
import StickyCallButton from './components/ui/StickyCallButton'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <WhyUs />
      <Services />
      <Gallery />
      <Reviews />
      <CTABanner />
      <Contact />
      <Footer />
      <StickyCallButton />
    </div>
  )
}
