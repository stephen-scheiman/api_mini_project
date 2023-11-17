var wordChoiceList = ["orange", "door", "front", "zebra","fungus"];
var index = Math.floor(Math.random() * wordChoiceList.length);
var wordChoice = wordChoiceList[index];
var wordChoiceArray = wordChoice.split("");
var hiddenArray = [];

for (i = 0; i <= wordChoice.length - 1; i++) {
  hiddenArray[i] = `_ `;
}
secretWord.textContent = hiddenArray.join('');
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

  console.log(hiddenArray.join(""));
  secretWord.textContent = hiddenArray.join("");

  if(wordChoice === hiddenArray.join('')){
    console.log("Holy Shit!!!!");
  }
}

// Adds listener for keydown event
document.addEventListener("keydown", letterChoice);
