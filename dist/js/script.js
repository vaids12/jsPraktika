// console.log("praktika JS Ciklai")

// //1 uzdavinys
// console.log("1 uzduotis")
// for (let i = 1; i < 6; i++) {
//     console.log("Labas");
// }

// //2 uzduotis
// console.log("2 uzduotis")
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// console.log("3 uzduotis")



// for (let i = 0; i < 51; i += 10) {
//     console.log(i)
// }


// console.log("4 uzduotis")

// for (let i = 49; i < 54; i++) {
//     console.log(i);
// }

// console.log("5 uzduotis")


// for (let i = 4; i > -1; i--) {
//     console.log(i);
// }

// console.log("6 uzduotis")

// for (let i = 0; i < 5; i++) {
//     let a = Math.floor(Math.random() * 11)
//     console.log(a)
// }

// console.log("7 uzduotis")
// let i;
// while(i !==5){
//      i = Math.floor(Math.random() * 11);
//     console.log(i);
// }




// console.log("8 uzduotis")

// let z;
// let sum=0;
// while(sum<100){
//    z = Math.floor(Math.random() * 11)
//    sum=sum+z
//    console.log(z)

// }

// console.log(sum)


// console.log("---------------------------9 uzduotis---------------------------------")
// let i;
// let a = 0;
// while (i !== 5) {
//     i = Math.floor(Math.random() * 11);
//     console.log(i);
//     a = a + 1;
//     if (i === 7) {
//         break;
//     }
// }
// console.log("Prisuko " + a + " ciklu")




// console.log(" ------------------------------10 uzduotis -------------------------")


// function inch(n) {
//     for (let i = 1; i < n; i++) {
//         console.log(i + " colis " + (i * 2.54) + " centimetru");
//         let d=i/2.54 
//         console.log(i + " centimetru  " + d.toFixed(2)  + " colis ");
//     }
// }

// inch(Math.floor(Math.random() * 11))

console.log(" ------------------------------11 uzduotis -------------------------")


// let sum = 100;
// let i;
// let d = 0;

// function deposit(n) {
//     for (let i = 1; i < n+1; i++) {
     
//         console.log(i + " metai " + ((sum * 0.02).toFixed(2)) + " Eurų palūkanų. Indėlis " + (sum +(sum * 0.02)).toFixed(2)+" Eurų");
//         sum =parseFloat((sum + (sum * 0.02)).toFixed(2)) 
//     }
// }
// deposit(5);

console.log(" ------------------------------12 uzduotis -------------------------")


console.log(" ------------------------------13 uzduotis -------------------------")

let i;
function numbers(){
    for(let i=1000; i<10000; i++){
        if((Math.floor(i/1000))%2===0 && i%998 !==0){
            console.log(i)
        }
    }
}
numbers();