function rollingDice(){
    
    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var status = document.getElementById("status");
    die1.innerHTML= "";
    die2.innerHTML= "";
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
 //helps for debugging
    console.log(d1);
    console.log(d2);
    if((die1 && die2) !=null){
    for(var i = 0; i < d1; i++){
        switch(i) {
            case 0:
                die1.innerHTML= '<div class="circle"></div>';
                break;
            case 1:
                die1.innerHTML = 'Two';
                break;
            case 2:
                die1.innerHTML = 'Three';
                break;
            case 3:
                die1.innerHTML = 'Four';
                break;
            case 4:
                die1.innerHTML = 'Five';
                break;
            case 5:
                die1.innerHTML = 'Six';
                break;
            default:
                die1.innerHTML = 'More than one';
    }
}
    for(var i = 0; i < d2; i++){
        die2.innerHTML= die2.innerHTML+'<div class="circle"></div>';
    }
}
    var diceTotal = d1 + d2;

    status.innerHTML = "You rolled "+diceTotal+".";
    if(d1 == d2){
        status.innerHTML += " DOUBLES! You get a free turn!!";
    }
}
