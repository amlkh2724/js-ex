const restartGame = document.querySelector(".display");
const letterGussed = document.querySelector(".letter");
const correctOrWrong = document.querySelector(".message");
const input = document.querySelector(".mess");
let char = [];
let playing = true;

function randomLetter() {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let randomletterr = alphabet[Math.floor(Math.random() * alphabet.length)];
  return randomletterr;
}

let randomChar = randomLetter();

window.addEventListener("keydown", function(e) {
  if (e.key !== randomChar) {
    if (playing) {
      correctOrWrong.innerHTML = "Nope, Wrong letter";
      correctOrWrong.style.color = "red";
      char.push(e.key);
      input.innerHTML= char
    }
  } else {
    correctOrWrong.innerHTML = `Right letter : ${randomChar}`;
    correctOrWrong.style.color = "green";
    restartGame.classList.toggle("display")
    
    playing = false;
  }
});
function resetGame(){
    restartGame.classList.toggle("display")
    correctOrWrong.innerHTML=""
    char=[]
    input.innerHTML=""
    randomChar = randomLetter();   // reset input
    playing=true


}


