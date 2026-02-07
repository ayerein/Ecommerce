import { useState } from "react"
import styles from './Search.module.css'
import iconSearch from '../assets/iconSearch.png'

export const Search = ({ updateFilter }) => {
    const [ input, setInput ] = useState("")

    return(
        <div className={styles.containerSearch}>
            <input
                type="text"
                placeholder="Buscar producto"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className={styles.searchBar}
            />
            <button onClick={() => updateFilter("search", input)} className={styles.buttonSearch}>
                <img src={iconSearch} alt="Buscar" className={styles.imgSearch}/>
            </button>
        </div>
    )
}