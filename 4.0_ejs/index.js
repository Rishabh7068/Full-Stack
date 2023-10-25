import express from "express";


const app = express();
const port = 3000;

app.get("/" ,(req,res)=>{
    const today = new Date();
    const day  = today.getDay();

    let type = "A weekday";
    let adv = "its time to work hard shit";

    if(day == 0 || day === 6){
         type = "A weakday";
         adv = "fun day";
    }

    res.render("index.ejs" , {
        dayType: type,
        advice : adv
    });
});

app.listen(port,()=> {
    console.log("server is running" + " " +port)
});