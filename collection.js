// ----------popup ads----------------

var popup=document.querySelector(".popup")
var close=document.getElementById("close_collect")

close.addEventListener("click",function(){
    popup.style.display="none"
})

// ------------slide menu------------------
var menuslide=document.querySelector(".header_elements_menu")
var close=document.getElementById("close_menu")
var openmenu=document.getElementById("menubaricon")

openmenu.addEventListener("click",function(){
    menuslide.style.right="0%";
})

close.addEventListener("click",function(){
    menuslide.style.right="-50%"
})

// --------------search box---------------

var search =document.getElementById("searchbar")
var collection=document.querySelector(".collection_img")
var productlist=document.getElementsByClassName("collection_container")

search.addEventListener("keyup",function(){
    entervalue=event.target.value.toUpperCase()
    for(i=0;i<productlist.length;i=i+1){
        if(productlist[i].textContent.toUpperCase().indexOf(entervalue)<0){
            productlist[i].style.display="none"
        }
        else{
            productlist[i].style.display="block"
        }
    }
})


// ------------checkbox------------------

