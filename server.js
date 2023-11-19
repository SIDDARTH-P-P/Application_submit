import  express from "express";
import router from "./router.js";
import dotenv from "dotenv"
import connect_db from "./connection.js";

dotenv.config();
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/",router)
app.use(express.static("./template"))



connect_db().then(()=>{
    app.listen(process.env.PORT,(error)=>{
        if(error){
            console.log(error);
        }
        console.log("server start");
    })
})
.catch((error)=>{
    console.log(error);
})