
//variabili di preparazione
let emailEl = document.getElementById("email");

let emailBtnEl = document.getElementById("emailBtn");

let emailContainerEl = document.getElementById("emailContainer");

let approvedUsers = ["giancarlo@gmail.com", "alice@gmail.com", "giorgio@gmail.com", "gatto96@hotmail.it", "serpe@yahoo.gif"];


//controllo al click
emailBtnEl.addEventListener('click', function () {

    //inizio ciclo di controllo
    for ( let i = 0; i < approvedUsers.length; i++) {
        
        //if di controllo della mail inserita
        if(emailEl.value == approvedUsers[i]){
            
            emailContainerEl.innerText = "Benvenuto!";

        }
            
    }
});



//array di dadi

let diceImgs = ["img/1.png", "img/2.png", "img/3.png", "img/4.png", "img/5.png", "img/6.png"];

let playerDiceEl = document.getElementById("playerDice");

let pcDiceEl = document.getElementById("pcDice");

let diceBtnEl = document.getElementById("diceBtn");

let resultEl = document.getElementById("result");

let diceContainerEl = document.getElementById("dice-container");


//tutto questo dentro un click event listener -- con la variabile del bottone

diceBtnEl.addEventListener('click', function() {

    let userNumber = Math.floor(Math.random() * 6 + 1);
    
    let pcNumber = Math.floor(Math.random() * 6 + 1);
    
    if(userNumber > pcNumber) {
        resultEl.innerText = "Hai vinto!";
    } else if(userNumber < pcNumber){
        resultEl.innerText = "Hai perso, ritenta!";
    } else {
        
        resultEl.innerText = "Pareggio!";
    }
    
    playerDiceEl.src = diceImgs[userNumber - 1];
    pcDiceEl.src = diceImgs[pcNumber - 1];

    diceContainerEl.style.display = "flex";

})







