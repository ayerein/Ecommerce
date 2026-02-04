import { useCallback, useState } from "react"

export const useProducts = () => {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  
  const getProducts = useCallback(async ({
      search = "",
      pageNumber = 1,
      limit = 8,
      inStock = true,
    } = {}) => {
    setLoading(true)
    setError(null)

    try {
      const url = `/api/products?search=${search}&page=${pageNumber}&inStock=${inStock}&limit=${limit}`

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

/*   useEffect(() => {
    getProducts("", 1)
  }, [getProducts]) */


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