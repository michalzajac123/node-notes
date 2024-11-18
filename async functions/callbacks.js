const fs = require("fs"); //przykład callbacka

console.log("Zaczynamy czytanie pliku...");
fs.readFile("plik.txt","utf8",(err,data) => {
    if(err) throw new error("Błąd podczas odczytu pliku", err);
    console.log(data);
})
console.log("Wyświetla się po wysłaniu zapytania o wczytanie pliku");