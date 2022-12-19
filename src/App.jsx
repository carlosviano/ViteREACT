import Ofertas from './components/Header/components/Ofertas'
import Header from './components/Header/components/Header'
import Footer from './components/Footer/Footer'
import Index from './views/index/index'
import i from './views/index/images/bottoms.png'
import i2 from './views/index/images/tees.png'
import i3 from './views/index/images/tops.png'
import i4 from './views/index/images/shoes.png'
import i5 from './views/index/images/destacados.jpg'

function App() {
  return (
    <div className="App"> 
    <Ofertas text="Free shipping inside Europe"/>
    <Header shopName="Uniform Display" one="All" two="About" three="Search" four="Account" five="Cart:" six="0" />
    <Index i={i} i2={i2} i3={i3} i4={i4} i5={i5}/>
    <Footer/>
    </div>
  )
}

export default App
