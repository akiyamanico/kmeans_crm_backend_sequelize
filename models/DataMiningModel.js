import {Sequelize} from "sequelize";
import db from "./config/Database.js";
 
const {DataTypes} = Sequelize;
 
const Datamining = db.define('proses_mining',{
     
    id_produk: DataTypes.STRING,
    Iterasi_1: DataTypes.INTEGER,
    Distance1: DataTypes.DOUBLE,
    Distance2: DataTypes.DOUBLE,
    Iterasi_2: DataTypes.INTEGER,
    Distance3: DataTypes.DOUBLE,
    Distance4: DataTypes.DOUBLE,
    Iterasi_3: DataTypes.INTEGER,
    Distance5: DataTypes.DOUBLE,
    Distance6: DataTypes.DOUBLE,
    Iterasi_4: DataTypes.INTEGER,
    Distance7: DataTypes.DOUBLE,
    Distance8: DataTypes.DOUBLE,
    Iterasi_5: DataTypes.INTEGER,
    Distance9: DataTypes.DOUBLE,
    Distance10: DataTypes.DOUBLE,
    Iterasi_6: DataTypes.INTEGER,
    Distance11: DataTypes.DOUBLE,
    Distance12: DataTypes.DOUBLE,
    Iterasi_7: DataTypes.INTEGER,
    Distance13: DataTypes.DOUBLE,
    Distance14: DataTypes.DOUBLE,
},{
    freezeTableName: true,
    timestamps: false
});


Datamining.removeAttribute('id');
export default Datamining;
 
(async()=>{
    await db.sync();
})();