import { ButtonsPagination } from "../../components/ButtonsPagination"
import { ContainerProducts } from "./containers/ContainerProducts/ContainerProducts"
import { Filters } from "../../components/Filters"
import { SortSelect } from "../../components/SortSelect"
import styles from './ShopPage.module.css'

import { useProducts } from "../../context/Product/useProducts";
import { useEffect } from "react"

export const ShopPage = () => {
    const { resetFilters,updateFilter } = useProducts()

    useEffect(() => {
        resetFilters("shop")
        return () => {
            updateFilter("search", ""); // Limpia el search bar al desmontar
        };
    }, [resetFilters, updateFilter])

    return(
        <div className={styles.containerShopPage}>
            <aside className={styles.containerFiltersCategories}>
                <Filters enabledFilters={{
                    category: true,
                    price: true,
                    inStock: false,
                }}/>
            </aside>
            <SortSelect enabledFilters={{
                name_asc: true,
                name_desc: true,
                price_asc: true,
                price_desc: true,
                stock_desc: false,
                stock_asc: false
            }}/>
            <main className={styles.containerShopProducts}>
                <ContainerProducts />
                <ButtonsPagination />
            </main>
        </div>
    )
}

