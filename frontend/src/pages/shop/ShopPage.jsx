import { useState } from "react"
import { ContainerSearchProduct } from "../../components/ContainerSearchProduct"
import { useCart } from "../../hooks/useCart"
import { useProducts } from "../../hooks/useProducts"
import { ContainerProducts } from "./containers/ContainerProducts/ContainerProducts"


export const ShopPage = () => {
    const { products, getProducts } = useProducts()
    const { addToCart, cart } = useCart()
    const [searchInput, setSearchInput] = useState("")

    const handleSearch = () => {
        getProducts(searchInput)
    }

    return(
        <>
            <ContainerSearchProduct  searchInput={searchInput} setSearchInput={setSearchInput} handleSearch={handleSearch}/>
            <ContainerProducts products={products} addToCart={addToCart} cart={cart}/>
        </>
    )
}

