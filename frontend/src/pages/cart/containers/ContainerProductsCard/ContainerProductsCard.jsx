import { ProductCard } from "../../components/ProductCard";
import styles from "./containerProductsCard.module.css";
import iconCart from "../../../../assets/iconCart.png"
import { Link } from "react-router-dom";
import { useCart } from "../../../../context/Cart/useCart";

export const ContainerProductsCard = () => {
    const { cart, totalPrice, clearCart } = useCart()

    if (!cart || cart.items.length === 0) {
        return(
            <div className={styles.containerEmptyCart}>
                <div className={styles.containerImgCart}>
                    <img src={iconCart} alt="Carrito vacio" />
                </div>
                <p className={styles.titleEmptyCart}>No tenés productos en el carrito</p>
                <p className={styles.pEmptyCart}>Empezá a comprar y aprovechá nuestras ofertas.</p>
                <Link to={`/`} className={styles.linkEmptyCart}>Ir a comprar</Link>
            </div>
        )
    }

    return(
        <div className={styles.containerProductCards}>
            <div className={styles.containerTitleCart}>
                <div className={styles.containerTitle}>
                    <p className={styles.pTitle}>Mi Carrito</p>
                </div>
                <button onClick={clearCart} className={styles.buttonCleanCart}>Vaciar carrito</button>
            </div>
            
            <div className={styles.containerCards}>
                <div className={styles.containerTitles}>
                    <p>Producto</p>
                    <div></div>
                    <p>Precio</p>
                    <p>Cantidad</p>
                    <p className={styles.pTotal}>Total</p>
                    <div></div>
                </div>

                {cart?.items?.map(item => (
                    <ProductCard
                    key={item.product._id}
                    quantity={item.quantity}
                    id={item.product._id}
                    nombre={item.product.nombre_producto}
                    precio={item.product.precio_producto}
                    stock={item.product.stock_producto}
                    img={item.product.img_producto}
                    />
                ))}
            </div>

            <div className={styles.containerCheckout}>
                <div className={styles.containerTotalPrice}>
                    <p>Total a pagar</p>
                    <p>${totalPrice}</p>
                </div>
                <div className={styles.containerButtonCheckout}>
                    <button className={styles.buttonCheckout}>Finalizar Compra</button>
                </div>
            </div>
        </div>
    )
}
