const fs = require("fs").promises;
const readFile = async () => {
    try{
        console.log("Czytanie z pliku");
        const data = await fs.readFile("plik.txt","utf8");
        let howManyLines = data.split("\n").length;
        console.log(`Plik ma ${howManyLines} linii`);
    } catch(err){
        console.log("Błąd podczas odczytu pliku", err);
    }
}
readFile();