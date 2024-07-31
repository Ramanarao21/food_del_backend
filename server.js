import express from "express";
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRouter.js";
import orderRouter from "./routes/orderRoute.js";

// api config 

const app = express()
const port = 4004 

//middleware 

app.use(express.json())
app.use(cors())

//db connect 
connectDB();

//api endpoints

app.use("/api/food" , foodRouter);
app.use("/images" , express.static('uploads'))
app.use("/api/user", userRouter);
app.use("/api/cart" , cartRouter);
app.use("/api/order" , orderRouter);



app.get("/" , (req,res) => {
    res.send("API Working...")

})

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`)
})
