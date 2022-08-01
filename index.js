let checkAnswerExecuted = false;
let position = 1;
let position2 = 20;
function moveCar1() {
  if (checkAnswerExecuted == false) {
    let speed = Math.random() * 10;
    speed = (Math.floor(speed) % 3) + 1;
    document.getElementById(position).src =
      "https://kyimages.kyinbridges.com/why-was-the-wood-from-sequoias-not-used-in-construction-.jpg";
    position = position + speed;
  } else {
    alert("It's The Other Players Turn!");
  }
  if (position > 9) {
    location.href = "win.html";
  }
  document.getElementById(position).src =
    "https://static.vecteezy.com/system/resources/previews/001/193/929/large_2x/vintage-car-png.png";
  checkAnswerExecuted = true;
}
function moveCar2() {
  if (checkAnswerExecuted == true) {
    let speed2 = Math.random() * 10;
    speed2 = (Math.floor(speed2) % 3) + 1;
    document.getElementById(position2).src =
      "https://kyimages.kyinbridges.com/why-was-the-wood-from-sequoias-not-used-in-construction-.jpg";
    position2 = position2 + speed2;
  } else {
    alert("It's The Other Players Turn!");
  }
  if (position2 > 28) {
    location.href = "win2.html";
  }
  document.getElementById(position2).src =
    "https://static.vecteezy.com/system/resources/previews/001/193/929/large_2x/vintage-car-png.png";
  checkAnswerExecuted = false;
}
