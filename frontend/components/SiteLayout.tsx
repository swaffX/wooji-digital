import ScrollBar from './ScrollBar'
import Navbar from './Navbar'
import Footer from './Footer'
import AiChat from './AiChat'
import RevealObserver from './RevealObserver'
import StickyMobileCta from './StickyMobileCta'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollBar />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <AiChat />
      <StickyMobileCta />
      <RevealObserver />
    </>
  )
}
