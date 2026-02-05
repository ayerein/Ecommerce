import { useState } from "react"
import styles from './Search.module.css'

export const Search = ({ handleSearch }) => {
    const [ input, setInput ] = useState("")

    return(
        <>
            <input
                type="text"
                placeholder="Buscar producto"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className={styles.searchBar}
            />
            <button onClick={()=> handleSearch(input)}>
                Buscar
            </button>
        </>
    )
}