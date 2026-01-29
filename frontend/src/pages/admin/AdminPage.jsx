import { ContainerFormProducts } from "./containers/ContainerFormProducts/ContainerFormProducts"
import { ContainerProducts } from "./containers/ContainerProducts/ContainerProducts"
import { ContainerModalProduct } from "./containers/ContainerModalProduct/ContainerModalProduct"
import { ContainerSearchProduct } from "./containers/ContainerSearchProduct/ContainerSearchProduct"
import { useProducts } from "../../hooks/useProducts"
import { useProductModal } from "../../hooks/useProductModal"


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
        <>
        <ContainerSearchProduct search={search} setSearch={setSearch}/>
        <ContainerProducts products={products} openModal={openModal}/>
        <ContainerFormProducts addProduct={addProduct}/>
        {
            isOpen &&
            <ContainerModalProduct closeModal={closeModal} selectedProduct={selectedProduct} updateProduct={updateProduct} deleteProduct={deleteProduct}/>
        }
        </>
    )
}