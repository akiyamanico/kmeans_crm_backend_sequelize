import Cat from "../models/CategoryModel.js";
import path from "path";
import fs from "fs";
 
export const getCategory = async(req, res)=>{
    try {
        const response = await Cat.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const getCategoryById = async(req, res)=>{
    try {
        const response = await Cat.findOne({
            where:{
                id : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
