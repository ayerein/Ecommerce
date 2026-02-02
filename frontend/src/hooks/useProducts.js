import { useCallback, useEffect, useState } from "react"

export const useProducts = () => {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  
  const getProducts = useCallback(async ( search="" ) => {
    setLoading(true)
    setError(null)

    try {
      const url = search
        ? `/api/products?search=${search}`
        : `/api/products`

      const res = await fetch(url)

      if (!res.ok) {
        throw new Error("Error al obtener productos")
      }

      const data = await res.json()
      setProducts(data)

    } catch (err) {
      console.error(err)
      setError(err.message)
      setProducts([])
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    getProducts()
  }, [getProducts])

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
    loading,
    error,
    getProducts,
    addProduct,
    updateProduct,
    deleteProduct
  }
}