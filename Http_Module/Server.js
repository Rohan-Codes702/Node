const http=require("http");

const server=http.createServer((req,res)=>{ 
    if(req.url =='/'){
        res.write("Welcome to home page ");
            res.end();

    }
    if(req.url==='/about'){
        res.write("This is about page ");
        res.end();
    }

     if(req.url==='/login'){
        res.write("This is Login page ");
        res.end();
    }

     if(req.url==='/register'){
        res.write("This is Register page ");
        res.end();
    }


});


const Port=3000;
server.listen(Port,()=>{
    console.log("Listinning Server Run on port 3000");
})
