import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Tagline from './components/Tagline'
import MapComponent from './components/Map'
import Itinerary from './components/Itinerary'
import PricingInfo from './components/PricingInfo'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Tagline />
      <MapComponent />
      <Itinerary />
      <PricingInfo />
      <Footer />
    </div>
  )
}

export default App
