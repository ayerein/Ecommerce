import styles from "./CartPage.module.css"
import { ContainerProductsCard } from "./containers/ContainerProductsCard/ContainerProductsCard"

export const CartPage = () => {

    return(
        <div className={styles.containerCartPage}>
            <ContainerProductsCard />
        </div>
    )
}
