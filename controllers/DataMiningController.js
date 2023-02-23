import Datamining from "../models/DataMiningModel.js";
import path from "path";
import fs from "fs";
 
export const getData = async(req, res)=>{
    try {
        const response = await Datamining.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}