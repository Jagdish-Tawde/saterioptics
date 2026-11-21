import { createRoot } from 'react-dom/client'
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'
import { ScrollToTop } from './components/ScrollToTop'
import { SEO } from './components/SEO'
import { PageIntro } from './components/PageIntro'
import { pages } from './config/pages'
import { Home } from './pages/Home'
import { Services } from './pages/Services'
import { Collection } from './pages/Collection'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import './styles.css'

function App() {
  const { pathname } = useLocation()
  const page = pages.find(({ path }) => path === (pathname.replace(/\/+$/, '') || '/'))
  return <>
    <SEO title={page?.title ?? 'Page not found'} description={page?.description ?? 'This page could not be found.'} path={page?.path} />
    <ScrollToTop />
    <a href="#main-content" className="skip-link">Skip to content</a>
    <Navbar />
    <main id="main-content" tabIndex={-1}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageIntro title="Page not found">That page is unavailable. <Link className="text-link" to="/">Return home</Link>.</PageIntro>} />
      </Routes>
    </main>
    <Footer />
    <FloatingWhatsApp />
  </>
}

document.querySelectorAll('[data-static-seo]').forEach((element) => element.remove())
createRoot(document.getElementById('root')!).render(<BrowserRouter><App /></BrowserRouter>)
