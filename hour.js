
setInterval(() => {
    let date = new Date();
    console.clear();
    console.log(`Aktualna godzina to: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}, 1000);