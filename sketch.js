let result = "";

function preload() {
  Caprasimo = loadFont("Caprasimo-Regular.ttf");
}

function setup() {
  let inp = createInput("");
  inp.position(125, 200);
  inp.size(340);
  inp.input(myInputEvent);
}

function draw() {
  createCanvas(600, 400);
  background(128, 0, 128);
  fill(225, 225, 225);
  textSize(30);
  textFont(Caprasimo);
  text("PALINDROME CHECKER", 110, 150);
  textSize(12);
  text("Enter a phrase to check if it is a palindrome.", 165, 180);
  textSize(20);
  if (result == "It is a palindrome!") {
    text(result, 215, 250);
  }
  if (result == "It is not a palindrome.") {
    text(result, 190, 250);
  }
}

function myInputEvent() {
  palindrome(this.value());
}

function palindrome(text1) {
  text1 = text1.toLowerCase().replaceAll(/[^a-z0-9]/g, "");
  let text2 = "";
  for (i = 1; i <= text1.length; i++) {
    text2 += text1[text1.length - i];
  }
  if (text1 == text2) {
    result = "It is a palindrome!";
  } else {
    result = "It is not a palindrome.";
  }
  if (text2 == "") {
    result = "";
  }
}
