import Navbar from './components/navbar'
import './App.css'
import { Landing } from './components/landingSection/landing'
import { Services } from './components/servicesSection/services'
import { Map } from './components/mapSection/map'

function App() {

  return (
    <>
      <Navbar/>
      <Landing/>
      <Services/>
      <Map/>
    </>
  )
}

export default App
