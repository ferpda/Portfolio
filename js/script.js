$(document).ready(function() {
    $(function(){
        $("#header").load("./header.html")
        $("#footer").load("./footer.html")
        $("#footer-resume").load("./footer-resume.html")
        $("#header-ctn-pg").load("./header-ctn-pg.html")
    });
});

function slideRight(){
    var reveals = document.querySelectorAll(".slide-right");
    for(var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if(elementTop < windowHeight - elementVisible){
            reveals[i].classList.add("active");
        }else{
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", slideRight);

function slideLeft(){
    var reveals = document.querySelectorAll(".slide-left");
    for(var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if(elementTop < windowHeight - elementVisible){
            reveals[i].classList.add("active");
        }else{
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", slideLeft);