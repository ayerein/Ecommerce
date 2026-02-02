import styles from "./buttonAddProduct.module.css"

export const ButtonAddProduct = ({ id, addToCart }) => {
    return(
        <button className={styles.buttonAddProduct} onClick={(e)=> {
            e.preventDefault()
            e.stopPropagation()
            addToCart(id, 1)
        }}>Agregar</button>
    )
}