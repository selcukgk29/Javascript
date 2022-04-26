const sayilar = [1, 3, 2, 3];
/*
const sonuc=sayilar.reduce(function (toplam, curr, index) {
    return toplam = toplam + curr
}, 0);
console.log(sonuc) */


//reduce ile map yapımı
//************************** */
/* const sonuc = sayilar.reduce(function (dizininoncekidurum, crr, index) {
    dizininoncekidurum.push(crr * 2);
    return dizininoncekidurum;
}, []);

console.log(sonuc); */


//***************************// */

//reduce ile filter

/* const yenidiz = sayilar.filter(function (sayi, index) {
    return sayi > 2;
})
console.log(yenidiz);
 */

/* const yenidizi = sayilar.reduce(function (pre, crr, index) {
    if (crr > 2) {
        pre.push(crr);
    }
    return pre;
}, []);
console.log(yenidizi); */

//********************************************** *

/* const sa = sayilar.find(function (value, index) {
    return value == 2;
});
console.log(sa); */
/****************************************** */

const asd = sayilar.reduce(function (pre, crr, index) {
    if (crr == 2) pre.push(crr);
    return pre;
}, []);
console.log(asd);