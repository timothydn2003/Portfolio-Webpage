var scroll = new SmoothScroll('a[href*="#"]');

var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    this.setTimeout(10000)
    loader.style.display = "none"
})

