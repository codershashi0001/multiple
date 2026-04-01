let square = document.querySelector(".square")

    window.addEventListener ("mousemove",(dets)=>{
// square.style.backgroundColor = "yellow"
// console.log(dets.clientX, dets.clientY)
let x = dets.clientX - 70
let y = dets.clientY - 70
square.style.top = y + "px" 
square.style.left = x + "px" 
    })