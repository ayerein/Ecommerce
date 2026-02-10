import { ButtonsPagination } from "../../components/ButtonsPagination"
import { ContainerProducts } from "./containers/ContainerProducts/ContainerProducts"
import { Filters } from "../../components/Filters"
import { SortSelect } from "../../components/SortSelect"
import styles from './ShopPage.module.css'

import { useCart } from "../../hooks/useCart"
import { useCategories } from "../../hooks/useCategories"
import { useOutletContext } from "react-router-dom"

export const ShopPage = () => {
    const { products, totalPages, updateFilter, filters } = useOutletContext()
    const { addToCart, cart } = useCart()
    const { categories } = useCategories()

    return(
        <div className={styles.containerShopPage}>
            <aside className={styles.containerFiltersCategories}>
                <Filters filters={filters} categories={categories} updateFilter={updateFilter} enabledFilters={{
                    category: true,
                    price: true,
                    inStock: false,
                }}/>
            </aside>
            <main className={styles.containerShopProducts}>
                <SortSelect updateFilter={updateFilter} enabledFilters={{
                    name_asc: true,
                    name_desc: true,
                    price_asc: true,
                    price_desc: true,
                    stock_desc: false,
                    stock_asc: false
                }}/>
                <ContainerProducts products={products} addToCart={addToCart} cart={cart}/>
                <ButtonsPagination page={filters.page} totalPages={totalPages} updateFilter={updateFilter}/>
            </main>
        </div>
    )
}

