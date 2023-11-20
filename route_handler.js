import schema from "./schema/schema.js";
import path from "path";

export async function data(req,res){
    let {profile,username,email,phone,qualification} = req.body;
    let resume = req.file;
    let result = await schema.create({
        profile,
        username,
        email,
        phone,
        qualification,
        resume,
    })
    res.json("Application Successfully Uploded")
}

export async function get_data(req,res){
    let result = await schema.find()
    res.json(result)
}


export async function one(req,res){
    let {id} = req.params;
    let result = await schema.findOne({_id:id})
    return res.json(result);
}


export async function get_file(req,res){
    let {file} = req.params
    return res.sendFile(path.resolve(`./resume/${file}`))
}