let words = ["caine", "masa", "romana", "calculator", "astronaut"];
let guessWrapper = document.querySelector(".guessTextWrapper");
let addWord = document.querySelector(".addWord");
let tryButton = document.querySelector(".try");
let addLetter = document.querySelector(".addLetter");
let lifeNumber = document.querySelector(".lifeNumber");
let winnerText = document.querySelector(".winnerText");
let anotherRoundButton = document.querySelector(".anotherRoundButton");
let main = document.querySelector("main");
let gameOverDiv = document.querySelector(".gameOver");
let gameOverButton = document.querySelector(".gameOverButton");

let winElement;

let guessArray = [];
let gresit = 0;
let corect = 0;
let elementList;

addWord.addEventListener("click", () => {
  guessWrapper.innerHTML="";
  guessArray = [];
  let guessWord = words[Math.floor(Math.random() * 5)];
  for (let i = 0; i < guessWord.length; i++) {
    guessArray.push(guessWord[i]);
    let divElement = document.createElement("div");
    divElement.classList.add("letter");
    let pElement = document.createElement("p");
    pElement.classList.add("litera");
    let hrElement = document.createElement("hr");

    divElement.appendChild(pElement);
    divElement.appendChild(hrElement);
    guessWrapper.appendChild(divElement);
  }
  console.log(guessArray)
  elementList = document.querySelectorAll(".litera");
  console.log(elementList)
});

tryButton.addEventListener("click", () =>{

  if(guessArray.length > 0){
     gresit = 0;
     corect = 0;
    for(let i = 0;i < guessArray.length;i++){
      if(addLetter.value === guessArray[i]){
        elementList[i].innerHTML = addLetter.value;
      }
      else{
        gresit++;
      }
    }
    for(let i = 0; i < guessArray.length; i++){
      if(elementList[i].innerHTML !== ""){
        corect++;
      }
    }
    if(corect === guessArray.length){
      addLetter.style.visibility = "hidden";
      tryButton.style.visibility = "hidden";
      addWord.style.visibility = "hidden";
      guessWrapper.style.visibility = "hidden";
      anotherRoundButton.style.visibility = "visible";
      winElement = document.createElement("p");
      winElement.innerHTML = "AI CASTIGAT FELICITARI";
      winnerText.appendChild(winElement);
      winnerText.style.display="block";
    }

    if(gresit === guessArray.length){
      if(+lifeNumber.innerHTML > 0){
        lifeNumber.innerHTML = +lifeNumber.innerHTML - 1;
      }
    }
  
  }
  anotherRoundButton.addEventListener("click", ()=>{
    addLetter.style.visibility = "visible";
      tryButton.style.visibility = "visible";
      addWord.style.visibility = "visible";
      guessWrapper.style.visibility = "visible";
      anotherRoundButton.style.visibility = "hidden";
      winnerText.style.display = "none";
      guessWrapper.innerHTML = "";
      winElement.innerHTML = "";
      lifeNumber.innerHTML = 10;
  })
  if(+lifeNumber.innerHTML <= 0){
    main.style.display = "none";
    gameOverDiv.style.display = "flex";
  }
  gameOverButton.addEventListener("click", () => {
    main.style.display = "flex";
    gameOverDiv.style.display = "none";
    lifeNumber.innerHTML = 10;
  })
})