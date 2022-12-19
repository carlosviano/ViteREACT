import Ofertas from './components/Header/components/Ofertas'
import Header from './components/Header/components/Header'
import Footer from './components/Footer/Footer'

const menu = ["UniformDisplay", "All", "About", "Search","Account","Cart","0"]

function App() {
  return (
    <div className="App"> 
    <Ofertas text="Free shipping inside Europe"/>
    <Header/>
    <Footer/>
    </div>
  )
}

export default App
