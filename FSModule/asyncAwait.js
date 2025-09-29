const { constants } = require("buffer");
const fs = require("fs");
const path = require("path");

const filename = "asyncfile.txt";
const filepath = path.join(__dirname, filename);

fs.filepath1 = __dirname;

fs.promises
.readdir(fs.filepath1)
.then((data)=>console.log(data))    
.then((err)=>console.log(err)); 


const readfolder = async () => {
    try {
        const res = await fs.promises.readdir(fs.filepath1);
        console.log(res);
    }
    catch (err) {
        console.log(err);
    }
};
readfolder();

const writefile = async () => {
    try {
       await  fs.promises.writeFile(filepath, "This is initial data" ,"UTF-8");
       console.log("File Written Successfully!");
    }
    catch (err) {

    }
}

writefile();


const readfile=async()=>{
    try{
           const res= await fs.promises.readFile(filepath,'UTF-8');
           console.log(res);
    }
    catch(err){
        console.error(err);
    }
}
readfile(); 


const appenddata=async()=>{
    try{
        await fs.promises.appendFile(filepath,"\n this is updated data","UTF-8");
        console.log("Data Appended Successfully");

    }
    catch(err){
        console.error(err);
    }   
}

appenddata();