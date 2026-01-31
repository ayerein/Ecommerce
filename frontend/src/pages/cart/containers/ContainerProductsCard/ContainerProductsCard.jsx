import { ProductCard } from "../../components/ProductCard";
import styles from "./containerProductsCard.module.css";

export const ContainerProductsCard = ({ addToCart, cart, totalUnits, totalPrice }) => {

    if (!cart || cart.items.length === 0) {
        return <p>El carrito está vacío</p>
    }

    return(
        <div className={styles.containerProductCards}>
            <div className={styles.containerTitleCart}>
                <div className={styles.containerTitle}>
                    <p>Mi Carrito</p>
                    <p>{totalUnits} Unidades</p>
                </div>
                <button>Vaciar carrito</button>
            </div>

            {cart?.items?.map(item => (
                <ProductCard
                key={item.product._id}
                quantity={item.quantity}
                id={item.product._id}
                nombre={item.product.nombre_producto}
                precio={item.product.precio_producto}
                img={item.product.img_producto}
                addToCart={addToCart}
                />
            ))
            }

            <div className={styles.containerCheckout}>
                <div className={styles.containerTotalPrice}>
                    <p>Total</p>
                    <p>${totalPrice}</p>
                </div>
                <button>Finalizar Compra</button>
            </div>
        </div>
    )
}
