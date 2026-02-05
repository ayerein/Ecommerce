import { useEffect } from "react"

import { ButtonsPagination } from "../../components/ButtonsPagination"
import { ContainerProducts } from "./containers/ContainerProducts/ContainerProducts"
import { Filters } from "../../components/Filters"
import { SortBy } from "../../components/SortBy"

import { useCart } from "../../hooks/useCart"
import { useCategories } from "../../hooks/useCategories"


export const ShopPage = ({ products, getProducts, search, page, totalPages }) => {
    const { addToCart, cart } = useCart()
    const { categories } = useCategories()

    useEffect(() => {
        getProducts({limit: 8, inStock: true})
    }, [getProducts])

    return(
        <>
            <Filters categories={categories} getProducts={getProducts}/>
            <SortBy getProducts={getProducts}/>
            <ContainerProducts products={products} addToCart={addToCart} cart={cart}/>
            <ButtonsPagination getProducts={getProducts} search={search} page={page} totalPages={totalPages}/>
        </>
    )
}

