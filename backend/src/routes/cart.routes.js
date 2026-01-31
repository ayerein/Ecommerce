import { Router } from "express";
import { createCart, addProductToCart, getCartById } from "../controllers/cart.controller.js";

const router = Router();

router.post('/', createCart)

router.post('/add', addProductToCart)

router.get('/:id', getCartById)

/* prox podemos armar la pagina donde se ve el carrito. */

/* router.put('/:id', updateCart)

router.delete('/:id', daleteCart) */

export default router;