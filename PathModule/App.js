const { dir } = require("console");
const path=require("path");

console.log(__dirname);
console.log(__filename);

const filepath=path.join("folder","Students","data.txt");
console.log(filepath);

const resolvepath=path.resolve(filepath);
const extname=path.extname(filepath);
const basename=path.basename(filepath);
const dirname =path.dirname(filepath);

console.log({resolvepath,extname,basename,dirname});