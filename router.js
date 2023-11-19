import { Router } from "express";
import * as fun from "./route_handler.js"
import multer from "multer";

const router = Router();


const storage =multer.diskStorage({
    destination:"./resume",
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const uploder = multer({storage:storage})


router.route("/api").post(uploder.single("resume"),fun.data);

router.route("/api").get(fun.get_data);

router.route("/get_file/:num").get(fun.get_file);

router.route("/user/:num").get(fun.one);
export default router;