function rollingDice(){
    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    console.log(d1);
    console.log(d2);
    for(var first = 0; first <= d1; first++){
        console.log(document.getElementById("1." + first));
        var x = document.getElementById("1." + first);
            if(x != null){
                console.log(document.getElementById("1." + first));
                x.style.color="red";
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