import { useProducts } from "../../hooks/useProducts"
import { ContainerProducts } from "./containers/ContainerProducts/ContainerProducts"


export const ShopPage = () => {
    const { products } = useProducts()
    return(
        <>
            <ContainerProducts products={products}/>
        </>
    )
}