import { useEffect, useState } from "react"
import styles from './AdminPage.module.css'

import { ContainerFormAddNewProducts } from "./containers/ContainerFormAddNewProducts/ContainerFormAddNewProducts"
import { ContainerProducts } from "./containers/ContainerProducts/ContainerProducts"
import { ContainerEditProduct } from "./containers/ContainerEditProduct/ContainerEditProduct"
import { ButtonsPagination } from "../../components/ButtonsPagination"
import { Search } from "../../components/Search"
import { Filters } from "../../components/Filters"

import { useProductModal } from "../../hooks/useProductModal"
import { useProducts } from "../../hooks/useProducts"
import { SortSelect } from "../../components/SortSelect"


export const AdminPage = () => {
    const [filters, setFilters] = useState({
        search: "",
        category: "",
        minPrice: "",
        maxPrice: "",
        sort: "name_asc",
        inStock: false,
        limit: 12,
        page: 1,
    })

    const { products, getProducts, totalPages, addProduct, updateProduct, deleteProduct } = useProducts()
    const { isOpen, selectedProduct, openModal, closeModal } = useProductModal()

    const updateFilter = (key, value) => {
        setFilters(prev => ({
        ...prev,
        [key]: value,
        page: key === "page" ? value : 1,
        }))
    }

    useEffect(() => {
        getProducts(filters)
    }, [filters, getProducts])
    

    return (
        <div className={styles.containerAdminPage}>
            <Search updateFilter={updateFilter}/>
            <Filters updateFilter={updateFilter} enabledFilters={{
                category: false,
                price: false,
                inStock: true
            }}/>
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
        </div>
    )
}