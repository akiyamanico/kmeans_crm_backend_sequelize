import express from "express";
import {
    getProducts,
    getProductById,
    saveProduct,
    updateProduct,
    deleteProduct
} from "../controllers/ProductController.js";
 
const routerproduct = express.Router();
 
routerproduct.get('/produk', getProducts);
routerproduct.get('/produk/:id_produk', getProductById);
router.post('/products', saveProduct);
router.patch('/patch/:id_produk', updateProduct);
router.delete('/products/:id_produk', deleteProduct);
 
export default routerproduct;