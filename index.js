// ----------popup ads----------------

var popup=document.querySelector(".popup")
var close=document.getElementById("close")

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

// -----------Img Slide---------------
var leftbtn=document.getElementById("left_btn_act")
var rightbtn=document.getElementById("right_btn_act")
var imageslide=document.querySelector(".image_slide")
var marginslide=0
var img=document.querySelector(".img_main")


rightbtn.addEventListener("click",function(){
    marginslide=marginslide+100
    if(marginslide>200){
        marginslide=0
        imageslide.style.marginLeft="-"+marginslide+"vw";
        imageslide.style.gap="40px";

    }
    else{
        imageslide.style.marginLeft="-"+marginslide+"vw";
    }
})
leftbtn.addEventListener("click",function(){
    if(marginslide==0){
        marginslide=marginslide+200
        imageslide.style.marginLeft="-"+marginslide+"vw";
        
    }
    else{
        marginslide=marginslide-100
        imageslide.style.marginLeft="-"+marginslide+"vw";
        imageslide.style.gap="40px";
        
        
    }
})