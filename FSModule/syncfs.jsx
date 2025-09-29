const fs = require('fs');
const path = require('path'); 

const filename = "test.txt";
const filepath = path.join(__dirname, filename);

fs.writeFileSync(filepath, "This is initial data", "utf-8");

const readfile = fs.readFileSync(filepath, "utf-8");
console.log(readfile);

const appenddata=fs.appendFileSync(
    filepath,
    "\n this is updated data",
    "UTF-8"
);
console.log(appenddata);


const filepath2="demo.txt"
const writefile2=fs.writeFileSync(filepath2,"This is file 2");
console.log(writefile2);

const deletefile=fs.unlinkSync(filepath2);
console.log(deletefile);