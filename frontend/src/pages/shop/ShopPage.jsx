import { useEffect } from "react"
import { ButtonsPagination } from "../../components/ButtonsPagination"
import { ContainerSearchProduct } from "../../components/ContainerSearchProduct"
import { useCart } from "../../hooks/useCart"
import { useProducts } from "../../hooks/useProducts"
import { ContainerProducts } from "./containers/ContainerProducts/ContainerProducts"


export const ShopPage = () => {
    const { products, getProducts, search, page, totalPages } = useProducts()
    const { addToCart, cart } = useCart()

    useEffect(() => {
        getProducts({limit: 8, inStock: true})
    }, [getProducts])

    return(
        <>
            <ContainerSearchProduct getProducts={getProducts}/>
            <ContainerProducts products={products} addToCart={addToCart} cart={cart}/>
            <ButtonsPagination getProducts={getProducts} search={search} page={page} totalPages={totalPages}/>
        </>
    )
}

