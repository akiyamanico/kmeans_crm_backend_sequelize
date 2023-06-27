import Product from "../models/ProductModel.js";
import path from "path";
import fs from "fs";
 
export const getProducts = async(req, res)=>{
    try {
        const response = await Product.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const getProductById = async(req, res)=>{
    try {
        const response = await Product.findOne({
            where:{
                id_produk : req.params.id_produk
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deleteProduct = async (req, res) => {
    try {
        await Product.destroy({
            where: {
                id_produk : req.params.id_produk
            }
        });
        res.json({
            "message": "Product Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const updateProduct = async (req, res) => {
  try {
    await Product.update({
        where: {
            id_produk : req.params.id_produk
        }
    });
    res.json({"message" : "Product Updated"});
  } catch (error){
    res.json ({message : error.message});
  }
}
