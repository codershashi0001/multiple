let h1= document.querySelector("h1")
let inner = document.querySelector("#inner")
let num = document.querySelector("span")
let button = document.querySelector (".download")


button.addEventListener("click", () => {
    // for(let i=0; i<=100; i++){
    //     inner.style.width = `${i}%`
    //     }

        let c = 0
        let interval = setInterval(()=>{
            if (c<100){
            c++;
            console.log(c)
        num.textContent = c
                inner.style.width = `${c}%`
     if(c === 100)
{
    // clearInterval
      clearInterval(interval)
    h1.textContent = "downloaded"
}
            }
        }, 100);

})


// button.addEventListener("click",setInterval(()=>{
//     c++
//     if(c++ === 100)
// {
//     clearInterval
//     h1.textContent = "downloaded"
// }
// }

// ))

// button.addEventListener("click", setInterval(() => {
//    num.textContent = i
// }))

