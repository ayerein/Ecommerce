import styles from './ContainerSearchProduct.module.css'
import cartImg from "../assets/cart.png"
import { Link } from "react-router-dom"

export const ContainerSearchProduct = ({ searchInput, setSearchInput, handleSearch }) => {
    return(
        <div className={styles.containerSearchBar}>
            <Link to={`/`} className={styles.containerLinkProduct}>
                <p>Inicio</p>
            </Link>

            <input
                type="text"
                placeholder="Buscar producto"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className={styles.searchBar}
            />
            <button onClick={handleSearch}>
                Buscar
            </button>

            <Link to={`/cart`} className={styles.containerLinkProduct}>
                <img src={cartImg} alt="Carrito" />
            </Link>
        </div>
    )
}