AOS.init();
// $(document).ready(function(){
//     $(window).scroll(function(){
//         if(this.scrollY > 20){
//             $(`.navBar`).addClass("sticky");
//         }else{
//             $(`.navBar`).removeClass("sticky");
//         }
//     });
    
    //toggle menu btn
//     $(`.menu-btn`).click(function(){
//         $(`.navBar .menu`).toggleClass("active");
//         $(`.menu-btn i`).toggleClass("active");
//     });
    

// });

//dark theme and light theme

var icon = document.querySelector("#icon");
icon.onclick = function(){
    document.body.classList.toggle("light-theme");
    if (document.body.classList.contains("light-theme")){
        icon.src = "assets/moon.png";
    }else{
        icon.src = "assets/sun.png";
    }
}

// typing animation script
var typed = new Typed(".typing",{
    strings: ["Frontend Developer","Designer", "Editor"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})

 //owl carousel
 $(`.carousel`).owlCarousel({
    margin:20,
    loop: true,
    autoplayTimeout:2000,
    autoPlayHoverPause: true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false
        }
    }
});
