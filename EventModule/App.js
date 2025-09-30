const eventEmitter=require('events');
const { emit } = require('process');

const emitter=new eventEmitter();

emitter.addListener("greet",()=>{
    console.log("Hello, welcome to the event-driven world!");
})
emitter.emit("greet");

emitter.on("greet",(username,prof)=>{
    
    console.log(`Hello, I am ${username} and I am a ${prof}`);
})
emitter.emit("greet","Rohan Mane","MERN Developer");
