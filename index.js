
const http = require("http");
const fs = require("fs/promises");
const path = require("path");

//cuando alguien ingrese al servidor vamos a responder con el html

const app= http.createServer(async (request, respose)=>{

    const url = request.url;//ruta donde se hace la peticion.

    console.log(url);

    if(url == "/"){

        
        const htmlPath = path.resolve("./lombok/index.html");
        const html = await fs.readFile(htmlPath, "utf-8");
        // respose.setHeader("Content-Type: text/html");
        // console.log(html);
        respose.write(html);  
    }


    if(url.includes("styles")){

        const stylePath = path.resolve(`./lombok/${url}`);
        console.log(stylePath);
    
        const css = await fs.readFile(stylePath, "utf-8");
        respose.write(css);
    }
    respose.end();
});

const PORT = 3000;

app.listen(PORT);

console.log("reading server");