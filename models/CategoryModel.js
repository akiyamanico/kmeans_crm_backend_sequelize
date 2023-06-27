import {Sequelize} from "sequelize";
import db from "./config/Database.js";
 
const {DataTypes} = Sequelize;
 
const Cat = db.define('kategori',{
     
    kategori: DataTypes.STRING,
},{
    freezeTableName: true
});
 
export default Cat;
 
(async()=>{
    await db.sync();
})();