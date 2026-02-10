import styles from './ButtonsPagination.module.css'

export const ButtonsPagination = ({ page, totalPages, updateFilter}) => {
    return(
        <div className={styles.containerPagination}>
            {
            page != totalPages ?
            <button className={styles.buttonLoadMore} onClick={() => updateFilter("page", page + 1)} disabled={page === totalPages}>
                Ver más
            </button>
            :
            <></>
            }
        </div>
    )
}