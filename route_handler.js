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
    let {num} = req.params;
    let result = await schema.findOne({_id:num})
    res.send(`
    <h1 style="display: flex;justify-content: center;">Details of : ${result.username}</h1>
    <h3 style="display: flex;justify-content: center;" >Email : ${result.email}</h3>
    <h3 style="display: flex;justify-content: center;" >Phone : ${result.phone}</h3>
    <h3 style="display: flex;justify-content: center;" >Qualification : ${result.qualification}</h3>
    <div style="display: flex;justify-content: center;" >
    <img style="height: 200px;width: 200px;"  src="${result.profile}" alt="">
    </div>
    <a style="display: flex;justify-content: center;" href="http://localhost:3000/get_file/${result.resume.filename}">Resume</a>

    `)
}


export async function get_file(req,res){
    let {num} = req.params
    return res.sendFile(path.resolve(`./resume/${num}`))
}