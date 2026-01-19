// ================== SWIPER CATEGORIES ==================
var swiperCategories = new Swiper(".categories__container", {
    spaceBetween: 24,
    loop:true,
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
        slidesPerView: 2,
        spaceBetween: 20,
        },
        768: {
        slidesPerView: 4,
        spaceBetween: 40,
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
        640: {
        slidesPerView: 2,
        spaceBetween: 20,
        },
        768: {
        slidesPerView: 4,
        spaceBetween: 40,
        },
        1400: {
        slidesPerView: 4,
        spaceBetween: 24,
        },
    },
    });

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

