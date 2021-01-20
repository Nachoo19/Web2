let ubicacionPrincipal = window.pageYOffset;
let $hamburger = document.querySelector(".hamburger");
let $hamburgerI = document.querySelector(".hamburger").children[0];
console.log($hamburgerI)
//Alta libreria de animaciones https://michalsnik.github.io/aos/
AOS.init();


window.addEventListener("scroll", () => {
    let desplazamientoActual = window.pageYOffset;
    
    if(ubicacionPrincipal >= desplazamientoActual){
        let hola = document.querySelector(".miNav").style.top = "0px";
    }else{
        let bolas = document.querySelector(".miNav").style.top = "-100px";
    }
    ubicacionPrincipal = desplazamientoActual;

})

// Menu

let enlacesHeader = document.querySelectorAll(".enlaces__header")[0];
let menu = true; //Variable menu, para que al hacerle click cambie de color;

// document.querySelectorAll(".hamburger")[0].addEventListener("click", ()=> {
// enlacesHeader.classList.toggle("menu2");
// if(menu){
//     document.querySelectorAll(".hamburger")[0].style.color = "#fff";
//     menu = false;
// }else{
//     document.querySelectorAll(".hamburger")[0].style.color = "#000";
//     menu = true;
// }
// })
console.log(enlacesHeader.childNodes)
document.addEventListener("click", e => {
    // console.log(e.target)
    if(e.target === $hamburger || e.target === $hamburgerI){
        enlacesHeader.classList.toggle("menu2");
        if(menu){
            $hamburger.style.color = "#fff";
            menu = false;
        }else{
            $hamburger.style.color = "#000";
            menu = true;
}
    }
})