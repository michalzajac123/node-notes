// [przyklad promiseAll] - Promise.all - oczekuje na zakończenie wszystkich obietnic i zwraca tablicę wyników lub błąd jeśli która kolwiek z nich 

const examplePromiseAll = () => {
    const promise1 = Promise.resolve(10);
    const promise2 = new Promise((resolve) => setTimeout(() => resolve(20), 5000));
    const promise3 = Promise.reject(30);

    Promise.all([promise1,promise2,promise3])
    .then((results) => {
        console.log("Promise.all - wyniki: ",results);
        const sum = results.reduce((acc, val) => acc + val, 0);
        console.log("Promise.all - Sum: ", sum);               
    })
    .catch((error) => console.error("Promise.all - błąd: ",error))
}
examplePromiseAll();

// Premise.race - zwraca pierwszy wynik zakończonej 
 
const  examplePromiseRace = () => {
    const fastPromise = new Promise((resolve) => setTimeout(() => resolve(20), 3000));
    const slowPromise = new Promise((resolve) => setTimeout(() => resolve(40), 4000));

    Promise.race([fastPromise,slowPromise])
    .then((result) => console.log("Promice.race - Pierwszy wynik: ", result))
    .catch((error) => console.error*("Promise.race - błąd: ", error))
}
// examplePromiseRace();

//PromiseAllSettled - zwraca tablicę z wynikami wszystkich obietnic, niezależnie od tego czy zakończyły się sukcesem czy błędem
const examplePromiseAllSettled = () => {
    const promise1 = Promise.resolve("Sukces 1");
    const promise2 = Promise.reject("Błąd 2");
    const promise3 = Promise.resolve("Sukces 3");

    Promise.allSettled([promise1,promise2,promise3])
    .then((results) => {
        results.forEach((result, index) => {
            if(result.status === "fulfilled")
                console.log(`Promise.allSetted - Promise ${index+1} zakonczony sukcesem:  ${result.value}`);
            else
                console.log(`Promise.allSetted - Promise ${index+1} zakonczony błędem:  ${result.reason}`);
        });
    })
    .catch((error) => console.error("Promise.allSettled - błąd: ",error))
}

// examplePromiseAllSettled();

// Promise.any - zwraca pierwszy sukces zakończonej obietnicy lub błąd jeśli wszystkie zakończyły się błędem

const examplePromiseAny = () => {
    const promise1 = Promise.reject("Błąd 1");
    const promise2 = Promise.resolve("Sukces 2");
    const promise3 = Promise.reject("Błąd 3");

    Promise.any([promise1,promise2,promise3])
    .then((result) => console.log("Promise.any - Pierwszy sukces: ", result))
    .catch((error) => console.error("Promise.any - błąd: ", error))
}

examplePromiseAny();