import Ofertas from './components/Header/components/Ofertas'
import Header from './components/Header/components/Header'
import Footer from './components/Footer/Footer'

const menu = ["UniformDisplay", "All", "About", "Search","Account","Cart","0"]

function App() {
  return (
    <div className="App"> 
    <Ofertas text="Free shipping inside Europe"/>
    <Header shopName="Uniform Display" one="All" two="About" three="Search" four="Account" five="Cart:" six="0" />
    <Footer/>
    </div>
  )
}

export default App
