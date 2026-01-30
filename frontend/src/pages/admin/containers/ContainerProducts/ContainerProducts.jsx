import { ProductCard } from "../../components/ProductCard"
import styles from "./ContainerProducts.module.css"

export const ContainerProducts = ({ products, openModal }) => {
    if (!Array.isArray(products)) {
    return <p>Error cargando productos</p>
    }

    return(
        <div className={styles.containerProducts}>
            { products.length === 0 ? (
                <p>No hay productos</p>
            )
            : (
                products.map(product => (
                    <ProductCard 
                    key={product._id}
                    nombre={product.nombre_producto}
                    img_producto={product.img_producto}
                    descripcion_producto={product.descripcion_producto}
                    stock_producto={product.stock_producto}
                    openModal={()=>openModal(product)}
                    />
                ))
            )}
        </div>
    )
}