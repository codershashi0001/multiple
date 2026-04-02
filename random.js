

let p = document.querySelector("p")
let btn = document.querySelector("#btn")
let ball = document.querySelector(".ball")
let main = document.querySelector(".main")

function balll(){
      let x = Math.random() * (window.innerWidth - 100)
let y = Math.random() * (window.innerHeight - 50)

  ball = document.createElement("div")
    ball.classList.add("ball")

    ball.style.left = x + "px"
    ball.style.top = y + "px"
ball.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`
// let hue = Math.random() * 15 + 40;     // 40–55 (gold range)
// let saturation = Math.random() * 10 + 12;  // 0–100%
// let lightness = Math.random() * 30 + 70; // 70–100%

// let color = `hsl(${lightness}, ${saturation}%, ${hue}%)`     

document.body.appendChild(ball)
     function time (){ setTimeout(() => {
    ball.remove()
}, 20)
     }
     time()
     time()
    
}

btn.addEventListener("click",()=>{

    let num = Math.floor(Math.random() * 1000) + 1
    p.textContent = num
   balll()
   balll()
   balll()


})

 


