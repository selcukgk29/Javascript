/* let saniye = parseInt(prompt("Saniye:", "100"));

let dk = parseInt(saniye / 60);
let sn = parseInt(saniye % 60);

console.log(`${saniye} degeri için ${dk} dk ${sn} sn`);
 */




/* let fahrenheit = parseInt((prompt("Değeri giriniz")));
let celcius;

celcius = 5 / 9 * (fahrenheit - 32);
console.log("Celcius karşılığı" + " " + celcius); */


let girilendeger = parseInt(prompt("Yıl değeri"));
console.log(girilendeger % 400 == 0 || girilendeger % 4 == 0 && girilendeger % 100 != 0);