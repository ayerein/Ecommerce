import styles from './NavBar.module.css'
import cartImg from "../../assets/cart.png"
import { Link } from "react-router-dom"
import { Search } from '../../components/Search'

export const NavBar = ({ updateFilter }) => {

    return(
        <div className={styles.containerSearchBar}>
            <Link to={`/`} className={styles.containerLinkProduct}>
                <p className={styles.pInicio}>Inicio</p>
            </Link>

            <Search updateFilter={updateFilter} />

            <Link to={`/cart`} className={styles.containerCart}>
                <img src={cartImg} alt="Carrito" className={styles.imgCart}/>
                <p className={styles.pCart}>Carrito</p>
            </Link>
        </div>
    )
}