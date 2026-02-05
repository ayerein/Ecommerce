import { useState } from 'react';
import styles from './Filters.module.css'

export const Filters = ({ categories, getProducts }) => {
    const [ min, setMin ] = useState("");
    const [ max, setMax ] = useState("");

    return(
        <div className={styles.containerFilters}>
            {categories &&
            <select name="filters" onChange={(e) => getProducts({ category: e.target.value }) }>
                <option value="">Todas</option>
                {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                ))}
            </select>
            }
            
            <input type="number" placeholder="Mínimo" value={min} onChange={(e) => setMin(e.target.value)}/>
            <input type="number" placeholder="Máximo" value={max} onChange={(e) => setMax(e.target.value)}/>
            <button onClick={() => getProducts({ minPrice: min, maxPrice: max}) }>
            Aplicar
            </button>

            <button onClick={() => getProducts({ category: "", minPrice: undefined, maxPrice: undefined}) }>Limpiar filtros</button>
        </div>
    )
}