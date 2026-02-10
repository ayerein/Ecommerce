import { useState, useEffect } from "react"

export const useCart = () => {
    const [ cart, setCart ] = useState(null)
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        const cartId = localStorage.getItem("cartId")

        if (!cartId) {
        setLoading(false)
        return
        }

        const fetchCart = async () => {
        try {
            const res = await fetch(`/api/cart/${cartId}`)
            const data = await res.json()
            setCart(data)
        } catch (error) {
            console.error(error)
            localStorage.removeItem("cartId")
        } finally {
            setLoading(false)
        }
        }

        fetchCart()
    }, [])

    const addToCart = async (productId, quantity) => {
        const cartId = localStorage.getItem("cartId")

        const res = await fetch("/api/cart/add", {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({
            cartId,
            productId,
            quantity
            })
        })

        const updatedCart = await res.json()

        localStorage.setItem("cartId", updatedCart._id)
        setCart(updatedCart)
    }

    const totalPrice = cart?.items?.reduce((acc, item) => {
        return acc + (item.product.precio_producto * item.quantity)
    }, 0) || 0

    const deleteProduct = async (productId) => {
        const cartId = localStorage.getItem("cartId")

        const res = await fetch(`/api/cart/${cartId}/product/${productId}`, {
        method: "DELETE"
        })  

        const updatedCart = await res.json()
        
        setCart(updatedCart)
    }

    const clearCart = async () => {
        const cartId = localStorage.getItem("cartId")

        const res = await fetch(`/api/cart/${cartId}`, {
        method: "DELETE"
        }) 

        const updatedCart = await res.json()

        setCart(updatedCart)
    }


    return { 
        cart,
        loading,
        addToCart,
        totalPrice,
        deleteProduct,
        clearCart
    }
}