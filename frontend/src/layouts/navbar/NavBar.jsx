import styles from './NavBar.module.css'
import iconCart from "../../assets/iconCart.png"
import { Link } from "react-router-dom"
import { Search } from '../../components/Search'
import { useProducts } from "../../context/Product/useProducts";
import { useCart } from "../../context/Cart/useCart";

export const NavBar = () => {
    const { updateFilter } = useProducts()
    const { totalUnits } = useCart()
    

    return(
        <div className={styles.containerSearchBar}>
            <Link to={`/`} className={styles.containerLinkProduct}>
                <p className={styles.pInicio}>Shop</p>
            </Link>

            <Search updateFilter={updateFilter} />

            <Link to={`/cart`} className={styles.containerCart}>
                <p className={styles.pTotalUnits}>{totalUnits}</p>
                <img src={iconCart} alt="Carrito" className={styles.imgCart}/>
                <p className={styles.pCart}>Carrito</p>
            </Link>
        </div>
    )
}