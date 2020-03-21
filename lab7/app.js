const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public")); // where you store css, js, images, etc...

const request = require("request");


// routes
app.get("/", async function(req, res) {
    let parsedData = await getImages("otters");
    
    // dir displays content of an object
    console.dir("Parsed Data: " + parsedData);
    res.render("index", {"image":parsedData.hits[0].largeImageURL});
    
});

app.get("/results", async function(req, res) {
    // console.dir(req);
    // gets the keyword user search for from input text
    let keyword = req.query.keyword;
    let parseData = await getImages(keyword);
    res.render("results", {"images":parseData});
});

// returns all data from Pixabay API as a JSON object
function getImages(keyword) {
    
    return new Promise(function(resolve, reject){ 
        request('https://pixabay.com/api/?key=15448805-2fb6d362dc06889b4a4ad4a80&q=' + keyword, function (error, response, body) {
            if(!error && response.statusCode == 200) {
                // need to parse the body because its contents is a string; conver to a JSON object 
                let parseData = JSON.parse(body);
                
                // returns ParseData in root route
                resolve(parseData); 
                // let index = Math.floor(Math.random() * parseData.hits.length);
                // res.send("<img src='" + parseData.hits[index].largeImageURL + "'/>");      
                // res.render("index", {"image":parseData.hits[index].largeImageURL});
            } else {
                reject(error);
                console.log(error);
                console.log(response.statusCode);
            }
        }); // request    
    });
}


// start the server
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Express server is running!");
});

