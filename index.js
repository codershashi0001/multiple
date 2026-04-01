let file = document.querySelector("#file")
let butto = document.querySelector("#butto")
// let main = document.querySelector(".main")

butto.addEventListener("click", () => {
    file.click ()
})

file.addEventListener("change",(dets)=>{
    const ff =dets.target.files[0]
    if(ff){
        butto.textContent = ff.name
    }
    
})



































