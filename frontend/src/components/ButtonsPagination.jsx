import styles from './ButtonsPagination.module.css'

export const ButtonsPagination = ({ page, totalPages, handleLoadMore}) => {
    return(
        <div className={styles.containerPagination}>
            {/* <button onClick={() => updateFilter("page", page - 1)} disabled={page === 1}>
                Anterior
            </button>

            <span>Página {page} de {totalPages}</span>

            <button onClick={() => updateFilter("page", page + 1)} disabled={page === totalPages}>
                Siguiente
            </button> */}
            <button disabled={page >= totalPages} onClick={handleLoadMore}>Cargar más</button>
        </div>
    )
}