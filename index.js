const express=require('express');
let app=express();
const methodOverride=require('method-override');
const mongoose=require('mongoose');
const path = require('path');
const Chat=require("./models/chat.js");
app.use(express.urlencoded({extended:true}));
app.use(express.json);

// Using EJS

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

// Using Static Files

app.use(express.static(path.join(__dirname,"public")));
let port=8080;

//App is Listening 

app.listen(port,()=>{
    console.log(`App is Listening at Port ${port}`);
});

// Creating Database Connection

main().then(()=>{
    console.log("Connected with the Database");
}).catch((err)=>{
    console.log(err.error.from.properties.message);
});
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/chatapp");
}

// REST CRUD Operation

// Index Route
 
app.get("/chats",async (req,res)=>{
    let chats= await Chat.find();
    res.render("index.ejs",{chats});
});


// Edit Route

app.get("/chats/:id/edit",async (req,res)=>{
    let id=req.params;
    let chat=await Chat.findById(id);
    res.render("edit.ejs",{data});
});

app.put("/chats/:id/edit",async (req,res)=>{
    let id=await req.params;
    let {message}=req.body;
    Chat.findByIdAndUpdate(id,{message:message});
    res.redirect("/chats");
});


// Delete Route

app.delete("/chats/:id/delete",async(req,res)=>{
    let id=await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
});

// New Chat Route

app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
})


app.get("/new",async(req,res)=>{
    let {from,to,message}=req.body;
    let timeline=new Date();
    let newChat= await Chat.insertMany({from:from,to:to,message:message,timeline:timeline});
})

