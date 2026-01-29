

export const FormProducts = ({ onSubmit, formData, onChange, closeForm }) => {
    return(
        <>

        <form className="product-form" onSubmit={onSubmit}>
            <p>Crear producto</p>

            <input
                type="text"
                name="nombre_producto"
                placeholder="Nombre del producto"
                value={formData.nombre_producto}
                onChange={onChange}
                required
            />

            <input
                type="text"
                name="marca_producto"
                placeholder="Marca"
                value={formData.marca_producto}
                onChange={onChange}
                required
            />

            <textarea
                name="descripcion_producto"
                placeholder="Descripción"
                value={formData.descripcion_producto}
                onChange={onChange}
            />

            <input
                type="number"
                name="precio_producto"
                placeholder="Precio"
                min="0"
                value={formData.precio_producto}
                onChange={onChange}
                required
            />

            <input
                type="text"
                name="img_producto"
                placeholder="URL de imagen"
                value={formData.img_producto}
                onChange={onChange}
                required
            />

            <input
                type="text"
                name="nombre_categoria"
                placeholder="Categoría"
                value={formData.nombre_categoria}
                onChange={onChange}
                required
            />

            <input
                type="number"
                name="stock_producto"
                placeholder="Stock"
                min="0"
                value={formData.stock_producto}
                onChange={onChange}
            />

            <button type="submit">Guardar</button>
        </form>
        <button onClick={closeForm}>Cerrar</button>
        </>
    )
}