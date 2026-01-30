import styles from "./ProductCard.module.css"
import { Link } from "react-router-dom"

export const ProductCard = ({ id, nombre, precio, img, descripcion }) => {
    return(
        <div className={styles.containerCardProduct}>
            <Link to={`/product/${id}`} className={styles.containerLinkProduct}>
                <div className={styles.containerImgProduct}>
                    <img src={img} alt={descripcion} className={styles.imgProduct} />
                </div>
                <div className={styles.containerDataProduct}>
                    <p className={styles.nameProduct}>{nombre}</p>
                    <p className={styles.priceProduct}>$ {precio}</p>
                </div>
            </Link>
            <div className={styles.containerAddButton}>
                <button className={styles.buttonAddProduct} onClick={()=>console.log('boton agregar')}>Agregar</button>
            </div>
        </div>
    )
}