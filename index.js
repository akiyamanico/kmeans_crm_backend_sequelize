import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import router from "./routes/index.js";
// import ProductRoute from "./routes/ProductRoute.js";
// import SellRoute from "./routes/SellRoute.js";
// import RouterCat from "./routes/CategoryRoute.js";




dotenv.config();
const app = express();
 
app.use(cors({
  credentials: true,
  origin: true,
}));
app.use(cookieParser());
app.use(express.json());
app.use(router);
// app.use(SellRoute);
// app.use(RouterCat);





// app.use(FileUpload());
app.use(express.static("public"));
// app.use(ProductRoute);

app.listen(8080, ()=> console.log('Server running at port 8080'));