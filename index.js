var scroll = new SmoothScroll('a[href*="#"]');

var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none"
})

var typed = new Typed(".name",{
    strings: ["Timothy Doan."],
    typeSpeed: 110,
    backSpeed: 70,
    loop:true,
})