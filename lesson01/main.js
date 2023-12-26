let span = document.querySelector(".span1")
let span2 = document.querySelector(".span2")
let text_span = span.textContent // Тегтин ичинен тексти алып берет
let text_and_tag = span.innerHTML
let my_text = "<span style='color:red'>Hello Javascript</span>"
let comment = "<div style='width:100%; height:500px; background:black;color:green'>My comment</div>"
console.log(span)
console.log(text_span)
console.log(text_and_tag)
document.querySelector("p").textContent = my_text;
document.querySelector("h2").innerHTML = my_text;
document.querySelector("p").textContent = comment;
document.querySelector("h2").innerHTML = comment;
span.textContent += "My text"
span.textContent = "My First text" + span.textContent
//alert(span2.textContent)
let p2 = document.querySelector("div div p").textContent
//alert(p2)
let counts = 0
document.querySelector(".btn1").onclick = () => {
    let inp1 = document.querySelector(".inp1")// value input ичинен текст алып берет
    let inp1_value = inp1.value;
    inp1.value = "";
    let comments = document.querySelector(".comments")
    counts++;
    comments.innerHTML += `<h1 class="h1_${counts}"></h1>`;
    document.querySelector(`.h1_${counts}`).textContent += inp1_value;
    comments.innerHTML += "<hr>";
}