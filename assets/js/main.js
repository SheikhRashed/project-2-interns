function mobileMenu() {
    console.log('clicked');
    const mobileMenu = document.querySelector(".header__nav-menu");
    if(mobileMenu.style.display === "block"){
        mobileMenu.style.display = "none";
    }else{
        mobileMenu.style.display = "block";
    }
}