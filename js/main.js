// ================== SHOW MENU ==================
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')
// ================== Menu Show ===========
// validate if constant exists
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

// ================== Hide Show ===========
// validate if constant exists
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

// ================== SWIPER CATEGORIES ==================
var swiperCategories = new Swiper(".categories__container", {
    spaceBetween: 24,
    loop:true,
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        350: {
        slidesPerView: 2,
        spaceBetween: 24,
        },
        768: {
        slidesPerView: 3,
        spaceBetween: 24,
        },
        992: {
        slidesPerView: 4,
        spaceBetween: 24,
        },
        1200: {
        slidesPerView: 5,
        spaceBetween: 24,
        },
        1400: {
        slidesPerView: 6,
        spaceBetween: 24,
        },
    },
    });
// ================== SWIPER PRODUCTS ==================
var swiperProducts = new Swiper(".new__container", {
    spaceBetween: 24,
    loop:true,
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: {
        slidesPerView: 2,
        spaceBetween: 24,
        },
        992: {
        slidesPerView: 3,
        spaceBetween: 24,
        },
        1400: {
        slidesPerView: 4,
        spaceBetween: 24,
        },
    },
    });

// ================== IMG GALLERY ==================
function imgGallery(){
    const mainImg = document.querySelector('.details__img'),
        smallImg = document.querySelectorAll('.details__small-img')
    smallImg.forEach((img)=>{
        img.addEventListener('click', function(){
            mainImg.src= this.src
        })
    })
}
imgGallery()
// ================== PRODUCTS ==================
const tabs= document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[content]')

//tabs have 2 loops => *loop 1 ? onclick, *loop 2 ? to remove active-tab class 

tabs.forEach((tab)=>{
    tab.addEventListener('click',()=>{
        //remove active from all tab__btns
        tabs.forEach((tab)=>{
            tab.classList.remove('active-tab') 
        })
        //remove all active tabs from ? tab__item
        tabContents.forEach((tabContent)=>{
            tabContent.classList.remove('active-tab') 
        })
        //have the tabBtn i have been clicked , tab__btn
        const target = document.querySelector(tab.dataset.target); 
        //add active class on tab i clicked, tab__item
        target.classList.add('active-tab') 
        //add active  to ? tab__btn
        tab.classList.add('active-tab') 
    })
})

