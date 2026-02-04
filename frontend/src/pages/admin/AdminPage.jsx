import { ContainerFormAddNewProducts } from "./containers/ContainerFormAddNewProducts/ContainerFormAddNewProducts"
import { ContainerProducts } from "./containers/ContainerProducts/ContainerProducts"
import { ContainerEditProduct } from "./containers/ContainerEditProduct/ContainerEditProduct"
import { ContainerSearchProduct } from "../../components/ContainerSearchProduct"
import { useProducts } from "../../hooks/useProducts"
import { useProductModal } from "../../hooks/useProductModal"
import styles from './AdminPage.module.css'
import { ButtonsPagination } from "../../components/ButtonsPagination"
import { useEffect } from "react"

export const AdminPage = () => {
    const {
        products,
        addProduct,
        updateProduct,
        deleteProduct,
        getProducts,
        search,
        page,
        totalPages
    } = useProducts()

    const {
        isOpen,
        selectedProduct,
        openModal,
        closeModal
    } = useProductModal()

    useEffect(() => {
        getProducts({limit: 20, inStock: false})
    }, [getProducts])

    return (
        <div className={styles.containerAdminPage}>
            <ContainerSearchProduct getProducts={getProducts}/>
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