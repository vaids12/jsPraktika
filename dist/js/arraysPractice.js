console.log("Arrays Practice")

// // 1. Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra
// // atsitiktiniai skaičiai nuo 5 iki 25

// let masyvas = [];

// for (let i = 0; i < 30; i++) {
//     masyvas[i] = Math.floor(Math.random() * 21) + 5;
// }
// //Math.floor(Math.random()*(max-min)+1)+min
// console.log(masyvas);

// // 2. Naudodamiesi 1 uždavinio masyvu:
// // a. Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;

// let daugiauUz10 = 0;
// for (i = 0; i < masyvas.length; i++) {
//     if (masyvas[i] > 10) {
//         daugiauUz10++;

//     }

// }
// console.log("Reiksmiu , didesniu uz 10 yra: " + daugiauUz10)

// // b. Raskite didžiausią masyvo reikšmę ir jos indeksą arba indeksus jeigu yra keli;

// let max = 0;
// let indeksai = [];


// for (i = 0; i < masyvas.length; i++) {
//     if (masyvas[i] > max) {
//         max = masyvas[i];
//     }
// }

// for (i = 0; i < masyvas.length; i++) {
//     if (max === masyvas[i]) {
//         indeksai.push(i);
//     }
// }
// console.log(" didziausia masyvo reiksme " + max + ",  indeksai yra " + indeksai)


// // c. Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;


// let sum = 0;

// for (i = 0; i < masyvas.length; i++) {

//     if (i % 2 === 0) {
//         sum += masyvas[i];
//     }
// }
// console.log(sum);


// // d. Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos
// // reikšmės indeksas;

// let naujasMasyvas = []

// for (i = 0; i < masyvas.length; i++) {
//     naujasMasyvas.push(masyvas[i] - i);
// }
// console.log(naujasMasyvas);

// e. Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad
// bendras masyvas padidėtų iki indekso 39;

// for (let i = 0; i < 10; i++) {
//     masyvas.push ( Math.floor(Math.random() * 21) + 5);
// }

// console.log(masyvas);

// //f.  Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš
// // neporinių indekso reikšmių, o kitas iš porinių;

// let porinisMasyvas = [];
// let neporinisMasyvas = [];

// for (i = 0; i < masyvas.length; i++) {
//     if (i % 2 === 0) {
//         porinisMasyvas.push(masyvas[i])
//     } else {
//         neporinisMasyvas.push(masyvas[i])
//     }
// }
// console.log(porinisMasyvas);
// console.log(neporinisMasyvas);

// // // g. Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie
// // // didesni už 15;

// for (i = 0; i < masyvas.length; i++) {
//     if (i%2 ===0 && masyvas[i] > 15) {
//         masyvas[i] = 0;
//     }
// }
// console.log(masyvas);

// // // h. Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;

// let a=0;

// for (i=0;i<masyvas.length; i++){
//     if ( masyvas[i] > 10){
//         console.log(" pirmas indeksas didesnis uz 10 yra: " +i)
//         break
//     }
// }



// 3. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200.
// Suskaičiuokite kiek yra kiekvienos raidės

// let raides = "ABCD"
// let masyvasABCD = [];

// for (let i = 0; i < 200; i++) {
//     masyvasABCD[i] = raides.charAt(Math.floor(Math.random() * raides.length));

// }
// // Math.floor(Math.random()*(max-min)+1)+min
// console.log(masyvasABCD);

// let a = 0;
// let b = 0;
// let c = 0;
// let d = 0;
// let i;

// for (let i = 0; i < masyvasABCD.length; i++) {
//     if (masyvasABCD[i] === "A") {
//         a++;
//     } else if (masyvasABCD[i] === "B") {
//         b++;
//     } else if (masyvasABCD[i] === "C") {
//         c++;
//     } else {
//         d++
//     }
// }
// console.log(" raidžių A yra: " + a + ", B: " + b + ", C: " + c + ", D: " + d)



// // // // 4. Išrūšiuokite 3 uždavinio masyvą pagal abecėlę

// console.log(masyvasABCD)
// for (let i = 0; i < masyvasABCD.length; i++) {
//     for (let z = 0; z < masyvasABCD.length; z++) {
//         if (masyvasABCD[i] < masyvasABCD[z]) {

//             let raides1 = masyvasABCD[z];

//             masyvasABCD[z] = masyvasABCD[i];

//             masyvasABCD[i] = raides1
//         }

//     }
// }
// console.log(masyvasABCD)


// let test = [2, 8, 3, 1, 12, 12, 695, 241, 136];

// console.log(test);

// for (i = 0; i < test.length; ++i) {

//     for (let j = 0; j < test.length; ++j) {

//         if (test[i] < test[j]) {

//             let temp = test[j];

//             test[j] = test[i];

//             test[i] = temp;

//         }

//     }

// }
// console.log(test);

// masyvasABCD.sort();
// console.log(masyvasABCD)

// 5. Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999.
// Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).

unikalusMasyvas1 = [];
unikalusMasyvas2 = [];

while (unikalusMasyvas1.length < 100) {
    let random1 = Math.floor(Math.random() * 900) + 100;
    if (!unikalusMasyvas1.includes(random1)) {
        unikalusMasyvas1.push(random1);
    }
}
while (unikalusMasyvas2.length < 100) {
    let random2 = Math.floor(Math.random() * 900) + 100;
    if (!unikalusMasyvas2.includes(random2)) {
        unikalusMasyvas2.push(random2);
    }
}

console.log(unikalusMasyvas2.sort());
console.log(unikalusMasyvas1);







// 6. Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 5 uždavinio
// masyve, bet nėra antrame 5 uždavinio masyve.


newMasyvas =[];

for (i=0; i<unikalusMasyvas1.length; i++){
    if(!unikalusMasyvas2.includes(unikalusMasyvas1[i])){
        newMasyvas.push(unikalusMasyvas1[i]);
    }
}
console.log(newMasyvas)

// 7. Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 5 uždavinio masyvuose.

newMasyvas1 = [];

for (i=0; i<unikalusMasyvas1.length; i++){
    if(unikalusMasyvas2.includes(unikalusMasyvas1[i])){
        newMasyvas1.push(unikalusMasyvas1[i]);
    }
}
console.log(newMasyvas1)


// 8. Sugeneruokite 10 skaičių masyvą pagal taisyklę: Du pirmi skaičiai- atsitiktiniai nuo 5 iki
// 25. Trečias, pirmo ir antro suma. Ketvirtas- antro ir trečio suma. Penktas trečio ir ketvirto
// suma ir t.t.


// let newMasyvas = [];

// for (let i = 0; i < 2; i++) {
//     newMasyvas[i] = Math.floor(Math.random() * 21) + 5;
// }
// for (let i = 2; i < 10; i++) {
//     newMasyvas[i] = (newMasyvas[i - 2] + newMasyvas[i - 1])
// }

// console.log(newMasyvas);