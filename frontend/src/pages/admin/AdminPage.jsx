import { ContainerFormAddNewProducts } from "./containers/ContainerFormAddNewProducts/ContainerFormAddNewProducts"
import { ContainerProducts } from "./containers/ContainerProducts/ContainerProducts"
import { ContainerEditProduct } from "./containers/ContainerEditProduct/ContainerEditProduct"
import { ContainerSearchProduct } from "../../components/ContainerSearchProduct"
import { useProducts } from "../../hooks/useProducts"
import { useProductModal } from "../../hooks/useProductModal"
import styles from './AdminPage.module.css'
import { useEffect, useState } from "react"

export const AdminPage = () => {
    const {
        products,
        addProduct,
        updateProduct,
        deleteProduct,
        getProducts
    } = useProducts()

    const {
        isOpen,
        selectedProduct,
        openModal,
        closeModal
    } = useProductModal()

    const [searchInput, setSearchInput] = useState("")
    
    useEffect(() => {
        getProducts(searchInput)
    }, [searchInput, getProducts])

    return (
        <div className={styles.containerAdminPage}>
            <ContainerSearchProduct searchInput={searchInput} setSearchInput={setSearchInput}/>
            <ContainerProducts products={products} openModal={openModal}/>
            <ContainerFormAddNewProducts addProduct={addProduct}/>
            {
                isOpen &&
                <ContainerEditProduct closeModal={closeModal} selectedProduct={selectedProduct} updateProduct={updateProduct} deleteProduct={deleteProduct}/>
            }
        </div>
    )
}