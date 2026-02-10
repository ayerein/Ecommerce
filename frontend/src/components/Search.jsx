import { useState } from "react"
import styles from './Search.module.css'
import iconSearch from '../assets/iconSearch.png'
import { useLocation, useNavigate } from "react-router-dom"

export const Search = ({ updateFilter }) => {
    const [ input, setInput ] = useState("")
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault()
        updateFilter("search", input)

        if (location.pathname !== "/") {
            navigate("/");
        }
    }

    return(
        <form onSubmit={handleSubmit} className={styles.containerSearch}>
            <input
                type="text"
                placeholder="Buscar producto"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className={styles.searchBar}
            />
            <button type="submit" className={styles.buttonSearch}>
                <img src={iconSearch} alt="Buscar" className={styles.imgSearch}/>
            </button>
        </form>
    )
}