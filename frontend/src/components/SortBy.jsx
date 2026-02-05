
export const SortBy = ({ getProducts }) => {
    return(
        <select onChange={(e) => getProducts({ sort: e.target.value })}>
        <option value="name_asc">Nombre A-Z</option>
        <option value="name_desc">Nombre Z-A</option>
        <option value="price_asc">Precio menor a mayor</option>
        <option value="price_desc">Precio mayor a menor</option>
        </select>
    )
}