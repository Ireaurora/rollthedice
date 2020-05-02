function rollingDice(){
    
    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var status = document.getElementById("status");
    die1.innerHTML= "";
    die2.innerHTML= "";
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    if((die1 && die2) !=null){
    for(var i = 0; i < d2; i++){
        die1.innerHTML= die1.innerHTML+'<div class="circle"></div>';
    }
    for(var i = 0; i < d1; i++){
        die2.innerHTML= die2.innerHTML+'<div class="circle"></div>';
    }
}
    var diceTotal = d1 + d2;

    status.innerHTML = "You rolled "+diceTotal+".";
    if(d1 == d2){
        status.innerHTML += " DOUBLES! You get a free turn!!";
    }
}
