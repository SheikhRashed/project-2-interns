function mobileMenu() {
    console.log('clicked');
    const mobileMenu = document.querySelector(".header__nav-menu");
    if(mobileMenu.style.display === "block"){
        mobileMenu.style.display = "none";
    }else{
        mobileMenu.style.display = "block";
    }
}

//Swiper
var swiper = new Swiper(".mySwiper", {
    speed: 600,
    parallax: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});