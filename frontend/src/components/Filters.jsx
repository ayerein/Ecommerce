import { useState } from 'react';
import styles from './Filters.module.css'

export const Filters = ({ categories, getProducts }) => {
    const [ min, setMin ] = useState("");
    const [ max, setMax ] = useState("");

    return(
        <div className={styles.containerFilters}>
            <select name="filters" onChange={(e) => getProducts({ category: e.target.value, limit: 8, inStock: true }) }>
                <option value="">Todas</option>
                {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                ))}
            </select>
            <input type="number" placeholder="Mínimo" value={min} onChange={(e) => setMin(e.target.value)}/>
            <input type="number" placeholder="Máximo" value={max} onChange={(e) => setMax(e.target.value)}/>
            <button onClick={() => getProducts({
                minPrice: min,
                maxPrice: max,
                limit: 8,
                inStock: true,
                })
            }>
            Aplicar
            </button>
        </div>
    )
}