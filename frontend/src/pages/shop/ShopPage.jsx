import { ContainerSearchProduct } from "../../components/ContainerSearchProduct/ContainerSearchProduct"
import { useCart } from "../../hooks/useCart"
import { useProducts } from "../../hooks/useProducts"
import { ContainerProducts } from "./containers/ContainerProducts/ContainerProducts"


export const ShopPage = () => {
    const { products, search, setSearch } = useProducts()
    const { addToCart, cart } = useCart()

    return(
        <>
            <ContainerSearchProduct  search={search} setSearch={setSearch}/>
            <ContainerProducts products={products} addToCart={addToCart} cart={cart}/>
        </>
    )
}