import express from "express";
import axios from "axios";


const app = express();
const port = 3000;

app.use(express.static("public"));



// 4. When the user goes to the home page it should render the index.ejs file.

app.get("/", async (req, res) => {
    try {
        const response = await axios.get("https://secrets-api.appbrewery.com/random");
        const result = response.data; 
        res.render("index.ejs", { 
            secret: result.secret,
            user : result.username
         });
    } catch (error) {
        res.render("index.ejs" , {user : error.message});
    }
})


// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.

app.listen(port , ()=>{
    console.log(`server is running ${port}`);
})
