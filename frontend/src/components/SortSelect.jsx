import styles from './SortSelect.module.css'

export const SortSelect = ({ updateFilter, enabledFilters }) => {
    return(
        <div className={styles.containerSelect}>
            <p className={styles.pSort}>Ordenar por</p>

            <select onChange={(e) => updateFilter("sort", e.target.value)} className={styles.selectSort}>
                {enabledFilters.name_asc &&
                <option value="name_asc">Nombre A-Z</option>
                }
                {enabledFilters.name_desc &&
                <option value="name_desc">Nombre Z-A</option>
                }
                {enabledFilters.price_asc &&
                <option value="price_asc">Precio menor a mayor</option>
                }
                {enabledFilters.price_desc &&
                <option value="price_desc">Precio mayor a menor</option>
                }
                {enabledFilters.stock_asc &&
                <option value="stock_asc">Stock menor a mayor</option>
                }
                {enabledFilters.stock_desc &&
                <option value="stock_desc">Stock mayor a menor</option>
                }
            </select>
        </div>
    )
}