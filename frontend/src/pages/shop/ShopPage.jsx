import { ContainerSearchProduct } from "../../components/ContainerSearchProduct"
import { useCart } from "../../hooks/useCart"
import { useProducts } from "../../hooks/useProducts"
import { ContainerProducts } from "./containers/ContainerProducts/ContainerProducts"


export const ShopPage = () => {
    const { products, getProducts } = useProducts()
    const { addToCart, cart } = useCart()

    return(
        <>
            <ContainerSearchProduct getProducts={getProducts}/>
            <ContainerProducts products={products} addToCart={addToCart} cart={cart}/>
        </>
    )
}

