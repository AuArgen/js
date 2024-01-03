document.querySelector(".btn").onclick = () => {
    let v = +document.querySelector("input").value
    // 1m = 60s
    //1saat = 60m
    //1saat = 60 * 60 = 3600
    //Math.floor(peremennyi) - tegerektep beret
    let s1 = Math.floor( v / 3600);
    v = v % 3600;
    let m =Math.floor( v / 60);
    v = v % 60;
    document.querySelector(".result").innerHTML = `${s1}:${m}:${v}`
}
const A = 'ABCDEFGHKLMQRSTUOPIXZY'
const a = 'abcdefghtjklmnbvcxzqweryop'
const s = '0123456789'
const c = '@/?><.,@#$%^&*((*&^%'
const AN = A.length;
const an = a.length;
const sn = s.length;
const cn = c.length;
let password = A[Math.floor(Math.random() * AN)] + A[Math.floor(Math.random() * AN)] 
password += a[Math.floor(Math.random() * an)] + a[Math.floor(Math.random() * an)] + a[Math.floor(Math.random() * an)]
password += s[Math.floor(Math.random() * sn)] +''+ s[Math.floor(Math.random() * sn)]
password += c[Math.floor(Math.random() * cn)] + c[Math.floor(Math.random() * cn)]
document.querySelector(".random b").textContent = password