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
    document.querySelector('.timer').textContent = `${h}:${m}:${t}`;
    if (+t === 1000) {
        f1()
        alert('Ubakyt buttu!!!')
        clearInterval(timer)
    }
    
}

function f1 () {
    document.querySelector('h1').classList.add('remove')
}

let text = document.querySelector('.text')
let text2 = document.querySelector('.text2')
let text3 = document.querySelector('.text3')

window.onkeydown = (e) => {
    e = e.key 
    let audio = new Audio(`./audio/sound${e}.mp3`);
    audio.play()
    text.textContent += e
}

window.onkeyup = (e) => {
    text2.textContent += e.key
}

window.onkeypress = (e) => {
    text3.textContent += e.key
}

let text4 = document.querySelector('h3').textContent.toLowerCase()
let back = document.querySelector('.back')
let o = ''
console.time()
for(let i = text4.length-1; i >-1; i--) {
    o += text4[i]
}
console.log(o === text4)
console.timeEnd()
back.textContent = [o == text4 ?'Yes':'No']

console.time()
o = 'Yes'
let n = Math.ceil(text4.length / 2)
for (let i = 0; i < text4.length; i++) {
    if (text4[i] != text4[i+n]) {
        o = 'No'
    }
}
console.log(o)
console.timeEnd()

console.time()
console.log(text4 === text4.split('').reverse().join(''))
console.timeEnd()   


let gmail = '@gmail.com'
let f = text4.search(gmail)
let r = -1
for(let i = f-1; i >-1; i--) {
    if (text4[i] === ' ') {
        r = i+1
        break
    }
}
if (f != -1) {
    if (r == -1) {
        let fr = document.querySelector('h3').textContent
        document.querySelector('h3').innerHTML =  '<span style="color:blue;">' + fr.substr(0,f+gmail.length) +'</span>' + fr.substr(f + gmail.length, fr.length)
    }else {
        let fr = document.querySelector('h3').textContent
        document.querySelector('h3').innerHTML = fr.substr(0,r) + '<span style="color:blue;">' + fr.substr(r,f+gmail.length - r) +'</span>' + fr.substr(f + gmail.length, fr.length)
    }
}