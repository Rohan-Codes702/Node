const os=require("os");

console.log("OS Platform",os.platform());
console.log("User",os.userInfo());

console.log("CPU Architecture",os.arch());
console.log("Free Memory",os.freemem(),"bytes");
console.log("Total memory",os.totalmem());