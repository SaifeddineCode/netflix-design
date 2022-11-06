let lis= document.querySelectorAll(".questions ul li")



lis.forEach(e=>{
    e.addEventListener("click",()=>{
        e.classList.toggle("active")
    })
})


let presentation = document.querySelector(".second .presentation")
let infos = document.querySelector(".second .infos")
let theRoof = document.querySelector("section .second")

window.onscroll = function(){
    if(window.scrollY >= theRoof.offsetTop - 200 ){
        presentation.style.left ="0px";
        infos.style.right ="0px";
    }
}

