var menuslidec=document.querySelector(".header_elements_menu")
var closec=document.getElementById("close_menu_con")
var openmenuc=document.getElementById("menubaricon_con")

openmenuc.addEventListener("click",function(){
    menuslidec.style.right="0%";
})

closec.addEventListener("click",function(){
    menuslidec.style.right="-50%"
})