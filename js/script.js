const searchForm = document.querySelector(".search-form");
const cartItem = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");



//!BUTTONS*/
const searchBtn = document.querySelector("#search-btn");
const cartBtn = document.querySelector("#cart-btn");
const menüBtn = document.querySelector("#menü-btn");




searchBtn.addEventListener("click", function() {

searchForm.classList.toggle("active");
document.addEventListener("click",function(e){
    if(
        !e.composedPath().includes(searchBtn) & !e.composedPath().includes(searchForm)){
        searchForm.classList.remove("active");

    }
})
})

cartBtn.addEventListener("click", function() {

    cartItem.classList.toggle("active");
    document.addEventListener("click",function(e){
        if(
            !e.composedPath().includes(cartBtn) & !e.composedPath().includes(cartItem)){
                cartItem.classList.remove("active");
    
        }
    })
    })

    menüBtn.addEventListener("click", function() {

        navbar.classList.toggle("active");
        document.addEventListener("click",function(e){
            if(
                !e.composedPath().includes(menüBtn) & !e.composedPath().includes(navbar)){
                    navbar.classList.remove("active");
        
            }
        })
        })

