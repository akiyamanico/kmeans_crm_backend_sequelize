import express from "express";
import {
    getCategory,
    getCategoryById,
} from "../controllers/CategoryController.js";
 
const routercat = express.Router();
 
routercat.get('/kategori', getCategory);
routercat.get('/kategori/:id', getCategoryById);
// router.post('/products', saveProduct);
// router.patch('/products/:id', updateProduct);
// router.delete('/products/:id', deleteProduct);
 
export default routercat;
