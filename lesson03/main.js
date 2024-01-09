let button = document.querySelector("button")
document.querySelector(".code").innerHTML = Math.floor(Math.random() * 8999 + 1000)
button.onclick = () => {
    // let a = +document.querySelector(".inp1").value 
    // let b = +document.querySelector(".inp2").value
    // let c = +document.querySelector(".inp3").value
    // r = (a <= b ? 'Ооба':'Жок');
    // let r = (a >= b && a >= c ?'Ооба':'Жок')
    // let r = (a % 2 == 1 && b % 2 == 1 && c % 2 == 1? 'Ооба':'Жок')
    // let r = ((a < b && c >= b) || (c < b && a >= b) ? 'Ооба':'Жок');

    let d = +document.querySelector(".inp4").value
    let e = document.querySelector(".inp5").value
    if (e != '' && e.length > 5) {
        alert('OK')
    } else {
        alert('Wrong')
    }
    let f = 6;
    let f2 = 18;
    let f3 = 23;
    let r
    if (d <= f) {
        r = 'Кичинекей бала!'
    } else if (d <= f2) {
        r = 'Окуучу'
    }else if (d <= f3) {
        r = 'Студент'
    } else {
        r = 'Киши'
    }
    document.querySelector(".result").innerHTML = r
}