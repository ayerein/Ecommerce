import { createProduct, getProducts, deleteProduct, updateProduct, getProductId } from "../controllers/products.controller.js";
import { Router } from "express";

const router = Router();

router.get('/', getProducts)

router.post('/', createProduct);

router.get('/:id', getProductId);

router.delete('/:id', deleteProduct);

router.put('/:id', updateProduct);


export default router;