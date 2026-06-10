import ScrollBar from './ScrollBar'
import Navbar from './Navbar'
import Footer from './Footer'
import Fab from './Fab'
import RevealObserver from './RevealObserver'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollBar />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <Fab />
      <RevealObserver />
    </>
  )
}
