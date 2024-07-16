var a = document.getElementById('an1').innerHTML;
var b = document.getElementById('an2').innerHTML;
var c = document.getElementById('an3').innerHTML;
function togglePopup() { 
  const overlay = document.getElementById('popupOverlay'); 
  overlay.classList.toggle('show'); 
} 
function SwitchImg1(){
  document.getElementById('switcher').src= "../FlyeAssign1/assets/cat.jpg";

}
function SwitchImg2(){
  document.getElementById('switcher').src= "../FlyeAssign1/assets/flower.jpg";

}
function SwitchImg3(){
  document.getElementById('switcher').src= "../FlyeAssign1/assets/image.png";

}
function hover(description) {
      
      document.getElementById(description).innerHTML = document.getElementById('b5').innerHTML;
    }
function Dhover(){
  if(document.getElementById('an1').innerHTML != a){
    document.getElementById('an1').innerHTML = a;
  }
  else if( b != document.getElementById('an2').innerHTML){
    document.getElementById('an2').innerHTML = b;
  }
  else{
    document.getElementById('an3').innerHTML = c;
  }
}
const sliders = document.querySelectorAll(".slider");
  const interval = 2800;
  const animDuration = 600;
  for (let i = 0; i < sliders.length; ++i) {
    const slider = sliders[i];
    const dots = slider.querySelector(".dots");
    const sliderImgs = slider.querySelectorAll(".img");
    let currImg = 0;
    let prevImg = sliderImgs.length - 1;
    let intrvl;
    let timeout;
    for (let i = 0; i < sliderImgs.length; ++i) {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      dots.appendChild(dot);
      dot.addEventListener("click", dotClick.bind(null, i), false);
    }
    const allDots = dots.querySelectorAll(".dot");
    allDots[0].classList.add("active-dot");
    sliderImgs[0].style.left = "0";
    timeout = setTimeout(() => {
      animateSlider();
      sliderImgs[0].style.left = "";
      intrvl = setInterval(animateSlider, interval);
    }, interval - animDuration);   
    function animateSlider(nextImg, right) {
      if (!nextImg)
        nextImg = currImg + 1 < sliderImgs.length ? currImg + 2 : 1;

      --nextImg;
      sliderImgs[prevImg].style.animationName = "";

      if (!right) {
        sliderImgs[nextImg].style.animationName = "leftNext";
        sliderImgs[currImg].style.animationName = "leftCurr";
      } 
      else {
        sliderImgs[nextImg].style.animationName = "rightNext";
        sliderImgs[currImg].style.animationName = "rightCurr";
      }

      prevImg = currImg;
      currImg = nextImg;

      currDot = allDots[currImg];
      currDot.classList.add("active-dot");
      prevDot = allDots[prevImg];
      prevDot.classList.remove("active-dot");
    }
    function dotClick(num) {
      if (num == currImg)
        return false;

      clearTimeout(timeout);
      clearInterval(intrvl);

      if (num > currImg)
        animateSlider(num + 1);
      else
        animateSlider(num + 1, true);

      intrvl = setInterval(animateSlider, interval);
    }
  }
  
