// Import Libraries
import { Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// Import Pages
import Home from '../../Pages/Home'
import About from '../../Pages/About'
import Resume from '../../Pages/Resume'
import Projects from '../../Pages/Projects'
import Contact from '../../Pages/Contact'
import Page from '../../Pages/Page'

function Router() {
  // Use location for routing animations
  const location = useLocation()

  return (
    <AnimatePresence>
      <div id="content">
      <Routes location={location} key={location.pathname}>
        <Route path="/">
          <Route index element={<Page title="Home"><Home/></Page>} />
          <Route path="about" element={<Page title="About"><About/></Page>} />
          <Route path="resume" element={<Page title="Resume"><Resume/></Page>} />
          <Route path="projects" element={<Page title="Projects"><Projects/></Page>} />
          <Route path="contact" element={<Page title="Contact"><Contact/></Page>} />
        </Route>
      </Routes>
      </div>
    </AnimatePresence>
  )
}

export default Router