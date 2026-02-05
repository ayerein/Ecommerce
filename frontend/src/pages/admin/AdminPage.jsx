import { ContainerFormAddNewProducts } from "./containers/ContainerFormAddNewProducts/ContainerFormAddNewProducts"
import { ContainerProducts } from "./containers/ContainerProducts/ContainerProducts"
import { ContainerEditProduct } from "./containers/ContainerEditProduct/ContainerEditProduct"
import { ButtonsPagination } from "../../components/ButtonsPagination"

import { useProductModal } from "../../hooks/useProductModal"
import styles from './AdminPage.module.css'
import { useEffect } from "react"
import { Search } from "../../components/Search"
import { Filters } from "../../components/Filters"

export const AdminPage = ({ products, addProduct, updateProduct, deleteProduct, getProducts, search, page, totalPages }) => {
    
    const { isOpen, selectedProduct, openModal, closeModal } = useProductModal()

    useEffect(() => {
        getProducts({limit: 12, inStock: false})
    }, [getProducts])

    const handleSearch = (input) => {
        getProducts({search:input})
    }

    return (
        <div className={styles.containerAdminPage}>
            <Search handleSearch={handleSearch}/>
            <Filters getProducts={getProducts}/>
            <ContainerProducts products={products} openModal={openModal}/>
            <ButtonsPagination getProducts={getProducts} search={search} page={page} totalPages={totalPages}/>
            <ContainerFormAddNewProducts addProduct={addProduct}/>
            {
                isOpen &&
                <ContainerEditProduct closeModal={closeModal} selectedProduct={selectedProduct} updateProduct={updateProduct} deleteProduct={deleteProduct}/>
            }
        </div>
    )
}