var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
    if(prevScrollpos > currentScrollPos){
        document.getElementById("navbar").style.top = "0";
    }else{
        document.getElementById("navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}
document.getElementById("LightTheme").addEventListener("click", function(){
    document.body.classList.remove("dark--theme");
});
document.getElementById("DarkTheme").addEventListener("click", function(){
    document.body.classList.add("dark--theme");
});