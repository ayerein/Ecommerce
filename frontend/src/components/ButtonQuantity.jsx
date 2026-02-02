import styles from "./ButtonQuantity.module.css"

export const ButtonQuantity = ({ addToCart, quantity, id }) => {
    const handleQuantity = (value) => (e) => {
        e.preventDefault()
        e.stopPropagation()

        addToCart(id, value)
    }

    return(
        <div className={styles.containerButton}>
            <button className={`${styles.buttonQuantity} ${styles.buttonLeft}`} onClick={handleQuantity(-1)}>-</button>

            <p className={styles.pQuantity}>{quantity}</p>
            
            <button className={`${styles.buttonQuantity} ${styles.buttonRight}`} onClick={handleQuantity(+1)}>+</button>
        </div>
    )
}