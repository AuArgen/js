let timer = setInterval(saat, 1000);
let s = 1 // s - bul saitka kirgenden bashtap eseptelip jatkan sekunda
let deg = -90
function saat() {
    let t = s // t - bul sekundany kochurup alat maksaty saitka kirgendegi sekundany ozgortup jiberboo uchun t koldonulat.
    let h = Math.floor(t / 3600) // h - bul sekundadan saatka ailangandagy maanisi
    t = t % 3600; //bul jerde biz saat uchun ketken sekundady t dan alyp salabyz
    let m = Math.floor(t / 60) // bul jerde sekundany minutaga ailantabys sebebi bir munotto 60 sekunda bar
    t = t % 60 // minuta uchun korotulgan sekundany alyp saluu, kalgan sekunda al saatyn sekundasy katary alynat
    if (h < 10) {
        h = `0${h}` // bul eger bizdin saat 2 bolso koldonuuchuga 02 kylyp korsotu 
    }
    if (m < 10) {
        m = `0${m}`
    }
    if (t < 10) {
        t = `0${t}`
    }
    s++;
    let ss = deg + +t * 6 // bul jerde sekundanyn jebesi 360 gradusta ailanuusu uchun 6 ga koboitobuz, sebebi 60 * 6 = 360
    let ss2 = deg + +m * 6 
    let ss3 = deg + +h * 6
    document.querySelector('.h3').style.transform=`rotate(${ss}deg)`
    document.querySelector('.h2').style.transform=`rotate(${ss2}deg)`
    document.querySelector('.h1').style.transform=`rotate(${ss3}deg)`
    document.querySelector('.timer').textContent = `${h}:${m}:${t}`;
    if ((s - 1) % 3 === 0) slider() // bul jerde ar 3 sekunda saiyn slider almashat
}

let slides = document.querySelectorAll('.slider')
let a = 0;
function slider() {
    slides[0].style.marginLeft = a * 100 + '%';
    if (Math.abs(a) +1 === slides.length) a = 0 
    else a--;
}