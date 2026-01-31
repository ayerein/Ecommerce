import { useCart } from "../../hooks/useCart"
import styles from "./CartPage.module.css"
import { ContainerProductsCard } from "./containers/ContainerProductsCard/ContainerProductsCard"

export const CartPage = () => {
    const { addToCart, cart, totalUnits, totalPrice } = useCart()

    return(
        <div className={styles.containerCartPage}>
            <ContainerProductsCard addToCart={addToCart} cart={cart} totalUnits={totalUnits} totalPrice={totalPrice}/>
        </div>
    )
}