import styles from './ContainerSearchProduct.module.css'

export const ContainerSearchProduct = ({ search, setSearch }) => {
    return(
        <div className={styles.containerSearchBar}>
            <input
                type="text"
                placeholder="Buscar producto"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={styles.searchBar}
            />
        </div>
    )
}