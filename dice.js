function rollingDice(){
    
    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var status = document.getElementById("status");
    var space = document.getElementById("die12");
    space.innerHTML= "";
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    if(space !=null){
        console.log(space);
    for(var i = 0; i < d1; i++){
        console.log(i);
       space.innerHTML= space.innerHTML+'<div class="circle"></div>';
    }
}
    var diceTotal = d1 + d2;
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    status.innerHTML = "You rolled "+diceTotal+".";
    if(d1 == d2){
        status.innerHTML += " DOUBLES! You get a free turn!!";
    }
}