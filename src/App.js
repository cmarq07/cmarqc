// Import Libraries
import { BrowserRouter } from 'react-router-dom'

// Import Stylesheets
import './Stylesheets/Main.css'

// Import Components
import Header from './Components/Global/Header'
import Footer from './Components/Global/Footer'
import Router from './Components/Global/Router'
import ScrollTopButton from './Components/Global/ScrollTopButton'

function App() {

  return (

    <BrowserRouter>
      <div id="container">
        <Header />
        <Router />
        <ScrollTopButton />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
