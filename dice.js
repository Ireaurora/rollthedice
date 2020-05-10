function rollingDice(){
    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    if(die1!=null){numbers(d1,die1);}
    if(die2!=null){numbers(d2,die2);}
    var diceTotal = d1 + d2;
    status.innerHTML = "You rolled "+diceTotal+".";
    if(d1 == d2){
        status.innerHTML += " DOUBLES! You get a free turn!!";
    }
}
function numbers(number,die){
    die.innerHTML= "";
    var array = ["first-face","second-face","third-face","fourth-face","fifth-face","sixth-face"];
    for(var i = 0; i < array.length; i++){
        if (die.classList.contains(array[i])) {
            die.classList.remove(array[i]);
        }
    }
    switch(number) {
        case 1:
            die.classList.add("first-face")
            die.innerHTML= '<span class="circle"></span>';
            break;
        case 2:
            die.classList.add("second-face")
            die.innerHTML = '<span class="circle"></span><span class="circle"></span></div>';
            break;
        case 3:
            die.classList.add("third-face")
            die.innerHTML = '<span class="circle"></span><span class="circle"></span><span class="circle"></span>';
            break;
        case 4:
            die.classList.add("fourth-face")
            die.innerHTML = '<div class="column"><span class="circle"></span><span class="circle"></span></div><div class="column"><span class="circle"></span><span class="circle"></span></div></div>';
            break;
        case 5:
            die.classList.add("fifth-face")
            die.innerHTML = '<div class="column"><span class="circle"></span><span class="circle"></span></div><div class="column"><span class="circle"></span></div><div class="column"><span class="circle"></span><span class="circle"></span></div>';
            break;
        case 6:
            die.classList.add("sixth-face")
            die.innerHTML = '<div class="column"><span class="circle"></span><span class="circle"></span><span class="circle"></span></div><div class="column"><span class="circle"></span><span class="circle"></span><span class="circle"></span></div>';
            break;
        }
}