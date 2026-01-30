import { ProductCard } from "../../components/ProductCard/ProductCard"
import styles from "./ContainerProducts.module.css"

export const ContainerProducts = ({ products }) => {
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
                    id={product._id}
                    nombre={product.nombre_producto}
                    precio={product.precio_producto}
                    img={product.img_producto}
                    descripcion={product.descripcion_producto}
                    />
                ))
            )}
        </div>
    )
}