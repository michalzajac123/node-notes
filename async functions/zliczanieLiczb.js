const fs = require("fs").promises;

const countNumbers = async () => {
    try{
        const data = await fs.readFile("liczby.txt","utf8");
        const numbers = data.split(",");   
        console.log(numbers);
        let sum = 0;
        numbers.forEach(number => {
            sum += parseInt(number);
        });
        let srednia = sum / numbers.length;
        console.log("Suma liczb: "+sum)
        console.log("Średnia liczb: "+srednia)
    }catch (err){
        console.log("Błąd podczas odczytu pliku", err)
    }
}
countNumbers();