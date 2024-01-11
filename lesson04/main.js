let input = document.querySelector("input")
// input.onchange = ()=> {
//     let v = input.value
//     if (v.length < 8) {
//         document.querySelector(".error").style.display = "block"
//         document.querySelector(".True").style.display = "none"
//         input.style.border ="5px solid red";
//     }  else {
//         document.querySelector(".error").style.display = "none"
//         document.querySelector(".True").style.display = "block"
//         input.style.border ="5px solid green";
//     }
//     if (v.length > 12){
//         input.value = v.substr(0,12);
//     }
// }

input.oninput = ()=> {
    let v = input.value
    if (v.length < 8) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".True").style.display = "none"
        input.style.border ="5px solid red";
    }  else {
        document.querySelector(".error").style.display = "none"
        document.querySelector(".True").style.display = "block"
        input.style.border ="5px solid green";
    }
    if (v.length > 12){
        input.value = v.substr(0,12);
    }
}

let input2 = document.querySelector('.radio')

input2.onchange = () => {
    if (input2.checked) {
        document.querySelector(".result").innerHTML = "Yes"
    }else {
        document.querySelector(".result").innerHTML = "No"

    }
}

document.querySelector(".sendTest").onclick = () => {
    let r1 = document.querySelector("#radio1").checked
    let r2 = document.querySelector("#radio2").checked
    let r3 = document.querySelector("#radio3").checked
    let r4 = document.querySelector("#radio4").checked
    if (!r1 && !r2 && !r3 && !r4){
        alert("Test ishteniz!!!")
    }else if(r2) {
        alert("Yessss")
    }
    else {
        alert('No')
    }
}