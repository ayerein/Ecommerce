import { useState } from 'react';
import styles from './Filters.module.css'
import iconFilter from '../assets/iconFilter.png'

export const Filters = ({ filters, categories, updateFilter, enabledFilters }) => {
    const [ min, setMin ] = useState("");
    const [ max, setMax ] = useState("");

    const handleClear = () => {
        setMin("")
        setMax("")
        updateFilter("category", "")
        updateFilter("minPrice", "")
        updateFilter("maxPrice", "")
    }

    return(
        <div className={styles.containerFilters}>
            <div className={styles.containerTitleFilters}>
                <img src={iconFilter} alt="Filtrar" className={styles.imgFilters}/>
                <p className={styles.pFilters}>Filtros</p>
            </div>

            {enabledFilters.category &&
            <div className={styles.containerCategories}>
                <p className={styles.pTitleFilters}>Categoria</p>
                {categories.map(cat => (
                    <label key={cat} className={styles.categoryItem}>
                    <input
                        type="checkbox"
                        name="category"
                        checked={filters.category === cat}
                        onChange={() => updateFilter("category", filters.category === cat ? "" : cat)}
                    />
                    <span className={styles.customRadio}></span>
                    {cat}
                    </label>
                ))}
            </div>
            }
            
            {enabledFilters.price && (
            <div className={styles.containerPrice}>
                <p className={styles.pTitleFilters}>Precio</p>
                <input type="number" placeholder="Mínimo" value={min} onChange={(e) => setMin(e.target.value)} className={styles.inputPriceFilter}/>
                <input type="number" placeholder="Máximo" value={max} onChange={(e) => setMax(e.target.value)} className={styles.inputPriceFilter}/>
                <button className={styles.buttonPriceFilter} onClick={() => {
                    updateFilter("minPrice", min)
                    updateFilter("maxPrice", max)
                }}
                >Aplicar</button>
            </div>
            )}

            {enabledFilters.inStock &&
                <label>
                    <input
                        type="checkbox"
                        onChange={(e) => updateFilter("inStock", e.target.checked)}
                    />
                    Solo disponibles
                </label>
            }

            <div className={styles.containerBtnClean}>
                <button className={styles.btnCleanFilters} onClick={handleClear}>
                Limpiar filtros
                </button>
            </div>
        </div>
    )
}