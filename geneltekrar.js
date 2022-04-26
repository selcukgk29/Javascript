/* let sayi1, sayi2, sayi3, ort;
sayi1 = parseInt(prompt("Sayi1"));
sayi2 = parseInt(prompt("Sayi2"));
sayi3 = parseInt(prompt("Sayi3"));

ort = (sayi1 + sayi2 + sayi3)/3;


console.log(ort);
 */

let vize, final, sonuc;

vize = parseInt(prompt("Vize notunuz"));
final = parseInt(prompt("Final notu"));
sonuc = 0.4 * vize + 0.6 * final;
console.log(sonuc);

sonuc >= 50 ? console.log("geçtiniz") : console.log("kaldınız");