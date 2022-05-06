
const url = "https://api.openweathermap.org/data/2.5/weather?&lang=tr&q=";
const key = "4382fe876b8b8c686710424a0c5ca6ff";
const getbutton = document.getElementById("searchbutton");
const getinputval = document.getElementById("serachBar");
getbutton.addEventListener('click', () => {
    getdata(searchBar.value);
});
searchBar.addEventListener('keypress', (e) => {
    if (e.keyCode == "13") getdata(searchBar.value);

});
function getdata(city) {
    console.log("tıklandı");
    axios(url + city + "&appid=" + key + "&units=metric").then(response => display(response.data)).then(() => searchBar.value = "").catch(hata => { searchBar.value = ""; alert("Lütfen doğru giriş yapınız."); });
    /*  axios({
         method: "GET",
         url: url + city + "&appid=" + key,
     }).then(response => console.log(response.data.name)).catch(hata => console.log(hata)); */
}
function display(result) {
    console.log(result);
    let city = document.querySelector(".city");
    city.innerText = `${result.name},${result.sys.country}`;

    let temp = document.querySelector(".temp");
    temp.innerText = `${Math.round(result.main.temp)}  °C`;

    let desc = document.querySelector(".desc");
    desc.innerText = `${(result.weather[0].description).toUpperCase()}`;

    let minmax = document.querySelector(".minmax");
    minmax.innerText = `${result.main.temp_min} °C / ${result.main.temp_max} °C`;
};
function changebg() {
    const images = [
        "url('background/bg_1.jpeg')",
        "url('background/bg_2.jpeg')",
        "url('background/bg_3.jpeg')",
        "url('background/bg_4.jpeg')",
        "url('background/bg_5.jpg')",
        "url('background/bgjpg_1.jpg')",
    ];
    const body = document.querySelector("body");
    const bg = images[Math.floor(Math.random() * images.length)];
    console.log(Math.floor(Math.random() * images.length));
    body.style.backgroundImage = bg;
}
setInterval(changebg, 3000);
