function mobileMenu(){
    var mobileMenu = document.querySelector("#mobile_menu");
    if(mobileMenu.style.display === "block"){
        mobileMenu.style.display = "none";
    }else{
        mobileMenu.style.display = "block";
    }
}