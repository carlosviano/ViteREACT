import Index from './views/index/index'
import Layout from './components/Layout/Layout'
import i from './views/index/images/bottoms.png'
import i2 from './views/index/images/tees.png'
import i3 from './views/index/images/tops.png'
import i4 from './views/index/images/shoes.png'
import i5 from './views/index/images/destacados.jpg'

import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Link,
  useParams,
  useNavigate
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>  
    <Routes> 
      <Route path="/" element={<Layout/>}>
       <Route index element={<Index i={i} i2={i2} i3={i3} i4={i4} i5={i5}/>}/>
      </Route> 
    </Routes>
    </BrowserRouter>
  )
}

export default App
