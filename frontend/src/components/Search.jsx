import { useState } from "react"
import styles from './Search.module.css'
import iconSearch from '../assets/iconSearch.png'
import { useLocation, useNavigate } from "react-router-dom"
import { useProducts } from "../context/Product/useProducts"

export const Search = () => {
    const { updateFilter, filters } = useProducts()
    const [ input, setInput ] = useState(filters.search)
    const [ prevSearch, setPrevSearch ] = useState(filters.search)

    const navigate = useNavigate();
    const location = useLocation();

    if (filters.search !== prevSearch) {
        setPrevSearch(filters.search);
        setInput(filters.search);
    }

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
