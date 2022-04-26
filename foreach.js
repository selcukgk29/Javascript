let sayilar = [1, 23, 423, 12, 2];

sayilar.forEach((sayilar, index) => {
    console.log(sayilar * 2, index);
})


/* kendiforeach(sayilar, function (deger, index) {
    console.log(deger, index);
});

function kendiforeach(dizi, callback) {
    for (let i = 0; i < dizi.length; i++) {
        callback(dizi[i], i);
    }
}
 */