import styles from './AdminPage.module.css'

import { ContainerFormAddNewProducts } from "./containers/ContainerFormAddNewProducts/ContainerFormAddNewProducts"
import { ContainerProducts } from "./containers/ContainerProducts/ContainerProducts"
import { ContainerEditProduct } from "./containers/ContainerEditProduct/ContainerEditProduct"
import { ButtonsPagination } from "../../components/ButtonsPagination"
import { Search } from "../../components/Search"
import { Filters } from "../../components/Filters"
import { SortSelect } from "../../components/SortSelect"

import { useProductModal } from "../../hooks/useProductModal"
import { useProducts } from "../../context/Product/useProducts";
import { useEffect } from 'react'


export const AdminPage = () => {
    const {
        products,
        filters,
        totalPages,
        resetFilters,
        updateFilter,
        addProduct,
        updateProduct,
        deleteProduct
    } = useProducts()

    const { isOpen, selectedProduct, openModal, closeModal } = useProductModal()

    useEffect(() => {
        resetFilters("admin")
    }, [resetFilters])

    return (
        <div className={styles.containerAdminPage}>
            <div className={styles.containerSearchAdmin}>
                <Search updateFilter={updateFilter}/>
            </div>

            <div className={styles.containerFiltersCategories}>
                <Filters filters={filters} updateFilter={updateFilter} enabledFilters={{
                    category: false,
                    price: false,
                    inStock: true
                }}/>
            </div>

            <main className={styles.containerAdminProducts}>
                <SortSelect updateFilter={updateFilter} enabledFilters={{
                    name_asc: false,
                    name_desc: false,
                    price_asc: true,
                    price_desc: true,
                    stock_desc: true,
                    stock_asc: true
                }}/>

                <ContainerProducts products={products} openModal={openModal}/>

                <ButtonsPagination updateFilter={updateFilter} page={filters.page} totalPages={totalPages}/>

                <ContainerFormAddNewProducts addProduct={addProduct}/>
                {
                    isOpen &&
                    <ContainerEditProduct closeModal={closeModal} selectedProduct={selectedProduct} updateProduct={updateProduct} deleteProduct={deleteProduct}/>
                }
            </main>
        </div>
    )
}