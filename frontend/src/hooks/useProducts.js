import { useCallback, useState } from "react"

export const useProducts = () => {
  const [ products, setProducts ] = useState([])
  const [ totalPages, setTotalPages ] = useState(1);
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState(null)

  
  const getProducts = useCallback(async (filters, append = false) => {
    setLoading(true)
    setError(null)

    try {
      const params = new URLSearchParams();

      Object.entries(filters).forEach(([key, value]) => {
        if (value !== "" && value !== undefined && value !== null) {
          params.set(key, value)
        }
      })

      const url = `/api/products?${params.toString()}`;

      const res = await fetch(url)
      
      if (!res.ok) {
        throw new Error("Error al obtener productos")
      }
      
      const data = await res.json()
      
      setProducts(prev => append ? [...prev, ...data.docs] : data.docs)
      setTotalPages(data.totalPages);

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
    totalPages,
    loading,
    error,
    getProducts,
    addProduct,
    updateProduct,
    deleteProduct
  }
}