
const buttons = document.querySelectorAll(".drum");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const triger = this.innerHTML;
    playSound(triger);
    buttonAnimation(triger);
  });
});

document.addEventListener("keydown", function (e) {
  playSound(e.key);
  buttonAnimation(e.key);
});

function playSound(key) {
  switch (key) {
    case "w":
      const crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      const kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "s":
      const snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      const tom1 = new Audio("sounds/tom1.mp3");
      tom1.play();
      break;
    case "j":
      const tom2 = new Audio("sounds/tom2.mp3");
      tom2.play();
      break;
    case "k":
      const tom3 = new Audio("sounds/tom3.mp3");
      tom3.play();
      break;
    case "l":
      const tom4 = new Audio("sounds/tom4.mp3");
      tom4.play();
      break;
    default:
      break;
  }
}

function buttonAnimation(currentKey) {
    const activeKey = document.querySelector('.'+ currentKey);

    activeKey.classList.add('pressed');
    setTimeout(function(){
        activeKey.classList.remove('pressed')
    }, 100)
}
