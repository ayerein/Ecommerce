import styles from './ContainerSearchProduct.module.css'
import cartImg from "../assets/cart.png"
import { Link } from "react-router-dom"
import { useState } from 'react'

export const ContainerSearchProduct = ({ getProducts }) => {
    const [ input, setInput ] = useState("")

    return(
        <div className={styles.containerSearchBar}>
            <Link to={`/`} className={styles.containerLinkProduct}>
                <p>Inicio</p>
            </Link>

            <input
                type="text"
                placeholder="Buscar producto"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className={styles.searchBar}
            />
            <button onClick={()=> getProducts(input)}>
                Buscar
            </button>

            <Link to={`/cart`} className={styles.containerLinkProduct}>
                <img src={cartImg} alt="Carrito" />
            </Link>
        </div>
    )
}