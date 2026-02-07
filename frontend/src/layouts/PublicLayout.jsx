import { Outlet } from "react-router-dom"
import { NavBar } from "../pages/navbar/NavBar"
import { useEffect, useState } from "react"
import { useProducts } from "../hooks/useProducts"

export const PublicLayout = () => {
  const [filters, setFilters] = useState({
      search: "",
      category: "",
      minPrice: "",
      maxPrice: "",
      sort: "name_asc",
      inStock: true,
      limit: 8,
      page: 1,
  })

  const { products, getProducts, totalPages } = useProducts()

  const updateFilter = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value,
      page: key === "page" ? value : 1,
    }))
  }

  const handleLoadMore = () => {
    const nextPage = filters.page + 1

    setFilters(prev => ({ ...prev, page: nextPage }))

    getProducts({ ...filters, page: nextPage }, true)
  }

  useEffect(() => {
    getProducts(filters)
  }, [filters, getProducts])

  return (
    <>
      <NavBar updateFilter={updateFilter} />
      <Outlet context={{
        products,
        totalPages,
        updateFilter,
        filters,
        handleLoadMore
      }} />
    </>
  )
}