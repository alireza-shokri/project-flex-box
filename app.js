let menu = document.querySelector(".menu__ul")
let menuBtn = document.querySelector(".menu__icon")
let menuBtnIcon = document.querySelector(".menu__icon i")

menuBtn.addEventListener("click",function (){
    if (menuBtnIcon.classList.contains("fa-bars")){
        menu.style.left = "-10px"
        menuBtnIcon.classList = "fa fa-times"
    } else {
        menu.style.left = "-220px"
        menuBtnIcon.classList = "fa fa-bars"
    }
})
