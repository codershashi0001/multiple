let form = document.querySelector(".form")
let file = document.querySelector(".file")
let filename = document.querySelector(".filename")
let button = document.querySelector(".button")
let card = document.querySelector(".card")
let reset = document.querySelector(".reset")
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^(\+91)?[6-9]\d{9}$/;
let emailInput = document.querySelector("#email")
let emailvalue = emailInput.value
let phoneinput = document.querySelector("#number")
let phonevalue = phoneinput.value
let f ;
let inputs = document.querySelectorAll("input")
let h2 = document.querySelector("h2")
let phn = document.querySelector(".phn")
let  mail= document.querySelector(".mail")
let  profe= document.querySelector(".profe")
let about = document.querySelector(".about")
let text = document.querySelector("#textarea")


file.addEventListener("change",(dets)=>{
    filename.textContent = dets.target.files[0].name
    f = dets.target.files[0].name ;
})

button.addEventListener("click", ()=> {
    if (f === undefined){
        card.style.display = "none"
        
    }else {
    card.style.display = "block"
    
 }
})
form.addEventListener("change",()=>{
    h2.textContent = inputs[0].value;
    mail.textContent = inputs[1].value;
    phn.textContent = inputs[2].value;
    profe.textContent = inputs[3].value;
    about.textContent = text.value;
})

reset.addEventListener("click", ()=> {
// card.style.display = "none"
location.reload()
})

// if (emailRegex.test(emailValue)) {
//     alert("Valid Email");
// }

// if (phoneRegex.test(phoneValue)) {
//     alert("Valid Phone");
// }
