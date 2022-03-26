var scroll = new SmoothScroll('a[href*="#"]');

var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none"
})
setTimeout(loader, 5000);
