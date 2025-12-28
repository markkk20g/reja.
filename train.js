
// A-TASK: 

// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni 
// ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.

function countLetter(letter, word) {
    // const i = word.split(letter).length-1; 
    // return i;
    const a = letter.toLowerCase();
    const b = word.toLowerCase()
    const c = b.split(a).length-1;
    return c;
}

const run = countLetter("e", "engineer");
console.log(run);



// Darsdagi yozilgan code lar

// console.log('Jack Ma maslahatlari');
// const list = [
//     "yaxshi talaba bo'ling",
//     "to'g'ri boshliq tanlang, va ko'proq xato qiling",
//     "o'zingizni ishlaringizni boshlang",
//     "siz kuchli bo'lgan narsalarni qiling",
//     "yoshlarga investitsiya qiling",
//     "endi dam oling, foydasi yoq endi"
// ];


// // CALLBACK Function

// function maslahatBering(a, callback) {
//     if(typeof a !== 'number') callback("Insert a number", null);
//     else if(a <= 20) callback(null, list[0]);
//     else if(a > 20 && a <= 30) callback(null, list[1]);
//     else if(a > 30 && a <= 40) callback(null, list[2]);
//     else if(a > 40 && a <= 50) callback(null, list[3]);
//     else if(a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setTimeout(() => {
//             callback(null, list[5])
//         }, 1000)

//         // setInterval(() => {
//         //     callback(null, list[5]);
//         // }, 1000);
//     }
// }

// console.log('passed here 0');
// maslahatBering(73, (err, data) => {
//     if(err) console.log('ERROR:', err);
//     else {
//         console.log('javob:', data);
//     }
// });
// console.log('passed here 0');



// ASYNCHRONOUS Function

// async function maslahatBering(a) {
//     if(typeof a !== 'number') throw new Error("Insert a number");
//     else if(a <= 20) return list[0];
//     else if(a > 20 && a <= 30) return list[1];
//     else if(a > 30 && a <= 40) return list[2];
//     else if(a > 40 && a <= 50) return list[3];
//     else if(a > 50 && a <= 60) return list[4];
//     else {
//         // return list[5];

//         // return new Promise((resolve, reject) => {
//         //     setTimeout(() => {
//         //         resolve(list[5]);
//         //     }, 5000);
//         // });

//         return new Promise((resolve, reject) => {
//             setInterval(() => {
//                 resolve(list[5]);
//             }, 5000);
//         });
//     }
// }



// Call via then/catch

// console.log('passed here 0');
// maslahatBering(25).then((data) => {
//     console.log('Javob:', data);
// }).catch((err) => {
//     console.log('ERROR:', err);
// });
// console.log('passed here 0');



// Call via async/await

// async function run() {
//     let javob = await maslahatBering(25);
//     console.log(javob);
//     javob = await maslahatBering(62);
//     console.log(javob);
//     javob = await maslahatBering(43);
//     console.log(javob);
// }
// run();