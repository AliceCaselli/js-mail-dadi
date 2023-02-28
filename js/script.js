
//variabili di preparazione
let emailEl = document.getElementById("email");

let emailBtnEl = document.getElementById("emailBtn");

let approvedUsers = ["giancarlo@gmail.com", "alice@gmail.com", "giorgio@gmail.com", "gatto96@hotmail.it", "serpe@yahoo.gif"];


//controllo al click
emailBtnEl.addEventListener('click', function () {

    //inizio ciclo di controllo
    for ( let i = 0; i < approvedUsers.length; i++) {
        
        //if di controllo della mail inserita
        if(emailEl.value == approvedUsers[i]){
            
            document.writeln(
                `Benvenuto!`
            );

        }
            
    }
})


