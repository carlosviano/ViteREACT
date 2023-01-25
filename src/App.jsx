import Index from "./views/Home/Home";
import All from "./views/allProducts/All";
import About from "./views/About/AboutUs";
import Layout from "./components/Layout/Layout";
import Search from "./views/Search/Search";
import Account from "./views/Account/Account";
import Cart from "./views/Cart/Cart";
import PublicRoute from "./components/PublicRoute/PublicRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Unauthorized from "./views/Unauthorized/Unauthorized";

import { Routes, Route } from "react-router-dom";

const ROLES = {
  Admin: 1,
  User: 0,
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}/>
        <Route path="unauthorized" element={<Unauthorized />} />
        <Route index element={<Index />} />
        {/* <Route element={<PublicRoute />}> */}
          <Route path="account" element={<Account />} />
        {/* </Route> */}
        {/* <Route element={<PrivateRoute allowedRoles={[ROLES.Admin]} />}> */}
          <Route path="cart" element={<Cart />} />
          <Route path="all" element={<All />} />
          <Route path="about" element={<About />} />
          <Route path="search" element={<Search />} />
      {/* </Route> */}
    </Routes>
  );
}

export default App;
