// console.log("praktika JS Ciklai")

// //1 uzdavinys. naudojant ciklą atspausdinti penkias eilutes ‘Labas’;

// console.log("-----------------------1 uzduotis----------------------------")
// for (let i = 0; i < 5; i++) {
//     console.log("Labas");
// }

// //2 uzduotis naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje eilutėje);
// console.log("---------------------------2 uzduotis----------------------")
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }


// naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius
//     vienoje eilutėje);
// console.log("------------------------3 uzduotis------------------------")



// for (let i = 0; i < 50; i += 10) {
//     console.log(i)
// }


//naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius
// vienoje eilutėje); 

// console.log("-------------------------- 4 uzduotis-------------------------")

// for (let i = 49; i < 54; i++) {
//     console.log(i);
// }

// console.log("----------------------5 uzduotis------------------------------)
// naudojant ciklą penkiose eilutėse atspausdinti skaičius 4 3 2 1 0 (vienas skaičius vienoje
//     eilutėje);

// for (let i = 4; i > -1; i--) {
//     console.log(i);
// }

// console.log("--------------------6 uzduotis----------------------------------")
// naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10
// (vienas skaičius vienoje eilutėje);


// for (let i = 0; i < 5; i++) {
//     let a = Math.floor(Math.random() * 11);
//     console.log(a);
// }


// console.log("-------------------7 uzduotis---------------------")
// naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius
//     vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5;

// let i;
// while(i !==5){
//      i = Math.floor(Math.random() * 11);
//     console.log(i);
// }

// console.log("-------------------------------8 uzduotis-------------------")
// naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius
//     vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100;


// let z;
// let sum=0;
// while(sum <= 100){
//    z = Math.floor(Math.random() * 11)
//    sum=sum+z
//    console.log(z)

// }

// console.log(sum)

// console.log("---------------------------9 uzduotis---------------------------------")
// naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius
//     vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek
//     ciklų prasisuko;


// let i;
// let a = 0;
// while (i !== 5 && i!==7) {
//     i = Math.floor(Math.random() * 11);
//     console.log(i);
//     a = a + 1;

// }
// console.log("Prisuko " + a + " ciklu")


console.log(" ------------------------------10 uzduotis -------------------------")
// Vienas colis yra 2,54 cm. Sudarykite programą kuri pateiktų ekrane lentelę nuo 1 iki n
// centimetrus coliais ir atvirkščiai

// function inch(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log(i + " colis " + (i * 2.54) + " centimetru");
//         console.log(i + " centimetru  " +(i/2.54).toFixed(2)  + " colis ");
//     }
// }

// inch(Math.floor(Math.random() * 11))

// console.log(" ------------------------------11 uzduotis -------------------------")
// Bankas moka 2% metinių palūkanų. Indėlininkas pasidėjo į banką 100e. Sudarykite
// kasmetinę banko atskaitą klientui iki n metų. Ataskaitoje pateikite: metus, palūkanas,
// indėlį.

// let sum = 100;
// let i;


// function deposit(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log(i + " metai " + ((sum * 0.02).toFixed(2)) + " Eurų palūkanų. Indėlis " + (sum +(sum * 0.02)).toFixed(2)+" Eurų");
//         sum =parseFloat((sum + (sum * 0.02)).toFixed(2)) 
//     }
// }
// deposit(10);

// console.log(" ------------------------------12 uzduotis -------------------------")
// Dviženklio skaičiaus dešimčių skaitmuo tris kartus didesnis už vienetų skaitmenį. Jei
// tuos skaitmenis sukeistume vietomis, tai gautume skaičių, 36 vienetais mažesnį už
// duotąjį, raskite tą skaičių


// let i;
// let a;
// let b;


// function search() {
//     for (i = 10; i <= 99; i++) {
//         a = (Math.floor(i / 10));
//         b = (i % 10); 
//         if ((b * 3) === a && (i - 36) === (b*10+a)) {
//             console.log(i);
//         }
//     }
// }
// search()



// . Raskite keturženklius skaičius, kurių pirmasis skaitmuo yra lyginis, o skaičius nesidalina iš 998 ?
console.log(" ------------------------------13 uzduotis -------------------------")

// let i;
// function numbers(){
//     for(let i=1000; i<10000; i++){
//         if((Math.floor(i/1000))%2===0 && i%998 ===0){
//             console.log(i);
//         }
//     }
// }
// numbers();

console.log(" ------------------------------14 uzduotis -------------------------")

// Keliamieji metai turi 366 dienas, paprastieji – 365. Visi metai, išskyrus šimtmečius, yra
// keliamieji, jie dalūs iš 4. Šimtmečių metai yra keliamieji, jeigu dalūs 400. Pvz.: 1600
// metai yra keliamieji, nes dalūs iš 400, o 1700 – paprastieji. Raskite visus mūsų eros
// keliamuosius metus.


// let i;

// function leapYear(){
//     for (i=0;i<2022;i++){
//         if(i%400===0){
//             console.log(i);
//         }if(i%4===0 && i%100!==0){
//             console.log(i);
//         }
//     }
// }

// leapYear();

console.log(" ------------------------------15 uzduotis -------------------------")
// Norėdami paskatinti žmones naudotis visuomeniniu miesto transportu, savivaldybės
// tarnautojai sugalvojo, kad bilietai, kurie baigiasi lyginiu skaitmeniu, kainuos perpus
// pigiau. Bilietai, kurie baigiasi nuliu, parduodami be nuolaidos. Parenkite programą,
// spausdinančią visų bilietų, kurie kainuos pigiau, numerius. Bilietai pradedami numeruoti
// nuo m-tojo, baigiami n-tuoju. Kai m = 997, o n = 1003, tuomet turi būti rodomi tokie
// bilietų numeriai: 998 1002

