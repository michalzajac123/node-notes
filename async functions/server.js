function wolnaOperacja(){ //operacja synchroniczna
    const start = Date.now();
    while(Date.now() - start < 3000) {}
    console.log("Zakończono wolną operacje")
}

function szybkaOperacja(){ //operacja asynchroniczna
    setTimeout(() => {
        console.log("Zakończono szybką operacje")
    }, 2000);
}

console.log("Start")
szybkaOperacja();
console.log("Koniec")   
