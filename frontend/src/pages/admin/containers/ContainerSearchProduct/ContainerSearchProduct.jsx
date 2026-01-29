

export const ContainerSearchProduct = ({ search, setSearch }) => {
    return(
        <div className="containerSearchBar">
            <input
                type="text"
                placeholder="Buscar producto"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    )
}