/* const kopyalaveikiilecarp = function (dizi) {
    let gecicidizi = [];
    for (let i = 0; i < dizi.length; i++) {
        gecicidizi[i] = dizi[i] * 2;
    }
    console.log(gecicidizi)
}

const kopyalaveikiiletopla = function (dizi) {
    let gecicidizi = [];
    for (let i = 0; i < dizi.length; i++) {
        gecicidizi[i] = dizi[i] + 2;
    }
    console.log(gecicidizi)
}
const kopyalaveikiilebol = function (dizi) {
    let gecicidizi = [];
    for (let i = 0; i < dizi.length; i++) {
        gecicidizi[i] = dizi[i] / 2;
    }
    console.log(gecicidizi)
} */

/* console.log(mydizi);
kopyalaveikiilecarp(mydizi); */

//*************************************************** */
//Higher order fonksiyonları işlem tekrarına düşmektekten kurtaryor
//Parammetre olarak fonksiyon alabilen fonksiyonlardır//

/*
let mydizi = [1, 2, 3];
//Firs class function
const ikicarp = function (sayi) {
    return sayi * 2;
}
const ikitopla = function (sayi) {
    return sayi + 2;
}
const ikibol = function (sayi) {
    return sayi / 2;
}
//Higher order func
const kopyalaveislem = function (dizi, islem) {
    let gecicidizi = [];
    for (let i = 0; i < dizi.length; i++) {
        gecicidizi[i] = islem(dizi[i]);
    }
    console.log(gecicidizi);
}
kopyalaveislem(mydizi, ikitopla);
*/



function adımısoyle(ad, soyad, callback) {
    const mesaj = "Ad : " + ad.toUpperCase() + "  " + soyad.toUpperCase();
    callback(mesaj);
}
adımısoyle("selcuk", "gok", mesajgoster);

function mesajgoster(mesaj) {
    console.log(mesaj);
}

