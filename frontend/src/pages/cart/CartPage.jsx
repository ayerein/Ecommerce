
import { useCart } from "../../context/Cart/useCart"
import styles from "./CartPage.module.css"
import { ContainerProductsCard } from "./containers/ContainerProductsCard/ContainerProductsCard"

export const CartPage = () => {
    const { addToCart, cart, totalUnits, totalPrice, deleteProduct, clearCart } = useCart()

    return(
        <div className={styles.containerCartPage}>
            <ContainerProductsCard 
                addToCart={addToCart} 
                cart={cart} 
                totalUnits={totalUnits} 
                totalPrice={totalPrice} 
                deleteProduct={deleteProduct}
                clearCart={clearCart}
            />
        </div>
    )
}
