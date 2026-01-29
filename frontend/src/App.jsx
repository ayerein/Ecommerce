import { useState } from "react"
import { AdminPage } from "./pages/admin/AdminPage"
import { ShopPage } from "./pages/shop/ShopPage"

function App() {
  const [ admin, setAdmin ] = useState(false)
  return(
    <>
    {
      admin ?
      <AdminPage />
      :
      <ShopPage />
    }
    </>
  )
}

export default App
