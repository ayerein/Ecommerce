import styles from './NavBar.module.css'
import cartImg from "../../assets/cart.png"
import { Link } from "react-router-dom"
import { useNavigate, useLocation } from "react-router-dom"
import { Search } from '../../components/Search'

export const NavBar = ({ getProducts }) => {

    const navigate = useNavigate()
    const location = useLocation()

    const handleSearch = (input) => {
        getProducts({search:input})

        if (location.pathname !== "/api/products") {
            navigate(`/api/products?search=${input}&page=1`)
        }
    }

    return(
        <div className={styles.containerSearchBar}>
            <Link to={`/`} className={styles.containerLinkProduct}>
                <p>Inicio</p>
            </Link>

            <Search handleSearch={handleSearch} />

            <Link to={`/cart`} className={styles.containerLinkProduct}>
                <img src={cartImg} alt="Carrito" />
            </Link>
        </div>
    )
}