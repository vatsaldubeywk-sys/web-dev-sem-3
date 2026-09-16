const fs=require("fs").promises;

async function writeFile(){
    try{
        await fs.writeFile('promise.txt',"Hello Bachhon");
        console.log("File Created");
    } catch(error){
        console.log("Error: ",error);
    }
}
writeFile();

async function readFile(){
    try{
        const data=await fs.readFile('promise.txt','utf8')
        console.log("File Content: ");
        console.log(data);
    } catch(error){
        console.log("Error: ",error);
    }
}
readFile();

async function appendFile(){
    try{
        await fs.appendFile('promise.txt',"\nBye Bye");
        console.log("Done");
    } catch(error){
        console.log("Error: ",error);
    }
}
appendFile();

async function renameFile(){
    try{
        await fs.rename('promise.txt','new.txt');
        console.log("File renamed");
    } catch(error){
        console.log("Error: ",error);
    }
}
renameFile();

async function readFile(){
    try{
        const data=await fs.readFile('new.txt','utf8')
        console.log("File Content: ");
        console.log(data);
    } catch(error){
        console.log("Error: ",error);
    }
}
readFile();

