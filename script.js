var wordChoiceList = ["orange", "door", "front", "zebra", "fungus"];
var index = Math.floor(Math.random() * wordChoiceList.length);
var wordChoice = wordChoiceList[index];
var wordChoiceArray = wordChoice.split("");
var hiddenArray = [];
var wins = 0;
var losses = 0;

for (i = 0; i <= wordChoice.length - 1; i++) {
  hiddenArray[i] = `_ `;
}
secretWord.textContent = hiddenArray.join("");

function letterChoice(event) {
  //assigns selected letter to a variable
  var keyPress = event.key;
  var keyCode = event.code;
  // Updates content on page
  //document.querySelector("#key").textContent = keyPress;

  for (i = 0; i <= wordChoice.length - 1; i++) {
    if (keyPress === wordChoiceArray[i]) {
      secretWord.textContent = keyPress;
      hiddenArray[i] = keyPress;
    }
  }

  secretWord.textContent = hiddenArray.join("");

  if (wordChoice === hiddenArray.join("")) {
    console.log("Holy Shit!!!!");
    wins++;
    keepScore(wins);
  }
}

function keepScore(wins) {
  document.querySelector("#wins").textContent = "Wins: " + wins;
}

// Adds listener for keydown event
document.addEventListener("keydown", letterChoice);
