import styles from "./ProductCard.module.css"
import { Link } from "react-router-dom"
import { ButtonQuantity } from "../../../../components/ButtonQuantity.jsx"
import { ButtonAddProduct } from "../../../../components/ButtonAddProduct.jsx"

export const ProductCard = ({ id, nombre, precio, img, descripcion, addToCart, cart }) => {
    const itemInCart = cart?.items?.find(
        item => item.product._id === id
    )

    const quantity = itemInCart ? itemInCart.quantity : 0

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
                {quantity === 0 ? (
                    <ButtonAddProduct addToCart={addToCart} id={id} />
                    ) : (
                    <ButtonQuantity addToCart={addToCart} quantity={quantity} id={id} />
                )}                
            </div>
        </div>
    )
}