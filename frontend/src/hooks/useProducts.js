import { useCallback, useRef, useState } from "react"

export const useProducts = () => {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const filtersRef = useRef({
    search: "",
    category: "",
    minPrice: undefined,
    maxPrice: undefined,
    sort: "name_asc",
    inStock: true,
    limit: 8,
    pageNumber: 1,
  });

  
  const getProducts = useCallback(async (newFilters = {}) => {
    
    setLoading(true)
    setError(null)
    
    try {
      const updated = { ...filtersRef.current, ...newFilters };
      filtersRef.current = updated;

      const params = new URLSearchParams();

      Object.entries(updated).forEach(([key, value]) => {
        if (value !== undefined && value !== "") {
          params.append(key === "pageNumber" ? "page" : key, value);
        }
      });

      const url = `/api/products?${params.toString()}`;

      const res = await fetch(url)
      
      if (!res.ok) {
        throw new Error("Error al obtener productos")
      }
      
      const data = await res.json()
      
      setProducts(data.docs)
      setTotalPages(data.totalPages);
      setPage(data.page);

    } catch (err) {
      console.error(err)
      setError(err.message)
      setProducts([])
    } finally {
      setLoading(false)
    }
  }, [])

  const addProduct = (newProduct) => {
    setProducts(prev => [...prev, newProduct])
  }

  const updateProduct = (updatedProduct) => {
    setProducts(prev =>
      prev.map(p =>
        p._id === updatedProduct._id ? updatedProduct : p
      )
    )
  }

  const deleteProduct = async (id) => {
    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "DELETE"
      })

      if (!res.ok) {
        throw new Error("Error al eliminar")
      }

      setProducts(prev =>
        prev.filter(product => product._id !== id)
      )
    } catch (err) {
      console.error(err)
      throw err
    }
  }

  return {
    products,
    search,
    setSearch,
    page,
    totalPages,
    loading,
    error,
    getProducts,
    addProduct,
    updateProduct,
    deleteProduct
  }
}