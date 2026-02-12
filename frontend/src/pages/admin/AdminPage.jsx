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
    const { resetFilters } = useProducts()

    const { isOpen, selectedProduct, openModal, closeModal } = useProductModal()

    useEffect(() => {
        resetFilters("admin")
    }, [resetFilters])

    return (
        <div className={styles.containerAdminPage}>
            <div className={styles.containerSearchAdmin}>
                <Search />
            </div>

            <div className={styles.containerFiltersCategories}>
                <Filters enabledFilters={{
                    category: false,
                    price: false,
                    inStock: true
                }}/>
            </div>

            <main className={styles.containerAdminProducts}>
                <SortSelect enabledFilters={{
                    name_asc: false,
                    name_desc: false,
                    price_asc: true,
                    price_desc: true,
                    stock_desc: true,
                    stock_asc: true
                }}/>

                <ContainerProducts openModal={openModal}/>

                <ButtonsPagination/>

                <ContainerFormAddNewProducts />
                {
                    isOpen &&
                    <ContainerEditProduct closeModal={closeModal} selectedProduct={selectedProduct} />
                }
            </main>
        </div>
    )
}