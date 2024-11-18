const fs = require("fs").promises;

// console.log("Zaczynamy czytanie pliku...");
// fs.readFile("plik.txt","utf8")
//     .then(data => console.log(data))
//     .catch(err => console.log("Błąd podczas odczytu pliku", err));
// console.log("Wyświetla się po wysłaniu zapytania o wczytanie pliku");

//Przykład async/await
//pozwala czytelnej na obsługe promisów
//.funckja asynchroniczna zwraca promisa a await czeka na jego zakończenie

async function readFile(){
    try{
        console.log("Zaczynamy czytanie pliku...");
        const data = await fs.readFile("plik.txt","utf8");
        console.log(data);
    }
    catch(err){
        console.log("Błąd podczas odczytu pliku", err);
    }
}
readFile();