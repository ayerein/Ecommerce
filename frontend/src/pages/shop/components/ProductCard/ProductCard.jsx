import styles from "./ProductCard.module.css"

export const ProductCard = ({ nombre, precio, img, descripcion }) => {
    return(
        <div className={styles.containerCardProduct}>
            <div className={styles.containerImgProduct}>
                <img src={img} alt={descripcion} className={styles.imgProduct} />
            </div>
            <div className={styles.containerDataProduct}>
                <p className={styles.nameProduct}>{nombre}</p>
                <p className={styles.priceProduct}>{precio}</p>
                <button className={styles.buttonAddProduct}>Agregar</button>
            </div>
        </div>
    )
}