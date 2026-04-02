let h1 = document.querySelector("h1")
let btn = document.querySelector("#change")
let main = document.querySelector(".main")
let media = window.matchMedia("(prefers-color-scheme: dark)")
let reset = document.querySelector("#reset")
let currentTheme = media.matches ? "dark" : "light"


  
function theme(){
    if (currentTheme === "dark") {
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
    } else {
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
    }
    
}

theme()

media.addEventListener("change", (e) => {
        currentTheme = e.matches ? "dark" : "light"

theme()
}
)



function btnn(){
    currentTheme = currentTheme === "dark" ? "light" : "dark"

if (currentTheme === "dark"){
    
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

reset.addEventListener("click",()=>
{
    location.reload()
})







