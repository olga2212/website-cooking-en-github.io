// $("body").css("paddingTop", $("#deskTopNav").innerHeight());

$(function () {
  $("#deskTopNav a").click(function (e) {
    "use strict";
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $("#" + $(this).data("scroll")).offset().top + 1,
      },
      1000
    );
  });

  // Add Active Class on Navbar Link and Remove from the Siblings(if any exist!)

  $("#deskTopNav a").click(function () {
    // $(".navbar a").removeClass("active");
    // $(this).addClass("active");

    $(this)
      .addClass("active")
      .parent()
      .siblings()
      .find("a")
      .removeClass("active");
  });

  // Sync Navbar Links With Sections

  $(window).scroll(function () {
    $(".block").each(function () {
      if ($(window).scrollTop() >= $(this).offset().top) {
        var blockId = $(this).attr("id");
        $("#deskTopNav a").removeClass("active");
        $('#deskTopNav a[data-scroll="' + blockId + '"]').addClass("active");
      }
    });

    
  });
  
});








// =================Stop-Playing-Video-When-it-Out-of-View-port=====>
let options = {
    root: null,
    rootMargin: '0px',
    threshold:1.0
};
let callback = (entries, observer)=>{
    entries.forEach(entry => {
    if(entry.isIntersecting){
        entry.target.play();
    }
    else{
        entry.target.pause();
    }
    });
}
let observer = new IntersectionObserver(callback, options);
const videos = document.querySelectorAll("#video-bg");
videos.forEach(video => {
    observer.observe(video);
});


// ================Slide-Video-BG===================================>
const btns =document.querySelectorAll(".slide-btn");
const slider =document.querySelectorAll(".video-bg");

let slideVideo = function(index) {
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });
    slider.forEach((slide) => {
        slide.classList.remove("active");
    });
    btns[index].classList.add("active");
    slider[index].classList.add("active");
}
    btns.forEach((btn,i) => {
    btn.addEventListener("click", () => {
        slideVideo(i);
    });
});

// ==================Navbar-Open/Close-Icons-Toggle============>
const openNavIcon = document.querySelector(".openNav");
const closeNavIcon = document.querySelector(".closeNav");
const navbarBtn = document.querySelector(".navbar-toggler");

navbarBtn.addEventListener("click", () => {
	openNavIcon.classList.toggle("passiveNavBtn");
	closeNavIcon.classList.toggle("activeNavBtn");
});

// ==================Go-Up-Button===========================================>
function scrollDetect(){
    const changeHeaderBg= document.querySelector("#deskTopHeader")
    const goUpBtn = document.querySelector(".go_up_btn");
    let lastScroll = 0;
    window.onscroll = function() {
        let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value

        if (currentScroll > 0 && lastScroll <= currentScroll){
            lastScroll = currentScroll;
            changeHeaderBg.classList.add("headerActiveScroll");
            goUpBtn.classList.add("activeGoUpBtn");
        }else{
            lastScroll = currentScroll;
            changeHeaderBg.classList.remove("headerActiveScroll");
            goUpBtn.classList.remove("activeGoUpBtn");
        }
    };
}
scrollDetect();
// =========================================================================<
// =======================Change-Arrow's-Up-Color-When-Mouse-is-Hovered=====>
const arrowUp = document.querySelector(".arrowUp");
const myArrow = document.querySelector(".myArrow");
arrowUp.addEventListener("mouseover", () => {
    myArrow.classList.add("arrowColorActive");
});
arrowUp.addEventListener("mouseout", () => {
    myArrow.classList.remove("arrowColorActive");
});

