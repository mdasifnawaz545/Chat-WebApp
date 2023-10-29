const  mongoose  = require('mongoose');

// Connecting with the Database

main().then(() => {
    console.log("Connected with the Database");
}).catch((err) => {
    console.log(err.error.from.properties.message);
});
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/chatapp");
}

// Creating some Random data into the DataBase


let data = [{
    from: "MOHAMMAD ASIF NAWAZ",
    to: "MOHAMMAD WALIULLAH",
    message: "Salaam...I am MOHAMMAD ASIF NAWAZ am i talking to MOHAMMAD WALIULLAH",
    timeline: new Date(),
}, {
    from: "MOHAMMAD NASER AHMAD",
    to: "MOHAMMAD SHAHNAWAZ",
    message: "Salaam...I am MOHAMMAD NASER AHMAD am i talking to MOHAMMAD SHAHNAWAZ",
    timeline: new Date(),
}, {
    from: "MOHAMMAD DANYAAL",
    to: "MOHAMMAD AAS",
    message: "Salaam...I am MOHAMMAD DANYAAL am i talking to MOHAMMAD AAS",
    timeline: new Date(),
}, {
    from: "MOHAMMAD NIZAM SIR",
    to: "MOHAMMAD KALIM SIR",
    message: "Salaam...I am MOHAMMAD NIZAM SIR am i talking to MOHAMMAD KALIM SIR",
    timeline: new Date(),
}, {
    from: "MOHAMMAD ASHFAQUE",
    to: "MOHAMMAD AMIR",
    message: "Salaam...I am MOHAMMAD ASHFAQUE am i talking to MOHAMMAD AMIR",
    timeline: new Date(),
}];

const Chat= require("./models/chat.js");

Chat.insertMany(data).then(()=>{
    console.log("Data is Added");
}).catch((err)=>{
    console.log("Data is not Added");
});








