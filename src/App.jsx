import Index from './views/Home/Home'
import All from './views/allProducts/All'
import About from './views/about/about'
import Layout from './components/Layout/Layout'
import Search from './views/Search/Search'
import Account from './views/Account/Account'
import Cart from './views/Cart/Cart'


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
       <Route index element={<Index/>}/>
       <Route path="all" element={<All/>}/>
       <Route path="about" element={<About/>}/>
       <Route path="search" element={<Search/>}/>
       <Route path="account" element={<Account/>}/>
       <Route path="cart" element={<Cart/>}/>

      </Route> 
    </Routes>
    </BrowserRouter>
  )
}

export default App
