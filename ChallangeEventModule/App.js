const Emitter=require("events");

const emitter=new Emitter();

const counter={
    Login:0,
    Logout:0,
    Running:0,
    Stable:0
}
emitter.on("Login",()=>{
    counter["Login"]++;
        console.log("Loggin Here");
})

emitter.on("Logout",()=>{
    counter["Logout"]++;
    console.log("Logout Here");
})

emitter.on("Running",()=>{
    counter["Running"]++;
    console.log("Run Here");
})

emitter.on("Stable",()=>{
    counter["Stable"]++;
    console.log("Stable state");
})

emitter.emit("Login");
emitter.emit("Logout");
emitter.emit("Running");
emitter.emit("Stable");

console.log(counter);


