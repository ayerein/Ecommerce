import { ContainerFormAddNewProducts } from "./containers/ContainerFormAddNewProducts/ContainerFormAddNewProducts"
import { ContainerProducts } from "./containers/ContainerProducts/ContainerProducts"
import { ContainerEditProduct } from "./containers/ContainerEditProduct/ContainerEditProduct"
import { ContainerSearchProduct } from "../../components/ContainerSearchProduct/ContainerSearchProduct"
import { useProducts } from "../../hooks/useProducts"
import { useProductModal } from "../../hooks/useProductModal"
import styles from './AdminPage.module.css'

export const AdminPage = () => {
    const {
        products,
        search,
        setSearch,
        addProduct,
        updateProduct,
        deleteProduct
    } = useProducts()

    const {
        isOpen,
        selectedProduct,
        openModal,
        closeModal
    } = useProductModal()

    return (
        <div className={styles.containerAdminPage}>
            <ContainerSearchProduct search={search} setSearch={setSearch}/>
            <ContainerProducts products={products} openModal={openModal}/>
            <ContainerFormAddNewProducts addProduct={addProduct}/>
            {
                isOpen &&
                <ContainerEditProduct closeModal={closeModal} selectedProduct={selectedProduct} updateProduct={updateProduct} deleteProduct={deleteProduct}/>
            }
        </div>
    )
}