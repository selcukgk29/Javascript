let number = parseInt(prompt("sayi giriniz"));
let asalsayimi = true;

if (number === 1) console.log("Bu bir asal sayidir");
else if (number > 1)
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            asalsayimi = false;
        }
    }
if (asalsayimi) console.log("Bu bir asal sayidir");
else console.log("Bu bir asal sayi değildir");
