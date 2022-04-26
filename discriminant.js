
let a, b, c, kok1, kok2;
a = prompt("a sayisini giriniz:");
b = prompt("b sayisini giriniz:");
c = prompt("c sayisini giriniz:");

let disc = b * b - 4 * a * c;

if (disc > 0) {
    kok1 = (-b - Math.sqrt(disc)) / 2 * a;
    kok2 = (-b + Math.sqrt(disc)) / 2 * a;

    console.log(`Birinci kök= ${kok1} ikinci kök= ${kok2}`);
}

else if (disc == 0) {
    kok1 = kok2 = -b / 2 * a;
    console.log(`1.kök ve 2. kök= ${kok1}`);

}

else {

    let gercek = -b / 2 * a;
    let sanal = Math.sqrt(-disc) / 2 * a;
    console.log(`1.kök için değer ${gercek}+ i ${sanal.toFixed(2)}`);
    console.log(`2.kök için değer ${gercek}- i ${sanal.toFixed(2)}`);


}

console.log(disc);
