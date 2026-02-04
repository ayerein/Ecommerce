import styles from './ButtonsPagination.module.css'

export const ButtonsPagination = ({ getProducts, page, totalPages}) => {
    return(
        <div className={styles.containerPagination}>
            <button onClick={() => getProducts({pageNumber: page - 1})} disabled={page === 1}>
                Anterior
            </button>

            <span>Página {page} de {totalPages}</span>

            <button onClick={() => getProducts({pageNumber: page + 1})} disabled={page === totalPages}>
                Siguiente
            </button>
        </div>
    )
}