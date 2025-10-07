import https from 'https';
import chalk  from 'chalk';

const getJoke=()=>{
const url="https://official-joke-api.appspot.com/random_joke"

https.get(url,(response)=>{
    let data="";
    response.on('data',(chunk)=>{
        data+=chunk;
    });

    response.on('end',()=>{
        const joke=JSON.parse(data);
        console.log(`Here is Random ${joke.type} joke:`);
        console.log(chalk.red(`${joke.setup}`));
        console.log(chalk.blue.bgRed.bold(`${joke.punchline}`));
    })

    response.on('error',(err)=>{
            console.log(`Error Fetching the joke ,${err.message}`);
    })

})
}
getJoke();