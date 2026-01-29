
export const ProductCard = ({ nombre, openModal }) => {
    return(
        <div onClick={openModal}>
            <p>{nombre}</p>
        </div>
    )
}