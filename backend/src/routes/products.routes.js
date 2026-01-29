import { createProduct, getProducts, deleteProduct, updateProduct, getProductId, searchProduct } from "../controllers/products.controller.js";
import { Router } from "express";

const router = Router();

router.get('/', getProducts)

router.post('/', createProduct);

router.get('/search', searchProduct);

router.get('/:id', getProductId);

router.delete('/:id', deleteProduct);

router.put('/:id', updateProduct);


export default router;