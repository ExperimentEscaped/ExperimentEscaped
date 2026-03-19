
document.addEventListener("DOMContentLoaded", function() {
const circle1 = document.getElementById('circle1');
const circle2 = document.getElementById('circle2');
const circle3 = document.getElementById('circle3');
const circle4 = document.getElementById('circle4');
class Notes {
  constructor(time, key) {
    this.time = time;
    this.key = key;
  }
}

window.addEventListener('keydown', (e) => {

  switch (e.key) {
    case "d":
        circle1.classList.add('light');
        break;
    case "f":
        circle2.classList.add('light');
        break;
    case "j":
        circle3.classList.add('light');
            break;
    case "k":
      circle4.classList.add('light');
            break;
    default:
      // Ignore other keys
      break;
  }
})
window.addEventListener('keyup', (e) => {

  switch (e.key) {
    case "d":
        circle1.classList.remove('light');
        break;
    case "f":
        circle2.classList.remove('light');
        break;
    case "j":
        circle3.classList.remove('light');
        break;
    case "k":
      circle4.classList.remove('light');
      break;
    default:
      // Ignore other keys
      break;
  }
})

});