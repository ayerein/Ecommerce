import { Routes, Route, Navigate } from "react-router-dom"
import { AdminPage } from "./pages/admin/AdminPage"
import { ShopPage } from "./pages/shop/ShopPage"
import { ProductPage } from "./pages/productPage/ProductPage"

function App() {
  return(
    <Routes>
      <Route path="/" element={<ShopPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/*" element={ <Navigate to="/" />} />
    </Routes>
  )
}

export default App
