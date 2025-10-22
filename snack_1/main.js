console.log('JS Array Methods Snack 1');

/*
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati:
nel primo array solo le auto a benzina,
nel secondo solo le auto a diesel,
nel terzo il resto delle auto.
Infine stampa separatamente i 3 array.
*/

const cars = [
    { brand: 'Ford', model: 'Fiesta', fuel: 'benzina' },
    { brand: 'Toyota', model: 'Corolla', fuel: 'diesel' },
    { brand: 'Honda', model: 'Civic', fuel: 'gpl' },
    { brand: 'Tesla', model: 'Model 3', fuel: 'elettrico' },
    { brand: 'Fiat', model: 'Panda', fuel: 'metano' },
    { brand: 'Volkswagen', model: 'Golf', fuel: 'benzina' },
    { brand: 'BMW', model: 'Serie 3', fuel: 'diesel' },
    { brand: 'Audi', model: 'A4', fuel: 'gpl' },
    { brand: 'Mercedes', model: 'Classe C', fuel: 'elettrico' },
    { brand: 'Peugeot', model: '208', fuel: 'metano' }
]


// const fuelCars = []
// const dieselCars = []
// const otherCars = []




// With For loop
// for (let i = 0; i < cars.length; i++) {
//     const thisCar = cars[i];
//     if(thisCar.fuel === 'benzina'){
//         fuelCars.push(thisCar)
//     } else if (thisCar.fuel === 'diesel'){
//         dieselCars.push(thisCar)
//     } else {
//         otherCars.push(thisCar)
//     }
// }

// console.log(fuelCars);
// console.log(dieselCars);
// console.log(otherCars);



//With arrays methods

const fuelCars = cars.filter((thisCar) => {
    if (thisCar.fuel === 'benzina') {
        return true
    }
    return false
})



const dieselCars = cars.filter((thisCar) => {
    if (thisCar.fuel === 'diesel') {
        return true
    }
    return false
})



const otherCars = cars.filter((thisCar) => {
    if (thisCar.fuel !== 'benzina' && thisCar.fuel !== 'diesel') {
        return true
    }
    return false
})


console.log(fuelCars);
console.log(dieselCars);
console.log(otherCars);