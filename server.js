 
const http=require("http");
const  {myName,myPlace,greet}=require("./filehandling");

const server=http.createServer((request,response)=>{
    if (request.url==="/"){
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.end(`Hello ${myName} from ${myPlace}! ${greet()}`);


    }else if(request.url==="/about"){
        response.writeHead(200,{"Content-Type":"application/json"});

        response.end(JSON.stringify({name:myName,place:myPlace}));
    }else {
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.end("Page Not Found");
    }
    
});

server.listen(3000,()=>{
    console.log("https server is running successfully in the host 3000")
})