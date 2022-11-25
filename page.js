function openNav(){
    document.getElementById("mySidenav")
    .style.width="250px";
}

function closeNav(){
document.getElementById("mySidenav")
.style.width ="0"
}
// picture side section

const slides= document.getElementsByClassName("farmers_picture");
let slidePosition=0;
let totalSlide = slides.length;

document.getElementById("prev-button").addEventListener('click', moveToPrev);
document.getElementById("next-button").addEventListener('click', moveToNext);

function hideAllCarousel(){
    for(let slide of slides){
        slide.classList.remove("picture_visible");
       slide.classList.add("picture_hidden");
    }

}

function moveToPrev(){
    hideAllCarousel()
    if(slidePosition===0){
        slidePosition= totalSlide-1;
    }else{ 
        slidePosition--;
    }
    slides[slidePosition].classList.add("picture_visible");
};

function moveToNext(){
    hideAllCarousel();
    if(slidePosition=== totalSlide-1){
        slidePosition = 0;
    }else{
        slidePosition++;
    }
    slides[slidePosition].classList.add("picture_visible");
    
};


/* moblie navigation
Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function toggleMobileMenu(menu){
    menu.classList.toggle('open');
}

function myFunction() {
    var x = document.getElementById("navlinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  // read more

  function readMore3(){
    var dot3 = document.getElementById("dots_story3");
    var moreText3 = document.getElementById("story3_cont")
    var btnText3 = document.getElementById("story3_btn")

    if (dot3.style.display==="none"){
        dot3.style.display="inline";
        btnText3.innerHTML="Read more"
        moreText3.style.display="none";
    } else{
        dot3.style.display="none";
        btnText3.innerHTML="Read less"
        moreText3.style.display="inline";
    }
  }

  function readMore2(){
    var dot2 = document.getElementById("dots_story2");
    var moreText2 = document.getElementById("story2_cont")
    var btnText2 = document.getElementById("story2_btn")

    if (dot2.style.display==="none"){
        dot2.style.display="inline";
        btnText2.innerHTML="Read more"
        moreText2.style.display="none";
    } else{
        dot2.style.display="none";
        btnText2.innerHTML="Read less"
        moreText2.style.display="inline";
    }
  }
  function readMore1(){
    var dot1 = document.getElementById("dots_story1");
    var moreText1 = document.getElementById("story1_cont")
    var btnText1 = document.getElementById("story1_btn")

    if (dot1.style.display==="none"){
        dot1.style.display="inline";
        btnText1.innerHTML="Read more"
        moreText1.style.display="none";
    } else{
        dot1.style.display="none";
        btnText1.innerHTML="Read less"
        moreText1.style.display="inline";
    }
  }

  //select option
  const select = document.querySelector("select")
  select.onchange = () =>{
    if (select.selectedIndex !==0){
        window.location.href = select.value;
    }
  };

  // scroll up button:
let scrollUpBtn = document.getElementById("scroll_up_btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollUpFunction()};

function scrollUpFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// end of scroll up button: