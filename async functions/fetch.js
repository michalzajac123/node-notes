async function fetchData(){
    try{
        const response = await fetch("https://api.thecatapi.com/v1/breeds");
        const data = await response.json();
        console.log(data);
    } catch(err){
        console.log("Błąd podczas pobierania danych", err);
    }
}
fetchData();