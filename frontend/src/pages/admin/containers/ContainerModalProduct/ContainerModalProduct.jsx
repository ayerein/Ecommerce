import { useState } from "react"
import { FormProducts } from "../../components/FormProducts"

export const ContainerModalProduct = ({ closeModal, selectedProduct, updateProduct, deleteProduct }) =>  {
    const [formData, setFormData] = useState(selectedProduct)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await fetch(`/api/products/${selectedProduct._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            ...formData,
            precio_producto: Number(formData.precio_producto),
            stock_producto: Number(formData.stock_producto)
        })
        })

        const updated = await res.json()

        updateProduct(updated)
        closeModal()
    }

    const handleDelete = async () => {
        try {
            await deleteProduct(selectedProduct._id)
            closeModal()
        } catch (error) {
            alert("Error al eliminar producto", error)
        }
    }

    return(
        <div className="contenedor-modal">
            <FormProducts 
                formData={formData}
                onChange={handleChange}
                onSubmit={handleSubmit}
                closeForm={closeModal}
            />
            <button onClick={handleDelete}>Eliminar Producto</button>
        </div>
    )
}