// function tikets(m, n) {
//     if (m < n) {
//         for (let i = m; i < n; i++) {
//             if (i % 2 === 0 && (i % 10) !== 0) {
//                 console.log(i);
//             }
//         }
//     } else {
//         console.log("Neteisingi bilietų numeriai");
//     }
// }
// tikets(997, 1003);

console.log(" ------------------------------16 uzduotis -------------------------")
// Duotas natūralus skaičius n. Raskite pirmą skaitmenį



// function number(n) {
//     while (n > 9) {
//         n = ((Math.floor(n / 10)));
//     }
//     console.log("  Pirmas skaitmuo " + n);
// }
// number(538);




console.log(" ------------------------------17 uzduotis -------------------------")
// // Duotas natūralusis skaičius n. Raskite skaitmenų sumą.


// function number(n) {
//     let sum = 0;
//     let i;

//     while (n > 0) {
//         i = n % 10;
//         n = Math.floor(n / 10);
//         sum = sum + i;
//     }
//     console.log(" Skaitmenų suma " + sum)
// }

// number(2345);


// console.log(" ------------------------------18 uzduotis -------------------------")
// // Duotas natūralusis skaičius n. Raskite atvirkščią skaičių duotajam. Pvz.: n=123, atv =321


// let n;

// function number(n) {
//     let i;
//     let sum = 0;
//     let z = n;

//     while (n > 0) {
//         i = n % 10;
//         n = Math.floor(n / 10);
//         sum = (sum * 10 + i);
//     }
//     console.log(" n= " + z + " atv= " + sum)
// }

// number(1323)


// let n;
// let nNew;
// let nReverse;

// function number(n){
//     nString= n.toString();
//     nReverse = nString.split("").reverse().join("");
//     nNew = parseInt(nReverse);
//     console.log("n =  "+n+", atv. = "+nNew);
// }


// console.log(" ------------------------------19 uzduotis -------------------------")
// 19. Duotas natūralus skaičius n. Sudarykite programą, kuri rastų didžiausią ir mažiausią
// skaitmenį.

//  let n;

// function number(n) {
//     let i;
//     let d = 0;
//     let m = 9;

//     let z = n;
//     while (n > 0) {
//         i = n % 10;
//         n = Math.floor(n / 10)
//         if (d <= i) {
//             d = i;
//         }
//         if (m >= i) {
//             m = i
//         }
//     }
//     console.log("Skaičius " + z + ". Didžiausias skaitmuo " + d + ", Mažiausias skaitmuo " + m)
// }

// number(18138)


// 20 Bankas moka indėlininkui p (p>0) procentų palūkanų per metus. Parašykite programą,
// kuri apskaičiuotų, po kiek metų šimto eurų indėlis taps didesnis už 100000
// console.log(" ------------------------------20 uzduotis -------------------------")

// let p;

// function deposit(p) {
//     let sum = 0;
//     let i = 100;

//     while (i < 100000) {
//         i = (i + i * (p / 100));
//         sum++;
//     }
//     console.log("  100 eurų,  gaunant " + p + "% palūkanų per metus, taps 100000  eurų per " + sum + " metų ");
// }

// deposit(5)




// console.log(" ------------------------------21 uzduotis -------------------------")
// 21. Ežere pražydo viena lelija. Kiekvieną dieną žiedų skaičius padvigubėdavo. Parašykite
// programą, kuri apskaičiuotų:
// a. Kiek žiedų buvo po n dienų
// b. Kelintą dieną žiedai užklojo pusę ežero, jeigu visame ežere gali tilpti m žiedų

// 

// let n=5;
// let z = 1;


// if (n > 0) {
//     for (i = 1; i < n; i++) {
//         z = (z* 2);
//     }
//     console.log("a. Po " + (n) + " dienų , žiedų bus " + a);
// }

// let m= 16 ;


// let d = 0;

// if (m > 0) {
//     while ( m > 1) {
//         m = (m / 2);
//         d++;
//     }
//     console.log("b. Pusę ežero užklojo per " + (d) + " dienų")
// }









// console.log(" ------------------------------22 uzduotis -------------------------")
// 22. Pavasarį pradėjęs dirbti sode sodininkas pirmąją dieną išgenėjo m1, antrąją – m medžių
// daugiau negu pirmąją, trečiąją – m medžių daugiau negu antrąją ir t.t. Parašykite
// programą, skaičiuojančią, kiek dienų d dirbs sodininkas, kol išgenės n sode augančių
// medžių. Paskutinei dienai gali likti mažiau medžių. Visi duomenys yra sveikojo tipo.
// Pasitikrinkite: kai m1 = 3, m = 1, n = 16, tuomet kompiuterio ekrane turi būti rodoma:
// Sodininkas dirbs 4 dienas


// let m1;
// let m;
// let n;


// function day(m1, m, n) {
//  let i;
// let a = 1;

//     if (n > m1) {
//         let i = m1
//         while (i < n) {
//             i = i + (m1 + m);
//             m1 = (m1 + m);
//             a ++;
//         }
//         console.log(" Sodininkas dirbs " + a + " dienas");
//     } else {
//         console.log(" Sodininkas dirbs 1 diena");
//     }
// }
// day(3, 1, 16);