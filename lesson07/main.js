let timer = setInterval(saat, 1000);
let s = 1
let deg = -90
function saat() {
    let t = s
    let h = Math.floor(t / 3600)
    t = t % 3600;
    let m = Math.floor(t / 60)
    t = t % 60 
    if (h < 10) {
        h = `0${h}`
    }
    if (m < 10) {
        m = `0${m}`
    }
    if (t < 10) {
        t = `0${t}`
    }
    s++;
    let ss = deg + +t * 6
    let ss2 = deg + +m * 6
    let ss3 = deg + +h * 6
    document.querySelector('.h3').style.transform=`rotate(${ss}deg)`
    document.querySelector('.h2').style.transform=`rotate(${ss2}deg)`
    document.querySelector('.h1').style.transform=`rotate(${ss3}deg)`
    document.querySelector('.timer').textContent = `${h}:${m}:${t}`;
    if ((s - 1) % 3 === 0) slider()
}

let slides = document.querySelectorAll('.slider')
let a = 0;
function slider() {
    slides[0].style.marginLeft = a * 100 + '%';
    if (Math.abs(a) +1 === slides.length) a = 0 
    else a--;
}