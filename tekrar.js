let person = {
    ad: "emre",
    yas: 34,
    evlimi: false,
};

console.log(person.ad);
console.log(typeof person);


let renkler = ["kırmızı"];
console.log(typeof renkler[0]);
console.log(renkler instanceof Array);
console.log(renkler instanceof Object);

function yaz() {
    console.log("Merhaba selçuk");
}

//Veri tipinde fonksiyon tanımlarken sıralı giderken normal fonksiyonlarda istediğin yerde çalışabiliyor
//Ayrıca js de bir fonksiyon hem obje hemde değişken olabiliyor ve bu değişken farklı fonksiyonun parametreside olabilir

let fonksiyon = function () { console.log("merhaba dünya") };
fonksiyon();

//Bir dizi oluştur oluşturduğun dizinin tüm elemanlarını 2 ile çarp

let dizi = [1, 2, 3, 4, 5];
const dizielemanlarıcarp = function (dizi) {
    let gecici = [];
    for (let i = 0; i < dizi.length; i++) {

        gecici[i] = dizi[i] * 2;
    }
    return gecici;

}
console.log(dizielemanlarıcarp(dizi));

