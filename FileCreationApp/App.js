import readline from 'readline';
import fs from 'fs';

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const fileCreation=()=>{
    rl.question('Enter your file name',(filename)=>{
        rl.question("Enter the content for file",(content)=>{
                fs.writeFile(`(filename).txt`,content,(err)=>{
                    if(err){
                    console.error("Error occur somthing went wrong");
                    }
                    else{
                        console.log(`File "${filename}.txt"created sucessfully`);
                    }
                    rl.close();
                })
        })
    }
    )
}
fileCreation();