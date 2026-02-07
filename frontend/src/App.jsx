import { Routes, Route, Navigate } from "react-router-dom"
import { AdminPage } from "./pages/admin/AdminPage"
import { ShopPage } from "./pages/shop/ShopPage"
import { ProductPage } from "./pages/productPage/ProductPage"
import { CartPage } from "./pages/cart/CartPage"
import { NavBar } from "./pages/navbar/NavBar"
import { PublicLayout } from "./layouts/PublicLayout"

function App() {

  return(
    <>
      <Routes>
        <Route element={<PublicLayout />}> 
          <Route path="/" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>

        <Route path="/admin" element={<AdminPage />} />
        <Route path="/*" element={ <Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App
