import { ProductCard } from "../../components/ProductCard"


export const ContainerProducts = ({ products, openModal }) => {
    if (!Array.isArray(products)) {
    return <p>Error cargando productos</p>
    }

    return(
        <div className="contenedor-productos">
            { products.length === 0 ? (
                <p>No hay productos</p>
            )
            : (
                products.map(product => (
                    <ProductCard 
                    key={product._id}
                    nombre={product.nombre_producto}
                    openModal={()=>openModal(product)}
                    />
                ))
            )}
        </div>
    )
}