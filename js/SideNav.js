/*******************************************************/
/*Navigator*/
/*******************************************************/
document.getElementById("tab").addEventListener("click", openNav);
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
     document.body.style.backgroundColor = "white";
}
document.getElementById("closetab").addEventListener("click", closeNav);
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
   
}
