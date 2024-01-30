function f1 () {
    alert('Yes')
}
// f1() // argumenti jok function

function f2(x) {
    alert(x)
}
// f2('Salam') // argumenttuu function

function f3 (x,y,z) {
    alert(x+y+z)
}
// f3(1,2,5) // kop arguentuu function

function f4(x) {
    if (document.querySelector('.block.active')) {
        document.querySelector('.block.active').classList.remove('active')
    }
    x.classList.add('active')
}

let a = -1
let b = -1

function f5(x,y) {
    if (a > -1 && b > -1) {
        document.getElementById(`min-block_${a}_${b}`).classList.remove('active')
    }
    a = x 
    b = y
    document.getElementById(`min-block_${x}_${y}`).classList.add('active')
    f6()
}

function f6() {
    alert('f6')
    function f7() {
        alert('f7')
    }
    f7()
}

let g = 0;
function f8() {
    g+=1
    console.log(g)
    if (g < 10) {
        return f8() // rekursia
    }
}
f8()

let f = 5
function f9(x) {
    if (x == 1) return x 
    return x * f9(x-1)
}
console.log(f9(f))