import Cart from "../models/cart.model.js";

export const createCart = async (req, res) => {
try {
    const { productId, quantity = 1 } = req.body

    if (!productId) {
      return res.status(400).json({ message: "productId es requerido" })
    }

    const cart = await Cart.create({
      items: [
        {
          product: productId,
          quantity
        }
      ]
    })

    const populatedCart = await cart.populate("items.product")

    res.status(201).json(populatedCart)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addProductToCart = async (req, res) => {
  try {
    const { cartId, productId, quantity = 1 } = req.body

    if (!productId) {
        return res.status(400).json({ message: "productId es requerido" })
    }

    let cart

    if (!cartId) {
        cart = await Cart.create({
            items: [{ product: productId, quantity }]
        })
        await cart.populate("items.product")
        return res.status(201).json(cart)
    }

    cart = await Cart.findById(cartId)

    if (!cart) {
        return res.status(404).json({ message: "Carrito no encontrado" })
    }

    const itemIndex = cart.items.findIndex(
        item => item.product.toString() === productId
    )
    if (itemIndex >= 0) {
        cart.items[itemIndex].quantity += quantity
    } else {
        cart.items.push({ product: productId, quantity })
    }

    await cart.save()
    await cart.populate("items.product")

    res.json(cart)

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCartById = async (req, res) => {
    const { id } = req.params

    const cart = await Cart.findById(id).populate("items.product")

    if (!cart) {
        return res.status(404).json({ message: "Carrito no encontrado" })
    }

    res.json(cart)
} 

