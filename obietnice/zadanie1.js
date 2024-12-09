// Zadanie 1

const zamowienie = () => {
    const promise1 = new Promise((resolve) => setTimeout(() => resolve("Kawa"), 2000));
    const promise2 = new Promise((resolve) => setTimeout(() => resolve("Kanapka"), 3000));
    const promise3 = new Promise((resolve) => setTimeout(() => resolve("Ciasto"), 1000));

    Promise.all([promise1, promise2, promise3])
    .then((results) => {
        let czas = Date.now();
        results.forEach((result) => {
            console.log(`Zamówienie - ${result} gotowe`);
        });

        czas = Date.now() - czas ;
        console.log(`Zamówienie - czas przygotowania: ${czas}s`);
    })
    .catch((error) => console.error("Błąd: ", error))
}
// zamowienie();

// Zadanie 2
const whoWinsFirst = () => {
    const promise1 = new Promise((resolve) => setTimeout(() => resolve("Kawa"), 2000));
    const promise2 = new Promise((resolve) => setTimeout(() => resolve("Kanapka"), 3000));
    const promise3 = new Promise((resolve) => setTimeout(() => resolve("Ciasto"), 1000));
    
    Promise.race([promise1, promise2, promise3])
    .then((results) => {
        console.log(`Pierwsze zamówienie - ${results} gotowe`+ "\n");
    })
    .catch((error) => console.error("Błąd: ", error))
}
// whoWinsFirst();

// Zadanie 3
const checkAllTasks = () => {
    const promise1 = Promise.resolve("Kawa");
    const promise2 = Promise.reject("Kanapka");
    const promise3 = Promise.resolve("Ciasto");

    Promise.allSettled([promise1, promise2, promise3])
    .then((results) => {
        results.forEach((result, index) => {
            if(result.status === "fulfilled")
                console.log(`Zamówienie - ${result.value} gotowe`);
            else
                console.log(`Zamówienie - ${result.reason} - błąd`);
        });
    })
    .catch((error) => console.error("Błąd: ", error))
} 
// checkAllTasks();

// Zadanie 4
const findFirstSuccess = () => {
    const promise1 = Promise.reject("Kawa");
    const promise2 = new Promise((resolve) => setTimeout(() => resolve("Kanapka"), 3000));
    const promise3 = Promise.reject("Ciasto");
    const promise4 = Promise.resolve("Herbata");

    Promise.any([promise1, promise2, promise3, promise4])
    .then((result) => {
        console.log(`Pierwsze zamówienie - ${result} gotowe`);
    })
    .catch((error) => console.error("Błąd: ", error))
}
// findFirstSuccess()

// Zadanie 5
const processTasks = async () => {
    const promise1 = new Promise((resolve) => setTimeout(() => resolve("Kawa"), 1000));
    const promise2 = new Promise((resolve) => setTimeout(() => resolve("Kanapka"), 2000));
    const promise3 = new Promise((resolve) => setTimeout(() => resolve("Ciasto"), 3000));

    await Promise.all([promise1, promise2, promise3])
    .then((results) => {
        results.forEach((result) => {
            console.log(`Zamówienie - ${result} gotowe`);
        });
    })
    .catch((error) => console.error("Błąd: ", error))
}
processTasks();
