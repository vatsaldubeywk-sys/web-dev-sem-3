const fs = require('fs');

fs.writeFile(
    'sample.txt',"Welcome to Full Stack Dev",(err)=>{
        if(err){
            console.log("Error creating File",err);
            return;
        }else{
            console.log("Created");
        }
    }
)

fs.readFile('sample.txt','utf8',(err,data)=>{
    if(err){
        console.log("Error reading File",err);
        return;
    }else{
        console.log("Read ");
        console.log(data);
    }
});

fs.appendFile('sample.txt', '\nhello neighbour', (err) => {
  if (err){
  console.log('The "data to append" was appended to file!');
  }else{
    console.log("Done ");
  }
});

fs.readFile('sample.txt','utf8',(err,data)=>{
    if(err){
        console.log("Error reading File",err);
        return;
    }else{
        console.log("Read ");
        console.log(data);
    }
});

fs.writeFile(
    'del.txt',"Welcome to Full Stack Dev",(err)=>{
        if(err){
            console.log("Error creating File",err);
            return;
        }else{
            console.log("Created");
        }
    }
)

fs.unlink('del.txt', (err) => {
  if (err){
  console.log("Can't Delete",err);
  }
  else{
    console.log("Deleted");
  }
});