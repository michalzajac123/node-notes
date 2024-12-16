const fs = require('fs');


const writeMessage = (message)=> {
    const writAbleStream = fs.createWriteStream("Output.txt"), // Zapis do pliku Output.txt
    date = new Date().toISOString();
    writAbleStream.write(`${date} : ${message}\n`);
    writAbleStream.end();
    
    writAbleStream.on("finish",()=>{
        console.log("Zapis zakończony. ");
    })
    writAbleStream.on("error",(err)=>{
        console.log("Błąd zapisu: ", err);
    })
}
writeMessage("Dupa ")