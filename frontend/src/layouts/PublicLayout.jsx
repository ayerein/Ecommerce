import { Outlet } from "react-router-dom"
import { NavBar } from "../pages/navbar/NavBar"
import { useEffect, useState } from "react"
import { useProducts } from "../hooks/useProducts"

const initialFilters = {
  search: "",
  category: "",
  minPrice: "",
  maxPrice: "",
  sort: "name_asc",
  inStock: true,
  limit: 8,
  page: 1,
}

export const PublicLayout = () => {
  const [ filters, setFilters ] = useState(initialFilters)

  const { products, getProducts, totalPages } = useProducts()

  const updateFilter = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value,
      page: key === "page" ? value : 1,
    }))
  }

  useEffect(() => {
    const isAppend = filters.page > 1
    getProducts(filters, isAppend)
  }, [filters, getProducts]) 

  return (
    <>
      <NavBar updateFilter={updateFilter} />
      <Outlet context={{
        products,
        totalPages,
        updateFilter,
        filters
      }} />
    </>
  )
}