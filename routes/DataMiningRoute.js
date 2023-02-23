import express from "express";
import {
    getData,
    // getProductById,
} from "../controllers/DataMiningController.js";
 
const routerproduct = express.Router();
 
routerproduct.get('/proses_mining', getData);
// routerproduct.get('/produk/:id', getProductById);
// router.post('/products', saveProduct);
// router.patch('/products/:id', updateProduct);
// router.delete('/products/:id', deleteProduct);
 
export default routerproduct;