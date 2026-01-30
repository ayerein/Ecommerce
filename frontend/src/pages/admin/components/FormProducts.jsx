import styles from "./FormProducts.module.css"

export const FormProducts = ({ onSubmit, formData, onChange, closeForm }) => {
    return(
        <div className={styles.containerForm}>

            <form className={styles.productForm} onSubmit={onSubmit}>

                <div className={styles.containerCloseButton}>
                    <button onClick={closeForm} className={styles.closeButton}>X</button>
                </div>

                <div className={styles.containerInputs}>
                    <input
                        type="text"
                        name="nombre_producto"
                        placeholder="Nombre del producto"
                        value={formData.nombre_producto}
                        onChange={onChange}
                        required
                        className={styles.inputForm}
                    />

                    <input
                        type="text"
                        name="marca_producto"
                        placeholder="Marca"
                        value={formData.marca_producto}
                        onChange={onChange}
                        required
                        className={styles.inputForm}
                    />

                    <textarea
                        name="descripcion_producto"
                        placeholder="Descripción"
                        value={formData.descripcion_producto}
                        onChange={onChange}
                        className={`${styles.inputForm} ${styles.textForm}`}
                        
                    />

                    <input
                        type="number"
                        name="precio_producto"
                        placeholder="Precio"
                        min="0"
                        value={formData.precio_producto}
                        onChange={onChange}
                        required
                        className={styles.inputForm}
                    />

                    <input
                        type="text"
                        name="img_producto"
                        placeholder="URL de imagen"
                        value={formData.img_producto}
                        onChange={onChange}
                        required
                        className={styles.inputForm}
                    />

                    <input
                        type="text"
                        name="nombre_categoria"
                        placeholder="Categoría"
                        value={formData.nombre_categoria}
                        onChange={onChange}
                        required
                        className={styles.inputForm}
                    />

                    <input
                        type="number"
                        name="stock_producto"
                        placeholder="Stock"
                        min="0"
                        value={formData.stock_producto}
                        onChange={onChange}
                        className={styles.inputForm}
                    />
                </div>
                
                <div className={styles.containerButtonSubmit}>
                    <button type="submit" className={styles.buttonSubmit}>Guardar</button>
                </div>
            </form>
        </div>
    )
}