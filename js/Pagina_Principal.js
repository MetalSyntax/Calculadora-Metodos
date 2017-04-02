document.getElementById("opentab").addEventListener("click", openNav);
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
     document.body.style.backgroundColor = "rgba(230,230,230,0.80)";
}
document.getElementById("closetab").addEventListener("click", closeNav);
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "#e6e6e6";
   
}