import { Routes, Route, Navigate } from "react-router-dom"
import { AdminPage } from "./pages/admin/AdminPage"
import { ShopPage } from "./pages/shop/ShopPage"
import { ProductPage } from "./pages/productPage/ProductPage"
import { CartPage } from "./pages/cart/CartPage"
import { useProducts } from "./hooks/useProducts"
import { NavBar } from "./pages/navbar/NavBar"
import { PublicLayout } from "./layouts/PublicLayout"

function App() {
  const { products, getProducts, search, page, totalPages, addProduct, updateProduct, deleteProduct } = useProducts()

  return(
    <>
      <Routes>
        <Route element={<PublicLayout getProducts={getProducts} />}> 
          <Route path="/" element={<ShopPage products={products} getProducts={getProducts} search={search} page={page} totalPages={totalPages} />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>

        <Route path="/admin" element={<AdminPage products={products} getProducts={getProducts} search={search} page={page} totalPages={totalPages} addProduct={addProduct} updateProduct={updateProduct} deleteProduct={deleteProduct} />} />
        <Route path="/*" element={ <Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App
