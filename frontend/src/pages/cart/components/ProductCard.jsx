import styles from "./ProductCard.module.css"

export const ProductCard = ({ quantity, id, nombre, precio, img, addToCart }) => {

    return(
        <div  className={styles.productCard}>
            <img src={img} className={styles.imgProductCard}/>
            <p className={styles.nameProductCard}>{nombre}</p>
            <button>eliminar</button>
            <div>
                <button onClick={(e) => {
                    e.preventDefault() 
                    e.stopPropagation() 
                    addToCart(id, -1)
                }}>-</button>

                <span>{quantity}</span>
                
                <button onClick={(e) => {
                    e.preventDefault() 
                    e.stopPropagation() 
                    addToCart(id, 1)
                }}>+</button>
            </div>
            <p className={styles.priceProductCard}>{precio}</p>
        </div>
    )
}