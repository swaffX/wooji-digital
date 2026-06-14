import ScrollBar from '@/components/ScrollBar'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Process from '@/components/Process'
import References from '@/components/References'
import Faq from '@/components/Faq'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import AiChat from '@/components/AiChat'
import RevealObserver from '@/components/RevealObserver'

export default function Home() {
  return (
    <>
      <ScrollBar />
      <Navbar />
      <main id="icerik" tabIndex={-1}>
        <Hero />
        <Services />
        <About />
        <Process />
        <References />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <AiChat />
      <RevealObserver />
    </>
  )
}
