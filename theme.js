let h1 = document.querySelector("h1")
let btn = document.querySelector("#change")
let main = document.querySelector(".main")
let isDark = window.matchMedia("(prefers-color-scheme: dark)")




function theme(){
    if (isDark.matches) {
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
    } else {
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
    }
    
}

theme()

isDark.addEventListener("change", (e) => {
theme()
}
)

let isLight = false

function btnn(){

     isLight = !isLight
    if (isLight){

        h1.textContent = "Changed in light"
        main.style.backgroundColor = "white"
        h1.style.color = "black"
    }
    else {
        h1.textContent = "Changed in dark"
       main.style.backgroundColor = "black"
       h1.style.color = "white"
      
    }
}

btn.addEventListener("click",()=>{
     btnn()

})






