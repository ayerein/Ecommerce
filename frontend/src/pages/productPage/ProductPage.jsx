import { useParams } from "react-router-dom"
import { useProduct } from "../../hooks/useGetProduct"
import styles from "./ProductPage.module.css"

export const ProductPage = () => {
    const { id } = useParams()
    const { product, loading, error } = useProduct(id)

    if (loading) return <p>Cargando...</p>
    if (error) return <p>Error</p>

    return (
        <div className={styles.containerProductPage}>
            <div className={styles.containerDetailProduct}>
                <div className={styles.containerImgDetail}>
                    <img src={product.img_producto} alt={product.descripcion_producto} className={styles.imgProduct}/>
                </div>
                <div className={styles.containerDetails}>
                    <p className={styles.brandProduct}>{product.marca_producto}</p>
                    <p className={styles.nameProduct}>{product.nombre_producto}</p>
                    <p className={styles.priceProduct}>${product.precio_producto}</p>
                    <div className={styles.containerAddButton}>
                        <button className={styles.buttonAddProduct} onClick={()=>console.log('boton agregar')}>Agregar</button>
                    </div>
                </div>
            </div>
        </div>
  )
}