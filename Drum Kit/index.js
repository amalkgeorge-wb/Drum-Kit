//detecting button press

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    changeAnimation(buttonInnerHTML);


  })
}
//detecting key press
document.addEventListener("keydown",function(event){
makeSound(event.key);
changeAnimation(event.key);

})


//making sound for the events
function makeSound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var tom1 = new Audio("sounds/crash.mp3");
      tom1.play();
      break;
    case "k":
      var tom1 = new Audio("sounds/kick-bass.mp3");
      tom1.play();
      break;
    case "l":
      var tom1 = new Audio("sounds/snare.mp3");
      tom1.play();
      break;
    default:
      console.log(buttonInnerHtml);

  }
}

//animation upon keypress

function changeAnimation(currentKey){
  var keyForAnimation=document.querySelector("."+currentKey);
  keyForAnimation.classList.add("pressed");
  setTimeout(function(){
    keyForAnimation.classList.remove("pressed");
  }, 100);
}
