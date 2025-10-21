import express from 'express';

import path from 'path';
const app = express();
 
app.use(express.static("public"));

app.get("/",(req,res)=>{
    const homwpage=path.join(import.meta.dirname,"public","index.html");
    
    res.sendFile(homwpage);
})

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
